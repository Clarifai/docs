# Get the params for the selected template
model_params = model.get_params(template='Clarifai_ResNext')
# list the concepts to add in the params
concepts = [concept.id for concept in app.list_concepts()]
model.update_params(dataset_id = 'image_dataset',concepts = concepts)
print(model.training_params)