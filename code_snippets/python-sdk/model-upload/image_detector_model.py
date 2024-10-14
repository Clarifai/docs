# Model to be uploaded: https://huggingface.co/facebook/detr-resnet-50

import os
from io import BytesIO
from typing import Iterator

import requests
import torch
from clarifai.runners.models.model_runner import ModelRunner
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2
from PIL import Image
from transformers import DetrForObjectDetection, DetrImageProcessor


def preprocess_image(image_url=None, image_base64=None):
  if image_base64:
    img = Image.open(BytesIO(image_base64))
  elif image_url:
    img = Image.open(BytesIO(requests.get(image_url).content))
  return img


class MyRunner(ModelRunner):
  """A custom runner that adds "Hello World" to the end of the text and replaces the domain of the
  image URL as an example.
  """

  def load_model(self):
    """Load the model here."""
    checkpoint_path = os.path.join(os.path.dirname(__file__), "checkpoints")
    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    self.model = DetrForObjectDetection.from_pretrained(
        checkpoint_path, revision="no_timm").to(self.device)
    self.processor = DetrImageProcessor.from_pretrained(checkpoint_path, revision="no_timm")
    logger.info("Done loading!")

  def predict(self, request: service_pb2.PostModelOutputsRequest
             ) -> Iterator[service_pb2.MultiOutputResponse]:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an output.
    """

    # Get the concept protos from the model.
    concept_protos = request.model.model_version.output_info.data.concepts

    outputs = []
    # TODO: parallelize this over inputs in a single request.
    for inp in request.inputs:
      output = resources_pb2.Output()

      data = inp.data

      output_regions = []

      if data.image.base64 != b"":
        img = preprocess_image(image_base64=data.image.base64)
      elif data.image.url != "":
        img = preprocess_image(image_url=data.image.url)

      with torch.no_grad():
        inputs = self.processor(images=img, return_tensors="pt").to(self.device)
        model_output = self.model(**inputs)

      # convert outputs (bounding boxes and class logits) to COCO API
      # let's only keep detections with score > 0.7 (You can set it to any other value)
      target_sizes = torch.tensor([img.size[::-1]])
      results = self.processor.post_process_object_detection(
          model_output, target_sizes=target_sizes, threshold=0.7)[0]

      width, height = img.size
      for score, label_idx, box in zip(results["scores"], results["labels"], results["boxes"]):
        # Normalize bounding box
        x_min, y_min, x_max, y_max = box

        top_row = round(y_min.item() / height, 2)
        left_col = round(x_min.item() / width, 2)
        bottom_row = round(y_max.item() / height, 2)
        right_col = round(x_max.item() / width, 2)

        output_region = resources_pb2.Region()
        output_region.id = str(label_idx.item())
        output_region.value = score.item()

        concept_protos[label_idx.item()].value = score.item()
        output_region.data.concepts.add(concept_protos[label_idx.item()])

        output_region.region_info.bounding_box.top_row = top_row
        output_region.region_info.bounding_box.left_col = left_col
        output_region.region_info.bounding_box.bottom_row = bottom_row
        output_region.region_info.bounding_box.right_col = right_col

        output_regions.append(output_region)

      output.data.regions.extend(output_regions)

      output.status.code = status_code_pb2.SUCCESS
      outputs.append(output)
    return service_pb2.MultiOutputResponse(outputs=outputs,)

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    raise NotImplementedError("Stream method is not implemented for image detection models.")

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    raise NotImplementedError("Stream method is not implemented for image detection models.")