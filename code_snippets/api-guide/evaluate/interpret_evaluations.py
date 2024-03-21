#############################################################################################
# In this section, we set the user authentication, app ID, and the model evaluation ID.
# Change these strings to run your own example.
############################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change this to get your model evaluation results
EVALUATION_ID = "YOUR_EVALUATION_ID_HERE"

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

get_evaluation_response = stub.GetEvaluation(
    service_pb2.GetEvaluationRequest(
        user_app_id=userDataObject,
        evaluation_id=EVALUATION_ID, # returned after starting an evaluation
        fields=resources_pb2.FieldsValue(
            confusion_matrix=True,
            cooccurrence_matrix=True,
            label_counts=True,
            binary_metrics=True,
            test_set=True,
            metrics_by_area=True,
            metrics_by_class=True,
        ),
    ),
    metadata=metadata,
)

if get_evaluation_response.status.code != status_code_pb2.SUCCESS:
    print(get_evaluation_response.status)
    raise Exception(
        "Get model metrics failed, status: "
        + get_evaluation_response.status.description
    )

print(get_evaluation_response)
