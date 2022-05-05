################################################################
# In this section, we set the user authentication and app ID. 
# Change these strings to run your own example.
################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'

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

response = stub.ListModelTypes(
    service_pb2.ListModelTypesRequest(
        user_app_id=userDataObject
    ), 
    metadata=metadata
    )

if response.status.code != status_code_pb2.SUCCESS:
    print(response.status)
    raise Exception("Patch models failed, status: " + response.status.description)

for model_type in response.model_types:
  print(model_type)
