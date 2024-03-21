################################################################################
# In this section, we set the user authentication, app ID, and the concepts we  
# we want to rank by. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to a Clarifai/main concept
CONCEPT_ID_1 = 'ai_fvlBqXZR'
# Change this to your own custom concept
CONCEPT_ID_2 = 'people'

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

# Here we search for images labeled with 'ai_fvlBqXZR' and for which the General prediction model does not find
# a 'people' concept
post_annotations_searches_response = stub.PostAnnotationsSearches(
    service_pb2.PostAnnotationsSearchesRequest(
        user_app_id=userDataObject,
        searches = [
            resources_pb2.Search(
                query=resources_pb2.Query(
                    ranks=[
                        resources_pb2.Rank(
                            annotation=resources_pb2.Annotation(
                                data=resources_pb2.Data(
                                    concepts=[  # You can search by multiple concepts
                                        resources_pb2.Concept(
                                            id=CONCEPT_ID_1,  # You could search by concept Name as well
                                            value=1  # Value of 0 will search for images that don't have the concept
                                        )
                                    ]
                                )
                            )
                        )               
                    ],                    
                    filters=[
                         resources_pb2.Filter(
                            annotation=resources_pb2.Annotation(
                                data=resources_pb2.Data(
                                    concepts=[  # You can search by multiple concepts
                                        resources_pb2.Concept(
                                            id=CONCEPT_ID_2,  # You could search by concept Name as well
                                            value=0  # Value of 0 will search for images that don't have the concept
                                        )
                                    ]
                                )
                            )
                        )
                     ]         
                )
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_searches_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Post searches failed, status: " + post_annotations_searches_response.status.description)

print("Search result:")
for hit in post_annotations_searches_response.hits:
    print("\tScore %.2f for annotation: %s off input: %s" % (hit.score, hit.annotation.id, hit.input.id))