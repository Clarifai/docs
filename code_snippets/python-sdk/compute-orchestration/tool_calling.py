from clarifai.client import Model
import os

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Initialize with model URL
model = Model(url="https://clarifai.com/anthropic/completion/models/claude-sonnet-4")

# Define tools 
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current temperature for a given location.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City and country e.g. Bogotá, Colombia"
                    },
                    "units": {
                        "type": "string",
                        "description": "Temperature units, e.g. Celsius or Fahrenheit",
                        "enum": ["Celsius", "Fahrenheit"]
                    }
                },
                "required": ["location"],
                "additionalProperties": False
            },
            "strict": True
        }
    }
]

response = model.generate(
    prompt="What is the temperature in Tokyo in Celsius?",
    tools=tools,
    tool_choice='auto',
    max_tokens=1024,
    temperature=0.5,
)

# Print response summary
print("Iterate or print response as needed:\n", response)
