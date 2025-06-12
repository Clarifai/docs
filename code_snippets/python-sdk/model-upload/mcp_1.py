from typing import Any, Annotated
from pydantic import Field

from clarifai.runners.models.mcp_class import MCPModelClass
from fastmcp import FastMCP 


# Initialize the server
server = FastMCP("my-trimmed-mcp-server", instructions="", stateless_http=True)


@server.tool("calculate_sum", description="Add two numbers together")
def calculate_sum(
    a: Annotated[Any, Field(description="first number")], 
    b: Annotated[Any, Field(description="second number")] 
):
    return float(a) + float(b)


@server.tool("weather", description="Get the current weather information for the given city")
def weather(city: Annotated[str, Field(description="The city to get weather for")]): 
    if city.lower() == "philly":
        return "It's always sunny in Philadelphia!"
    elif city.lower() == "seattle":
        return "It's always rainy in Seattle!"
    else:
        return f"In {city} it's 74 F and cloudy."


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server