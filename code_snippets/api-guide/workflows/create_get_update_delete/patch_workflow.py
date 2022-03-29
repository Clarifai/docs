###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# workflow we want to update. Change these strings to run your own example.
###################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to update your own workflow 
WORKFLOW_ID = 'my-custom-workflow'
NODE_ID_1 = 'travel-concepts'
MODEL_ID_1 = 'ccc28c313d69466f836ab83287a54ed9'
MODEL_VERSION_ID_1 = 'cce28c313d69466f836ab83287a54ed9'

NODE_ID_2 = 'nsfw-concepts'
MODEL_ID_2 = 'ccc76d86d2004ed1a38ba0cf39ecb4b1'
MODEL_VERSION_ID_2 = 'cc76a92beaeb4d8495a58ba197998158'

NODE_ID_3 = 'wedding-concepts'
MODEL_ID_3 = 'c386b7a870114f4a87477c0824499348'
MODEL_VERSION_ID_3 = '787cc9a002164250800598d36b072384'

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
              )
            ),
            resources_pb2.WorkflowNode(
              id=NODE_ID_3,
              model=resources_pb2.Model(
                id=MODEL_ID_3,
                model_version=resources_pb2.ModelVersion(
                  id=MODEL_VERSION_ID_3
                )
              )
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