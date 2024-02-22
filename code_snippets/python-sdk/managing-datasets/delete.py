from clarifai.client.app import App

app = App(app_id="test_app", user_id="user_id")
# Provide the dataset name as parameter in delete_dataset function
app.delete_dataset(dataset_id="demo_dataset")