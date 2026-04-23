import os
from clarifai.datasets.upload.utils import load_module_dataloader
from clarifai.client.app import App  # make sure app is imported if not already

# Construct the path to the dataset folder
module_path = os.path.join(os.getcwd().split('/models/model_train')[0], 'examples/datasets/upload/image_classification/food-101' )

# Load the dataloader module using the provided function from your module
food101_dataloader = load_module_dataloader(module_path)

# Initialize Clarifai App 
app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE")

# Create a Clarifai dataset with the specified dataset_id
dataset = app.create_dataset(dataset_id="image_dataset")

# Upload the dataset using the provided dataloader and get the upload status
dataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)