####################################################################################
# In this section, we set the user authentication, app ID, and the details of the
# concepts we want to create. Change these strings to run your own example.
####################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own concepts
CONCEPT_ID_1 = 'peopleID'
CONCEPT_NAME_1 = 'people'

CONCEPT_ID_2 = 'manID'
CONCEPT_NAME_2 = 'man'

CONCEPT_ID_3 = 'adultID'
CONCEPT_NAME_3 = 'adult'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

post_concepts_response = stub.PostConcepts(
    service_pb2.PostConceptsRequest(
        user_app_id=userDataObject,  
        concepts=[
            resources_pb2.Concept(id=CONCEPT_ID_1, name=CONCEPT_NAME_1),
            resources_pb2.Concept(id=CONCEPT_ID_2, name=CONCEPT_NAME_2),
            resources_pb2.Concept(id=CONCEPT_ID_3, name=CONCEPT_NAME_3),
        ]
    ),
    metadata=metadata
)

if post_concepts_response.status.code != status_code_pb2.SUCCESS:
    print(post_concepts_response.status)
    raise Exception("Post concepts failed, status: " + post_concepts_response.status.description)
