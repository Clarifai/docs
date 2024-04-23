import onnx  # Library for working with ONNX models
import onnxruntime as ort  # Library for running ONNX models
import numpy as np  # Library for numerical operations
import cv2  # Library for image processing

# Commented-out code for model verification (uncomment if needed)
# onnx_model = onnx.load("model/1/model.onnx")
# onnx.checker.check_model(onnx_model)

# Load the input image using OpenCV
input_image = cv2.imread('ramen.png')

# Expand the image dimension to match model input requirements 
input_array = np.expand_dims(input_image, axis=0)

# Swap axes and convert to float32 for potential model input requirements
input_array = np.swapaxes(input_array, 1, 3).astype(np.float32)

# Create an inference session using the ONNX model
ort_sess = ort.InferenceSession('model/1/model.onnx') # replace with correct path to onnx model file

# Run inference on the model with the preprocessed input
outputs = ort_sess.run(None, {'input': input_array})

# Extract the predicted class index from the output
predicted = outputs[0][0].argmax(0)

# Read class labels from a text file (replace filename if different)
with open(f'model/labels.txt') as f:
    labels = f.readlines()

# Print the predicted class label based on the index and labels list
print(labels[predicted])