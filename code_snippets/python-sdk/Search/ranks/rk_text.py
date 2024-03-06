from clarifai.client.user import User  # Importing the User class from the Clarifai client library for user-related functionalities
from PIL import Image  # Importing the Image module from the Python Imaging Library (PIL) for image processing
import requests  # Importing the requests library to handle HTTP requests
from IPython.display import display  # Importing the display function from IPython.display module for displaying images in IPython

USER_ID=''  # Placeholder for user ID
APP_ID=''  # Placeholder for application ID
PAT=''  # Placeholder for personal access token (PAT)

# Initialize the User object with user ID and PAT
client = User(user_id=USER_ID, pat=PAT)

# Create a new application with specified ID and base workflow
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# List of image URLs to be uploaded
urls = [
    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"
]

input_obj = app.inputs()  # Initialize Inputs object to manage input data

# Upload images from URLs to the application
for i, url in enumerate(urls):
    input_obj.upload_from_url(input_id=f"input{i}", image_url=url)

# Initialize the search functionality for the application with top_k parameter set to 1
search = app.search(top_k=1)

# Perform a search query with a specified text rank
response = search.query(ranks=[{"text_raw": "Red pineapples on the beach."}])

# Extract the URL of the first hit from the search response
for r in response:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the hit image
print(hit)

# Open the hit image from URL, resize it, and display it
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)
