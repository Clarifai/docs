# Clarifai Model Client Script
# Set the environment variables `CLARIFAI_DEPLOYMENT_ID` and `CLARIFAI_PAT` to run this script.
# Example usage:
import os

from clarifai.client import Model
from clarifai.runners.utils import data_types

model = Model(
    "https://clarifai.com/alfrick/local-runner-app/models/local-runner-model",
    deployment_id='local-runner-deployment',  # Only needed for dedicated deployed models
    base_url="https://api.clarifai.com",
)

# Example model prediction from different model methods:

response = model.predict(
    text1="What is the future of AI?",
)
print(response)

response = model.generate(
    text1="What is the future of AI?",
)
for res in response:
    print(res)

response = model.stream(
    input_iterator=iter(['What is the future of AI?']),
)
