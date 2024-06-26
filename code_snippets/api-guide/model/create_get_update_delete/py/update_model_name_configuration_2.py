#####################################################################################################
# In this section, we set the user authentication, app ID, and how we want to update the model. 
# Change these strings to run your own example.
#####################################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to update your own model
MODEL_ID = 'petsID'
MODEL_VERSION_ID = 'b0b89c973e5d4b6d9599ce13da04b894'
MINIMUM_VALUE = 0.95

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

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
    "min_value": MINIMUM_VALUE
})

patch_models_response = stub.PatchModelVersions(
    service_pb2.PatchModelVersionsRequest(
        user_app_id=userDataObject,
        action="overwrite",
        model_id=MODEL_ID,
        model_versions=[
            resources_pb2.ModelVersion(
                id=MODEL_VERSION_ID,
                output_info=resources_pb2.OutputInfo(
                        params=params
                )
            )
        ]

    ),
    metadata=metadata
)

if patch_models_response.status.code != status_code_pb2.SUCCESS:
    print(patch_models_response.status)
    raise Exception("Patch models failed, status: " + patch_models_response.status.description)
