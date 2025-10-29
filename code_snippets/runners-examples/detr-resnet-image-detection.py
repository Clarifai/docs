# Standard library imports
import os
from typing import List, Dict, Any, Iterator

# Third-party imports
import cv2
import torch
from PIL import Image as PILImage
from transformers import DetrForObjectDetection, DetrImageProcessor

# Clarifai imports
from clarifai.runners.models.model_builder import ModelBuilder
from clarifai.runners.models.visual_detector_class import VisualDetectorClass
from clarifai.runners.utils.data_types import Image, Video, Region, Frame
from clarifai.utils.logging import logger


def detect_objects(
    images: List[PILImage],
    model: DetrForObjectDetection,
    processor: DetrImageProcessor,
    device: str
) -> Dict[str, Any]:
    """Process images through the DETR model to detect objects.

    Args:
        images: List of preprocessed images
        model: DETR model instance
        processor: Image processor for DETR
        device: Computation device (CPU/GPU)

    Returns:
        Detection results from the model
    """
    model_inputs = processor(images=images, return_tensors="pt").to(device)
    model_inputs = {name: tensor.to(device) for name, tensor in model_inputs.items()}
    model_output = model(**model_inputs)
    results = processor.post_process_object_detection(model_output)
    return results


class MyRunner(VisualDetectorClass):
    """A custom runner for DETR object detection model that processes images and videos"""

    def load_model(self):
        """Load the model here."""
        model_path = os.path.dirname(os.path.dirname(__file__))
        builder = ModelBuilder(model_path, download_validation_only=True)
        checkpoint_path = builder.download_checkpoints(stage="runtime")
        
        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
        logger.info(f"Running on device: {self.device}")

        self.model = DetrForObjectDetection.from_pretrained(checkpoint_path).to(self.device)
        self.processor = DetrImageProcessor.from_pretrained(checkpoint_path)
        self.model.eval()
        self.threshold = 0.9
        self.model_labels = self.model.config.id2label

        logger.info("Done loading!")

    @VisualDetectorClass.method
    def predict(self, image: Image) -> List[Region]:
        """Process a single image and return detected objects."""
        image_bytes = image.bytes
        image = VisualDetectorClass.preprocess_image(image_bytes)
        
        with torch.no_grad():
            results = detect_objects([image], self.model, self.processor, self.device)
            outputs = VisualDetectorClass.process_detections(results, self.threshold, self.model_labels)
            return outputs[0]  # Return detections for single image

    @VisualDetectorClass.method
    def generate(self, video: Video) -> Iterator[Frame]:
        """Process video frames and yield detected objects for each frame."""
        frame_generator = VisualDetectorClass.video_to_frames(video.bytes)
        for frame in frame_generator:
            with torch.no_grad():
                image = VisualDetectorClass.preprocess_image(frame.image.bytes)
                results = detect_objects([image], self.model, self.processor, self.device)
                outputs = VisualDetectorClass.process_detections(results, self.threshold, self.model_labels)
                frame.regions = outputs[0]  # Assign detections to the frame
                yield frame  # Yield the frame with detections

    @VisualDetectorClass.method
    def stream_image(self, image_stream: Iterator[Image]) -> Iterator[List[Region]]:
        """Stream process image inputs."""
        for image in image_stream:
            result = self.predict(image)
            yield result

    @VisualDetectorClass.method
    def stream_video(self, video_stream: Iterator[Video]) -> Iterator[Frame]:
        """Stream process video inputs."""
        for video in video_stream:
            for frame_result in self.generate(video):
                yield frame_result
        
    def test(self):
        """Test the model functionality."""
        import requests  # Import moved here as it's only used for testing
        
        # Test configuration
        TEST_URLS = {
            "images": [
                "https://samples.clarifai.com/metro-north.jpg",
                "https://samples.clarifai.com/dog.tiff"
            ],
            "video": "https://samples.clarifai.com/beer.mp4"
        }

        def get_test_data(url):
            return Image(bytes=requests.get(url).content)

        def get_test_video():
            return Video(bytes=requests.get(TEST_URLS["video"]).content)

        def run_test(name, test_fn):
            logger.info(f"\nTesting {name}...")
            try:
                test_fn()
                logger.info(f"{name} test completed successfully")
            except Exception as e:
                logger.error(f"Error in {name} test: {e}")

        # Test predict
        def test_predict():
            result = self.predict(get_test_data(TEST_URLS["images"][0]))
            logger.info(f"Predict result: {result}")

        # Test generate
        def test_generate():
            for detections in self.generate(get_test_video()):
                logger.info(f"First frame detections: {detections}")
                break

        # Test stream
        def test_stream():
            # Split into two separate test functions for clarity
            def test_stream_image():
                images = [get_test_data(url) for url in TEST_URLS["images"]]
                for result in self.stream_image(iter(images)):
                    logger.info(f"Image stream result: {result}")

            def test_stream_video():
                for result in self.stream_video(iter([get_test_video()])):
                    logger.info(f"Video stream result: {result}")
                    break  # Just test first frame

            logger.info("\nTesting image streaming...")
            test_stream_image()
            logger.info("\nTesting video streaming...")
            test_stream_video()

        # Run all tests
        for test_name, test_fn in [
            ("predict", test_predict),
            ("generate", test_generate),
            ("stream", test_stream)
        ]:
            run_test(test_name, test_fn)