######################################################################################################
# In this section, we set the user authentication, user and app ID, workflow ID, and the text 
# we want as an input. Change these strings to run your own example.
######################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
USER_ID = "clarifai"
APP_ID = "main"
# Change these to make your own predictions
WORKFLOW_ID = "Language-Understanding"
RAW_TEXT = "This is a test text for testing"
# To use a hosted text file, assign the URL variable
# TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt"
# Or, to use a local text file, assign the location variable
# TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

# To use a local text file, uncomment the following lines
# with open(TEXT_FILE_LOCATION, "rb") as f:
#    file_bytes = f.read()

post_workflow_results_response = stub.PostWorkflowResults(
    service_pb2.PostWorkflowResultsRequest(
        user_app_id=userDataObject,
        workflow_id=WORKFLOW_ID,
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    text=resources_pb2.Text(
                        raw=RAW_TEXT
                        # url=TEXT_FILE_URL
                        # raw=file_bytes
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

# Each model we have in the workflow will produce one output.
for output in results.outputs:
    model = output.model

    print("Predicted concepts for the model `%s`" % model.id)
    print(output.data)

# Uncomment this line to print the full Response JSON
# print(results)
