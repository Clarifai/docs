###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# workflow we want to create. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own workflow
WORKFLOW_ID = 'detect-knn-workflow'
WORKFLOWNODE_ID_1 = 'face-v1.3-embed'
EMBEDDING_MODEL_ID = 'd02b4508df58432fbb84e800597b8959'
EMBEDDING_MODEL_VERSION_ID = '6ca3b762008e419583258aca49b88401'
WORKFLOWNODE_ID_2 = 'knn-classifier'
MODEL_ID = 'my-knn-face-classifier-model'
MODEL_VERSION_ID = '66cddf2be70543fab654cbe91724495c'

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

post_workflows_response = stub.PostWorkflows(
    service_pb2.PostWorkflowsRequest(
        user_app_id=userDataObject,  
        workflows=[
            resources_pb2.Workflow(
                id=WORKFLOW_ID,
                nodes=[
                    resources_pb2.WorkflowNode(
                        id=WORKFLOWNODE_ID_1,
                        model=resources_pb2.Model(
                            id=EMBEDDING_MODEL_ID,  # This is the base Face model ID
                            model_version=resources_pb2.ModelVersion(
                                id=EMBEDDING_MODEL_VERSION_ID  # This is the base Face model version ID
                            )
                        )
                    ),
                    resources_pb2.WorkflowNode(
                        id=WORKFLOWNODE_ID_2, 
                        model=resources_pb2.Model(
                            id=MODEL_ID, 
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID
                            )
                        )
                    ),
                ]
            )
        ]
    ),
    metadata=metadata
)

if post_workflows_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Failed response, status: " + str(post_workflows_response.status))
