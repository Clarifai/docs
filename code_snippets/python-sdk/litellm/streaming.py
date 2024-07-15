from litellm import completion

messages = [{"role": "user","content": """Write a poem about history?"""}]
response = completion(
                model="clarifai/openai.chat-completion.GPT-4",
                messages=messages,
                stream=True,
                api_key = "OpenAI_API_KEY")

for chunk in response:
  print(chunk)