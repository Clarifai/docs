from clarifai.client.workflow import Workflow

image_url =     "https://cdn-bfgco.nitrocdn.com/PLGJnButkKeCQigeKyiwHwnQLZJDOQZI/assets/images/optimized/rev-96fa12a/delamere.com/wp-content/uploads/2022/02/Picture1-1024x683.jpg"
workflow_url = "https://clarifai.com/clarifai/main/workflows/Moderation"
# Creating the workflow
image_classifcation_workflow = Workflow(
    url=workflow_url, pat="YOUR_PAT"
)

# Getting the predictions
result = image_classifcation_workflow.predict_by_url(image_url ,
    input_type="image",
)
print(result.results[0].outputs[0].data)