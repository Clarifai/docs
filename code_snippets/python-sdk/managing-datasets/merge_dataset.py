from clarifai.client.dataset import Dataset

# Replace your "user_id", "app_id", "pat", and "dataset_id"
dataset = Dataset(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", dataset_id="dataset_id", pat="YOUR_PAT_HERE")

dataset.merge_dataset(merge_dataset_id="merge_dataset_id")
