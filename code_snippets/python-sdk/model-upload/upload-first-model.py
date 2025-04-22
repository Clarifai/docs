from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Stream
from clarifai.utils.logging import logger
from clarifai.runners.models.model_builder import ModelBuilder
from typing import List, Optional
import os
import torch
from transformers import (AutoModelForCausalLM, AutoTokenizer, TextIteratorStreamer, pipeline)


DEFAULT_INFERENCE_PARAMS = {
    "temperature": 0.7,
    "max_new_tokens": 256,
    "top_k": 50,
    "top_p": 1.0,
    "do_sample": True,
}


class MyRunner(ModelClass):
  """A custom runner for llama-3.2-1b-instruct llm that integrates with the Clarifai platform"""

  def load_model(self):
    """Load the model here."""
    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")

    # Load checkpoints
    model_path = os.path.dirname(os.path.dirname(__file__))
    builder = ModelBuilder(model_path, download_validation_only=True)
    self.checkpoints = builder.download_checkpoints(stage="runtime")
    
    # Load model and tokenizer
    self.tokenizer = AutoTokenizer.from_pretrained(self.checkpoints,)
    self.tokenizer.pad_token = self.tokenizer.eos_token  # Set pad token to eos token
    self.model = AutoModelForCausalLM.from_pretrained(
        self.checkpoints,
        low_cpu_mem_usage=True,
        device_map=self.device,
        torch_dtype=torch.bfloat16,
    )

    self.default_inference_params = DEFAULT_INFERENCE_PARAMS
    logger.info("Done loading!")

  @ModelClass.method
  def predict(self, prompt: str = "") -> str:
    """This method generates outputs text for the given inputs using the model."""

    # prompts = [prompt]
    inputs = self.tokenizer([prompt], return_tensors="pt", padding=True).to(self.device)

    output_tokens = self.model.generate(
        **inputs,
        max_new_tokens=self.default_inference_params["max_new_tokens"],
        do_sample=self.default_inference_params["do_sample"],
        temperature=self.default_inference_params["temperature"],
        top_k=self.default_inference_params["top_k"],
        top_p=self.default_inference_params["top_p"],
        eos_token_id=self.tokenizer.eos_token_id,
    )

    outputs_text = self.tokenizer.batch_decode(
        output_tokens[:, inputs['input_ids'].shape[1]:], skip_special_tokens=True)

    return outputs_text[0]

  @ModelClass.method
  def generate(self, prompt: str = '') -> Stream[str]:
    """Example yielding a whole batch of streamed stuff back."""
    
    inputs = self.tokenizer([prompt], return_tensors="pt", padding=True).to(self.device)

    output_tokens = self.model.generate(
        **inputs,
        max_new_tokens=self.default_inference_params["max_new_tokens"],
        do_sample=self.default_inference_params["do_sample"],
        temperature=self.default_inference_params["temperature"],
        top_k=self.default_inference_params["top_k"],
        top_p=self.default_inference_params["top_p"],
        eos_token_id=self.tokenizer.eos_token_id,
    )

    outputs_text = self.tokenizer.batch_decode(
        output_tokens[:, inputs['input_ids'].shape[1]:], skip_special_tokens=True)

    for token in outputs_text[0]:  
      yield token

  @ModelClass.method
  def chat(self,
           messages: List[dict],
           max_tokens: int = DEFAULT_INFERENCE_PARAMS["max_new_tokens"],
           temperature: float = DEFAULT_INFERENCE_PARAMS["temperature"],
           top_p: int = DEFAULT_INFERENCE_PARAMS["top_p"]) -> Stream[dict]:
    """Chat with the model."""
    pipe = pipeline(
        "text-generation",
        model=self.checkpoints,
        torch_dtype=torch.bfloat16,
        device_map="auto",
    )
    for msg in messages:
      if "role" not in msg and "content" not in msg:
        raise ValueError("Message must contain 'role' and 'content' keys.")
      if msg["role"] not in ["user", "assistant", "system"]:
        raise ValueError("Role must be 'user', 'assistant', or 'system'.")
      if not isinstance(msg["content"], str):
        raise ValueError("Content must be a string.")
        
    outputs = pipe(
        messages,
        max_new_tokens=max_tokens,
        do_sample=self.default_inference_params["do_sample"],
        temperature=temperature,
        top_k=self.default_inference_params["top_k"],
        top_p=top_p,
        eos_token_id=self.tokenizer.eos_token_id,
    )
    output_tokens = outputs[0]["generated_text"][-1]

    for token in output_tokens['content']:  
      yield token


  def test(self):
    """Test the model here."""
    try:
      print("Testing predict...")
      # Test predict
      print(self.predict(prompt="What is the capital of India?",))
    except Exception as e:
      print("Error in predict", e)

    try:
      print("Testing generate...")
      # Test generate
      for each in self.generate(prompt="What is the capital of India?",):
        print(each, end="")
      print()
    except Exception as e:
      print("Error in generate", e)

    try:
      print("Testing chat...")
      messages = [
        {"role": "system", "content": "You are an helpful assistant."},
        {"role": "user", "content": "What is the capital of India?"},
      ]
      for each in self.chat(messages=messages,):
        print(each, end="")
      print()
    except Exception as e:
      print("Error in generate", e)