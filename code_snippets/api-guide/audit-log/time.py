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
from google.protobuf.timestamp_pb2 import Timestamp
from datetime import datetime

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID)

# Helper function to convert string to Timestamp
def string_to_timestamp(date_string):
    dt = datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")
    ts = Timestamp()
    ts.FromDatetime(dt)
    return ts

# Convert timestamps
timestamp_from = string_to_timestamp("2024-05-01T00:00:00Z")
timestamp_to = string_to_timestamp("2024-05-31T23:59:59Z")

post_audit_log_searches = stub.PostAuditLogSearches(
    service_pb2.PostAuditLogSearchesRequest(
        user_app_id=userDataObject,
        query=resources_pb2.AuditLogQuery(
            timestamp_from=timestamp_from,
            timestamp_to=timestamp_to
        )
    ),
    metadata=metadata
)

if post_audit_log_searches.status.code != status_code_pb2.SUCCESS:
    print(post_audit_log_searches.status)
    raise Exception("Post audit log searches failed, status: " + post_audit_log_searches.status.description)

print(post_audit_log_searches)
