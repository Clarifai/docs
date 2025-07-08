import os
from clarifai.client import Model

# Or, you can set the PAT as an environment variable instead of hardcoding it
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="https://clarifai.com/openai/chat-completion/models/gpt-4_1")

response = model.predict(prompt="What is the future of AI?")

print(response)