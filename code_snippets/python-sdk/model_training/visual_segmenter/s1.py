import yaml
YAML_FILE = 'model_params.yaml'
model_params = model.get_params(template='MMSegmentation_SegFormer',save_to=YAML_FILE)
# Preview YAML content
file = open(YAML_FILE)
data = yaml.safe_load(file)
print(data)
