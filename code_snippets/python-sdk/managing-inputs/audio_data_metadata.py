# Import necessary modules
from clarifai.client.input import Inputs
from google.protobuf.struct_pb2 import Struct


# Define the input object with user_id and app_id
input_object = Inputs(user_id="user_id", app_id="app_id")

# Define the URL of the audio file
audio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"

# Create a new Struct to hold metadata
metadata = Struct()

# Update the metadata with filename and split information
metadata.update({"filename": "goodmorning.wav", "split": "test"})

# Upload the input from the specified URL with metadata
input_object.upload_from_url(
    input_id="audio_data_metadata",  # Specify an ID for the input
    audio_url=audio_url,  # URL of the audio file
    metadata=metadata  # Custom metadata associated with the input
)
