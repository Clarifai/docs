from clarifai.client.app import App

app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE",pat="YOUR_PAT_HERE")
# Provide the dataset name as parameter in the create_dataset function
dataset = app.create_dataset(dataset_id="annotations_dataset")