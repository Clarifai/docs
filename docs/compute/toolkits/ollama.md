---
description: Download and run Ollama models locally and expose them via a public API
sidebar_position: 2
---

# Ollama

**Download and run Ollama models locally and expose them via a public API**
<hr />

Ollama is an open-source tool that lets you run LLMs directly on your local machine. Combined with Clarifai's Local Runners, you can serve Ollama models from your machine, expose them via a public API, and access them through the Clarifai platform — all while keeping the speed, privacy, and control of local inference.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OllamaInit from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-init.txt";
import OllamaRun from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-run.txt";
import OllamaModelPy from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-modelpy.py";
import OllamaRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-requirements.txt";
import OllamaConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/ollama-config.txt";

## Step 1: Install Prerequisites

### Install Ollama

Go to the [Ollama website](https://ollama.com/download) and install the appropriate version for your system (macOS, Windows, or Linux).

> **Note:** On Windows, restart your machine after installing to ensure environment variables are applied.

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

## Step 3: Initialize a Model

Scaffold a model project using any model from the [Ollama library](https://ollama.com/library):

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --toolkit ollama --model-name gpt-oss:20b</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OllamaInit}</CodeBlock>
</details>

This creates a `./gpt-oss:20b/` directory with three files:

```
gpt-oss:20b/
├── 1/
│   └── model.py       # Ollama inference logic
├── requirements.txt   # Python dependencies
└── config.yaml        # Model config (user_id/app_id auto-filled from login)
```

:::tip
Omitting `--model-name` will install the default model (`llama3.2`):
```sh
clarifai model init --toolkit ollama
```
Use `ollama list` to see downloaded models and `ollama rm` to remove one.
:::

> **Note:** Some models are very large and may require significant memory or GPU resources. Check your machine's capacity before initializing.

<details>
  <summary>model.py</summary>
    <CodeBlock className="language-text">{OllamaModelPy}</CodeBlock>
</details>

<details>
  <summary>requirements.txt</summary>
    <CodeBlock className="language-text">{OllamaRequirements}</CodeBlock>
</details>

<details>
  <summary>config.yaml</summary>
    <CodeBlock className="language-text">{OllamaConfig}</CodeBlock>
</details>

## Step 4: Serve Locally

Start the model as a local runner:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve "./gpt-oss:20b"</CodeBlock>
</TabItem>
</Tabs>

> **Note:** The first run pulls the model weights from Ollama, which may take a few minutes. Add `-v` for verbose logs.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OllamaRun}</CodeBlock>
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
        {"role": "user", "content": "How do I check if a Python object is an instance of a class?"},
    ],
    stream=False,  # stream=True also works
)
print(response)
```
</TabItem>
</Tabs>

Or use the Clarifai CLI:

```sh
clarifai model predict https://clarifai.com/<user-id>/local-runner-app/models/local-runner-model "Explain AI in one sentence"
```

You can also open the **[Runners](https://clarifai.com/compute/runners)** dashboard, find your runner, and select **Open in Playground** from the three-dot menu.

![](/img/others/runners-dashboard-ollama.png)

When you're done, close the terminal running the local runner to shut it down.

## Additional Resources

- [More Ollama Python examples](https://github.com/ollama/ollama-python/tree/main/examples)
- [Clarifai inference examples with Ollama](https://docs.clarifai.com/compute/inference/clarifai/api)
- [Ollama runner example on GitHub](https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload)
- [YouTube: Running OpenAI's GPT-OSS-20B with Ollama](https://www.youtube.com/watch?v=TfS2p8LZYBE)
