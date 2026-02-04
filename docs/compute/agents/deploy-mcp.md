---
description: Upload, deploy, and interact with open-source MCP servers on Clarifai
sidebar_position: 3
---

# Deploy Open-Source MCP Servers 

**Upload, deploy, and interact with open-source MCP servers on Clarifai**
<hr />

Besides building a [custom MCP](mcp.md#build-an-mcp-server) (Model Context Protocol) server for the Clarifai platform, you can also upload any open-source MCP server and expose it as a managed API endpoint — just like any model in the platform.

You can easily integrate third-party MCP servers with Clarifai by simply adding the `mcp_server` configuration to your [`config.yaml`](#step-3-prepare-the-configyaml-file) file.

This allows you to:

- Expose MCP servers as HTTP APIs accessible through Clarifai
- Use the FastMCP client to interact with deployed MCP servers
- Seamlessly integrate MCP tools with LLMs to extend model capabilities

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import BuildLogs from "!!raw-loader!../../../code_snippets/python-sdk/inference/deploy_mcp_logs.txt";
import FastMCPClient from "!!raw-loader!../../../code_snippets/python-sdk/inference/deploy_mcp_fastmcp.py";
import IntegrateLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/deploy_mcp_integrate_llm.py";
import FastMCPOutput from "!!raw-loader!../../../code_snippets/python-sdk/inference/deploy_mcp_fastmcp_output.txt";

## Step 1: Perform Prerequisites

### Get an MCP Server

You can get open-source MCP servers from third-party repositories, such as [mcpservers.org](https://mcpservers.org/) or [mcp.so](https://mcp.so/). 

:::note objective

For this example, let's use the [DuckDuckGo MCP server](https://github.com/nickclyde/duckduckgo-mcp-server) to demonstrate how to upload and deploy an open-source MCP server on Clarifai. This server provides tools for web search, browsing, and information retrieval, and requires no authentication tokens or secrets — making it easy to deploy and use. You can also follow its tutorial [here](https://github.com/Clarifai/runners-examples/tree/main/mcp/browser-mcp-server). 

:::

### Get an Agentic Model

Integrating large language models (LLMs) with MCP servers enables agentic capabilities, allowing models to discover and use external tools autonomously to complete tasks. MCP servers expose tools that models can invoke as function-calling tools during conversations.

With MCP server integration, an agentic model can iteratively discover tools, execute them, and reason over the results to produce more capable and context-aware responses.

> **Note:**
> For a model to support agentic behavior through MCP servers on the Clarifai platform, it must extend the standard `OpenAIModelClass` with the `AgenticModelClass`. This enables:
>
> * Tool discovery and execution handled by the agentic model class
> * Iterative tool calling within a single predict or generate request
> * Compatibility with the OpenAI-compatible API and Clarifai SDKs
> * Support for both streaming and non-streaming modes
>
> You can see an example implementation of `AgenticModelClass` in [this `1/model.py`](https://github.com/Clarifai/runners-examples/blob/main/llm/agentic-gpt-oss-20b/1/model.py) file.

To upload a model with agentic capabilities, simply use the `AgenticModelClass` — all other functionalities and steps remain the [same as uploading](https://docs.clarifai.com/compute/upload/) a standard model on Clarifai. You can follow [this example](https://github.com/Clarifai/runners-examples/tree/main/llm/agentic-gpt-oss-20b). 


<details>
  <summary>Example models with agentic capabilities enabled</summary>
    * [https://clarifai.com/clarifai/agentic-model/models/gpt-oss-20b](https://clarifai.com/clarifai/agentic-model/models/gpt-oss-20b)
* [https://clarifai.com/clarifai/agentic-model/models/gpt-5_1](https://clarifai.com/clarifai/agentic-model/models/gpt-5_1)
</details>

### Install Packages

Install the following Python packages to work with the DuckDuckGo Browser MCP server:

* `clarifai` — The latest version of the Clarifai Python SDK, required to integrate your MCP server with the Clarifai platform. This package also comes with the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which you’ll use to upload the server.
* `fastmcp` — The core framework for interacting with MCP servers.
* `openai` — This leverage Clarifai’s [OpenAI-compatible endpoint](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) endpoint to run inferences using the OpenAI client library
* `anyio` — An asynchronous I/O library used by FastMCP.
* `requests` — A lightweight HTTP client for making HTTP requests.
* `mcp` — The Model Context Protocol library.

You can run the following command to install them:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai fastmcp openai anyio requests mcp</CodeBlock>
</TabItem>
</Tabs>


### Get Credentials

You need to have the following Clarifai credentials:

- **App ID** — Create a Clarifai [application](https://docs.clarifai.com/create/applications/create) and get its ID. This is where your MCP server will reside on the Clarifai platform.
- **User ID** — In the collapsible left sidebar, select **Settings** and choose **Account** from the dropdown list. Then, locate your user ID.
- **[Personal Access Token](https://docs.clarifai.com/control/authentication/pat)** (PAT) — From the same **Settings** option, choose **Secrets** to generate or copy your PAT. This token is used to authenticate your connection with the Clarifai platform.

Then, set the `CLARIFAI_PAT` as an environment variable. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Create Files

On the Clarifai platform, MCP servers are treated just like models and follow the same underlying architecture.

To upload an MCP server, you need to create a project directory and organize your files according to Clarifai’s custom model requirements, as shown below:

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
├── config.yaml
└── client.py
```

:::note

You can automatically generate this directory structure by running the following CLI command: `clarifai model init --model-type-id mcp`.
Afterward, you can modify the generated files as needed.

:::

* **your_model_directory/** — The root directory containing all files related to your MCP server.
  * **1/** — A required subdirectory that contains the model implementation (*note that the folder name is **1***).
    * **model.py** — Implements the core logic of the MCP server.
  * **requirements.txt** — Specifies the Python dependencies required to run the server.
  * **config.yaml** — Defines metadata and configuration settings used when uploading the MCP server to Clarifai.
  * **client.py** — An example client script demonstrating how to interact with the MCP server after it has been uploaded.


### Create a Cluster and Nodepool

You'll need to deploy your MCP server to a dedicated compute cluster and nodepool. This action provisions the necessary resources to run your server and handle requests efficiently.

Learn how to create a cluster and nodepool [here](https://docs.clarifai.com/compute/deployments/clusters-nodepools).

> **Note:** Ensure that your cluster and nodepool meet the compute resource requirements specified in your [`config.yaml`](#step-3-prepare-the-configyaml-file) file.


## Step 2: Prepare `model.py` File

When building a custom MCP server from scratch, `model.py` is where you implement the server’s core logic, including defining and exposing tools.

However, when uploading an open-source MCP server, you do not need to reimplement this logic. Instead, you only need to define a class that inherits from `StdioMCPModelClass`, which is designed to run and manage stdio-based MCP servers, such as the Browser MCP server.

Here is the `model.py` file that defines a `StdioMCPModelClass` for the Browser MCP server:

<Tabs groupId="code">
<TabItem value="python" label="model.py">

  ```python
  from clarifai.runners.models.stdio_mcp_class import StdioMCPModelClass

  class BrowserMCPServerClass(StdioMCPModelClass):
      pass
```
</TabItem>
</Tabs>

The `StdioMCPModelClass` abstracts away the complexity of managing stdio-based MCP servers. By inheriting from it and configuring the `mcp_server` section in `config.yaml`, your server is ready to be uploaded.

Specifically, `StdioMCPModelClass` automatically:

* Starts the MCP server as a stdio process
* Discovers all available MCP tools
* Exposes the tools through an HTTP API
* Handles tool execution and response formatting

This makes it easy to deploy open-source MCP servers on Clarifai with minimal code.


## Step 3: Prepare the `config.yaml` File

The `config.yaml` file defines the build, deployment, and runtime configuration for a custom model — or, in this case, an MCP server — on the Clarifai platform. It tells Clarifai how to build the execution environment and where the server should live within your account.

When integrating an open-source MCP server, this file is also where you specify the server’s `mcp_server` configuration, which you can obtain from the repository where it's hosted.

Here is the `config.yaml` file for the Browser MCP server:

<Tabs groupId="code">
<TabItem value="yaml" label="config.yaml">

```yaml
model:
  id: browser-mcp-server
  app_id: app_id
  user_id: user_id
  model_type_id: mcp

build_info:
  python_version: "3.11"

inference_compute_info:
  cpu_limit: 1000m
  cpu_memory: 1Gi
  num_accelerators: 0

mcp_server:
  command: "uvx"
  args: ["duckduckgo-mcp-server"]
```
</TabItem>
</Tabs>

Let’s break down what each part of the configuration does.

- `model` —  Defines where the MCP server will be uploaded on the Clarifai platform:
    - `id` — The unique identifier for the model (server)
    - `app_id` — The Clarifai app where the server will reside
    - `user_id` — Your Clarifai user ID
    - `model_type_id` — Specifies the model type; use `mcp` for MCP servers
- `build_info` — Specifies the Python version used to build the runtime environment. Note that Clarifai currently supports Python 3.11 and 3.12 (default).
- `inference_compute_info` — Defines the compute resources allocated when the MCP server is running:
  * `cpu_limit: 1000m` — Allocates 1 CPU core
  * `cpu_memory: 1Gi` — Allocates 1 GB of RAM
  * `num_accelerators: 0` — No hardware accelerators (e.g., GPUs), which is typical for MCP servers
  > **Note:** Ensure your Clarifai compute [cluster and nodepool](#create-a-cluster-and-nodepool) meet these requirements before deploying the model.
- `mcp_server` — Specifies how the MCP server process is started:
  * `command` — The executable used to launch the server (e.g., `npx`, `uvx`, `python`)
  * `args` — Arguments passed to the command


:::note Examples of other MCP servers

To deploy a different MCP server, simply update the `mcp_server` section in `config.yaml`.

- [GitHub MCP Server](https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#using-an-mcp-client)

> **Note:** Learn how to deploy it on Clarifai [here](https://github.com/Clarifai/runners-examples/blob/main/mcp/github-mcp-server/README.md).

```yaml
mcp_server:
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-github"]
```

-  Custom Python MCP Server (a custom, user-implemented MCP server)

```yaml
mcp_server:
  command: "python"
  args: ["-m", "my_mcp_server"]
```

:::


## Step 4: Define Dependencies in `requirements.txt`

The `requirements.txt` file specifies all Python packages required by your MCP server. During deployment, Clarifai uses this file to automatically install the necessary dependencies, ensuring the server runs correctly in its runtime environment.

Here is the `requirements.txt` file for the custom model — or, in this case, the MCP server — we want to upload:

<Tabs groupId="code">
<TabItem value="text" label="requirements.txt">

```text
clarifai==12.1.3
anyio
mcp==1.24.0
fastmcp==2.14.1
requests>=2.31.0
```

</TabItem>
</Tabs>


## Step 5: Upload to Clarifai

To upload your open-source MCP server to the Clarifai platform, navigate to the server’s root directory and run:


<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model upload</CodeBlock>
</TabItem>
</Tabs>


As the upload progresses, build logs will be streamed directly to your terminal. These logs are useful for monitoring the build process and troubleshooting any issues that arise.

<details>
  <summary>Build Logs Example</summary>
  <CodeBlock className="language-bash">{BuildLogs}</CodeBlock>
</details>

:::note

Once the upload completes, the build logs will include an example code snippet that you can copy into your `client.py` script. This snippet contains the URL of your deployed MCP server, which your AI agents or client applications will use to communicate with the server.

The MCP server URL is constructed using the following format: `https://api.clarifai.com/v2/ext/mcp/v1/users/{user-id}/apps/{app-id}/models/{model-id}`. 

:::

## Step 6: Deploy the Model

After uploading the MCP server, you must deploy it to a dedicated compute cluster and nodepool. Deployment provisions the compute resources required to run the server and handle incoming requests.

Learn how to perform deployments [here](https://docs.clarifai.com/compute/deployments/deploy-model).

> **Note:** You can also deploy the server by following the interactive prompts shown when uploading it to Clarifai from the terminal.

## Step 7: Interact with the Server

Once the open-source MCP server is deployed, you can create a client script to communicate with it and invoke the exposed MCP tools. This allows agentic models to discover and use the server’s capabilities programmatically.

### Use with FastMCP Client

Here is an example of interacting with the MCP server using the FastMCP client. This is typically the first step before invoking tools, executing actions, or wiring the MCP server into an agentic LLM workflow.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{FastMCPClient}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{FastMCPOutput}</CodeBlock>
</details>

The above snippet demonstrates how to:

- Authenticate to an MCP server hosted on Clarifai
- Establish an asynchronous, stream-capable MCP connection
- Discover the tools and their capabilities as exposed by that MCP server using the `client.list_tools()` method. This is a key MCP concept: models and agents can dynamically discover what tools are available at runtime, rather than hard-coding them.
> **Note:** The DuckDuckGo MCP server provides various tools for web search and information retrieval. For example, `ddg_search` is used for searching the web using DuckDuckGo. 

:::note

If you encounter a `Server error '503 Service Unavailable'` while calling the server, it typically indicates that the model is in a cold state and still warming up. You may wait a moment before trying the request again. 

:::


### Integrate with LLMs

Here is an example of how to bridge an MCP server with an agentic LLM on Clarifai so the model can discover tools, decide when to use them, and call them during inference — all through Clarifai’s OpenAI-compatible endpoint.


<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{IntegrateLLM}</CodeBlock>
</TabItem>
</Tabs>

The above snippet demonstrates how to:

- Connect to an MCP server hosted on Clarifai and discover its tools
- Expose those tools to an agentic model in OpenAI function-calling format
- Send a chat completion request to an agentic LLM via Clarifai’s OpenAI-compatible API
- Let the model decide whether to call a tool (`tool_choice="auto"`)
- (Later) Execute tool calls via MCP and feed results back to the model

:::tip

[Click here](https://docs.clarifai.com/compute/inference/mcp-servers) to learn more about integrating MCP servers with LLMs and running inferences on the Clarifai platform.

:::