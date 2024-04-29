#################################################################################
# In this section, we set the user authentication, app ID, and task ID.
# Change these strings to run your own example.
#################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to get a task by its ID
TASK_ID = 'c454edb9446c4de58d4fe3a66c286e55'

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

get_tasks_response = stub.GetTask(
    service_pb2.GetTaskRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        task_id=TASK_ID
    ),
    metadata=metadata
)

if get_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(get_tasks_response.status)
    raise Exception(f'Get task failed, status: {get_tasks_response.status.description}')

print(get_tasks_response)
