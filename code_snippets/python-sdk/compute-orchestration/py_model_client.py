from clarifai.client import Model

# Initialize with explicit IDs
model = Model(user_id="model_user_id", app_id="model_app_id", model_id="model_id")

# Or initialize with model URL
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id")

# Specify a model version
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id/model_version/model_version_id")

# Or specify using the model_version parameter
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id", model_version = {"id": "model_version_id"})
