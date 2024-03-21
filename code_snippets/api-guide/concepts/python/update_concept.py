################################################################################
# In this section, we set the user authentication, app ID, concept ID and name.
# Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever concept you want to update
CONCEPT_ID = 'cat'
CONCEPT_NAME = 'New Cat Name'

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

patch_concepts_response = stub.PatchConcepts(
    service_pb2.PatchConceptsRequest(
        user_app_id=userDataObject,
        action="overwrite",  # The only supported action right now is overwrite
        concepts=[resources_pb2.Concept(id=CONCEPT_ID, name=CONCEPT_NAME)]
    ),
    metadata=metadata
)

if patch_concepts_response.status.code != status_code_pb2.SUCCESS:
    print(patch_concepts_response.status)
    raise Exception("Patch concept failed, status: " + patch_concepts_response.status.description)
    
print(patch_concepts_response)