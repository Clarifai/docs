# Start by uploading the image with a specific input ID as described earlier
# For example, you can upload this image: https://samples.clarifai.com/airplane.jpeg
# Then, after successfully uploading it, apply the polygon annotations

from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# Upload polygon annotations
#polygons=[[[x,y],...,[x,y]],...]
polygon_pts = [[.15,.24],[.4,.78],[.77,.62],[.65,.15]]
annotation = input_object.get_mask_proto(input_id="mask", label="airplane", polygons=polygon_pts)
input_object.upload_annotations([annotation])
