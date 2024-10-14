# Model to be uploaded: https://huggingface.co/casperhansen/llama-3-8b-instruct-awq

import os
from threading import Thread
from typing import Iterator

import torch
from clarifai.runners.models.model_runner import ModelRunner
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from google.protobuf import json_format
from transformers import (AutoModelForCausalLM, AutoTokenizer, TextIteratorStreamer)


class MyRunner(ModelRunner):
  """A custom runner that loads the Llama model and generates text using it.
  """

  def load_model(self):
    """Load the model here."""
    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    # if checkpoints section is in config.yaml file then checkpoints will be downloaded at this path during model upload time.
    checkpoints = os.path.join(os.path.dirname(__file__), "checkpoints")

    self.tokenizer = AutoTokenizer.from_pretrained(checkpoints)
    self.model = AutoModelForCausalLM.from_pretrained(
        checkpoints,
        low_cpu_mem_usage=True,
        device_map=self.device,
        torch_dtype=torch.bfloat16,
    )
    # Create a streamer for streaming the output of the model
    self.streamer = TextIteratorStreamer(
        self.tokenizer, skip_prompt=True, skip_special_tokens=True)
    logger.info("Done loading!")

  def predict(self,
              request: service_pb2.PostModelOutputsRequest) -> service_pb2.MultiOutputResponse:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an outputs the response using llama model.
    """

    # TODO: Could cache the model and this conversion if the hash is the same.
    model = request.model
    output_info = {}
    if request.model.model_version.id != "":
      output_info = json_format.MessageToDict(
          model.model_version.output_info, preserving_proto_field_name=True)

    outputs = []
    # TODO: parallelize this over inputs in a single request.
    for inp in request.inputs:
      data = inp.data

      # Optional use of output_info
      inference_params = {}
      if "params" in output_info:
        inference_params = output_info["params"]

      temperature = inference_params.get("temperature", 0.7)
      max_tokens = inference_params.get("max_tokens", 100)
      max_tokens = int(max_tokens)

      top_k = inference_params.get("top_k", 40)
      top_k = int(top_k)
      top_p = inference_params.get("top_p", 1.0)

      if data.text.raw != "":
        prompt = data.text.raw

        inputs = self.tokenizer([prompt], return_tensors="pt").to(self.device)
        output_tokens = self.model.generate(
            **inputs,
            eos_token_id=self.tokenizer.eos_token_id,
            do_sample=True,
            temperature=temperature,
            max_new_tokens=max_tokens,
            top_p=top_p,
            top_k=top_k,
        )
        llm_outputs = self.tokenizer.batch_decode(
            output_tokens[:, inputs['input_ids'].shape[1]:], skip_special_tokens=True)

        output = resources_pb2.Output()
        output.data.text.raw = llm_outputs[0]

      output.status.code = status_code_pb2.SUCCESS
      outputs.append(output)
    return service_pb2.MultiOutputResponse(outputs=outputs,)

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    """Example yielding a whole batch of streamed stuff back."""

    # TODO: Could cache the model and this conversion if the hash is the same.
    model = request.model
    output_info = {}
    if request.model.model_version.id != "":
      output_info = json_format.MessageToDict(
          model.model_version.output_info, preserving_proto_field_name=True)

    # TODO: parallelize this over inputs in a single request.
    for inp in request.inputs:
      data = inp.data

      # Optional use of output_info
      inference_params = {}
      if "params" in output_info:
        inference_params = output_info["params"]

      temperature = inference_params.get("temperature", 0.7)
      max_tokens = inference_params.get("max_tokens", 100)
      max_tokens = int(max_tokens)
      top_p = inference_params.get("top_p", 1.0)

      top_k = inference_params.get("top_k", 40)
      top_k = int(top_k)

      kwargs = dict(temperature=temperature, top_p=top_p, max_new_tokens=max_tokens, top_k=top_k)

      if data.text.raw != "":
        prompt = data.text.raw

        inputs = self.tokenizer(prompt, return_tensors="pt").input_ids.cuda()
        generation_kwargs = dict(input_ids=inputs, streamer=self.streamer, **kwargs)
        thread = Thread(target=self.model.generate, kwargs=generation_kwargs)
        thread.start()

        for new_text in self.streamer:
          output = resources_pb2.Output()

          output.data.text.raw = new_text
          output.status.code = status_code_pb2.SUCCESS
          result = service_pb2.MultiOutputResponse(
              status=status_pb2.Status(
                  code=status_code_pb2.SUCCESS,
                  description="Success",
              ),
              outputs=[output],
          )
          yield result
        thread.join()

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    """Example yielding a whole batch of streamed stuff back."""
    output_info = {}
    for ri, request in enumerate(request_iterator):
      if ri == 0:  # only first request has model information.
        model = request.model
        if request.model.model_version.id != "":
          output_info = json_format.MessageToDict(
              model.model_version.output_info, preserving_proto_field_name=True)
          # Optional use of output_info
          inference_params = {}
          if "params" in output_info:
            inference_params = output_info["params"]
      # TODO: parallelize this over inputs in a single request.
      for inp in request.inputs:
        data = inp.data

        # Optional use of output_info
        inference_params = {}
        if "params" in output_info:
          inference_params = output_info["params"]

        temperature = inference_params.get("temperature", 0.7)
        max_tokens = inference_params.get("max_tokens", 100)
        max_tokens = int(max_tokens)
        top_p = inference_params.get("top_p", 1.0)

        top_k = inference_params.get("top_k", 40)
        top_k = int(top_k)

        kwargs = dict(temperature=temperature, top_p=top_p, max_new_tokens=max_tokens, top_k=top_k)

        if data.text.raw != "":
          prompt = data.text.raw

          inputs = self.tokenizer(prompt, return_tensors="pt").input_ids.cuda()
          generation_kwargs = dict(input_ids=inputs, streamer=self.streamer, **kwargs)
          thread = Thread(target=self.model.generate, kwargs=generation_kwargs)
          thread.start()

          for new_text in self.streamer:
            output = resources_pb2.Output()

            output.data.text.raw = new_text
            output.status.code = status_code_pb2.SUCCESS
            result = service_pb2.MultiOutputResponse(
                status=status_pb2.Status(
                    code=status_code_pb2.SUCCESS,
                    description="Success",
                ),
                outputs=[output],
            )
            yield result
          thread.join()