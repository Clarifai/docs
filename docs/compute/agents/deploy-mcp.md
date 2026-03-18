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

Integrating large language models (LLMs) with MCP servers enables agentic capabilities, allowing models to discover and use external tools autonomously to complete tasks. MCP servers expose functionalities that models can invoke as function-calling tools during conversations.

With MCP server integration, an agentic model can iteratively discover tools, execute them, and reason over the results to produce more capable and context-aware responses.

> **Note:**
> For a model to support agentic behavior through MCP servers on the Clarifai platform, it must extend the standard `OpenAIModelClass` with the `AgenticModelClass`. This enables:
>
> * Tool discovery and execution handled by the agentic model class
> * Iterative tool calling within a single predict or generate request
> * Compatibility with the OpenAI-compatible API and Clarifai SDKs
> * Support for both streaming and non-streaming modes
>
> The `AgenticModelClass` manages the full agentic loop: it discovers available MCP tools at model load time, injects them into the LLM context, and iteratively calls tools and feeds results back to the model until a final response is produced.
>
> You can see an example implementation of `AgenticModelClass` in [this `1/model.py`](https://github.com/Clarifai/runners-examples/blob/main/llm/agentic-gpt-oss-20b/1/model.py) file.

:::tip

To upload a model with agentic capabilities, simply use the `AgenticModelClass` — all other functionalities and steps remain the [same as uploading](https://docs.clarifai.com/compute/upload/) a standard model on Clarifai. You can follow [this example](https://github.com/Clarifai/runners-examples/tree/main/llm/agentic-gpt-oss-20b). 

:::

These are some example models with agentic capabilities enabled:

    * [Qwen3-30B-A3B-Instruct-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507)
    * [Qwen3-30B-A3B-Thinking-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Thinking-2507)
    * [Qwen3-Coder-30B-A3B-Instruct](https://clarifai.com/qwen/qwenCoder/models/Qwen3-Coder-30B-A3B-Instruct)

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
├── Dockerfile
└── client.py
```

* **your_model_directory/** — The root directory containing all files related to your MCP server.
  * **1/** — A required subdirectory that contains the model implementation (*note that the folder name is **1***).
    * **model.py** — Implements the core logic of the MCP server.
  * **requirements.txt** — Specifies the Python dependencies required to run the server.
  * **config.yaml** — Defines metadata and configuration settings used when uploading the MCP server to Clarifai.
  * **Dockerfile** — Defines the runtime environment used to build and run your MCP server on the Clarifai platform.
  * **client.py** — An example client script you can use to interact with the MCP server after it has been uploaded.


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

* Starts the MCP server as a single long-lived stdio process (e.g., a Node.js or Python subprocess) during `load_model()`
* Opens a persistent FastMCP client session that is reused for all subsequent requests, reducing per-request overhead
* Discovers all available MCP tools at startup
* Exposes the tools through an HTTP API
* Handles tool execution and response formatting
* Supports configuration via YAML, including environment variables and injected secrets

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
    - `id` — Provide a unique identifier for the model (server)
    - `app_id` — Provide your Clarifai app where the server will reside
    - `user_id` — Provide your Clarifai user ID
    - `model_type_id` — Specifies the [model type](https://docs.clarifai.com/create/models/#model-types); use `mcp` for MCP servers
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
clarifai==12.1.7
anyio
mcp==1.26.0
fastmcp==2.14.5
requests>=2.31.0
```

</TabItem>
</Tabs>

## Step 5: Define Dockerfile

The `Dockerfile` defines the container environment used to build and run the MCP server on the Clarifai platform.

When you upload an MCP server, Clarifai builds a Docker image from this file and uses it to execute your server in a secure, isolated container — exactly the same way custom models are deployed.

The Dockerfile is responsible for:

- Selecting the base Python image
- Installing system-level dependencies (if any)
- Installing Python dependencies from `requirements.txt`
- Copying your MCP server code into the container
- Defining the entry point that starts the MCP server

Here is the `Dockerfile` file for the Browser MCP server:

<Tabs groupId="code">
<TabItem value="dockerfile" label="Dockerfile">

```dockerfile
# syntax=docker/dockerfile:1.13-labs

FROM --platform=$TARGETPLATFORM python:3.12-slim

COPY --link requirements.txt /home/nonroot/requirements.txt

# Update clarifai package so we always have latest protocol to the API. Everything should land in /venv
RUN ["pip", "install", "--no-cache-dir", "-r", "/home/nonroot/requirements.txt"]
RUN ["pip", "show", "--no-cache-dir", "clarifai"]

# Set the NUMBA cache dir to /tmp
# Set the TORCHINDUCTOR cache dir to /tmp
# The CLARIFAI* will be set by the templaing system.
ENV NUMBA_CACHE_DIR=/tmp/numba_cache \
    TORCHINDUCTOR_CACHE_DIR=/tmp/torchinductor_cache \
    HOME=/tmp \
    DEBIAN_FRONTEND=noninteractive

#####
# Download checkpoints if config.yaml has checkpoints.when = "build"
COPY --link=true config.yaml /home/nonroot/main/
# RUN ["python", "-m", "clarifai.cli", "model", "download-checkpoints", "/home/nonroot/main", "--out_path", "/home/nonroot/main/1/checkpoints", "--stage", "build"]

#####
# Copy in the actual files like config.yaml, requirements.txt, and most importantly 1/model.py
# for the actual model.
# If checkpoints aren't downloaded since a checkpoints: block is not provided, then they will
# be in the build context and copied here as well.
COPY --link=true 1 /home/nonroot/main/1

# At this point we only need these for validation in the SDK.
COPY --link=true requirements.txt config.yaml /home/nonroot/main/

# Add the model directory to the python path.
ENV PYTHONPATH=${PYTHONPATH}:/home/nonroot/main \
    CLARIFAI_PAT=${CLARIFAI_PAT} \
    CLARIFAI_USER_ID=${CLARIFAI_USER_ID} \
    CLARIFAI_RUNNER_ID=${CLARIFAI_RUNNER_ID} \
    CLARIFAI_NODEPOOL_ID=${CLARIFAI_NODEPOOL_ID} \
    CLARIFAI_COMPUTE_CLUSTER_ID=${CLARIFAI_COMPUTE_CLUSTER_ID} \
    CLARIFAI_API_BASE=${CLARIFAI_API_BASE:-https://api.clarifai.com}

WORKDIR /home/nonroot/main

# Finally run the clarifai entrypoint to start the runner loop and local runner server.
# Note(zeiler): we may want to make this a clarifai CLI call.
ENTRYPOINT ["python", "-m", "clarifai.runners.server"]
CMD ["--model_path", "/home/nonroot/main"]
#############################

```
</TabItem>
</Tabs>

## Step 6: Upload to Clarifai

To upload your open-source MCP server to the Clarifai platform, navigate to the server’s root directory and run:


<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model upload . --skip_dockerfile</CodeBlock>
</TabItem>
</Tabs>

The [`--skip_dockerfile`](https://docs.clarifai.com/compute/upload/#skip-dockerfile) flag prevents the CLI from generating a default Dockerfile and instructs it to use the Dockerfile provided in your project directory.

This command will:

- Stream Docker build logs directly to your terminal for real-time monitoring and troubleshooting
- Build the Docker image defined in your Dockerfile
- Upload the MCP server to your Clarifai account
- Make the server available for inference via the Clarifai HTTP API

<details>
  <summary>Build Logs Example</summary>
  <CodeBlock className="language-bash">{BuildLogs}</CodeBlock>
</details>

:::note

Once the upload completes, the build logs will include an example code snippet that you can copy into your `client.py` script. This snippet contains the URL of your deployed MCP server, which your AI agents or client applications will use to communicate with the server.

The MCP server URL is constructed using the following format: `https://api.clarifai.com/v2/ext/mcp/v1/users/{user-id}/apps/{app-id}/models/{model-id}`. 

:::

## Step 7: Deploy the Model

After uploading the MCP server, you must deploy it to a dedicated compute cluster and nodepool. Deployment provisions the compute resources required to run the server and handle incoming requests.

Learn how to perform deployments [here](https://docs.clarifai.com/compute/deployments/deploy-model).

> **Note:** You can also deploy the server by following the interactive prompts shown when uploading it to Clarifai from the terminal.

Once deployed, the server is automatically referenced during inference. You do not need to specify the deployment explicitly in your client code.

## Step 8: Interact with the Server

Once the open-source MCP server is deployed, you can create a client script to communicate with it and invoke the exposed MCP tools. This allows agentic models to discover and use the server’s capabilities programmatically.

### Use with FastMCP Client

Here is an example of interacting with the MCP server directly using the FastMCP client without going through an LLM. This is typically the first step before invoking tools, executing actions, or wiring the MCP server into an agentic LLM workflow.

> **Note:** Remember to replace the placeholder values with the corresponding identifiers for your MCP server. You may also use any compatible agentic LLM.

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

- Connect to a Clarifai-hosted MCP server and discover its available tools
- Convert MCP tools into OpenAI function-calling–compatible definitions
- Send a chat completion request to an agentic LLM using Clarifai’s OpenAI-compatible API
- Allow the model to autonomously decide whether to invoke a tool (`tool_choice="auto"`)
- Execute any requested tool calls via MCP and return the results to the model for final response generation

:::tip

[Click here](https://docs.clarifai.com/compute/inference/mcp-servers) to learn more about integrating MCP servers with LLMs and running inferences on the Clarifai platform.

:::