from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'image-embedder-clip'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg"


# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_url(input_bytes ,input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="image")


model_url = "https://clarifai.com/clarifai/main/models/image-embedder-clip"

# Model Predict
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, "image"
)
# print(model_prediction.outputs[0].data.text.raw)

embeddings = model_prediction.outputs[0].data.embeddings[0].vector

num_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions

print(embeddings[:10])
