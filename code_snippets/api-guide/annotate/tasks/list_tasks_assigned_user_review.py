#######################################################################
# In this section, we set the user authentication, app ID, and
# review user ID. Change these strings to run your own example.
#######################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
REVIEW_USER_ID = 'REVIEW_USER_ID_HERE'

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

list_tasks_response = stub.ListTasks(
    service_pb2.ListTasksRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT  
        review_user_ids=[REVIEW_USER_ID]     
    ),
    metadata=metadata
)

if list_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(list_tasks_response.status)
    raise Exception(f'Get task failed, status: {list_tasks_response.status.description}')

print(list_tasks_response)
