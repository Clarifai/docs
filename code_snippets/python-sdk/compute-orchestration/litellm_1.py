import litellm

# Call litellm.completion or litellm.chat_completion to send requests
for chunk in litellm.completion(
    model="openai/https://clarifai.com/openai/chat-completion/models/o4-mini",
    api_key="CLARIFAI_PAT",
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    # Message formatting is consistent with OpenAI's schema ({"role": ..., "content": ...}).
    messages=[
        {"role": "user", "content": "Tell me a fun fact about space."}
    ],
    stream=True, # Supports streaming responses
):
    print(chunk.choices[0].delta)
