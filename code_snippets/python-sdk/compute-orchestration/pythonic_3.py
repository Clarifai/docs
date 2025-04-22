import os
from clarifai.client import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="MODEL_URL_HERE")

model_script = model.generate_client_script()

print(model_script)