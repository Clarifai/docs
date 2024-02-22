# Get the params for the selected template
model_params = model.get_params(template='MMDetection_SSD')
# list the concepts to add in the params
concepts = [concept.id for concept in app.list_concepts()]
model.update_params(dataset_id = 'train_dataset',concepts = concepts)
print(model.training_params)