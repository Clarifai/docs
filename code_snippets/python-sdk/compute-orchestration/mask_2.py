# This example uses Matplotlib, Pillow, and NumPy. You can install them by running: pip install matplotlib Pillow numpy

import matplotlib.pyplot as plt
from PIL import Image as PILImage
from clarifai.client import Model
from clarifai.runners.utils.data_types import Image, Region, Concept

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the model 
model = Model(
    url="https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus",
     #deployment_id="DEPLOYMENT_ID_HERE"
)

input_image = Image(url="https://samples.clarifai.com/cat1.jpeg")
# Load input image from local file
#input_image = Image.from_pil(PILImage.open("path/to/image.png"))

# Point-based input (Region form)
point_prompt_regions = [
    Region(point=[0.1, 0.2, 0.0], concepts=[Concept(name="1", value=1.0)]),
    Region(point=[0.2, 0.3, 0.0], concepts=[Concept(name="0", value=0.0)])
]

regions = model.predict(image=input_image, regions=point_prompt_regions, return_type="all")

# # Optional: use dict format instead
# point_prompt_dict = dict(points=[[0.1, 0.2], [0.2, 0.3]], labels=[1, 0])
# regions = model.predict(image=input_image, dict_inputs=point_prompt_dict, return_type="all")

# Box-based input (Region form)
# box_prompt_regions = [Region(box=[0.1, 0.2, 0.3, 0.4])]
# regions = model.predict(image=input_image, regions=box_prompt_regions, return_type="all")

# # Optional: use dict format instead
# box_prompt_dict = dict(box=[0.1, 0.2, 0.3, 0.4])
# regions = model.predict(image=input_image, dict_inputs=box_prompt_dict, return_type="all")

# Visualize each predicted mask
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
