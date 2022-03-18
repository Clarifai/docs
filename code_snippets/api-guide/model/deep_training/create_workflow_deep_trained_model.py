###################################################################################
# In this section, we set the user authentication, app ID, and the details we want
# to use to create a workflow. Change these strings to run your own example.
###################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own workflow
WORKFLOW_ID = 'my-new-workflow-id' 
EMBED_MODEL_ID = 'YOUR_EMBED_MODEL_ID'
EMBED_MODEL_VERSION_ID = 'YOUR_EMBED_MODEL_VERSION_ID'
WORKFLOWNODE_ID = 'my-custom-model' 
CUSTOM_MODEL_ID = 'YOUR_CUSTOM_MODEL_ID'
CUSTOM_MODEL_VERSION_ID = 'YOUR_CUSTOM_MODEL_VERSION_ID'

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

post_workflows_response = stub.PostWorkflows(
    service_pb2.PostWorkflowsRequest(
        user_app_id=userDataObject,
        workflows=[
            resources_pb2.Workflow(
                id=WORKFLOW_ID,
                nodes=[
                    resources_pb2.WorkflowNode(
                        id="embed",
                        model=resources_pb2.Model(
                            id=EMBED_MODEL_ID,
                            model_version=resources_pb2.ModelVersion(
                                id=EMBED_MODEL_VERSION_ID
                            )
                        )
                    ),
                    resources_pb2.WorkflowNode(
                        id=WORKFLOWNODE_ID,
                        model=resources_pb2.Model(
                            id=CUSTOM_MODEL_ID,
                            model_version=resources_pb2.ModelVersion(
                                id=CUSTOM_MODEL_VERSION_ID
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id="embed")
                        ]
                    ),
                ]
            )
        ]
    ),
    metadata=metadata
)

if  post_workflows_response.status.code != status_code_pb2.SUCCESS:
    print(post_workflows_response.status)
    raise Exception("Post workflows failed, status: " +  post_workflows_response.status.description)