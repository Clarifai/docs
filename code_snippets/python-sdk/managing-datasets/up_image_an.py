from clarifai.client.input import Inputs
import time

# Set PAT as an environment variable before running this script
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize the Inputs client
input_client = Inputs(
    user_id="YOUR_USER_ID",
    app_id="YOUR_APP_ID"
)

# Upload image data from a specified URL with a unique input ID
input_id = "bbox_example"
input_client.upload_from_url(
    input_id=input_id,
    dataset_id="YOUR_DATASET_ID", # Optional: specify dataset ID to add the input to a dataset
    image_url="https://samples.clarifai.com/BarackObama.jpg"
)

# Poll until input is processed successfully
status = None
for _ in range(10):  # max retries
    inp = input_client.get_input(input_id)
    status = inp.status.code
    if status == 30000:  # SUCCESS
        break
    time.sleep(2)

if status != 30000:
    raise RuntimeError("Input not processed, cannot add annotations yet.")

# Define bounding box coordinates (format: [left, top, right, bottom])
bbox_points = [0.1, 0.1, 0.8, 0.9]

# Generate a bounding box annotation with specified label ("face") and bounding box coordinates
annotation = input_client.get_bbox_proto(
    input_id=input_id,
    label="face",
    bbox=bbox_points
)

# Upload the generated annotation to associate with the previously uploaded image
input_client.upload_annotations([annotation])
