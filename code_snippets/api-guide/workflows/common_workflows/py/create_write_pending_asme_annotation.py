#########################################################################################
# In this section, we set the user authentication, app ID, and the details of the model
# we want to create. Change these strings to run your own example.
#########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own annotation writer model
ANNOTATION_USER_ID = 'ANNOTATION_USER_ID_HERE'
MODEL_ID = 'write-pending-model-id'
MODEL_TYPE_ID = 'annotation-writer'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

params = Struct()
params.update({
    "annotation_status": status_code_pb2.ANNOTATION_PENDING,
    "annotation_user_id": ANNOTATION_USER_ID
})

post_models_response = stub.PostModels(
    service_pb2.PostModelsRequest(
        user_app_id=userDataObject,  
        models=[
            resources_pb2.Model(
                id=MODEL_ID,
                model_type_id=MODEL_TYPE_ID,
                output_info=resources_pb2.OutputInfo(
                    params=params
                )
            ),
        ]
    ),
    metadata=metadata
)

if post_models_response.status.code != status_code_pb2.SUCCESS:
    print(post_models_response.status)
    raise Exception("Post models failed, status: " + post_models_response.status.description)
    