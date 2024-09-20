from clarifai.client.model import Model

model_url = "https://clarifai.com/openai/chat-completion/models/GPT-4"

prompt = """Classes: [`positive`, `negative`, `neutral`]
Text: Sunny weather makes me happy.

Classify the text into one of the above classes."""

# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through URL:
# model_prediction = model.predict_by_url(url, input_type="text")

# Example for prediction through Filepath
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

# Model Predict
model_prediction = Model("model_url", pat="your_pat").predict_by_bytes(prompt.encode(), input_type="text")

#Output
print(model_prediction.outputs[0].data.text.raw)