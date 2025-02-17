from clarifai_datautils.image import ImageAnnotations
from clarifai.client.dataset import Dataset
import os

# Set the PAT key
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" # replace with your own PAT key

# Defining path and annotation format
LOCAL_FOLDER_PATH = "./dogs-vs-wolves/data/"
ANNOTATION_FORMAT = "imagenet"

# Load dataset from the specified local folder
kaggle_imagenet_dataset = ImageAnnotations.import_from(path=LOCAL_FOLDER_PATH, format=ANNOTATION_FORMAT) 

# Use the Python SDK library to upload
dataset = Dataset(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", dataset_id="YOUR_DATASET_ID_HERE")
# Or, initialize with a dataset URL; example: https://clarifai.com/john/my-app/datasets/annotations_dataset
#dataset = Dataset("DATASET_URL_HERE") 

# Upload dataset using the dataloader
dataset.upload_dataset(dataloader=kaggle_imagenet_dataset.dataloader)
