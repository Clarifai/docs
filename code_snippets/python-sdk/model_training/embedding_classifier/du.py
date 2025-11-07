from clarifai.client.dataset import Dataset
from clarifai.client.app import App

# Set your PAT as an environment variable before running this script:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # For Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # For Windows

# Initialize the App object
app = App(
    user_id="YOUR_USER_ID",
    app_id="demo_train"
)

# Create a new dataset
dataset = app.create_dataset(dataset_id="text_dataset")

# Upload raw text data from a CSV file
dataset.upload_from_csv(
    csv_path="path_to_your_csv_file.csv", # Example: "imdb.csv",
    input_type="text",
    csv_type="raw",
    labels=True # Upload with concepts
)
