---
description: Run models locally for development, debugging, or compute tasks
sidebar_position: 2
---


# Local Runners

**Run models locally for development, debugging, or compute tasks**
<hr />

Local Runners are a powerful feature of the Clarifai platform that lets you develop, test, and execute models on your local machine. 

Instead of running solely in the cloud, you can run your models anywhere that supports Python and has an internet connection — whether it's your workstation or on-premise server.

With Local Runners, you can connect your own models to Clarifai's compute plane. This seamless integration enables you to leverage the Clarifai cloud API, workflows, and other platform capabilities with your custom models.

Your model can securely receive and process requests, just as it would in a production cloud deployment.

:::note What is a runner?

A runner is the actual running instance of your model. It is a unique process that pulls tasks (such as prediction requests) from a queue and executes them using the model’s logic. 

:::

Here is how to run a model as a local runner:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model local-dev [OPTIONS] [MODEL_PATH] </CodeBlock>
</TabItem>
</Tabs>

> `MODEL_PATH` is an optional path to the model directory. If omitted, the current directory is used by default.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import LocalDev from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/local-dev.txt";
import LocalDevExampleCode from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/local-dev-example-code.py";

## Use Cases for Local Runners

- **Streamlined model development** — Local Runners make it easy to build and test new models directly within your local environment. You can spin up a runner on your machine, route API calls through our public cloud endpoint, and watch requests hit your model in real time. This allows you to debug, set breakpoints, return results, and validate outputs.

- **Leverage your own compute resources** — If you have powerful hardware, you can take advantage of that local compute without relying on Clarifai's [autoscaling](https://docs.clarifai.com/compute/deployments/clusters-nodepools/#step-3-set-node-autoscaling-range) infrastructure. Your model remains accessible through our API with full authentication, even though it runs locally.

