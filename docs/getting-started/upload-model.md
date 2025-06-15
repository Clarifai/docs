---
description: Upload a custom model to the Clarifai platform
sidebar_position: 3
---

# Upload Your First Model

**Upload a custom model to the Clarifai platform**
<hr />

The Clarifai platform allows you to upload custom models for a wide range of use cases. With just a few simple steps, you can get your models up and running and leverage the platform’s powerful capabilities.

Let’s walk through how to upload a simple custom model that appends the phrase `Hello World` to any input text.

<!--You can test the already uploaded model [here](https://clarifai.com/alfrick/docs-demos/models/my-first-model).-->

:::tip

To learn more about how to upload different types of models, check out [this comprehensive guide](https://docs.clarifai.com/compute/models/upload/). 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.txt";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.py";
import NodeSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.js";

## Step 1: Perform Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Set a PAT Key

You need to set the `CLARIFAI_PAT` (Personal Access Token) as an environment variable. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform.

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

<!--
### Get a Hugging Face Access Token

To download models from the Hugging Face platform, you'll need to authenticate your connection. You can create a Hugging Face account, then generate an access token to authorize your downloads. 

You can follow the guide [here](https://huggingface.co/docs/hub/en/security-tokens) to get it.
-->

## Step 2: Create Files

Create a project directory and organize your files as indicated below to fit the requirements of uploading models to the Clarifai platform. 

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

- **your_model_directory/** – The root directory containing all files related to your custom model.
  - **1/** – A subdirectory that holds the model file (_Note that the folder is named as **1**_).
    - **model.py** – Contains the code that defines your model, including running inference.
  - **requirements.txt** – Lists the Python dependencies required to run your model.
  - **config.yaml** – Contains metadata and configuration settings, such as compute requirements, needed for uploading the model to Clarifai.



Add the following snippets to each of the respective files. 

### `model.py`

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

### `requirements.txt`

<Tabs groupId="code">
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{RequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

### `config.yaml`

:::info important

In the `model` section of the `config.yaml` file, specify your model ID, Clarifai user ID, and Clarifai app ID. These will define where your model will be uploaded on the Clarifai platform. 

:::

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigFile}</CodeBlock>
</TabItem>
</Tabs>

## Step 3: Upload the Model

Once your custom model is ready, upload it to the Clarifai platform by navigating to the directory containing the model and running the following command:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>

## Step 4: Predict With Model

Once your model is successfully uploaded to Clarifai, you can start making predictions with it.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeSDKRequest}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">Yes, I uploaded it! Hello World</CodeBlock>
</details>


**Congratulations!**

You've successfully uploaded your first model to the Clarifai platform and run inference with it!


:::tip

In this example, we used the default deployment setting (`Clarifai Shared`). To learn how to leverage our Compute Orchestration capabilities for scalable and cost-efficient inference across various use cases, [click here](https://docs.clarifai.com/compute/models/inference/api/).

:::

