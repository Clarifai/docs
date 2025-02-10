# Model to be uploaded: https://huggingface.co/facebook/detr-resnet-50

import os
import tempfile
from io import BytesIO
from typing import Iterator
import time

import cv2
import torch
from clarifai.runners.models.model_class import ModelClass
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from PIL import Image
from transformers import DetrForObjectDetection, DetrImageProcessor

import os
import tempfile
from io import BytesIO
from typing import Iterator

import cv2
import torch
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from PIL import Image
from transformers import DetrForObjectDetection, DetrImageProcessor


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


def detect_objects(images, model, processor, device):
  model_inputs = processor(images=images, return_tensors="pt").to(device)
  model_inputs = {name: tensor.to(device) for name, tensor in model_inputs.items()}
  model_output = model(**model_inputs)
  results = processor.post_process_object_detection(model_output)
  return results


def process_bounding_boxes(results, images, concept_protos, threshold, model_labels):
  outputs = []
  for i, result in enumerate(results):
    image = images[i]
    width, height = image.size
    output_regions = []
    for score, label_idx, box in zip(result["scores"], result["labels"], result["boxes"]):
      if score > threshold:
        xmin, ymin, xmax, ymax = box
        xmin, ymin, xmax, ymax = xmin, ymin, xmax, ymax
        output_region = resources_pb2.Region(region_info=resources_pb2.RegionInfo(
            bounding_box=resources_pb2.BoundingBox(
                top_row=ymin,
                left_col=xmin,
                bottom_row=ymax,
                right_col=xmax,
            ),))
        label = model_labels[label_idx.item()]
        concept_protos[label_idx.item()].value = score.item()
        concept_protos[label_idx.item()].name = label
        output_region.data.concepts.append(concept_protos[label_idx.item()])
        output_regions.append(output_region)
    output = resources_pb2.Output()
    output.data.regions.extend(output_regions)
    output.status.code = status_code_pb2.SUCCESS
    outputs.append(output)
  return outputs


class MyModel(ModelClass):
  """A custom runner that adds "Hello World" to the end of the text and replaces the domain of the
  image URL as an example.
  """

  def load_model(self):
    """Load the model here."""
    checkpoint_path = os.path.join(os.path.dirname(__file__), "checkpoints")
    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    self.model = DetrForObjectDetection.from_pretrained(checkpoint_path,).to(self.device)
    self.processor = DetrImageProcessor.from_pretrained(checkpoint_path,)
    self.model.eval()
    self.threshold = 0.9
    self.model_labels = self.model.config.id2label
    self.concept_protos = None

    logger.info("Done loading!")

  def predict(self, request: service_pb2.PostModelOutputsRequest
             ) -> Iterator[service_pb2.MultiOutputResponse]:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an output.
    """
    outputs = []
    images = []
    if not self.concept_protos:
      self.concept_protos = request.model.model_version.output_info.data.concepts
    for input in request.inputs:
      input_data = input.data

      image_bytes = input_data.image.base64
      image = preprocess_image(image_bytes=image_bytes)
      images.append(image)

    with torch.no_grad():
      results = detect_objects(images, self.model, self.processor, self.device)

      # convert outputs (bounding boxes and class logits) to COCO API
      # let's only keep detections with score > 0.7 (You can set it to any other value)
      outputs = process_bounding_boxes(results, images, self.concept_protos, self.threshold,
                                       self.model_labels)
      for oi, out in enumerate(outputs):
        out.input.id = request.inputs[oi].id
      return service_pb2.MultiOutputResponse(
          outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    if len(request.inputs) != 1:
      raise ValueError("Only one input is allowed for image models for this method.")
    if not self.concept_protos:
      self.concept_protos = request.model.model_version.output_info.data.concepts
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
            results = detect_objects(images, self.model, self.processor, self.device)
            outputs = process_bounding_boxes(results, images, self.concept_protos, self.threshold,
                                             self.model_labels)
            for out in outputs:
              out.input.id = input_id
            yield service_pb2.MultiOutputResponse(
                outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))
      else:
        raise ValueError("Only video input is allowed for this method.")

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    last_t = time.time()
    for request in request_iterator:
      if request.inputs[0].data.video.base64:
        for output in self.generate(request):
          yield output
      elif request.inputs[0].data.image.base64:
        yield self.predict(request)
        duration = time.time() - last_t
        logger.info(f"Time taken for one frame: {duration}")
      last_t = time.time()