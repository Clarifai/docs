###############################################################################################
# In this section, we set the user authentication, app ID, model ID, and prompter details.
# Change these strings to run your own example.
###############################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to train your own model
MODEL_ID = "my-prompter-model"
PROMPTER_DESCRIPTION = "Positive or negative sentiment classifier prompter"
PROMPT_TEMPLATE = "Classify whether the sentiment of the given text is positive or negative {data.text.raw}"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

params = Struct()
params.update({
    "prompt_template": PROMPT_TEMPLATE
    })

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_versions = stub.PostModelVersions(
    service_pb2.PostModelVersionsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        description=PROMPTER_DESCRIPTION,
        model_versions=[
            resources_pb2.ModelVersion(
                output_info=resources_pb2.OutputInfo(params=params)
            )
        ],
    ),
    metadata=metadata,
)

if post_model_versions.status.code != status_code_pb2.SUCCESS:
    print(post_model_versions.status)
    raise Exception("Post models versions failed, status: " + post_model_versions.status.description)

print(post_model_versions)
