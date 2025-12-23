---
description: Download and run Ollama models locally and expose them via a public API
sidebar_position: 2
---

# Ollama 

**Download and run Ollama models locally and expose them via a public API**
<hr />

Ollama is an open-source tool that allows you to download, run, and manage large language models (LLMs) directly on your local machine. 

When combined with Clarifai’s Local Runners, it enables you to run Ollama models on your machine, expose them securely via a public URL, and tap into Clarifai’s powerful platform — all while keeping the speed, privacy, and control of local deployment.

> **Note:** After initializing a model using the Ollama toolkit, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform’s capabilities.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OllamaInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-init.txt";
import OllamaRun from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-run.txt";
import OllamaModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-modelpy.py";
import OllamaRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-requirements.txt";
import OllamaConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-config.txt";

## Step 1: Perform Prerequisites

### Install Ollama

Go to the [Ollama website](https://ollama.com/download) and choose the appropriate installer for your system (macOS, Windows, or Linux).

> **Note:** If you're using Windows, make sure to restart your machine after installing Ollama to ensure that the updated environment variables are properly applied.

### Get User ID and PAT

Start by [logging in](https://clarifai.com/login) to your existing Clarifai account or [signing up](https://clarifai.com/signup) for a new one. Once logged in, you'll need the following credentials for setup:

- **User ID** – In the collapsible left sidebar, select **Settings** and choose **Account** from the dropdown list. Then, locate your user ID.

- **Personal Access Token (PAT)** – From the same **Settings** option, choose **Secrets** to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token is used to authenticate your connection with the Clarifai platform.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`. 

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

> **Note:** You must have **[Python 3.11 or 3.12](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements)**  installed to use Local Runners.

### Install OpenAI

Install the `openai` package, which is required when performing inference with models using the [OpenAI-compatible format](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format). 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install openai</CodeBlock>
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

> **Note:** You can initialize a model in a specific location by passing a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init). 

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OllamaInit}</CodeBlock>
</details>

:::tip customize initialization

You can customize model initialization from the Ollama library using the Clarifai CLI with the following options:

- `--model-name` – Name of the Ollama model to use (default: `llama3.2`). This lets you specify any model from the Ollama library. Example: `clarifai model init --toolkit ollama --model-name gpt-oss:20b`
- `--port` – Port to run the model on (default: `23333`)
- `--context-length` – Context window size for the model in tokens (default: `8192`)

:::

:::note tip

You can use Ollama commands such as `ollama list` to list downloaded models and `ollama rm` to remove a model. Run `ollama --help` to see the full list of available commands.

> **Note:** Some models are very large and may demand significant memory or GPU resources. Before initializing, make sure your machine has enough compute capacity to load and run the model smoothly.

:::


The `init` command will create a new model directory structure that is compatible with the Clarifai platform. You can customize or optimize the generated model by modifying the files as needed.

The generated structure includes:

```
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

### `model.py`

<details>
  <summary>Example: model.py</summary>
    <CodeBlock className="language-text">{OllamaModelPy}</CodeBlock>
</details>

This is the [main Python file](https://docs.clarifai.com/compute/upload/#prepare-modelpy) that defines how your Ollama-based model is loaded, served, and used for inference. It extends Clarifai’s `OpenAIModelClass`, which provides a unified interface for OpenAI-compatible models.

It has these key components:

- The environment setup section defines default values, such as the Ollama host (`OLLAMA_HOST`) and context length (`OLLAMA_CONTEXT_LENGTH`). 
- The `run_ollama_server()` function starts the Ollama server and automatically pulls the specified model (for example, `llama3.2`) if it’s not already available locally.
- The `OllamaModelClass` itself implements the following methods:
    -  `load_model()` — Loads and initializes the Ollama model while setting up the local OpenAI-compatible client; 
    - `predict()` — Generates text completions or tool calls from prompts, optionally handling images or chat history; 
    - `generate()` — Streams tokens in real time, which is ideal for chat-like or extended responses. 
- Additionally, helper utilities, such as `has_image_content()`, validate image inputs before constructing OpenAI-compatible messages, and logging utilities track token usage and manage inference context.

### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
    <CodeBlock className="language-text">{OllamaRequirements}</CodeBlock>
</details>

The `requirements.txt` file lists all the Python packages required for your local runner environment. If you haven’t installed them yet, run the following command to install the dependencies:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install -r requirements.txt</CodeBlock>
</TabItem>
</Tabs>

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
    <CodeBlock className="language-text">{OllamaConfig}</CodeBlock>
</details>

The `config.yaml` file is what tells Clarifai how to run your model — including where it belongs, which runtime to use, and how much compute it should consume.

- It identifies where your model will run on the Clarifai platform through parameters like `app_id`, `id` (any model name you choose), `model_type_id`, and `user_id` (set by default from your [active context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-config)). 
- It defines compatibility details under `build_info` — such as the Python version to use — and resource allocation details through `inference_compute_info`, which sets CPU, memory, and accelerator requirements. 
- The `toolkit` field indicates the type of runtime provider, informing Clarifai which backend framework to use for execution.

## Step 3: Log In to Clarifai

Use the following command to log in to the Clarifai platform to create a configuration context and establish a connection:

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

This setup ensures all required components — such as compute clusters, nodepools, and deployments — are properly included in your configuration context, which are described [here](README.mdx#step-2-create-a-context-optional). Simply review each prompt and confirm to proceed.

> **Note**: Use the `--suppress-toolkit-logs` option to show detailed logs from the Ollama server, which is helpful for debugging: `clarifai model local-runner --suppress-toolkit-logs`.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OllamaRun}</CodeBlock>
</details>

## Step 5: Test Your Runner

When the local runner starts, it displays a public URL where your model is hosted and provides a sample client code snippet for quick testing. 

> **Note:** Pulling a model from Ollama may take some time depending on your machine’s resources, but once the download finishes, you can run the snippet in a separate terminal within the same directory to get the model’s response.

Below is an example snippet for running inference using the OpenAI-compatible format:

<Tabs groupId="code">
<TabItem value="python" label="Python">

```python
import os

from openai import OpenAI

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT'],
)

response = client.chat.completions.create(
    model="https://clarifai.com/<user-id>/local-runner-app/models/local-runner-model",
    messages=[
        {"role": "system", "content": "Talk like a pirate."},
        {
            "role": "user",
            "content": "How do I check if a Python object is an instance of a class?",
        },
    ],
    temperature=1.0,
    stream=False,  # stream=True also works, just iterator over the response
)
print(response)
```
</TabItem>
</Tabs>

The terminal also shows a link to the [AI Playground](https://docs.clarifai.com/getting-started/quickstart-playground), which you can copy to interact with the model directly.

Alternatively, while your runner is active in the terminal, you can open the **[Runners](https://clarifai.com/compute/runners)** dashboard on the Clarifai platform, locate your runner in the table, and select **Open in Playground** from the three-dot menu to start chatting with the model.

![](/img/others/runners-dashboard-ollama.png)

When you're done, just close the terminal running the local runner to shut it down.

## Additional Examples

*  [More examples of calling Ollama models](https://github.com/ollama/ollama-python/tree/main/examples)
*  [Clarifai-specific inference examples with Ollama models](https://docs.clarifai.com/compute/inference/clarifai/api)
* [Example for running Ollama models locally with Clarifai’s Local Runners](https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload)
* [YouTube video on running OpenAI’s open-source GPT-OSS-20B model locally with Ollama](https://www.youtube.com/watch?v=TfS2p8LZYBE)
