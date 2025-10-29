import asyncio
import os

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()  # get url from the current clarifai config

print(url)

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    print("=== Browser Tools MCP Server Examples ===\n")

    async with Client(transport) as client:
        # List available tools first
        print("Available tools:")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print("\n" + "=" * 50 + "\n")

        # Example 1: Fetch webpage content
        print("1. Fetching webpage content:")
        try:
            result = await client.call_tool(
                "fetch_webpage", {"url": "https://httpbin.org/get", "max_length": 2000}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 2: Extract clean text from webpage
        print("2. Extracting clean text:")
        try:
            result = await client.call_tool(
                "extract_text", {"url": "https://httpbin.org/html", "max_length": 1000}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 3: Search Google (mock results)
        print("3. Searching Google (mock implementation):")
        try:
            result = await client.call_tool(
                "search_google", {"query": "python programming", "num_results": 3}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 4: Check website status
        print("4. Checking website status:")
        try:
            result = await client.call_tool(
                "check_website_status", {"url": "https://httpbin.org", "check_ssl": True}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 5: Extract links from webpage
        print("5. Extracting links from webpage:")
        try:
            result = await client.call_tool(
                "extract_links", {"url": "https://httpbin.org", "max_links": 5}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")


if __name__ == "__main__":
    asyncio.run(main())