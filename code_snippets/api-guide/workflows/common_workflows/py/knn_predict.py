###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# prediction we want to make. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to run your own prediction
WORKFLOW_ID = 'detect-knn-workflow'
URL_TO_PREDICT_FACES_ON = 'https://samples.clarifai.com/model-gallery/images/face-005.jpg'
MODEL_ID = 'my-knn-face-classifier-model'

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
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        workflow_id=WORKFLOW_ID,
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=URL_TO_PREDICT_FACES_ON
                    )
                )
            )
        ]
    ),
    metadata=metadata
)

# We get back one result per input. Since there's one input above, one input was returned
result = post_workflow_results_response.results[0]

for output in result.outputs:
    # At this point, two outputs will be returned: one for the base Face model, and the other for our custom model.
    # At this moment, we are only interested in the results of the latter model (if you want, you may also see the
    # half-baked results of the base Face model, which is not a list of concepts, but an embedding vector)
    if output.model.id != MODEL_ID:
        continue
    print(f"The prediction of the model ID `{output.model.id}` is:")
    for concept in output.data.concepts:
        print(f"\t{concept.name} (id: {concept.id}): {concept.value:.4f}")
