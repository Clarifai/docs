from clarifai.client.input import Inputs
import time
from clarifai_grpc.grpc.api import resources_pb2 as r

# Set PAT as an environment variable before running this script
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize the Inputs client
input_client = Inputs(
    user_id="YOUR_USER_ID",
    app_id="YOUR_APP_ID",
)

# Upload video data from a specified URL with a unique input ID
input_id = "video_bbox_example" # change per test if re-running
input_client.upload_from_url(
    input_id=input_id,
    dataset_id="YOUR_DATASET_ID", # Optional: specify dataset ID to add the input to a dataset
    video_url="https://samples.clarifai.com/beer.mp4"
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

# Bounding box coordinates for annotation, (top_row, left_col, bottom_row, right_col), relative 0–1
bbox_points = [0.1, 0.1, 0.8, 0.9]

# Build a video frame annotation with one region (Clarifai requires frame -> region -> bbox)
bbox_pb = r.BoundingBox(
    top_row=bbox_points[0],
    left_col=bbox_points[1],
    bottom_row=bbox_points[2],
    right_col=bbox_points[3],
)
region = r.Region(
    region_info=r.RegionInfo(bounding_box=bbox_pb),
    data=r.Data(concepts=[r.Concept(id="glass", name="glass", value=1.0)])
)
frame = r.Frame(
    frame_info=r.FrameInfo(time=0, index=0),   # first frame (time in ms)
    data=r.Data(regions=[region])
)
annotation = r.Annotation(
    input_id=input_id,
    data=r.Data(frames=[frame])
)

# Upload the annotation associated with the video
input_client.upload_annotations([annotation])

# -------- OPTIONAL: multiple labels or multiple frames --------
'''
# Example: multiple labels on separate frames (one annotation per frame)
labels = ["glass", "person", "dog"]
annotations = []
for i, lab in enumerate(labels):
    bb = r.BoundingBox(top_row=0.1+i*0.05, left_col=0.1, bottom_row=0.4+i*0.05, right_col=0.4)
    reg = r.Region(region_info=r.RegionInfo(bounding_box=bb),
                   data=r.Data(concepts=[r.Concept(id=lab, name=lab, value=1.0)]))
    frm = r.Frame(frame_info=r.FrameInfo(time=i*1000, index=i), data=r.Data(regions=[reg]))
    annotations.append(r.Annotation(input_id=input_id, data=r.Data(frames=[frm])))

input_client.upload_annotations(annotations)
'''