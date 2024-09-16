from clarifai.client.input import Inputs
from clarifai.client.model import Model

model_url = "https://clarifai.com/openai/chat-completion/models/gpt-4o-mini"
prompt = "What's the future of AI?"

# here is an example of creating an input proto list of size 16
proto_list=[]
for i in range(16):
    proto_list.append(Inputs.get_input_from_bytes(input_id = f'demo_{i}', text_bytes=prompt.encode()))

# passthe input proto as paramater to the predict function
model_prediction = Model(url=model_url).predict(
    proto_list
)

# Check the length of predictions to see if all inputs were passed successfully

print(len(model_prediction.outputs))
