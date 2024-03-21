##################################################################################################
# In this section, we set the user authentication, user and app ID, model details, and the URL
# of the image we want as an input. Change these strings to run your own example.
#################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "salesforce"
APP_ID = "blip"
# Change these to whatever model and image URL you want to use
MODEL_ID = "general-english-image-caption-blip"
MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4"
IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg"
# To use a local file, assign the location variable
# IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

# To use a local file, uncomment the following lines
# with open(IMAGE_FILE_LOCATION, "rb") as f:
#     file_bytes = f.read()

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        model_id=MODEL_ID,
        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                        # base64=file_bytes
                        )
                    )
            )
        ],
    ),
    metadata=metadata,
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception(
        "Post model outputs failed, status: "
        + post_model_outputs_response.status.description
    )

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

print("Image caption:")
print(output.data.text.raw)

# Uncomment this line to print the full Response JSON
# print(output)
