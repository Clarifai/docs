import yaml
YAML_FILE = 'mmclassification_efficientnet.yaml'
model_params = model.get_params(template='MMClassification_EfficientNet', save_to=YAML_FILE)
# Preview YAML content
file = open(YAML_FILE)
data = yaml.safe_load(file)
print(data)
