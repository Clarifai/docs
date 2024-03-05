##############################################################################################################
# In this section, we set the user authentication, user and app ID, model details, and input details.
# Change these values to run your own example.
##############################################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "openai"
APP_ID = "chat-completion"
# Change these to whatever model and inputs you want to use
MODEL_ID = "openai-gpt-4-vision"
MODEL_VERSION_ID = "266df29bc09843e0aee9b7bf723c03c2"
RAW_TEXT = "Write a caption for the image"
# To use a hosted text file, assign the URL variable
# TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt"
# Or, to use a local text file, assign the location variable
# TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE"
IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg"
# To use a local file, assign the location variable
# IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

# To use a local text file, uncomment the following lines
# with open(TEXT_FILE_LOCATION, "rb") as f:
#    file_bytes = f.read()

# To use a local image file, uncomment the following lines
# with open(IMAGE_FILE_LOCATION, "rb") as f:
#     file_bytes = f.read()

params = Struct()
params.update(
    {
        "temperature": 0.5,
        "max_tokens": 2048,
        "top_p": 0.95,
        # "api_key": "ADD_THIRD_PARTY_KEY_HERE"
    }
)

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        model_id=MODEL_ID,
        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    text=resources_pb2.Text(
                        raw=RAW_TEXT
                        # url=TEXT_FILE_URL
                        # raw=file_bytes
                    ),
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                        # base64=file_bytes
                    ),
                )
            )
        ],
        model=resources_pb2.Model(
            model_version=resources_pb2.ModelVersion(
                output_info=resources_pb2.OutputInfo(params=params)
            )
        ),
    ),
    metadata=metadata,
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception(f"Post model outputs failed, status: {post_model_outputs_response.status.description}")

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

print(output.data.text.raw)
