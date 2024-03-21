##################################################################
# In this section, we set the user authentication and app ID.
# Change these strings to run your own example.
##################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
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

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

list_collectors_response = stub.ListCollectors(
    service_pb2.ListCollectorsRequest(user_app_id=userDataObject),
    metadata=metadata
)

if list_collectors_response.status.code != status_code_pb2.SUCCESS:
    print(list_collectors_response.status)
    raise Exception("List collectors failed, status: " + list_collectors_response.status.description)

for collector in list_collectors_response.collectors:
    print(collector)
    
#print(list_collectors_response.collectors)