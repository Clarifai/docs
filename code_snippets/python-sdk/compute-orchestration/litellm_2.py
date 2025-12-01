import os
from litellm import completion

# Define tools the model can call
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City and state, e.g., 'San Francisco, CA'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"]
                    }
                },
                "required": ["location", "unit"]
            }
        }
    }
]

# Make the completion request via LiteLLM
response = completion(
    model="clarifai/openai.chat-completion.gpt-oss-120b",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set as an environment variable
    messages=[{"role": "user", "content": "What's the weather like in San Francisco?"}],
    tools=tools
)

# Print any tool calls suggested by the model
tool_calls = response.choices[0].message.tool_calls
if tool_calls:
    print("Tool call suggested by the model:", tool_calls)
else:
    print("No tool call was made by the model.")
