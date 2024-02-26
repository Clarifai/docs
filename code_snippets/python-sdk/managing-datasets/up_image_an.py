from clarifai.client.input import Inputs


url = "https://samples.clarifai.com/BarackObama.jpg"
#replace your "user_id", "app_id", "dataset_id".
input_object = Inputs(user_id="user_id", app_id="test_app",pat=”YOUR_PAT”)

# Upload image data from a specified URL with a unique input ID "bbox"
input_object.upload_from_url(input_id="bbox", image_url=url)

# Define bounding box coordinates for the annotation (left, top, right, bottom)
bbox_points = [.1, .1, .8, .9]

# Generate a bounding box annotation proto with specified label ("face") and bounding box coordinates
annotation = input_object.get_bbox_proto(input_id="bbox", label="face", bbox=bbox_points)

# Upload the generated annotation to associate with the previously uploaded image
input_object.upload_annotations([annotation])
