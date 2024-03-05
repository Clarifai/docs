from clarifai.client.input import Inputs
from clarifai.client.workflow import Workflow

# setting up input image and prompt
prompt = "What time of day is it?"
image_url = "https://samples.clarifai.com/metro-north.jpg"

workflow_url = "https://clarifai.com/clarifai/Visual/workflows/multimodal-to-text"

multi_input = Inputs.get_multimodal_input(input_id="", image_url=image_url, raw_text=prompt)

# Creating the workflow
text_embedding_workflow = Workflow(
    url=workflow_url,
    pat="YOUR_PAT",
)

# Getting the predictions
result = text_embedding_workflow.predict(
    inputs=[
        multi_input
    ]
)
print(result.results[0].outputs[-1].data)