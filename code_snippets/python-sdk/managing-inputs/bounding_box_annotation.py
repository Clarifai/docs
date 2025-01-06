# Start by uploading the image with a specific input ID as described earlier
# For example, you can upload this image: https://samples.clarifai.com/BarackObama.jpg
# Then, after successfully uploading it, apply the bounding box annotations

from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# Upload bounding box annotations
bbox_points = [.1, .1, .8, .9]  # Coordinates of the bounding box
annotation = input_object.get_bbox_proto(input_id="bbox", label="face", bbox=bbox_points, label_id="id-face", annot_id="demo")
input_object.upload_annotations([annotation])
