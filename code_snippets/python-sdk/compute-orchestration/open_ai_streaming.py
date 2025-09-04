import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's API
client = OpenAI(     
    base_url="https://api.clarifai.com/v2/ext/openai/v1",  # Clarifai's OpenAI-compatible API endpoint
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable
)

# Make a chat completion request to a Clarifai-hosted model
response = client.chat.completions.create(    
    model="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    #model="anthropic/completion/models/claude-sonnet-4", # Or, provide Clarifai model name
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who are you?"}
    ],
    # You can also add other OpenAI-compatible parameters like max_tokens, etc.
    max_completion_tokens=100,  # Limits the response length
    temperature=0.7,  # Controls randomness of the output
    stream=True  # Enables streaming the response token by token
)

print("Assistant's Response:")
for chunk in response:
    # Safely check if choices, delta, and content exist before accessing
    if chunk.choices and \
       chunk.choices[0].delta and \
       chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end='')
print("\n")  