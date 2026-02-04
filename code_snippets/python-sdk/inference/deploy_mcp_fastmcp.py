import asyncio
import os
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

transport = StreamableHttpTransport(
    url="https://api.clarifai.com/v2/ext/mcp/v1/users/{user_id}/apps/{app_id}/models/{model_id}",
    headers={"Authorization": "Bearer " + os.environ["CLARIFAI_PAT"]},
)

async def main():
    try:
        async with Client(transport) as client:
            # List all available tools
            tools = await client.list_tools()
            print(f"Available tools: {tools}")
            
    except Exception as e:
        print(f"Error: {e}")
        raise

if __name__ == "__main__":
    asyncio.run(main())