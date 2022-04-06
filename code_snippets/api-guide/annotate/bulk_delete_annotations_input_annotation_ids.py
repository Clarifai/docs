#######################################################################
# In this section, we set the user authentication, app ID, input IDs, 
# and annotation IDs. Change these strings to run your own example.
#######################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the annotations you want to bulk delete 
INPUT_ID_1 = 'b76fe0adb0294906942f169bb1f6cacf'
INPUT_ID_2 = 'e838fac8da9d40c89f2291a6496593da'
ANNOTATION_ID_1 = '35c37cda9ad8460fae12b2b2b6a23f1d'
ANNOTATION_ID_2 = '63d69000ae3343d0b70b892ea3dcb01d'

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

delete_annotations_response = stub.DeleteAnnotations(
    service_pb2.DeleteAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        input_ids=[INPUT_ID_1, INPUT_ID_2],
        ids=[ANNOTATION_ID_1, ANNOTATION_ID_2]
    ),
    metadata=metadata
)

if delete_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(delete_annotations_response.status)   
    raise Exception("Delete annotations failed, status: " + delete_annotations_response.status.description)
    
