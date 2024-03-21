#########################################################################
# In this section, we set the user authentication, app ID, input ID, 
# and another user ID. Change these strings to run your own example.
#########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to post your own annotations
INPUT_ID = 'e838fac8da9d40c89f2291a6496593da'
ANOTHER_USER_ID = 'ANOTHER_USER_ID_HERE'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is created in the overview and is required when using a PAT

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        user_app_id=userDataObject,  
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                user_id=ANOTHER_USER_ID,    # If empty, it is the user who posts this annotation
                status=status_pb2.Status(
                    code=status_code_pb2.ANNOTATION_PENDING  # annotation pending status. By default success.
                ),
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(post_annotations_response.status)    
    raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)
    