---
description: Run models using the SGLang runtime format and make them available via a public API
sidebar_position: 2
---

# SGLang

**Serve any HuggingFace LLM locally or deploy to cloud compute**
<hr />

[SGLang](https://github.com/sgl-project/sglang) is a high-performance open-source inference engine for LLMs with support for structured generation and multimodal reasoning. With Clarifai, you can deploy SGLang models to cloud GPUs with a single command.

The workflow is: **init → deploy**

> **Important:** SGLang requires **Linux with an NVIDIA GPU** (Ampere or newer, compute capability >= 8.0). It does not run on macOS or Windows. For local testing on non-Linux machines, use [vLLM](https://docs.clarifai.com/compute/toolkits/vllm) or [Ollama](https://docs.clarifai.com/compute/toolkits/ollama) instead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import SGLModelInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_model_init.txt";
import ClarifaiLogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_clarifai_login.txt";
import SGLModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_model_py.py";
import SGLConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_config.yaml";
import RequirementsTXT from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_requirements_txt.txt";
import TestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_test_runner.py";

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
  <CodeBlock className="language-text">{ClarifaiLogin}</CodeBlock>
</details>

## Step 3: Initialize a Model

Scaffold a model project using a HuggingFace model name:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang --model-name Qwen/Qwen3-4B</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-selects an Ampere+ GPU instance based on the model's VRAM requirements. You can initialize any model [supported by SGLang](https://docs.sglang.ai/references/supported_models.html) — just change `--model-name` to a different HuggingFace repo ID.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{SGLModelInit}</CodeBlock>
</details>

This creates a `./Qwen3-4B/` directory:

```
Qwen3-4B/
├── 1/
│   └── model.py       # SGLang inference logic
├── requirements.txt   # Lightweight deps (SGLang is pre-installed in the base image)
└── config.yaml        # Model config (user_id/app_id auto-filled from login)
```

> **Note:** For private or gated models (Llama, Gemma, etc.), set `HF_TOKEN` in your environment before initializing:
> ```sh
> export HF_TOKEN=your_token_here
> ```

<details>
  <summary>model.py</summary>
  <CodeBlock className="language-text">{SGLModelPy}</CodeBlock>
</details>

<details>
  <summary>config.yaml</summary>
  <CodeBlock className="language-text">{SGLConfig}</CodeBlock>
</details>

The `config.yaml` has 4 sections:
- **`model.id`** — Auto-generated from the HuggingFace model name
- **`build_info.image`** — `lmsysorg/sglang:latest` (SGLang, PyTorch, and CUDA pre-installed)
- **`compute.instance`** — Auto-selected based on estimated VRAM (Ampere+ only). Run `clarifai list-instances` to see all options
- **`checkpoints`** — HuggingFace model weights config. Add `hf_token` here or set `HF_TOKEN` for gated models

<details>
  <summary>requirements.txt</summary>
  <CodeBlock className="language-text">{RequirementsTXT}</CodeBlock>
</details>

## Step 4: Deploy to Cloud

Deploy to dedicated cloud compute. Clarifai automatically provisions all required infrastructure.

Since `config.yaml` already has a `compute.instance` value (auto-selected during `init`), you can deploy directly:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-4B</CodeBlock>
</TabItem>
</Tabs>

To override the instance type:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model deploy ./Qwen3-4B --instance g5.xlarge</CodeBlock>
</TabItem>
</Tabs>

To see all available instance types and pricing:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai list-instances</CodeBlock>
</TabItem>
</Tabs>

> **Tip:** If you have a local Linux GPU and want to test before deploying, run `clarifai model serve ./Qwen3-4B --mode env` first.

> **Note:** Clarifai automatically optimizes replica routing using KV cache affinity, improving throughput for shared system prompts, RAG pipelines, and multi-turn conversations. See [Request Routing](https://docs.clarifai.com/compute/inference/routing) for details.

## Step 5: Run Inference

<Tabs groupId="code">
<TabItem value="python" label="Python">
  <CodeBlock className="language-python">{TestRunner}</CodeBlock>
</TabItem>
</Tabs>

Or use the Clarifai CLI:

```sh
clarifai model predict https://clarifai.com/<user-id>/main/models/Qwen3-4B "Explain AI in one sentence"
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
