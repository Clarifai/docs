import json
import os
import asyncio
import queue
import threading
import traceback
from typing import Any, Iterator

import anyio
from pydantic import Field
from pydantic_core import ValidationError

from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.models.mcp_class import MCPModelClass
from clarifai.utils.logging import logger

from mcp import types
from mcp.shared.exceptions import McpError
from fastmcp import FastMCP, Client  # Use fastmcp v2, not the built-in mcp

# Initialize the server
server = FastMCP("my-first-mcp-server", instructions="", stateless_http=True)


@server.tool("calculate_sum", description="Add two numbers together")
def sum(a: Any = Field(description="first number"), b: Any = Field(description="second number")):
    return float(a) + float(b)


@server.tool("weather", description="Get the current weather information for the given city")
def weather(city: str = Field(description="The city to get weather for")):
    if city.lower() == "philly":
        return "It's always sunny in Philadelphia!"
    elif city.lower() == "seattle":
        return "It's always rainy in Seattle!"
    else:
        return f"In {city} it's 74 F and cloudy."


@server.tool("list_files", description="List files in a directory")
def list_files(directory: str = Field(description="The directory to list files in")) -> list[str]:
    try:
        return os.listdir(directory)
    except FileNotFoundError:
        return f"Directory {directory} not found."


@server.tool("send_slack_message", description="Send a message to a Slack channel")
def send_slack_message(
    channel: str = Field(description="The Slack channel to send the message to"),
    message: str = Field(description="The message to send"),
) -> str:
    import requests

    # Replace with your Slack API token
    slack_token = os.environ.get("SLACK_API_TOKEN")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {slack_token}",
    }
    payload = {
        "channel": channel,
        "text": message,
    }
    url = "https://slack.com/api/chat.postMessage"
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    response.raise_for_status()  # Raise an exception for HTTP errors (4xx or 5xx)
    response_json = response.json()

    if response.status_code == 200 and response_json.get("ok"):
        return "Message sent successfully!"
    else:
        return f"Failed to send message: {response.text}"


@server.tool("sandbox", description="Run code")
def sandbox(code: str = Field(description="Code to run")) -> str:
    return eval(code)


# Static resource
@server.resource("config://version")
def get_version():
    return "2.0.1"


# Dynamic resource template
@server.resource("users://{user_id}/profile")
def get_profile(user_id: int):
    # Fetch profile for user_id...
    return {"name": f"User {user_id}", "status": "active"}


@server.prompt()
def summarize_request(text: str) -> str:
    """Generate a prompt asking for a summary."""
    return f"Please summarize the following text:\n\n{text}"


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server
