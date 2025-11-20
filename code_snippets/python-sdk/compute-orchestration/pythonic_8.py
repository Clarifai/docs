from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set PAT as an environment variable before running:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # macOS / Linux
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize with model URL
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/o4-mini"
)

# Prepare batch inputs
inputs = [
    {
        "prompt": "Describe the image",
        "image": Image(url="https://samples.clarifai.com/cat1.jpeg")
    },
    {
        "prompt": "Describe the image",
        "image": Image(url="https://samples.clarifai.com/cat2.jpeg")
    },
    {
        "prompt": "Describe the image",
        "image": Image(url="https://samples.clarifai.com/cat3.jpeg")
    },
]

# Run batch prediction
batch_results = model.predict(inputs)

# Print output results
print("Batch Prediction Results:\n")
for i, result in enumerate(batch_results):
    print(f"Input {i+1}:")
    print(result)
    print("-" * 40)

"""
# --- Predict using an image uploaded from a local machine ---
# Replace with the actual path to your image files
image_1 = "path/to/your/image_1.jpg"
image_2 = "path/to/your/image_2.jpg"
image_3 = "path/to/your/image_3.jpg"

def load_image_bytes(path: str) -> bytes:
    # Read a local image file into raw bytes.
    with open(path, "rb") as f:
        return f.read()

inputs_from_local = [
    {
        "prompt": "Describe the image",
        "image": Image(bytes=load_image_bytes(image_1)),
    },
    {
        "prompt": "Describe the image",
        "image": Image(bytes=load_image_bytes(image_2)),
    },
    {
        "prompt": "Describe the image",
        "image": Image(bytes=load_image_bytes(image_3)),
    },
]

# Run prediction
results_local = model.predict(inputs_from_local)

# Print results
print("\nResults from LOCAL IMAGES:\n")
for i, result in enumerate(results_local):
    print(f"Image {i+1}:")
    print(result)
    print("-" * 40)
"""