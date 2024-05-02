from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
prompt = "What’s the future of AI?"
# You can set the model using model URL or model ID.
model_url="https://clarifai.com/openai/chat-completion/models/GPT-4"


# Model Predict
model_prediction = Model(url=model_url,pat="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)