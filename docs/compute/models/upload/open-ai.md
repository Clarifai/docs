---
description: Build and upload OpenAI-compatible models
sidebar_position: 1
draft: true
---

# OpenAI-Compatible Models

**Build and upload OpenAI-compatible models**
<hr />

You can easily build and upload models to the Clarifai platform that follow the OpenAI API specifications. This enables seamless integration with tools, agents, and applications that rely on the OpenAI ecosystem.

To build models that align with OpenAI's expectations, use Clarifai’s `OpenAIModelClass`. This class supports OpenAI-compatible features such as chat formatting, tool calling, and more.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/open_ai_model_py.py";
import ConfigYAML from "!!raw-loader!../../../../code_snippets/python-sdk/model-upload/open_ai_config.yaml";

## Step 1: Perform Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK. This will also install the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.


<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set a PAT Key

You need to authenticate with the Clarifai platform using a Personal Access Token (PAT). You can generate a PAT from the [Security section](https://clarifai.com/settings/security) of your Clarifai account settings, then set it as an environment variable. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

:::note tip

On Windows, the Clarifai Python SDK expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the SDK, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::

### Create Files

:::tip

You can quickly scaffold the required files by running the following command in your working directory: [`clarifai model init --model-type-id openai`](https://docs.clarifai.com/resources/api-overview/cli#options). This will generate a structured directory with boilerplate files you can customize.

:::

Create a project directory and structure your files as shown below to meet the requirements for uploading models to the Clarifai platform.


```text
your_model_directory/
├── 1/
│   └── model.py
├── config.yaml
└── requirements.txt
```

- **your_model_directory/** – Root directory for your custom model project.
  - **1/** – A subfolder (named `1` by convention) containing your model code.
    - **model.py** – Defines the model and includes logic for handling OpenAI-style inputs and outputs using `OpenAIModelClass`.
  - **config.yaml** – Specifies model metadata and configuration details necessary for building the model, defining compute resources, and more.
  - **requirements.txt** – Lists Python dependencies required by your model.

## Step 2: Build a Model

Let’s walk through the general steps for uploading an OpenAI-compatible model to the Clarifai platform. 

:::note

These steps for building a model closely mirror those outlined [here](https://docs.clarifai.com/compute/models/upload/), so you can refer to that guide for more detailed explanations.

:::

### Prepare `model.py` 

As mentioned previously, the `model.py` file contains the core logic for your OpenAI-compatible model. 

To ensure compatibility with the OpenAI API format, this file must define a custom class that inherits from `OpenAIModelClass` and implements at least one prediction method, such as `predict` and `generate`. These methods must be decorated with `@ModelClass.method` to make them callable on the Clarifai platform.

Here is the `model.py` file we want to upload to Clarifai:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

### Prepare `config.yaml` 

The `config.yaml` file defines the runtime environment, minimum compute requirements, and other metadata needed to build and deploy your model on the Clarifai platform.

You’ll also need to specify your model ID, Clarifai user ID, and Clarifai app ID — these determine where your model will be uploaded and accessed within the Clarifai platform.

Here is the `config.yaml` file we want to upload to Clarifai:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigYAML}</CodeBlock>
</TabItem>
</Tabs>

### Prepare `requirements.txt` 

The `requirements.txt` file lists all the Python dependencies your model needs to run properly in the Clarifai environment.

Here is the `requirements.txt` file for the OpenAI-compatible model we want to upload to Clarifai:

<Tabs groupId="code">
<TabItem value="text" label="Text">
    <CodeBlock className="language-txt"></CodeBlock>
</TabItem>
</Tabs>



## Step 3: Test the Model Locally

Before uploading your model to the Clarifai platform, it's important to test it locally to ensure everything works as expected and to catch any typos or configuration issues early.

You can learn how to run and test your model locally [here](https://docs.clarifai.com/compute/models/upload/run-locally/).

## Step 4: Upload the Model

Once your OpenAI-compatible model is ready, you can upload it to the Clarifai platform by navigating to the directory containing the model and running the following command using the Clarifai CLI:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload  </CodeBlock>
</TabItem>
</Tabs>

This command packages your model files and uploads them to the Clarifai platform under the specified user, app, and model ID defined in your `config.yaml`.

## Step 5: Deploy the Model

After you've successfully uploaded your model to the Clarifai platform, the terminal will guide you through the deployment process, getting your model ready for inference. 

You can follow the prompts to [set up a cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools), create a nodepool, and [deploy your model](https://docs.clarifai.com/compute/deployments/deploy-model).

<details>
  <summary>Build Logs Example</summary>

    <CodeBlock className="language-text">{}</CodeBlock>
</details>

## Step 6: Predict with the Model

Once your model has been successfully deployed, you can begin making predictions with it.

Here’s an example of how to run a prediction.

That's it!

## Additional Examples

:::tip

You can find various up-to-date model upload examples [here](https://github.com/Clarifai/runners-examples), which demonstrate different use cases and optimizations. 

:::