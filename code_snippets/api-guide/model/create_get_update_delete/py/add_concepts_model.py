###########################################################################
# In this section, we set the user authentication, app ID, model ID, 
# and concept ID. Change these strings to run your own example.
###########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to add your own concept to a model
MODEL_ID = 'petsID'
CONCEPT_ID = 'charlie'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

patch_models_response = stub.PatchModels(
    service_pb2.PatchModelsRequest(
        user_app_id=userDataObject,
        action="merge",  # Supported actions: overwrite, merge, remove
        models=[
            resources_pb2.Model(
                id=MODEL_ID,
                output_info=resources_pb2.OutputInfo(
                    data=resources_pb2.Data(
                        concepts=[resources_pb2.Concept(id=CONCEPT_ID)]
                    ),
                )
            )
        ]
    ),
    metadata=metadata
)

if patch_models_response.status.code != status_code_pb2.SUCCESS:
    print(patch_models_response.status)
    raise Exception("Patch models failed, status: " + patch_models_response.status.description)
