# Evaluate the model using the specified dataset ID and evaluation ID.
model.evaluate(dataset_id='image_dataset', eval_id='one')


# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.
result = model.get_eval_by_id(eval_id="one")

# Print a summary of the evaluation results stored in the variable 'result'.
print(result.summary)
