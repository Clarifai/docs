from clarifai.client.dataset import Dataset

# Create the dataset object
dataset = Dataset(user_id="user_id", app_id="test_app", dataset_id="first_dataset",pat=”YOUR_PAT”)
#To upload without concepts(labels=False)
# upload dataset from folder
dataset.upload_from_folder(folder_path='./data', input_type='text', labels=True)