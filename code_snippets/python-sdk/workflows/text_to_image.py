from clarifai.client.workflow import Workflow
import cv2


workflow_url ="https://clarifai.com/clarifai/Visual/workflows/image-generation"
# Creating the workflow
image_generation_workflow = Workflow(
    url=workflow_url,
    pat="YOUR_PAT",
)

# Getting the predictions
result = image_generation_workflow.predict_by_bytes(
    b"cat with a hat", input_type="text"
)
# Extract the base64-encoded image data from the result object
im_b = result.results[0].outputs[0].data.image.base64
# Convert the base64-encoded image data to a NumPy array of uint8 values
image_np = np.frombuffer(im_b, np.uint8)
# Decode the NumPy array to obtain the image in OpenCV format (BGR color)
img_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

# Display the image
plt.axis("off")
plt.imshow(img_np[..., ::-1])
