#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder
from clarifai.datasets.upload.utils import load_module_dataloader


# Construct the path to the dataset folder
module_path = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/image_detection/voc')

# Load the dataloader module using the provided function from your module
voc_dataloader = load_module_dataloader(module_path)

# Create a Clarifai dataset with the specified dataset_id ("image_dataset")
dataset = app.create_dataset(dataset_id="train_dataset")

# Upload the dataset using the provided dataloader and get the upload status
dataset.upload_dataset(dataloader=voc_dataloader)
