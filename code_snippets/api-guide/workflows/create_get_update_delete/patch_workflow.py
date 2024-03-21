###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# workflow we want to update. Change these strings to run your own example.
###################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to update your own workflow 
WORKFLOW_ID = 'my-custom-workflow'
NODE_ID_1 = 'audio-to-text'
MODEL_ID_1 = 'asr-wav2vec2-base-960h-english'
MODEL_VERSION_ID_1 = 'f4deae70a473492a8e2f9b7bb1dbee85'

NODE_ID_2 = 'text-summarization'
MODEL_ID_2 = 'text-summarization-english-distilbart-cnn-12-6'
MODEL_VERSION_ID_2 = '8279cec2221a4b1d9db774470940aebd'

NODE_ID_3 = 'english-to-french'
MODEL_ID_3 = 'translation-english-to-french-text'
MODEL_VERSION_ID_3 = 'c65a4a51c2b646fca5f0e4bf1ff200d7'

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

patch_workflows_response = stub.PatchWorkflows(
    service_pb2.PatchWorkflowsRequest(
      user_app_id=userDataObject,  
      action="overwrite",
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
              )
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
            resources_pb2.WorkflowNode(
              id=NODE_ID_3,
              model=resources_pb2.Model(
                id=MODEL_ID_3,
                model_version=resources_pb2.ModelVersion(
                  id=MODEL_VERSION_ID_3
                )
              ),
              node_inputs=[
                  resources_pb2.NodeInput(node_id=NODE_ID_2) 
                  ]
            ),
          ]
        )
      ]
    ),
    metadata=metadata
)

if patch_workflows_response.status.code != status_code_pb2.SUCCESS:
    print(patch_workflows_response.status)
    raise Exception("Patch workflows failed, status: " + patch_workflows_response.status.description)