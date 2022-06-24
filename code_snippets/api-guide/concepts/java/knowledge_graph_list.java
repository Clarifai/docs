######################################################################################
# In this section, we set the user authentication, app ID, concept ID, and predicate. 
# Change these strings to run your own example.
######################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever concept you want to list its relations
CONCEPT_ID = 'honey'
PREDICATE = "hypernym" # This is optional. If skipped, all concept's relations will be returned

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

list_concept_relation_response = stub.ListConceptRelations(
    service_pb2.ListConceptRelationsRequest(
        user_app_id=resources_pb2.UserAppIDSet(
            user_id=USER_ID,
            app_id=APP_ID
        ),
        concept_id=CONCEPT_ID,
        predicate=PREDICATE  
    ),
    metadata=metadata
)

if list_concept_relation_response.status.code != status_code_pb2.SUCCESS:
    print(list_concept_relation_response.status)
    raise Exception("List concept relation failed, status: " + list_concept_relation_response.status.description)

for relation in list_concept_relation_response.concept_relations:
    print(relation) 
