---
description: Learn how to upload your model to the Clarifai platform
sidebar_position: 3
---

# Upload Your First Model

**Learn how to upload your model to the Clarifai platform**
<hr />

The Clarifai platform allows you to upload custom models for a wide range of use cases. With just a few simple steps, you can get your models up and running and leverage the platform’s powerful capabilities.

Let's demonstrate how you can upload the [Llama-3_2-1B-Instruct](https://github.com/Clarifai/examples/tree/main/models/model_upload/llms/llama-3_2-1b-instruct) model to the Clarifai platform.

:::tip

To learn more about how to upload different types of models, check out other comprehensive guides [here](https://docs.clarifai.com/compute/models/model-upload/) and [here](https://github.com/Clarifai/examples/tree/main/models/model_upload). 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Login from "!!raw-loader!../../code_snippets/python-sdk/cli/login.yaml";
import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/llama-3_2-1B-Instruct.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/llama-3_2-1B-Instruct.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/llama-3_2-1B-Instruct.txt";

## Step 1: Perform Prerequisites

### Set up Docker or a Virtual Environment

Set up either a Docker container (recommended ) or a Python virtual environment. This ensures proper dependency management and prevents conflicts in your project.

### Set up Clarifai CLI

Install the latest version of the `clarifai` Python SDK. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

To use the CLI tool to interact with the Clarifai platform, you must first log in using a Personal Access Token (PAT). You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security). 

Then, create a create a YAML login configuration file to securely store your credentials.

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{Login}</CodeBlock>
</TabItem>
</Tabs>

Once the configuration file is set up, you can authenticate your CLI session with Clarifai using the stored credentials. 

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-text">
    clarifai login --config `<add-config-filepath-here>`
</CodeBlock>
</TabItem>
</Tabs>

## Step 2: Create Files

Create a project directory and organize your files as indicated below to fit the requirements of uploading models to the Clarifai platform. 

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

- **your_model_directory/** – The main directory containing your model files.
  - **1/** – A subdirectory that holds the model file (_Note that the folder is named as **1**_).
    - **model.py** – Contains the code that defines your model, including loading the model and running inference.
  - **requirements.txt** – Lists the Python libraries and dependencies required to run your model.
  - **config.yaml** – Contains model metadata and configuration details necessary for building the Docker image, defining compute resources, and uploading the model to Clarifai.

Add the following snippets to each of the respective files. 

### `model.py`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

### `requirements.txt`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{RequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

### `config.yaml`

:::note

In the `model` section of the `config.yaml` file, specify your model ID, Clarifai user ID, and Clarifai app ID. These will define where your model will be uploaded on the Clarifai platform.

:::

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigFile}</CodeBlock>
</TabItem>
</Tabs>

## Step 3: Upload the Model

Once your custom model is ready, upload it to the Clarifai platform by navigating to its directory and running the following command:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>

Congratulations — you've just uploaded your first model to the Clarifai platform!