# Use our new Python SDK to make predictions quickly using a few lines of code

from clarifai.client.model import Model
text_url = "https://samples.clarifai.com/negative_sentence_12.txt"
model_prediction = Model("https://clarifai.com/meta/Llama-2/models/llama2-7b-chat").predict_from_url(text_url, "text")