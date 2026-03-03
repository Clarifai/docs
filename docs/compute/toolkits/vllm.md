---
description: Download and serve vLLM models locally and expose them via a public API
sidebar_position: 5
---

# vLLM

**Download and serve vLLM models locally and expose them via a public API**
<hr />

[vLLM](https://docs.vllm.ai/en/latest/) is an open-source, high-performance inference engine that allows you to serve large language models (LLMs) locally with remarkable speed and efficiency. It supports OpenAI-compatible APIs, making it easy to integrate with the Clarifai platform.

With Clarifai’s [Local Runners](https://docs.clarifai.com/compute/local-runners/), you can seamlessly deploy vLLM-powered models on your own machine, expose them through a secure public URL, and take full advantage of Clarifai’s AI capabilities — while retaining control, privacy, and performance.

> **Note:** After initializing a model using the vLLM toolkit, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform’s capabilities.

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

### Get User ID and PAT

Start by [logging in](https://clarifai.com/login) to your existing Clarifai account or [signing up](https://clarifai.com/signup) for a new one. Once logged in, you'll need your **Personal Access Token (PAT)** for authentication:

- In the collapsible left sidebar, select **Settings** and choose **Secrets** to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat).

Set the PAT as an environment variable:

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

Use the Clarifai CLI to initialize a vLLM-based model directory. Specify the HuggingFace model you want to serve with `--model-name` — the CLI will auto-select the optimal GPU instance based on the model's VRAM requirements.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

This creates a `Qwen3-0.6B/` directory with all required files pre-configured. You can further customize or optimize the model by modifying the generated files as necessary.

> **Note:** You can initialize any model [supported](https://docs.vllm.ai/en/v0.9.2/models/supported_models.html) by vLLM. Just change the `--model-name` value to a different HuggingFace repo ID.

:::tip

To initialize without specifying a model (using a default), omit `--model-name`:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm</CodeBlock>
</TabItem>
</Tabs>

You can also pass a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init) to control where the directory is created.

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

The `config.yaml` file defines the model’s configuration in a simplified format — just 4 sections, no placeholders to fill in:

- **`model.id`** — A unique identifier for your model. Auto-generated from the HuggingFace model name when you use `--model-name`.

- **`build_info.image`** — The Docker base image. For vLLM models, this is `vllm/vllm-openai:latest`, which includes vLLM, PyTorch, and CUDA pre-installed. This means `requirements.txt` only needs lightweight dependencies (clarifai, openai).

- **`compute.instance`** — The GPU instance type, auto-selected based on the model’s estimated VRAM requirements. The CLI fetches the model’s architecture from HuggingFace and calculates the exact memory needed for weights, KV cache (based on context window length), and framework overhead. Run `clarifai list-instances` to see all available options.

- **[`checkpoints`](hf.md#configyaml)** — Defines how to retrieve the model’s weights from Hugging Face. If you’re using a private or restricted repository, add your HuggingFace access token via `hf_token` or set the `HF_TOKEN` environment variable.

> `user_id` and `app_id` are auto-filled from your [active context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-config) at deploy time. You don’t need to add them manually.


### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
  <CodeBlock className="language-text">{VLLMRequirements}</CodeBlock>
</details>

The `requirements.txt` file lists Python dependencies required by your model. Since vLLM, PyTorch, and other heavy dependencies are pre-installed in the Docker base image (`vllm/vllm-openai:latest`), this file only includes lightweight packages like `clarifai` and `openai`. If you haven’t installed them yet, run the following command:

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

## Step 4: Serve the Model Locally

Launch the model locally using `clarifai model serve`:

```bash
clarifai model serve
```

> **Note:** The older `clarifai model local-runner` command still works as an alias.

If any configuration is missing, the CLI will prompt you to define or confirm it.

This starts the vLLM backend to serve model predictions and makes them accessible via a Clarifai-managed public API endpoint.

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

## Deploy to Cloud

After testing locally, you can deploy your vLLM model to Clarifai’s cloud compute with a single command. All infrastructure (compute cluster, nodepool, deployment) is created automatically.

### Step 1: Initialize

If you haven’t already, scaffold a vLLM model project:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-selects the optimal GPU instance based on the model’s VRAM requirements (weights + KV cache + framework overhead).

### Step 2: Deploy

Since `config.yaml` already has a `compute.instance` value (auto-selected during `init`), you can deploy directly:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

To override the instance with a larger GPU (e.g., for better performance), use the `--instance` flag — it always takes priority over the config:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-0.6B --instance g5.xlarge</CodeBlock>
</TabItem>
</Tabs>

Browse available GPU instances with `clarifai list-instances` or `clarifai model deploy --instance-info`.

### Step 3: Monitor and Manage

```bash
# Check deployment status
clarifai model status --deployment <deployment-id>

# Stream live logs
clarifai model logs --deployment <deployment-id>

# Run predictions
clarifai model predict user/app/models/Qwen3-0.6B "Explain AI in one sentence"

# Clean up when done
clarifai model undeploy --deployment <deployment-id>
```

For the full deploy options reference, see the [CLI Reference](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-deploy).

