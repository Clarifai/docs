from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "eleven-labs"
#APP_ID = "audio-generation"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'speech-synthesis'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'f588d92c044d4487a38c8f3d7a3b0eb2'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)


input_text = "Hello, How are you doing today!"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.

# Example for prediction through URL:
# model_prediction = Model(model_url).predict_by_url(url, input_type="text")

# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

model_url = "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(input_text, "text")

# Save the audio file
with open("output_audio.wav", mode="bx") as f:
    f.write(model_prediction.outputs[0].data.audio.base64)
