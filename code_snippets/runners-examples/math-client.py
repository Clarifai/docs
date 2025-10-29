import asyncio
import os

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()  # get url from the current clarifai config

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    async with Client(transport) as client:
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")

        result = await client.call_tool("addition_tool", {"a": 10.1, "b": 5.2})
        print(f"10.1 + 5.2 = {result.content[0].text}")

        result = await client.call_tool("subtraction_tool", {"a": 10.1, "b": 3.2})
        print(f"10.1 - 3.2 = {result.content[0].text}")

        result = await client.call_tool("multiplication_tool", {"a": 4.1, "b": 7.2})
        print(f"4.1 * 7.2 = {result.content[0].text}")

        result = await client.call_tool("division_tool", {"a": 20.1, "b": 4.2})
        print(f"20.1 / 4.2 = {result.content[0].text}")


if __name__ == "__main__":
    asyncio.run(main())