from clarifai.client.input import Inputs
from google.protobuf.struct_pb2 import Struct

# Metadata structure should be of Struct, so we create it, add the necessary details and provide it to input proto
metadata = Struct() 
metadata.update({"split": "test"}) 

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

new_input = input_object._get_proto(input_id="YOUR_INPUT_ID_HERE", metadata= metadata)

# Update the metadata
input_object.patch_inputs([new_input],action="merge")

# Overwrite the metadata
input_object.patch_inputs([new_input],action='overwrite')
