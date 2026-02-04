from openai import OpenAI
import os

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT']
)

# Define MCP servers to use
mcp_servers = [
    "https://clarifai.com/clarifai/mcp/models/mcp-server-weather",
    "https://clarifai.com/clarifai/mcp/models/browser-mcp-server",
    "https://clarifai.com/clarifai/mcp/models/time-mcp-server",
]

# Create a chat completion with MCP servers
completion = client.chat.completions.create(
    model="https://clarifai.com/clarifai/agentic-model/models/gpt-oss-20b",
    messages=[{"role": "user", "content": "What was the weather in Los Angeles, California yesterday?"}],
    extra_body={"mcp_servers": mcp_servers},
    max_completion_tokens=500,
    stream=True
)

# Stream the response
for chunk in completion:
    if chunk.choices and len(chunk.choices) > 0 and hasattr(chunk.choices[0].delta, 'content') and chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
    elif chunk.choices and len(chunk.choices) > 0 and hasattr(chunk.choices[0].delta, 'reasoning_content') and chunk.choices[0].delta.reasoning_content:
        print(chunk.choices[0].delta.reasoning_content, end="", flush=True)