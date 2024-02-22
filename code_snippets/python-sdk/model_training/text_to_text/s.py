# get the model params
model_params = model.get_params(template='HuggingFace_AdvancedConfig')
# update dataset field 
model.update_params(dataset_id = 'text_dataset')
print(model.training_params)