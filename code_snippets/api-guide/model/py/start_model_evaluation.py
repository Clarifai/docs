###########################################################################
# In this section, we set the user authentication, app ID, model ID,
# and model version. Change these strings to run your own example.
###########################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to make your own evaluations
MODEL_ID = "text-model-1"
MODEL_VERSION_ID = "3ad2c152232e46ebb16ed31f67dc54d8"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_evaluations = stub.PostEvaluations(
    service_pb2.PostEvaluationsRequest(
        user_app_id=userDataObject,
        eval_metrics=[
            resources_pb2.EvalMetrics(
                model=resources_pb2.Model(
                    app_id=APP_ID,
                    user_id=USER_ID,
                    id=MODEL_ID,
                    model_version=resources_pb2.ModelVersion(id=MODEL_VERSION_ID),
                )                
            )
        ],
    ),
    metadata=metadata,
)

if post_model_evaluations.status.code != status_code_pb2.SUCCESS:
    print(post_model_evaluations.status)
    raise Exception("Failed response, status: " + post_model_evaluations.status.description)

print(post_model_evaluations)
