import asyncio
import os

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()  # get url from the current clarifai config

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    print("=== Perplexity MCP Server Examples ===\n")

    async with Client(transport) as client:
        # List available tools first
        print("Available tools:")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print("\n" + "=" * 50 + "\n")

        # Example 1: Ask a question
        print("1. Asking a question about machine learning:")
        try:
            result = await client.call_tool(
                "ask_question",
                {"question": "What is machine learning?", "search_focus": "academic"},
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 2: Search for sources
        print("2. Searching for sources on Python:")
        try:
            result = await client.call_tool(
                "search_sources",
                {"topic": "python programming", "source_type": "all", "max_results": 3},
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 3: Get trending topics
        print("3. Getting trending topics in technology:")
        try:
            result = await client.call_tool("get_trending_topics", {"category": "tech"})
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 4: Fact-check a claim
        print("4. Fact-checking a claim:")
        try:
            result = await client.call_tool(
                "fact_check", {"claim": "Python is open source", "include_sources": True}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")


if __name__ == "__main__":
    asyncio.run(main())