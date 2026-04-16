---
description: Train an image classification model using a pipeline template
sidebar_position: 2
---

# Visual Classifier

**Train an image classification model using a pipeline template**
<hr />

**Input**: Images and videos

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts) 

A visual classifier is a deep fine-tuned model that categorizes images and video frames into a set of predefined concepts. It answers the question *"What is in this image?"* or *"Who is in this image?"*

![Image classification example](/img/others-2/image_classification_example.webp)
<center>*Image classification example*</center>


You may choose a visual classifier model type in cases where:

- **Accuracy takes priority** — you need a carefully targeted solution rather than a fast, general-purpose one.
- **Your data is unique** — existing Clarifai models don't recognize the features in your dataset, and you need to deep fine-tune a custom model integrated into your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- **You have the right ingredients** — a custom dataset, accurate labels, and the time and expertise to fine-tune.

Visual classifiers are commonly used for various computer vision tasks, such as:

- **Image classification** — categorize images into concepts such as "cat", "dog", or "vehicle".
- **Scene recognition** — identify the setting in an image, such as a beach, forest, or urban street.
- **Video analysis** — track objects and events across video frames.
- **Content moderation** — a large retailer, for example, can use a classification model to automatically flag and remove listings for prohibited items across thousands of user-generated posts.

:::tip

Visual classifiers are optimized for classification tasks. If you need to locate *where* objects appear in an image, consider a [Visual Detector](visual-detector.md) instead.

:::


##  **Via the UI**

Let’s walk through how to create and train a visual classifier model using the UI.

### Step 1: Prepare Training Data

Preparing your data is a critical step in training a model. High-quality, well-structured data helps your model learn effectively, generalize to new inputs, and produce reliable predictions.

Make sure your dataset is:

* **Clean and accurate** — free from labeling errors
* **Diverse** — covers different variations of your target classes
* **Sufficient in size** — enough examples for the model to learn meaningful patterns

> **Note:** You can organize your dataset using any spreadsheet tool. [Download a CSV template](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv) to get started.

