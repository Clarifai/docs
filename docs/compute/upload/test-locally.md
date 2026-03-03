---
description: Learn how to test your locally built models
sidebar_position: 3
toc_max_heading_level: 4
---


# Test Models Locally

**Learn how to test your custom models locally**

<hr />

Before uploading a custom model to the Clarifai platform, always test and debug it locally. It ensures smooth performance, verifies dependency compatibility, and streamlines the deployment process.

This step helps you detect problems like setup file errors, typos, code misconfigurations, or incorrect model implementations. This saves you time and avoids upload failures by validating the model's behavior on the target hardware you plan to deploy to.

:::note

You should ensure your local environment has sufficient memory and compute resources to handle model loading and execution during the testing process.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import TestMethod from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/test-models-locally.py";


## Prerequisites

### Build a Model

You can either build a custom model from scratch or leverage pre-trained models from external repositories like Hugging Face.

If you're developing your own model, our [step-by-step guide](https://docs.clarifai.com/compute/upload/) provides detailed instructions to get started. You can also explore [this examples repository](https://github.com/Clarifai/runners-examples) to learn how to build models compatible with the Clarifai platform.

### Install Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/resources/api-overview/cli) tool. We'll use this tool to test models in the local development environment.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### System Requirements

Before running the test commands below, ensure your local environment meets the following requirements:

* **Python version** — Python 3.11 or 3.12 is required.

* **GPU support** — For models that require GPU acceleration, your environment must have NVIDIA GPU support installed and properly configured. CPU-only models can still be tested without a GPU.

* **Docker (optional)** — Docker is recommended for container-based testing (`--mode container`), but it is not mandatory. Without Docker, you can use `--mode env` to test in a virtual environment.

## Test With the `serve` Command

The `clarifai model serve` command is the primary way to test your model locally. It has two modes:

- **API-connected mode** (default) — Connects to the Clarifai platform and exposes your model via a public URL, just like a cloud deployment.
- **Standalone gRPC mode** (`--grpc`) — Runs your model as a local gRPC server with no Clarifai connection needed. Ideal for offline development.

### Option A: API-Connected Mode

This mode connects your local model to the Clarifai platform, giving you a public URL you can use to test predictions through the API or the [AI Playground](https://docs.clarifai.com/getting-started/quickstart-playground).

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model serve</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You must be logged in (`clarifai login`) to use API-connected mode.

You can specify additional options:

| Flag | Description | Default |
|------|-------------|---------|
| `--mode` | How to run: `none` (current env), `env` (virtual env), or `container` (Docker) | `none` |
| `--port` | Port for the local server | `8000` |
| `--concurrency` | Number of concurrent requests to handle | `1` |
| `--keep-image` | Keep the Docker image after stopping (for `container` mode) | `false` |
| `-v, --verbose` | Show detailed SDK and server logs | `false` |

You can also specify the path to the model directory. If omitted, the current directory is used:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model serve ./path/to/my-model --mode env</CodeBlock>
</TabItem>
</Tabs>

### Option B: Standalone gRPC Mode (Offline)

Use the `--grpc` flag to run the model as a standalone gRPC server without any Clarifai connection. This is ideal for offline development — no PAT or login required.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">clarifai model serve --grpc --port 8000</CodeBlock>
</TabItem>
</Tabs>

Once the server is running, set the `CLARIFAI_API_BASE` environment variable to point to it:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_API_BASE="localhost:8000"</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_API_BASE="localhost:8000"</CodeBlock>
</TabItem>
</Tabs>

You can then make [inference requests](https://docs.clarifai.com/compute/inference/clarifai/api) using the Clarifai Python SDK.

## Implement a `test` Method

To enable quick validation, implement a `test` method in your [`model.py`](https://docs.clarifai.com/compute/upload/#prepare-modelpy) file. This method should internally call your model's other methods and verify the output.

Below is a sample `model.py` file with an example implementation of the `test` method:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{TestMethod}</CodeBlock>
</TabItem>
</Tabs>
