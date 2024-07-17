################################################################################
# In this section, we set the user authentication, app ID, concept name, and 
# language ID. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to what you want to search by
CONCEPT_NAME = '犬'
LANGUAGE_ID = 'ja' # Japanese

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

post_searches_response = stub.PostSearches(
    service_pb2.PostSearchesRequest(
        user_app_id=userDataObject,
        query=resources_pb2.Query(
            ands=[
                resources_pb2.And(
                    output=resources_pb2.Output( # Setting Output indicates we search for images that have the concept(s)
                                                 # which were predicted by the General model
                        data=resources_pb2.Data(
                            concepts=[  # You can search by multiple concepts
                                resources_pb2.Concept(
                                    name=CONCEPT_NAME,  # You could search by concept ID as well
                                    language=LANGUAGE_ID, 
                                    value=1  # Value of 0 will search for images that don't have the concept
                                )
                            ]
                        )
                    )
                )
            ]
        )
    ),
    metadata=metadata
)

if post_searches_response.status.code != status_code_pb2.SUCCESS:
    print(post_searches_response.status)
    raise Exception("Post searches failed, status: " + post_searches_response.status.description)

print("Found inputs:")
for hit in post_searches_response.hits:
    print("\tScore %.2f for %s" % (hit.score, hit.input.id))
