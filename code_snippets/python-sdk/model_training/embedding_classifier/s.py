# get the model params for default template
model_params = model.get_params()
concepts = [concept.id for concept in app.list_concepts()]
# update the concept field in model_params
model.update_params(dataset_id = 'text_dataset',concepts = ["id-pos","id-neg"])
