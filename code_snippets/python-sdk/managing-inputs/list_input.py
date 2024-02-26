from clarifai.client.user import User

# Create the input object
input_obj = User(user_id="user_id").app(app_id="test_app", pat="YOUR_PAT").inputs()
# list the inputs with pagination
all_inputs = list(input_obj.list_inputs(page_no=1,per_page=3))
print(all_inputs)