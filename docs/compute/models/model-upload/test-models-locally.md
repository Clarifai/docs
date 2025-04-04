---
description: Learn how to test your locally built models
sidebar_position: 1
---


# Test Models Locally

**Learn how to test your custom models locally**

<hr />

Before uploading a custom model to the Clarifai platform, always test it locally. It ensures smooth performance, verifies dependency compatibility, and streamlines the deployment process.

This step helps you detect problems like setup file errors, typos, code misconfigurations, or incorrect model implementations — saving you time and avoiding upload failures.

:::note

You should ensure your local environment has sufficient memory and compute resources to handle model loading and execution during the testing process.

:::

## Prerequisites

### Build a Model

You can either build a custom model from scratch or leverage pre-trained models from external repositories like Hugging Face. 

If you're developing your own model, our [step-by-step guide](https://docs.clarifai.com/compute/models/model-upload/) provides detailed instructions to get started. You can also explore our [examples repository](https://github.com/Clarifai/examples/tree/main/models/model_upload) to learn how to build models compatible with the Clarifai platform.

### Install Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) (Command Line Interface) tool. We'll use this tool to test models in the local development environment. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set up Docker or a Virtual Environment

Set up either a Docker container (recommended) or a Python virtual [local development environment](https://docs.clarifai.com/compute/models/model-upload/#set-up-docker-or-a-virtual-environment) for testing the model locally. This ensures proper dependency management and prevents conflicts in your project.



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import TestModel from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/test_model.py";
import TestLocally1 from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/test_locally-1.txt";

:::note CLI Flags

These are the key CLI flags available for local testing and running your models:

   - `--mode` —  Specify how to run the model: `env` for virtual environment or `container` for Docker container. Defaults to `env`.
  - `-p` or `--port` —  The port to host the gRPC server for running the model locally. Defaults to `8000`.
  - `--keep_env` —  Retain the virtual environment after testing the model locally (applicable for `env` mode). Defaults to `False`.
  - `--keep_image` —  Retain the Docker image built after testing the model locally (applicable for `container` mode). Defaults to `False`.
  - `--skip_dockerfile` — Flag to skip generating a dockerfile so that you can manually edit an already created dockerfile.

:::

:::tip Local Model Path

You can specify the path to the directory containing the custom model you want to test. For example, if your model's files are stored in `./examples/models/clarifai_llama`, use the following command:  

```sh
clarifai model test-locally ./examples/models/clarifai_llama --mode container
```

If you don’t specify a path, the current directory is used by default. In that case, simply navigate to the directory and run:  

```sh
clarifai model test-locally --mode container
```

:::

## Test by Running Locally

The `test-locally` method allows you to test your model with a single CLI command. It runs the model locally and sends a sample request to verify that the model responds successfully. The results of the request are displayed directly in the console.

Here is how to test a model in a Docker Container:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model test-locally --mode container </CodeBlock>
</TabItem>
</Tabs>

Here is how to test a model in a virtual environment:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model test-locally --mode env </CodeBlock>
</TabItem>
</Tabs>

<!--
<details>
  <summary>Example</summary>

    <CodeBlock className="language-text">{TestLocally1}</CodeBlock>
</details>
-->

## Test by Starting a gRPC Server

The  `run-locally` method starts a local gRPC server at `https://localhost:{port}/` for running the model. Once the server is running, you can perform inference on the model via the Clarifai Python SDK.

Here is how to test a model in a Docker Container:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model run-locally --mode container --port 8000 </CodeBlock>
</TabItem>
</Tabs>

Here is how to test a model in a virtual environment:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model run-locally --mode env --port 8000  </CodeBlock>
</TabItem>
</Tabs>

## Make Inference Requests

Once the model is running locally, you need to configure the `CLARIFAI_API_BASE` environment variable to point to the localhost and port where the gRPC server is running.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> export CLARIFAI_API_BASE="localhost:add-port-here" </CodeBlock>
</TabItem>
</Tabs>

You can then make [inference requests](https://docs.clarifai.com/compute/models/model-inference) using the model. Here is an example:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{TestModel}</CodeBlock>
</TabItem>
</Tabs>


