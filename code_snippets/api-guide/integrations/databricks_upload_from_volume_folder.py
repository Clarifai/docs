###################################################################################
# In this section, we set the user authentication, user and app ID, dataset ID,
# and Databricks folder path. Change these strings to run your own example.
##################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
USER_ID = "YOUR_USER_ID_HERE"
APP_ID = "YOUR_APP_ID_HERE"
DATASET_ID = "YOUR_DATASET_ID_HERE"
# URL path of your Databricks folder; Example: "/Volumes/test1/default/volume1/folder1"
FOLDER_PATH = "YOUR_DATABRICKS_FOLDER_PATH_HERE"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required packages
import os
from clarifaipyspark.client import ClarifaiPySpark

# Set Clarifai PAT as environment variable
os.environ["CLARIFAI_PAT"] = PAT
# Create a Clarifai-PySpark client object to connect to your app on Clarifai
cspark_obj = ClarifaiPySpark(user_id=USER_ID, app_id=APP_ID)
# This creates a new dataset in the app if it doesn't already exist
dataset_obj = cspark_obj.dataset(dataset_id=DATASET_ID)

#  Upload from a volume folder
dataset_obj.upload_dataset_from_folder(
    folder_path=FOLDER_PATH,
    input_type="image",
    # input_type="text", # Or, specify to upload text data
    labels=False,  # Set to True if the folder name serves as the label for all the images within it
)
