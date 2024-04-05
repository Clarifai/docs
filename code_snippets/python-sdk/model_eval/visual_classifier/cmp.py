from clarifai.utils.evaluation import EvalResultCompare

# Initializing an object of the EvalResultCompare class
# with specified models and datasets
eval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])

print(eval_result.detailed_summary())