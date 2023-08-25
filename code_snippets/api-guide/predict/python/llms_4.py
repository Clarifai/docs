# Use our new Python SDK to make predictions quickly using a few lines of code
# Learn how to install it here: https://clarifai-python.readthedocs.io/en/latest/install.html

from clarifai.client.model import Model
text_url = "https://samples.clarifai.com/negative_sentence_12.txt"
model_prediction = Model("https://clarifai.com/openai/chat-completion/models/GPT-4").predict_from_url(text_url, "text")