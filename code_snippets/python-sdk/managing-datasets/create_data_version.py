from clarifai.client.dataset import Dataset
# Create a dataset object
dataset = Dataset(dataset_id='first_dataset', user_id='user_id', app_id='test_app',pat=’YOUR_PAT’)
# Create a new version of the dataset
dataset_version = dataset.create_version(description='dataset_version_description')