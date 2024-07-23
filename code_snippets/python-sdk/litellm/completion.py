from litellm import completion

messages = [{"role": "user","content": """Write a poem about history?"""}]
# Using LLM from Clarifai Platform
response=completion(
            model="clarifai/mistralai.completion.mistral-large",
            messages=messages,
        )

print(f"Mistral large response : {response}")