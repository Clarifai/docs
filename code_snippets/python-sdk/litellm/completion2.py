from litellm import completion

messages = [{"role": "user","content": """Write a poem about history?"""}]
response=completion(
            model="clarifai/anthropic.completion.claude-2_1",
            messages=messages,
        )

print(f"Claude-2.1 response : {response}")