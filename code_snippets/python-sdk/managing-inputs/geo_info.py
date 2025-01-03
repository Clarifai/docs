from clarifai.client.input import Inputs

# URL of the image to upload
image_url = "https://samples.clarifai.com/Ferrari.jpg"

# Provide the Geoinfo to be added to the input
# geo_info=[longitude, latitude]
geo_points = [102,73]

# Create an Inputs object with user_id and app_id
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# Upload the image from the URL with associated GeoInfo
input_object.upload_from_url(input_id="geo_info", image_url=image_url, geo_info=geo_points)
