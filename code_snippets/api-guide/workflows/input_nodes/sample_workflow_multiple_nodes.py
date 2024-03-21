###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# workflow we want to build. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to build your own workflow with multiple connected nodes
# Note that we've also added as comments the values of most of these variables against their names in the code below

WORKFLOW_ID = 'auto-annotation-workflow-id'
NODE_ID_1 = 'general-embed'
MODEL_ID_1 = 'bbb5f41425b8468d9b7a554ff10f8581'
MODEL_VERSION_ID_1 = 'bb186755eda04f9cbb6fe32e816be104'

NODE_ID_2 = 'general-concept'
MODEL_ID_2 = 'aaa03c23b3724a16a56b629203edc62c'
MODEL_VERSION_ID_2 = 'aa7f35c01e0642fda5cf400f543e7c40'

NODE_ID_3 = 'general-cluster'
MODEL_ID_3 = 'cccbe437d6e54e2bb911c6aa292fb072'
MODEL_VERSION_ID_3 = 'cc2074cff6dc4c02b6f4e1b8606dcb54'

NODE_ID_4 = 'mapper'
SYNONYM_MODEL_ID = 'YOUR_SYNONYM_MODEL_ID'
SYNONYM_MODEL_VERSION_ID = 'YOUR_SYNONYM_MODEL_VERSION_ID'

NODE_ID_5 = 'greater-than'
GREATER_THAN_MODEL_ID = 'YOUR_GREATER_THAN_MODEL_ID'
GREATER_THAN_MODEL_VERSION_ID = 'YOUR_GREATER_THAN_MODEL_VERSION_ID'

NODE_ID_6 = 'less-than'
LESS_THAN_MODEL_ID = 'YOUR_LESS_THAN_MODEL_ID'
LESS_THAN_MODEL_VERSION_ID = 'YOUR_LESS_THAN_MODEL_VERSION_ID'


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
                id=WORKFLOW_ID, # auto-annotation-workflow-id
                nodes=[
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_1, # general-embed
                        model=resources_pb2.Model(
                            id=MODEL_ID_1, # bbb5f41425b8468d9b7a554ff10f8581
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_1 # bb186755eda04f9cbb6fe32e816be104
                            )
                        )
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_2, # general-concept
                        model=resources_pb2.Model(
                            id=MODEL_ID_2, # aaa03c23b3724a16a56b629203edc62c
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_2 # aa7f35c01e0642fda5cf400f543e7c40
                            )
                        )
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_3, # general-cluster
                        model=resources_pb2.Model(
                            id=MODEL_ID_3, # cccbe437d6e54e2bb911c6aa292fb072
                            model_version=resources_pb2.ModelVersion(
                                id=MODEL_VERSION_ID_3 # cc2074cff6dc4c02b6f4e1b8606dcb54
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id=NODE_ID_1) # general-embed
                        ]
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_4, # mapper
                        model=resources_pb2.Model(
                            id=SYNONYM_MODEL_ID,
                            model_version=resources_pb2.ModelVersion(
                                id=SYNONYM_MODEL_VERSION_ID
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id=NODE_ID_2) # general-concept
                        ]
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_5, # greater-than
                        model=resources_pb2.Model(
                            id=GREATER_THAN_MODEL_ID,
                            model_version=resources_pb2.ModelVersion(
                                id=GREATER_THAN_MODEL_VERSION_ID
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id=NODE_ID_4) # mapper
                        ]
                    ),
                    resources_pb2.WorkflowNode(
                        id=NODE_ID_6, # less-than
                        model=resources_pb2.Model(
                            id=LESS_THAN_MODEL_ID,
                            model_version=resources_pb2.ModelVersion(
                                id=LESS_THAN_MODEL_VERSION_ID
                            )
                        ),
                        node_inputs=[
                            resources_pb2.NodeInput(node_id=NODE_ID_4) # mapper
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
