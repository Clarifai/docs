import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT'],
)
response = client.images.generate(
    model="https://clarifai.com/xai/image-generation/models/grok-2-image-1212",
    prompt="A cat in a tree",
)
print(response)