For this example, we’ll use the [Beans Dataset](https://huggingface.co/datasets/AI-Lab-Makerere/beans) from Hugging Face, which contains images of healthy and diseased bean leaves.

:::info objective

Based on the selected dataset, we will train a model to classify leaf images into three categories: `Angular Leaf Spot`, `Bean Rust`, or `Healthy`.

:::


### Step 2: Create an App

Create an application to store and manage your model and its associated resources. You can follow [this guide](https://docs.clarifai.com/create/applications/create/) to set one up.

> **Note:** When creating the application, select the default **Image/Video** option as the primary input type.
 
### Step 3: Add and Annotate Inputs

To [add inputs](https://docs.clarifai.com/create/inputs/upload/ui) to your app, open the collapsible left sidebar and select the **Inputs** option.

Click the **Upload Inputs** button in the upper-right corner, then use the uploader pop-up to select and upload your data.

As you upload, assign each input category to a [dataset](https://docs.clarifai.com/create/datasets/create/) and [label](https://docs.clarifai.com/create/labeling/ui/create) them with their appropriate concept. Ensure that all labeled inputs are added to the same dataset.

![](/img/community_2/my-deep-training-1.png)

Once done, click the **Upload Inputs** button to add the annotated images to your app.

> **Note:** For this tutorial, upload the three image categories to the same dataset, labeling each with its corresponding concept:
>
> * `Angular Leaf Spot`
> * `Bean Rust`
> * `Healthy`


:::caution refresh your dataset

After uploading all the inputs, [refresh your dataset](https://docs.clarifai.com/create/datasets/create/#create-dataset-version) and create a new version to reflect the changes.

:::


### Step 4: Create a Cluster and Nodepool

To run and train your model, you’ll need to set up a cluster and nodepool with the appropriate compute resources.

Start by [creating a cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools) that supports GPU-enabled workloads, as GPUs are required for efficient training and inference of vision models.

Next, create a nodepool within the cluster and select a GPU-backed instance that matches your performance and budget needs.

> **Note:** GPU support is essential for this tutorial. Ensure that the selected nodepool is configured with a compatible GPU instance to avoid performance issues or failed training runs.

### Step 5: Choose a Training Template

Select the **Models** option in your app’s collapsible left sidebar. On the ensuing page for listing models, click the **Add a Model** button.

![](/img/community_2/my-deep-training-3.png)

In the window that pops up, select the **Train a Model** option.

![](/img/community_2/my-deep-training-3-1.png)

You’ll be redirected to a page listing available pipeline training templates. These templates provide pre-configured workflows to help you quickly get started with different types of models.

![](/img/community_2/my-deep-training-4.png)

Select the **classifier-pipeline-resnet** template. This is a ResNet-based image classification pipeline designed for training models on labeled image datasets.

### Step 6: Train the Model

The ensuing page allows you to review the model training configuration and submit to begin the training pipeline.

#### Select Training Template

The training template you selected previously will be displayed for you. Otherwise, you can click the **Change** button to change to another training pipeline.

#### Select Nodepool Instance

Select a nodepool instance to use for training the model. 

If you click the **Choose an instance** button, a small window will pop up that allows you to choose an existing or recommended nodepool that best fits your deployment needs.

You can learn more how to choose a nodepool here

> **Note:** After choosing a nodepool instance, you can use go ahead and click the **Train Model** button at the bottom of the page to initiate training. That would use the rest of the default settings. Or, you can proceed to set the rest of the settings to meet your needs. 

#### Set Training Settings

![](/img/community_2/my-deep-training-5.png)

After creating the model, set it up for training. 

![](/img/community_2/my-deep-training-6.png)

- **Dataset** — Select the dataset you previously created that has the images of the dogs and cats. You can also select [a specific version](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#update-a-dataset-version) for it. 
- **Concepts** — Select the list of concepts you want the model to predict from the existing concepts in your app. For this example, let's select "cat" and "dog."
- **Invalid Data Tolerance Percent** — Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error.
- **Template** — Select a pre-configured model template you want to use to fine-tune your model. When you choose a deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired. For this example, we’ll go with the recommended template: `MMClassification_ResNet_50_RSB_A1`. [Click here](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates) to learn more about the visual classification templates. 


:::note

Notice that the estimated duration for the training process is displayed for you. This [Training Time Estimator](https://docs.clarifai.com/create/models/deep-fine-tuning/#training-time-estimator) feature offers transparency in expected training costs.

:::

### Step 7: Train the Model​

After configuring the training settings, click the **Train Model** button to initiate training your model. 

You'll be redirected to the individual page of your model. 

![](/img/community_2/my-deep-training-7.png)

If you check the [model's versions table](https://docs.clarifai.com/portal-guide/model-versions/#model-versions-table), you’ll notice that the model is still being trained. 

Many hours may be required to deep train models with large numbers of inputs and complex taxonomies. You can cancel a deep fine-tuning job at any time by clicking the **Cancel training** button. 



![](/img/community_2/my-deep-training-7-1.png)

### Step 8: Use the Model​

After the model has been trained, the status will change to **Model Trained**.

In the **Actions** column, you can carry out the following:

- Copy the model version ID
- View the model in the [leaderboard](https://docs.clarifai.com/portal-guide/evaluate/leaderboard/)
- View the [model version details](https://docs.clarifai.com/portal-guide/model-versions/)
- Download the training log data
- Delete the model version

![](/img/community_2/my-deep-training-8.png)

Once you've created and trained your new model, you can put it to work. It will be ready to be [evaluated](https://docs.clarifai.com/portal-guide/evaluate/), combined with other models and [agent operators](https://docs.clarifai.com/portal-guide/model/agent-system-operators/) in a workflow, or used to serve [inference](https://docs.clarifai.com/portal-guide/ppredict) requests as it is.

That's it!

##  **Via the API**

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

import PythonCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.py";
import JSCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.html";
import NodeCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.js";
import JavaCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.java";
import PHPCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.php";
import CurlCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.sh";

import PythonTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.py";
import JSTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.html";
import NodeTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.js";
import JavaTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.java";
import PHPTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.php";
import CurlTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.sh";

### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
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

Next, let's select the `visual-classifier` model type and use it to create a model.  


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCreateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>
</Tabs>

### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.


<Tabs groupId="code">
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

<Tabs groupId="code">
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

<Tabs groupId="code">
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

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMT}</CodeBlock>
</details>


### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs groupId="code">
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

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>

Before evaluating the model on the test dataset, ensure it is uploaded using the data loader. Once uploaded, proceed with the evaluation.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>

Finally, to gain deeper insights into the model’s performance, use the `EvalResultCompare` method to compare results across multiple datasets.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>
