###################################################################################
# In this section, we set the user authentication, user and app ID, dataset ID,
# and Databricks CSV path. Change these strings to run your own example.
##################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
USER_ID = "YOUR_USER_ID_HERE"
APP_ID = "YOUR_APP_ID_HERE"
DATASET_ID = "YOUR_DATASET_ID_HERE"
# URL path of your Databricks CSV file; Example: "/Volumes/test1/default/volume1/SMS_train_1.csv"
CSV_PATH = "YOUR_DATABRICKS_CSV_PATH_HERE"

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

#  Upload from CSV
dataset_obj.upload_dataset_from_csv(
    csv_path=CSV_PATH,
    input_type="text",
    # input_type="image", # Or, specify to upload image data
    labels=False,  # Set to True if "concepts" column exists
    csv_type="raw",  # Or, specify as "url" or "filepath"
    source="volume",  # Specify as "s3" to use a CSV file directly from your AWS S3 bucket
)
