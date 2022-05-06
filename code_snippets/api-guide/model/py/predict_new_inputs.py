###########################################################################
# In this section, we set the user authentication, app ID, model details, 
# and new input samples. Change these strings to run your own example.
###########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to make your own predictions
MODEL_ID = 'text-model-1'
MODEL_VERSION_ID = '49219b5968624221ac488303dde55327' 
INPUT_TEXT = 'Butchart Gardens contains over 900 varieties of plants.'
INPUT_URL = 'https://samples.clarifai.com/negative_sentence_12.txt'

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

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        # By default, the latest model version will be used, but it doesn't hurt to set it explicitly
        version_id=MODEL_VERSION_ID,
        inputs=[
            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(raw=INPUT_TEXT))),
            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(url=INPUT_URL))),
        ]
    ),
    metadata=metadata
)

if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception("Failed response, status: " + post_model_outputs_response.status.description)

for output in post_model_outputs_response.outputs:
    text_object = output.input.data.text
    val = text_object.raw if text_object.raw else text_object.url

    print(f"The following concepts were predicted for the input `{val}`:")
    for concept in output.data.concepts:
        print(f"\t{concept.name}: {concept.value:.2f}")
