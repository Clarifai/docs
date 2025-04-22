import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Text

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="MODEL_URL_HERE",
    deployment_id="DEPLOYMENT_ID_HERE"
)

response_stream = model.generate(
    prompt=Text("Explain quantum computing in simple terms")
    # Or, provide text as URL
    # prompt=Text(url="https://example.com/text.txt")
)

for text_chunk in response_stream:
    print(text_chunk.text, end="", flush=True)