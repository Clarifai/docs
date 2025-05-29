import os
from clarifai.client import Model
from clarifai.runners.utils.data_types import Audio

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(
    url="MODEL_URL_HERE",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

# client-side streaming
response_stream = model.transcribe_audio(
    audio=iter(Audio(bytes=b''))
    # Or, provide audio as URL
    # audio=Audio(url="https://example.com/audio.mp3")
)

for text_chunk in response_stream:
    print(text_chunk.text, end="", flush=True)