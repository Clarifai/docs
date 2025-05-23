---
description: Learn how to test your locally built models
sidebar_position: 1
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
import LocalDev from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/local-dev.txt";
import LocalDevExampleCode from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/local-dev-example-code.py";


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

:::note tip

On Windows, the Clarifai CLI expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the CLI, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::

:::info How to specify Local Model Path

You can specify the path to the directory containing the custom model you want to test. For example, if your model's files are stored in `./examples/models/clarifai_llama`, use the following command:  

```sh
clarifai model test-locally ./examples/models/clarifai_llama --mode container
```

If you don’t specify a path, the current directory is used by default. In that case, simply navigate to the directory and run:  

```sh
clarifai model test-locally --mode container
```

:::

## Test with the Local Development Runner

The `local-dev` method allows you to test your model as a local development runner. This approach lets you run your model using your own local compute
resources, but still allows it to receive and respond to requests through the Clarifai API, just like it would in production.

This provides a fast and flexible way to develop, debug, and validate your model before uploading it to the Clarifai platform.

:::note

We'll use this method to test the model we created [here](https://docs.clarifai.com/compute/models/upload/). 

:::

Here is how to test a model as a local development runner:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model local-dev [OPTIONS] [MODEL_PATH] </CodeBlock>
</TabItem>
</Tabs>

> `MODEL_PATH` is an optional path to the model directory. If omitted, the current directory is used by default, as previously illustrated.

### Required Environment Variables

Running the local development runner relies on certain environment variables defined in your current context. The _context_ refers to the active environment settings that determine how your commands interact with the Clarifai platform.

You can create this context using the provided default values when you run the `local-dev` command. Any configurations you create locally — such as the computer cluster and app — will also be created on the Clarifai platform, making them reusable whenever you test your model with the local development runner.

:::tip

You can run `clarifai config ls` in your terminal to show your current environment configurations. 

:::

These are the environment variables required to create a runner:

| Variable                      | Description                                                             |
| ----------------------------- | ----------------------------------------------------------------------- |
| CLARIFAI_PAT                | [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) for authentication                            |
| CLARIFAI_USER_ID (`user_id`)           | User ID of the account owning the model                                |
| CLARIFAI_APP_ID (`app_id`)            | App ID containing the model                                            |
| CLARIFAI_MODEL_ID  (`model_id`)         | The model ID for the model to be run locally                           |
| CLARIFAI_COMPUTE_CLUSTER_ID (`compute_cluster_id`) | [Compute cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools) where the local dev runner will reside. _Note that the `user_id` of the compute cluster must match the `user_id` of the model._                |
| CLARIFAI_NODEPOOL_ID (`nodepool_id`)    | Nodepool within the compute cluster                                   |
| CLARIFAI_DEPLOYMENT (`deployment_id`)    | [Deployment](https://docs.clarifai.com/compute/deployments/deploy-model) for a model into the cluster and nodepool                                  |
| CLARIFAI_RUNNER_ID (`runner_id`)      | Auto-generated runner ID, created by the API and stored in the context |


### Run the Test

To run your model with the local development runner, first navigate to the directory where your custom model is located. 

Then, follow these steps.

#### Log In 

Run the following command to log in to the Clarifai platform and establish a connection.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai login </CodeBlock>
</TabItem>
</Tabs>

After running the `login` command, you'll be prompted to enter the following details to authenticate your connection:

<Tabs>
<TabItem value="bash" label="Bash">

<CodeBlock className="language-bash"> 
context name (default: "default"): 
user id:
personal access token value (default: "ENVVAR" to get our env var rather than config):
</CodeBlock>
</TabItem>
</Tabs>

#### Start the Runner

Next, start a local development runner.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model local-dev </CodeBlock>
</TabItem>
</Tabs>

If the runner doesn't detect the required context configurations in your environment, it will prompt you to create them using default values. 

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{LocalDev}</CodeBlock>
</details>

> **Note:** If the [`config.yaml`](https://docs.clarifai.com/compute/models/upload/#step-2-prepare-the-configyaml-file) file does not contain model information that matches the `user_id`, `app_id`, and `model_id` defined in your current context, it will be automatically updated to include the new model details. This ensures that the model started by the local development runner is the same one you intend to call via the API. If needed, you can back up the existing `config.yaml` file as `config.yaml.bk`.

#### Test with Snippet

Once the local development runner starts in your terminal, an example code snippet is automatically generated based on the [model's signature](https://docs.clarifai.com/compute/models/inference/api#generate-example-code) to help you test it.

<details>
  <summary>Example Code Snippet</summary>
    <CodeBlock className="language-text">{LocalDevExampleCode}</CodeBlock>
</details>

If you run the generated snippet in a separate terminal, but within the same directory, you’ll receive the model’s response output.

After you're done testing, simply close the terminal running the local development runner to shut it down.


## Test by Running Locally

:::tip Set up Docker or a Virtual Environment

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

:::


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

