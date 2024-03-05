from clarifai.client.model import Model
from clarifai.client.input import Inputs


# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "openai"
#APP_ID = "chat-completion"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'openai-gpt-4-vision'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

prompt = "What time of day is it?"
image_url = "https://samples.clarifai.com/metro-north.jpg"
model_url = "https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision"
inference_params = dict(temperature=0.2, max_tokens=100)
multi_inputs = Inputs.get_multimodal_input(input_id="", image_url=image_url, raw_text=prompt)
# Predicts the model based on the given inputs.
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict(
    inputs=[
        multi_inputs
    ],
    inference_params=inference_params,
)

print(model_prediction.outputs[0].data.text.raw)