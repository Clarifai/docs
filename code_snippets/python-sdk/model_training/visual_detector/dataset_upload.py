import os
from clarifai.datasets.upload.utils import load_module_dataloader
from clarifai.client.app import App

# Path to the VOC detection dataset directory (inside the cloned examples repo)
dataset_path = os.path.join("examples", "datasets", "upload", "image_detection", "voc")

# Load the dataloader from the dataset module
detection_dataloader = load_module_dataloader(dataset_path)

# Initialize Clarifai App
app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE")

# Create a Clarifai dataset
dataset = app.create_dataset(dataset_id="image_dataset")

# Upload the dataset and track upload status
dataset.upload_dataset(dataloader=detection_dataloader, get_upload_status=True)
