from clarifai.client.input import Inputs

# Replace your "user_id", "app_id", "pat", and "dataset_id"
input_obj = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

inputs_generator = input_obj.list_inputs(dataset_id="YOUR_DATASET_ID_HERE")

inputs = list(inputs_generator)

print(inputs)
