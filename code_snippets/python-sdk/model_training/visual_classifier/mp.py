import cv2
import matplotlib.pyplot as plt

IMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_classification/food-101/images/hamburger/139558.jpg')
model_prediction = model.predict_by_filepath(IMAGE_PATH, input_type="image")

#Display the model predictions
img = plt.imread(IMAGE_PATH)
plt.axis('off')
plt.imshow(img)
for concept in model_prediction.outputs[0].data.concepts:
    print(concept.id,':',round(concept.value,2))