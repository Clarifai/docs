#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder
from clarifai.datasets.upload.utils import load_module_dataloader
from clarifai.client.dataset import Dataset


#replace your "user_id", "app_id", "dataset_id".
dataset = Dataset(user_id="user_id", app_id="app_id", dataset_id="dataset_id")

cifar_dataloader = load_module_dataloader('./image_classification/cifar10')

dataset.retry_upload_from_logs(dataloader=cifar_dataloader, log_file_path='path to log file', retry_duplicates=True, log_warnings=True)