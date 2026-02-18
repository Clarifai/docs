import asyncio
import os
import json
from openai import AsyncOpenAI
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

# MCP client setup
transport = StreamableHttpTransport(
    # Replace placeholders with actual values
    url="https://api.clarifai.com/v2/ext/mcp/v1/users/{user_id}/apps/{app_id}/models/{model_id}",
    headers={
        "Authorization": f"Bearer {os.environ['CLARIFAI_PAT']}",
    },
)

# OpenAI-compatible client (Clarifai)
openai_client = AsyncOpenAI(
    api_key=os.environ["CLARIFAI_PAT"],
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
)

def format_tools_to_openai_function(tools):
    # Convert MCP tools to OpenAI function format
    return [
        {
            "type": "function",
            "function": {
                "name": tool.name,
                "description": tool.description or "",
                "parameters": tool.inputSchema,
            },
        }
        for tool in tools
    ]

async def main():
    # Discover MCP tools
    async with Client(transport) as mcp_client:
        tools_raw = await mcp_client.list_tools()
        tools = format_tools_to_openai_function(tools_raw)

        # First LLM call
        response = await openai_client.chat.completions.create(
            model="https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507",
            messages=[
                {
                    "role": "user",
                    "content": "What are the latest developments in artificial intelligence?",
                }
            ],
            tools=tools,
            tool_choice="auto",
        )

        message = response.choices[0].message

        # If the model calls a tool
        if message.tool_calls:
            tool_call = message.tool_calls[0]
            tool_name = tool_call.function.name
            tool_args = json.loads(tool_call.function.arguments)

            # Execute tool via MCP
            tool_result = await mcp_client.call_tool(
                tool_name,
                tool_args,
            )

            tool_output = tool_result.content[0].text

            # Second LLM call with tool result
            final_response = await openai_client.chat.completions.create(
                model="https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507",
                messages=[
                    {
                        "role": "user",
                        "content": "What are the latest developments in artificial intelligence?",
                    },
                    message,
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": tool_output,
                    },
                ],
            )

            print("\nFinal answer:\n")
            print(final_response.choices[0].message.content)

        else:
            # No tool call; print model response directly
            print("\nAnswer:\n")
            print(message.content)


if __name__ == "__main__":
    asyncio.run(main())
