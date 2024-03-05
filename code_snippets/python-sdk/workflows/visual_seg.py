from clarifai.client.workflow import Workflow
import cv2


image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg"
workflow_url = "https://clarifai.com/clarifai/main/workflows/Visual-Segmenter"
# Creating the workflow
image_segmentation_workflow = Workflow(
    url=workflow_url, pat="YOUR_PAT"
)
# Getting the predictions
result = image_segmentation_workflow.predict_by_url(
image_url ,
    input_type="image",
)
im_b = result.results[0].outputs[0].data.regions[0].region_info.mask.image.base64
image_np = np.frombuffer(im_b, np.uint8)
img_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
# Display the image
plt.axis("off")
plt.imshow(img_np[..., ::-1])
