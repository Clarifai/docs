---
description: Learn about our visual classifier model type
sidebar_position: 2
keywords: [AI visual classifier, image classification, visual classification models, machine learning image classifier, computer vision image classification, visual classification AI]
---

# Visual Classifier 

**Learn about our visual classifier model type**
<hr />

**Input**: Images and videos

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts)

Visual classifier is a type of deep fine-tuned model that allows you to classify images and video frames into a set of concepts. It helps you answer the question "What" or "Who" is in your data.

:::info

The visual classifier model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates/) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual classifiers are commonly used for various computer vision tasks, such as:

- **Image classification**: Categorizing images into different concepts, such as "cat", "dog", "car", or "person".
- **Object detection**: Finding and identifying objects in images, such as faces, cars, or traffic signs.
- **Scene recognition**: Identifying the scene in an image, such as a beach, a forest, or a city.
- **Video analysis**: Tracking objects and events in videos.

You may choose a visual classifier model type in cases where:

- Accuracy and the ability to carefully target solutions take priority over speed and ease of use.
- You need a classification model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example Use Case

A large retailer is looking to find and remove listings for illegal objects and substances across thousands of listings that include user-generated data. A classification model allows the retailer to quickly find listings that violate their community rules, and remove them from the site.

##  Create and Train a Visual Classifier

Let's demonstrate how to create and train a visual classifier model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/create_app.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/dataset_upload.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/model_type.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/model_creation.py";
import CodeTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/template_selection.py";
import CodeS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/setup.py";
import CodeS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/setup2.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/mp.py";
import CodeTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/train_eval.py";
import CodeTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/test_eval.py";
import CodeCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/cmp.py";

import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/model_type.txt";
import CodeOutputTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/template_selection.txt";
import CodeOutputS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup.txt";
import CodeOutputS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup2.txt";
import CodeOutputIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/imt.txt";
import CodeOutputMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/mp.txt";
import CodeOutputTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/train_eval.txt";
import CodeOutputTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/test_eval.txt";
import CodeOutputCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/cmp.txt";



### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
</TabItem>
</Tabs>


### Step 2: Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_classification).

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>


### Step 3: Model Creation

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

Next, let's select the `visual-classifier` model type and use it to create a model.  


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

:::tip

[Click here](https://docs.clarifai.com/create-manage/models/deep-fine-tuning/clusterer#step-4-patch-model-optional) to learn how to patch your model. 

:::


### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>


Next, let's choose the `'MMClassification_EfficientNet' ` template to use for training our model, as demonstrated below.

### Step 5: Set Up Model Parameters

You can save the model parameters in a YAML file, which can then be passed to the model when initiating training.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

You can customize the YAML file according to your requirements and then reload it for model training.

Below is an example of the modifications made to the YAML file:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>

### Step 6: Initiate Model Training

You can initiate model training by passing the YAML configuration file as a parameter to `model.train()`. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.

:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMT}</CodeBlock>
</details>


### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
    <img src="/img/python-sdk/vc_mp.png" />
</details>


### Step 8: Model Evaluation

Let’s evaluate the model using both the training and test datasets. We’ll start by reviewing the evaluation metrics for the training dataset.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>

Before evaluating the model on the test dataset, ensure it is uploaded using the data loader. Once uploaded, proceed with the evaluation.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>

Finally, to gain deeper insights into the model’s performance, use the `EvalResultCompare` method to compare results across multiple datasets.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>
