import asyncio
import os

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    async with Client(transport) as client:
        # List available tools
        print("=== Available Tools ===")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print()

        # Test 1: execute_with_packages
        print("=== Test 1: execute_with_packages ===")
        code_with_pkg = 'import requests; print(f"Requests version: {requests.__version__}"); print("Package imported successfully!")'
        result = await client.call_tool(
            "execute_with_packages", {"code": code_with_pkg, "packages": ["requests"]}
        )
        print(result.content[0].text)


if __name__ == "__main__":
    asyncio.run(main())