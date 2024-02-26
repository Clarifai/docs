from clarifai.client.workflow import Workflow


workflow_url = "https://clarifai.com/clarifai/main/workflows/Face"
image_url = "https://samples.clarifai.com/face-det.jpg"
# creating the workflow
face_search_workflow = Workflow(
    url=workflow_url, pat="YOUR_PAT"
)

# Getting the predictions
result = face_search_workflow.predict_by_url(
    url=image_url, input_type="image"
)
