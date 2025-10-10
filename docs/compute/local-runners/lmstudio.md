---
description: Download and run LM Studio models locally and make them available via a public API
sidebar_position: 3
unlisted: true
---

# LM Studio 

**Download and run LM Studio models locally and make them available via a public API**
<hr />

[LM Studio](https://lmstudio.ai/) is a desktop application that lets you run and chat with open-source large language models (LLMs) locally — no internet connection required.

With Clarifai’s [Local Runners](https://docs.clarifai.com/compute/local-runners/), you can take this a step further: run LM Studio models directly on your machine, expose them securely through a public URL, and leverage Clarifai’s powerful AI platform — all while maintaining the speed, privacy, and control of local deployment.

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

## Step 1: Perform Prerequisites

### Sign Up or Log In

[**Log in**](https://clarifai.com/login) to your existing Clarifai account or [**sign up**](https://clarifai.com/signup) for a new one. After logging in, gather the following credentials for setup:

* **App ID** – Go to the application you’ll use to run your model and select **[Overview](https://docs.clarifai.com/create/applications/manage/#app-overview)** in the collapsible left sidebar. Get the app ID from there.
* **User ID** – In the collapsible left sidebar, select **Settings** and select **Account** from the dropdown list. Then, find your user ID.
* **Personal Access Token (PAT)** – From the same **Settings** option, select **Secrets** to create or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token is required to authenticate your connection with the Clarifai platform.

Once you have your PAT, set it as an environment variable for secure authentication:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-like Systems">
<CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
<CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Install the Clarifai CLI

Next, install the latest version of the [**Clarifai CLI**](https://docs.clarifai.com/sdk/cli), which includes built-in support for Local Runners.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

> **Note:** Ensure you have **[Python 3.11 or 3.12](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements)** installed to successfully run Local Runners.

### Install the OpenAI Package

Install the `openai` package — it’s required to perform inference with LM Studio models that support the [OpenAI-compatible](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) format.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install openai</CodeBlock>
</TabItem>
</Tabs>

### Install LM Studio

[Download](https://lmstudio.ai/download) and install the LM Studio desktop application to run open-source large language models locally. 

Ensure the LM Studio remains open and running when you start a Clarifai Local Runner, as the runner relies on LM Studio’s internal model runtime for successful execution.

> **Note:** Currently, Clarifai Local Runners support running LLMs through LM Studio only on Apple devices (macOS).

## Step 2: Initialize a Model

Using the Clarifai CLI, you can download and set up any model available in the [LM Studio Model Catalog](https://lmstudio.ai/models) that supports the GGUF format.

For example, the command below initializes the default model ([LiquidAI/LFM2-1.2B](https://lmstudio.ai/models/liquid/lfm2-1.2b)) in your current directory:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit lmstudio</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{LMStudioInit}</CodeBlock>
</details>

Running this command creates a new model directory structure compatible with the Clarifai platform. You can further customize or optimize the model by modifying the generated files as needed.

:::tip

To initialize a specific LM Studio model that supports the GGUF format, use the `--model-name` flag.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit lmstudio --model-name qwen/qwen3-4b-thinking-2507</CodeBlock>
</TabItem>
</Tabs>

:::

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
  <CodeBlock className="language-text">{LMStudioModel}</CodeBlock>
</details>

The [`model.py`](https://docs.clarifai.com/compute/upload/#prepare-modelpy) file inside the `1/` directory defines the model’s logic — including how predictions are made and how inputs and outputs are handled.

### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
  <CodeBlock className="language-text">{LMStudioConfig}</CodeBlock>
</details>

The `config.yaml` file defines key configuration details, such as compute resource requirements and toolkit metadata.

In the `model` section, specify a unique model ID (any name of your choice) and your Clarifai user ID and app ID. These parameters determine where the model will be deployed on the Clarifai platform.

### `requirements.txt`

<details>
  <summary>Example: requirements.txt</summary>
  <CodeBlock className="language-text">{LMStudioRequirements}</CodeBlock>
</details>

The `requirements.txt` file lists the Python dependencies your model needs. You need to install them by running the following command:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">pip install -r requirements.txt</CodeBlock>
</TabItem>
</Tabs>

## Step 3: Log In to Clarifai

Use the Clarifai CLI to log in to your account and create a configuration [**context**](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional) that securely connects your local environment to the Clarifai platform.

```bash
clarifai login
```

You’ll be prompted to enter the following details:

* **User ID** – Your Clarifai User ID.
* **PAT** – Your Clarifai Personal Access Token.
  If you’ve already set the `CLARIFAI_PAT` environment variable, type `ENVVAR` to use it automatically.
* **Context name** – Optionally, specify a custom name for this configuration context, or press **Enter** to use the default `"default"`.
  Contexts are useful when working with multiple environments or projects.

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{LMStudioLogin}</CodeBlock>
</details>

## Step 4: Start the Local Runner

Next, start your **Local Runner**, which connects to the LM Studio runtime to execute your model locally.

```bash
clarifai model local-runner
```

If configuration contexts or defaults are missing, the CLI will guide you through setting them up automatically.

This setup ensures that all necessary components — such as compute clusters, nodepools, and deployments — are properly defined in your configuration context.
For more details, see [here](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional).

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{LMStudioLocalRunner}</CodeBlock>
</details>

## Step 5: Test Your Runner

After the Local Runner starts, you can use it to perform [inference](https://docs.clarifai.com/compute/inference/clarifai/api) with your LM Studio–based model.

You can run a snippet in a separate terminal, within the same directory, to confirm that your model is running and responding as expected.

Here’s an example snippet:

<Tabs groupId="code">
<TabItem value="python" label="Python (OpenAI)">
     <CodeBlock className="language-python">{LMStudioTestRunner}</CodeBlock>
</TabItem>

</Tabs>