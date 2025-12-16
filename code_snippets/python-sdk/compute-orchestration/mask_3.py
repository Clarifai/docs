# This example uses Matplotlib, Pillow, and NumPy. You can install them by running: pip install matplotlib Pillow numpy

import matplotlib.pyplot as plt
from clarifai.client import Model
from clarifai.runners.utils.data_types import Video, Region, Concept, Frame

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the model 
model = Model(
    url="https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus",
    #deployment_id="DEPLOYMENT_ID_HERE"
)

# Load video from a URL
video = Video(url="https://samples.clarifai.com/beer.mp4")

# Or: load from local file 
# video_path = "path/to/video.mp4"
# with open(video_path, "rb") as f:
#     video = Video(bytes=f.read())

# Define frame-level prompts using Regions with track IDs
frame0 = Frame(
    regions=[
        Region(point=[0.1, 0.2, 0.0], concepts=[Concept(name="1", value=1.0)], track_id="1"),
        Region(point=[0.2, 0.3, 0.0], concepts=[Concept(name="0", value=0.0)], track_id="1"),
    ]
)
frame0.proto.frame_info.index = 0

frame1 = Frame(
    regions=[
        Region(point=[0.11, 0.22, 0.0], concepts=[Concept(name="1", value=1.0)], track_id="2"),
        Region(point=[0.22, 0.33, 0.0], concepts=[Concept(name="0", value=0.0)], track_id="2"),
    ]
)
frame1.proto.frame_info.index = 1

# Generate masks using the frame-based approach
output_frames = model.generate(video=video, frames=[frame0, frame1], return_type="all")

# Alternatively,  use `list_dict_inputs` instead
# frame_objs = [
#     dict(
#         points=[[0.1, 0.2], [0.2, 0.3]],
#         box=None,
#         obj_id=0,
#         labels=[1, 0],
#         frame_idx=0
#     ),
#     dict(
#         points=[[0.11, 0.22], [0.22, 0.33]],
#         box=None,
#         obj_id=1,
#         labels=[1, 0],
#         frame_idx=1
#     ),
# ]
# output_frames = model.generate(video=video, list_dict_inputs=frame_objs, return_type="all")

# Visualize the output masks
for frame_idx, frame in enumerate(output_frames):
    for region_idx, region in enumerate(frame.regions):
        mask = region.mask  # Clarifai Image object
        track_id = region.track_id

        # Convert mask to NumPy array
        mask_array = mask.to_numpy()

        # Show the mask
        plt.figure(figsize=(5, 5))
        plt.imshow(mask_array, cmap='gray')
        plt.title(f"Frame {frame_idx}, Region {region_idx}, Track ID: {track_id}")
        plt.axis('off')
        plt.show()

        print(f"Displayed mask for Frame {frame_idx}, Track ID: {track_id}")
