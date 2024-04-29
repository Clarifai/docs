#################################################################################
# In this section, we set the user authentication, app ID, and task IDs. 
# Change these strings to run your own example.
#################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to delete your own tasks
TASK_ID_1 = 'd1f2f891da9844ccafed93a18574b027'
TASK_ID_2 = 'd1f2f891da9844ccafed93a18574b027'

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

delete_tasks_response = stub.DeleteTasks(
    service_pb2.DeleteTasksRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT       
        ids=[TASK_ID_1, TASK_ID_2] 

    ),
    metadata=metadata
)

if delete_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(delete_tasks_response.status)
    raise Exception('Delete tasks failed, status: ' + delete_tasks_response.status.description)
