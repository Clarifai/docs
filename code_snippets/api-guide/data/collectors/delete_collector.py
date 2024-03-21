######################################################################################
# In this section, we set the user authentication, app ID, and IDs of the collectors
# we want to delete. Change these strings to run your own example.
######################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to delete your own collectors
COLLECTOR_ID_1 = 'YOUR_COLLECTOR_ID_HERE'
COLLECTOR_ID_2 = 'YOUR_COLLECTOR_ID_HERE'

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

delete_collectors_response = stub.DeleteCollectors(
    service_pb2.DeleteCollectorsRequest(
        user_app_id=userDataObject,
        ids=[COLLECTOR_ID_1, COLLECTOR_ID_2],
        #delete_all=True #Uncomment to delete all your collectors
    ),
    metadata=metadata
)

if delete_collectors_response.status.code != status_code_pb2.SUCCESS:
    print(delete_collectors_response.status)
    raise Exception("Delete collectors failed, status: " + delete_collectors_response.status.description)
