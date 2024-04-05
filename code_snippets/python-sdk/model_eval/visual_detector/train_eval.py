# Evaluate the model on a specific dataset with ID 'train_dataset'
model.evaluate(dataset_id='train_dataset', eval_id='one')

# Get the evaluation result by its ID 'one'
result = model.get_eval_by_id(eval_id="one")

print(result.summary)