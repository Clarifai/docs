import os
from clarifai.client import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="MODEL_URL_HERE")

method_name = "predict" # Or, "generate", "chat", etc

method_signature = model.method_signature(method_name= method_name)

print(method_signature)