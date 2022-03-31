###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# VTR Workflow we want to build. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to build your own VTR Workflow
WORKFLOW_ID = 'visual-text-recognition-id'

WORKFLOWNODE_ID_1 = 'detect-concept'
MODEL_ID_1 = '2419e2eae04d04f820e5cf3aba42d0c7'
MODEL_VERSION_ID_1 = '75a5b92a0dec436a891b5ad224ac9170'

WORKFLOWNODE_ID_2 = 'image-crop'
MODEL_ID_2 = 'ce3f5832af7a4e56ae310d696cbbefd8'
MODEL_VERSION_ID_2 = 'a78efb13f7774433aa2fd4864f41f0e6'

WORKFLOWNODE_ID_3 = 'image-to-text'
MODEL_ID_3 = '9fe78b4150a52794f86f237770141b33'
MODEL_VERSION_ID_3 = 'd94413e582f341f68884cac72dbd2c7b'

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
                            id=MODEL_ID_1,
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_1
                            )
                        )
                    ),
                    resources_pb2.WorkflowNode(
                        id=WORKFLOWNODE_ID_2,
                        model=resources_pb2.Model(
                            id=MODEL_ID_2,
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_2
                                )
                            ),
                            node_inputs=[
                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_1)
                            ]
                        ),
                    resources_pb2.WorkflowNode(
                        id=WORKFLOWNODE_ID_3,
                        model=resources_pb2.Model(
                            id=MODEL_ID_3,
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_3
                                )
                            ),
                            node_inputs=[
                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_2)
                            ]
                        ),
                ]
            )
        ]
    ),
    metadata=metadata
)

if post_workflows_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Post workflows failed, status: " + post_workflows_response.status.description)
