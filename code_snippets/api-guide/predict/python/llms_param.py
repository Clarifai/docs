#####################################################################################################################
# In this section, we set the user authentication, user and app ID, model details, raw text we want as a prompt,
# and the parameters. Change these values to run your own example.
#####################################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = 'meta'
APP_ID = 'Llama-2'
# Change these to whatever model and text you want to use
MODEL_ID = 'llama2-7b-chat'
MODEL_VERSION_ID = 'e52af5d6bc22445aa7a6761f327f7129'
RAW_TEXT = 'I love your product very much'

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

params = Struct()
params.update({
    "temperature": 0.5,
    "max_tokens": 2048,
    "top_k": 0.95
})

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
                    )
                )
            )
        ],
        model=resources_pb2.Model(
            model_version=resources_pb2.ModelVersion(
                output_info=resources_pb2.OutputInfo(
                    params=params
                )
            )
        )

    ),
    metadata=metadata
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception(f"Post model outputs failed, status: {post_model_outputs_response.status.description}")

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

print("Completion:\n")
print(output.data.text.raw)