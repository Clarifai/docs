import asyncio
import os
import json
from openai import AsyncOpenAI
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

# Setup MCP client
transport = StreamableHttpTransport(
    url="https://api.clarifai.com/v2/ext/mcp/v1/users/{user_id}/apps/{app_id}/models/{model_id}",
    headers={"Authorization": f"Bearer {os.environ['CLARIFAI_PAT']}"},
)

# Setup OpenAI client
openai_client = AsyncOpenAI(
    api_key=os.environ["CLARIFAI_PAT"],
    base_url="https://api.clarifai.com/v2/ext/openai/v1"
)

def format_tools_to_openai_function(tools):
    """Convert MCP tools to OpenAI function format"""
    return [
        {
            "type": "function",
            "function": {
                "name": tool.name,
                "description": f"[{tool.name}] {tool.description}",
                "parameters": tool.inputSchema,
            },
        }
        for tool in tools
    ]

async def main():
    # Get tools from MCP server
    async with Client(transport) as client:
        tools_raw = await client.list_tools()
    
    tools = format_tools_to_openai_function(tools_raw)
    
    # Use tools with LLM
    response = await openai_client.chat.completions.create(
        model="https://clarifai.com/{user_id}/{app_id}/models/{llm_model_id}",
        messages=[
            {"role": "user", "content": "What are the latest developments in artificial intelligence?"}
        ],
        tools=tools,
        tool_choice="auto",
    )
    
    # Handle tool calls and execute them via MCP client
    # ... (implementation details)

if __name__ == "__main__":
    asyncio.run(main())