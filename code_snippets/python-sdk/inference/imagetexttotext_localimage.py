from clarifai.client.model import Model
from clarifai.client.input import Inputs

IMAGE_FILE_LOCATION = 'LOCAL IMAGE PATH'
with open(IMAGE_FILE_LOCATION, "rb") as f:
    file_bytes = f.read()


prompt = "What time of day is it?"
inference_params = dict(temperature=0.2, max_tokens=100)

model_prediction = Model("https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision").predict(inputs = [Inputs.get_multimodal_input(input_id="", image_bytes = file_bytes, raw_text=prompt)], inference_params=inference_params)
print(model_prediction.outputs[0].data.text.raw)
