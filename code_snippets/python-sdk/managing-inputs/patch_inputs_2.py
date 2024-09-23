from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# Upload the image with a specific input ID
input_object.upload_from_url(input_id="polygon", image_url="https://samples.clarifai.com/BarackObama.jpg")

# Upload initial polygon annotations
polygon_pts = [[.1,.1],[.1,.9],[.9,.9],[.9,.1]] # Coordinates of the polygon
annotation = input_object.get_mask_proto(input_id="polygon", label="label", polygons=polygon_pts, annot_id="annotation_id")
input_object.upload_annotations([annotation])

# Update existing polygon annotations with new coordinates
polygon_pts = [[.15,.15],[.15,.95],[.95,.95],[.95,.15]] # New coordinates of the polygon
annotation = input_object.get_mask_proto(input_id="polygon", label="label", polygons=polygon_pts, annot_id="annotation_id")
input_object.patch_annotations([annotation],action='merge')

# Remove the polygon annotations
polygon_pts = [[.3,.3],[.3,.7],[.8,.8],[.7,.3]] # Coordinates of the polygon to be removed
annotation = input_object.get_mask_proto(input_id="polygon", label="label", polygons=polygon_pts, annot_id="annotation_id")
input_object.patch_annotations([annotation],action='remove')
