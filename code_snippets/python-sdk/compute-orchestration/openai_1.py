from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's API
client = OpenAI(
    api_key="YOUR_CLARIFAI_PAT_KEY_HERE",  
    base_url="https://api.clarifai.com/v2/ext/openai/v1"  # Clarifai's OpenAI-compatible API endpoint
)

# Make a chat completion request to a Clarifai-hosted model
response = client.chat.completions.create(
    model="anthropic/completion/models/claude-sonnet-4",  # Clarifai model name
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who are you?"}
    ],
    # You can also add other OpenAI-compatible parameters like temperature, max_tokens, etc.
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