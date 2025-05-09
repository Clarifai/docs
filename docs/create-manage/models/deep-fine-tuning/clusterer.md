---
description: Learn about our clusterer model type
sidebar_position: 7
---

# Clusterer 

**Learn about our clusterer model type**
<hr />

**Input**: Images and videos

**Output**: Clusters

Clusterer is a type of deep fine-tuned model designed to identify and group similar images or video frames within a dataset. The primary goal of clustering is to discover patterns or relationships among data points based on their inherent characteristics or features, without requiring explicit labels or predefined categories.

Cluster models are often used in conjunction with embedding models to perform visual searches. This is done by first using an embedding model to represent each image as a vector in a lower-dimensional space. The cluster model then uses the mathematical structure of this space to determine which images are "clustered together."

The cluster model type can be used in a wide range of applications, including:

- **Customer segmentation in marketing**: Cluster models can be used to group customers with similar purchasing behaviors, demographics, or preferences.
- **Anomaly detection in network security**: Cluster models can identify unusual patterns in network traffic data, helping detect potential security threats or cyberattacks. Unusual clusters can indicate unauthorized access or malicious activity.
- **Document clustering in natural language processing**: In textual data analysis, cluster models can group similar documents based on their content. This aids in tasks like topic modeling, content summarization, and document organization.

You may choose a visual classifier model type in cases where:

- You want to perform visual searches accurately, quickly, and easily. Cluster models and embedding models do not require any labels or custom concepts to be trained. This makes them much more scalable and flexible than traditional methods for visual search, which often require a large amount of labeled data to train.
- You need a cluster model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example Use Case

If you want to find all images of cats in your dataset, you can simply use the cluster model to find all images that are clustered together with the embedding of a cat image.

## Train Cluster Model

Let's demonstrate how to train a clustering model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/ac.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/du.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/mt.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/mc.py";
import CodeS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/s.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/mp.py";
import PatchModel from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/clusterer/patch_model.py";

import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/clusterer/mt.txt";
import CodeOutputS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/clusterer/s.txt";
import CodeOutputMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/clusterer/mp.txt";


### App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
</TabItem>
</Tabs>

### Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/data).

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>

### Model Creation

Let's list all the available trainable model types in the Clarifai platform. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>

</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>

Next, let's select the `clusterer` model type and use it to create a model.  

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>



### Patch Model

After creating a model, you can perform patch operations on it by merging, removing, or overwriting data. By default, all actions support overwriting, but they handle lists of objects in specific ways. 

- The `merge` action updates a `key:value` pair with `key:new_value` or appends to an existing list. For dictionaries, it merges entries that share the same `id` field.
- The `remove` action is only used to delete the model's cover image on the platform UI.
- The `overwrite` action completely replaces an existing object with a new one.

Below is an example of performing patch operations on a model, such as updating its description and notes. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PatchModel}</CodeBlock>
</TabItem>
</Tabs>

### Set Up Model Parameters

You can customize the model parameters as needed before starting the training process.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

### Initiate Model Training

To initiate the model training process, call the `model.train()` method. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.

:::note

If the training status code returns `MODEL-TRAINED`, it means the model has successfully completed training and is ready for use.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>



### Model Prediction

After the model is trained and ready to use, you can run some predictions to evaluate its performance.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
</details>