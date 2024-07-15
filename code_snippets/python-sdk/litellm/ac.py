from litellm import acompletion
async def test_get_response():
    user_message = "Hello, how are you?"
    messages = [{"content": user_message, "role": "user"}]
    response = await acompletion(model="clarifai/openai.chat-completion.GPT-4", messages=messages, api_key="OpenAI_API_KEY")
    return response

response = await test_get_response()
print(response)