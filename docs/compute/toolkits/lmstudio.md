---
description: Download and run LM Studio models locally and expose them via a public API
sidebar_position: 5
---

# LM Studio

**Download and run LM Studio models locally and expose them via a public API**
<hr />

[LM Studio](https://lmstudio.ai/) is a desktop application that lets you run open-source LLMs locally on your machine. Combined with Clarifai's Local Runners, you can serve LM Studio models from your machine, expose them via a public API, and access them through the Clarifai platform — all while keeping the speed, privacy, and control of local inference.

> **Important:** Clarifai's LM Studio integration currently supports **macOS only** (Apple devices). For other platforms, consider using [Ollama](https://docs.clarifai.com/compute/toolkits/ollama) or [vLLM](https://docs.clarifai.com/compute/toolkits/vllm) instead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import LMStudioInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_init.txt";
import LMStudioLogin from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_login.txt";
import LMStudioLocalRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_local_runner.txt";
import LMStudioTestRunner from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_test_runner.py";
import LMStudioModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_model.py";
import LMStudioConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_config.yaml";
import LMStudioRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/lm_studio_requirements.txt";

## Step 1: Install Prerequisites

### Install LM Studio

Go to the [LM Studio website](https://lmstudio.ai/download) and install the desktop application for macOS.

After installing, enable the `lms` CLI tool so Clarifai can detect your models:

```sh
~/.lmstudio/bin/lms bootstrap
```

Restart your terminal, then verify with `lms --version`.

Keep LM Studio open and running before starting the local runner — it provides the model runtime that Clarifai connects to.

### Install Clarifai

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
  <CodeBlock className="language-text">{LMStudioLogin}</CodeBlock>
</details>

## Step 3: Initialize a Model

Scaffold a model project using any model from the [LM Studio Model Catalog](https://lmstudio.ai/models):

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model init --toolkit lmstudio --model-name google/gemma-3-4b</CodeBlock>
</TabItem>
</Tabs>

The CLI auto-detects LM Studio models already downloaded on your machine. Change `--model-name` to any other model from the catalog.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{LMStudioInit}</CodeBlock>
</details>

This creates a `./gemma-3-4b/` directory:

```
gemma-3-4b/
├── 1/
│   └── model.py       # LM Studio inference logic
├── requirements.txt   # Python dependencies
└── config.yaml        # Model config (user_id/app_id auto-filled from login)
```

> **Note:** Some models are very large and may require significant memory. Check your machine's capacity before initializing.

<details>
  <summary>model.py</summary>
  <CodeBlock className="language-text">{LMStudioModel}</CodeBlock>
</details>

<details>
  <summary>config.yaml</summary>
  <CodeBlock className="language-text">{LMStudioConfig}</CodeBlock>
</details>

<details>
  <summary>requirements.txt</summary>
  <CodeBlock className="language-text">{LMStudioRequirements}</CodeBlock>
</details>

## Step 4: Serve Locally

Start the model as a local runner:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
<CodeBlock className="language-bash">clarifai model serve ./gemma-3-4b</CodeBlock>
</TabItem>
</Tabs>

> **Note:** Make sure LM Studio is open and running before starting the runner. Add `-v` for verbose logs.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{LMStudioLocalRunner}</CodeBlock>
</details>

When ready, the CLI prints:
- A model URL for API calls
- A Playground link for browser-based testing
- A sample code snippet

Press `Ctrl+C` to stop the runner.

## Step 5: Run Inference

While the local runner is active, test it using the OpenAI-compatible client:

<Tabs groupId="code">
<TabItem value="python" label="Python">
  <CodeBlock className="language-python">{LMStudioTestRunner}</CodeBlock>
</TabItem>
</Tabs>

Or use the Clarifai CLI:

```sh
clarifai model predict https://clarifai.com/<user-id>/local-runner-app/models/local-runner-model "Explain AI in one sentence"
```

You can also open the **[Runners](https://clarifai.com/compute/runners)** dashboard, find your runner, and select **Open in Playground** from the three-dot menu.

When you're done, close the terminal running the local runner to shut it down.
