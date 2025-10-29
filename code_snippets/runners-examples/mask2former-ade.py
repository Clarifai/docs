import os

from typing import Iterator, List, Tuple

from clarifai.runners.models.visual_detector_class import VisualDetectorClass
from clarifai.runners.utils import data_types as dt
from clarifai.utils.logging import logger

import yaml
import torch
from PIL import Image as PILImage
from transformers import AutoImageProcessor, Mask2FormerForUniversalSegmentation 


ROOT = os.path.dirname(__file__)


class MyRunner(VisualDetectorClass):
  
  def _load_concepts(self, config_path, name, model_path):
    
    with open(config_path, "r") as f:
      data = yaml.safe_load(f)
    
    # Map Clarifai concept name to id and reverse
    self.conceptid2name = {each["id"] : each["name"] for each in data.get("concepts", [])}
    self.conceptname2id = {each["name"] : each["id"] for each in data.get("concepts", [])}
  
  def load_model(self):
    """Load the model here."""
    checkpoint_path = "facebook/mask2former-swin-tiny-ade-semantic"
    self.device = 'cuda' #if torch.cuda.is_available() else 'cpu'
    logger.info(f"Running on device: {self.device}")
    self.model = Mask2FormerForUniversalSegmentation.from_pretrained(
        checkpoint_path, trust_remote_code=True).to(self.device)
    self.processor = AutoImageProcessor.from_pretrained(checkpoint_path, trust_remote_code=True)
    self.model.eval()
    # Load clarifai concept
    config_path = os.path.join(ROOT, "../config.yaml")
    self._load_concepts(config_path, "mask2former-ade", checkpoint_path)
        
    logger.info("Done loading!")
  
  
  @VisualDetectorClass.method
  def model_predict(
    self, 
    images: List[PILImage.Image]
  ) -> List[List[dt.Region]]:
    
    inputs = self.processor(images=images, return_tensors="pt").to(self.device)
    with torch.no_grad():
      outputs = self.model(**inputs)
    target_sizes = [image.size[::-1] for image in images]
    results = self.processor.post_process_semantic_segmentation(outputs, target_sizes=target_sizes)
    outputs = []
    for i, all_masks_tensor in enumerate(results):
      masks = []
      for clss_id in all_masks_tensor.unique().tolist():
        label = self.model.config.id2label[clss_id]
        mask = torch.zeros_like(all_masks_tensor)
        mask[all_masks_tensor == clss_id] = 255
        mask = mask.cpu().numpy() if self.device == "cuda" else mask.numpy()
        mask = PILImage.fromarray(mask.astype("uint8"))
        region = dt.Region(
          mask=mask,
          concepts=[dt.Concept(id=self.conceptname2id[label], name=label)]
        )
        masks.append(region)
      outputs.append(masks)
    
    return outputs
    
  @VisualDetectorClass.method
  def predict(self, image: dt.Image) -> List[dt.Region]:
    return self.model_predict([image.to_pil()])[0]

  @VisualDetectorClass.method
  def stream(self, images: Iterator[dt.Image]) -> Iterator[dt.Region]:
    for each in images:
      yield self.predict(image=each)
      
  @VisualDetectorClass.method
  def generate(self, video: dt.Video) -> Iterator[dt.Region]:
    for frame in self.video_to_frames(video.bytes):
      yield self.predict(image=frame.image)
      
  def test(self):
    import requests
    
    image = dt.Image(bytes=requests.get("https://samples.clarifai.com/metro-north.jpg").content)
    video = dt.Video(bytes=requests.get("https://samples.clarifai.com/beer.mp4").content)   

    logger.info("# -------- Test predict/detect -------------")
    logger.info(f"{self.predict(image=image)}")
    logger.info("# -------- Test generate -------------")
    n=5
    for i, each in enumerate(self.generate(video=video)):
      print(each)
      if i > n:
        break
    
    logger.info("# -------- Test stream -------------")
    
    def iteration():
      for each in [image]*10:
        yield each
    
    for i, each in enumerate(self.stream(images=iteration())):
      print(each)
      if i > n:
        break