---
description: Run OpenAI-compatible models locally and expose them via a public API
sidebar_position: 1
---

# OpenAI

**Run OpenAI-compatible models locally and expose them via a public API**
<hr />

OpenAI's API specification has become the industry standard for interacting with large language models. 

With Clarifai's [Local Runners](https://docs.clarifai.com/compute/local-runners/), you can deploy any OpenAI-compatible model locally, whether it's from OpenAI's official services, open-source alternatives, or your own fine-tuned models, and make them available via secure public endpoints.

This approach gives you the flexibility of OpenAI's familiar API interface while maintaining data privacy, reducing latency, and having full control over your deployment environment.

> **Note:** After setting up your OpenAI-compatible model locally, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform's capabilities, such as versioning, monitoring, and auto‑scaling.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OpenAIModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_model_py.py";
import OpenAIConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_config.yaml";
import OpenAIRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_requirements.txt";
import OpenAIModelInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_model_init.txt";
import StartRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_start_runner.txt";
import TestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_test_runner.py";
import OpenAILogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/openai_login.txt";
import OpenAIResponse from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/open_ai_response.txt";

## Step 1: Perform Prerequisites

### Sign Up or Log In

[Log in](https://clarifai.com/login) to your existing Clarifai account or [sign up](https://clarifai.com/signup) for a new one. Once logged in, you'll need the following credentials for setup:

- **App ID** – Navigate to the application you want to use to run the model and select the **[Overview](https://docs.clarifai.com/create/applications/manage/#app-overview)** option in the collapsible left sidebar. Get the app ID from there.
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

### Install Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) tool. It includes built-in support for Local Runners. 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You'll need **[Python 3.11 or 3.12](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements)** installed to successfully run the Local Runners.

### Install the OpenAI Package

Install the `openai` package — it’s required to perform inference with models that support the [OpenAI-compatible](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) format.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install openai</CodeBlock>
</TabItem>
</Tabs>


### Set Up Your OpenAI-Compatible Server

Before initializing the model, ensure you have an OpenAI-compatible server running locally. Popular options include:

- [vLLM](https://docs.clarifai.com/compute/toolkits/vllm#install-vllm) — Usually runs at `http://localhost:8000/v1` (default port: 8000, unless you specify `--port`).
- [LM Studio](https://docs.clarifai.com/compute/toolkits/lmstudio#install-lm-studio) — Usually at `http://localhost:1234/v1` (default port: 1234, shown in the LM Studio UI)
- [Ollama](https://docs.clarifai.com/compute/toolkits/ollama#install-ollama) (OpenAI mode) — Usually at `http://localhost:11434/v1` (default port: 11434, unless changed via the config or startup flags)


You’ll use this address in the [`model.py`](#modelpy) file.

## Step 2: Initialize a Model

With the Clarifai CLI, you can set up any OpenAI-compatible model to work with your local server.

The command below scaffolds a default OpenAI-compatible model template in your current directory:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model init --model-type-id openai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You can initialize a model in a specific location by passing a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init). 

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OpenAIModelInit}</CodeBlock>
</details>

This command generates a model directory structure that's compatible with the Clarifai platform and configured to work with OpenAI-compatible APIs.

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
    <CodeBlock className="language-text">{OpenAIModelPy}</CodeBlock>
</details>

The [`model.py`](https://docs.clarifai.com/compute/upload/#prepare-modelpy) file, located inside the `1` folder, acts as the bridge between Clarifai’s model execution environment and your local (or remote) OpenAI-compatible server.

It includes an extension of the Clarifai’s `OpenAIModelClass`. This base class is designed specifically for wrapping OpenAI-compatible model servers and exposing them through Clarifai’s inference infrastructure.

This class implements the following:

- The `OpenAI` client, which connects to your model server (e.g. vLLM, LM Studio, Ollama) via its `/v1` API endpoint.
- The `predict()` method, which handles standard (non-streaming) chat completions.
- The `generate()` method, which supports streaming token generation.
- `build_openai_messages()`, which automatically converts Clarifai inputs into OpenAI-compatible message format.

These are the key components you can configure:

- `base_url`: Your local model server endpoint address (default: `http://localhost:8000/v1`). 
> **Note:** During model initialization, the CLI will prompt you to choose a port, and this value will be automatically updated in the file to match your selection.
- `api_key`: Required only when calling the model through OpenAI’s hosted API. If you’re using a local OpenAI-compatible server, an API key isn’t needed — you can simply provide any dummy value.
- `model`: The ID of the model to use. You can leave this as is to let it be automatically detected from your OpenAI-compatible server, or explicitly set it to a specific model ID (for example, `"gpt-4"`).

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
    <CodeBlock className="language-text">{OpenAIConfig}</CodeBlock>
</details>

The `config.yaml` file tells Clarifai how to run your OpenAI-compatible custom model — including where it will live on the platform, how it’s served, and what compute resources it needs.

- It specifies where your model will run using values like `id` (your chosen model name), `user_id` (set by default from your [active context](https://docs.clarifai.com/resources/api-overview/cli/#clarifai-config)), `app_id`, and [`model_type_id`](https://docs.clarifai.com/create/models/#list-of-model-types).
- In the `build_info` section, specify your configure environment settings, such as the Python version required by your OpenAI model implementation. 
- In the `inference_compute_info` section, specify the compute resources your model should use — including CPU, memory, and optional accelerators (like GPUs) — ensuring your OpenAI-compatible service has the right performance and scalability characteristics.

> **When to use checkpoints:** Most OpenAI models are accessed via the API, so you won’t need a [checkpoints](https://docs.clarifai.com/compute/toolkits/hf#configyaml) block. If you are serving a self‑hosted Hugging Face model, you can uncomment the checkpoints section and set the required values.

### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
    <CodeBlock className="language-text">{OpenAIRequirements}</CodeBlock>
</details>

The `requirements.txt` file specifies all the Python dependencies your model needs to run. If these packages are not already installed in your environment, install them by running the following command:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install -r requirements.txt</CodeBlock>
</TabItem>
</Tabs>


## Step 3: Log In to Clarifai

Run the following command to log in to the Clarifai platform, create a configuration [context](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional), and establish a connection:

```bash
clarifai login
```

You'll be prompted to provide:

* **User ID** – Enter your Clarifai user ID.
* **PAT** – Enter your Clarifai PAT. If you've already set the `CLARIFAI_PAT` environment variable, type `ENVVAR` to use it automatically.
* **Context name** – Assign a custom name to this configuration context, or press Enter to accept the default name, `"default"`.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OpenAILogin}</CodeBlock>
</details>

## Step 4: Start Your Local Runner

Start a local runner with the following command:

```bash
clarifai model local-runner
```

The CLI will guide you through creating any necessary context configurations with default values, ensuring all components (compute clusters, nodepools, deployments) are properly set up.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{StartRunner}</CodeBlock>
</details>

> **Tip:** If your underlying model is running on a specific port (like 8000), ensure your `model.py` points to that port, and that the Local Runner does not try to bind to the same port.

## Step 5: Test Your Runner

Once the local runner starts, it provides a sample client code snippet for testing. You can run this in a separate terminal within the same directory.

Here's an example test snippet:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
     <CodeBlock className="language-python">{TestRunner}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OpenAIResponse}</CodeBlock>
</details>

That’s it!

When you’re done testing, simply stop the terminal running the local development runner and the process hosting your OpenAI-compatible server. 
