from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "facebook"
#APP_ID = "asr"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'asr-wav2vec2-base-960h-english'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

audio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"

# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(audio_bytes, input_type="audio")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(audio_filepath, input_type="audio")

model_url = "https://clarifai.com/facebook/asr/models/asr-wav2vec2-large-robust-ft-swbd-300h-english"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    audio_url, "audio"
)

# Print the output
print(model_prediction.outputs[0].data.text.raw)

