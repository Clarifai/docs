from clarifai.client.app import App

app = App(app_id="test_app", user_id="user_id",pat=”YOUR_PAT”)
# Provide the dataset name as parameter in the create_dataset function
dataset = app.create_dataset(dataset_id="first_dataset")