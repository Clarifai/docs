from clarifai.client.user import User

input_obj = User(user_id="user_id", pat="YOUR_PAT").app(app_id="test_app").inputs()
# provide the inputs ids as parameters in delete_inputs function
input_obj.delete_inputs(list(input_obj.list_inputs()))