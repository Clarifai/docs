##################################################################
# In this section, we set the user authentication, and app ID.
# Change these strings to run your own example.
##################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'

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

list_annotations_response = stub.ListAnnotations(
    service_pb2.ListAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        per_page=10,
        list_all_annotations=True
    ),
    metadata=metadata
)

if list_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(list_annotations_response.status)
    raise Exception("List annotations failed, status: " + list_annotations_response.status.description)
 
for annotation_object in list_annotations_response.annotations:
    print(annotation_object) 
