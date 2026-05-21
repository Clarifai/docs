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

![Image classification example](/img/others-2/image_classification_example.webp)
<center>*Image classification example*</center>

Use a visual classifier when you have a labeled dataset and want a custom model fine-tuned on your own classes.

:::tip

Visual classifiers are optimized for classification tasks. If you need to locate *where* objects appear in an image, consider a [Visual Detector](visual-detector.md) instead.

:::

You can train a visual classifier two ways:

- **[Via the CLI](#via-the-cli)** — Scriptable and reproducible. Recommended for engineering workflows. Train an end-to-end model in three commands.
- **[Via the UI](#via-the-ui)** — Click-through training from the Clarifai web app. Recommended for quick experiments without writing code.

##  **Via the CLI**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

### Prerequisites

Install the Clarifai CLI and authenticate:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`pip install --upgrade clarifai
clarifai login`}</CodeBlock>
</TabItem>
</Tabs>

`clarifai login` auto-detects your user ID and saves your [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat/) locally.

### Train a Classifier (Quick Demo)

The fastest way to see a working classifier end-to-end is the [`classifier-pipeline-resnet-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/classifier-pipeline-resnet-quick-start) template. It uses a Clarifai-hosted Food-101 subset as the training dataset, with sensible defaults for every hyperparameter — so no dataset setup or `--set` flags are required.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`clarifai pipeline init --template classifier-pipeline-resnet-quick-start
cd classifier-pipeline-resnet-quick-start
clarifai pipeline upload
clarifai pipeline run --instance=g6e.xlarge`}</CodeBlock>
</TabItem>
</Tabs>

That's it. `--instance=g6e.xlarge` auto-provisions a compute cluster and nodepool — no separate setup required. The pipeline trains a ResNet-50 image classifier on the public dataset and registers the trained model in your Clarifai model registry.

### Train on Your Own Data

When you want to train a classifier on your own concepts, use the [`classifier-pipeline-resnet`](https://github.com/Clarifai/pipeline-examples/tree/main/classifier-pipeline-resnet) template with `--set` flags pointing at your uploaded dataset:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
clarifai pipeline init --template classifier-pipeline-resnet \
  --set dataset_id=your_dataset_id \
  --set dataset_version_id=your_dataset_version_id \
  --set concepts='["class1","class2","..."]'
cd classifier-pipeline-resnet
clarifai pipeline upload
clarifai pipeline run --instance=g6e.xlarge
```
</TabItem>
</Tabs>

Where:

| Parameter | Description |
|---|---|
| `--set dataset_id` | The ID of the dataset to train on |
| `--set dataset_version_id` | The specific version of the dataset |
| `--set concepts` | A JSON array of the concept labels |

To upload a dataset first, see the [Datasets documentation](https://docs.clarifai.com/create/datasets/). For all other init-time overrides (hyperparameters, base model, etc.), see the [Pipeline Templates reference](https://docs.clarifai.com/compute/pipelines/templates).

### Monitor and Use the Trained Model

* **Monitor the run** — see [Manage Pipeline Runs](https://docs.clarifai.com/compute/pipelines/manage-run).
* **Deploy and run inference on the trained model** — see [Inference](https://docs.clarifai.com/compute/inference/).
* **Author a custom pipeline from scratch in Python** — see the [Pipeline DSL reference](https://docs.clarifai.com/compute/pipelines/dsl-reference).

##  **Via the UI**

Let’s walk through how to create and train a visual classifier model using the UI.

### Step 1: Create an App

Create an application to store and manage your model and its associated resources (such as datasets, pipelines, and deployments). You can follow [this guide](https://docs.clarifai.com/create/applications/create/) to set one up.

> **Note:** When creating the application, select the default **Image/Video** option as the primary input type.

### Step 2: Prepare Training Data

Preparing your data is a critical step in training a model. High-quality, well-structured data helps your model learn effectively, generalize to new inputs, and produce reliable predictions.

Make sure your dataset is:

* **Clean and accurate** — free from labeling errors
* **Diverse** — covers different variations of your target classes
* **Sufficient in size** — enough examples for the model to learn meaningful patterns

> **Tip:** You can organize your dataset using any spreadsheet tool. [Download a CSV template](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv) to get started.

For this example, we’ll use the [Beans Dataset](https://huggingface.co/datasets/AI-Lab-Makerere/beans) from Hugging Face, which contains images of healthy and diseased bean leaves.

:::info objective

Based on the selected dataset, we will train a model to classify leaf images into three categories: `Angular Leaf Spot`, `Bean Rust`, or `Healthy`.

:::

 
### Step 3: Add and Annotate Inputs

To [add inputs](https://docs.clarifai.com/create/inputs/upload/ui) to your app, open the collapsible left sidebar and select the **Inputs** option.

Click the **Upload Inputs** button in the upper-right corner, then use the uploader pop-up to select and upload your data.

As you upload, assign each input category to a [dataset](https://docs.clarifai.com/create/datasets/create/) and [label](https://docs.clarifai.com/create/labeling/ui/create) them with their appropriate concepts. Ensure that all labeled inputs are added to the same dataset.

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

The ensuing page allows you to review the model training configuration and begin the training process.

#### Select Training Template

The training template you selected previously will be displayed for you. Otherwise, you can click the **Change** button to change to another training pipeline.

![](/img/community_2/my-deep-training-5.png)

#### Select Nodepool Instance

Choose the nodepool that will be used to train your model.

Select the **Choose an instance** option to open a selection window, where you can pick from existing or recommended nodepools based on your training requirements.

Choose your preferred nodepool, then click **Save Changes** to apply your selection.

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

To access it, select the **Models** option from the collapsible left sidebar. This opens the models listing page.

![](/img/community_2/my-deep-training-10.png)

Click the listed model to open its individual page. 

![](/img/community_2/my-deep-training-11.png)

Next, click the **Deploy Model** button to [create a deployment](https://docs.clarifai.com/compute/deployments/deploy-model). This sets up the compute resources needed to run inference.

After deployment, click the **Try Model** button in the upper-right corner to open the [Playground](https://docs.clarifai.com/getting-started/playground), where you can submit inputs and get predictions.

![](/img/community_2/my-deep-training-12.png)

For this tutorial, uploading an image of a bean leaf will return classifications such as `Angular Leaf Spot`, `Bean Rust`, or `Healthy`, along with their prediction probabilities.

That’s it!


<!--

## THE FOLLOWING USES THE OLD METHOD FOR TRAINING MODELS

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
-->

<!--
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
-->

<!--
### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>
-->

<!--
Next, let's choose the `'MMClassification_EfficientNet' ` template to use for training our model, as demonstrated below.

### Step 5: Set Up Model Parameters

You can save the model parameters in a YAML file, which can then be passed to the model when initiating training.
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>
-->

<!--
You can customize the YAML file according to your requirements and then reload it for model training.

Below is an example of the modifications made to the YAML file:
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>
-->

<!--
### Step 6: Initiate Model Training

You can initiate model training by passing the YAML configuration file as a parameter to `model.train()`. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.

:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::
-->

<!--
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
-->

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>


<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>



<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainModel}</CodeBlock>
</TabItem>




<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMT}</CodeBlock>
</details>
-->

<!--
### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.
-->

<!--
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
-->

<!--
### Step 8: Model Evaluation

Let’s evaluate the model using both the training and test datasets. We’ll start by reviewing the evaluation metrics for the training dataset.
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>
-->
<!--
Before evaluating the model on the test dataset, ensure it is uploaded using the data loader. Once uploaded, proceed with the evaluation.
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>
-->

<!--
Finally, to gain deeper insights into the model’s performance, use the `EvalResultCompare` method to compare results across multiple datasets.
-->

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>
-->