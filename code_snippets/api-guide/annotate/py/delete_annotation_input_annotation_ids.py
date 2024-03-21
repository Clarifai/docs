#####################################################################
# In this section, we set the user authentication, app ID, input ID, 
# and annotation ID. Change these strings to run your own example.
#####################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the annotation you want to delete 
INPUT_ID = '53d0362a9dfa4e03b2293375e2d0db73'
ANNOTATION_ID = '300b8e39a65e4f33ae4e15e86eaf4a3b'

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

delete_annotation_response = stub.DeleteAnnotation(
    service_pb2.DeleteAnnotationRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        input_id=INPUT_ID,
        annotation_id=ANNOTATION_ID
    ),
    metadata=metadata
)

if delete_annotation_response.status.code != status_code_pb2.SUCCESS:
    print(delete_annotation_response.status)
    raise Exception("Delete annotations failed, status: " + delete_annotation_response.status.description)
