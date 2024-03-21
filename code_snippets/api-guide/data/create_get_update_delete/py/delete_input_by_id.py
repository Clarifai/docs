##############################################################################
# In this section, we set the user authentication, app ID, and the ID of the 
# input we want to delete. Change these strings to run your own example.
##############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this based on the input you want to delete
INPUT_ID = '2e9c4a86555d40ffb47c7b045d7e3048'

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

delete_input_response = stub.DeleteInput(
    service_pb2.DeleteInputRequest(
    user_app_id=userDataObject, 
    input_id=INPUT_ID
    ),
    metadata=metadata
)

if delete_input_response.status.code != status_code_pb2.SUCCESS:
    print(delete_input_response.status)
    raise Exception("Delete input failed, status: " + delete_input_response.status.description)
