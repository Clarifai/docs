import os
from threading import Thread
from typing import Iterator, List, Optional

import torch
from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.models.model_builder import ModelBuilder
from clarifai.utils.logging import logger
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from google.protobuf import json_format
from transformers import (AutoModelForCausalLM, AutoTokenizer, TextIteratorStreamer)


# Custom streamer for batched text generation
class BatchTextIteratorStreamer(TextIteratorStreamer):
  """A custom streamer that handles batched text generation."""

  def __init__(self,
               batch_size: int,
               tokenizer: "AutoTokenizer",
               skip_prompt: bool = False,
               timeout: Optional[float] = None,
               **decode_kwargs):
    super().__init__(tokenizer, skip_prompt, timeout, **decode_kwargs)
    self.batch_size = batch_size
    self.token_cache = [[] for _ in range(batch_size)]
    self.print_len = [0 for _ in range(batch_size)]
    self.generate_exception = None

  def put(self, value):
    if len(value.shape) != 2:
      value = torch.reshape(value, (self.batch_size, value.shape[0] // self.batch_size))

    if self.skip_prompt and self.next_tokens_are_prompt:
      self.next_tokens_are_prompt = False
      return

    printable_texts = list()
    for idx in range(self.batch_size):
      self.token_cache[idx].extend(value[idx].tolist())
      text = self.tokenizer.decode(self.token_cache[idx], **self.decode_kwargs)

      if text.endswith("\n"):
        printable_text = text[self.print_len[idx]:]
        self.token_cache[idx] = []
        self.print_len[idx] = 0
        # If the last token is a CJK character, we print the characters.
      elif len(text) > 0 and self._is_chinese_char(ord(text[-1])):
        printable_text = text[self.print_len[idx]:]
        self.print_len[idx] += len(printable_text)
      else:
        printable_text = text[self.print_len[idx]:text.rfind(" ") + 1]
        self.print_len[idx] += len(printable_text)
      printable_texts.append(printable_text)

    self.on_finalized_text(printable_texts)

  def end(self):
    printable_texts = list()
    for idx in range(self.batch_size):
      if len(self.token_cache[idx]) > 0:
        text = self.tokenizer.decode(self.token_cache[idx], **self.decode_kwargs)
        printable_text = text[self.print_len[idx]:]
        self.token_cache[idx] = []
        self.print_len[idx] = 0
      else:
        printable_text = ""
      printable_texts.append(printable_text)

    self.next_tokens_are_prompt = True
    self.on_finalized_text(printable_texts, stream_end=True)

  def on_finalized_text(self, texts: List[str], stream_end: bool = False):
    self.text_queue.put(texts, timeout=self.timeout)
    if stream_end:
      self.text_queue.put(self.stop_signal, timeout=self.timeout)


# Helper function to create an output
def create_output(text="", code=status_code_pb2.SUCCESS):
  return resources_pb2.Output(
      data=resources_pb2.Data(text=resources_pb2.Text(raw=text)),
      status=status_pb2.Status(code=code))


# Helper function to get the inference params
def get_inference_params(request) -> dict:
  """Get the inference params from the request."""
  inference_params = {}
  if request.model.model_version.id != "":
    output_info = request.model.model_version.output_info
    output_info = json_format.MessageToDict(output_info, preserving_proto_field_name=True)
    if "params" in output_info:
      inference_params = output_info["params"]
  return inference_params


# Helper function to parse the inference params
def parse_inference_params(request):
  default_params = {
      "temperature": 0.7,
      "max_tokens": 100,
      "top_k": 50,
      "top_p": 1.0,
      "do_sample": True,
  }
  inference_params = get_inference_params(request)
  return {
      "temperature": inference_params.get("temperature", default_params["temperature"]),
      "max_tokens": int(inference_params.get("max_tokens", default_params["max_tokens"])),
      "top_k": int(inference_params.get("top_k", default_params["top_k"])),
      "top_p": inference_params.get("top_p", default_params["top_p"]),
      "do_sample": inference_params.get("do_sample", default_params["do_sample"]),
  }


class MyModel(ModelClass):
  """A custom runner that loads the model and generates text using batched inference."""

  def load_model(self):
    """Load the model here."""
    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    # Load checkpoints
    model_path = os.path.dirname(os.path.dirname(__file__))
    builder = ModelBuilder(model_path, download_validation_only=True)
    checkpoints = builder.download_checkpoints(stage="runtime")
    
    # Load model and tokenizer
    self.tokenizer = AutoTokenizer.from_pretrained(checkpoints,)
    self.tokenizer.pad_token = self.tokenizer.eos_token
    self.model = AutoModelForCausalLM.from_pretrained(
        checkpoints,
        low_cpu_mem_usage=True,
        device_map=self.device,
        torch_dtype=torch.float16,
    )
    logger.info("Done loading!")

  def predict(self,
              request: service_pb2.PostModelOutputsRequest) -> service_pb2.MultiOutputResponse:
    """This method generates outputs text for the given inputs using the model."""

    inference_params = parse_inference_params(request)

    prompts = [inp.data.text.raw for inp in request.inputs]
    inputs = self.tokenizer(prompts, return_tensors="pt", padding=True).to(self.device)

    output_tokens = self.model.generate(
        **inputs,
        max_new_tokens=inference_params["max_tokens"],
        do_sample=inference_params["do_sample"],
        temperature=inference_params["temperature"],
        top_k=inference_params["top_k"],
        top_p=inference_params["top_p"],
        eos_token_id=self.tokenizer.eos_token_id,
    )

    outputs_text = self.tokenizer.batch_decode(
        output_tokens[:, inputs['input_ids'].shape[1]:], skip_special_tokens=True)

    outputs = []
    for text in outputs_text:
      outputs.append(create_output(text=text, code=status_code_pb2.SUCCESS))

    return service_pb2.MultiOutputResponse(
        outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    """This method generates stream of outputs for the given batch of inputs using the model."""
    inference_params = parse_inference_params(request)

    prompts = [inp.data.text.raw for inp in request.inputs]
    batch_size = len(prompts)

    # Initialize the custom streamer
    streamer = BatchTextIteratorStreamer(
        batch_size=batch_size,
        tokenizer=self.tokenizer,
        skip_prompt=True,
        decode_kwargs={
            "skip_special_tokens": True
        })

    # Tokenize the inputs
    inputs = self.tokenizer(prompts, return_tensors="pt", padding=True).to(self.device)

    generation_kwargs = {
        "input_ids": inputs.input_ids,
        "attention_mask": inputs.attention_mask,
        "max_new_tokens": inference_params["max_tokens"],
        "do_sample": inference_params["do_sample"],
        "temperature": inference_params["temperature"],
        "top_k": inference_params["top_k"],
        "top_p": inference_params["top_p"],
        "eos_token_id": self.tokenizer.eos_token_id,
        "streamer": streamer,
    }

    # Start generation in a separate thread
    thread = Thread(target=self.model.generate, kwargs=generation_kwargs)
    thread.start()

    # Initialize outputs
    outputs = [create_output() for _ in range(batch_size)]

    try:
      for streamed_texts in streamer:  # Iterate over new texts generated
        for idx, text in enumerate(streamed_texts):  # Iterate over each batch
          outputs[idx].data.text.raw = text  # Append new text to each output
          outputs[idx].status.code = status_code_pb2.SUCCESS
        # Yield the current outputs
        yield service_pb2.MultiOutputResponse(
            outputs=outputs, status=status_pb2.Status(code=status_code_pb2.SUCCESS))
    finally:
      thread.join()

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    raise NotImplementedError("Stream method is not implemented for the models.")