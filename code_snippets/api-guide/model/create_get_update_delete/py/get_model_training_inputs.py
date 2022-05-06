##########################################################################
# In this section, we set the user authentication, app ID, and model ID.
# Change these strings to run your own example.
##########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to your own model ID
MODEL_ID = 'petsID'

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

list_model_inputs_response = stub.ListModelInputs(
    service_pb2.ListModelInputsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID
    ),
    metadata=metadata
)

if list_model_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(list_model_inputs_response.status)
    raise Exception("List model inputs failed, status: " + list_model_inputs_response.status.description)

for input_object in list_model_inputs_response.inputs:
    print(input_object)