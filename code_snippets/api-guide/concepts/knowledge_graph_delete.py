###################################################################################
# In this section, we set the user authentication, app ID, object concept ID, and
# concept relation IDs. Change these strings to run your own example.
####################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever relations you want to delete
OBJECT_CONCEPT_ID = 'YOUR_OBJECT_CONCEPT_ID_HERE'
CONCEPT_RELATION_IDs = ['YOUR_CONCEPT_RELATION_IDs_HERE']

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

delete_concept_relation_response = stub.DeleteConceptRelations(
    service_pb2.DeleteConceptRelationsRequest(
        user_app_id=resources_pb2.UserAppIDSet(
            user_id=USER_ID,
            app_id=APP_ID
        ),
        concept_id=OBJECT_CONCEPT_ID,
        ids=CONCEPT_RELATION_IDs
    ),
    metadata=metadata
)

if delete_concept_relation_response.status.code != status_code_pb2.SUCCESS:
    print(delete_concept_relation_response.status)
    raise Exception("Delete concept relation failed, status: " + delete_concept_relation_response.status.description)

