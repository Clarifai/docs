# This example uses Matplotlib, Pillow, and NumPy. You can install them by running: pip install matplotlib Pillow numpy

import matplotlib.pyplot as plt
from clarifai.runners.utils.data_types import Image
from clarifai.client import Model
from PIL import Image as PILImage

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the model 
model = Model(
    url="https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus",
    #deployment_id="DEPLOYMENT_ID_HERE"
)

# Load input image from URL
input_image = Image(url="https://samples.clarifai.com/cat1.jpeg")
#Or, load from local file: input_image = Image.from_pil(PILImage.open("path/to/image.png"))

# Run segmentation: returns a list of Region objects
regions = model.segment_anything(image=input_image)

# Loop through each Region, extract its mask, and display it
for idx, region in enumerate(regions):
    mask = region.mask
    #mask = Image.from_proto(region.mask.proto)  # Alternative low-level access
    # region.mask is a Clarifai Image object; convert it to a NumPy array for visualization
    mask_array = mask.to_numpy()

    # Plot the mask with matplotlib
    plt.figure(figsize=(5, 5))
    plt.imshow(mask_array, cmap='gray')
    plt.title(f"Mask {idx + 1}")
    plt.axis('off')
    plt.show()

    # Print progress
    print(f"Processed mask {idx + 1} out of {len(regions)}")

    # Optional: do anything else with mask_array here
    # (e.g., save to disk, overlay on the original image, etc.)
