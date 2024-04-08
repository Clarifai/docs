from google.protobuf.struct_pb2 import Struct
from clarifai.client.input import Inputs

# Initialize an Inputs object with specified user_id and app_id
input_object = Inputs(user_id="user_id", app_id="app_id")

# Define the URL of the video to upload
video_url = "https://samples.clarifai.com/beer.mp4"

# Create a Struct object to hold metadata
metadata = Struct()

# Update the metadata with filename and split information
metadata.update({"filename": "drinks.jpg", "split": "train"})

# Upload the video from the specified URL with the provided metadata
input_object.upload_from_url(
    input_id="video_data_metadata", video_url=video_url, metadata=metadata
)
