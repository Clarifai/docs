#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder
from clarifai.datasets.upload.utils import load_module_dataloader


# Construct the path to the dataset folder
CSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')


# Create a Clarifai dataset with the specified dataset_id 
dataset = app.create_dataset(dataset_id="text_dataset")
# Upload the dataset using the provided dataloader and get the upload status
dataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)
