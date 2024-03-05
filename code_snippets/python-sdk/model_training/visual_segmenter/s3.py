#creating dataset version
dataset_version = dataset.create_version()
dataset_version_id = dataset_version.version.id

#update params
model.update_params(dataset_id = 'segmentation_dataset', dataset_version_id=dataset_version_id,concepts = concepts, num_epochs = 5)