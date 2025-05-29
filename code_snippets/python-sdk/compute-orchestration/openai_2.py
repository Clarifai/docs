from openai import OpenAI

# Initialize the OpenAI-compatible client for Clarifai
client = OpenAI(
    api_key="YOUR_CLARIFAI_PAT_KEY_HERE",
    base_url="https://api.clarifai.com/v2/ext/openai/v1"   
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
                "additionalProperties": False # Ensures no extra parameters are passed
            }
        }
    }
]

# Create a chat completion request with tool-calling enabled
response = client.chat.completions.create(
    model="anthropic/completion/models/claude-sonnet-4",  # Clarifai-compatible OpenAI model name
    messages=[
        {"role": "user", "content": "What is the weather like in New York today?"}
    ],
    tools=tools,
    tool_choice='auto' # Let the LLM decide if it needs to use a tool
)

# Print the tool call proposed by the model, if any
tool_calls = response.choices[0].message.tool_calls
print("Tool calls:", tool_calls)
