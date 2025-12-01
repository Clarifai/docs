import os
import json
from litellm import completion

# -----------------------------------------
# Step 1: Define the tool schema
# -----------------------------------------
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

# -----------------------------------------
# Step 2: Implement the tool logic
# -----------------------------------------
def get_weather(location: str) -> str:
    # In a real app, you'd call a weather API here
    return f"The current temperature in {location} is 22°C."

# -----------------------------------------
# Step 3: Request a model completion that may trigger a tool call
# -----------------------------------------
response = completion(
    model="clarifai/openai.chat-completion.gpt-oss-120b",
    api_key=os.environ["CLARIFAI_PAT"],  # Ensure CLARIFAI_PAT is set
    messages=[
        {"role": "user", "content": "What is the weather in Paris today?"}
    ],
    tools=tools
)

tool_calls = response.choices[0].message.tool_calls

# -----------------------------------------
# Step 4: Parse and execute the tool call
# -----------------------------------------
if tool_calls:
    for tool_call in tool_calls:
        tool_name = tool_call.function.name
        arguments = json.loads(tool_call.function.arguments)

        if tool_name == "get_weather":
            result = get_weather(arguments["location"])

            # -----------------------------------------
            # Step 5: Send tool result back to the model
            # -----------------------------------------
            follow_up = completion(
                model="clarifai/openai.chat-completion.gpt-oss-120b",
                api_key=os.environ["CLARIFAI_PAT"],
                messages=[
                    {"role": "user", "content": "What is the weather in Paris today?"},
                    {"role": "assistant", "tool_calls": [tool_call]},
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": result
                    }
                ]
            )

            # Print the assistant's final response
            print(follow_up.choices[0].message.content)
else:
    print("No tool was called.")
