import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/o4-mini",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

response_stream = model.generate(
    prompt="Describe the image",
    image=Image(url="https://samples.clarifai.com/cat1.jpeg") 
)

for text_chunk in response_stream:
    print(text_chunk, end="", flush=True)


"""
# --- Predict using an image uploaded from a local machine ---

# 1. Specify the path to your local image file
local_image_path = "path/to/your/image.jpg"  # Replace with the actual path to your image

# 2. Read the image file into bytes
with open(local_image_path, "rb") as f:
    image_bytes = f.read()

response_stream = model.generate(
    prompt="Describe the image",
    # Provide Image as bytes
    image=Image(bytes=image_bytes)
)

for text_chunk in response_stream:
    print(text_chunk, end="", flush=True)

# You can also convert a Pillow (PIL) Image object into a Clarifai Image data type 
# image=Image.from_pil(pil_image)

"""