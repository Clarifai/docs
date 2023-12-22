###########################################################################################
# In this section, we set the user authentication, app ID, and the model evaluation ID.
# Change these strings to run your own example.
##########################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
APP_ID = "text-search-app"
# Change these to wait for your own model's evaluation results
EVALUATION_ID = "e223fa4ac14b4784b223cd31cc545f34"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
import time

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

while True:
    get_evaluation_response = stub.GetEvaluation(
        service_pb2.GetEvaluationRequest(
            user_app_id=userDataObject,
            evaluation_id=EVALUATION_ID,
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
        raise Exception("Get model version metrics failed: " + get_evaluation_response.status.description)

    print(get_evaluation_response)
    metrics_status_code = get_evaluation_response.eval_metrics.status.code
    if metrics_status_code == status_code_pb2.MODEL_EVALUATED:
        print("The model has been successfully evaluated.")
        break
    elif metrics_status_code in (
        status_code_pb2.MODEL_NOT_EVALUATED,
        status_code_pb2.MODEL_QUEUED_FOR_EVALUATION,
        status_code_pb2.MODEL_EVALUATING,
    ):
        print("The model hasn't been evaluated yet. Trying again shortly.")
        time.sleep(2)
    else:
        error_message = (
            str(get_evaluation_response.status.code) + " " + 
            get_evaluation_response.status.description + " " + 
            get_evaluation_response.status.details
        )
        raise Exception(
            f"Expected model to evaluate, but got {error_message}. Full response: {get_evaluation_response}"
        )

print("The model metrics response object:")
print(get_evaluation_response)
