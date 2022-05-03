#############################################################################
# In this section, we set the user authentication, app ID, and concept ID.
# Change these strings to run your own example.
#############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to whatever concept you want to see its languages
CONCEPT_ID = 'cat'

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

list_concept_languages_response = stub.ListConceptLanguages(
    service_pb2.ListConceptLanguagesRequest(
        user_app_id=userDataObject,
        concept_id=CONCEPT_ID
    ),
    metadata=metadata
)


if list_concept_languages_response.status.code != status_code_pb2.SUCCESS:
    print(list_concept_languages_response.status)
    raise Exception("List concept failed, status: " + list_concept_languages_response.status.description)
    
print(list_concept_languages_response)