##########################################################################
# In this section, we set the user authentication, app ID, and negative 
# and positive texts. Change these strings to run your own example.
##########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Add your own batch of texts
positive_raw_texts = [
    "Marie is a published author.",
    "In three years, everyone will be happy.",
    "Nora Roberts is the most prolific romance writer the world has ever known.",
    "She has written more than 225 books.",
    "If you walk into Knoxville, you'll find a shop named Rala.",
    "There are more than 850 miles of hiking trails in the Great Smoky Mountains.",
    "Harrison Ford is 6'1\".",
    "According to Reader's Digest, in the original script of Return of The Jedi, Han Solo died.",
    "Kate travels to Doolin, Ireland every year for a writers' conference.",
    "Fort Stevens was decommissioned by the United States military in 1947.",
]
negative_text_urls = [
    "https://samples.clarifai.com/negative_sentence_1.txt",
    "https://samples.clarifai.com/negative_sentence_2.txt",
    "https://samples.clarifai.com/negative_sentence_3.txt",
    "https://samples.clarifai.com/negative_sentence_4.txt",
    "https://samples.clarifai.com/negative_sentence_5.txt",
    "https://samples.clarifai.com/negative_sentence_6.txt",
    "https://samples.clarifai.com/negative_sentence_7.txt",
    "https://samples.clarifai.com/negative_sentence_8.txt",
    "https://samples.clarifai.com/negative_sentence_9.txt",
    "https://samples.clarifai.com/negative_sentence_10.txt",
]

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
                data=resources_pb2.Data(
                    text=resources_pb2.Text(raw=raw_text),
                    concepts=[resources_pb2.Concept(id="positive", value=1)]
                )
            )
            for raw_text in positive_raw_texts
        ] + [
            resources_pb2.Input(
                data=resources_pb2.Data(
                    text=resources_pb2.Text(
                        url=text_url,
                        allow_duplicate_url=True
                    ),
                    concepts=[resources_pb2.Concept(id="negative", value=1)]
                )
            )
            for text_url in negative_text_urls
        ]
    ),
    metadata=metadata
)

if post_inputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_inputs_response.status)
    raise Exception("Failed response, status: " + post_inputs_response.status.description)

# Uncomment this line to see the structure and data of the response
#print(post_inputs_response)