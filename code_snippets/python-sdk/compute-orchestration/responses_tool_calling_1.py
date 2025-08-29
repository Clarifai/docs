import os
from openai import OpenAI

# Initialize the OpenAI-compatible client for Clarifai
client = OpenAI(    
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable   
)

# Define the external tool (function) that the LLM can call
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Returns the current temperature for a given location.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City and country, e.g., 'Bogotá, Colombia'"
                    }
                },
                "required": ["location"],
                "additionalProperties": False
            }
        }
    }
]

# Step 1: Ask the model a question that may trigger a tool call
response = client.responses.create(
    model="https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
    # model="anthropic/completion/models/claude-sonnet-4",  # Or, provide Clarifai model name
    input=[
        {"role": "user", "content": "What is the weather like in New York today?"}
    ],
    tools=tools,
    tool_choice="auto"
)

print("Raw response:", response)

# Step 2: Check if the model requested a tool call
tool_call = None
if response.output and response.output[0].content[0].type == "tool_call":
    tool_call = response.output[0].content[0].tool_call
    print("Tool call:", tool_call)

if tool_call:
    # Simulate executing the tool
    if tool_call.function.name == "get_weather":
        location = tool_call.function.arguments.get("location")
        # Example: mock tool response (you’d call a real API here)
        tool_result = f"The temperature in {location} is 23°C."

        # Step 3: Send tool result back to the model
        follow_up = client.responses.create(
            model="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
            input=[
                {"role": "user", "content": "What is the weather like in New York today?"},
                {
                    "role": "assistant",
                    "content": [tool_call]  # Echo back tool call so model has continuity
                },
                {
                    "role": "tool",
                    "name": "get_weather",
                    "content": tool_result
                }
            ]
        )

        print("\nFinal response from model:")
        print(follow_up.output_text)
