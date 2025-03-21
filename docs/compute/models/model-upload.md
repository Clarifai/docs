---
description: Import custom models, including from external sources like Hugging Face and OpenAI
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---


# Upload Custom Models

**Import custom models, including from external sources like Hugging Face and OpenAI**

<hr />

The Clarifai Python SDK allows you to upload custom models easily. Whether you're working with a pre-trained model from an external source like Hugging Face or OpenAI, or one you've built from scratch, Clarifai allows seamless integration of your models, enabling you to take advantage of the platform’s powerful capabilities.

Once imported to our platform, your model can be utilized alongside Clarifai's vast suite of AI tools. It will be automatically deployed and ready to be evaluated, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

Let’s demonstrate how you can successfully upload different types of models to the Clarifai platform. 

:::info

- This new upload experience is compatible with the latest [`clarifai`](https://github.com/Clarifai/clarifai-python) Python package, starting from version 10.9.2. If you prefer the previous upload method, which is supported up to version 10.8.4, you can refer to the documentation [here](/others/old_model_upload_method.pdf).

- You can run the following command to clone the [repository](https://github.com/Clarifai/examples/tree/main) containing examples of how to upload various model types and follow along with this tutorial:
`git clone https://github.com/Clarifai/examples.git`. After cloning it, go to the `models/model_upload` folder.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PrepareModelPyFile from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/prepare_model_py_file.py";
import ModelInfo from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/model_info.yaml";
import BuildInfo from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/build_info.yaml";
import ComputeResources from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/compute_resources.yaml";
import HFCheckpoints from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/hf_checkpoints.yaml";
import ModelConcepts from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/model_concepts.yaml";

import ImageClassifierModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_classifier_model.py";
import ImageClassifierRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_classifier_requirements.txt";
import ImageClassifierConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_classifier_config.yaml";

import ImageDetectorModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_detector_model.py";
import ImageDetectorRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_detector_requirements.txt";
import ImageDetectorConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/image_detector_config.yaml";

import LLMModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/llm_model.py";
import LLMRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/llm_requirements.txt";
import LLMConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/llm_config.yaml";

import SpeechRecognitionModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/speech_recognition_model.py";
import SpeechRecognitionRequirements from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/speech_recognition_requirements.txt";
import SpeechRecognitionConfig from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/speech_recognition_config.yaml";

## Prerequisites

### Set up Docker or a Virtual Environment

To test, run, and upload your model, you need to set up either a Docker container or a Python virtual environment. This ensures proper dependency management and prevents conflicts in your project.  

Both options allow you to work with different Python versions. For example, you can use Python 3.11 for uploading one model and Python 3.12 for another — configured via the [`config.yaml`](#build-info) file.  

If Docker is installed on your system, it is highly recommended to use it for running the model. Docker provides better isolation and a fully portable environment, including for Python and system libraries.   
 
You should ensure your local environment has sufficient memory and compute resources to handle model loading and execution, especially during [testing](https://docs.clarifai.com/sdk/compute-orchestration/test-models-locally).  


### Install Clarifai Package

Install the latest version of the `clarifai` Python package. This will also install the Clarifai [Command Line Interface](https://docs.clarifai.com/sdk/cli) (CLI), which we'll use for testing and uploading the model. 


<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>


### Set a PAT Key

You need to set the `CLARIFAI_PAT` (Personal Access Token) as an environment variable. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

### Create Project Directory

Create a project directory and organize your files as indicated below to fit the requirements of uploading models to the Clarifai platform. 

```text
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

- **your_model_directory/** – The main directory containing your model files.
  - **1/** – A subdirectory that holds the model file (_Note that the folder is named as **1**_).
    - **model.py** – Contains the code that defines your model, including loading the model and running inference.
  - **requirements.txt** – Lists the Python libraries and dependencies required to run your model.
  - **config.yaml** – Contains model metadata and configuration details necessary for building the Docker image, defining compute resources, and uploading the model to Clarifai.

## How to Upload a Model

Let's talk about the general steps you'd follow to upload any type of model to the Clarifai platform. You can refer to the [examples below](#examples) to help you configure your files correctly.

### Step 1: Define the `config.yaml` File

The `config.yaml` file is essential for specifying the model’s metadata, compute resource requirements, and model checkpoints. 

Here’s a breakdown of the key sections in the file. 

#### Model Info  

This section defines your model ID, Clarifai user ID, and Clarifai app ID, which will determine where the model is uploaded on the Clarifai platform.


<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ModelInfo}</CodeBlock>
</TabItem>
</Tabs>

#### Build Info  

This section specifies details about the environment used to build or run the model. You can include the `python_version`, which is useful for ensuring compatibility between the model and its runtime environment, as different Python versions may have varying dependencies, library support, and performance characteristics.

:::note

We currently support Python 3.11 and Python 3.12 (default).

:::

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{BuildInfo}</CodeBlock>
</TabItem>
</Tabs>

#### Compute Resources  

Here, you define the minimum compute resources required for running your model, including CPU, memory, and optional GPU specifications.


<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ComputeResources}</CodeBlock>
</TabItem>
</Tabs>

- **`cpu_limit`** – Number of CPUs allocated for the model (follows Kubernetes notation, e.g., "1", "2").
- **`cpu_memory`** – Minimum memory required for the CPU (uses Kubernetes notation, e.g., "1Gi", "1500Mi", "3Gi").
- **`num_accelerators`** – Number of GPUs or TPUs to use for inference.
- **`accelerator_type`** – Specifies the type of hardware [accelerators](https://docs.clarifai.com/portal-guide/compute-orchestration/cloud-instances) (e.g., GPU or TPU) supported by the model (e.g., "NVIDIA-A10G"). _Note that instead of specifying an exact accelerator type, you can use a wildcard `(*)` to automatically match all available accelerators that fit your use case. For example, using `[NVIDIA*]` will enable the system to choose from all NVIDIA options compatible with your model._
- **`accelerator_memory`** – Minimum memory required for the GPU or TPU.

#### Hugging Face Model Checkpoints  

If you're using a model from Hugging Face, you can automatically download its checkpoints by specifying the appropriate configuration in this section. For private or restricted Hugging Face repositories, include an access token.

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{HFCheckpoints}</CodeBlock>
</TabItem>
</Tabs>


:::note

The `when` parameter in the `checkpoints` section determines when model checkpoints should be downloaded and stored. It must be set to one of the following options:  

- `runtime` (_default_) – Downloads checkpoints when loading the model in the `load_model` method.  
- `build` – Downloads checkpoints during the image build process.  
- `upload` – Downloads checkpoints before uploading the model.  

For larger models, we highly recommend downloading checkpoints at `runtime`. Doing so prevents unnecessary increases in Docker image size, which has some advantages:  

- Smaller image sizes
- Faster build times
- Quicker uploads and inference on the Clarifai platform

Downloading checkpoints at `build` or `upload` time can significantly increase image size, resulting in longer upload times and increased cold start latency.

:::

#### Model Concepts or Labels

:::important

This section is required if your model outputs concepts or labels and is not being directly loaded from Hugging Face.

:::

For models that output concepts or labels, you must define a `concepts` section in the `config.yaml` file. 

The following model types output concepts or labels:

- `visual-classifier`
- `visual-detector`
- `visual-segmenter`
- `text-classifier`. 

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ModelConcepts}</CodeBlock>
</TabItem>
</Tabs>

:::note 

If you're using a model from Hugging Face and the `checkpoints` section is defined, the Clarifai platform will automatically infer concepts. In this case, you don’t need to manually specify them.

:::

### Step 2: Define Dependencies in `requirements.txt`

The `requirements.txt` file lists all the Python dependencies your model needs. If your model requires Torch, we provide optimized pre-built Torch images as the base for machine learning and inference tasks.

These images include all necessary dependencies, ensuring efficient execution. The available pre-built Torch images are:

- `2.4.1-py3.11-cuda124` — Based on PyTorch 2.4.1, Python 3.11, and CUDA 12.4.
- `2.5.1-py3.11-cuda124` — Based on PyTorch 2.5.1, Python 3.11, and CUDA 12.4.
- `2.4.1-py3.12-cuda124` — Based on PyTorch 2.4.1, Python 3.12, and CUDA 12.4.
- `2.5.1-py3.12-cuda124` — Based on PyTorch 2.5.1, Python 3.12, and CUDA 12.4.

To use a specific Torch version, define it in your requirements.txt file like this:

```text
torch==2.5.1
```

This ensures the correct pre-built image is pulled from Clarifai's container registry, ensuring the correct environment is used. This minimizes cold start times and speeds up model uploads and runtime execution — avoiding the overhead of building images from scratch or pulling and configuring them from external sources.

We recommend using either `torch==2.5.1` or `torch==2.4.1`. If your model requires a different Torch version, you can specify it in requirements.txt, but this may slightly increase the model upload time.

After stating the required dependencies in the `requirements.txt` file, run the following command to install them:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install -r requirements.txt </CodeBlock>
</TabItem>
</Tabs>

### Step 3: Prepare the `model.py` File

The `model.py` file contains the core logic for your model, including how the model is loaded and how predictions are made. This file must define a custom class that inherits from `ModelClass` and implements the required methods.

To define a custom model, create a class that inherits from `ModelClass` and implements the following:

#### a. `load_model` Method 

The `load_model` method is optional but recommended, as it prepares the model for inference by handling resource-heavy initializations. It is particularly useful for:

- One-time setup of heavy resources, such as loading trained models or initializing data transformations.
- Executing tasks during model container startup to reduce runtime latency.
- Loading essential components like tokenizers, pipelines, and other model-related assets.

Here is an example:

```python
def load_model(self):
  self.tokenizer = AutoTokenizer.from_pretrained("model/")
  self.pipeline = transformers.pipeline(...)
```

#### b. Prediction Methods 

You need to include at least one method decorated with `@ModelClass.method` to define prediction endpoints.

The following three method types are supported based on type hints:

```python
# Unary-Unary (Standard request-response)
def predict(self, input: Image) -> Text

# Unary-Stream (Server-side streaming)
def generate(self, prompt: Text) -> Stream[Text]

# Stream-Stream (Bidirectional streaming)
def analyze_video(self, frames: Stream[Image]) -> Stream[str]
```

:::tip

Each parameter in the class methods must be annotated with a type, and the return type must also be specified. Clarifai's model framework supports rich data typing for both inputs and outputs. Supported types include `Text`, `Image`, `Audio`, `Video`, and more as illustrated [here](https://docs.clarifai.com/compute/models/supported-data-types).

:::

Here is an example of a `model.py` file. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python"> {PrepareModelPyFile} </CodeBlock>
</TabItem>
</Tabs>


### Step 4: Test the Model Locally

Before uploading your model to the Clarifai platform, it's important to test it locally to catch any typos or misconfigurations in the code. 

Learn how to test your models locally [here](https://docs.clarifai.com/sdk/compute-orchestration/test-models-locally). 

### Step 5: Upload the Model to Clarifai

Once your model is ready, you can upload it to the platform using Clarifai CLI. _Note that to use the CLI to upload your model, you'll need to first use the tool to [log in](https://docs.clarifai.com/sdk/cli/#login) to your account_. 

To upload your model, run the following command in your terminal:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model upload ./your/model/path/here </CodeBlock>
</TabItem>
</Tabs>

Alternatively, navigate to the directory containing your custom model and run the command without specifying the directory path:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> clarifai model upload </CodeBlock>
</TabItem>
</Tabs>

This command builds the model’s Docker image using the defined compute resources and uploads it to Clarifai, where it can be served in production.

Note that if you make any changes to your model and upload it again to the Clarifai platform, a new version of the model will be created automatically.

### Step 6: Predict With Model

Once the model is successfully uploaded to Clarifai, you can start making predictions with it. Note that before making a prediction request with our compute orchestration capabilities, ensure that you've created a compute cluster and set up a nodepool. 

## Examples

:::tip

You can find various up-to-date model upload examples [here](https://github.com/Clarifai/examples/tree/main/models/model_upload), which demonstrate different use cases and optimizations. 

:::

### Image Classifier

#### `model.py` 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ImageClassifierModel}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{ImageClassifierRequirements}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ImageClassifierConfig}</CodeBlock>
</TabItem>
</Tabs>

### Image Detector

#### `model.py` 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ImageDetectorModel}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{ImageDetectorRequirements}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ImageDetectorConfig}</CodeBlock>
</TabItem>
</Tabs>

### Large Language Models (LLMs)

#### `model.py` 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{LLMModel}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{LLMRequirements}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{LLMConfig}</CodeBlock>
</TabItem>
</Tabs>

:::note

You can refer to the examples repository mentioned above for additional examples of uploading other large language models (LLMs).

:::

### Speech Recognition Model

#### `model.py` 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{SpeechRecognitionModel}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs>
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{SpeechRecognitionRequirements}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{SpeechRecognitionConfig}</CodeBlock>
</TabItem>
</Tabs>
