from clarifai.client import Model
import os

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows
# Also set CLARIFAI_DEPLOYMENT_ID as an environment variable

# Initialize with your model URL
model = Model(
    url="https://clarifai.com/user-id/app-id/models/model-id",
    deployment_id=os.environ.get("CLARIFAI_DEPLOYMENT_ID", None),
    )

for response in model.generate("Yes, I uploaded it! "):
    print(response)