####################################################################################
# In this section, we set the user authentication, app ID, input ID, annotation ID,
# and concept ID. Change these strings to run your own example.
#####################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the annotation you want to update 
INPUT_ID = '53d0362a9dfa4e03b2293375e2d0db73'
ANNOTATION_ID = '300b8e39a65e4f33ae4e15e86eaf4a3b'
CONCEPT_ID = 'bike'

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

patch_annotations_response = stub.PatchAnnotations(
    service_pb2.PatchAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        action="overwrite",
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                id=ANNOTATION_ID,
                data=resources_pb2.Data(
                    regions=[
                        resources_pb2.Region(
                            region_info=resources_pb2.RegionInfo(
                                bounding_box=resources_pb2.BoundingBox(        # move bounding box to new coordinates
                                    top_row=0.5,
                                    left_col=0.5,
                                    bottom_row=0.8,
                                    right_col=0.8
                                )
                            ),
                            data=resources_pb2.Data(    # need to provide tags you previously labeled since this is overwrite action
                                concepts=[
                                    resources_pb2.Concept(id=CONCEPT_ID, value=1.),  # 1 means true, this concept is present.
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

if patch_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(patch_annotations_response.status)
    raise Exception("Patch annotations failed, status: " + patch_annotations_response.status.description)

