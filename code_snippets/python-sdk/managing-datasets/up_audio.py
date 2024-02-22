from clarifai.client.dataset import Dataset


#Create a dataset object
dataset = Dataset(user_id="user_id", app_id="test_app", dataset_id="first_dataset",pat=”YOUR_PAT”)
#To upload without concepts(labels=False)
#Upload data from csv
dataset.upload_from_csv(csv_path='/Users/adithyansukumar/Desktop/data/test.csv', input_type='audio',csv_type='url', labels=True)