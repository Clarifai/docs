from google.protobuf.struct_pb2 import Struct
from clarifai.client.user import User
from PIL import Image
import requests
from IPython.display import display

USER_ID=''  # Fill in your user ID
APP_ID=''   # Fill in your app ID
PAT=''      # Fill in your personal access token

# Initialize a Clarifai user with provided credentials
client = User(user_id=USER_ID, pat=PAT)

# Create a Clarifai application with provided ID and base workflow
# Replace 'Universal' with 'General' or other appropriate workflow if needed
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# Initialize a search object for the created application with top-k results set to 2
search = app.search(top_k=2)

# Define metadata for the image
metadata = Struct()
metadata.update({"filename": "XiJinping.jpg", "split": "train"})

# Specify the URL of the image to be uploaded
url = "https://samples.clarifai.com/XiJinping.jpg"

# Upload the image from the URL with associated metadata
input_obj.upload_from_url(input_id="metadata", image_url=url, metadata=metadata)

# Define metadata filter for the search query
metadata = {"filename": "XiJinping.jpg"}

# Execute the search query with the specified metadata filter
response = search.query(filters=[{"metadata": metadata}])

# Retrieve and process the search results
resp = list(response)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the retrieved image and display it
print(hit)
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)