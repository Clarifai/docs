########################################################################################
# In this section, we set the user authentication, app ID, model ID, and concept IDs.
# Change these strings to run your own example.
########################################################################################

USER_ID = "YOUR_USER_ID_HERE"
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
APP_ID = "YOUR_APP_ID_HERE"
# Change these to import your own model
MODEL_ID = "zero-shot-text-model"
CONCEPT_ID_1 = "happy"
CONCEPT_ID_2 = "sad"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

params = Struct()
params.update(
    {
        "toolkit":"HuggingFace",
        "pipeline_name":"zero-shot-classification",
        "model_name":"facebook/bart-large-mnli",
        "tokenizer_config":{},
        "use_gpu": True
    }
    )

metadata = (("authorization", "Key " + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_versions = stub.PostModelVersions(
    service_pb2.PostModelVersionsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID,
        model_versions=[
            resources_pb2.ModelVersion(
                import_info=resources_pb2.ImportInfo(
                    params=params,
                ),
                output_info=resources_pb2.OutputInfo(
                    data=resources_pb2.Data(
                        concepts=[
                            resources_pb2.Concept(id=CONCEPT_ID_1),
                            resources_pb2.Concept(id=CONCEPT_ID_2)
                            ]
                    ),
                ),
            )
        ],
    ),
    metadata=metadata,
)

if post_model_versions.status.code != status_code_pb2.SUCCESS:
    print(post_model_versions.status)
    raise Exception("Post models versions failed, status: " + post_model_versions.status.description)