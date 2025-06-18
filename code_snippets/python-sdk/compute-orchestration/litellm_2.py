import os
import litellm

# Define the tool (function) the model can call
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Retrieve the current temperature for a given location.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City and country, e.g., 'Tokyo, Japan'"
                    }
                },
                "required": ["location"],
                "additionalProperties": False
            }
        }
    }
]

# Send the request to a Clarifai-hosted model using LiteLLM
response = litellm.completion(
    model="openai/https://clarifai.com/openai/chat-completion/models/o4-mini",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    messages=[
        {"role": "user", "content": "What is the weather in Paris today?"}
    ],
    tools=tools
)

# Output the tool call suggested by the model (if any)
print(response.choices[0].message.tool_calls)
