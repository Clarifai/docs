---
description: Download and serve vLLM models locally and expose them via a public API
sidebar_position: 5
---

# vLLM

**Serve any HuggingFace LLM locally or deploy to cloud compute**
<hr />

[vLLM](https://docs.vllm.ai/en/latest/) is a high-performance open-source inference engine for LLMs. With Clarifai, you can deploy vLLM models to cloud GPUs with a single command.

The workflow is: **init → deploy**

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

## Step 1: Install Clarifai

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** Python 3.11 or 3.12 is required. The `openai` package is included with `clarifai`.

## Step 2: Log In

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

You'll be prompted for your user ID and [PAT](https://docs.clarifai.com/control/authentication/pat). This saves your credentials locally so you don't need to set environment variables manually.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{VLLMLogin}</CodeBlock>
</details>

## Step 3: Initialize a Model

Scaffold a model project using a HuggingFace model name:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-selects the optimal GPU instance based on the model's VRAM requirements. You can initialize any model [supported by vLLM](https://docs.vllm.ai/en/v0.9.2/models/supported_models.html) — just change `--model-name` to a different HuggingFace repo ID.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{VLLMInit}</CodeBlock>
</details>

This creates a `./Qwen3-0.6B/` directory:

```
Qwen3-0.6B/
├── 1/
│   └── model.py       # vLLM inference logic
├── requirements.txt   # Lightweight deps (vLLM is pre-installed in the base image)
└── config.yaml        # Model config (user_id/app_id auto-filled from login)
```

> **Note:** For private or gated models (Llama, Gemma, etc.), set `HF_TOKEN` in your environment before initializing:
> ```sh
> export HF_TOKEN=your_token_here
> ```

<details>
  <summary>model.py</summary>
  <CodeBlock className="language-text">{VLLMModel}</CodeBlock>
</details>

<details>
  <summary>config.yaml</summary>
  <CodeBlock className="language-text">{VLLMConfig}</CodeBlock>
</details>

The `config.yaml` has 4 sections:
- **`model.id`** — Auto-generated from the HuggingFace model name
- **`build_info.image`** — `vllm/vllm-openai:latest` (vLLM, PyTorch, and CUDA pre-installed)
- **`compute.instance`** — Auto-selected based on estimated VRAM. Run `clarifai list-instances` to see all options
- **`checkpoints`** — HuggingFace model weights config. Add `hf_token` here or set `HF_TOKEN` for gated models

<details>
  <summary>requirements.txt</summary>
  <CodeBlock className="language-text">{VLLMRequirements}</CodeBlock>
</details>

## Step 4: Deploy to Cloud

Deploy to dedicated cloud compute. Clarifai automatically provisions all required infrastructure.

Since `config.yaml` already has a `compute.instance` value (auto-selected during `init`), you can deploy directly:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

To override the instance type:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-0.6B --instance a10g</CodeBlock>
</TabItem>
</Tabs>

To see all available instance types and pricing:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai list-instances</CodeBlock>
</TabItem>
</Tabs>

> **Tip:** If you have a local GPU and want to test before deploying, run `clarifai model serve ./Qwen3-0.6B --mode env` first.

## Step 5: Run Inference

<Tabs groupId="code">
<TabItem value="python" label="Python">
  <CodeBlock className="language-python">{VLLMTestRunner}</CodeBlock>
</TabItem>
</Tabs>

Or use the Clarifai CLI:

```sh
clarifai model predict https://clarifai.com/<user-id>/main/models/Qwen3-0.6B "Explain AI in one sentence"
```

### Manage Your Deployment

```bash
# Stream live logs
clarifai model logs --deployment <deployment-id>

# Check status
clarifai model status --deployment <deployment-id>

# Remove deployment when done (stops billing)
clarifai model undeploy --deployment <deployment-id>
```

For the full CLI reference, see [CLI Reference](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-deploy).
