---
description: Run models using the SGLang runtime format and make them available via a public API
sidebar_position: 6
---

# SGLang

**Run models using the SGLang runtime format and make them available via a public API**
<hr />

[SGLang](https://github.com/sgl-project/sglang) is an open-source runtime and programming framework designed for structured generation and high-performance inference of large language models (LLMs) and vision-language models.  

It provides a flexible way to execute models with advanced capabilities like multi-step prompting, structured outputs, and multimodal reasoning — all while maximizing throughput and minimizing latency.

With Clarifai’s [Local Runners](https://docs.clarifai.com/compute/local-runners/), you can download and run these models on your own machine using the SGLang runtime format, expose them securely via a public URL, and tap into Clarifai’s powerful platform  — all while retaining the privacy, performance, and control of local execution.

> **Important:** SGLang requires **Linux with an NVIDIA GPU** (Ampere or newer, compute capability >= 8.0). It does not run on macOS or Windows. For local testing on non-Linux machines, consider using [vLLM](https://docs.clarifai.com/compute/toolkits/vllm) or [Ollama](https://docs.clarifai.com/compute/toolkits/ollama) instead.

> **Note:** The SGLang toolkit specifies a runtime format to run models sourced from external sources like Hugging Face. After initializing a model using the toolkit, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform’s capabilities.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import SGLModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_model_py.py";
import SGLConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_config.yaml";
import SGLSupportedModels from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_supported_models.txt";
import ClarifaiLogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_clarifai_login.txt";
import RequirementsTXT from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_requirements_txt.txt";
import SGLModelInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_model_init.txt";
import StartRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_start_runner.txt";
import TestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_test_runner.py";

## Step 1: Perform Prerequisites

### Get User ID and PAT

Start by [logging in](https://clarifai.com/login) to your existing Clarifai account or [signing up](https://clarifai.com/signup) for a new one. Once logged in, you’ll need your **Personal Access Token (PAT)** for authentication:

- In the collapsible left sidebar, select **Settings** and choose **Secrets** to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat).

Set the PAT as an environment variable:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
<CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
<CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>



### Install Clarifai CLI

Install the latest [Clarifai CLI](https://docs.clarifai.com/sdk/cli) which includes built-in support for Local Runners:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** The Local Runners require **[Python 3.11 or 3.12](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements)**.


### Install SGLang

Install SGLang to enable its runtime execution environment.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install sglang</CodeBlock>
</TabItem>
</Tabs>

> **Tip:** GPU acceleration (CUDA) is highly recommended for optimal performance.

### Install OpenAI

Install the `openai` package, which is needed to perform inference with models that use the [OpenAI-compatible format](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format). 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install openai</CodeBlock>
</TabItem>
</Tabs>

### Get Hugging Face Token

If you want to initialize a Hugging Face model for use with SGLang, you’ll need a Hugging Face access token to authenticate with Hugging Face services — especially when accessing private or restricted repositories.

You can create one by following [these instructions](https://huggingface.co/docs/hub/en/security-tokens). Once you have the token, include it either in your model’s `config.yaml` file (as described [below](#configyaml)) or set it as an environment variable.

> **Note:** If `hf_token` is not specified in the `config.yaml` file, the CLI will automatically use the `HF_TOKEN` environment variable for authentication with Hugging Face.

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export HF_TOKEN="YOUR_HF_ACCESS_TOKEN_HERE"</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set HF_TOKEN="YOUR_HF_ACCESS_TOKEN_HERE"</CodeBlock>
</TabItem>
</Tabs>

## Step 2: Initialize a Model

Use the Clarifai CLI to initialize a model configured to run using the SGLang runtime format. Specify the HuggingFace model you want to serve with `--model-name` — the CLI will auto-select an appropriate Ampere+ GPU instance based on the model’s VRAM requirements.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang --model-name Qwen/Qwen2-7B</CodeBlock>
</TabItem>
</Tabs>

This creates a directory with all required files pre-configured. You can customize or optimize the model by editing the generated files as needed.

> **Note:** You can initialize any supported HuggingFace model. Just change the `--model-name` value. You can also pass a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init) to control where the directory is created.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{SGLModelInit}</CodeBlock>
</details>

:::tip

To initialize with a default model, omit `--model-name`:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang</CodeBlock>
</TabItem>
</Tabs>

:::

> **Note:** Large models require significant GPU memory. Ensure your machine has enough compute capacity to run them efficiently.

The generated structure includes:

```
├── 1/
│   └── model.py
├── config.yaml
└── requirements.txt
```


### `model.py`

<details>
  <summary>Example: 1/model.py</summary>
  <CodeBlock className="language-text">{SGLModelPy}</CodeBlock>
</details>

This is the [main runner](https://docs.clarifai.com/compute/upload/#prepare-modelpy) script that defines how your model loads, runs, and handles inference.

* It subclasses `OpenAIModelClass`, meaning it exposes OpenAI-compatible endpoints for inference.
* The `load_model()` method spins up a local SGLang backend server (via `OpenAI_APIServer.from_sglang_backend`) and initializes the model checkpoint.
* The `predict()` and `generate()` methods define how text generation requests are processed — supporting both standard predictions and streaming outputs.
* The `test()` method lets you verify locally that everything is working before deployment.

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
  <CodeBlock className="language-text">{SGLConfig}</CodeBlock>
</details>

The `config.yaml` file defines your SGLang model's configuration in a simplified format:

- **`model.id`** — A unique identifier for your model. Auto-generated from the HuggingFace model name when you use `--model-name`.

- **`build_info.image`** — The Docker base image. For SGLang models, this is `lmsysorg/sglang:latest`, which includes SGLang, PyTorch, and CUDA pre-installed.

- **`compute.instance`** — The GPU instance type, auto-selected based on the model's VRAM requirements. SGLang requires **Ampere+ GPUs** (compute capability >= 8.0), so pre-Ampere instances (T4, V100) are automatically excluded. Run `clarifai list-instances` to see all available options.

- **[`checkpoints`](https://docs.clarifai.com/compute/upload/#hugging-face-model-checkpoints)** — Defines how to retrieve model weights. If you're using a gated repository, add your HuggingFace access token via `hf_token` or set the `HF_TOKEN` environment variable.

> `user_id` and `app_id` are auto-filled from your [active context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-config) at deploy time. You don't need to add them manually.
>
> **Tip:** Use `when: runtime` (the default) for large models to reduce image size and improve load times.


### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
  <CodeBlock className="language-text">{RequirementsTXT}</CodeBlock>
</details>

This file lists all the Python dependencies required for the runner to work. If you haven’t installed them yet, run the following command to install the dependencies:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install -r requirements.txt</CodeBlock>
</TabItem>
</Tabs>



## Step 3: Log In to Clarifai

Log in and create a configuration [context](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional):

```bash
clarifai login
```

Enter the requested details:

* **User ID** – Your Clarifai user ID
* **PAT** – Your personal access token (or type `ENVVAR` to use the environment variable)
* **Context name** – Optional name for the config context (default: `"default"`)

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{ClarifaiLogin}</CodeBlock>
</details>


## Step 4: Serve the Model Locally

Start the model locally using `clarifai model serve`:

```bash
clarifai model serve
```

> **Note:** The older `clarifai model local-runner` command still works as an alias.

If any configuration contexts or defaults are missing, the CLI will automatically guide you through setting them up.

This starts the SGLang backend and makes your model accessible via a Clarifai-managed public API endpoint. For more details, see [Local Runners documentation](https://docs.clarifai.com/compute/local-runners/).

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{StartRunner}</CodeBlock>
</details>


## Step 5: Test Your Runner

After the Local Runner starts, you can use it to perform [inference](https://docs.clarifai.com/compute/inference/open-ai) with your SGLang-based model.

You can run a test snippet in a separate terminal, within the same directory, to verify that your model is running and responding correctly.

Here’s an example snippet:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
<CodeBlock className="language-python">{TestRunner}</CodeBlock>
</TabItem>
</Tabs>

## Deploy to Cloud

After testing locally, you can deploy your SGLang model to Clarifai's cloud compute with a single command. All infrastructure (compute cluster, nodepool, deployment) is created automatically.

:::note GPU Requirement

SGLang requires **Ampere or newer GPUs** (compute capability >= 8.0). Pre-Ampere instances like T4 and V100 are not supported. The CLI automatically filters these out when selecting instances.

:::

### Step 1: Initialize

If you haven't already, scaffold an SGLang model project:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang --model-name Qwen/Qwen2-7B</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-selects an Ampere+ GPU instance based on the model's VRAM requirements (weights + KV cache + framework overhead).

### Step 2: Deploy

Since `config.yaml` already has a `compute.instance` value (auto-selected during `init`), you can deploy directly:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen2-7B</CodeBlock>
</TabItem>
</Tabs>

To override the instance with a larger GPU, use the `--instance` flag — it always takes priority over the config:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen2-7B --instance g6e.2xlarge</CodeBlock>
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
clarifai model predict user/app/models/Qwen2-7B "Explain AI in one sentence"

# Clean up when done
clarifai model undeploy --deployment <deployment-id>
```

For the full deploy options reference, see the [CLI Reference](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-deploy).

