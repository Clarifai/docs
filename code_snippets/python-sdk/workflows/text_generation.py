from clarifai.client.workflow import Workflow


workflow_url = "https://clarifai.com/clarifai/Text/workflows/text-generation"
# Creating the workflow
text_generation_workflow = Workflow(
    url=workflow_url,
    pat="YOUR_PAT",
)

# getting the prediction
result = text_generation_workflow.predict_by_bytes(
    b"Good Morning! I think it's going to be a great day!", input_type="text"
)
print(result.results[0].outputs[0].data.text.raw)