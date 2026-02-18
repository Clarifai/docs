from openai import OpenAI
import os

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT']
)

# Define MCP servers to make available to the agentic model
mcp_servers = [
    "https://clarifai.com/clarifai/mcp/models/weather-mcp-server",
    "https://clarifai.com/clarifai/mcp/models/browser-mcp-server"
]

# Create a chat completion with MCP servers
completion = client.chat.completions.create(
    model="https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507",
    messages=[{"role": "user", "content": "What was the weather in Los Angeles, California yesterday?"}],
    extra_body={"mcp_servers": mcp_servers},
    max_completion_tokens=500,
    stream=False
)

print(completion.choices[0].message.content)