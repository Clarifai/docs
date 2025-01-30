from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under # Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "clarifai"
APP_ID = "main"
# Change these to whatever model and video URL you want to use
MODEL_ID = "general-image-detection"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f'

VIDEO_URL = "https://samples.clarifai.com/beer.mp4"
# Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
# The number must range betweeen 100 and 60000.
# FPS = 1000/sample_ms

SAMPLE_MS = 2000

# Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id
# eg: model = Model("https://clarifai.com/clarifai/main/models/general-image-detection")


model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID, pat="YOUR_PAT")
output_config = {"sample_ms": SAMPLE_MS}  # Run inference every 2 seconds
model_prediction = model.predict_by_url(
    VIDEO_URL, input_type="video", output_config=output_config
)

# The predict API gives flexibility to generate predictions for data provided through filepath, URL and bytes format.

# Example for prediction through Filepath:
# model_prediction = model.predict_by_filepath(video_file_path, input_type="video", output_config=output_config)

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_video_bytes, input_type="video", output_config=output_config)


# Print the frame info and the first concept name in each frame
for frame in model_prediction.outputs[0].data.frames:
    print(f"Frame Info: {frame.frame_info} Concept: {frame.data.concepts[0].name}\n")
