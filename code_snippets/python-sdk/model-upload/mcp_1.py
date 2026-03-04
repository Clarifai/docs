from typing import Any

from fastmcp import FastMCP
from pydantic import Field

from clarifai.runners.models.mcp_class import MCPModelClass

server = FastMCP("my-mcp-server", instructions="A sample MCP server.", stateless_http=True)


@server.tool("hello", description="Say hello to someone")
def hello(name: str = Field(description="Name to greet")) -> str:
    """Greet a user by name."""
    return f"Hello, {name}!"


@server.resource("config://version")
def get_version():
    """Return the server version."""
    return "1.0.0"


class MyModel(MCPModelClass):
    """MCP model that exposes tools, resources, and prompts."""

    def get_server(self) -> FastMCP:
        """Return the FastMCP server instance."""
        return server
