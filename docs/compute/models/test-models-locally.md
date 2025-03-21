---
description: Learn how to test your locally built models
sidebar_position: 1
---


# Test Models Locally

**Learn how to test your custom models locally**

<hr />

To successfully upload a custom model to the Clarifai platform — whether you've built it from scratch or sourced it from an external repository like Hugging Face — it's crucial to test it locally in a Docker or virtual environment first. 

This step helps identify and resolve potential issues such as setup file errors, typos, code misconfigurations, or incorrect model implementations before uploading.

By doing so, you can ensure the model runs seamlessly and that all dependencies are properly configured, minimizing the risk of upload failures and ensuring optimal performance.

## Prerequisites

- Set up the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) (command line interface) tool.  We'll use the tool to test models in the local development environment. 
- Set up either a Docker container (recommended) or a Python virtual [local development environment](https://docs.clarifai.com/sdk/compute-orchestration/model-upload#set-up-docker-or-a-virtual-environment). This ensures proper dependency management and prevents conflicts in your project.



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import TestModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/test_model.py";


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

You can then make different [types of inference requests](https://docs.clarifai.com/sdk/compute-orchestration/set-up-compute#predict-with-deployed-model) using the model — unary-unary, unary-stream, or stream-stream predict calls.

Here is an example of a unary-unary prediction call:


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{TestModel}</CodeBlock>
</TabItem>
</Tabs>


