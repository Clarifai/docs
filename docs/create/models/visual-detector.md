---
description: Train an object detection model using a pipeline template
sidebar_position: 3
toc_max_heading_level: 4
---

# Visual Detector

**Train an object detection model using a pipeline template**
<hr />

**Input**: Images and videos

**Output**: Regions

A visual detector is a deep fine-tuned model that identifies and localizes objects within images and video frames. It goes beyond image classification by answering not only *"What is in this image?"* but also *"Where is it?"*

For example, it can be used to detect and locate objects such as "car", "person", or "dog" within an image, drawing a bounding box around each identified instance.

Use a visual detector when you have a labeled dataset with bounding-box annotations and want a custom model fine-tuned on your own object classes.

:::tip

Visual detectors are optimized for detection and localization tasks. If you only need to identify *what* is in an image without locating specific objects, consider a [Visual Classifier](visual-classifier.md) instead.

:::

You can train a visual detector two ways:

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

### Train a Detector (Quick Demo)

The fastest way to see a working detector end-to-end is the [`detector-pipeline-yolof-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-yolof-quick-start) template. It uses a Clarifai-hosted public dataset as the training data, with sensible defaults for every hyperparameter — so no dataset setup or `--set` flags are required.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`clarifai pipeline init --template detector-pipeline-yolof-quick-start
cd detector-pipeline-yolof-quick-start
clarifai pipeline upload
clarifai pipeline run --instance=g6e.xlarge`}</CodeBlock>
</TabItem>
</Tabs>

That's it. `--instance=g6e.xlarge` auto-provisions a compute cluster and nodepool — no separate setup required. The pipeline trains a YOLOF object detector on the public dataset and registers the trained model in your Clarifai model registry.

### Train on Your Own Data

When you want to train a detector on your own object classes, use the [`detector-pipeline-yolof`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-yolof) template with `--set` flags pointing at your uploaded dataset:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
clarifai pipeline init --template detector-pipeline-yolof \
  --set dataset_id=your_dataset_id \
  --set dataset_version_id=your_dataset_version_id \
  --set concepts='["class1","class2","..."]'
cd detector-pipeline-yolof
clarifai pipeline upload
clarifai pipeline run --instance=g6e.xlarge
```
</TabItem>
</Tabs>

Where:

| Parameter | Description |
|---|---|
| `--set dataset_id` | The ID of the dataset to train on (with bounding-box annotations) |
| `--set dataset_version_id` | The specific version of the dataset |
| `--set concepts` | A JSON array of the object class labels |

To upload a dataset first, see the [Datasets documentation](https://docs.clarifai.com/create/datasets/). For all other init-time overrides (hyperparameters, base model, etc.), see the [Pipeline Templates reference](https://docs.clarifai.com/compute/pipelines/templates).

### Monitor and Use the Trained Model

* **Monitor the run** — see [Manage Pipeline Runs](https://docs.clarifai.com/compute/pipelines/manage-run).
* **Deploy and run inference on the trained model** — see [Inference](https://docs.clarifai.com/compute/inference/).
* **Author a custom pipeline from scratch in Python** — see the [Pipeline DSL reference](https://docs.clarifai.com/compute/pipelines/dsl-reference).

##  **Via the UI**

Let's walk through how to create and train a visual detector model using the UI.

### Step 1: Create an App

Create an application to store and manage your model and its associated resources (such as datasets, pipelines, and deployments). You can follow [this guide](https://docs.clarifai.com/create/applications/create/) to set one up.

> **Note:** When creating the application, select the default **Image/Video** option as the primary input type.

### Step 2: Prepare Training Data

Preparing your data is a critical step in training a model. For object detection, your dataset must include images with bounding box annotations that mark where each object of interest appears.

Make sure your dataset is:

* **Clean and accurate** — free from labeling errors and imprecise bounding boxes
* **Diverse** — covers different variations, scales, orientations, and backgrounds of your target objects
* **Sufficient in size** — enough annotated examples for the model to learn meaningful patterns

For this example, we'll use the [CPPE-5 (Consumer Protective Personal Equipment)](https://huggingface.co/datasets/rishitdagli/cppe-5) dataset from Hugging Face, which contains images annotated with bounding boxes for medical personal protective equipment.

You can download the dataset inputs to your local machine for use in this tutorial.

:::info objective

Based on the selected dataset, we will train a model to detect five categories of medical PPE: `Coverall`, `Face_Shield`, `Gloves`, `Goggles`, and `Mask`.

:::

### Step 3: Add and Annotate Inputs

To [add inputs](https://docs.clarifai.com/create/inputs/upload/ui) to your app, open the collapsible left sidebar and select the **Inputs** option.

Click the **Upload Inputs** button in the upper-right corner of the Inputs-Manager page. Then, use the uploader pop-up to select and upload your images. As you upload, assign them to a [dataset](https://docs.clarifai.com/create/datasets/create/).

![](/img/community_2/visual-detector-1.png)

> **Note:** For this tutorial, we’ll upload 5 images from each category in the PPE dataset. 

Once the images are uploaded, you’ll need to annotate them with bounding boxes. To do this, click an image on the Inputs-Manager page to open it in the single Input-Viewer page, where annotations can be added.

Next, select the **Bounding Box** tool from the navigation bar. For each image, draw a bounding box around every object of interest and assign the correct concept label:

* `Coverall`
* `Face_Shield`
* `Gloves`
* `Goggles`
* `Mask`

![](/img/community_2/visual-detector-2.png)


To learn more about adding detection labels in the Input-Viewer, go [here](https://docs.clarifai.com/create/labeling/ui/create#detection-for-still-images).

:::caution refresh your dataset

After completing all annotations, [refresh your dataset](https://docs.clarifai.com/create/datasets/create/#create-dataset-version) and create a new version to reflect the changes.

:::

### Step 4: Create a Cluster and Nodepool

To run and train your model, you'll need to set up a cluster and nodepool with the appropriate compute resources.

Start by [creating a cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools) that supports GPU-enabled workloads, as GPUs are required for efficient training and inference of detection models.

Next, create a nodepool within the cluster and select a GPU-backed instance that matches your performance and budget needs.

> **Note:** GPU support is essential for this tutorial. Ensure that the selected nodepool is configured with a compatible GPU instance to avoid performance issues or failed training runs.

### Step 5: Choose a Training Template

Select the **Models** option in your app's collapsible left sidebar. On the ensuing page for listing models, click the **Add a Model** button.

![](/img/community_2/visual-detector-3.png)

In the window that pops up, select the **Train a Model** option.

![](/img/community_2/visual-detector-3-1.png)

You'll be redirected to a page listing available pipeline training templates. These templates provide pre-configured workflows to help you quickly get started with different types of models.

![](/img/community_2/visual-detector-4.png)

Select the `detector-pipeline-yolof` template. This is a YOLOF-based object detection pipeline designed for training models on images with bounding box annotations.

### Step 6: Configure Training Settings

The ensuing page allows you to review the model training configuration and begin the training process.

#### Select Training Template

The training template you selected previously will be displayed for you. Otherwise, you can click the **Change** button to change to another training pipeline.

![](/img/community_2/visual-detector-5.png)

#### Select Nodepool Instance

Choose the nodepool that will be used to train your model.

Select the **Choose an instance** option to open a selection window, where you can pick from existing or recommended nodepools based on your training requirements.

Choose your preferred nodepool, then click **Save Changes** to apply your selection.

![](/img/community_2/visual-detector-6.png)

The selected nodepool will be displayed for you.

![](/img/community_2/visual-detector-7.png)

Learn more about selecting a nodepool instance [here](https://docs.clarifai.com/compute/deployments/deploy-model#step-3-select-a-nodepool).

#### Set Training Settings

Configure the training settings for your model:

![](/img/community_2/visual-detector-7-1.png)

- **Model ID** — Set a unique ID for the model that will be created after it is trained.
- **Dataset** — Select the dataset from which inputs will be used for this pipeline. For this tutorial, let's select the dataset we previously created containing the annotated PPE images.
- **Dataset Version** — Select which version of the dataset to use for training. You must select a dataset first before this option becomes available.
- **Training Concepts** — Select the list of concepts you want the model to detect from the existing concepts labeled with your inputs. For this tutorial, let's pick these concepts: `Coverall`, `Face_Shield`, `Gloves`, `Goggles`, and `Mask`.
- **Training Epochs** — Set how many times the model will see the entire dataset. More epochs can lead to better accuracy but take longer. The default value is `25`.

#### Configure Template

Each training template includes a set of configurable hyperparameters that control how the model is trained.

You can adjust these settings based on your dataset and performance goals. However, for this tutorial, we'll use the default values provided by the `detector-pipeline-yolof` template.

![](/img/community_2/visual-detector-8.png)

These are the settings you can configure:

* **Seed** — Random seed used to initialize training. Set to `-1` for non-deterministic behavior, or provide a fixed integer to make results reproducible across runs. Default: `-1`.
* **Image Size** — The size (in pixels) to which input images are resized before being fed into the model. A larger size may improve detection of small objects but increases memory usage and training time. Default: `[512]`.
* **Max Aspect Ratio** — The maximum allowed aspect ratio of an image when aspect ratio preservation is enabled. Images with a higher aspect ratio will be clamped to this value to prevent extreme distortions. Default: `1.5`.
* **Keep Aspect Ratio** — Whether to preserve the original aspect ratio of input images during resizing. When enabled, images are resized without distortion; padding is added as needed to fill the target dimensions. Default: enabled.
* **Batch Size** — The number of training samples processed in each iteration. Larger batch sizes can stabilize training but require more GPU memory. Default: `16`.
* **Min Samples Per Epoch** — The minimum number of samples that must be seen per epoch during training. This ensures a consistent training duration even when the dataset is small. Default: `300`.
* **Per Item Lrate** — The learning rate applied per individual training sample. It controls how much the model's weights are adjusted after processing each item. Default: `0.001875`.
* **Pretrained Weights** — The source of the initial model weights used for transfer learning. Starting from pretrained weights (such as those trained on COCO) helps the model converge faster and perform better with less data. Default: `coco`.
* **Frozen Stages** — The number of backbone stages whose weights are frozen (not updated) during training. Freezing early stages preserves low-level feature representations learned during pretraining and can speed up training. Default: `1`.
* **Inference Max Batch Size** — The maximum number of images processed in a single batch during inference. Adjust this based on available GPU memory and throughput requirements. Default: `2`.

### Step 7: Train the Model​

After configuring the training settings, click the **Train Model** button to start training your model using the selected pipeline.

You'll be redirected to the **Pipeline Version Runs** page, where you can monitor the training job in real time and track how the pipeline executes.

![](/img/community_2/visual-detector-9-1.png)

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
* **Run a new job** — Click **Run Pipeline Version** to launch another training run. You'll be prompted to select a cluster and nodepool before starting.

### Step 8: Use the Model​

Once your model has been trained successfully, you can start using it for predictions.

To access it, select the **Models** option from the collapsible left sidebar. This opens the models listing page.

![](/img/community_2/visual-detector-10.png)

Click the listed model to open its individual page.

![](/img/community_2/visual-detector-11.png)

Next, click the **Deploy Model** button to [create a deployment](https://docs.clarifai.com/compute/deployments/deploy-model). This sets up the compute resources needed to run inference.

After deployment, click the **Try Model** button in the upper-right corner to open the [Playground](https://docs.clarifai.com/getting-started/playground), where you can submit inputs and get predictions.

![](/img/community_2/visual-detector-12.png)

For this tutorial, uploading an image will return detected objects with bounding boxes drawn around each identified item — labeled with their concept such as `Coverall`, `Gloves`, or `Mask` — along with their prediction probabilities.

That's it!

