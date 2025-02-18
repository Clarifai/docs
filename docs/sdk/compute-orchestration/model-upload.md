---
description: Import custom models, including from external sources like Hugging Face and OpenAI
sidebar_position: 1
---


# Upload Custom Models

**Import custom models, including from external sources like Hugging Face and OpenAI**

<hr />

The Clarifai Python SDK allow you to upload custom models easily. Whether you're working with a pre-trained model from an external source like Hugging Face or OpenAI, or one you've built from scratch, Clarifai allows seamless integration of your models, enabling you to take advantage of the platform’s powerful capabilities.

Once imported to our platform, your model can be utilized alongside Clarifai's vast suite of AI tools. It will be automatically deployed and ready to be evaluated, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

Let’s demonstrate how you can successfully upload different types of models to the Clarifai platform. 

:::note

For the Compute Orchestration Public Preview, deployment is only supported for models that users have uploaded to our platform via the Python SDK. We plan to expand this functionality to include out-of-the-box and custom-trained models on our platform in the future.

:::

:::info

- This new feature is in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types). If you'd like to test it out and provide feedback, please request access [here](https://www.clarifai.com/explore/contact-us-co).

- This new upload experience is compatible with the latest [`clarifai`](https://github.com/Clarifai/clarifai-python) Python package, starting from version 10.9.2.

- If you prefer the previous upload method, which is supported up to version 10.8.4, you can refer to the documentation [here](/others/old_model_upload_method.pdf).

:::

:::tip

You can run the following command to clone the [repository](https://github.com/Clarifai/examples/tree/main) containing examples of how to upload various model types and follow along with this documentation:
`git clone https://github.com/Clarifai/examples.git`. After cloning it, go to the `models/model_upload` folder.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

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

import TestModel from "!!raw-loader!../../../code_snippets/python-sdk/model-upload/test_model.py";


## Prerequisites

### Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```
### Environment Set Up

Before proceeding, ensure that the `CLARIFAI_PAT` (Personal Access Token) environment variable is set. You can generate the PAT key in your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform.

```text
export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE
```

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

Let's talk about the common steps you'd follow to upload any type of model to the Clarifai platform. 

### Step 1: Define the `config.yaml` File

The `config.yaml` file is essential for specifying the model’s metadata, compute resource requirements, and model checkpoints. 

Here’s a breakdown of the key sections in the file. 

#### Model Info  

This section defines your model ID, Clarifai user ID, and Clarifai app ID, which will determine where the model is uploaded on the Clarifai platform.

```yaml
model:
  id: "model_id"
  user_id: "user_id"
  app_id: "app_id"
  model_type_id: "text-to-text" # Change this based on your model type (e.g., image-classifier, text-to-text)
```

#### Compute Resources  

Here, you define the minimum compute resources required for running your model, including CPU, memory, and optional GPU specifications.

```yaml
inference_compute_info:
  cpu_limit: "2"
  cpu_memory: "13Gi"
  num_accelerators: 1
  accelerator_type: ["NVIDIA-A10G"] # Specify the GPU type if needed
  accelerator_memory: "15Gi"
```

- **`cpu_limit`** – Number of CPUs allocated for the model (follows Kubernetes notation, e.g., "1", "2").
- **`cpu_memory`** – Minimum memory required for the CPU (uses Kubernetes notation, e.g., "1Gi", "1500Mi", "3Gi").
- **`num_accelerators`** – Number of GPUs or TPUs to use for inference.
- **`accelerator_type`** – Specifies the type of accelerators (e.g., GPU or TPU) supported by the model (e.g., "NVIDIA-A10G").
- **`accelerator_memory`** – Minimum memory required for the GPU or TPU.

#### Hugging Face Model Checkpoints  

If you're using a model from Hugging Face, you can automatically download its checkpoints by specifying the appropriate configuration in this section. For private or restricted Hugging Face repositories, include an access token.

```yaml
checkpoints:
  type: "huggingface"
  repo_id: "meta-llama/Meta-Llama-3-8B-Instruct"
  hf_token: "your_hf_token" # Required for private models
```
#### Model Concepts or Labels

:::important

This section is required if your model outputs concepts or labels and is not being directly loaded from Hugging Face.

:::

For models that output concepts or labels, such as classification or detection models, you must define a `concepts` section in the `config.yaml` file:

```yaml
concepts:
  - id: '0'
    name: bus
  - id: '1'
    name: person
  - id: '2'
    name: bicycle
  - id: '3'
    name: car
```

:::note 

If you're using a model from Hugging Face and the `checkpoints` section is defined, the Clarifai platform will automatically infer concepts. In this case, you don’t need to manually specify them.

:::

### Step 2: Define Dependencies in `requirements.txt`

The `requirements.txt` file lists all the Python dependencies your model needs. This ensures that the necessary libraries are installed in the runtime environment.

### Step 3: Prepare the `model.py` File

The `model.py` file contains the logic for your model, including how it loads and handles [predictions](https://docs.clarifai.com/sdk/compute-orchestration/set-up-compute#predict-with-deployed-model). This file must implement a class that inherits from `ModelRunner` and defines the following methods, where applicable:

- **`load_model()`** – Initializes and loads the model, preparing it for inference.
- **`predict(input_data)`** – Handles the core logic for making predictions. It processes the input data and returns the output response.
- **`generate(input_data)`** – Provides output in a streaming manner, if applicable to the model's use case.
- **`stream(input_data)`** – Manages both streaming input and output, primarily for more advanced use cases where data is processed continuously.

```python
from clarifai.runners.models.model_class import ModelClass

class YourCustomModel(ModelClass):
    def load_model(self):
        # Initialize and load the model here
        pass

    def predict(self, request):
        # Handle input and return the model's predictions
        return output_data

    def generate(self, request):
        # Handle streaming output (if applicable)
        pass

    def stream(self, request):
        # Handle both streaming input and output
        pass
```

### Step 4: Test the Model Locally

Before uploading your model to the Clarifai platform, it's important to test it locally to catch any typos or misconfigurations in the code. 

This can prevent upload failures due to issues in the `model.py` or incorrect model implementation. It also ensures the model runs smoothly and that all dependencies are correctly configured.

You can test the model within a Docker container or a Python virtual environment.

:::note Recommendation

If Docker is installed on your system, it is highly recommended to use it for testing or running the model. Docker provides better isolation and avoids dependency conflicts.

:::

:::warning

Ensure your local environment has sufficient memory and compute resources to load and run the model for testing.

:::


There are two types of CLI (command line interface) commands you can use to test your models in your local development environment. You can learn more about the Clarifai CLI tool [here](https://docs.clarifai.com/sdk/cli). 

#### 1. Using the `test-locally` Command

This method allows you to test your model with a single CLI command. It runs the model locally and sends a sample request to verify that the model responds successfully. The results of the request are displayed directly in the console.

Here is how to test a model in a Docker Container:

```bash
clarifai model test-locally --model_path {add_model_path_here} --mode container
```

Here is how to test a model in a virtual environment:

```bash
clarifai model test-locally --model_path {add_model_path_here} --mode env
```

#### 2. Using the `run-locally` Command

This method starts a local gRPC server at `https://localhost:{port}/` for running the model. Once the server is running, you can perform inference on the model via the Clarifai client SDK.

Here is how to test a model in a Docker Container:

```bash
clarifai model run-locally --model_path {add_model_path_here} --mode container --port 8000
```

Here is how to test a model in a virtual environment:

```bash
clarifai model run-locally --model_path {add_model_path_here} --mode container --port 8000
```

Once the model is running locally, you need to configure the `CLARIFAI_API_BASE` environment variable to point to the localhost and port where the gRPC server is running.

```bash
export CLARIFAI_API_BASE="localhost:{port}"
```

You can then make different [types of inference requests](https://docs.clarifai.com/sdk/compute-orchestration/set-up-compute#predict-with-deployed-model) using the model — unary-unary, unary-stream, or stream-stream predict calls.

Here is an example of a unary-unary prediction call:


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{TestModel}</CodeBlock>
</TabItem>
</Tabs>

:::note CLI Flags

These are the key CLI flags available for local testing and running your models:

- `--model_path` —  Path to the model directory.

- `--mode` —  Specify how to run the model: `env` for virtual environment or `container` for Docker container. Defaults to `env`.

- `-p` or `--port` —  The port to host the gRPC server for running the model locally. Defaults to `8000`.

- `--keep_env` —  Retain the virtual environment after testing the model locally (applicable for `env` mode). Defaults to `False`.

- `--keep_image` —  Retain the Docker image built after testing the model locally (applicable for `container` mode). Defaults to `False`.

:::


### Step 5: Upload the Model to Clarifai

Once your model is ready, upload it to the Clarifai platform by running the following command:

```bash
clarifai model upload --model_path {add_model_path_here}
```

This command builds the model’s Docker image using the defined compute resources and uploads it to Clarifai, where it can be served in production.

## Examples

:::tip

You can find various model upload examples [here](https://github.com/Clarifai/examples/tree/main/models/model_upload), which demonstrate different use cases and optimizations. 

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
