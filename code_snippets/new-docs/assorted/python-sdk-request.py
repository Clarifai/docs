from clarifai.client.model import Model

prompt = "What is the future of AI?"

model_url="https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct"

# Model Predict
model_prediction = Model(url=model_url, pat="YOUR_PAT_HERE").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)