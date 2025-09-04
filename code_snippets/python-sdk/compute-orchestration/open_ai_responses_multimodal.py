import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's API
client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",  # Clarifai's OpenAI-compatible API endpoint
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable
)

# Make a response request with text + image input
response = client.responses.create(
    model="https://clarifai.com/openai/chat-completion/models/gpt-4.1", 
    #model="openai/chat-completion/models/gpt-4.1", # Or, provide Clarifai model name
    input=[
        {
            "role": "user",
            "content": [
                { "type": "input_text", "text": "What is in this image?" },
                {
                    "type": "input_image",
                    "image_url": "https://samples.clarifai.com/metro-north.jpg"
                }
            ]
        }
    ],
    max_output_tokens=150,
    temperature=0.7,
)

# Print the model's response
print(response.output_text)
