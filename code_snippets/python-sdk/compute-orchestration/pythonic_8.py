import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="MODEL_URL_HERE",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# Batch processing (automatically handled)
batch_results = model.predict_image([
    {"image": Image(url="https://samples.clarifai.com/cat1.jpeg")},
    {"image": Image(url="https://samples.clarifai.com/cat2.jpeg")},
])

for i, pred in enumerate(batch_results):
    print(f"Image {i+1} cat confidence: {pred['cat']:.2%}")