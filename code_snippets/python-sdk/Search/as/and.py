# Import necessary modules
from clarifai.client.search import Search
from clarifai.client.user import User
from google.protobuf import struct_pb2
from PIL import Image
import requests
from IPython.display import display

# Define user-specific credentials
USER_ID=''
APP_ID=''
PAT=''

# Define constants
CREATE_DATASET_ID = "ci_search_dataset"
DOG_IMG_URL = "https://samples.clarifai.com/dog.tiff"

# Create a new application
app_obj = User(user_id=USER_ID, pat=PAT).create_app(app_id=APP_ID, base_workflow="General")

# Create a new dataset
dataset_obj = app_obj.create_dataset(CREATE_DATASET_ID)

# Initialize Inputs object for uploading data
inp_obj = app_obj.inputs()

# Define metadata for the input
metadata = struct_pb2.Struct()
metadata.update({"Breed": "Saint Bernard"})

# Get input from URL and upload it to the dataset
input_proto = inp_obj.get_input_from_url(
        dataset_id=CREATE_DATASET_ID,
        input_id="dog-tiff",
        image_url=DOG_IMG_URL,
        labels=["dog"],
        geo_info=[-30.0, 40.0],  # longitude, latitude
        metadata=metadata)
inp_obj.upload_inputs([input_proto])

# Define an AND filter
and_filter = [
              {  # AND
                  "concepts": [{
                      "name": "dog",
                      "value": 1
                  }]
              },
              {
                  "concepts": [{
                      "name": "deer",
                      "value": 1
                  }]
              }
          ]

# Create a search object
search = app_obj.search()

# Perform a search query with the specified rank and AND filter
res = search.query(ranks=[{"image_url": "https://samples.clarifai.com/dog.tiff"}], filters=and_filter)

# Convert search results to a list
resp = list(res)

# Print the length of the search results
print(len(resp)) # Should be zero