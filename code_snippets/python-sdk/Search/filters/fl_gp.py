from clarifai.client.user import User 
from PIL import Image 
import requests 
from IPython.display import display 

USER_ID=''  # Specify your Clarifai user ID
APP_ID=''   # Specify your Clarifai application ID
PAT=''      # Specify your Clarifai personal access token

# Create a User instance with the specified user ID and personal access token
client = User(user_id=USER_ID, pat=PAT)

# Create an application instance using the specified application ID and base workflow ('Universal')
app = client.create_app(app_id=APP_ID, base_workflow="Universal")

# Initialize a search object associated with the created application, specifying the maximum number of results to retrieve
search = app.search(top_k=2)

# Define the URL of the image to be uploaded for geolocation-based filtering
url = "https://samples.clarifai.com/XiJinping.jpg"

# Upload the image from the specified URL with associated geolocation information (longitude and latitude)
input_obj.upload_from_url(input_id="geo", image_url=url, geo_info=[-30.0, 40.0])

# Execute a search query with a filter based on geolocation information (longitude, latitude, and radius)
response = search.query(filters=[{"geo_point": {'longitude':40.0, 'latitude':-30.0, 'geo_limit': 100}}])

# Convert the response to a list and retrieve the URL of the first image hit
resp = list(response)
for r in resp:
    hit = r.hits[0].input.data.image.url
    break

# Print the URL of the hit image
print(hit)

# Open the hit image using requests, resize it, and display it
hit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))
display(hit_img)