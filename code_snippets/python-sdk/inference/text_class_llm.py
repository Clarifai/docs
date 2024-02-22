from clarifai.client.model import Model

prompt = """Classes: [`positive`, `negative`, `neutral`]
Text: Sunny weather makes me happy.

Classify the text into one of the above classes."""



# Model Predict
model_prediction = Model("https://clarifai.com/openai/chat-completion/models/GPT-4").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)