###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# KNN model we want to create. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own KNN model
MODEL_ID = 'my-knn-face-classifier-model'
CONCEPT_ID_1 = 'concept-id-1'
CONCEPT_ID_2 = 'concept-id-2'

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

post_models_response = stub.PostModels(
    service_pb2.PostModelsRequest(
        user_app_id=userDataObject,  
        models=[
            resources_pb2.Model(
                id=MODEL_ID,
                model_type_id="knn-concept",
                output_info=resources_pb2.OutputInfo(
                    data=resources_pb2.Data(
                        concepts=[
                            resources_pb2.Concept(id=CONCEPT_ID_1),
                            resources_pb2.Concept(id=CONCEPT_ID_2)
                        ]
                    )
                )
            )
        ]
    ),
    metadata=metadata
)

if post_models_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Failed response, status: " + str(post_models_response.status))
