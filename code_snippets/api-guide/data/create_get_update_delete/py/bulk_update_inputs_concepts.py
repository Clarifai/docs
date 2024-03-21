################################################################################
# In this section, we set the user authentication, app ID, and the inputs and 
# concepts IDs we want to update. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the updates you want to make
INPUT_ID_1 = '2e9c4a86555d40ffb47c7b045d7e3048'
INPUT_ID_2 = '52b467c2005946cbbbe7a5eec76e29cf'
CONCEPT_ID_1 = 'tree'
CONCEPT_ID_2 = 'water'
CONCEPT_ID_3 = 'animal'
CONCEPT_ID_4 = 'fruit'

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

patch_inputs_response = stub.PatchInputs(
    service_pb2.PatchInputsRequest(
        user_app_id=userDataObject,
        action="merge",  # Supported actions: overwrite, merge, remove.
        inputs=[
            resources_pb2.Input(
                id=INPUT_ID_1,
                data=resources_pb2.Data(
                    concepts=[
                        resources_pb2.Concept(id=CONCEPT_ID_1, value=1.),  # 1 means true, this concept is present.
                        resources_pb2.Concept(id=CONCEPT_ID_2, value=0.)  # 0 means false, this concept is not present.
                    ]
                )
            ),
            resources_pb2.Input(
                id=INPUT_ID_2,
                data=resources_pb2.Data(
                    concepts=[
                        resources_pb2.Concept(id=CONCEPT_ID_3, value=1.),
                        resources_pb2.Concept(id=CONCEPT_ID_4, value=0.)
                    ]
                )
            ),
        ]
    ),
    metadata=metadata
)

if patch_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(patch_inputs_response.status)
    raise Exception("Patch inputs failed, status: " + patch_inputs_response.status.description)
