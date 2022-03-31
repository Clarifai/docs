################################################################
# In this section, we set the user authentication and app ID. 
# Change these strings to run your own example.
################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'

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

list_annotations_response = stub.ListAnnotations(
    service_pb2.ListAnnotationsRequest(
        user_app_id=userDataObject,  
        list_all_annotations=True, 
        page=1, 
        per_page=100
    ),
    metadata=metadata
)

if list_annotations_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Failed response, status: " + str(list_annotations_response.status))


for annotation in list_annotations_response.annotations:
    if not annotation.data or not annotation.data.regions:
        continue
    # Display results only for the base Face model.
    if annotation.model_version_id != annotation.embed_model_version_id:
        continue
    for region in annotation.data.regions:
        bbox = region.region_info.bounding_box
       # print(f"Face was detected on input ID {annotation.input_id} (URL: {input_id_to_url[annotation.input_id]})")
        print(f"\tRegion ID: {region.id}")
        print(f"\tRegion location: left={bbox.left_col:.4f}, top={bbox.top_row:.4f}, right={bbox.right_col:.4f}, bottom={bbox.bottom_row:.4f}")
        print(f"\tConfidence: {region.value:.2f}")
        print(f"\tBase Face model version ID: {annotation.embed_model_version_id}")
        print()

