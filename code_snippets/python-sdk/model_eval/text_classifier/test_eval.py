#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder
from clarifai.datasets.upload.utils import load_module_dataloader


# Construct the path to the dataset folder
CSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/test_imdb.csv')


# Create a Clarifai dataset with the specified dataset_id
test_dataset = app.create_dataset(dataset_id="test_text_dataset")
# Upload the dataset using the provided dataloader and get the upload status
test_dataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)

# Evaluate the model using the specified test text dataset identified as 'test_text_dataset'
# and the evaluation identifier 'two'.
model.evaluate(dataset_id='test_text_dataset', eval_id='two')

# Retrieve the evaluation result with the identifier 'two'.
result = model.get_eval_by_id("two")

# Print the summary of the evaluation result.
print(result.summary)
