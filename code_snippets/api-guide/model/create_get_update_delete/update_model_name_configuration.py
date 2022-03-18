###########################################################################
# In this section, we set the user authentication, app ID, and how
# we want to update the model. Change these strings to run your own example.
###########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to update your own model 
MODEL_ID = 'petsID'
MODEL_NAME = 'newname'
CONCEPT_ID_1 = 'birds'
CONCEPT_ID_2 = 'hurd'

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
        action="overwrite",
        models=[
            resources_pb2.Model(
                id=MODEL_ID,
                name=MODEL_NAME,
                output_info=resources_pb2.OutputInfo(
                    data=resources_pb2.Data(
                        concepts=[
                            resources_pb2.Concept(id=CONCEPT_ID_1),
                            resources_pb2.Concept(id=CONCEPT_ID_2)
                        ]
                    ),
                    output_config=resources_pb2.OutputConfig(
                        concepts_mutually_exclusive=True,
                        closed_environment=True,
                    )
                )
            )
        ]
    ),
    metadata=metadata
)

if patch_models_response.status.code != status_code_pb2.SUCCESS:
    print(patch_models_response.status)
    raise Exception("Patch models failed, status: " + patch_models_response.status.description)
