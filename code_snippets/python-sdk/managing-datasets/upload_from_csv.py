from clarifai.client.dataset import Dataset

# Set PAT as an environment variable before running this script
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Create a dataset object
dataset = Dataset(
    user_id="YOUR_USER_ID",
    app_id="YOUR_APP_ID",
    dataset_id="YOUR_DATASET_ID"
)

# Upload local image files
dataset.upload_from_csv(
    csv_path="path_to_your_csv_file.csv",
    input_type="image",
    csv_type="file_path",
    labels=True # Set to False to upload without concepts
)

'''
# Upload image data from URLs
dataset.upload_from_csv(
    csv_path="sample_images.csv",
    input_type="image",
    csv_type="url",
    labels=True
)

# Upload raw text data
dataset.upload_from_csv(
    csv_path="sample_texts.csv",
    input_type="text",
    csv_type="raw",
    labels=True
)

# Upload video data from file paths
dataset.upload_from_csv(
    csv_path="sample_videos.csv",
    input_type="video",
    csv_type="file_path",
    labels=True
)

# Upload audio data from URLs
dataset.upload_from_csv(
    csv_path="sample_audio.csv",
    input_type="audio",
    csv_type="url",
    labels=True
)
'''
