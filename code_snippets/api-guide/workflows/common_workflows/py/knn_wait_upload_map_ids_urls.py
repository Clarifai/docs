################################################################
# In this section, we set the user authentication and app ID. 
# Change these strings to run your own example.
################################################################

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
import time

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

while True:
    list_inputs_response = stub.ListInputs(
        service_pb2.ListInputsRequest(
            user_app_id=userDataObject,  
            page=1, 
            per_page=100
        ),
        metadata=metadata
    )

    if list_inputs_response.status.code != status_code_pb2.SUCCESS:
        raise Exception("Failed response, status: " + str(list_inputs_response.status))

    for the_input in list_inputs_response.inputs:
        input_status_code = the_input.status.code
        if input_status_code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:
            continue
        elif input_status_code in (status_code_pb2.INPUT_DOWNLOAD_PENDING, status_code_pb2.INPUT_DOWNLOAD_IN_PROGRESS):
            print("Not all inputs have been downloaded yet. Checking again shortly.")
            break
        else:
            error_message = (
                    str(input_status_code) + " " +
                    the_input.status.description + " " +
                    the_input.status.details
            )
            raise Exception(
                f"Expected inputs to download, but got {error_message}. Full response: {list_inputs_response}"
            )
    else:
        # Once all inputs have been successfully downloaded, break the while True loop
        print("All inputs have been successfully downloaded.")
        break
    time.sleep(2)


input_id_to_url = {inp.id: inp.data.image.url for inp in list_inputs_response.inputs} # Note that we'll use input_id_to_url in the next List the Annotations example

print(list_inputs_response)