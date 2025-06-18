import os
import json
import litellm

# Step 1: Define the tool schema
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

# Step 2: Define a function that simulates tool execution
def get_weather(location: str) -> str:
    # In a real app, you'd query a weather API here
    return f"The current temperature in {location} is 22°C."

# Step 3: Make the initial request to trigger the tool
response = litellm.completion(
    model="openai/https://clarifai.com/openai/chat-completion/models/o4-mini",
    api_key=os.environ["CLARIFAI_PAT"],
    api_base="https://api.clarifai.com/v2/ext/openai/v1",
    messages=[
        {"role": "user", "content": "What is the weather in Paris today?"}
    ],
    tools=tools
)

tool_calls = response.choices[0].message.tool_calls

# Step 4: Parse the tool call and run the function
if tool_calls:
    for tool_call in tool_calls:
        tool_name = tool_call.function.name
        arguments = json.loads(tool_call.function.arguments)
        
        if tool_name == "get_weather":
            result = get_weather(arguments["location"])
            
            # Step 5: Send the function result back to the model
            follow_up = litellm.completion(
                model="openai/https://clarifai.com/openai/chat-completion/models/o4-mini",
                api_key=os.environ["CLARIFAI_PAT"], # Ensure CLARIFAI_PAT is set as an environment variable
                api_base="https://api.clarifai.com/v2/ext/openai/v1",
                messages=[
                    {"role": "user", "content": "What is the weather in Paris today?"},
                    {"role": "assistant", "tool_calls": [tool_call]},
                    {"role": "tool", "tool_call_id": tool_call.id, "content": result}
                ]
            )
            
            # Print the final assistant message
            print(follow_up.choices[0].message.content)
else:
    print("No tool was called.")
