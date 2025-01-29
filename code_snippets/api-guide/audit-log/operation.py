#########################################################################
# In this section, we set the user authentication and user ID. 
# Change these strings to run your own example.
#########################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
USER_ID = 'YOUR_USER_ID_HERE'

###########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
###########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID)

post_audit_log_searches = stub.PostAuditLogSearches(
    service_pb2.PostAuditLogSearchesRequest(
        user_app_id=userDataObject, # The userDataObject is created in the overview and is required when using a PAT   
        query=resources_pb2.AuditLogQuery(
            operations=[resources_pb2.EventType.MODEL_CREATE, resources_pb2.EventType.WORKFLOW_CREATE, resources_pb2.EventType.APPLICATION_CREATE]
        )
    ),    
    metadata=metadata
)
if post_audit_log_searches.status.code != status_code_pb2.SUCCESS:
    print(post_audit_log_searches.status)
    raise Exception("Post audit log searches failed, status: " + post_audit_log_searches.status.description)

print(post_audit_log_searches)
