#####################################################################################################
# In this section, we set the user authentication, app ID, and the inputs extraction job ID.
# Change these strings to run your own example.
#####################################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Portal under Account > Security
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change this ID to whatever inputs you want to cancel their upload process
INPUTS_EXTRACTION_JOB_ID = "2a6f1f69cced42029986a72009e7d4da"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

cancel_inputs_extraction_response = stub.CancelInputsExtractionJobs(
    service_pb2.CancelInputsExtractionJobsRequest(
        user_app_id=userDataObject, ids=[INPUTS_EXTRACTION_JOB_ID]
    ),
    metadata=metadata,
)

if cancel_inputs_extraction_response.status.code != status_code_pb2.SUCCESS:
    print(cancel_inputs_extraction_response.status)
    raise Exception(
        "Cancel input failed, status: "
        + cancel_inputs_extraction_response.status.description
    )

print(cancel_inputs_extraction_response)
