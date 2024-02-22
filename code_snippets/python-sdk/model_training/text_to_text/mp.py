# Getting the predictions
TEXT = b"This is a great place to work"
model_prediction = model.predict_by_bytes(TEXT, input_type="text")

# Get the output
print('Input: ',TEXT)
print(model_prediction.outputs[0].data.text)