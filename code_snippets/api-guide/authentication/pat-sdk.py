import os
from clarifai.client import Model

# Or, you can set the PAT as an environment variable instead of hardcoding it
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-GGUF")

response = model.predict(prompt="What is the future of AI?")

print(response)