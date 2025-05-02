# Clarifai Model Client Script
# Set the environment variables `CLARIFAI_DEPLOYMENT_ID` and `CLARIFAI_PAT` to run this script.
# Example usage:
from clarifai.runners.utils import data_types
import os
from clarifai.client import Model

model = Model("www.clarifai.com/openai/chat-completion/o4-mini",
    deployment_id = os.environ['CLARIFAI_DEPLOYMENT_ID'], # Only needed for dedicated deployed models
)

# Example model prediction from different model methods:

response = model.predict(prompt='What is the future of AI?', image=Image(url='https://samples.clarifai.com/metro-north.jpg'), images=None, chat_history=None, max_tokens=512.0, temperature=1.0, top_p=0.8, reasoning_effort='"low"')
print(response)

response = model.generate(prompt='What is the future of AI?', image=Image(url='https://samples.clarifai.com/metro-north.jpg'), images=None, chat_history=None, max_tokens=512.0, temperature=0.7, top_p=0.8, reasoning_effort='"low"')
for res in response:
    print(res)

response = model.chat(messages=None, max_tokens=750.0, temperature=0.7, top_p=0.8, reasoning_effort='"low"')
for res in response:
    print(res)