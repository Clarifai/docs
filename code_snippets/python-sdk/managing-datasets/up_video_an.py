from clarifai.client.input import Inputs

url = "https://samples.clarifai.com/beer.mp4"
#replace your "user_id", "app_id", "dataset_id".
input_object = Inputs(user_id="user_id", app_id="test_app",pat=”YOUR_PAT”)

# Upload an image from a URL with a specified input ID
input_object.upload_from_url(input_id="bbox", video_url=url)

# Define bounding box coordinates for annotation
bbox_points = [.1, .1, .8, .9]

# Create an annotation using the bounding box coordinates
annotation = input_object.get_bbox_proto(input_id="video_bbox", label="glass", bbox=bbox_points)

# Upload the annotation associated with the image
input_object.upload_annotations([annotation])
