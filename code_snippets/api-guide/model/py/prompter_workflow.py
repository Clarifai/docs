########################################################################################
# In this section, we set the user authentication, app ID, and the details of the new
# custom workflow. Change these strings to run your own example.
########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own custom workflow
WORKFLOW_ID = 'my-custom-prompter-workflow'

NODE_ID_1 = 'prompter-model'
PROMPTER_MODEL_ID = 'my-prompter-model'
PROMPTER_MODEL_USER_ID = 'YOUR_USER_ID_HERE'
PROMPTER_MODEL_APP_ID = 'my-custom-app'
PROMPTER_MODEL_VERSION_ID = 'e851fb99a3b14df788ce11accee45c19'

NODE_ID_2 = 'text-to-text'
LLM_MODEL_ID = 'GPT-4'
LLM_MODEL_USER_ID = 'openai'
LLM_MODEL_APP_ID = 'chat-completion'
LLM_MODEL_VERSION = '5d7a50b44aec4a01a9c492c5a5fcf387'

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
                id=PROMPTER_MODEL_ID,
                user_id=PROMPTER_MODEL_USER_ID,
                app_id=PROMPTER_MODEL_APP_ID,
                model_version=resources_pb2.ModelVersion(
                  id=PROMPTER_MODEL_VERSION_ID
                )
              )
            ),
            resources_pb2.WorkflowNode(
              id=NODE_ID_2,
              model=resources_pb2.Model(
                id=LLM_MODEL_ID,
                user_id=LLM_MODEL_USER_ID,
                app_id=LLM_MODEL_APP_ID,
                model_version=resources_pb2.ModelVersion(
                  id=LLM_MODEL_VERSION
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

print(post_workflows_response)
