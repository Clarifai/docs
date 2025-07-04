import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's API
client = OpenAI(     
    base_url="https://api.clarifai.com/v2/ext/openai/v1",  # Clarifai's OpenAI-compatible API endpoint
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable
)

# Make a chat completion request to a Clarifai-hosted model
response = client.chat.completions.create(    
    model="https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
    #model="anthropic/completion/models/claude-sonnet-4", # Or, provide Clarifai model name
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who are you?"}
    ],
    # You can also add other OpenAI-compatible parameters like max_tokens, etc.
    max_completion_tokens=100,  # Limits the response length
    temperature=0.7,  # Controls randomness of the output    
)

# Print the model's response
print(response.choices[0].message.content)