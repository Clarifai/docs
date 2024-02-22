TEXT = b"This is a great place to work"

# get the predictions
model_prediction = model.predict_by_bytes(TEXT, input_type="text")

print(model_prediction.outputs[0].data.clusters)
