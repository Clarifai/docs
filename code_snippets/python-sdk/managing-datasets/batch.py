from clarifai.client.dataset import Dataset
from clarifai.datasets.upload.utils import load_module_dataloader


#replace your "user_id", "app_id", "dataset_id".
dataset = Dataset(user_id="user_id", app_id="test_app", dataset_id="first_dataset")
#create dataloader object
cifar_dataloader = load_module_dataloader('./image_classification/cifar10')
#set get_upload_status=True for showing upload status
dataset.upload_dataset(dataloader=cifar_dataloader,get_upload_status=True)
