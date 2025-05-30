---
description: Build performant MCP Servers with Clarifai
sidebar_position: 1
toc_max_heading_level: 4
---

# Clarifai MCP Servers

**Build performant MCP Servers with Clarifai**
<hr />

The Model Context Protocol (MCP) is a standardized, secure framework for building servers that expose data and functionality to LLM-based applications. 
Think of it as a specialized web API built specifically for LLM interactions.

Clarifai allows you to build [MCP servers](https://www.clarifai.com/blog/mcp-vs-a2a-clearly-explained) by providing the necessary infrastructure and tools to define and deploy custom MCP servers. This allows you to seamlessly integrate your proprietary data sources, custom APIs, and application-specific functionalities with various LLM applications. 

Let's illustrate how you can build a simple MCP server.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import MCPModelPyFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_1.py";
import MCPConfigFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_2.yaml";
import MCPRequirementsFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_3.txt";
import MCPClientFile  from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/mcp_4.py";

## Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set a PAT Key

You need to set the `CLARIFAI_PAT` (Personal Access Token) as an environment variable. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform.

<Tabs>
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

### Create Files

Create a project directory and organize your files as indicated below to fit the requirements of building servers for the Clarifai platform. 

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
└── client.py
```

- **your_model_directory/** – The root directory containing all files related to your server.
  - **1/** – A subdirectory that holds the model file (_Note that the folder is named as **1**_).
    - **model.py** – Contains the main MCP server implementation.
  - **requirements.txt** – Lists the Python dependencies required to run your server.
  - **config.yaml** – Contains metadata and configuration settings, such as compute requirements, needed for uploading the model to Clarifai.
   - **client.py** – Contains the example client demonstrating usage.

Add the following snippets to each of the respective files. 

#### `model.py`

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{MCPModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{MCPRequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

:::info important

In the `model` section of the `config.yaml` file, specify your model ID, Clarifai user ID, and Clarifai app ID. These will define where your model will be uploaded on the Clarifai platform. 

:::

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{MCPConfigFile}</CodeBlock>
</TabItem>
</Tabs>

#### `client.py`

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{MCPClientFile }</CodeBlock>
</TabItem>
</Tabs>

:::note Mock Data

This example includes mock data and fallback implementations when external services are not available, allowing you to test the MCP interface without requiring all external dependencies.

:::

## Run an Example

After setting up the required files, navigate to your directory and run the following command to install the dependencies:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install -r requirements.txt </CodeBlock>
</TabItem>
</Tabs>

Then, run the client example:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> python client.py </CodeBlock>
</TabItem>
</Tabs>

##  Upload to Clarifai

You can upload the MCP server to the Clarifai platform by navigating to its directory and running the following command:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>
