import os
from clarifai.client import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="https://clarifai.com/alfrick/docs-demos/models/my-uploaded-model")

for response in model.generate("Yes, I uploaded it! "):
    print(response.text)