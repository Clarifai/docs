from typing import List
import os

from clarifai.runners.models.model_builder import ModelBuilder
from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.runners.utils.data_types import Image

from clarifai.runners.utils.data_utils import Param
from clarifai.utils.logging import logger

from diffusers import StableDiffusionDepth2ImgPipeline
from diffusers.utils import load_image

import torch



class StableDiffusion(OpenAIModelClass):
    """
    A Model that integrates with the Clarifai platform and uses the FluxFillPipeline for image inpainting.
    """

    client = True  # This will be set in load_model method
    model = True  # This will be set in load_model method

    def load_model(self):
        """Load the model here."""
        model_path = os.path.dirname(os.path.dirname(__file__))
        builder = ModelBuilder(model_path, download_validation_only=True)
        hf_token = builder.config["checkpoints"]["hf_token"]
        
        self.client = StableDiffusionDepth2ImgPipeline.from_pretrained("stabilityai/stable-diffusion-2-depth",
                                                                       torch_dtype=torch.float16,
                                                                       use_safetensors=True,
                                                                       token=hf_token)
        self.client.to("cuda" if torch.cuda.is_available() else "cpu")
        logger.info("stable-diffusion model loaded successfully.")
    
    
    @OpenAIModelClass.method
    def predict(self,
                prompt: str,
                image: Image = None,
                negative_prompt: str = None,
                mask: Image = None,
                strength: float = 0.8
                ) -> Image:
        """
        Predict method that uses the FluxFillPipeline to inpaint images based on the provided prompt.

        """
        if image:
            if image.url:
                image = load_image(image.url)
            elif image.bytes:
                image=image.to_pil()
        
        response = self.client(prompt=prompt,
                            image=image,
                            negative_prompt=negative_prompt,
                            strength=strength).images[0]
        
        return Image.from_pil(pil_image = response)