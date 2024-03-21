###############################################################################
# In this section, we set the user authentication, app ID, and the input's ID
# Change these strings to run your own example.
###############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this ID to whatever input you want its details
INPUT_ID = 'eec128fd81974543bafff48702edca4d'

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

get_input_response = stub.GetInput(
    service_pb2.GetInputRequest(
        user_app_id=userDataObject, 
        input_id=INPUT_ID
    ),
    metadata=metadata
)

if get_input_response.status.code != status_code_pb2.SUCCESS:
    print(get_input_response.status)
    raise Exception("Get input failed, status: " + get_input_response.status.description)

input_object = get_input_response.input
print(input_object)