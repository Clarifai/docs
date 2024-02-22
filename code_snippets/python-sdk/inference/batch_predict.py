from clarifai.client.input import Inputs
from clarifai.client.model import Model

model_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# here is an example of creating an input proto list of size 128
proto_list=[]
for i in range(0,128):
    proto_list.append(Inputs.get_input_from_url(input_id = f'demo_{i}', image_url=image_url))

# passthe input proto as paramater to the predict function
model_prediction = Model(url=model_url).predict(
    proto_list
)

# Check the length of predictions to see if all inputs were passed successfully

print(len(model_prediction.outputs))
