##################################################################################
# In this section, we set the user authentication, app ID, and the URLs and IDs 
# of the images we want as inputs. Change these strings to run your own example.
##################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever inputs you want to add
IMAGE_URL_1 = 'https://samples.clarifai.com/metro-north.jpg'
IMAGE_URL_2 = 'https://samples.clarifai.com/puppy.jpeg'
INPUT_ID_1 = 'mytrain'
INPUT_ID_2 = 'mypuppy'

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

post_inputs_response = stub.PostInputs(
    service_pb2.PostInputsRequest(
        user_app_id=userDataObject,
        inputs=[
            resources_pb2.Input(
                id=INPUT_ID_1,
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL_1,
                        allow_duplicate_url=True
                    )
                )
            ),
            resources_pb2.Input(
                id=INPUT_ID_2,
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL_2,
                        allow_duplicate_url=True
                    )
                )
            ),
        ]
    ),
    metadata=metadata
)

if post_inputs_response.status.code != status_code_pb2.SUCCESS:
    print("There was an error with your request!")
    for input_object in post_inputs_response.inputs:
        print("Input " + input_object.id + " status:")
        print(input_object.status)    
    raise Exception("Post inputs failed, status: " + post_inputs_response.status.description)
