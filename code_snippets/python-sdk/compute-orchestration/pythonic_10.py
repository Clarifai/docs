from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize model
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/o4-mini",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# Perform prediction with prompt and image
result = model.predict(
    prompt="Describe this image",
    image=Image(url="https://samples.clarifai.com/metro-north.jpg"),
    max_tokens=1024    
)

# Print the prediction result
print(result)