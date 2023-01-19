##########################################################################
# In this section, we set the user authentication, app ID, model ID, and
# concept IDs. Change these strings to run your own example.
##########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own text classifier
MODEL_ID = 'text-test-1591638385' 
CONCEPT_ID_1 = 'ferrari23' 
CONCEPT_ID_2 = 'outdoors23' 

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

train_params = Struct()
train_params.update(
{
  "template": "HuggingFace",
  "num_gpus": 1
}
)

post_models_response = stub.PostModels(
service_pb2.PostModelsRequest(
  user_app_id=userDataObject,
  models=[
    resources_pb2.Model(
      id=MODEL_ID,
      model_type_id="text-classifier",
      train_info=resources_pb2.TrainInfo(params=train_params),
      output_info=resources_pb2.OutputInfo(
        data=resources_pb2.Data(
          concepts=[
            resources_pb2.Concept(id=CONCEPT_ID_1),
            resources_pb2.Concept(id=CONCEPT_ID_2)
          ]
        ),
        output_config=resources_pb2.OutputConfig(closed_environment=True)
      )
    )
  ]
),
metadata=metadata
)

if post_models_response.status.code != status_code_pb2.SUCCESS:
    print(post_models_response.status)
    raise Exception("Post models failed, status: " + post_models_response.status.description)

