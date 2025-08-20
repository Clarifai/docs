import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's API
client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",  # Clarifai's OpenAI-compatible API endpoint
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable
)

# Make a response request to a Clarifai-hosted model
response = client.responses.create(
    model="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    #model="openai/chat-completion/models/gpt-oss-120b", # Or, provide Clarifai model name
    input="Tell me a three sentence bedtime story about a unicorn.",

    # You can also add other OpenAI-compatible parameters like max tokens, etc.   
    max_output_tokens=100,
    temperature=0.7,
)

# Print the model's response
print(response.output_text)