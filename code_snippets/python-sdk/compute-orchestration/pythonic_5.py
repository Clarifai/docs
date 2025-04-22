import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Image

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="MODEL_URL_HERE",
    deployment_id="DEPLOYMENT_ID_HERE"
)

result = model.predict_image(
    image=Image(url="https://samples.clarifai.com/cat1.jpeg")
    # Or, provide Image as bytes. You can also convert a Pillow (PIL) Image object into a Clarifai Image data type 
    # image=Image(bytes=b"") 
    # image=Image.from_pil(pil_image)
)

print(f"Cat confidence: {result['cat']:.2%}")