from clarifai.client.workflow import Workflow


workflow_url = "https://clarifai.com/clarifai/main/workflows/General-Detection"
video_url = "https://samples.clarifai.com/beer.mp4"
# Creating the workflows
object_search_workflow = Workflow(
    url=workflow_url, pat="YOUR_PAT"
)
# getting the predictions
result = object_search_workflow.predict_by_url(
    url=video_url, input_type="video"
)
print(result.results[0].outputs[-1].data)