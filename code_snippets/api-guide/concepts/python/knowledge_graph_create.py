###################################################################################
# In this section, we set the user authentication, app ID, subject concept ID, 
# object concept ID, and predicate. Change these strings to run your own example.
###################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever relation you want to create
SUBJECT_CONCEPT_ID = 'honey'
OBJECT_CONCEPT_ID = 'food'
PREDICATE = "hypernym" # This can be hypernym, hyponym, or synonym

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

post_concept_relation_response = stub.PostConceptRelations(
    service_pb2.PostConceptRelationsRequest(
        user_app_id=resources_pb2.UserAppIDSet(
            user_id=USER_ID,
            app_id=APP_ID
        ),
        concept_id=SUBJECT_CONCEPT_ID,
        concept_relations=[
            resources_pb2.ConceptRelation(
                object_concept=resources_pb2.Concept(id=OBJECT_CONCEPT_ID),
                predicate=PREDICATE
            )
        ]
    ),
    metadata=metadata
)

if post_concept_relation_response.status.code != status_code_pb2.SUCCESS:
    print(post_concept_relation_response.status)
    raise Exception("Post concept relation failed, status: " + post_concept_relation_response.status.description)
    
print(post_concept_relation_response)