##############################################################################
# In this section, we set the user authentication, app ID, workflow ID, and  
# image URL. Change these strings to run your own example.
##############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to make your own predictions
WORKFLOW_ID = 'my-custom-workflow'
IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'

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

post_workflow_results_response = stub.PostWorkflowResults(
    service_pb2.PostWorkflowResultsRequest(
        user_app_id=userDataObject,  
        workflow_id=WORKFLOW_ID,
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                    )
                )
            )
        ]
    ),
    metadata=metadata
)
if post_workflow_results_response.status.code != status_code_pb2.SUCCESS:
    print(post_workflow_results_response.status)
    raise Exception("Post workflow results failed, status: " + post_workflow_results_response.status.description)

# We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult
results = post_workflow_results_response.results[0]

# Each model we have in the workflow will produce one output.
for output in results.outputs:
    model = output.model

    print("Predicted concepts for the model `%s`" % model.name)
    for concept in output.data.concepts:
        print("\t%s %.2f" % (concept.name, concept.value))

# Uncomment this line to print the full Response JSON
#print(results)