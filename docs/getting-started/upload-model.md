---
description: Build and upload your first custom model to the Clarifai platform
sidebar_position: 5
---

# Build and Upload a Model

**Quickly build and upload your first custom model to Clarifai platform**
<hr />

The Clarifai platform allows you to upload custom models for a wide range of use cases. With just a few simple steps, you can get your models up and running and leverage the platform’s powerful capabilities.

Let’s walk through how to build and upload a simple custom model.

<!--You can test the already uploaded model [here](https://clarifai.com/alfrick/docs-demos/models/my-first-model).-->

:::note

- To learn more about how to upload different types of models, check out [this comprehensive guide](https://docs.clarifai.com/compute/models/upload/). 
- Uploading models to the Clarifai platform requires a [paid plan](https://www.clarifai.com/pricing).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.txt";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.py";
import NodeSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.js";
import BuildLogsExample from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-build-logs.txt";

## Step 1: Perform Prerequisites

### Sign Up or Log In 

To get started, [log in to](https://clarifai.com/login) your existing Clarifai account or [sign up](https://clarifai.com/signup) for a new one. If you're creating a new account, a default application will be automatically generated for you.

Next, retrieve the following credentials:

- **App ID** – Navigate to your application’s page and select the [**Overview**](https://docs.clarifai.com/create/applications/manage#app-overview) option in the collapsible left sidebar. Get the app ID from there. 
- **User ID** – Navigate to **Settings** in the collapsible left sidebar and select the **Account** option. Then, copy your user ID from that page. 
- **PAT** – From the same **Settings** menu, go to the **Secrets** page to generate or copy your [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat). This token is used to authenticate your connection with the Clarifai platform.

You need to set the `CLARIFAI_PAT` you've retrieved as an environment variable. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK. This also installs the Clarifai [Command Line Interface (CLI)](https://docs.clarifai.com/additional-resources/api-overview/cli), which we'll use for uploading the model.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>


### Set Up Cluster and Nodepool

Setting up a [cluster and nodepool](https://docs.clarifai.com/compute/deployments/clusters-nodepools) creates the dedicated compute environment your model needs to run reliably and efficiently.

After uploading your model to the Clarifai platform, you'll need to deploy it to the already created compute environment.

> **Note:** A cluster forms the foundation of your compute environment, while a nodepool is a single compute node or a group of compute nodes within that cluster that provides the resources required to run your model.

You can learn how to set up your compute environment fast [here](https://docs.clarifai.com/getting-started/set-up-compute).


## Step 2: Create Files

:::tip

You can automatically generate the required files by running the [`clarifai model init`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-model-init) command in the terminal from your current directory. After the files are created, you can modify them as needed.

:::

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

In the `model` section of the `config.yaml` file, specify a unique model ID (any arbitrary name you choose), along with the Clarifai user ID and app ID you retrieved [earlier](#sign-up-or-log-in). These values determine the destination where your model will be uploaded on the Clarifai platform.

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
    <CodeBlock className="language-bash">clarifai model upload</CodeBlock>
</TabItem>
</Tabs>

## Step 4: Deploy the Model

Once your model is successfully uploaded to the Clarifai platform, the terminal will guide you through the deployment process to prepare your model for inference.

Follow the on-screen prompts to:

- Choose an existing cluster and nodepool where your model will run.

- Provide the deployment configuration, including the minimum and maximum number of [replicas](https://docs.clarifai.com/compute/deployments/deploy-model#model-replica) to manage your model’s scalability. Take note of the created `deployment_id`.

> **Note:** Once the setup is complete, you can backtrack to modify these configurations or clean up the deployment resources at any time.

<details>
  <summary>Build Logs Example</summary>
    <CodeBlock className="language-text">{BuildLogsExample}</CodeBlock>
</details>

## Step 5: Predict With Model

Once your model is successfully deployed, you can start making predictions with it. You can also test it directly in the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground).

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
<!--
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeSDKRequest}</CodeBlock>
</TabItem>
-->
</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">Yes, I uploaded it!  Hello World 0
Yes, I uploaded it!  Hello World 1
Yes, I uploaded it!  Hello World 2
Yes, I uploaded it!  Hello World 3
Yes, I uploaded it!  Hello World 4</CodeBlock>
</details>


**Congratulations!**

You've successfully uploaded your first model to the Clarifai platform and run inference with it!

