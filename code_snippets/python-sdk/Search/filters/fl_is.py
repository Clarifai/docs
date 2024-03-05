from google.protobuf.struct_pb2 import Struct
from clarifai.client.user import User
from PIL import Image
import requests
from IPython.display import display

# Replace with your Clarifai user ID, app ID, and personal access token (PAT)
USER_ID = ''
APP_ID = ''
PAT = ''

# Initialize Clarifai user with specified user ID
client = User(user_id=USER_ID)

# Create a Clarifai application with the provided app ID, using the 'Universal' base workflow
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# Initialize a search object for the application with a maximum of 2 results
search = app.search(top_k=2)

# URL of the image to be uploaded for search
url = "https://samples.clarifai.com/XiJinping.jpg"

# Upload the image from the specified URL with an input ID of 'geo'
input_obj.upload_from_url(input_id="geo", image_url=url)

# Query the application's search with a filter to retrieve inputs with a status code of 30000
response = search.query(filters=[{'input_status_code': 30000}])

# Convert the response to a list and retrieve the URL of the first hit input
resp = list(response)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the hit input
print(hit)

# Open and display the image corresponding to the hit input URL
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)