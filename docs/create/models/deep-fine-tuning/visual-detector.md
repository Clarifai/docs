---
description: Learn about our visual detector model type
sidebar_position: 3
---

# Visual Detector

**Learn about our visual detector model type**
<hr />

**Input**: Images and videos

**Output**: Regions

Visual detector, also known as object detection, is a type of deep fine-tuned model designed to identify and locate objects within images or video frames. It goes beyond simple image classification, where the goal is to assign a single label to an entire image.

Instead, an object detection model can identify multiple objects of different classes within an image and provide their corresponding bounding box coordinates. They help answer the question "Where" are objects in your data. 

The primary task of a visual detector model is twofold:

- **Object localization**: The model identifies the location of objects within an image by predicting bounding box coordinates that tightly enclose each object.
- **Object classification**: The model classifies each detected object into one of several predefined classes or categories.

:::info

The visual detector model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-detection-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual detector models have a wide range of applications, including:

- **Object detection**: This is the task of identifying and localizing objects in images. Visual detector models are used in a variety of applications, such as self-driving cars, security cameras, and robotics.
- **Image classification**: This is the task of classifying images into categories, such as "dog," "cat," or "tree." Visual detector models can be used to improve the accuracy of image classification models by providing them with information about the objects that are present in the image.
- **Visual tracking**: This is the task of tracking the movement of objects in images or videos. Visual detector models can be used to initialize visual trackers by identifying the objects that they need to track.

You may choose the visual detector model type in cases where:

- You want to detect and localize objects within an image, and accuracy and the ability to carefully target solutions take priority over speed and ease of use.
- You need a detection model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset with bounding box annotations for objects, and the expertise and time to fine-tune models.

## Example Use Case

A roofing company wants to provide insurance companies and customers with a consistent way of evaluating roof damage. This company captures images of roofs with a drone, and then feeds the images into a detection model. The detection model can then locate and classify specific areas of damage on the roofs.

##  Create and Train a Visual Detector

Let's demonstrate how to create and train a visual detector model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/create_app.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/data_upload.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/mt.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/mc.py";
import CodeTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/ts.py";
import CodeS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/setup.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_detector/mp.py";
import CodeTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/train_eval.py";
import CodeTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/test_eval.py";
import CodeCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/cmp.py";


import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_detector/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_detector/ts.txt";
import CodeOutputS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_detector/setup.txt";
import CodeOutputTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/outputs/train_eval.txt";
import CodeOutputTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/outputs/test_eval.txt";
import CodeOutputCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_detector/outputs/cmp.txt";


### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
</TabItem>
</Tabs>



### Step 2: Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_detection).


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


Next, let's select the `visual-detector` model type and use it to create a model.  


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>


### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>

Next, let's choose the `'MMDetection_SSD'` template to use for training our model, as demonstrated below.

### Step 5: Set Up Model Parameters

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

### Step 6: Initiate Model Training

To initiate the model training process, call the `model.train()` method. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.


:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/vd_imt.png" />
</details>


### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>


<details>
  <summary>Image Output</summary>
    <img src="/img/python-sdk/vd_mp.png" />
</details>


### Step 8: Model Evaluation

Let’s evaluate the model using both the training and test datasets. We’ll start by reviewing the evaluation metrics for the training dataset.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>

Before evaluating the model on the test dataset, ensure it is uploaded using the data loader. Once uploaded, proceed with the evaluation.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>

Finally, to gain deeper insights into the model’s performance, use the `EvalResultCompare` method to compare results across multiple datasets.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>