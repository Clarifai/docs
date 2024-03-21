#######################################################################################
# In this section, we set the user authentication, app ID, and the ID of the workflow
# we want to make as default. Change these strings to run your own example.
#######################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to make your own default workflow
DEFAULT_WORKFLOW_ID = 'auto-annotation-workflow-id'

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

patch_apps_response = stub.PatchApps(
    service_pb2.PatchAppsRequest(
        user_app_id=userDataObject,  
        action="overwrite",
        apps=[
            resources_pb2.App(
                id=APP_ID,
                default_workflow_id=DEFAULT_WORKFLOW_ID
            )
        ]
    ),
    metadata=metadata
)

if patch_apps_response.status.code != status_code_pb2.SUCCESS:
    print(patch_apps_response.status)
    raise Exception("Patch apps failed, status: " + patch_apps_response.status.description)

