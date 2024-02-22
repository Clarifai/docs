from clarifai.client.dataset import Dataset


#Create dataset object
dataset = Dataset(dataset_id='first_dataset', user_id='user_id', app_id='test_app')
#Delete dataset version
dataset.delete_version(version_id='dataset_version')