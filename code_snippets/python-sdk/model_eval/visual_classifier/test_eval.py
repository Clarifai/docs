# Load the dataloader module using the provided function from your module
PATH=os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/images_test')
food101_dataloader = load_module_dataloader(PATH)

# Create a Clarifai dataset with the specified dataset_id ("image_dataset")
test_dataset = app.create_dataset(dataset_id="image_dataset2")

# Upload the dataset using the provided dataloader and get the upload status
test_dataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)

# Evaluate the model using the specified dataset ID and evaluation ID.
model.evaluate(dataset_id='image_dataset2',eval_id='two')


# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.
result=model.get_eval_by_id("two")

print(result.summary)