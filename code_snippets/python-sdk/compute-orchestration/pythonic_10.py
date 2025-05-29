import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize model
model = Model(
    url="MODEL_URL_HERE",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# Perform prediction with prompt and image
result = model.predict(
    prompt="What is the future of AI?",
    image=Image(url="https://samples.clarifai.com/metro-north.jpg"),
    max_tokens=512,
    temperature=0.7,
    top_p=0.8
)

# Print the prediction result
print(result)