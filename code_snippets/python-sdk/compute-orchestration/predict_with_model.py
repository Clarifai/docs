from clarifai.client.model import Model

model_url = "https://clarifai.com/clarifai/main/models/ethnicity-demographics-recognition"

# URL of the image to analyze
image_url = "https://samples.clarifai.com/age-gender-ethnicity.jpeg"

# Initialize the model 
model = Model(
    url=model_url, 
    pat="YOUR_PAT_HERE" 
)

# Make a prediction using the model with the specified compute cluster and nodepool
model_prediction = model.predict_by_url(
    image_url,
    input_type="image",
    compute_cluster_id="test-compute-cluster",
    nodepool_id="test-nodepool"
)

# Extract and print the concepts with their confidence scores
print("Prediction Results:")
for concept in model_prediction.outputs[0].data.concepts:
    print(f"Concept: {concept.name:<20} | Confidence: {round(concept.value, 3)}")
