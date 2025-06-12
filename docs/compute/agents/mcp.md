---
description: Build performant MCP Servers with FastMCP for Clarifai
sidebar_position: 2
toc_max_heading_level: 4
---

# MCP 

**Build performant MCP servers with FastMCP for Clarifai**
<hr />

[The Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open standard developed by Anthropic that acts as a universal language for AI models, particularly large language models (LLMs), to interact with external data sources (like GitHub, Slack, or databases) and extend their capabilities.

With MCP, you can build intelligent agents and complex workflows on top of LLMs, enabling secure and efficient access to contextual information.

## How it Works

At its core, MCP follows a [client-server architecture](https://www.clarifai.com/blog/mcp-vs-a2a-clearly-explained) where a host application (like an AI chatbot or an IDE with AI features) can connect to an MCP server. The server acts as a gateway to specific external data, tools, or functionalities.

An MCP server can expose several key capabilities — most notably, tools that function as callable actions for LLMs, such as updating records or interacting with external systems.

While MCP provides the specification, implementing clients and servers that adhere to it can involve substantial boilerplate code and intricate protocol handling. This is exactly where [FastMCP](https://github.com/jlowin/fastmcp) excels. FastMCP is a high-level, Pythonic framework that significantly simplifies the development of MCP servers and clients. 

Clarifai allows you to build performant MCP servers with FastMCP by providing the necessary infrastructure needed to define, deploy, and manage custom MCP servers at scale.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import MCPModelPyFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_1.py";
import MCPConfigFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_2.yaml";
import MCPRequirementsFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_3.txt";
import MCPClientFile  from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_4.py";
import MCPOutputExample from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_5.txt";
import BuildLogsExample from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_6.txt";

## Build an MCP Server

Building an MCP server with FastMCP using Clarifai follows the same intuitive pattern as [building and uploading models](https://docs.clarifai.com/compute/models/upload/) on the platform. 

Let's demonstrate how you can build a simple MCP server using the FastMCP framework. This server will expose callable tools for LLMs or other AI agents, and we'll upload it to the Clarifai platform as a custom model, making its functionalities accessible within the Clarifai ecosystem.

### Step 1: Perform Prerequisites

#### Install Packages

You need to install the following Python packages:

- `clarifai` – The latest version of the Clarifai Python SDK required for integrating your MCP server with the Clarifai platform. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the server.

- `fastmcp` – This is the core framework used to define and manage the MCP server.

- `pydantic` – [Pydantic](https://github.com/pydantic/pydantic) is essential for data validation and defining the structure (schema) of your tool arguments, particularly using `Field`. We'll pair it with `Any` and `Annotated` from Python's `typing` module to add vital metadata, like descriptions, to function arguments, which is key for `fastmcp`'s type hinting and automatic schema generation.

You can run the following command to install them:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade fastmcp pydantic clarifai </CodeBlock>
</TabItem>
</Tabs>


Or, you can define the packages in a [`requirements.txt`](#step-4-define-dependencies-in-requirementstxt) file and run the following command to install them:


<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install -r requirements.txt </CodeBlock>
</TabItem>
</Tabs>


#### Set a PAT Key

You also need to have a Personal Access Token (PAT) to authenticate your connection with the Clarifai platform. You can generate it in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

Then, set the `CLARIFAI_PAT` as an environment variable. 

<Tabs>
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

:::note tip

On Windows, the Clarifai Python SDK expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the SDK, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::

#### Create Files

Create a project directory and organize your files as indicated below to fit the requirements of building custom models for the Clarifai platform. 

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
└── client.py
```

:::tip

You can automatically generate these files by running this CLI command: `clarifai model init --model-type-id mcp`. You can then edit them as needed.

:::

- **your_model_directory/** – The root directory containing all files related to your server.
  - **1/** – A subdirectory that holds the model file (_Note that the folder is named as **1**_).
    - **model.py** – Contains the main logic for the MCP server implementation.
  - **requirements.txt** – Lists the Python dependencies required to run your server.
  - **config.yaml** – Contains metadata and configuration settings needed for uploading the model to Clarifai.   
  - **client.py** – Only contains an example client for demonstrating MCP usage after uploading the model to Clarifai.

### Step 2: Prepare `model.py` File

`model.py` is the main file where you'll implement your MCP server's logic.

Here's the `model.py` file for the custom model (or, in this case, a server) we want to build:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{MCPModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

Let’s break down what each part of the file does.

#### a. Initialize the FastMCP Server

You'll start by creating an instance of the `FastMCP` class to set up your server. 

Here are the key arguments you can pass to the `FastMCP` constructor:

* `name` – An optional identifier for your MCP server. This is useful for distinguishing it in logs or when managing multiple servers in client applications.
* `instructions` – An optional, short description that helps clients understand the server's purpose or how to best interact with its functionalities.
* `stateless_http` – A boolean flag (`True`/`False`) that configures the server to operate over stateless HTTP. Turning this on is ideal for lightweight deployments, as it simplifies communication by not requiring persistent sessions.

#### b. Define Tools

An empty MCP server isn't very useful; its power comes from the **tools** it exposes. We define these tools by applying the `@server.tool(...)` decorator directly to Python functions. This decorator registers the function as an MCP "tool," making it discoverable and invokable by any MCP client (like an LLM).

Each tool is enriched with essential metadata:

* Tool-level metadata – The `@server.tool()` decorator itself takes a `name` and `description` to explain the tool's overall purpose.
* Input descriptions – The tool's input arguments are precisely described using `Annotated` in conjunction with `Field`. 

In our example, we define two distinct tools:

* `calculate_sum` – A tool that takes two numbers, `a` and `b`, and returns their sum.
* `weather` – A tool that accepts a `city` name and provides a pre-defined weather response.

:::tip

For details on adding other useful MCP server components, like `Resources` and `Prompts`, you can refer to the [official MCP documentation](https://modelcontextprotocol.io/docs/concepts/resources).

:::

#### c. Define Clarifai's Model Class 

The custom-named model class serves as the integration point between your MCP server and the Clarifai platform.

You must define it by subclassing Clarifai's `MCPModelClass` and implementing the `get_server()` method. This method returns the `FastMCP` server instance (such as `server`) that Clarifai should use when running your model.

When Clarifai runs the model, it calls `get_server()` to load your MCP server and expose its defined tools and capabilities to LLMs or other agents.

### Step 3: Prepare `config.yaml` File

The `config.yaml` file is used to configure the build and deployment settings for a custom model on the Clarifai platform. It tells Clarifai how to build your model's environment and where to place it within your account.

This is the `config.yaml` file for the custom model (or, in this case, a server) we want to build:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{MCPConfigFile}</CodeBlock>
</TabItem>
</Tabs>

Let’s break down what each part of the file does.

* `build_info` – This section specifies the Python version that Clarifai should use to build the environment for your model. Note that we currently support Python 3.11 and Python 3.12 (default).
* `inference_compute_info` – This section defines the computing resources allocated for your MCP model when it performs inference; that is, when it's running and being used by AI agents.
    - `cpu_limit` – '1' : Allocates 1 CPU core for the model's inference tasks.
    - `cpu_memory` – 1Gi : Provides 1 Gigabyte of RAM for the model.
    - `num_accelerators`– 0 : Indicates that no specialized hardware accelerators (like GPUs) are requested for this model. This is typical for basic MCP servers that might not require heavy computational power.
* `model` – This specifies your Clarifai app ID, model ID, and Clarifai user ID. These will define where your model will be uploaded on the Clarifai platform. The `model_type_id` parameter indicates the type of model being uploaded. 

### Step 4: Define Dependencies in `requirements.txt`

The `requirements.txt` file lists all the Python packages your MCP server depends on. Clarifai uses this file during deployment to automatically install the necessary libraries, ensuring your server runs correctly.

Here's the `requirements.txt` file for the custom model (or, in this case, a server) we want to build:

<Tabs>
<TabItem value="text" label="txt">
    <CodeBlock className="language-text">{MCPRequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

### Step 5: Test the Model Locally

Before uploading your server to the Clarifai platform, you can test it locally to catch any typos or misconfigurations in the code.

#### a. Local-Dev

You can use Clarifai's `local-dev` CLI tool to test and run your model as a local development runner. You can learn how to use the tool [here](https://docs.clarifai.com/compute/models/upload/run-locally).

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model local-dev </CodeBlock>
</TabItem>
</Tabs>

#### b. MCP Inspector

You can also use the [MCP Inspector](https://github.com/modelcontextprotocol/inspector) to easily test and debug your MCP server through a user-friendly, web-based interface that allows you to connect to your server and explore its capabilities. 

To launch the Inspector, run the following command. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> npx @modelcontextprotocol/inspector </CodeBlock>
</TabItem>
</Tabs>

Once the interface opens, set the `Transport Type` to `Streamable HTTP` and provide the URL of your deployed MCP server on the Clarifai platform (_learn how to get the URL in the next step_). In the Authentication section, enter `Authorization` as the Header Name, and supply your Clarifai PAT in the `Bearer Token` field. 

After entering these details, click the **Connect** button to establish a connection and begin inspecting your server’s capabilities.

<details>

  <summary>MCP Inspector UI</summary>

    ![](/img/others/mcp-inspector.png)
</details>

### Step 6: Upload to Clarifai

To upload the MCP server to the Clarifai platform, navigate to its root directory and run the following command:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>

As the upload proceeds, you'll see build logs directly in your terminal. These are helpful for troubleshooting any issues that might pop up during the process. 

:::note

Once the upload is complete, the build logs will display an example code snippet that you can incorporate into your `client.py` script. The snippet will contain the URL of your deployed MCP server, which you'll use to enable your AI agents or clients to communicate with the server. This URL is constructed by combining the MCP API base URL (`https://api.clarifai.com/v2/ext/mcp/v1`) with your specific Clarifai identifiers: your user ID, app ID, and the model ID of your deployed MCP server. For example: `https://api.clarifai.com/v2/ext/mcp/v1/users/user-id/apps/app-id/models/model-id`.

:::

<details>
  <summary>Build Logs Example</summary>
    <CodeBlock className="language-text">{BuildLogsExample}</CodeBlock>
</details>

**Note:** If you make changes to your server code and re-upload it, Clarifai automatically creates a new version of your model.

### Step 7: Deploy the Model

After uploading your model to Clarifai, you'll need to deploy it to a dedicated compute cluster and nodepool. This action provisions the necessary resources to run your server and handle requests efficiently.

Learn how to perform deployments [here](https://docs.clarifai.com/compute/deployments/clusters-nodepools).

### Step 8: Interact With Server

After uploading your server to Clarifai, you can create a separate client script to communicate with it and invoke its tools.

Here’s an example `client.py` that demonstrates how to interact with your deployed MCP server:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{MCPClientFile}</CodeBlock>
</TabItem>
</Tabs>

Let’s break down what each part of the file does.

- **Set up connection** – We establish the connection to your deployed MCP server. The `StreamableHttpTransport` instance handles this, serving as a specialized FastMCP transport for HTTP communication. Its `url` parameter points directly to your MCP model on Clarifai. Instead of hardcoding this URL, we use `ClarifaiUrlHelper().mcp_api_url()` as a convenient utility. Based on your current [context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-context), this helper provides the base URL where your MCP server lives and exposes its tools, ensuring flexibility and correctness.

- **Main logic** – We asynchronously open the MCP client session by initializing `fastmcp.Client` with the configured `transport`. Once connected, we list all available tools exposed by the server and call them. Note the use of `async` and `await`; FastMCP clients operate asynchronously, requiring an `async` function and an `async with Client` block to properly manage the client's lifecycle.

- **Execution** – Finally, `asyncio.run(main())` executes the entire asynchronous interaction.

To execute the client example, run the following command:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> python client.py </CodeBlock>
</TabItem>
</Tabs>

:::note

If you encounter a `Server error '503 Service Unavailable'` while calling the server, it typically indicates that the model is in a cold state and still warming up. You may wait a moment before trying the request again. 

:::

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{MCPOutputExample}</CodeBlock>
</details>

## Additional Examples

To learn more about building MCP servers using Clarifai, see the following examples:

- [Build an Interactive AI Agent with Clarifai's LLMs and MCP Tools](https://github.com/Clarifai/examples/tree/main/agents/mcp/chat-mcp-agent)
- [Empowering AI Agents: Clarifai LLMs with MCP Tools for Task Automation](https://github.com/Clarifai/examples/tree/main/agents/mcp/llm-mcp-agent)
- [A FastMCP Server for Web Browse and Research Tools](https://github.com/Clarifai/runners-examples/tree/main/mcp/browser-tools)
- [A FastMCP Server for Google Drive Integration](https://github.com/Clarifai/runners-examples/tree/main/mcp/google-drive)
- [A FastMCP Server for PostgreSQL Database Operations](https://github.com/Clarifai/runners-examples/tree/main/mcp/postgres)
