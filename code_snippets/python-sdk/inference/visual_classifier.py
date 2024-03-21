from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = "general-image-recognition"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40"
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, input_type="image"
)

# Get the output
print(model_prediction.outputs[0].data)
