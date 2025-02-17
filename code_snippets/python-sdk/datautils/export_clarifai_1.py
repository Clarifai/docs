from clarifai.client.dataset import Dataset
import os

# Set the PAT key
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" # replace with your own PAT key

# Initialize Dataset object for Clarifai
dataset = Dataset(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", dataset_id="YOUR_DATASET_ID_HERE", dataset_version_id="YOUR_DATASET_VERSION_HERE")

# Specify the path where the exported dataset will be saved
# Optionally, you can also specify how the exported data will be split. Common splits include train, val, and test
dataset.export(save_path="clarifai_export.zip", split="train")
