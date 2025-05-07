import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Text

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="https://clarifai.com/alfrick/docs-demos/models/my-uploaded-model", deployment_id="YOUR_DEPLOYMENT_ID_HERE")

# Create a list of input Texts to simulate a stream
input_texts = iter([
    Text(text="First input."),
    Text(text="Second input."),
    Text(text="Third input.")
])

# Call the stream method and process outputs
response_iterator = model.stream(input_texts)

# Print streamed results
print("Streaming output:\n")
for response in response_iterator:
    print(response.text)
