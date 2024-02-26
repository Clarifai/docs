from clarifai.client.input import Inputs

audio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"
input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")

# You can also upload data through Bytes and Filepath,

# Upload from file
# input_obj.upload_from_file(input_id='audio_data', audio_file=’audio_filepath')

# Upload from bytes
# input_obj.upload_from_bytes(input_id='audio_data’, audio_bytes=audio)

input_obj.upload_from_url(
    input_id="audio_data",
    audio_url=audio_url,
)