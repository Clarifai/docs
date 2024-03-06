from clarifai.client.search import Search
from clarifai.client.input import Inputs
from PIL import Image
import requests
from IPython.display import display

# Define your Clarifai credentials
USER_ID = ''
APP_ID = ''
PAT = ''

# Initialize the Clarifai client with your credentials
client = User(user_id=USER_ID)

# Create an application within Clarifai with the specified ID and base workflow
# The 'Universal' workflow is a general-purpose workflow that can handle various types of data
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# Initialize a search object for the specified user, application, and access token
s = Search(user_id=USER_ID, app_id=APP_ID, pat=PAT)

# Initialize an Inputs object for the specified user, application, and access token
inp_obj = Inputs(user_id=USER_ID, app_id=APP_ID, pat=PAT)

# Prepare an input protobuf message from the provided image URL
input_proto = inp_obj.get_input_from_url(
        input_id="dog-tiff",
        image_url="https://samples.clarifai.com/dog.tiff",
        labels=["dog"],
        geo_info=[-30.0, 40.0],  # longitude, latitude
)

# Upload the prepared input protobuf message to the Clarifai application
inp_obj.upload_inputs([input_proto])

# Perform a search query with specified ranks and filters
response = s.query(ranks=[{"image_url": "https://samples.clarifai.com/dog.tiff"}], filters=[{"concepts": [{'name':'dog','value':1}]}])

# Process the response to extract the URL of the first matching image
resp = list(response)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the matched image
print(hit)

# Open the matched image URL, resize it, and display it
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)