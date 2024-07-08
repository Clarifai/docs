#########################################################################################
# In this section, we set the user authentication, app ID, and how we want to create an 
# image mask. Change these strings to run your own example.
#########################################################################################

# Your user and app ID
USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the new bounding boxes you want to annotate
INPUT_ID = "INPUT_ID_FROM_UI"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################


from clarifai_grpc.grpc.api.status import status_code_pb2
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        # The userDataObject is created in the overview and is required when using a PAT
        user_app_id=userDataObject,
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                data=resources_pb2.Data(
                    regions=[
                        resources_pb2.Region(
                            region_info=resources_pb2.RegionInfo(
                                mask=resources_pb2.Mask(
                                    image=resources_pb2.Image(
                                        base64=b"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"
                                    ),
                                )
                            ),
                            data=resources_pb2.Data(
                                concepts=[                                    
                                    resources_pb2.Concept(id="CONCEPT_ID_FROM_UI", value=1), # 1 means true, this concept is present                                  
                                ]
                            )
                        )
                    ]
                )
                
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(post_annotations_response.status)
    raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)
