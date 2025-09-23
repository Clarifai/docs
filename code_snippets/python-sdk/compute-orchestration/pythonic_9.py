from clarifai.client import Model
from clarifai.runners.utils.data_types import Text

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with model URL
model = Model(
    url="MODEL_URL_HERE",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# Batch prediction
batch_results = model.predict([
    {"text": Text("Positive review")},
    {"text": Text("Positive review")},
    {"text": Text("Positive review")},
])