import os
import tempfile
from typing import List, Iterator
from io import BytesIO
import cv2
import torch
from transformers import AutoModelForImageClassification, ViTImageProcessor

from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Image,  Concept, Video
from clarifai.runners.models.model_builder import ModelBuilder

from PIL import Image as PILImage


def video_to_frames(video_bytes):
  """Convert video bytes to frames."""
  frames = []
  with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_video_file:
    temp_video_file.write(video_bytes)
    temp_video_path = temp_video_file.name

    video = cv2.VideoCapture(temp_video_path)
    while video.isOpened():
      ret, frame = video.read()
      if not ret:
        break
      frame_bytes = cv2.imencode('.jpg', frame)[1].tobytes()
      frames.append(frame_bytes)
    video.release()
  return frames

def preprocess_image(image_bytes):
  """Convert image bytes into RGB format suitable for model processing
  Args:
      image_bytes: Raw image data in bytes format
  Returns:
      PIL Image object in RGB format ready for model input
  """
  return PILImage.open(BytesIO(image_bytes)).convert("RGB")

def process_concepts( logits, model_labels):
  """Process logits and map them to concepts."""
  outputs = []
  for logit in logits:
    probs = torch.softmax(logit, dim=-1)
    sorted_indices = torch.argsort(probs, dim=-1, descending=True)
    output_concepts = []
    for idx in sorted_indices:
      concept = Concept(id = model_labels[idx.item()],name=model_labels[idx.item()], value=probs[idx].item())
      output_concepts.append(concept)
    outputs.append(output_concepts)
  return outputs


class ImageClassifierModel(ModelClass):
  """A custom runner that classifies images and outputs concepts."""

  def load_model(self):
    """Load the model and processor."""

    model_path = os.path.dirname(os.path.dirname(__file__))
    builder = ModelBuilder(model_path, download_validation_only=True)
    checkpoints = builder.download_checkpoints(stage="runtime")

    self.device = 'cuda' if torch.cuda.is_available() else 'cpu'

    self.model = AutoModelForImageClassification.from_pretrained(checkpoints,).to(self.device)
    self.model_labels = self.model.config.id2label
    self.processor = ViTImageProcessor.from_pretrained(checkpoints)

  @ModelClass.method
  def predict(self, image: Image) -> List[List[Concept]]:
    """Predict concepts for a list of images."""
    pil_image = preprocess_image(image.bytes)
    inputs = self.processor(images=pil_image, return_tensors="pt")
    inputs = {name: tensor.to(self.device) for name, tensor in inputs.items()}
    with torch.no_grad():
      logits = self.model(**inputs).logits
    return process_concepts(logits, self.model_labels)

  @ModelClass.method
  def generate(self, video: Video) -> Iterator[List[Concept]]:
      """Generate concepts for frames extracted from a video."""
      video_bytes = video.bytes
      frame_generator = video_to_frames(video_bytes)
      for frame in frame_generator:
          image = preprocess_image(frame)
          inputs = self.processor(images=image, return_tensors="pt")
          inputs = {name: tensor.to(self.device) for name, tensor in inputs.items()}
          with torch.no_grad():
              logits = self.model(**inputs).logits
              yield process_concepts(logits, self.model_labels)  # Yield concepts for each frame


  @ModelClass.method
  def stream_image(self, image_stream: Iterator[Image]) -> Iterator[List[Concept]]:
      """Stream process image inputs."""
      for image in image_stream:
          result = self.predict(image)
          yield result

  @ModelClass.method
  def stream_video(self, video_stream: Iterator[Video]) -> Iterator[List[Concept]]:
      """Stream process video inputs."""
      for video in video_stream:
          for frame_result in self.generate(video):
              yield frame_result