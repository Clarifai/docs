---
description: Download and serve vLLM models locally and expose them via a public API
sidebar_position: 5
---

# vLLM

**Download and serve vLLM models locally and expose them via a public API**
<hr />

[vLLM](https://docs.vllm.ai/en/latest/) is an open-source, high-performance inference engine that allows you to serve large language models (LLMs) locally with remarkable speed and efficiency. It supports OpenAI-compatible APIs, making it easy to integrate with the Clarifai platform.

With Clarifai’s [Local Runners](https://docs.clarifai.com/compute/local-runners/), you can seamlessly deploy vLLM-powered models on your own machine, expose them through a secure public URL, and take full advantage of Clarifai’s AI capabilities — while retaining control, privacy, and performance.

> **Note:** After downloading the model using the vLLM toolkit, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform’s capabilities.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import VLLMInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_init.txt";
import VLLMLogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_login.txt";
import VLLMLocalRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_local_runner.txt";
import VLLMTestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_test_runner.py";
import VLLMModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_model.py";
import VLLMConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_config.yaml";
import VLLMRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/vllm_requirements.txt";


## Step 1: Perform Prerequisites

### Sign Up or Log In

First, either [log in](https://clarifai.com/login) to your existing Clarifai account or [sign up](https://clarifai.com/signup) for a new one. Once logged in, you'll need these credentials to set up your project:

* **App ID** – Navigate to the application you'll use for your model. In the collapsible left sidebar, select the [Overview](https://docs.clarifai.com/create/applications/manage/#app-overview) option. Get the app ID from there.
* **User ID** – In the collapsible left sidebar, go to **Settings** and select the **Account** option. Then, find your user ID.
* **Personal Access Token (PAT)** – This token is essential to authenticate your connection with the Clarifai platform. To create or copy your [PAT](https://docs.clarifai.com/control/authentication/pat), go to **Settings** and choose the **Secrets** option. 

Then, store it as an environment variable for secure authentication:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-like Systems">
<CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
<CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>


### Install the Clarifai CLI

Install the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) to access Local Runners and manage your deployments.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** Ensure you have [Python 3.11 or 3.12](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements) installed to run Local Runners successfully.

### Install vLLM

Install the vLLM package.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install vllm</CodeBlock>
</TabItem>
</Tabs>

vLLM supports models from the Hugging Face Hub (e.g., LLaMA, Mistral, Falcon, etc.) and serves them via a local [OpenAI-compatible API](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format).

> **Note**: You need a Hugging Face access token to download models from private or restricted repositories. You can learn how to get it from [here](https://huggingface.co/docs/hub/en/security-tokens). 

### Install the OpenAI Package

Install the `openai` client library — it will be used to send requests to your vLLM server.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install openai</CodeBlock>
</TabItem>
</Tabs>

## Step 2: Initialize a Model

Use the Clarifai CLI to initialize a vLLM-based model directory. This setup prepares all required files for local execution and Clarifai integration.

You can further customize or optimize the model by modifying the generated files as necessary.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm</CodeBlock>
</TabItem>
</Tabs>

:::tip

You can initialize any model [supported](https://docs.vllm.ai/en/v0.9.2/models/supported_models.html) by vLLM. If you want to initialize a specific vLLM model, use the `--model-name` flag.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name HuggingFaceH4/zephyr-7b-beta</CodeBlock>
</TabItem>
</Tabs>

:::

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{VLLMInit}</CodeBlock>
</details>

> **Note:** Some models are quite large and require substantial memory or GPU resources. Ensure your machine has sufficient compute capacity to load and run the model locally before initializing it.

You’ll get a folder structure similar to:

```
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

### `model.py`

<details>
  <summary>Example: model.py</summary>
  <CodeBlock className="language-text">{VLLMModel}</CodeBlock>
</details>

The [`model.py`](https://docs.clarifai.com/compute/upload/#prepare-modelpy) file inside the `1/` directory defines how your model performs inference through the vLLM runtime, using the OpenAI-compatible API endpoint served locally.

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
  <CodeBlock className="language-text">{VLLMConfig}</CodeBlock>
</details>

The `config.yaml` file defines the model’s configuration — including compute requirements, checkpoint sources, and other essential runtime settings.

- In the `model` section, provide a unique model ID (any name you prefer), along with your Clarifai user ID and app ID. These values specify where your model will be deployed within the Clarifai platform.

- The [`checkpoints`](hf.md#configyaml) section defines how to retrieve the model’s weights from Hugging Face. If you’re using a private or restricted repository, be sure to include your Hugging Face access token to enable secure downloading.


### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
  <CodeBlock className="language-text">{VLLMRequirements}</CodeBlock>
</details>

The `requirements.txt` file lists Python dependencies required by your model. If you haven’t installed them yet, run the following command to install the dependencies:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install -r requirements.txt</CodeBlock>
</TabItem>
</Tabs>

## Step 3: Log In to Clarifai

Run the following command to authenticate your local environment with Clarifai.

```bash
clarifai login
```

You’ll be prompted for your user ID, PAT, and an optional [context name](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional).

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{VLLMLogin}</CodeBlock>
</details>

## Step 4: Start the Local Runner

Launch the Local Runner to start serving your vLLM model locally.

```bash
clarifai model local-runner
```

If any configuration is missing, the CLI will prompt you to define or confirm it.

This runner will use vLLM’s backend to serve model predictions and make them accessible via a Clarifai-managed public API endpoint.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{VLLMLocalRunner}</CodeBlock>
</details>

## Step 5: Test Your Runner

Once your Local Runner is running and the model has finished downloading, you can test it using the OpenAI-compatible API format.

<Tabs groupId="code">
<TabItem value="python" label="Python (OpenAI)">
  <CodeBlock className="language-python">{VLLMTestRunner}</CodeBlock>
</TabItem>
</Tabs>

The script sends a sample prompt to your locally running vLLM model and prints the response. Your model will now be serving [predictions](https://docs.clarifai.com/compute/inference/clarifai/api) through Clarifai’s local inference layer.

