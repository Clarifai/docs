####################################################################################
# In this section, we set the user authentication, app ID, and the details of the
# concepts we want to link. Change these strings to run your own example.
####################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to link your own concepts
# Run this code three times; once for each concept you want to link
MODEL_CONCEPT_ID = 'YOUR_MODEL_CONCEPT_ID'
GENERAL_MODEL_CONCEPT_ID = 'GENERAL_MODEL_CONCEPT_ID'

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

post_concept_relations_response = stub.PostConceptRelations(
    service_pb2.PostConceptRelationsRequest(
        user_app_id=userDataObject,  
        concept_id=MODEL_CONCEPT_ID,
        concept_relations=[
            resources_pb2.ConceptRelation(
                object_concept=resources_pb2.Concept(id=GENERAL_MODEL_CONCEPT_ID, app_id="main"),
                predicate="synonym"
            )
        ]
    ),
    metadata=metadata
)

if post_concept_relations_response.status.code != status_code_pb2.SUCCESS:
    print(post_concept_relations_response.status)
    raise Exception("Post concept relations failed, status: " + post_concept_relations_response.status.description)
