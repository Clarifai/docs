##################################################################################################
# FOR SECURE AUTHENTICATION, SET PAT AS AN ENVIRONMENT VARIABLE
#################################################################################################

# The built-in Python os library provides functions to access and manipulate environment variables
import os

# Python-dotenv reads key-value pairs from a .env file and can set them as environment variables
# Install the library by running `pip install python-dotenv`
from dotenv import load_dotenv

load_dotenv()

# Set the `CLARIFAI_PAT` environment variable before running the code. For example, you can set it in an .env file as `export CLARIFAI_PAT=YOUR_PAT_HERE`
# Your PAT can be found in your Clarifai's account Security section

PAT = os.getenv('CLARIFAI_PAT')
if PAT is None:
    raise ValueError("PAT is not set. Please set the CLARIFAI_PAT environment variable.")

##################################################################################################
# In this section, we set the user ID, app ID, model details, and the URL
# of the image we want as an input. Change these strings to run your own example.
#################################################################################################

# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = 'clarifai'
APP_ID = 'main'
MODEL_ID = 'general-image-recognition'
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

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
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
