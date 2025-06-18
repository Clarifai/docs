import os
import litellm

# Enable streaming
response_stream = litellm.completion(
    model="openai/https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    messages=[
        {"role": "system", "content": "You are a friendly assistant."},
        {"role": "user", "content": "Hey, how's it going? Tell me a short story about a space-faring cat."}
    ],
    stream=True  # Enable streaming
)

# Print the streamed output in real time
for chunk in response_stream:
    content = chunk.get("choices", [{}])[0].get("delta", {}).get("content")
    if content:
        print(content, end="", flush=True)
