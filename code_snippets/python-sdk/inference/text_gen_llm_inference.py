from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section

prompt = "What’s the future of AI?"

# You can set inference parameters
prompt_template = '''<|begin_of_text|><|start_header_id|>system<|end_header_id|>

{system_prompt}<|eot_id|><|start_header_id|>user<|end_header_id|>

{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>'''

system_prompt= "You're the helpful assistant"

inference_params = dict(temperature=0.7, max_tokens=200, top_k = 50, top_p= 0.95, prompt_template= prompt_template, system_prompt=system_prompt)

# You can set the model using model URL or model ID.
model_url="https://clarifai.com/meta/Llama-3/models/llama-3_1-8b-instruct"

# Model Predict
model_prediction = Model(url=model_url,pat="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text", inference_params=inference_params)

print(model_prediction.outputs[0].data.text.raw)
