import litellm

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current temperature for a given location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City and country e.g. Tokyo, Japan"
                }
            },
            "required": ["location"],
            "additionalProperties": False
        },
    }
}]

response = litellm.completion(
    model="openai/https://clarifai.com/openai/chat-completion/models/o4-mini",
    api_key="CLARIFAI_PAT",
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    messages=[{"role": "user", "content": "What is the weather in Paris today?"}],
    tools=tools,
)

print(response.choices[0].message.tool_calls)
