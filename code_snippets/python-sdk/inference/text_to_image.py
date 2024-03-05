from clarifai.client.model import Model
import numpy as np
import cv2
import matplotlib.pyplot as plt

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "stability-ai"
#APP_ID = "stable-diffusion-2"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'stable-diffusion-xl'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '0c919cc1edfc455dbc96207753f178d7'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

input_text = b"floor plan for 2 bedroom kitchen house"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and Bytes format.


# Example for prediction through URL:
# model_prediction = model.predict_by_url(url, input_type="text")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

# Image Generation using Stable Diffusion XL
model_url = "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(
    input_text, input_type="text"
)


# Base64 image to numpy array
im_b = model_prediction.outputs[0].data.image.base64
image_np = np.frombuffer(im_b, np.uint8)
img_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
# Display the image
plt.axis("off")
plt.imshow(img_np[..., ::-1])
