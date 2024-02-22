from clarifai.client.input import Inputs

input_text = b"Write a tweet on future of AI"
input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")

# You can also upload data through URLand Filepath,

# Upload from file
# input_obj.upload_from_file(input_id='text_dat', text_file=’text_filepath')

# Upload from url
# input_obj.upload_from_url(input_id='text,text_url=”text_url”)

input_obj.upload_from_bytes(input_id="text_data", text_bytes=input_text)