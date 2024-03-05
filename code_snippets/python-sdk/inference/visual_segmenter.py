from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'image-general-segmentation'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '1581820110264581908ce024b12b4bfb'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

SEGMENT_IMAGE_URL = "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

model_url = "https://clarifai.com/clarifai/main/models/image-general-segmentation"
segmentor_model = Model(
    url=model_url,
    pat="YOUR_PAT",
)

prediction_response = segmentor_model.predict_by_url(
    SEGMENT_IMAGE_URL, input_type="image"
)

regions = prediction_response.outputs[0].data.regions

for region in regions:
    for concept in region.data.concepts:
        # Accessing and rounding the concept's percentage of image covered
        name = concept.name
        value = round(concept.value, 4)
        print((f"{name}: {value}"))
