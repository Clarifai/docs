from clarifai.client.input import Inputs
video_url = "https://samples.clarifai.com/beer.mp4"
input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")

# You can also upload data through Bytes and Filepath,

# Upload from file
# input_obj.upload_from_file(input_id='video_data', video_file=’video_filepath')

# Upload from bytes
# input_obj.upload_from_bytes(input_id='video_data’, video_bytes=video)

input_obj.upload_from_url(
    input_id="video_data", video_url= video_url
)