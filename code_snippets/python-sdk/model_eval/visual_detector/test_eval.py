# Set the path to the module containing the data
PATH=os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/voc_test')

# Load the dataloader module from the specified path
voc_dataloader = load_module_dataloader(PATH)

# Create a new dataset object with a unique ID 'test_dataset_1'
test_dataset = app.create_dataset(dataset_id="test_dataset_1")

# Upload the dataset using the previously loaded dataloader
test_dataset.upload_dataset(dataloader=voc_dataloader)

# Evaluate the model using the uploaded dataset, with evaluation ID 'two'
model.evaluate(dataset_id='test_dataset_1', eval_id='two')

# Retrieve the evaluation result with ID 'two' for the model
result = model.get_eval_by_id("two")

# Print the summary of the evaluation result
print(result.summary)