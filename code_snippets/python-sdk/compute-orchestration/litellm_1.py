import os
from litellm import completion

response = completion(
    model="clarifai/openai.chat-completion.gpt-oss-120b",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable

    # Message formatting follows OpenAI's schema: {"role": ..., "content": ...}
    messages=[
        {"role": "system", "content": "You are a friendly assistant."},
        {"role": "user", "content": "Hey, how's it going?"}
    ],

    # Optional OpenAI-compatible parameters
    temperature=0.7,  # Controls randomness
    max_tokens=100    # Limits response length
)

print(response['choices'][0]['message']['content'])
