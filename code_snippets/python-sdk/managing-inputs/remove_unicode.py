from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# Remove unicode from text 
def remove_unicode_and_upload(input_id, text):
    string_encode = text.encode("ascii", "ignore")
    string_decode = string_encode.decode()
    input_object.upload_text(input_id=input_id,raw_text=string_decode)

remove_unicode_and_upload(input_id='test', text="This is a test \u200c example. ")
