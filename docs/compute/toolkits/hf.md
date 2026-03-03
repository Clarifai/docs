---
description: Download and run Hugging Face models locally and make them available via a public API
sidebar_position: 3
---

# Hugging Face 

**Download and run Hugging Face models locally and make them available via a public API**
<hr />

[Hugging Face](https://huggingface.co/) is an open-source platform for sharing, exploring, and collaborating on a wide range of pre-trained models and related assets. 

With Clarifai’s [Local Runners](README.mdx), you can run these models directly on your machine, expose them securely via a public URL, and tap into Clarifai’s powerful platform — all while preserving the speed, privacy, and control of local deployment.

> **Note:** After initializing a model using the Hugging Face toolkit, you can [upload](https://docs.clarifai.com/compute/upload/#step-4-upload-the-model-to-clarifai) it to Clarifai to leverage the platform’s capabilities.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import HFModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_model_py.py";
import HFConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_config.yaml";
import HFSupportedModels from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_supported_models.txt";
import ClarifaiLogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_clarifai_login.txt";
import RequirementsTXT from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_requirements_txt.txt";
import HFModelInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_model_init.txt";
import StartRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_start_runner.txt";
import TestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_test_runner.py";

## Step 1: Perform Prerequisites

### Get User ID and PAT

Start by [logging in](https://clarifai.com/login) to your existing Clarifai account or [signing up](https://clarifai.com/signup) for a new one. Once logged in, you’ll need your **Personal Access Token (PAT)** for authentication:

- In the collapsible left sidebar, select **Settings** and choose **Secrets** to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat).

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


### Get Hugging Face Token

A Hugging Face access token is required to authenticate with Hugging Face services, especially when downloading models from private or restricted repositories.

You can create one by following [these instructions](https://huggingface.co/docs/hub/en/security-tokens). Once you have it, provide the token either in your model’s `config.yaml` file (as described [below](#configyaml)) or as an environment variable.

> **Note**: If `hf_token` is not specified in the `config.yaml` file, the CLI automatically falls back to the `HF_TOKEN` environment variable to authenticate with Hugging Face.

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export HF_TOKEN="YOUR_HF_ACCESS_TOKEN_HERE"</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set HF_TOKEN="YOUR_HF_ACCESS_TOKEN_HERE"</CodeBlock>
</TabItem>
</Tabs>

### Install Hugging Face Hub

The [`huggingface_hub`](https://github.com/huggingface/huggingface_hub) library is used under the hood to fetch files from the Hugging Face Hub. While you won’t interact with it directly, it’s required for downloading the models and resources automatically.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install huggingface_hub</CodeBlock>
</TabItem>
</Tabs>


## Step 2: Initialize a Model

With the Clarifai CLI, you can download and set up any supported Hugging Face model directly in your local environment. Use the `--model-name` flag to specify a HuggingFace model:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit huggingface --model-name Qwen/Qwen2-0.5B</CodeBlock>
</TabItem>
</Tabs>

This creates a `Qwen2-0.5B/` directory with all required files pre-configured. The CLI auto-selects an appropriate GPU instance based on the model's VRAM requirements.

> **Note:** You can initialize a model in a specific location by passing a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init).

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{HFModelInit}</CodeBlock>
</details>

You can customize or optimize the model by editing the generated files as needed.

:::tip

To initialize with a default model ([`unsloth/Llama-3.2-1B-Instruct`](https://huggingface.co/unsloth/Llama-3.2-1B-Instruct)), omit `--model-name`:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model init --toolkit huggingface</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Supported Models</summary>
    <CodeBlock className="language-text">{HFSupportedModels}</CodeBlock>
</details>

:::

> **Note:** Some models are quite large and require substantial memory or GPU resources. Ensure your machine has sufficient compute capacity to load and run the model locally before initializing it.

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
    <CodeBlock className="language-text">{HFModelPy}</CodeBlock>
</details>

The [`model.py`](https://docs.clarifai.com/compute/upload/#prepare-modelpy) file, which is located inside the `1` folder, defines the logic for the Hugging Face model, including how predictions are made.

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
    <CodeBlock className="language-text">{HFConfig}</CodeBlock>
</details>

The `config.yaml` file specifies the model’s configuration, including compute resource requirements, checkpoints, and other essential settings.

- In the `model` section, you need to specify a unique model ID (any name you choose) along with an app ID. Your Clarifai user ID is set by default from your [active context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-config). These together determine where your model will run on the Clarifai platform.

- In the `checkpoints` section, you can provide your Hugging Face token using the `hf_token` parameter if you need to access private or restricted repositories. This section also includes the `when` parameter, which controls when model checkpoints are downloaded and stored. The available options are `runtime` (the default), which downloads checkpoints when the model is loaded; `build`, which downloads checkpoints during the image build process; and `upload`, which downloads checkpoints before the model is uploaded.

    >**Note:** For large models, it is strongly recommended to set `when: runtime`. Doing so helps prevent image sizes from becoming unnecessarily large, which keeps build times shorter, uploads faster, and inference more efficient on the Clarifai platform. By contrast, choosing `build` or `upload` can significantly increase the image size, leading to slower uploads and higher cold start latency.

### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
    <CodeBlock className="language-text">{RequirementsTXT}</CodeBlock>
</details>

The `requirements.txt` file lists Python dependencies needed by your model. If you haven’t installed them yet, run the following command to install the dependencies:

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

You’ll be prompted to provide a few details for authentication:

* **User ID** – Enter your Clarifai user ID.
* **PAT** – Enter your Clarifai PAT. If you’ve already set the `CLARIFAI_PAT` environment variable, type `ENVVAR` to use it automatically.
* **Context name** – Assign a custom name to this configuration context, or press Enter to accept the default name, `"default"`. This is helpful if you manage multiple environments or configurations.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{ClarifaiLogin}</CodeBlock>
</details>


## Step 4: Serve the Model Locally

Start the model using `clarifai model serve`:

```bash
clarifai model serve
```

> **Note:** The older `clarifai model local-runner` command still works as an alias.

If the necessary context configurations aren’t detected, the CLI will guide you through creating them using default values.

This setup ensures all required components — such as compute clusters, nodepools, and deployments — are properly included in your configuration context, which are described [here](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional).

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{StartRunner}</CodeBlock>
</details>

## Step 5: Test Your Runner

Once the local runner starts, it provides a sample client code snippet you can use for quick testing.

You can run the snippet in a separate terminal within the same directory to see the model’s response.

Here’s an example snippet:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
     <CodeBlock className="language-python">{TestRunner}</CodeBlock>
</TabItem>

</Tabs>

## Deploy to Cloud

After testing locally, you can deploy your Hugging Face model to Clarifai's cloud compute with a single command. All infrastructure (compute cluster, nodepool, deployment) is created automatically.

### Step 1: Initialize

If you haven't already, scaffold a Hugging Face model project:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit huggingface --model-name Qwen/Qwen2-0.5B</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-selects an appropriate GPU instance based on the model's VRAM requirements.

### Step 2: Deploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen2-0.5B --instance g5.xlarge</CodeBlock>
</TabItem>
</Tabs>

If your `config.yaml` already has a `compute.instance` value (set during `init`), you can omit the `--instance` flag:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen2-0.5B</CodeBlock>
</TabItem>
</Tabs>

Browse available GPU instances with `clarifai model deploy --instance-info`.

### Step 3: Monitor and Manage

```bash
# Check deployment status
clarifai model status --deployment <deployment-id>

# Stream live logs
clarifai model logs --deployment <deployment-id>

# Run predictions
clarifai model predict user/app/models/Qwen2-0.5B "Explain AI in one sentence"

# Clean up when done
clarifai model undeploy --deployment <deployment-id>
```

For the full deploy options reference, see the [CLI Reference](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-deploy).
