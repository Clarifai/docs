# Import necessary libraries
import numpy as np
import cv2
from tritonclient.grpc import (
    InferenceServerClient,  # Client for interacting with Triton server
    InferInput,  # Represents an input to the model
    InferRequestedOutput,  # Represents an output requested for inference
)

# Define model name in our case the name is 'model'
model_name = 'model'

# Connect to Triton server running on localhost 
triton_client = InferenceServerClient('127.0.0.1:9001')

# Load the specified model onto the Triton server
triton_client.load_model(model_name)


# Load the input image using OpenCV
input_image = cv2.imread('ramen.png') # replace with any image file

# Expand the image dimension to match model input requirements
input_array = np.expand_dims(input_image, axis=0)

# Define the model input object with its name, shape, and data type
model_input = InferInput('input', input_array.shape, 'UINT8')

# Set the data for the model input from the NumPy array
model_input.set_data_from_numpy(input_array)

# Run inference on the model with the provided input
res = triton_client.infer(
    model_name=model_name,  # Specify the model to use
    inputs=[model_input],  # List of input objects
    outputs=[InferRequestedOutput('probs')],  # List of requested outputs
)

# Read class labels from a text file 
with open(f'{model_name}/labels.txt') as f:
    labels = f.readlines()

# Get the index of the class with the highest probability from the output
predicted_class_index = np.argmax(res.as_numpy('probs'))

# Print the predicted class label based on the index and labels list
print(labels[predicted_class_index])