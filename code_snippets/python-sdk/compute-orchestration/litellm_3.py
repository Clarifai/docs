import os
import litellm

for chunk in litellm.completion(
    model="clarifai/openai.chat-completion.gpt-oss-120b",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable

    # Message formatting follows OpenAI's schema: {"role": ..., "content": ...}
    messages=[
        {"role": "system", "content": "You are a friendly assistant."},
        {"role": "user", "content": "Tell me a fun fact about space."}
    ],

    stream=True,       # Enable streaming responses
    # Optional OpenAI-compatible parameters
    temperature=0.7,   # Controls randomness
    max_tokens=100     # Limits response length
):
    # Print incremental text as it arrives
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
