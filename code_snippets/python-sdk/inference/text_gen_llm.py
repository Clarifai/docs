from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
prompt = "What’s the future of AI?"
# You can set the model using model URL or model ID.
model_url="https://clarifai.com/openai/chat-completion/models/GPT-4"

# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and Bytes format. 

# Example for prediction through URL:
# model_prediction = model.predict_by_url(url, input_type="text")

# Example for prediction through Filepath
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")


# Model Predict
model_prediction = Model(url=model_url,pat="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)