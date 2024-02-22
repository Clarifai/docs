IMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_classification/food-101/images/hamburger/139558.jpg')
model_prediction = model.predict_by_filepath(IMAGE_PATH, input_type="image")

# Get the output
print(model_prediction.outputs[0].data.embeddings)