from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport
import asyncio
import os
import logging

# Suppress verbose MCP client HTTP logs
logging.getLogger('mcp.client.streamable_http').setLevel(logging.CRITICAL)

# Set as environment variable export CLARIFAI_PAT="YOUR_PAT_HERE"
PAT = os.environ['CLARIFAI_PAT']

# Retrieve MCP API base URL from your current Clarifai configuration (optional helper)
url = ClarifaiUrlHelper().mcp_api_url()
# url = ClarifaiUrlHelper().mcp_api_url(user_id="user-id-here", app_id="app-id-here", model_id="model-id-here") # Manually set MCP URL, and it takes precedence
print(url)

# Create MCP HTTP transport targeting your deployed MCP model on Clarifai
transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})

async def main():
    print("=== Sample MCP Server Client Examples ===\n")

    async with Client(transport) as client:
        # List all available tools exposed by the MCP server
        print("Available tools:")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print("\n" + "=" * 50 + "\n")

        # Example 1: Call 'calculate_sum' tool
        print("1. Calling 'calculate_sum' to add two numbers:")
        try:
            result = await client.call_tool("calculate_sum", {"a": 10, "b": 25})
            print(f"Result of 10 + 25: {result[0].text}")
        except Exception as e:
            print(f"Error calling calculate_sum: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 2: Call 'weather' tool for different cities
        print("2. Calling 'weather' for different cities:")

        # Call for Philly
        try:
            result_philly = await client.call_tool("weather", {"city": "Philly"})
            print(f"Weather in Philly: {result_philly[0].text}")
        except Exception as e:
            print(f"Error calling weather for Philly: {e}")

        # Call for Seattle
        try:
            result_seattle = await client.call_tool("weather", {"city": "Seattle"})
            print(f"Weather in Seattle: {result_seattle[0].text}")
        except Exception as e:
            print(f"Error calling weather for Seattle: {e}")

if __name__ == "__main__":
    asyncio.run(main())
