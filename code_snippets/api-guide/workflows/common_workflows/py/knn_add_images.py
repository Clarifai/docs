#############################################################################
# In this section, we set the user authentication, app ID, and the URLs of 
# the images we want to add. Change these strings to run your own example.
#############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to add your own images
IMAGE_URL_1 = 'https://samples.clarifai.com/model-gallery/images/face-001.jpg'
IMAGE_URL_2 = 'https://samples.clarifai.com/model-gallery/images/face-003.jpg'

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

image_urls = [
    IMAGE_URL_1,
    IMAGE_URL_2
]
post_inputs_response = stub.PostInputs(
    service_pb2.PostInputsRequest(
        user_app_id=userDataObject,  
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(url=url)
                )
            )
            for url in image_urls
        ]
    ),
    metadata=metadata
)


if post_inputs_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("Failed response, status: " + str(post_inputs_response.status))
