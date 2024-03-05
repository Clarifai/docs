from clarifai.client.input import Inputs

input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")

# initialize inputs of different type
prompt = "What time of day is it?"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# Here you can give the value for different types of inputs
input_obj.get_multimodal_input(
    input_id="multimodal_data", image_url=image_url, raw_text=prompt
)