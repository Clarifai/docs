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

# Upload data from a folder
dataset.upload_from_folder(
    folder_path="/path/to/your/folder",
    input_type="image", # or "text" for text files
    labels=True   # Set to False to upload without concepts
)