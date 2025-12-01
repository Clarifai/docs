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
import SGLOpenAIServer from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_open_ai_server.py";
import SGLDockerfile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/sgl_dockerfile.py";

## Step 1: Perform Prerequisites

### Sign Up or Log In

Log in to your existing Clarifai account or [sign up](https://clarifai.com/signup) for a new one. Once you’re logged in, gather the following credentials required for setup:

* **App ID** – Go to the application you want to use to run the model. In the collapsible left sidebar, select **[Overview](https://docs.clarifai.com/create/applications/manage/#app-overview)** and copy the app ID displayed there.
* **User ID** – In the collapsible left sidebar, open **Settings**, then choose **Account** from the dropdown list to locate your user ID.
* **Personal Access Token (PAT)** – From the same **Settings** menu, select **Secrets** to create or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token is used to authenticate your connection with the Clarifai platform.

Then, set your PAT as an environment variable:

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

With the Clarifai CLI, you can initialize a model configured to run using the SGLang runtime format. It sets up a Clarifai-compatible project directory with the appropriate files. 

You can customize or optimize the model by editing the generated files as needed. For example, the command below initializes a default Hugging Face model ([HuggingFaceTB/SmolLM2-135M-Instruct](https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct)) in your current directory.


<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You can initialize a model in a specific location by passing a [`MODEL_PATH`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init). 

<details>
  <summary>Example Output</summary>
  <CodeBlock className="language-text">{SGLModelInit}</CodeBlock>
</details>


:::tip

You can use the `--model-name` parameter to initialize any supported Hugging Face model. This sets the model’s `repo_id`, specifying which Hugging Face repository to initialize from.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
<CodeBlock className="language-bash">clarifai model init --toolkit sglang --model-name unsloth/Llama-3.2-1B-Instruct</CodeBlock>
</TabItem>
</Tabs>

<!--
<details>
  <summary>Supported Examples</summary>
  <CodeBlock className="language-text">{SGLSupportedModels}</CodeBlock>
</details>
-->
:::

> **Note:** Large models require significant GPU memory. Ensure your machine has enough compute capacity to run them efficiently.

The generated structure includes:

```

├── 1/
│   └── model.py
|   └── openai_server_starter.py
├── Dockerfile
└── README.md
├── config.yaml
└── requirements.txt

````


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

### `openai_server_starter.py`

<details>
  <summary>Example: 1/openai_server_starter.py</summary>
  <CodeBlock className="language-text">{SGLOpenAIServer}</CodeBlock>
</details>

This utility handles starting, monitoring, and shutting down the backend SGLang server. It acts as your server controller, ensuring the backend is ready before the runner starts sending requests.

* It wraps around subprocess management for launching `sglang.launch_server`.
* It ensures the server runs properly, logs startup messages, and handles safe termination.
* The class `OpenAI_APIServer` can also be extended to support other backends like `vLLM`, `llama.cpp`, or `TGI`, but here it’s used for SGLang.

### `Dockerfile`

<details>
  <summary>Example: Dockerfile</summary>
  <CodeBlock className="language-text">{SGLDockerfile}</CodeBlock>
</details>

The Dockerfile defines the container environment used to run your model runner on Clarifai’s infrastructure.

* It builds on the official SGLang base image (`lmsysorg/sglang:v0.5.3-cu129`), which includes CUDA and SGLang dependencies.
* It installs any Python packages listed in `requirements.txt`.
* It copies your model files (`model.py`, `config.yaml`, etc.) into the container.
* Optionally, it downloads checkpoints during build time if `checkpoints.when = "build"`.
* It starts the Clarifai runner loop using `python -m clarifai.runners.server`.


### `config.yaml`

<details>
  <summary>Example: config.yaml</summary>
  <CodeBlock className="language-text">{SGLConfig}</CodeBlock>
</details>

This is the configuration file for your SGLang model runner.

* It specifies model identifiers (`model.id`, `user_id`, `app_id`), which together determine where your model will run on the Clarifai platform. Your Clarifai user ID is set by default from your [active context](https://docs.clarifai.com/resources/api-overview/cli#clarifai-config).
* It defines compute resources (CPU, GPU type, and memory).
* The [`checkpoints`](https://docs.clarifai.com/compute/upload/#hugging-face-model-checkpoints) section tells the runner where and when to load model weights 
    > **Tip:** Use `when: runtime` for large models to reduce image size and improve load times.


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


## Step 4: Start Your Local Runner

Next, start your Local Runner, which connects to the SGLang runtime to execute your model locally.

```bash
clarifai model local-runner
```

If any configuration contexts or defaults are missing, the CLI will automatically guide you through setting them up.

This process ensures that all required components — such as compute clusters, nodepools, and deployments — are correctly configured in your context, enabling seamless local execution of your SGLang model. For more details, see [Local Runners documentation](https://docs.clarifai.com/compute/local-runners/#step-2-create-a-context-optional).

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

