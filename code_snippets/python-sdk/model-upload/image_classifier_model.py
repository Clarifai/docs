# Model to be uploaded: https://huggingface.co/Falconsai/nsfw_image_detection

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
from transformers import AutoModelForImageClassification, ViTImageProcessor


def preprocess_image(image_url=None, image_base64=None):
  if image_base64:
    img = Image.open(BytesIO(image_base64))
  elif image_url:
    img = Image.open(BytesIO(requests.get(image_url).content))
  return img


class MyRunner(ModelRunner):
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

    # Get the concept protos from the model.
    concept_protos = request.model.model_version.output_info.data.concepts

    outputs = []
    # TODO: parallelize this over inputs in a single request.
    for inp in request.inputs:
      output = resources_pb2.Output()

      data = inp.data

      output_concepts = []

      if data.image.base64 != b"":
        img = preprocess_image(image_base64=data.image.base64)
      elif data.image.url != "":
        img = preprocess_image(image_url=data.image.url)

      with torch.no_grad():
        inputs = self.processor(images=img, return_tensors="pt").to(self.device)
        model_output = self.model(**inputs)
        logits = model_output.logits

      probs = torch.softmax(logits, dim=-1)[0]
      sorted_indices = torch.argsort(probs, dim=-1, descending=True)
      for idx in sorted_indices:
        concept_protos[idx.item()].value = probs[idx.item()].item()
        output_concepts.append(concept_protos[idx.item()])

      output.data.concepts.extend(output_concepts)

      output.status.code = status_code_pb2.SUCCESS
      outputs.append(output)
    return service_pb2.MultiOutputResponse(outputs=outputs,)

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    raise NotImplementedError("Stream method is not implemented for image classification models.")

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    ## raise NotImplementedError
    raise NotImplementedError("Stream method is not implemented for image classification models.")