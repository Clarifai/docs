from clarifai_datautils.image import ImageAnnotations

# Defining import details
IMPORT_LOCAL_FOLDER_PATH = "./assets/annotation_formats/coco"
IMPORT_ANNOTATION_FORMAT = "coco_detection"

coco_dataset = ImageAnnotations.import_from(path=IMPORT_LOCAL_FOLDER_PATH, format=IMPORT_ANNOTATION_FORMAT) 

# Defining export details
EXPORT_LOCAL_FOLDER_PATH = "./assets/annotation_formats/coco2voc"
EXPORT_ANNOTATION_FORMAT = "voc_detection"

coco_dataset_export = coco_dataset.export_to(EXPORT_LOCAL_FOLDER_PATH, EXPORT_ANNOTATION_FORMAT)

# save_images param will also save the images 
#coco_dataset_export = coco_dataset.export_to(EXPORT_LOCAL_FOLDER_PATH, EXPORT_ANNOTATION_FORMAT, save_images=True)
