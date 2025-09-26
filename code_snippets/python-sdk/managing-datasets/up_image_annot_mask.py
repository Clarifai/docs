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
input_id = "mask_example"
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

# Define polygon points for the mask 
# Coordinates are normalized (0.0 to 1.0) relative to image width and height
mask_points = [
    [0.30, 0.20],  # top-left forehead
    [0.70, 0.20],  # top-right forehead
    [0.85, 0.45],  # right cheek
    [0.70, 0.80],  # right jaw
    [0.30, 0.80],  # left jaw
    [0.15, 0.45]   # left cheek
]

# Create a mask annotation with label "obama"
annotation = input_client.get_mask_proto(
    input_id=input_id,
    label="obama",
    polygons=mask_points
)

# Upload the generated annotation to associate with the previously uploaded image
input_client.upload_annotations([annotation])