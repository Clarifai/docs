################################################################################
# In this section, we set the user authentication, app ID, and the concepts we  
# we want to search by. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to search by your own concepts
CONCEPT_NAME_1 = 'cat'
CONCEPT_NAME_2 = 'dog'

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

# Here we search for images which we labeled with "cat" and for which the General prediction model does not find
# a "dog" concept.
post_searches_response = stub.PostSearches(
    service_pb2.PostSearchesRequest(
        user_app_id=userDataObject,
        query=resources_pb2.Query(
            ands=[
                resources_pb2.And(
                    input=resources_pb2.Input(  # Setting Input indicates we search for images that have the concept(s)
                                                # which we added to the input manually.
                        data=resources_pb2.Data(
                            concepts=[
                                resources_pb2.Concept(
                                    name=CONCEPT_NAME_1,
                                    value=1
                                )
                            ]
                        )
                    )
                ),
                resources_pb2.And(
                    output=resources_pb2.Output(  # Setting Output indicates we search for images that have the concept(s)
                                                  # which were predicted by the General model.
                        data=resources_pb2.Data(
                            concepts=[
                                resources_pb2.Concept(
                                    name=CONCEPT_NAME_2,
                                    value=0
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