###################################################################################
# In this section, we set the user authentication, app ID, and the ID of the 
# workflow we want to delete. Change these strings to run your own example.
###################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to delete your own workflow 
WORKFLOW_ID = 'my-custom-workflow'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

delete_workflow_response = stub.DeleteWorkflow(
    service_pb2.DeleteWorkflowRequest(
      user_app_id=userDataObject,  
      workflow_id=WORKFLOW_ID
    ),
    metadata=metadata
)

if delete_workflow_response.status.code != status_code_pb2.SUCCESS:
    print(delete_workflow_response.status)
    raise Exception("Delete workflow failed, status: " + delete_workflow_response.status.description)
