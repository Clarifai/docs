---
description: Train an image classification model using a pipeline template
sidebar_position: 2
toc_max_heading_level: 4
---

# Visual Classifier

**Train an image classification model using a pipeline template**
<hr />

**Input**: Images and videos

**Output**: [Concepts](https://docs.clarifai.com/create/concepts/) 

A visual classifier is a deep fine-tuned model that categorizes images and video frames into a set of predefined concepts. It answers the question *"What is in this image?"* or *"Who is in this image?"*

For example, it can be used to categorize images into concepts such as "cat", "dog", or "vehicle".

:::note pipeline template

A pipeline template is a pre-configured workflow that defines how a model is trained, evaluated, and deployed.

It is built on top of [Clarifai Pipelines](https://docs.clarifai.com/compute/pipelines/), which are the underlying system that orchestrates a sequence of steps (nodes) such as data processing, training, and evaluation. The template simply provides a ready-made, opinionated setup of these pipelines for a specific use case.

Instead of building everything from scratch, a pipeline template gives you a ready-made structure with:

* **Predefined steps** (e.g., data loading, preprocessing, training, evaluation)
* **Default configurations** (such as model architecture and training logic)
* **Tunable parameters** (hyperparameters you can adjust to fit your use case)

In practical terms, it acts as a blueprint for your training process.

For example, when you select the [`classifier-pipeline-resnet`](#select-training-template) template, you're choosing:

* A pipeline designed for image classification
* A ResNet-based model architecture
* A sequence of steps already wired together using Clarifai Pipelines to train on labeled image data

:::

![Image classification example](/img/others-2/image_classification_example.webp)
<center>*Image classification example*</center>


You may choose a visual classifier model type in cases where:

- **Accuracy takes priority** — you need a carefully targeted solution rather than a fast, general-purpose one.
- **Your data is unique** — existing Clarifai models don't recognize the features in your dataset, and you need to deep fine-tune a custom model integrated into your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- **You have the right ingredients** — a custom dataset, accurate labels, and the time and expertise to fine-tune.

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

Select the `classifier-pipeline-resnet` template. This is a ResNet-based image classification pipeline designed for training models on labeled image datasets.

### Step 6: Configure Training Settings

The ensuing page allows you to review the model training configuration and submit to begin the training pipeline.

#### Select Training Template

The training template you selected previously will be displayed for you. Otherwise, you can click the **Change** button to change to another training pipeline.

![](/img/community_2/my-deep-training-5.png)

#### Select Nodepool Instance

Choose the nodepool that will be used to train your model.

Click the **Choose an instance** button to open a selection window, where you can pick from existing or recommended nodepools based on your training requirements.

Select your preferred nodepool, then click **Save Changes** to apply your selection.

![](/img/community_2/my-deep-training-6.png)

The selected nodepool will be displayed for you.

![](/img/community_2/my-deep-training-7.png)

Learn more about selecting a nodepool instance [here](https://docs.clarifai.com/compute/deployments/deploy-model#step-3-select-a-nodepool).

#### Set Training Settings

Configure the training settings for your model:

![](/img/community_2/my-deep-training-7-1.png)


- **Model ID** — Set a unique ID for the model that will be created after it is trained. 
- **Dataset** — Select the dataset from which inputs will be used for this pipeline. For this tutorial, let's select the dataset we previously created containing the bean leaf images.
- **Dataset Version** — Select which version of the dataset to use for training. You must select a dataset first before this option becomes available.
- **Training Concepts** — Select the list of concepts you want the model to predict from the existing concepts labeled with your inputs. For this tutorial, let's pick these concepts: `Angular Leaf Spot`, `Bean Rust`, and `Healthy`.
- **Training Epochs** — Set how many times the model will see the entire dataset. More epochs can lead to better accuracy but take longer. The default value is `25`.

#### Configure Template

Each training template includes a set of configurable hyperparameters that control how the model is trained.

You can adjust these settings based on your dataset and performance goals. However, for this tutorial, we’ll use the default values provided by the `classifier-pipeline-resnet` template.

![](/img/community_2/my-deep-training-8.png)

These are the settings you can configure:

* **Batch Size** — Number of samples processed per training step. Default: `64`.
* **Image Size** — Size (in pixels) to which input images are resized (square). Default: `224`.
* **Per Item Lrate** — Learning rate applied per training sample. Default: `0.00001953125`.
* **Weight Decay** — Regularization factor to prevent overfitting. Default: `0.01`.
* **Per Item Min Lrate** — Minimum learning rate per sample during training. Default: `1.5625e-8`.
* **Warmup Iters** — Number of initial iterations used to gradually increase the learning rate. Default: `5`.
* **Warmup Ratio** — Starting ratio of the learning rate during warmup. Default: `0.0001`.
* **Flip Probability** — Chance of randomly flipping images during training (data augmentation). Default: `0.5`.
* **Flip Direction** — Direction used when flipping images. Default: `horizontal`.
* **Concepts Mutually Exclusive** — Whether each input can belong to only one concept (mutually exclusive) or multiple concepts at the same time. Default: `disabled`.
* **Pretrained Weights** — Source of initial model weights for transfer learning. Default: `ImageNet-1k`.
* **Seed** — Random seed used to initialize training (set `-1` for random behavior). Default: `-1`.

### Step 7: Train the Model​

After configuring the training settings, click the **Train Model** button to start training your model using the selected pipeline.

You’ll be redirected to the **Pipeline Version Runs** page, where you can monitor the training job in real time and track how the pipeline executes.

![](/img/community_2/my-deep-training-9-1.png)

On this page, you can:

* **Monitor run status** — Track the current state of the pipeline:
  * `RUNNING`: The training job is in progress. While the job is running, you can pause or stop it.
  * `COMPLETED`: The training finished successfully
  * `FAILED`: The training did not complete successfully (check logs for details)
* **View run details** — See key information such as the start time and total run duration.
* **Inspect infrastructure** — View where the job is running, including the cloud provider, region, compute instance type, and allocated resources.
* **Follow pipeline execution** — The training runs as an [Argo Workflow](https://docs.clarifai.com/compute/pipelines/create-api#argo-workflow-definition), which breaks the process into steps. You can track the step-by-step execution of the pipeline in real time.
* **Explore logs and nodes** — The logs panel displays detailed, JSON-like output, including a list of nodes (pipeline steps such as data loading, training, and evaluation). Each node includes metadata like its ID, type (e.g., `Steps`, `Pod`), and current status.
* **Reload logs** — Click the **Reload** button to refresh and view the latest logs.
* **Run a new job** — Click **Run Pipeline Version** to launch another training run. You’ll be prompted to select a cluster and nodepool before starting.
 
### Step 8: Use the Model​

Once your model has been trained successfully, you can start using it for predictions.

To access it, go to the **Models** section from the left sidebar and select your model from the list. This opens the models listing page.

![](/img/community_2/my-deep-training-10.png)

Click the listed model to open its individual page. 

![](/img/community_2/my-deep-training-11.png)

Next, click the **Deploy Model** button to [create a deployment](https://docs.clarifai.com/compute/deployments/deploy-model). This sets up the compute resources needed to run inference.

After deployment, click the **Try Model** button in the upper-right corner to open the [Playground](https://docs.clarifai.com/getting-started/playground), where you can submit inputs and get predictions.

![](/img/community_2/my-deep-training-12.png)

For this tutorial, uploading an image of a bean leaf will return classifications such as `Angular Leaf Spot`, `Bean Rust`, or `Healthy`, along with their prediction probabilities.

That’s it!

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
