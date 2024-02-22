from clarifai.client.input import Inputs

img_url = "https://samples.clarifai.com/metro-north.jpg"
input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")
# You can also upload data through Bytes and Filepath,

# Upload from file
# input_obj.upload_from_file(input_id='demo', image_file=’image_filepath')

# Upload from bytes
# input_obj.upload_from_bytes(input_id='demo', image_bytes=image)

input_obj.upload_from_url(input_id="demo", image_url=img_url)
