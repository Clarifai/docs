# Model to be uploaded: https://huggingface.co/Falconsai/nsfw_image_detection

import os
import tempfile
from io import BytesIO
from typing import Iterator

import cv2
import torch
from clarifai.runners.models.model_class import ModelClass
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from PIL import Image
from transformers import AutoModelForImageClassification, ViTImageProcessor


def preprocess_image(image_bytes):
  """Fetch and preprocess image data from bytes"""
  return Image.open(BytesIO(image_bytes)).convert("RGB")


def video_to_frames(video_bytes):
  """Convert video bytes to frames"""
  # Write video bytes to a temporary file
  with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_video_file:
    temp_video_file.write(video_bytes)
    temp_video_path = temp_video_file.name
    logger.info(f"temp_video_path: {temp_video_path}")

    video = cv2.VideoCapture(temp_video_path)
    print("video opened")
    logger.info(f"video opened: {video.isOpened()}")
    while video.isOpened():
      ret, frame = video.read()
      if not ret:
        break
      # Convert the frame to byte format
      frame_bytes = cv2.imencode('.jpg', frame)[1].tobytes()
      yield frame_bytes
    video.release()


def classify_image(images, model, processor, device):
  """Classify an image using the model and processor."""
  inputs = processor(images=images, return_tensors="pt")
  inputs = {name: tensor.to(device) for name, tensor in inputs.items()}
  logits = model(**inputs).logits
  return logits


def process_concepts(logits, images, concept_protos):
  """Process the logits and return the concepts."""
  outputs = []
  for i, logit in enumerate(logits):
    output_concepts = []
    probs = torch.softmax(logit, dim=-1)
    sorted_indices = torch.argsort(probs, dim=-1, descending=True)
    for idx in sorted_indices:
      concept_protos[idx.item()].value = probs[idx].item()
      output_concepts.append(concept_protos[idx.item()])
    output = resources_pb2.Output()
    output.data.image.base64 = images[i].tobytes()
    output.data.concepts.extend(output_concepts)
    output.status.code = status_code_pb2.SUCCESS
    outputs.append(output)
  return outputs


class MyModel(ModelClass):
  """A custom runner that loads the model and classifies images using it.
  """

  def load_model(self):
    """Load the model here."""

    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    # if checkpoints section is in config.yaml file then checkpoints will be downloaded at this path during model upload time.
    checkpoint_path = os.path.join(os.path.dirname(__file__), "checkpoints")

    self.model = AutoModelForImageClassification.from_pretrained(checkpoint_path,).to(self.device)
    self.processor = ViTImageProcessor.from_pretrained(checkpoint_path)
    logger.info("Done loading!")

  def predict(self, request: service_pb2.PostModelOutputsRequest
             ) -> Iterator[service_pb2.MultiOutputResponse]:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an output.
    """

    outputs = []
    images = []
    concept_protos = request.model.model_version.output_info.data.concepts
    for input in request.inputs:
      input_data = input.data
      image = preprocess_image(image_bytes=input_data.image.base64)
      images.append(image)

    with torch.no_grad():
      logits = classify_image(images, self.model, self.processor, self.device)
      outputs = process_concepts(logits, images, concept_protos)

    return service_pb2.MultiOutputResponse(
        outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:

    if len(request.inputs) != 1:
      raise ValueError("Only one input is allowed for image models for this method.")
    concept_protos = request.model.model_version.output_info.data.concepts
    for input in request.inputs:
      input_data = input.data
      video_bytes = None
      if input_data.video.base64:
        video_bytes = input_data.video.base64
      if video_bytes:
        frame_generator = video_to_frames(video_bytes)
        for frame in frame_generator:
          image = preprocess_image(frame)
          images = [image]

          with torch.no_grad():
            logits = classify_image(images, self.model, self.processor, self.device)
            outputs = process_concepts(logits, images, concept_protos)
            yield service_pb2.MultiOutputResponse(
                outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))
      else:
        raise ValueError("Only video input is allowed for this method.")

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    for request in request_iterator:
      if request.inputs[0].data.video.base64:
        for output in self.generate(request):
          yield output
      elif request.inputs[0].data.image.base64:
        yield self.predict(request)