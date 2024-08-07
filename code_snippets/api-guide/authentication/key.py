##################################################################################################
# FOR SECURE AUTHENTICATION, SET API KEY AS AN ENVIRONMENT VARIABLE
#################################################################################################

# The built-in Python os library provides functions to access and manipulate environment variables
import os

# Python-dotenv reads key-value pairs from a .env file and can set them as environment variables
# Install the library by running `pip install python-dotenv`
from dotenv import load_dotenv

load_dotenv()

# Set the `CLARIFAI_API_KEY` environment variable before running the code. For example, you can set it in an .env file as `export CLARIFAI_API_KEY=YOUR_API_KEY_HERE`
# Your API Key can be found in the platform in your app's settings page

KEY = os.getenv('CLARIFAI_API_KEY')
if KEY is None:
    raise ValueError("API Key is not set. Please set the CLARIFAI_API_KEY environment variable.")

################################################################################################
# In this section, we set the  model details and the URL of the image we want as an input. 
# Change these strings to run your own example.
################################################################################################

MODEL_ID = 'YOUR_MODEL_ID_HERE'
# This is optional. You can specify a model version or the empty string for the default
MODEL_VERSION_ID = ''
IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + KEY),)

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        model_id=MODEL_ID,
        version_id=MODEL_VERSION_ID,  
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                    )
                )
            )
        ]
    ),
    metadata=metadata
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

print("Predicted concepts:")
for concept in output.data.concepts:
    print("%s %.2f" % (concept.name, concept.value))

# Uncomment this line to print the full Response JSON
#print(output)