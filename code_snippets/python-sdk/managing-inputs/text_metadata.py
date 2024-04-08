# Import necessary modules
from google.protobuf.struct_pb2 import Struct
from clarifai.client.input import Inputs

# Define the input object with user_id and app_id
input_object = Inputs(user_id="user_id", app_id="app_id")

# Define the input text
input_text = b"Write a tweet on future of AI"

# Create a Struct object for metadata
metadata = Struct()

# Update metadata with filename and split information
metadata.update({"filename": "tweet.txt", "split": "train"})

# Upload the input from bytes with custom metadata
input_object.upload_from_bytes(input_id="text_data_metadata", text_bytes=input_text, metadata=metadata)
