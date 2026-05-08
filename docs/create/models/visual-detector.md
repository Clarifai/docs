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

:::note pipeline template

A pipeline template is a pre-configured workflow that defines how a model is trained, evaluated, and deployed.

It is built on top of [Clarifai Pipelines](https://docs.clarifai.com/compute/pipelines/), which are the underlying system that orchestrates a sequence of steps (nodes) such as data processing, training, and evaluation. The template simply provides a ready-made, opinionated setup of these pipelines for a specific use case.

Instead of building everything from scratch, a pipeline template gives you a ready-made structure with:

* **Predefined steps** (e.g., data loading, preprocessing, training, evaluation)
* **Default configurations** (such as model architecture and training logic)
* **Tunable parameters** (hyperparameters you can adjust to fit your use case)

In practical terms, it acts as a blueprint for your training process. For example, when you select the [`detector-pipeline-yolof`](#select-training-template) template, you're choosing:

* A pipeline designed for object detection
* A YOLOF-based model architecture
* A sequence of steps already wired together using Clarifai Pipelines to train on images with bounding box annotations

:::


You may choose a visual detector model type in cases where:

- **Accuracy takes priority** — you need precise object localization rather than a fast, general-purpose solution.
- **Your data is unique** — existing Clarifai models don't detect the objects in your dataset, and you need to deep fine-tune a custom model integrated into your workflows.
- **You have the right ingredients** — a custom dataset with bounding box annotations, and the time and expertise to fine-tune.

:::tip

Visual detectors are optimized for detection and localization tasks. If you only need to identify *what* is in an image without locating specific objects, consider a [Visual Classifier](visual-classifier.md) instead.

:::

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

Click the **Upload Inputs** button in the upper-right corner, then use the uploader pop-up to select and upload your images. As you upload, assign them to a [dataset](https://docs.clarifai.com/create/datasets/create/).

![](/img/community_2/visual-detector-1.png)

Once uploaded, you'll need to annotate each image with bounding boxes. Open the collapsible left sidebar and select the **Labeler** option to launch the annotation tool.

For each image, draw a bounding box around every object of interest and assign the appropriate concept label:

* `Coverall`
* `Face_Shield`
* `Gloves`
* `Goggles`
* `Mask`

![](/img/community_2/visual-detector-2.png)

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

* **Batch Size** — Number of samples processed per training step. Default: `32`.
* **Image Size** — Size (in pixels) to which input images are resized (square). Default: `512`.
* **Per Item Lrate** — Learning rate applied per training sample. Default: `0.00001953125`.
* **Weight Decay** — Regularization factor to prevent overfitting. Default: `0.01`.
* **Per Item Min Lrate** — Minimum learning rate per sample during training. Default: `1.5625e-8`.
* **Warmup Iters** — Number of initial iterations used to gradually increase the learning rate. Default: `5`.
* **Warmup Ratio** — Starting ratio of the learning rate during warmup. Default: `0.0001`.
* **Flip Probability** — Chance of randomly flipping images during training (data augmentation). Default: `0.5`.
* **Flip Direction** — Direction used when flipping images. Default: `horizontal`.
* **Pretrained Weights** — Source of initial model weights for transfer learning. Default: `ImageNet-1k`.
* **Seed** — Random seed used to initialize training (set `-1` for random behavior). Default: `-1`.

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

To access it, go to the **Models** section from the left sidebar and select your model from the list. This opens the models listing page.

![](/img/community_2/visual-detector-10.png)

Click the listed model to open its individual page.

![](/img/community_2/visual-detector-11.png)

Next, click the **Deploy Model** button to [create a deployment](https://docs.clarifai.com/compute/deployments/deploy-model). This sets up the compute resources needed to run inference.

After deployment, click the **Try Model** button in the upper-right corner to open the [Playground](https://docs.clarifai.com/getting-started/playground), where you can submit inputs and get predictions.

![](/img/community_2/visual-detector-12.png)

For this tutorial, uploading an image will return detected objects with bounding boxes drawn around each identified item — labeled with their concept such as `Coverall`, `Gloves`, or `Mask` — along with their prediction probabilities.

That's it!

##  **Via the CLI**

:::note

### Quick Start

The [`detector-pipeline-yolof-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-yolof-quick-start) template lets you train a test visual detection model with minimal setup. It uses a YOLOF-based object detector pre-configured with a public dataset, so you can run an end-to-end training pipeline immediately — no data preparation required.

**Step 1: Perform Prerequisites**

Before getting started, make sure you've completed the following setup:

- Install the Clarifai package:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

- Authenticate your connection by setting your [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT): 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

- Select an [instance type](https://docs.clarifai.com/compute/cloud-instances/) for running your pipeline — such as `g6e.xlarge`.


**Step 2: Initialize a Pipeline from a Template**

Initialize a new pipeline using the quick-start template, then navigate into the generated directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline init --template=detector-pipeline-yolof-quick-start</CodeBlock>
</TabItem>
</Tabs>

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">cd detector-pipeline-yolof-quick-start</CodeBlock>
</TabItem>
</Tabs>

**Step 3: Upload and Run the Pipeline**

Upload the pipeline configuration and execute the training job:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline upload</CodeBlock>
</TabItem>
</Tabs>

> **Note:** This will automatically create an app called `pipeline-app` and upload the pipeline to it.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline run --instance=g6e.xlarge</CodeBlock>
</TabItem>
</Tabs>

**Step 4: Monitor Your Pipeline**

Once the pipeline runs, it automatically loads the dataset, trains a YOLOF-based object detector, and produces a test model ready for use.

To access your pipeline, open your app's sidebar and select **Pipelines**; to view your trained model, select **Models**.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/dataset_upload.py";

import Output1 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-1.txt";
import Output2 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-2.txt";
import Output3 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-3.txt";
import Output4 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-4.txt";
import Output5 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-5.txt";
import Output6 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-6.txt";
import Output7 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-7.txt";
import Output8 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-8.txt";
import Output9 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-9.txt";
import Output10 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-10.txt";
import Output11 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_detector/output-11.txt";

<br/>

Let's walk through how to use the [Clarifai CLI](https://docs.clarifai.com/resources/api-overview/cli) to build and train a visual detection model using your own custom dataset.

### Step 1: Install Clarifai and Authenticate

Start by installing the latest version of the `clarifai` Python package. This also includes the Clarifai CLI, which we'll use to run and manage the training pipeline.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

Then, authenticate your connection to Clarifai:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

The CLI will prompt you for your [Personal Access Token](https://docs.clarifai.com/control/authentication/pat/) (PAT). It will auto-detect your user ID and save everything locally.

> **Note:** You can obtain a PAT by opening **Settings** in the platform's collapsible left sidebar, selecting **Secrets**, and then creating a new token or copying an existing one.


### Step 2: Create an App

Create an [app](https://docs.clarifai.com/create/applications/create/) to store and manage your model and its associated resources (such as datasets, pipelines, and deployments).

<Tabs groupId="code">
<TabItem value="python" label="CLI">
    <CodeBlock className="language-python">clarifai app create your-app-id</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output1}</CodeBlock>
</details>

### Step 3: Prepare Training Data

As mentioned [previously](#step-2-prepare-training-data), high-quality, well-structured data is critical for training an accurate and reliable model.

For object detection, your dataset must include images with bounding box annotations. Each annotation marks the location of an object in the image and assigns it a concept label.

For this example, we'll use a public dataset of annotated images available [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_detection).

:::info Objective

Using this dataset, we'll train a model to detect and localize the following object categories: `dog`, `cat`, `person`, and `car`.

:::

You can clone the [repository](https://github.com/Clarifai/examples/tree/main) containing the dataset, then use the Clarifai Python SDK to [upload the dataset](https://docs.clarifai.com/create-manage/datasets/upload) to your app.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output2}</CodeBlock>
</details>

> **Note:** Once your dataset is successfully uploaded, navigate to the platform UI and record the `dataset_id` and `dataset_version_id`. You'll need these values when running the training pipeline.


### Step 4: Set Up Compute 

You can run your pipeline using either on-demand instance compute or a managed cluster and nodepool.

#### Option A: Select an Instance Type

You can run your pipeline directly on on-demand compute by specifying an instance with the `--instance` flag (see [example below](#option-a-run-on-on-demand-instance-compute)). This removes the need to create and manage a cluster and nodepool.

With this approach, compute is automatically provisioned — or reused if available — so you can focus on running your pipeline rather than managing infrastructure.

See the [available instance types](https://docs.clarifai.com/compute/cloud-instances) to choose one that best matches your workload and performance requirements.

#### Option B: Create a Cluster and Nodepool

To train your model via the CLI with managed infrastructure, you'll need to provision compute resources by creating a cluster and a nodepool.

Start by defining a [YAML](https://docs.clarifai.com/compute/deployments/clusters-nodepools#1-compute_cluster_configyaml) configuration file for your compute cluster. Ensure the configuration supports GPU workloads, as GPUs are required for efficient training and inference of detection models.

Here is an example cluster config file:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
```yaml
compute_cluster:
  id: "visual-compute-cluster"
  description: "My AWS compute cluster"
  cloud_provider:
    id: "aws"
  region: "us-east-1"
  managed_by: "clarifai"
  cluster_type: "dedicated"
  visibility:
    gettable: 10
```
</TabItem>
</Tabs>

Then run the following command, pointing to your config file:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
    clarifai computecluster create \
      your_compute_cluster_id \
      --config your_compute_cluster_config_filepath
```
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output3}</CodeBlock>
</details>


Next, define a nodepool within your cluster. This is where you specify the actual [compute instances](https://docs.clarifai.com/compute/cloud-instances) used for training. Be sure to choose a GPU-enabled instance that aligns with your performance and cost requirements.

> **Note:** GPU support is essential for this tutorial. Without a compatible GPU instance, training may be significantly slower or fail altogether.

Here is an example nodepool config file:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
```yaml
nodepool:
  id: "visual-nodepool"
  compute_cluster:
    id: "visual-compute-cluster"
  description: "GPU nodepool for training workloads"
  instance_types:
    - id: "g5.2xlarge"
      compute_info:
        cpu_limit: "8"
        cpu_memory: "28Gi"
        accelerator_type:
          - "a10"
        num_accelerators: 1
        accelerator_memory: "40Gi"
  node_capacity_type:
    capacity_types:
      - 1
  min_instances: 0
  max_instances: 1
```
</TabItem>
</Tabs>

Then run the following command, pointing to your config file:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
    clarifai nodepool create \
      your_compute_cluster_id \
      your_nodepool_id \
      --config your_nodepool_config_filepath
```
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output4}</CodeBlock>
</details>


### Step 5: Initialize a Pipeline from a Template

The [`detector-pipeline-yolof`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-yolof) template lets you quickly set up a visual detection pipeline using a preconfigured YOLOF-based object detector — so you can focus on training rather than setup.

:::tip

To view all the available predefined templates, run:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinetemplate list</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output5}</CodeBlock>
</details>

:::
 
Run the following command to [initialize a pipeline](https://docs.clarifai.com/compute/pipelines/create-api#step-2-initialize-a-pipeline-project) from the template:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai pipeline init \
      --app_id your_app_id \
      --user_id your_user_id \
      --template detector-pipeline-yolof \
      --set dataset_id=image_dataset \
      --set dataset_version_id=dataset_version_id \
      --set concepts='["dog","cat","person","car"]'
    ```
</TabItem>
</Tabs>

Where:

| Parameter | Description |
|---|---|
| `--app_id` | The ID of the app where the pipeline will be created |
| `--user_id` | Your Clarifai user ID |
| `--template` | The pipeline template to use. Here, we use `detector-pipeline-yolof` |
| `--set dataset_id` | The ID of the dataset to use for training |
| `--set dataset_version_id` | The specific dataset version to use for training |
| `--set concepts` | A JSON array of the concept labels the model will be trained to detect |

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output6}</CodeBlock>
</details>

Once executed, the command creates a new project directory named after the template, preloaded with all necessary configuration files.

Before running any subsequent `clarifai pipeline ...` commands, navigate into the generated directory — these commands rely on the local `config.yaml` and `config-lock.yaml` files:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">cd detector-pipeline-yolof</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You can optionally review the generated pipeline steps and tailor them to your use case. If needed, you can also adjust the default parameters and add any additional dependencies to the `requirements.txt` files to support your pipeline.

:::tip Override Defaults at Initialization

You can optionally customize the pipeline during setup — for example, by specifying a different user/app, assigning a custom pipeline ID, or adjusting model parameters:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
  clarifai pipeline init --template=detector-pipeline-yolof \
  --user_id your_custom_user_id \
  --app_id your_custom_app_id \
  --set id=your_custom_pipeline_id \
  --set num_epochs=20
```
</TabItem>
</Tabs>


:::

### Step 6: Upload Your Pipeline

Once your pipeline is initialized and configured, the next step is to upload it and trigger the training job.

Make sure you're inside the generated pipeline directory, then run:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline upload</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output7}</CodeBlock>
</details>

The above command will register the pipeline in your app, upload all associated configuration files, and prepare the pipeline for execution.

### Step 7: Run the Pipeline

You can run your pipeline using either on-demand instance compute or a preconfigured cluster and nodepool.

#### Option A: Run on On-Demand Instance Compute

Instead of relying on an existing nodepool and compute cluster, you can automatically provision or reuse compute at runtime by specifying an instance type:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline run --instance=g6e.xlarge</CodeBlock>
</TabItem>
</Tabs>

This approach removes the need to manage infrastructure, making it ideal for quick experiments or simplified workflows.

:::note Override Parameters at Runtime

To modify pipeline parameters at run time, pass one or more `--set key=value` flags:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
clarifai pipeline run \
  --instance=g6e.xlarge \
  --set num_epochs=20 \
  --set batch_size=32
```
</TabItem>
</Tabs>

:::

#### Option B: Run on Cluster and Nodepool

If you've already set up a compute cluster and nodepool, you can run the pipeline by explicitly targeting those resources:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
    clarifai pipeline run \
      --nodepool_id=your_nodepool_id \
      --compute_cluster_id=your_compute_cluster_id
```
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output8}</CodeBlock>
</details>

The above command launches the pipeline on your specified cluster and nodepool, ensuring it uses the configured GPU-backed resources.

Once triggered, the pipeline runs end-to-end — loading the dataset, training the YOLOF-based model, and producing a model ready for evaluation and further use.

### Step 8: Monitor Your Pipeline

To monitor your pipeline, open your app's collapsible sidebar and select **Pipelines**. From there, navigate to the **Pipeline Version Runs** page, where you can track execution progress, view logs, and manage runs for a specific pipeline version — as illustrated [above](#step-7-train-the-model).

To access the trained model, go to **Models** in the sidebar.

You can also [monitor](https://docs.clarifai.com/compute/pipelines/manage-run#monitor-a-pipeline-run) the pipeline directly from the CLI:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinerun monitor pipeline_version_run_id</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output9}</CodeBlock>
</details>

### Step 9: Use Your Model

Once training is complete, your model is ready for use. 

Start by [creating a deployment](https://docs.clarifai.com/resources/api-overview/cli/#clarifai-model-deploy) to make it available for inference. 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
clarifai model deploy \
  --model-url clarifai_model_url \
  --instance g5.2xlarge
```
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output10}</CodeBlock>
</details>

Then, use the generated deployment ID to run [predictions](https://docs.clarifai.com/resources/api-overview/cli/#clarifai-model-predict) on new data.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
```bash
clarifai model predict \
  clarifai_model_url \
  --url https://samples.clarifai.com/featured-models/image-general-horses.jpg \
  --deployment deployment_id
```
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output11}</CodeBlock>
</details>

