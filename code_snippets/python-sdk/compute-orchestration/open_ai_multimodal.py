import os
import requests
import base64
from pathlib import Path
from openai import OpenAI

# Option 1: Use a local image file
# path = "local/path/of/image.png"
# image_base64 = base64.b64encode(Path(path).read_bytes()).decode()

# Option 2: Download image from URL and convert to base64
def get_image_base64(image_url):
    """Download image and convert it to a base64-encoded string."""
    response = requests.get(image_url)
    return base64.b64encode(response.content).decode("utf-8")

image_url = "https://samples.clarifai.com/cat1.jpeg"
image_base64 = get_image_base64(image_url)

# Initialize OpenAI client using Clarifai's OpenAI-compatible endpoint
client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"],
)

response = client.chat.completions.create(
    model="https://clarifai.com/openai/chat-completion/models/gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Describe the image"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{image_base64}"
                    }
                }
            ]
        }
    ],
    temperature=0.7,
    max_tokens=1024    
)

# Output the result
print(f"Response: {response.choices[0].message.content}")