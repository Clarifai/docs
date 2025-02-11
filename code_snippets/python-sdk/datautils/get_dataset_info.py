from clarifai_datautils.image import ImageAnnotations

# Defining path and annotation format
LOCAL_FOLDER_PATH = './assets/annotation_formats/imagenet'
ANNOTATION_FORMAT = 'imagenet'

# Load dataset from the specified local folder
imagenet_dataset = ImageAnnotations.import_from(path=LOCAL_FOLDER_PATH, format=ANNOTATION_FORMAT) 

# Get info about the dataset
print(imagenet_dataset)
