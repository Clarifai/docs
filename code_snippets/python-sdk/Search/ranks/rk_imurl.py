from clarifai.client.user import User
from PIL import Image
import requests
from IPython.display import display

# Replace these variables with your actual user ID, app ID, and PAT (Personal Access Token)
USER_ID = ''
APP_ID = ''
PAT = ''

# Initialize a User object with the provided user ID and PAT
client = User(user_id=USER_ID, pat=PAT)

# Create an application with the provided app ID, using the Universal workflow
# The PAT is also provided for authentication
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# URLs of the images to be uploaded and searched
urls = [
    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"
]

# Initialize an Inputs object to manage input data
input_obj = app.inputs()

# Initialize a Search object to perform searches
# Limit the number of returned results to 2 (top_k=2)
search = app.search(top_k=2)

# Upload each image from the provided URLs
for i, url in enumerate(urls):
    input_obj.upload_from_url(input_id=f"input{i}", image_url=url)

# Perform a search with a specified rank (image URL)
res = search.query(ranks=[{'image_url': 'https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg'}])

# Extract the URL of the first hit from the search results
for r in res:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the hit image
print(hit)

# Open the hit image using PIL, resize it, and display it
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300, 250))
display(hit_img)