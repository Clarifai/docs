##############################################################################
# In this section, we set the user authentication, app ID, and the input and 
# concept ID. Change these strings to run your own example.
##############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the concept you want to remove
INPUT_ID = '2e9c4a86555d40ffb47c7b045d7e3048'
CONCEPT_ID = 'water'

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
        action="remove",  # Supported actions: overwrite, merge, remove.
        inputs=[
            resources_pb2.Input(
                id=INPUT_ID,
                data=resources_pb2.Data(
                    concepts=[
                        # We're removing the concept, so there's no need to specify
                        # the concept value.
                        resources_pb2.Concept(id=CONCEPT_ID),
                    ]
                )
            )
        ]
    ),
    metadata=metadata
)

if patch_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(patch_inputs_response.status)
    raise Exception("Patch inputs failed, status: " + patch_inputs_response.status.description)
