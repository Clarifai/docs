##########################################################################################
# In this section, we set the user authentication, app ID, model ID, and model type ID.
# Change these strings to run your own example.
#########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own model
MODEL_ID = 'zero-shot-text-model'
MODEL_TYPE_ID = 'zero-shot-text-classifier'

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

post_models_response = stub.PostModels(
    service_pb2.PostModelsRequest(
        user_app_id=userDataObject,
        models=[
            resources_pb2.Model(
                id=MODEL_ID,
                model_type_id=MODEL_TYPE_ID,
                notes='zero shot text classifier'         
            )
        ]
    ),
    metadata=metadata
)

if post_models_response.status.code != status_code_pb2.SUCCESS:
    print(post_models_response.status)
    raise Exception("Post models failed, status: " + post_models_response.status.description)
