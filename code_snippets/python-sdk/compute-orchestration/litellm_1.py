import os
import litellm

response = litellm.completion(
    model="openai/https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    # Message formatting is consistent with OpenAI's schema ({"role": ..., "content": ...}).
    messages=[
        {"role": "system", "content": "You are a friendly assistant."},
        {"role": "user", "content": "Hey, how's it going?"}
    ],
    # You can add OpenAI-compatible parameters here
    temperature=0.7,         # Optional: controls randomness
    max_tokens=100           # Optional: limits response length
)

# Print the assistant's reply
print(response['choices'][0]['message']['content'])