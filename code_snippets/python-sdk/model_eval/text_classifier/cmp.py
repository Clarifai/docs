from clarifai.utils.evaluation import EvalResultCompare

# Creating an instance of EvalResultCompare class with specified models and datasets
eval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])

# Printing a detailed summary of the evaluation result
print(eval_result.detailed_summary())