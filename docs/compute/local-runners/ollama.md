---
description: Download and run Ollama models locally with Clarifai’s Local Runners
sidebar_position: 1
draft: true
---

# Run Ollama Models Locally

**Download and run Ollama models locally with Clarifai’s Local Runners**
<hr />

Ollama is an open-source tool that allows you to download, run, and manage large language models (LLMs) directly on your local machine. 

When combined with Clarifai’s Local Runners, it enables you to run Ollama models on your machine, expose them securely via a public URL, and tap into Clarifai’s powerful platform — all while keeping the speed, privacy, and control of local deployment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Step 1: Perform Prerequisites

### Install Ollama

Go to the [Ollama website](https://ollama.com/download) and choose the appropriate installer for your system (macOS, Windows, or Linux).

> **Note:** If you're using Windows, make sure to restart your machine after installing Ollama to ensure that the updated environment variables are properly applied.

### Sign Up or Log In

Start by [logging in](https://clarifai.com/login) to your existing Clarifai account or [signing up](https://clarifai.com/signup) for a new one. Once logged in, you'll need the following credentials for setup:

- **User ID** – Navigate to your personal settings and find your user ID under the **Account** section.

- **Personal Access Token (PAT)** – In the same personal settings page, go to the **Security** section to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token is used to securely authenticate your connection to the Clarifai platform.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`, which is important when running inference with your models. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Install the Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli), which includes built-in support for Local Runners.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You must have **Python 3.10 or higher** installed to use Local Runners.

### Install OpenAI Package

Install the `openai` package, which is required when performing inference with models using the [OpenAI-compatible format](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format). 

<Tabs groupId="code">
<TabItem value="bash" label="Python">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>
</Tabs>

## Step 2: Initialize a Model From Ollama

You can use the Clarifai CLI to download and initialize any model available in the Ollama library directly into your local environment.

For example, here's how to initialize the [`llama3.2`](https://ollama.com/library/llama3.2) model in your current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --toolkit ollama</CodeBlock>
</TabItem>
</Tabs>

> **Note:** The above command will create a new model directory structure that is compatible with the Clarifai platform. You can customize or optimize the generated model by modifying the `1/model.py` file as needed.

You can customize model initialization from the Ollama library using the Clarifai CLI with the following options:

- `--model-name` – Name of the Ollama model to use (default: `llama3.2`). This lets you specify any model from the Ollama library
- `--port` – Port to run the model on (default: `23333`)
- `--context-length` – Context window size for the model in tokens (default: `8192`)

Learn more about setting up a model with Ollama [here](https://docs.clarifai.com/resources/api-overview/cli#initialize-with-toolkit). 

:::note tip

Here is a quickstart for Ollama models and their common use cases:

* `llama3.2-vision:latest` – For multimodal tasks (text + image), like image captioning or visual Q\&A.
* `llama3-groq-tool-use:latest` – Ideal for tool calling and function execution in [agent](https://docs.clarifai.com/compute/agents/) tasks.
* `devstral:latest` – Best for code generation, debugging, and development assistant use cases.

:::

## Step 3: Log In to Clarifai

Use the following command to log in to the Clarifai platform to create a configuration [context](README.mdx#step-2-create-a-context-optional) and establish a connection:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

After running the command, you'll be prompted to provide a few details for authentication:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

<CodeBlock className="language-bash"> 
context name (default: "default"): 
user id:
personal access token value (default: "ENVVAR" to get our env var rather than config):
</CodeBlock>
</TabItem>
</Tabs>

Here’s what each field means:

* **Context name** – You can assign a custom name to this configuration context, or simply press Enter to use the default name, `"default"`. This is useful if you manage multiple environments or configurations.
* **User ID** – Enter your Clarifai user ID.
* **Personal Access Token (PAT)** – Paste your Clarifai PAT here. If you've already set the `CLARIFAI_PAT` environment variable, you can just press Enter to use it automatically.

## Step 4: Start Your Local Runner

Start a local runner using the following command:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model local-runner</CodeBlock>
</TabItem>
</Tabs>

If the necessary context configurations aren’t detected, the CLI will guide you through creating them using default values.

This setup ensures all required components — such as compute clusters, nodepools, and deployments — are properly included in your configuration context, which are described [here](README.mdx#start-your-local-runner-1).

Simply review each prompt and confirm to proceed.

## Step 5: Run Inference

Once your local runner starts successfully, it will display a public URL where your model is hosted and accessible.

The CLI also generates an example client code snippet to help you quickly test the model. Simply run the snippet in a separate terminal (within the same directory) to receive the model’s response output.

Below is an example of running inference using the OpenAI-compatible format:

<Tabs groupId="code">
<TabItem value="python" label="Python">

```python
import os
from openai import OpenAI

# Initialize the OpenAI client with Clarifai's OpenAI-compatible endpoint
client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT'],
)

# Replace 'user-id' with your actual Clarifai user ID
response = client.chat.completions.create(
    model="https://clarifai.com/user-id/local-runner-app/models/local-runner-model",
    messages=[
        {"role": "system", "content": "Talk like a pirate."},
        {"role": "user", "content": "How do I check if a Python object is an instance of a class?"},
    ],
    temperature=0.7,
    stream=False,  # Set to True for streaming responses
)

# Print the full response
print(response)

# Example for handling a streaming response:
# if stream=True, uncomment below to print chunks as they arrive
# for chunk in response:
#     print(chunk.choices[0].message['content'], end='')
```
</TabItem>
</Tabs>

When you're done, just close the terminal running the local runner to shut it down.

## Additional Examples

*  [More examples of calling Ollama models](https://github.com/ollama/ollama-python/tree/main/examples)
*  [Clarifai-specific inference examples with Ollama models](https://docs.clarifai.com/compute/inference/clarifai/api)
* [Example for running Ollama models locally with Clarifai’s Local Runners](https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload)
