# Import necessary modules
from google.protobuf.struct_pb2 import Struct
from clarifai.client.input import Inputs

# Create an Inputs object with user_id and app_id
input_object = Inputs(user_id="user_id", app_id="app_id")

# Create a Struct object for metadata
metadata = Struct()

# Update metadata with filename and split information
metadata.update({"filename": "XiJinping.jpg", "split": "train"})

# URL of the image to upload
url = "https://samples.clarifai.com/XiJinping.jpg"

# Upload the image from the URL with associated metadata
input_object.upload_from_url(input_id="metadata", image_url=url, metadata=metadata)