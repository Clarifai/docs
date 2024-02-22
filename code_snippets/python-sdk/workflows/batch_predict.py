from clarifai.client.input import Inputs
from clarifai.client.model import Model
from clarifai.client.workflow import Workflow

model_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# here is an example of creating an input proto list of size 32
proto_list=[]
for i in range(0,32):
    proto_list.append(Inputs.get_input_from_url(input_id = f'demo_{i}', image_url=image_url))


workflow_url = "https://clarifai.com/clarifai/main/workflows/Moderation"
# Creating the workflow
image_classifcation_workflow = Workflow(
    url=workflow_url, pat="YOUR_PAT"
)

# Getting the predictions
result = image_classifcation_workflow.predict(proto_list)
print(len(result.results))