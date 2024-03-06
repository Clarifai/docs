from clarifai.client.user import User
from PIL import Image
import requests
from IPython.display import display

# Fill in your user ID, app ID, and personal access token (PAT)
USER_ID = ''
APP_ID = ''
PAT = ''

# Initialize a User object with your credentials
client = User(user_id=USER_ID, pat=PAT)

# Create an application with the specified app ID and base workflow
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# URLs of images to be uploaded
urls = [
    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"
]

# Initialize an Inputs object for uploading images and a Search object for searching
input_obj = app.inputs()
search = app.search(top_k=2)

# Upload images from the provided URLs
for i, url in enumerate(urls):
    input_obj.upload_from_url(input_id=f"input{i}", image_url=url)

# Perform a search query to find images (filters for images only)
res = search.query(filters=[{'input_types': ['image']}])

# Retrieve the URL of the first image from the search results
for r in res:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the found image
print(hit)

# Display the found image
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300, 250))
display(hit_img)