import cv2
import matplotlib.pyplot as plt
from urllib.request import urlopen
import numpy as np


IMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_detection/voc/images/2008_008526.jpg')

prediction_response = model.predict_by_filepath(IMAGE_PATH, input_type="image",inference_params={'detection_threshold': 0.5})

# Get the output
regions = prediction_response.outputs[0].data.regions

img = cv2.imread(IMAGE_PATH)

for region in regions:
    # Accessing and rounding the bounding box values
    top_row = round(region.region_info.bounding_box.top_row, 3) * img.shape[0]
    left_col = round(region.region_info.bounding_box.left_col, 3)* img.shape[1]
    bottom_row = round(region.region_info.bounding_box.bottom_row, 3)* img.shape[0]
    right_col = round(region.region_info.bounding_box.right_col, 3)* img.shape[1]

    cv2.rectangle(img, (int(left_col),int(top_row)), (int(right_col),int(bottom_row)), (36,255,12), 2)

    # Get concept name
    concept_name = region.data.concepts[0].name

    # Display text
    cv2.putText(img, concept_name, (int(left_col),int(top_row-10)), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (36,255,12), 2)

plt.axis('off')
plt.imshow(img[...,::-1])
