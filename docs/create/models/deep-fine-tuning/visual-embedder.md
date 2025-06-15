---
description: Learn about our visual embedder model type
sidebar_position: 6
---

# Visual Embedder 

**Learn about our visual embedder model type**
<hr />

**Input**: Images and videos

**Output**: Embeddings

Visual embedder, also known as visual embedding, is a type of deep fine-tuned model specifically designed to generate meaningful numerical representations (embeddings) from images and video frames.

The primary goal of a visual embedder model is to transform the raw pixel values of images or video frames into a compact and high-dimensional vector. These vectors capture essential features and patterns in the visual content, enabling the model to understand and process the data in a more structured and interpretable way.

These vectors can then be used for a variety of tasks, such as:

- **Visual search**: This is the task of finding images or videos that are similar to a given query image or video. The visual embedder model can be used to create a similarity metric between images or videos, which can then be used to search for similar visual content in a vector database.
- **Training on top of them**: The visual embedder model can also be used as a starting point for training other machine learning models. For example, a model that can classify images or videos can be trained on top of the visual embedder model.

:::info

The visual embedder model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-embedding-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

:::

You may choose a visual embedder model type in cases where:

- You need a model that can accurately represent images and video frames as vectors. Once the model is trained, you can use it to embed new images or videos into vectors.
- You need an embedding model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

##  Create and Train a Visual Embedder

Let's demonstrate how to create and train a visual embedder model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/ac.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/du.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/mt.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/mc.py";
import CodeTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/ts.py";
import CodeS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/s.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_embedder/mp.py";



import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/ts.txt";
import CodeOutputS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/s.txt";
import CodeOutputMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/mp.txt";



### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
</TabItem>
</Tabs>


### Step 2: Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_classification).

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>


### Step 3: Model Creation

Let's list all the available trainable model types in the Clarifai platform.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>

Next, let's select the `visual-embedder` model type and use it to create a model.  

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>


### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>

Next, let's choose the `'Clarifai_ResNext' ` template to use for training our model, as demonstrated below.

### Step 5: Set Up Model Parameters

You can customize the model parameters as needed before starting the training process.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

### Step 6: Initiate Model Training

To initiate the model training process, call the `model.train()` method. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.


:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/ve_imt.png" />
</details>



### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
</details>
