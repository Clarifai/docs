from clarifai.client.workflow import Workflow


# input text
text = b"""The word pollution was derived from the Latin word pollution, which means to make dirty. Pollution is the process of making the environment pollute the water and the air by adding harmful substances. Pollution causes an imbalance in the environment. This imbalance threatened the very survival of all forms of life. It's a threat to the whole world. India ranks at the bottom of 125 of the 132 countries in the 2012 Environmental Performance Index. This report is produced by researchers at Yale and Columbia University in association with the World Economic Forum.
Pollution of the environment is a serious problem of industrialized societies. Industrial development and the green revolution have had a negative impact on the environment. People have converted the life support system of all living people into their own resources and have greatly disrupted the natural ecological balance. Serious degradation and depletion have been caused due to overuse, abuse and mismanagement of resources to meet human greed."""

workflow_url = "https://clarifai.com/clarifai/main/workflows/Language-Understanding"
# Creating the workflow
text_embedding_workflow = Workflow(
    url= workflow_url,
    pat="YOUR_PAT",
)



# getting the predictions
result = text_embedding_workflow.predict_by_bytes(text, input_type="text")
print(result.results[0].outputs[-1].data)