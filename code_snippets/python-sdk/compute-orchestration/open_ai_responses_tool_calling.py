import os
from openai import OpenAI

# Initialize the OpenAI-compatible client for Clarifai
client = OpenAI(    
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable   
)

# Define the external tools (functions) that the LLM can call.
# In this example, it's a 'get_weather' function.
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
                "additionalProperties": False  # Ensures no extra parameters are passed
            }
        }
    }
]

# Create a response request with tool-calling enabled
response = client.responses.create(
    model="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    #model="anthropic/completion/models/claude-sonnet-4", # Or, provide Clarifai model name
    input=[
        {"role": "user", "content": "What is the weather like in New York today?"}
    ],
    tools=tools,
    tool_choice="auto"  # Let the LLM decide if it needs to use a tool
)

# Print the tool call proposed by the model, if any
if response.output and response.output[0].content[0].type == "tool_call":
    print("Tool calls:", response.output[0].content[0].tool_calls)
else:
    print("No tool calls in response")
