import os
from clarifai.client import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/o4-mini",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

response = model.predict("What is photosynthesis?")
# Or
# response = model.predict(prompt="What is photosynthesis?")

print(response)
