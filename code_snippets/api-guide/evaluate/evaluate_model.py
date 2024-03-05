############################################################################################
# In this section, we set the user authentication, app ID, and model evaluation details.
# Change these strings to run your own example.
###########################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to make your own evaluations
MODEL_APP_ID = "YOUR_MODEL_APP_ID_HERE"
MODEL_USER_ID = "YOUR_MODEL_USER_ID_HERE"
MODEL_ID = "YOUR_MODEL_ID_HERE"
MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE"
DATASET_USER_ID = "YOUR_DATASET_USER_ID_HERE"
DATASET_APP_ID = "YOUR_DATASET_APP_ID_HERE"
DATASET_ID = "YOUR_DATASET_ID_HERE"
DATASET_VERSION_ID = "YOUR_DATASET_VERSION_ID_HERE"

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
                    app_id=MODEL_APP_ID,
                    user_id=MODEL_USER_ID,
                    id=MODEL_ID,
                    model_version=resources_pb2.ModelVersion(id=MODEL_VERSION_ID),
                ),
                ground_truth_dataset=resources_pb2.Dataset(
                    user_id=DATASET_USER_ID,
                    app_id=DATASET_APP_ID,
                    id=DATASET_ID,
                    version=resources_pb2.DatasetVersion(id=DATASET_VERSION_ID),
                ),
                
            )
        ],
    ),
    metadata=metadata,
)

if post_model_evaluations.status.code != status_code_pb2.SUCCESS:
    print(post_model_evaluations.status)
    raise Exception(
        "Failed response, status: " + post_model_evaluations.status.description
    )

print(post_model_evaluations)
