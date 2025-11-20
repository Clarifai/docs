from clarifai.client import Model
from clarifai.runners.utils.data_types import Text

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with model URL
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# Prepare batch inputs using standard Python STRINGS for the prompt value
inputs = [
    {"prompt": "Write a short positive review about a new sci-fi movie."},
    {"prompt": "Write a short negative review about a new sci-fi movie."},
    {"prompt": "Write a short neutral review about a new sci-fi movie."},
]

# Run batch prediction
batch_results = model.predict(inputs)

# Print output results in a readable format
print("Batch Prediction Results:\n")
for i, result in enumerate(batch_results):
    print(f"Input {i+1}:")
    print(result)       
    print("-" * 40)