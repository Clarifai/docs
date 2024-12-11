from clarifai.client.model import Model

model_url = "https://clarifai.com/stepfun-ai/ocr/models/got-ocr-2_0"

# URL of the image to analyze
image_url = "https://samples.clarifai.com/featured-models/model-ocr-scene-text-las-vegas-sign.png"

# Initialize the model 
model = Model(
    url=model_url, 
    pat="YOUR_PAT_HERE" 
)

# Make a prediction using the model with the specified compute cluster and nodepool
model_prediction = model.predict_by_url(
    image_url,
    input_type="image",
    deployment_id="test-deployment"     
)

# Print the output
print(model_prediction.outputs[0].data.text.raw)
