# Evaluate the model using the specified dataset ID 'text_dataset' and evaluation ID 'one'.
model.evaluate(dataset_id='text_dataset',eval_id='one',eval_info={"use_kfold":False})

# Retrieve the evaluation result for the evaluation ID 'one'.
result = model.get_eval_by_id(eval_id="one")

# Print the summary of the evaluation result.
print(result.summary)