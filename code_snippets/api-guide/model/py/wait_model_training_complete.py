###############################################################################
# In this section, we set the user authentication, app ID, and the ID of the 
# model to wait for its training. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to wait for your own model's training
MODEL_ID = 'text-model-1' 

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
    get_model_response = stub.GetModel(
        service_pb2.GetModelRequest(
             user_app_id=userDataObject,
            model_id=MODEL_ID
        ),
        metadata=metadata
    )
    
    if get_model_response.status.code != status_code_pb2.SUCCESS:
        print(get_model_response.status)
        raise Exception("Failed response, status: " + get_model_response.status.description)

    version_status_code = get_model_response.model.model_version.status.code
    if version_status_code == status_code_pb2.MODEL_TRAINED:
        print("The model has been successfully trained.")
        break
    elif version_status_code in (status_code_pb2.MODEL_QUEUED_FOR_TRAINING, status_code_pb2.MODEL_TRAINING):
        print("The model hasn't been trained yet. Trying again shortly.")
        time.sleep(2)
    else:
        error_message = (
                str(get_model_response.status.code) + " " +
                get_model_response.status.description + " " +
                get_model_response.status.details
        )
        raise Exception(
            f"Expected model to train, but got {error_message}. Full response: {get_model_response}"
        )

model_version_id = get_model_response.model.model_version.id
