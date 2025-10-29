import asyncio
import os

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()  # get url from the current clarifai config

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    print("=== PostgreSQL MCP Server Examples ===\n")

    # Note: These examples assume you have PostgreSQL credentials
    # Set environment variables: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE

    postgres_config = {
        "host": os.environ.get("POSTGRES_HOST", "localhost"),
        "port": os.environ.get("POSTGRES_PORT", "5432"),
        "user": os.environ.get("POSTGRES_USER", "postgres"),
        "password": os.environ.get("POSTGRES_PASSWORD", ""),
        "database": os.environ.get("POSTGRES_DATABASE", "postgres"),
    }

    async with Client(transport) as client:
        # List available tools first
        print("Available tools:")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print("\n" + "=" * 50 + "\n")

        # Example 1: Test PostgreSQL connection
        print("1. Testing PostgreSQL connection:")
        try:
            result = await client.call_tool("postgres_connect", postgres_config)
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 2: List databases
        print("2. Listing databases:")
        try:
            result = await client.call_tool(
                "postgres_list_databases",
                {
                    "host": postgres_config["host"],
                    "port": postgres_config["port"],
                    "user": postgres_config["user"],
                    "password": postgres_config["password"],
                },
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 3: List tables in database
        print("3. Listing tables:")
        try:
            result = await client.call_tool("postgres_list_tables", postgres_config)
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 4: Execute a sample query
        print("4. Executing a sample query (SELECT version):")
        try:
            result = await client.call_tool(
                "postgres_execute_query",
                {
                    **postgres_config,
                    "query": "SELECT version() as postgres_version, current_timestamp as current_time;",
                },
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 5: Get table sizes
        print("5. Getting table sizes:")
        try:
            result = await client.call_tool("postgres_table_size", postgres_config)
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

    print("\n" + "=" * 50)
    print("Note: Set these environment variables for actual PostgreSQL connections:")
    print("- POSTGRES_HOST (default: localhost)")
    print("- POSTGRES_USER (default: postgres)")
    print("- POSTGRES_PASSWORD")
    print("- POSTGRES_DATABASE (default: postgres)")
    print("=" * 50)


if __name__ == "__main__":
    asyncio.run(main())