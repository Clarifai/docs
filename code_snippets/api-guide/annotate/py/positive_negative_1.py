#################################################################################################
# In this section, we set the user authentication, app ID, and how we want to annotate the image. 
# Change these strings to run your own example.
#################################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the image you want to annotate
INPUT_ID = "53d0362a9dfa4e03b2293375e2d0db73"
CONCEPT_ID_1 = "tree"
CONCEPT_ID_2 = "water"

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

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                data=resources_pb2.Data(
                    concepts=[
                        resources_pb2.Concept(id=CONCEPT_ID_1, value=1.),  # 1 means true, this concept is present
                        resources_pb2.Concept(id=CONCEPT_ID_2, value=1.)  
                    ]
                )               
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(post_annotations_response.status)
    raise Exception("Post annotations failed, status: " + post_annotations_response.status.description) 
