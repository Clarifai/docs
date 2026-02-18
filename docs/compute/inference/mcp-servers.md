---
description: Extend agentic models capabilities with MCP Servers
sidebar_position: 6
---

# MCP Servers

**Extend agentic models inference capabilities with MCP Servers**
<hr />


[Model Context Protocol](https://docs.clarifai.com/compute/agents/mcp) (MCP) servers enable LLMs with agentic capabilities on Clarifai to dynamically discover and invoke external tools during inference. 

By integrating MCP servers with agentic-enabled models, you can extend model behavior beyond normal uses to include tool usage, data retrieval, and action execution — all within a single inference flow. 

This allows AI agents on Clarifai to reason, call tools exposed by MCP servers, and iteratively use their outputs to produce more accurate and capable responses.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OpenAIStreaming from "!!raw-loader!../../../code_snippets/python-sdk/inference/open_ai_streaming.py";
import OpenAINonStreaming from "!!raw-loader!../../../code_snippets/python-sdk/inference/open_ai_non_streaming.py";
import MCPServerFastMCP from "!!raw-loader!../../../code_snippets/python-sdk/inference/mcp_server_fast_mcp.py";
import OutputOpenAIStreaming from "!!raw-loader!../../../code_snippets/python-sdk/inference/output_open_ai_streaming.txt";

## Prerequisites

### Get an Agentic Model

For a model to support agentic behavior through MCP servers on the Clarifai platform, it must extend the standard `OpenAIModelClass` with the `AgenticModelClass`. 

This extension enables the following capabilities:

* Tool discovery and execution managed by the agentic model class
* Iterative tool calling within a single predict or generate request
* Compatibility with Clarifai SDKs and the OpenAI-compatible API
* Support for both streaming and non-streaming inference modes

You can see an example implementation of `AgenticModelClass` in [this `1/model.py`](https://github.com/Clarifai/runners-examples/blob/main/llm/agentic-gpt-oss-20b/1/model.py) file.

> **Note:** To upload a model with agentic capabilities, simply use `AgenticModelClass`. All other steps and functionality remain the same as when [uploading a standard model](https://docs.clarifai.com/compute/upload/) on Clarifai. You can follow [this example](https://github.com/Clarifai/runners-examples/tree/main/llm/agentic-gpt-oss-20b) to get started.

These are some example models with agentic capabilities enabled:

    * [Qwen3-30B-A3B-Instruct-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507)
    * [Qwen3-30B-A3B-Thinking-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Thinking-2507)
    * [Qwen3-Coder-30B-A3B-Instruct](https://clarifai.com/qwen/qwenCoder/models/Qwen3-Coder-30B-A3B-Instruct)


### Get an MCP Server

The Clarifai platform provides MCP servers that you can use out of the box. Here are some examples:

- [Weather Server](https://clarifai.com/clarifai/mcp/models/weather-mcp-server) — Provides weather information
- [Browser Server](https://clarifai.com/clarifai/mcp/models/browser-mcp-server) — Enables web browsing capabilities

You can also [build your own MCP server](https://docs.clarifai.com/compute/agents/mcp#build-an-mcp-server) or use an [open-source MCP server](https://docs.clarifai.com/compute/agents/deploy-mcp) and deploy it on the Clarifai platform.

> **Note:** You can specify multiple MCP servers in the [`mcp_servers`](#chat-completions-streaming) list to give the model access to multiple tool sets.


### Install Packages

You need to install the following Python packages:

- `clarifai` – Install the latest version of the Clarifai Python SDK package. This also installs the [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli).
-  `openai` — This leverage Clarifai’s [OpenAI-compatible endpoint](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) endpoint to run inferences using the OpenAI client library
- `fastmcp` — The core framework for interacting with MCP servers.


You can run the following command to install them:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai openai fastmcp</CodeBlock>
</TabItem>
</Tabs>


### Get a PAT Key

You need a [PAT](https://docs.clarifai.com/control/authentication/pat/#how-to-create-a-pat-on-the-platform) (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can get one by navigating to **Settings** in the collapsible left sidebar, selecting **Secrets**, and creating or copying an existing token from there.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`. This also authenticates your session when using the Clarifai’s CLI. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>


## Integrate with LLMs

You can pass an MCP server as a tool source to an agentic LLM on Clarifai. The model will automatically discover available tools and call them as needed during completion.

### Chat Completions (Non-Streaming)

The [OpenAI Chat Completions](https://platform.openai.com/docs/api-reference/chat) API endpoint lets you produce a model response by providing a list of messages that constitute a conversation.

<Tabs groupId="code">                                                                     
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{OpenAINonStreaming}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{OutputOpenAIStreaming}</CodeBlock>
</details>
                             
The above snippet demonstrates how to:

- Initialize the OpenAI client and point it to Clarifai’s OpenAI-compatible endpoint, instead of OpenAI’s servers.
- Specify which MCP servers the model can use. During inference, the model can discover and call these tools autonomously if it decides they’re useful.
- Create a chat completion conversation with MCP support:
    - An agentic model is used to discover tools from MCP servers, execute them, and iterate on tool calls if needed — for example, weather lookup or browsing.
    - `extra_body={"mcp_servers": mcp_servers}` tells Clarifai which MCP servers to make available to the model for this request.
   

### Chat Completions (Streaming)

You can enable token-by-token streaming by setting `stream=True`. This allows the model’s response to arrive incrementally, providing partial results in real time instead of waiting for the full completion.

<Tabs groupId="code">                                                                     
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{OpenAIStreaming}</CodeBlock>
</TabItem>
</Tabs>

## Use with FastMCP Client

You can call MCP tools directly using the FastMCP client without involving an LLM, giving you full programmatic control over tool execution.

<Tabs groupId="code">                                                                     
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{MCPServerFastMCP}</CodeBlock>
</TabItem>
</Tabs>