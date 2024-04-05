# Importing the EvalResultCompare class from the clarifai.utils.evaluation module
from clarifai.utils.evaluation import EvalResultCompare


# Creating an EvalResultCompare object with specified models and datasets
eval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])

# Printing a detailed summary of the evaluation result
print(eval_result.detailed_summary())
