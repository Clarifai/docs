#Starting the training
model_version_id = model.train(yaml_file='saved_mmclassification_efficientNet.yaml')
#Checking the status of training
#To store training logs in a file, fix training_logs param as True
status = model.training_status(version_id=model_version_id,training_logs=False)
