#################################################################################
# In this section, we set the user authentication, app ID, and the model to wait
# for its evaluation results. Change these strings to run your own example.
#################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to wait for your own model's evaluation results
MODEL_ID = 'text-model-1' 
MODEL_VERSION_ID = '49219b5968624221ac488303dde55327'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
import time

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

while True:
    get_model_version_metrics_response = stub.GetModelVersionMetrics(
        service_pb2.GetModelVersionMetricsRequest(
            user_app_id=userDataObject,
            model_id=MODEL_ID,
            version_id=MODEL_VERSION_ID,
            fields=resources_pb2.FieldsValue(
                confusion_matrix=True,
                cooccurrence_matrix=True,
                label_counts=True,
                binary_metrics=True,
                test_set=True,
                metrics_by_area=True,
                metrics_by_class=True,
            )
        ),
        metadata=metadata
    )
    
    if get_model_version_metrics_response.status.code != status_code_pb2.SUCCESS:
        print(get_model_version_metrics_response.status)
        raise Exception("Get model version metrics failed: " + get_model_version_metrics_response.status.description)
    
    metrics_status_code = get_model_version_metrics_response.model_version.metrics.status.code
    if metrics_status_code == status_code_pb2.MODEL_EVALUATED:
        print("The model has been successfully evaluated.")
        break
    elif metrics_status_code in (status_code_pb2.MODEL_NOT_EVALUATED, status_code_pb2.MODEL_QUEUED_FOR_EVALUATION, status_code_pb2.MODEL_EVALUATING):
        print("The model hasn't been evaluated yet. Trying again shortly.")
        time.sleep(2)
    else:
        error_message = (
                str(get_model_version_metrics_response.status.code) + " " +
                get_model_version_metrics_response.status.description + " " +
                get_model_version_metrics_response.status.details
        )
        raise Exception(
            f"Expected model to evaluate, but got {error_message}. Full response: {get_model_version_metrics_response}"
        )

print("The model metrics response object:")
print(get_model_version_metrics_response)