- **Locally connect agents** — Because Local Runners execute on your chosen hardware, they can interact with local file systems, make OS-level calls, or access private data stores. With our [MCP (Model Context Protocol)](https://docs.clarifai.com/compute/agents/mcp) model type, you can give your cloud-hosted agents or any MCP-enabled clients authenticated access to your locally controlled information, regardless of their deployment location.

- **Run models anywhere** — Whether on a local development machine, an on-premises server, or a private cloud cluster, Local Runners seamlessly connect your models to our platform. This enables you to keep sensitive data and custom-built models securely within your own environment.

## Prerequisites

Before you can start developing and testing your models locally with Local Runners, there are a couple of things you'll need.

### Build a Model

You can either create a custom model from scratch or leverage pre-trained models from external sources like Hugging Face.

If you're building your own model, follow our comprehensive [step-by-step](https://docs.clarifai.com/compute/models/model-upload/) guide to get started.

You can also explore our [examples repository](https://github.com/Clarifai/runners-examples) to see models built for compatibility with the Clarifai platform.

### Install Clarifai CLI

Install the latest version of the [Clarifai CLI](https://docs.clarifai.com/sdk/cli) (Command Line Interface) tool. It includes built-in support for Local Runners. 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

To authenticate your connection with the Clarifai platform, you'll need a Personal Access Token (PAT) key. You can generate the PAT key in your personal settings page by navigating to the [Security](https://clarifai.com/settings/security) section.


### Create a Context

Running the local development runner relies on certain environment variables defined in your current context. The _context_ refers to the active environment settings that determine how your commands interact with the Clarifai platform.

You can create this context using the provided default values when you run the `local-dev` command. 

Any configurations you create locally — such as the computer cluster and app — will also be created on the Clarifai platform, making them reusable whenever you test your model with the local development runner.

:::tip

[Click here](https://docs.clarifai.com/resources/api-overview/cli) to learn how to create and manage various aspects of your Clarifai context, including switching contexts and editing your configuration information. 

:::

These are the environment variables required to create a runner:

| Variable                      | Description                                                             |
| ----------------------------- | ----------------------------------------------------------------------- |
| CLARIFAI_PAT                | [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) for authentication                            |
| CLARIFAI_USER_ID (`user_id`)           | User ID of the account owning the model                                |
| CLARIFAI_APP_ID (`app_id`)            | App ID containing the model                                            |
| CLARIFAI_MODEL_ID  (`model_id`)         | The model ID for the model to be run locally                           |
| CLARIFAI_COMPUTE_CLUSTER_ID (`compute_cluster_id`) | [Compute cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools) where the Local Runner will reside. _Note that the `user_id` of the compute cluster must match the `user_id` of the model._                |
| CLARIFAI_NODEPOOL_ID (`nodepool_id`)    | Nodepool within the compute cluster                                   |
| CLARIFAI_DEPLOYMENT (`deployment_id`)    | [Deployment](https://docs.clarifai.com/compute/deployments/deploy-model) for a model into the cluster and nodepool                                  |
| CLARIFAI_RUNNER_ID (`runner_id`)      | Auto-generated unique runner ID, created by the API and stored in the context |


## Run Your Model

:::info note

We'll use this method to run and test the model we created [here](https://docs.clarifai.com/compute/models/upload/). 

:::

To run your model with the local development runner, navigate to the directory where your custom model is located. 

Then, follow these steps.

### Log In 

Run the following command to log in to the Clarifai platform and establish a connection.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai login </CodeBlock>
</TabItem>
</Tabs>

After running the `login` command, you'll be prompted to enter the following details to authenticate your connection:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

<CodeBlock className="language-bash"> 
context name (default: "default"): 
user id:
personal access token value (default: "ENVVAR" to get our env var rather than config):
</CodeBlock>
</TabItem>
</Tabs>

- **Context name** — You can provide a custom name for your Clarifai configuration context, or simply press Enter to use the default name, "default". This helps you manage different configurations if needed.
- **User ID** —  Enter your Clarifai user ID.
- **PAT** — Enter your Clarifai [PAT](#get-a-pat-key). Note that if you press Enter, and you have set the `CLARIFAI_PAT` environment variable, it will use that token automatically.

### Start the Runner

Next, start a local development runner.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model local-dev </CodeBlock>
</TabItem>
</Tabs>

If the runner doesn't detect the necessary [context configurations](#create-a-context) in your environment, it will prompt you to create them using default values. 

This ensures that all essential components required for Local Runners are properly set up or included in your configuration context, including:

- A compute cluster and nodepool configured for Local Runners. 

> **Note:** This cluster is created exclusively for Local Runners. It is not designed to support other tasks and lacks features like autoscaling to handle variable traffic demands, among other cloud-specific capabilities. You also cannot use other types of clusters for Local Runners — only the special cluster created for this purpose is supported.

- An app with a model and model version representing the local runner.

- A deployment that places the model version into the designated nodepool.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{LocalDev}</CodeBlock>
</details>

> **Note:** If the [`config.yaml`](https://docs.clarifai.com/compute/models/upload/#step-2-prepare-the-configyaml-file) file does not contain model information that matches the `user_id`, `app_id`, and `model_id` defined in your current context, it will be automatically updated to include the new model details. This ensures that the model started by the local development runner is the same one you intend to call via the API. If needed, you can back up the existing `config.yaml` file as `config.yaml.bk`.

:::tip

You can view all runners associated with your models in the Runners section of the Clarifai platform. This dashboard provides a centralized view to monitor and manage your runners, including their current status — such as `active`, `idle`, or `deploying`.

:::

### Test with Snippet

Once the local development runner starts in your terminal, an example client code snippet is automatically generated based on the [model's signature](https://docs.clarifai.com/compute/models/inference/api#generate-example-code) to help you test it.

<details>
  <summary>Example Code Snippet</summary>
    <CodeBlock className="language-text">{LocalDevExampleCode}</CodeBlock>
</details>

If you run the generated snippet in a separate terminal, but within the same directory, you’ll receive the model’s response output.

After you're done testing, simply close the terminal running the local development runner to shut it down.

