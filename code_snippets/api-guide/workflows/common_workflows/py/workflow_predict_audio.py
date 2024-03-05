###########################################################################################
# In this section, we set the user authentication, user and app ID, workflow ID, and
# audio URL. Change these strings to run your own example.
##########################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
USER_ID = "clarifai"
APP_ID = "main"
# Change these to make your own predictions
WORKFLOW_ID = "asr-sentiment"
AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav"
# Or, to use a local audio file, assign the location variable
# AUDIO_FILE_LOCATION = "YOUR_AUDIO_FILE_LOCATION_HERE"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(
    user_id=USER_ID, app_id=APP_ID
)  # The userDataObject is required when using a PAT

# To use a local video file, uncomment the following lines
# with open(AUDIO_FILE_LOCATION, "rb") as f:
# audio_bytes = f.read()

post_workflow_results_response = stub.PostWorkflowResults(
    service_pb2.PostWorkflowResultsRequest(
        user_app_id=userDataObject,
        workflow_id=WORKFLOW_ID,
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    audio=resources_pb2.Audio(
                        url=AUDIO_URL,
                        # base64=audio_bytes
                    )
                )
            )
        ],
    ),
    metadata=metadata,
)
if post_workflow_results_response.status.code != status_code_pb2.SUCCESS:
    print(post_workflow_results_response.status)
    raise Exception(
        "Post workflow results failed, status: "
        + post_workflow_results_response.status.description
    )

# We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult
results = post_workflow_results_response.results[0]

# Each model we have in the workflow will produce its output
for output in results.outputs:
    model = output.model
    print("Output for the model: `%s`" % model.id)
    for concept in output.data.concepts:
        print("\t%s %.2f" % (concept.name, concept.value))
    print(output.data.text.raw)

# Uncomment this line to print the full Response JSON
# print(results)
