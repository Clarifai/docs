from clarifai.client.workflow import Workflow
import cv2



workflow_url = "https://clarifai.com/clarifai/Visual/workflows/upscale-workflow"
image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg"

# Creating the workflow
image_upscale_workflow = Workflow(
    url=workflow_url,
    pat="YOUR_PAT",
)

# Getting the predictions
result = image_upscale_workflow.predict_by_url(
    image_url ,
    input_type="image",
)

im_b = result.results[0].outputs[0].data.image.base64
image_np = np.frombuffer(im_b, np.uint8)
img_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
# Display the image
plt.axis("off")
plt.imshow(img_np[..., ::-1])