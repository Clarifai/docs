from clarifai_datautils.image import ImageAnnotations

# Defining dataset path 
LOCAL_FOLDER_PATH = "./assets/annotation_formats/cifar-10"

# Detecting the format
format = ImageAnnotations.detect_format(LOCAL_FOLDER_PATH)

print(f"Detected format: {format}")
