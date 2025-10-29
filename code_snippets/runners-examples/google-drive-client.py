import asyncio
import os
import tempfile

from clarifai.urls.helper import ClarifaiUrlHelper
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport

PAT = os.environ['CLARIFAI_PAT']
url = ClarifaiUrlHelper().mcp_api_url()  # get url from the current clarifai config

transport = StreamableHttpTransport(url=url, headers={"Authorization": "Bearer " + PAT})


async def main():
    print("=== Google Drive MCP Server Examples ===\n")

    async with Client(transport) as client:
        # List available tools first
        print("Available tools:")
        tools = await client.list_tools()
        for tool in tools:
            print(f"- {tool.name}: {tool.description}")
        print("\n" + "=" * 50 + "\n")

        # Example 1: List files in Google Drive
        print("1. Listing files in Google Drive:")
        try:
            result = await client.call_tool(
                "drive_list_files", {"max_results": 5, "order_by": "modifiedTime desc"}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 2: Search for files
        print("2. Searching for files:")
        try:
            result = await client.call_tool(
                "drive_search_files", {"query": "project", "max_results": 3}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 3: Create a folder
        print("3. Creating a folder:")
        try:
            result = await client.call_tool(
                "drive_create_folder",
                {"folder_name": "MCP Demo Folder", "description": "Folder created by MCP example"},
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 4: Upload a file (creates a temporary file for demo)
        print("4. Uploading a file:")

        # Create a temporary file for demonstration
        with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as f:
            f.write("This is a test file for Google Drive upload demonstration.")
            temp_file_path = f.name

        try:
            result = await client.call_tool(
                "drive_upload_file",
                {
                    "file_path": temp_file_path,
                    "file_name": "MCP Demo File.txt",
                    "description": "File uploaded by MCP example",
                },
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            # Clean up temporary file
            os.unlink(temp_file_path)
        print("\n" + "=" * 50 + "\n")

        # Example 5: Share a file
        print("5. Sharing a file:")
        try:
            result = await client.call_tool(
                "drive_share_file", {"file_id": "mock-file-id-123", "anyone_can_view": True}
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

        # Example 6: Download a file
        print("6. Downloading a file:")
        try:
            result = await client.call_tool(
                "drive_download_file",
                {
                    "file_id": "mock-file-id-123",
                    "local_path": "downloaded_document.pdf",
                    "export_format": "pdf",
                },
            )
            print(result[0].text)
        except Exception as e:
            print(f"Error: {e}")
        print("\n" + "=" * 50 + "\n")

    print("\n" + "=" * 50)
    print("Note: Google Drive authentication required for actual operations:")
    print("- Set up OAuth 2.0 credentials in Google Cloud Console")
    print("- Download credentials.json file")
    print("- Run authentication flow to generate token.json")
    print("- This example uses mock data for demonstration")
    print("=" * 50)


if __name__ == "__main__":
    asyncio.run(main())