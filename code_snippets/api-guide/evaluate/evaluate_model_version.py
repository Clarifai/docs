############################################################################################
# In this section, we set the user authentication, app ID, and model evaluation details.
# Change these strings to run your own example.
###########################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to make your own evaluations
MODEL_ID = "YOUR_MODEL_ID_HERE"
MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE"
DATASET_ID = "YOUR_DATASET_ID_HERE"

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
params.update({"dataset_id": DATASET_ID})

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_evaluations = stub.PostModelVersionEvaluations(
    service_pb2.PostModelVersionEvaluationsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        model_version_id=MODEL_VERSION_ID,
        eval_metrics=[
            resources_pb2.EvalMetrics(
                eval_info=resources_pb2.EvalInfo(params=params),
            )
        ],
    ),
    metadata=metadata,
)

if post_model_evaluations.status.code != status_code_pb2.SUCCESS:
    print(post_model_evaluations.status)
    raise Exception("Failed response, status: " + post_model_evaluations.status.description)

print(post_model_evaluations)
