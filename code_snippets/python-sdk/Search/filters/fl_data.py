# Import necessary modules
from clarifai.client.user import User
from PIL import Image
import requests
from IPython.display import display
import pandas as pd

# Specify user credentials
USER_ID=''
APP_ID=''
PAT=''

# Initialize Clarifai client
client = User(user_id=USER_ID)

# Create an application with specified parameters
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# Create a dataset within the application
dataset = app.create_dataset(dataset_id="demo_dataset")

# Define a list of image URLs
urls = [
    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"
]

# Convert the list of URLs to a DataFrame and save it as a CSV file
df = pd.DataFrame(urls, columns=['input'])
df.to_csv("images.csv", index=False)

# Upload images to the dataset from the CSV file
dataset.upload_from_csv(csv_path='images.csv', input_type='image', csv_type='url', labels=False)

# Initialize a search instance for the application
search = app.search(top_k=2)

# Query the search with filters based on the dataset
response = search.query(filters=[{"input_dataset_ids": [dataset.id]}])

# Retrieve and display the first image hit from the search response
resp = list(response)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break
print(hit)
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)