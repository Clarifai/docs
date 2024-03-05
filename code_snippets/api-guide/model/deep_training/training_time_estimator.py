###################################################################################################
# In this section, we set the user authentication, app ID, model ID, and estimated input count.
# Change these strings to run your own example.
##################################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to get your training time estimate
MODEL_ID = "YOUR_CUSTOM_MODEL_ID_HERE"
ESTIMATED_INPUT_COUNT = 100

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

params = Struct()
params.update({
        "template": "MMDetection_FasterRCNN"
    })

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

training_time_estimate_response = stub.PostModelVersionsTrainingTimeEstimate(
    service_pb2.PostModelVersionsTrainingTimeEstimateRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        model_versions=[
            resources_pb2.ModelVersion(
                train_info=resources_pb2.TrainInfo(params=params)
            ),
        ],
        estimated_input_count=ESTIMATED_INPUT_COUNT
    ),
    metadata=metadata,
)

if training_time_estimate_response.status.code != status_code_pb2.SUCCESS:
    print(training_time_estimate_response.status)
    raise Exception("Post model outputs failed, status: " + training_time_estimate_response.status.description)

print(training_time_estimate_response)
