import os
from clarifai.client.user import User
#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder
from clarifai.datasets.upload.utils import load_module_dataloader

#Replace your PAT
os.environ['CLARIFAI_PAT'] = "YOUR_PAT"

#replace your "user_id"
client = User(user_id="user_id")
app = client.create_app(app_id="demo_train", base_workflow="Universal")

# Construct the path to the dataset folder
CSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')

# Create a Clarifai dataset with the specified dataset_id 
dataset = app.create_dataset(dataset_id="text_dataset")
# Upload the dataset using the provided dataloader and get the upload status
dataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)

MODEL_ID = "model_text_classifier"
MODEL_TYPE_ID = "text-classifier"

# Create a model by passing the model name and model type as parameter
model = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)

# get the model parameters
model_params = model.get_params(template='HuggingFace_AdvancedConfig')
concepts = [concept.id for concept in app.list_concepts()]
# update the concept field in model parameters
model.update_params(dataset_id = 'text_dataset',concepts = ["id-pos","id-neg"])

import time
#Starting the training
model_version_id = model.train()

#Checking the status of training
while True:
    status = model.training_status(version_id=model_version_id,training_logs=False)
    if status.code == 21106: #MODEL_TRAINING_FAILED
        print(status)
        break
    elif status.code == 21100: #MODEL_TRAINED
        print(status)
        break
    else:
        print("Current Status:",status)
        print("Waiting---")
        time.sleep(120)
