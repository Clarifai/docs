import os
from typing import Dict, Union
from clarifai.models.model_serving.model_config import *

import torch
from transformers import AutoTokenizer
import transformers

class InferenceModel(TextToText):
  """User model inference class."""

  def __init__(self) -> None:
    """
    Load inference time artifacts that are called frequently .e.g. models, tokenizers, etc.
    in this method so they are loaded only once for faster inference.
    """
    # current directory
    self.base_path = os.path.dirname(__file__)
    # where you save hf checkpoint in your working dir e.i. `your_model_dir`
    model_path = os.path.join(self.base_path, "checkpoint")
    self.tokenizer = AutoTokenizer.from_pretrained(model_path)
    self.pipeline = transformers.pipeline(
        "text-generation",
        model=model_path,
        torch_dtype=torch.float16,
        device_map="auto",
    )

  def predict(self, input_data: list,
              inference_parameters: Dict[str, Union[str, float, int]]) -> list:
    """ Custom prediction function for `text-to-text` (also called as `text generation`) model.

    Args:
      input_data (List[str]): List of text
      inference_parameters (Dict[str, Union[str, float, int]]): your inference parameters

    Returns:
      list of TextOutput

    """
    output_sequences = self.pipeline(
        input_data,
        eos_token_id=self.tokenizer.eos_token_id,
        **inference_parameters)

    # wrap outputs in Clarifai defined output
    return [TextOutput(each[0]) for each in output_sequences]