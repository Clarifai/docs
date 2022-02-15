##################################################################################
# In this section, we set the user authentication, app ID, and model version IDs. 
# Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Insert the model version IDs 
MODEL_VERSION_ID_1 = 'MODEL_VERSION_ID_1_HERE'
MODEL_VERSION_ID_2 = 'MODEL_VERSION_ID_1_HERE'

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
        model_version_ids=[MODEL_VERSION_ID_1, MODEL_VERSION_ID_2], 
        per_page=10
    ),
    metadata=metadata
)

if list_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(list_annotations_response.status)
    raise Exception("List annotations failed, status: " + list_annotations_response.status.description)

for annotation_object in list_annotations_response.annotations:
    print(annotation_object)
