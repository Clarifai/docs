from clarifai.client.workflow import Workflow

# Your PAT (Personal Access Token) can be found in the Account's Security section

# Initialize the workflow_url
workflow_url = "https://clarifai.com/clarifai/main/workflows/Text-Moderation"
text_classfication_workflow = Workflow(
    url= workflow_url , pat="YOUR_PAT"
)
raw_text = b"I love your product very much"
result = text_classfication_workflow.predict_by_bytes(raw_text, input_type="text")
print(result.results[0].outputs[0].data)