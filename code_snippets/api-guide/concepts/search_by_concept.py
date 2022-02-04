##########################################################################################
# In this section, we set the user authentication, app ID, search name, and language ID.
# Change these strings to run your own example.
##########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever concept you want to search for
SEARCH_NAME = "人"
LANGUAGE_ID = "ja"

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

post_concepts_searches_response = stub.PostConceptsSearches(
    service_pb2.PostConceptsSearchesRequest(
        user_app_id=userDataObject,
        concept_query=resources_pb2.ConceptQuery(
            name=SEARCH_NAME,
            language=LANGUAGE_ID
        )
    ),
    metadata=metadata
)

if post_concepts_searches_response.status.code != status_code_pb2.SUCCESS:
    print(post_concepts_searches_response.status)
    raise Exception("Post concepts searches failed, status: " + post_concepts_searches_response.status.description)
    
print("Found concepts:")
for concept in post_concepts_searches_response.concepts:
    print("\t%s %.2f" % (concept.name, concept.value))

# Uncomment this line to print the full Response JSON
#print(post_concepts_searches_response)