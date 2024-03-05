# Display the predicted masks
import cv2
from urllib.request import urlopen
import numpy as np
from PIL import Image as PILImage
from io import BytesIO
import random
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from google.colab.patches import cv2_imshow

IMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_segmentation/coco/images/000000424349.jpg')

prediction_response = model.predict_by_filepath(IMAGE_PATH, input_type="image")

# Get the output
regions = prediction_response.outputs[0].data.regions

img = cv2.imread(IMAGE_PATH)
img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
masks = []
concepts = []
for region in regions:
    if region.data.concepts[0].value > 0.05:
        masks.append(np.array(PILImage.open(BytesIO(region.region_info.mask.image.base64))))
        concepts.append(region.data.concepts[0].name)


# Generate random colors
colors = []
for i in range(len(masks)):
    r = random.randint(0,255)
    g = random.randint(0,255)
    b = random.randint(0,255)
    colors.append((b,g,r))

# Map masks to overlays
overlays = []
for i in range(len(masks)):
    mask = masks[i]
    color = colors[i]

    overlay = np.zeros_like(img)
    overlay[mask > 0] = color
    overlays.append(overlay)

# Overlay masks on original image
overlayed = np.copy(img)

for overlay in overlays:
  # Apply alpha blending
  cv2.addWeighted(overlay, 0.15, overlayed, 0.85, 0, overlayed)

overlayed = cv2.convertScaleAbs(overlayed, alpha=1.5, beta=50)


# Display overlayed image
img = overlayed
# for displaying in google colab or else use cv2.imshow()
cv2_imshow(img) 

# Create legend with colors and concepts
legend_items = []
for i in range(len(overlays)):
    color = [c/255 for c in colors[i]]
    concept = concepts[i]
    legend_items.append(mpatches.Patch(color=color, label=concept))

plt.legend(handles=legend_items, loc='lower left', bbox_to_anchor=(1.05, 0))
plt.axis('off')
plt.show()
