import os
from io import BytesIO

# Third-party imports
import torch
from PIL import Image as PILImage
from transformers import AutoTokenizer, AutoProcessor, AutoModelForImageTextToText

# Clarifai imports
from clarifai.runners.models.model_builder import ModelBuilder
from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Image
from clarifai.runners.utils.data_utils import Param
from clarifai.utils.logging import logger

DEFAULT_PROMPT = """Extract the text from the above document as if you were reading it naturally. Return the tables in html format. Return the equations in LaTeX representation. If there is an image in the document and image caption is not present, add a small description of the image inside the <img></img> tag; otherwise, add the image caption inside <img></img>. Watermarks should be wrapped in brackets. Ex: <watermark>OFFICIAL COPY</watermark>. Page numbers should be wrapped in brackets. Ex: <page_number>14</page_number> or <page_number>9/22</page_number>. Prefer using ☐ and ☑ for check boxes."""


def preprocess_image(image_bytes: bytes) -> PILImage:
    """Convert image bytes to PIL Image."""
    return PILImage.open(BytesIO(image_bytes)).convert("RGB")


class MyRunner(ModelClass):
    """A custom runner that loads the OCR model and runs it on the input image."""

    def load_model(self):
        """Load the model here."""

        model_path = os.path.dirname(os.path.dirname(__file__))
        builder = ModelBuilder(model_path, download_validation_only=True)
        checkpoint_path = builder.download_checkpoints(stage="runtime")

        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        logger.info(f"Running on device: {self.device}")

        self.model = AutoModelForImageTextToText.from_pretrained(checkpoint_path).to(
            self.device
        )
        self.model.eval()
        self.tokenizer = AutoTokenizer.from_pretrained(checkpoint_path)
        self.processor = AutoProcessor.from_pretrained(checkpoint_path)

        logger.info("Done loading!")

    @ModelClass.method
    def predict(
        self,
        image: Image,
        prompt: str = Param(
            default=DEFAULT_PROMPT, description="The prompt to use for the OCR model."
        ),
        max_new_tokens: int = Param(
            default=512,
            description="The maximum number of tokens to generate. Shorter token lengths will provide faster performance.",
        ),
    ) -> str:
        """This is the method that will be called when the runner is run. It takes in an input and returns an output."""
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "image_url": f"data:image/png;base64,{image.bytes}",
                    },
                    {"type": "text", "text": prompt},
                ],
            },
        ]
        image = preprocess_image(image.bytes)
        text = self.processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True
        )
        inputs = self.processor(
            text=[text], images=[image], padding=True, return_tensors="pt"
        )
        inputs = inputs.to(self.model.device)

        output_ids = self.model.generate(
            **inputs, max_new_tokens=max_new_tokens, do_sample=False
        )
        generated_ids = [
            output_ids[len(input_ids) :]
            for input_ids, output_ids in zip(inputs.input_ids, output_ids)
        ]

        output_text = self.processor.batch_decode(
            generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=True
        )
        return output_text[0]

    def test(self):
        """Test the model with a sample image."""
        import requests  # Import moved here as it's only used for testing

        # Load a sample image from the IAM database
        url = "https://dl.a9t9.com/ocr/solarcell.jpg"
        image = Image(bytes=requests.get(url).content)
        # image = Image.from_url(url)
        generated_text = self.predict(image)
        # Log the detected text
        logger.info(f"Detected text:\n{generated_text}")