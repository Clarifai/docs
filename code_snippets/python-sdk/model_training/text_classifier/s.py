# get the model parameters
model_params = model.get_params(template='HuggingFace_AdvancedConfig')
concepts = [concept.id for concept in app.list_concepts()]
# update the concept field in model parameters
model.update_params(dataset_id = 'text_dataset',concepts = ["id-pos","id-neg"])