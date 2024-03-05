#####################################################################################################
# In this section, we set the user authentication, app ID, and the details of the extraction job.
# Change these strings to run your own example.
####################################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Portal under Account > Security
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to make your own extraction
INPUTS_JOB_ID = ""
CLOUD_STORAGE_URL = "s3://samples.clarifai.com/storage/"
CUSTOM_METADATA = {"id": "id001"}
DATASET_ID_1 = "dataset-1"
CONCEPT_ID_1 = "lamborghini23_A"
CONCEPT_ID_2 = "spiderman_a"

##############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

input_metadata = Struct()

input_metadata.update(CUSTOM_METADATA)

post_inputs_response = stub.PostInputsDataSources(
    service_pb2.PostInputsDataSourcesRequest(
        user_app_id=userDataObject,
        app_pat=PAT,
        data_sources=[
            resources_pb2.InputsDataSource(
                inputs_add_job_id=INPUTS_JOB_ID,
                url=resources_pb2.DataSourceURL(url=CLOUD_STORAGE_URL),
                input_template=resources_pb2.Input(
                    dataset_ids=[DATASET_ID_1],  # List of dataset IDs that this input is part of
                    data=resources_pb2.Data(
                        metadata=input_metadata,
                        concepts=[
                            resources_pb2.Concept(id=CONCEPT_ID_1, value=1),
                            resources_pb2.Concept(id=CONCEPT_ID_2, value=1),
                        ],
                    ),
                ),
            )
        ],
    ),
    metadata=metadata,
)


if post_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_inputs_response.status)
    raise Exception(
        "Post inputs failed, status: " + post_inputs_response.status.description
    )

print(post_inputs_response)
