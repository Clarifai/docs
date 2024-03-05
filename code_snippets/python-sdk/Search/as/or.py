# Import necessary modules
from clarifai.client.search import Search
from clarifai.client.user import User
from google.protobuf import struct_pb2
from PIL import Image
import requests
from IPython.display import display

# User-specific credentials
USER_ID = ''  # User ID
APP_ID = ''   # Application ID
PAT = ''      # Personal Access Token

# Define dataset and image URL
CREATE_DATASET_ID = "ci_search_dataset"
DOG_IMG_URL = "https://samples.clarifai.com/dog.tiff"

# Create Clarifai application
app_obj = User(user_id=USER_ID, pat=PAT).create_app(app_id=APP_ID, base_workflow="General")

# Create a dataset
dataset_obj = app_obj.create_dataset(CREATE_DATASET_ID)

# Initialize inputs object
inp_obj = app_obj.inputs()

# Define metadata for the image
metadata = struct_pb2.Struct()
metadata.update({"Breed": "Saint Bernard"})

# Get input from URL and upload it
input_proto = inp_obj.get_input_from_url(
        dataset_id=CREATE_DATASET_ID,
        input_id="dog-tiff",
        image_url=DOG_IMG_URL,
        labels=["dog"],
        geo_info=[-30.0, 40.0],  # longitude, latitude
        metadata=metadata)
inp_obj.upload_inputs([input_proto])

# Define OR filter
or_filter = [{  # OR
              "concepts": [{
                  "name": "deer",
                  "value": 1
              }, {
                  "name": "dog",
                  "value": 1
              }]
          }]

# Perform search with OR filter
search = app_obj.search()
res = search.query(ranks=[{"image_url": "https://samples.clarifai.com/dog.tiff"}], filters=or_filter)

# Process search results
resp = list(res)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break

# Display the image
print(hit)
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)