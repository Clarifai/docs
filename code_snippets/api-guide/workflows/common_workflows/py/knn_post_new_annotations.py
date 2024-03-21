###################################################################################
# In this section, we set the user authentication, app ID, and the details of the 
# annotations we want to add. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to add your own annotations
INPUT_ID = '509188e5bc4a458cba90c05ed41e669c'
EMBED_MODEL_VERSION_ID = 'fc3b8814fbe54533a3d80a1896dc9884'
REGION_ID = '521c21ac6a7df00d95eb91c670758763'
CONCEPT_ID = 'concept-id'
CONCEPT_NAME = 'concept-name'

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

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        user_app_id=userDataObject,  
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                embed_model_version_id=EMBED_MODEL_VERSION_ID,
                data=resources_pb2.Data(
                    regions=[
                        resources_pb2.Region(
                            id=REGION_ID,
                            data=resources_pb2.Data(
                                concepts=[
                                    resources_pb2.Concept(
                                        id=CONCEPT_ID,
                                        name=CONCEPT_NAME,
                                        value=1 # 1 means true, this concept is present
                                    )
                                ]
                            )
                        )
                    ]
                )

            )
        ],
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:    
    raise Exception("Failed response, status: " + str(post_annotations_response.status))
