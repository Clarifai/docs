##############################################################################
# In this section, we set the user authentication, app ID, and the IDs of the 
# inputs we want to delete. Change these strings to run your own example.
##############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the inputs you want to delete
INPUT_ID_1 = '97eb76d22e964c7cbbf06a51532c6fbe'
INPUT_ID_2 = '86b1272feabb45d4bcd2de51eedd729b'

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

delete_inputs_response = stub.DeleteInputs(
    service_pb2.DeleteInputsRequest(
    user_app_id=userDataObject, 
    ids=[INPUT_ID_1, INPUT_ID_2]
    ),
    metadata=metadata
)

if delete_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(delete_inputs_response.status)
    raise Exception("Delete input failed, status: " + delete_inputs_response.status.description)
