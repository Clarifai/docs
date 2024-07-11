from clarifai.client.input import Inputs


url = "https://samples.clarifai.com/BarackObama.jpg"
#replace your "user_id", "app_id", "dataset_id".
input_object = Inputs(user_id="USER_ID", app_id="APP_ID",pat="YOUR_PAT")

# Upload image data from a specified URL with a unique input ID "mask"
input_object.upload_from_url(input_id="mask", image_url=url)

# Define mask points
mask = [[0.87, 0.66],[0.45 , 1.0], [0.82 ,0.42]]# polygon points

annotation = input_object.get_mask_proto(input_id="mask", label="obama", polygons=mask)

# Upload the generated annotation to associate with the previously uploaded image
input_object.upload_annotations([annotation])