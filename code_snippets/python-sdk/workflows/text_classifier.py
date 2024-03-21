from clarifai.client.workflow import Workflow

# Your PAT (Personal Access Token) can be found in the Account's Security section

# Initialize the workflow_url
workflow_url = "https://clarifai.com/clarifai/main/workflows/Text-Moderation"
text_classfication_workflow = Workflow(
    url= workflow_url , pat="YOUR_PAT"
)
result = text_classfication_workflow.predict_by_bytes(b"I hate you", input_type="text")
print(result.results[0].outputs[0].data)