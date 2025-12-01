import openai

client = openai.OpenAI(
    api_key="anything",  # LiteLLM proxy accepts any key
    base_url="http://0.0.0.0:4000"
)

response = client.chat.completions.create(
    model="clarifai-model",
    messages=[
        {
            "role": "user",
            "content": "this is a test request, write a short poem"
        }
    ]
)

print(response)