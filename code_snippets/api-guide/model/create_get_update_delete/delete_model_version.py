##################################################################################
# In this section, we set the user authentication, app ID, and the ID and version
# of the model we want to delete. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to your own model ID and version
MODEL_ID = 'petsID'
MODEL_VERSION_ID = '9641cbbb019b424db17e593b48ebc7ff'

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

delete_model_version_response = stub.DeleteModelVersion(
    service_pb2.DeleteModelVersionRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        version_id=MODEL_VERSION_ID
    ),
    metadata=metadata
)

if delete_model_version_response.status.code != status_code_pb2.SUCCESS:
    print(delete_model_version_response.status)
    raise Exception("Delete model version failed, status: " + delete_model_version_response.status.description)
