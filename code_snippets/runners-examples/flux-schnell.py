import os
from typing import List

from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_utils import Param
from clarifai.runners.utils.data_types import Image
from clarifai.runners.models.model_builder import ModelBuilder

from diffusers import FluxPipeline
import torch


class TextToImageModel(ModelClass):
  """
  A custom runner for the FLUX model that integrates with the Clarifai platform.
  """

  def load_model(self):
    """Load the model here."""
    # "black-forest-labs/FLUX.1-schnell"
    
    self.device = "cuda"
    
    model_path = os.path.dirname(os.path.dirname(__file__))
    builder = ModelBuilder(model_path, download_validation_only=True)
    checkpoints = builder.download_checkpoints(stage="runtime")
    # load model and scheduler
    self.pipeline = FluxPipeline.from_pretrained(
      checkpoints,
      torch_dtype=torch.bfloat16
    )
    
    self.pipeline = self.pipeline.to(self.device)

  @ModelClass.method
  def predict(
    self,
    prompt: str,
    num_inference_steps: int = Param(default=28, description="The number of denoising steps. More denoising steps usually lead to a higher quality image at the expense of slower inference."),
    guidance_scale: float = Param(default=3.5, description="The `guidance_scale` controls how strongly the model follows the conditioning input during generation."),
    negative_prompt: str = Param(default="", description="The prompt to guide what to not include in image generation. Ignored when not using guidance (guidance_scale < 1)"),
    true_cfg_scale: float = Param(default=1.0, description="When > 1.0 and a provided negative_prompt, enables true classifier-free guidance"),
    height: int = Param(default=1024, description="The height in pixels of the generated image. This is set to 1024 by default for the best results."),
    width: int = Param(default=1024, description="The width in pixels of the generated image. This is set to 1024 by default for the best results."),
    max_sequence_length: int = Param(default=256, description="Maximum sequence length to use with the prompt"),
    seed: int = Param(default=None, description="Seed value to make generation deterministic."),
    # No need
    sigmas: List[float] = None,
  ) -> Image:
    
    image = self.pipeline(
        prompt=prompt,
        negative_prompt=negative_prompt,
        guidance_scale=guidance_scale,
        num_inference_steps=num_inference_steps,
        max_sequence_length=max_sequence_length,
        width=width,
        height=height,
        true_cfg_scale=true_cfg_scale,
        generator=torch.Generator("cpu").manual_seed(seed) if seed else None,
        sigmas=sigmas,
    ).images[0]
    
    # this is important, delete all model cache to avoid OOM
    torch.cuda.empty_cache()
    
    return Image.from_pil(image)
  
  
  @ModelClass.method
  def create(
    self,
    prompt: List[str],
    prompt_2: List[str] = None,
    negative_prompt: List[str] = None,
    negative_prompt_2: List[str] = None,
    true_cfg_scale: float = 1.0,
    height: int = None,
    width: int = None,
    max_sequence_length: int = 256,
    num_inference_steps: int = 28,
    guidance_scale: float = 3.5,
    seed: int = None,
    sigmas: List[float] = None,
  ) -> List[Image]:
    """
    Generate an image from the given prompt using the FLUX model.
    Args:
      * prompt (`List[str]`): The prompt or prompts to guide the image generation.
      * prompt_2 (`List[str]`, *optional*): The prompt to be sent to `tokenizer_2` and `text_encoder_2`. If not defined, `prompt` is will be used instead.
      * negative_prompt (`List[str]`, *optional*): The prompt to guide what to not include in image generation. Ignored when not using guidance (guidance_scale < 1).
      * negative_prompt_2 (`List[str]`, *optional*): The negative_prompt to be sent to `tokenizer_2` and `text_encoder_2`. If not defined, `negative_prompt` is will be used instead.
      * height (`int`, *optional*, defaults to model.unet.config.sample_size * model.vae_scale_factor): The height in pixels of the generated image. This is set to 1024 by default for the best results.
      * width (`int`, *optional*, defaults to model.unet.config.sample_size * model.vae_scale_factor): The width in pixels of the generated image. This is set to 1024 by default for the best results.
      * num_inference_steps (`int`, *optional*, defaults to 28): The number of denoising steps. More denoising steps usually lead to a higher quality image at the expense of slower inference.
      * guidance_scale (`float`, *optional*, defaults to 3.5):
          Guidance scale as defined in [Classifier-Free Diffusion Guidance](https://arxiv.org/abs/2207.12598).
          `guidance_scale` is defined as `w` of equation 2. of [Imagen
          Paper](https://arxiv.org/pdf/2205.11487.pdf). Guidance scale is enabled by setting `guidance_scale >
          1`. Higher guidance scale encourages to generate images that are closely linked to the text `prompt`,
          usually at the expense of lower image quality.
      * seed (`int`, *optional*, defaults to None):
          Seed value passed to `torch.Generator("cpu").manual_seed(seed)` (see more [torch generator(s)](https://pytorch.org/docs/stable/generated/torch.Generator.html)) to make generation deterministic.
      * sigmas (`List[float]`, *optional*): Custom sigmas to use for the denoising process with schedulers which support a `sigmas` argument in their `set_timesteps` method. If not defined, the default behavior when `num_inference_steps` is passed will be used.
      * max_sequence_length (`int` defaults to `256`): Maximum sequence length to use with the prompt.
    
    (see more at this [doc](https://huggingface.co/docs/diffusers/v0.32.2/en/api/pipelines/flux#diffusers.FluxPipeline.__call__))
    """
    assert isinstance(prompt, list), ValueError("prompt must be a list of string")
    assert len(prompt) <= 4, ValueError(
        f"The provided prompt length ({len(prompt)}) exceeds the maximum limit (4). Please reduce the number of prompts in `prompt`.")
    images = self.pipeline(
        prompt=prompt,
        prompt_2=prompt_2,
        negative_prompt=negative_prompt,
        negative_prompt_2=negative_prompt_2,
        guidance_scale=guidance_scale,
        num_inference_steps=num_inference_steps,
        max_sequence_length=max_sequence_length,
        width=width,
        height=height,
        true_cfg_scale=true_cfg_scale,
        generator=torch.Generator("cpu").manual_seed(seed) if seed else None,
        sigmas=sigmas,
    ).images
    
    # this is important, delete all model cache to avoid OOM
    torch.cuda.empty_cache()
    
    return [Image.from_pil(image) for image in images]
  

  def test(self):
    """ 
    Test cases only executed when running `clarifai model test-locally`
    """
    image = self.predict(
    prompt="A Ghibli animated orange cat, panicked about a deadline, sits in front of a Banana-brand laptop.", 
    negative_prompt="Ugly, cute", guidance_scale=7)
    print(image)

    images = self.create(
        prompt=["A Ghibli animated orange cat, panicked about a deadline, sits in front of a Banana-brand laptop."]*3, 
        negative_prompt=["Ugly, cute"]*2, guidance_scale=7)
    print(images)