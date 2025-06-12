---
description: Learn how to test your locally built models
sidebar_position: 2
toc_max_heading_level: 4
---


# Test Models Locally

**Learn how to test your custom models locally**

<hr />

Before uploading a custom model to the Clarifai platform, always test and debug it locally. It ensures smooth performance, verifies dependency compatibility, and streamlines the deployment process.

This step helps you detect problems like setup file errors, typos, code misconfigurations, or incorrect model implementations. This saves you time and avoids upload failures by validating the model’s behavior on the target hardware you plan to deploy to.

:::note

You should ensure your local environment has sufficient memory and compute resources to handle model loading and execution during the testing process.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import TestMethod from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/test-models-locally.py";
import TestLocally1 from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/test_locally-1.txt";


## Prerequisites

### Build a Model

You can either build a custom model from scratch or leverage pre-trained models from external repositories like Hugging Face. 

If you're developing your own model, our [step-by-step guide](https://docs.clarifai.com/compute/models/model-upload/) provides detailed instructions to get started. You can also explore [this examples repository](https://github.com/Clarifai/runners-examples) to learn how to build models compatible with the Clarifai platform.

### Install Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) (Command Line Interface) tool. We'll use this tool to test models in the local development environment. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set up Docker or a Virtual Environment

Set up either a Docker container (recommended) or a Python virtual [local development environment](https://docs.clarifai.com/compute/models/model-upload/#set-up-docker-or-a-virtual-environment) for testing the model locally. This ensures proper dependency management and prevents conflicts in your project.

<details>

  <summary>CLI Flags</summary>
  
These are the key CLI flags available for local testing and running your models:

   - `--mode` —  Specify how to run the model: `env` for virtual environment or `container` for Docker container. Defaults to `env`.
  - `-p` or `--port` —  The port to host the gRPC server for running the model locally. Defaults to `8000`.
  - `--keep_env` —  Retain the virtual environment after testing the model locally (applicable for `env` mode). Defaults to `False`.
  - `--keep_image` —  Retain the Docker image built after testing the model locally (applicable for `container` mode). Defaults to `False`.
  - `--skip_dockerfile` — Flag to skip generating a dockerfile so that you can manually edit an already created dockerfile.

</details>



## Test by Running Locally

The `test-locally` method allows you to test your model with a single CLI command. It runs the model locally and sends a sample request to verify that the model responds successfully. 

The results of the request are displayed directly in the console.

Note that to test your model locally, you need to implement a `test` method in the [`model.py`](https://docs.clarifai.com/compute/models/upload/#step-1-prepare-the-modelpy-file) file. This method should internally call other model methods to perform validation.

When you run the `test-locally` CLI command shown below, it will automatically invoke the `test` method to carry out the testing process.

Below is a sample `model.py` file with an example implementation of the `test` method:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{TestMethod}</CodeBlock>
</TabItem>
</Tabs>

:::note How to specify Local Model Path

You can specify the path to the directory containing the custom model you want to test. For example, if your model's files are stored in `./examples/models/clarifai_llama`, use the following command:  

```sh
clarifai model test-locally ./examples/models/clarifai_llama --mode container
```

If you don’t specify a path, the current directory is used by default. In that case, simply navigate to the directory and run:  

```sh
clarifai model test-locally --mode container
```

:::

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

### Make Inference Requests

Once the model is running locally, you need to configure the `CLARIFAI_API_BASE` environment variable to point to the localhost and port where the gRPC server is running.

<Tabs>
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_API_BASE="localhost:add-port-here" </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_API_BASE="localhost:add-port-here" </CodeBlock>
</TabItem>
</Tabs>

You can then make [inference requests](https://docs.clarifai.com/compute/models/inference/api) using the model. 

