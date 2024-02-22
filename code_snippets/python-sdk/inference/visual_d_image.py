from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'general-image-detection'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f'

#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id
# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)


DETECTION_IMAGE_URL = "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg"
model_url = "https://clarifai.com/clarifai/main/models/general-image-detection"
detector_model = Model(
    url=model_url,
    pat="YOUR_PAT",
)



# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

prediction_response = detector_model.predict_by_url(
    DETECTION_IMAGE_URL, input_type="image"
)

# Since we have one input, one output will exist here
regions = prediction_response.outputs[0].data.regions

for region in regions:
    # Accessing and rounding the bounding box values
    top_row = round(region.region_info.bounding_box.top_row, 3)
    left_col = round(region.region_info.bounding_box.left_col, 3)
    bottom_row = round(region.region_info.bounding_box.bottom_row, 3)
    right_col = round(region.region_info.bounding_box.right_col, 3)

    for concept in region.data.concepts:
        # Accessing and rounding the concept value
        name = concept.name
        value = round(concept.value, 4)

        print(
            (f"{name}: {value} BBox: {top_row}, {left_col}, {bottom_row}, {right_col}")
        )
