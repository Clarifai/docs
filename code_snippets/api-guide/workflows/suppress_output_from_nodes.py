###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# nodes to suppress their outputs. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to suppress the outputs of your own nodes
WORKFLOW_ID = 'predict-cluster-only'
NODE_ID_1 = 'general-embed'
MODEL_ID_1 = 'bbb5f41425b8468d9b7a554ff10f8581'
MODEL_VERSION_ID_1 = 'bb186755eda04f9cbb6fe32e816be104'

NODE_ID_2 = 'general-cluster'
MODEL_ID_2 = 'cccbe437d6e54e2bb911c6aa292fb072'
MODEL_VERSION_ID_2 = 'cc2074cff6dc4c02b6f4e1b8606dcb54'

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
                        id=NODE_ID_1,
                        model=resources_pb2.Model(
                            id=MODEL_ID_1,
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_1
                            )
                        ),
                        suppress_output = True                      
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_2,
                        model=resources_pb2.Model(
                            id=MODEL_ID_2,
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_2
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id=NODE_ID_1)
                        ]
                    ),
                ]
            )
        ]
    ),
    metadata=metadata
)
                         

if post_workflows_response.status.code != status_code_pb2.SUCCESS:
    print(post_workflows_response.status)
    raise Exception("Post workflows failed, status: " + post_workflows_response.status.description) 
