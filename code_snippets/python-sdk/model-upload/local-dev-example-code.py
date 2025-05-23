# Clarifai Model Client Script
# Example usage:
import os

from clarifai.client import Model
from clarifai.runners.utils import data_types

model = Model.from_current_context()

# Example model prediction from different model methods:

response = model.predict(text1='""')
print(response)

response = model.generate(text1='""')
for res in response:
    print(res)