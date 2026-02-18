import asyncio
import os
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

transport = StreamableHttpTransport( 
    url="https://api.clarifai.com/v2/ext/mcp/v1/users/clarifai/apps/mcp/models/browser-mcp-server",
    headers={
        "Authorization": f"Bearer {os.environ['CLARIFAI_PAT']}",
    },
)

async def main():
    async with Client(transport) as client:
        tools = await client.list_tools()
        print("Available tools:")
        for tool in tools:
            print(f"- {tool.name}")

        result = await client.call_tool(
            "search",
            {
                "query": "latest AI breakthroughs",
                "max_results": 5,
            },
        )

        print("\nSearch result:")
        print(result.content[0].text)


if __name__ == "__main__":
    asyncio.run(main())