---
description: Upload a model from Hugging Face to the Clarifai platform
sidebar_position: 3
---

# Upload Your First Model

**Upload a model from Hugging Face to the Clarifai platform**
<hr />

The Clarifai platform allows you to upload custom models for a wide range of use cases. With just a few simple steps, you can get your models up and running and leverage the platform’s powerful capabilities.

Let's demonstrate how you can upload the [Llama-3-8B-Instruct](https://github.com/Clarifai/examples/tree/main/models/model_upload/llms/llama-3-8b-instruct) model from Hugging Face to the Clarifai platform.

:::tip

To learn more about how to upload different types of models, check out other comprehensive guides [here](https://docs.clarifai.com/compute/models/model-upload/) and [here](https://github.com/Clarifai/examples/tree/main/models/model_upload). 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.txt";

## Step 1: Perform Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set a PAT Key

You need to set the `CLARIFAI_PAT` (Personal Access Token) as an environment variable. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform.

<Tabs>
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

### Get a Hugging Face Access Token

To download models from the Hugging Face platform, you'll need to authenticate your connection. You can create a Hugging Face account, then generate an access token to authorize your downloads. 

You can follow the step-by-step guide [here](https://huggingface.co/docs/hub/en/security-tokens) to get it.

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
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{RequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

### `config.yaml`

:::info important

In the `model` section of the `config.yaml` file, specify your model ID, Clarifai user ID, and Clarifai app ID. These will define where your model will be uploaded on the Clarifai platform. You also need to specify the `hf_token` to authenticate your connection to Hugging Face, as [described](#get-a-hugging-face-access-token) earlier.

:::

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigFile}</CodeBlock>
</TabItem>
</Tabs>

## Step 3: Upload the Model

Once your custom model is ready, upload it to the Clarifai platform by navigating to the directory containing the model and running the following command:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>

Congratulations — you've just uploaded your first model to the Clarifai platform!

Now, you can [deploy](https://docs.clarifai.com/compute/deployments/deploy-model) the model to a cluster and nodepool. This allows you to cost-efficiently and scalably make [inferences](https://docs.clarifai.com/compute/models/model-inference) with it. 