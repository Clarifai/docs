# Clarifai Model Client Script
# Set the environment variables `CLARIFAI_DEPLOYMENT_ID` and `CLARIFAI_PAT` to run this script.
# Example usage:
from clarifai.runners.utils import data_types
import os
from clarifai.client import Model

model = Model("www.clarifai.com/luv_2261/test-upload/gemma-3-4b-it",
    deployment_id = os.environ['CLARIFAI_DEPLOYMENT_ID'], # Only needed for dedicated deployed models
)

# Example model prediction from different model methods:

response = model.predict(prompt='What is the future of AI?', image=Image(url='https://samples.clarifai.com/metro-north.jpg'), images=[Image(url='https://samples.clarifai.com/metro-north.jpg')], chat_history=None, max_tokens=512, temperature=0.7, top_p=0.8)
print(response)

response = model.generate(prompt='What is the future of AI?', image=Image(url='https://samples.clarifai.com/metro-north.jpg'), images=[Image(url='https://samples.clarifai.com/metro-north.jpg')], chat_history=None, max_tokens=512, temperature=0.7, top_p=0.8)
for res in response:
    print(res)

response = model.chat(messages=None, tools=None, max_tokens=512, temperature=0.7, top_p=0.8)
for res in response:
    print(res)