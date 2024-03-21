###############################################################
# In this section, we set the user authentication and app ID. 
# Change these strings to run your own example.
###############################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'

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

# To start from beginning, do not provide the last_id parameter.
stream_inputs_response = stub.StreamInputs(
    service_pb2.StreamInputsRequest(
        user_app_id=userDataObject,
        per_page=5,
        # descending = True # Set to reverse order
    ),
    metadata=metadata
)

if stream_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(stream_inputs_response.status)
    raise Exception("Stream inputs failed, status: " + stream_inputs_response.status.description)

print("First response (starting from the first input):")
for input_object in stream_inputs_response.inputs:
    print("\t" + input_object.id)

last_id = stream_inputs_response.inputs[-1].id

# Set last_id to get the next set of inputs. The returned inputs will not include the last_id input.
stream_inputs_response = stub.StreamInputs(
    service_pb2.StreamInputsRequest(
        user_app_id=userDataObject,
        per_page=5, 
        last_id=last_id
    ),
    metadata=metadata
)

print(f"Second response (first input is the one following input ID {last_id}):")
for input_object in stream_inputs_response.inputs:
    print("\t" + input_object.id)