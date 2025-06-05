import json
from openai import OpenAI

# Initialize the OpenAI client, pointing to Clarifai's OpenAI-compatible API endpoint
client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key="YOUR_CLARIFAI_PAT_KEY_HERE",
)

# Define the external tools (functions) that the LLM can call.
# In this example, it's a 'get_weather' function.
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
                    "description": "City and country, e.g., 'Bogotá, Colombia'"
                }
            },
            "required": ["location"],
            "additionalProperties": False # Ensures no extra parameters are passed
        },
        "strict": True # Enforces strict adherence to parameter schema
    }
}]

## Simulate Tool Execution (for demonstration)

# This function simulates calling an external weather API.
# In a real application, this would make an actual API request.
def get_weather(location: str):
    """Simulates fetching weather for a given location."""
    # Placeholder data for demonstration
    if "New York" in location:
        return {"location": "New York", "temperature": "20°C", "conditions": "Partly cloudy"}
    elif "London" in location:
        return {"location": "London", "temperature": "15°C", "conditions": "Rainy"}
    else:
        return {"location": location, "temperature": "N/A", "conditions": "Unknown"}

## LLM Call with Tooling

# First API call: The LLM decides if a tool needs to be called.
print("--- Initial LLM Call (Tool Recommendation) ---")
first_response = client.chat.completions.create(
    model="anthropic/completion/models/claude-sonnet-4", # Ensure this model supports tool calling on Clarifai's platform
    messages=[
        {"role": "user", "content": "What is the weather like in New York today?"}
    ],
    tools=tools, # Provide the list of available tools
    tool_choice="auto", # Let the LLM decide if it needs to use a tool
)


## Process LLM's Response and Execute Tool (if recommended)

# Check if the LLM decided to call a tool
if first_response.choices[0].message.tool_calls:
    tool_calls = first_response.choices[0].message.tool_calls
    print(f"\nLLM recommended tool calls: {tool_calls}")

    # Execute each recommended tool call
    available_functions = {
        "get_weather": get_weather, # Map function name to actual Python function
    }

    messages = [
        {"role": "user", "content": "What is the weather like in New York today?"}
    ]
    messages.append(first_response.choices[0].message) # Add LLM's tool call suggestion to messages

    for tool_call in tool_calls:
        function_name = tool_call.function.name
        function_to_call = available_functions[function_name]
        function_args = json.loads(tool_call.function.arguments)

        # Call the actual Python function
        function_response = function_to_call(**function_args)
        print(f"\nExecuting tool: {function_name}({function_args}) -> {function_response}")

        # Add the tool's output to the conversation for the LLM to process
        messages.append(
            {
                "tool_call_id": tool_call.id,
                "role": "tool",
                "name": function_name,
                "content": json.dumps(function_response),
            }
        )

    # ---
    ## Second LLM Call (Summarize Tool Output)
    

    # Now, send the tool's output back to the LLM to get a natural language response
    print("\n--- Second LLM Call (Summarizing Tool Output) ---")
    second_response = client.chat.completions.create(
        model="anthropic/completion/models/claude-sonnet-4",
        messages=messages, # Continue the conversation with tool output
    )

    print("\nFinal Assistant's Response:")
    print(second_response.choices[0].message.content)

else:
    print("\nLLM did not recommend any tool calls.")
    print("Assistant's direct response:")
    print(first_response.choices[0].message.content)