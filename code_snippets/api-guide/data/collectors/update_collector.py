###############################################################################
# In this section, we set the user authentication, app ID, and details of the
# collector we want to update. Change these strings to run your own example.
###############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to update your own collector
COLLECTOR_ID = 'YOUR_COLLECTOR_ID_HERE'
COLLECTOR_DESCRIPTION = 'YOUR_COLLECTOR_DESCRIPTION_HERE'
PRE_QUEUE_WORKFLOW_ID = 'YOUR_PRE_WORKFLOW_ID_HERE'
POST_QUEUE_WORKFLOW_ID = 'YOUR_POST_WORKFLOW_ID_HERE'
MODEL_ID = 'YOUR_MODEL_ID_HERE'
MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_ID_HERE' 
POST_INPUTS_KEY_ID = 'YOUR_KEY_ID_HERE'
CALLER_USER_ID = 'YOUR_CALLER_USER_ID_HERE'

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

patch_collectors_response = stub.PatchCollectors(
    service_pb2.PatchCollectorsRequest(
        user_app_id=userDataObject,
        action = 'overwrite',
        collectors=[
            resources_pb2.Collector(
                id=COLLECTOR_ID,
                description=COLLECTOR_DESCRIPTION,
                pre_queue_workflow_id=PRE_QUEUE_WORKFLOW_ID,
                post_queue_workflow_id=POST_QUEUE_WORKFLOW_ID,
                collector_source=resources_pb2.CollectorSource(
                    api_post_model_outputs_collector_source=resources_pb2.APIPostModelOutputsCollectorSource(
                        model_user_id=USER_ID,
                        model_app_id=APP_ID,
                        model_id=MODEL_ID,
                        model_version_id=MODEL_VERSION_ID,
                        post_inputs_key_id=POST_INPUTS_KEY_ID,
                        caller_user_id=CALLER_USER_ID
                    )
                )
            )
        ]
    ),
    metadata=metadata
)

if patch_collectors_response.status.code != status_code_pb2.SUCCESS:
    print(patch_collectors_response.status)  
    raise Exception("Patch collectors failed, status: " + patch_collectors_response.status.description)
    