#########################################################################################
# In this section, we set the user authentication, user and app ID, model ID, and
# audio URL. Change these strings to run your own example.
########################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = "YOUR_PAT_HERE"
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "facebook"
APP_ID = "asr"
# Change these to make your own predictions
MODEL_ID = "asr-wav2vec2-base-960h-english"
AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav"

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

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(audio=resources_pb2.Audio(url=AUDIO_URL))
            )
        ],
    ),
    metadata=metadata,
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception(
        "Post workflow results failed, status: "
        + post_model_outputs_response.status.description
    )

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

# Print the output
print(output.data.text.raw)
