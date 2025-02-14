from clarifai_datautils.image import ImageAnnotations

# Defining path and annotation format
LOCAL_FOLDER_PATH = "./assets/annotation_formats/imagenet"
ANNOTATION_FORMAT = "imagenet"

# Load dataset from the specified local folder
imagenet_dataset = ImageAnnotations.import_from(path=LOCAL_FOLDER_PATH, format=ANNOTATION_FORMAT) 

# Get info about the dataset
info = imagenet_dataset.get_info()
print(info)
# Or, print the dataset details
#print(imagenet_dataset)

# Get detailed dataset information
print(f"Dataset size: {info['size']}")
print(f"Annotation count: {info['annotations_count']}")
print(f"Categories: {info['categories']}")
