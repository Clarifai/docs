from fastmcp import FastMCP
from pydantic import Field
from typing import Annotated

from clarifai.runners.models.mcp_class import MCPModelClass

server = FastMCP("my-mcp-server", instructions="", stateless_http=True)


@server.tool("addition_tool", description="Add two numbers")
def addition_tool(
    a: Annotated[float, Field(description="First number")],
    b: Annotated[float, Field(description="Second number")],
) -> float:
    """Add two numbers"""
    return a + b


@server.tool("subtraction_tool", description="Subtract two numbers")
def subtraction_tool(
    a: Annotated[float, Field(description="First number")],
    b: Annotated[float, Field(description="Second number")],
) -> float:
    """Subtract two numbers"""
    return a - b


@server.tool("multiplication_tool", description="Multiply two numbers")
def multiplication_tool(
    a: Annotated[float, Field(description="First number")],
    b: Annotated[float, Field(description="Second number")],
) -> float:
    """Multiply two numbers"""
    return a * b


@server.tool("division_tool", description="Divide two numbers")
def division_tool(
    a: Annotated[float, Field(description="First number")],
    b: Annotated[float, Field(description="Second number")],
) -> float:
    """Divide two numbers"""
    return a / b


class MyModel(MCPModelClass):
    def get_server(self) -> FastMCP:
        """Return the FastMCP server instance."""
        return server