################################################################################
# In this section, we set the user authentication, app ID, concept ID and name.
# Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever concepts you want to process
CONCEPT_ID = 'cat'
CONCEPT_NAME = 'Cat Name'

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

post_concepts_response = stub.PostConcepts(
    service_pb2.PostConceptsRequest(
        user_app_id=userDataObject,
        concepts=[resources_pb2.Concept(id=CONCEPT_ID, name=CONCEPT_NAME)]
    ),
    metadata=metadata
)

if post_concepts_response.status.code != status_code_pb2.SUCCESS:
    print(post_concepts_response.status)
    raise Exception("Post concept failed, status: " + post_concepts_response.status.description)
    
print(post_concepts_response)