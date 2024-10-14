---
sidebar_position: 1
---

# Model Upload

**Learn how to upload a model using Clarifai SDKs**

<hr />

The Clarifai SDKs allow you to upload custom models easily. Whether you're working with a pre-trained model from an external source or one you've built from scratch, Clarifai allows seamless integration of your models, enabling you to take advantage of the platform’s powerful capabilities.

Once uploaded, your model can be utilized alongside Clarifai's vast suite of AI tools. It will be automatically deployed and ready to be evaluated, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

Let’s demonstrate how you can successfully upload different types of models to the Clarifai platform. 

:::info

- This new feature is still in [private preview](https://docs.clarifai.com/product-updates/changelog/release-types). If you'd like to test it out and provide feedback, please request access [here](https://forms.gle/MSx7QNxmug2oFZYD6).

- This new upload experience is compatible with the latest [`clarifai`](https://github.com/Clarifai/clarifai-python) Python package, starting from version 10.9.1.

- If you prefer the previous upload method, which is supported up to version 10.8.4, you can refer to the documentation [here](/others/old_model_upload_method.pdf).

:::

:::tip

You can run the following command to clone the repository containing examples of how to upload various model types and follow along with this documentation:
`git clone https://github.com/Clarifai/examples.git`. After cloning it, go to the `models/model_upload` folder.

:::

## Prerequisites

### Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```
### Environment Set Up

Authenticate your connection to the Clarifai platform by setting your `CLARIFAI_PAT `(Personal Access Token) as an environment variable. 

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

#### Model Checkpoints  

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

The `model.py` file contains the logic for your model, including how it loads and handles predictions. This file must implement a class that inherits from `ModelRunner` and defines the following methods:

- **`load_model()`** – Initializes and loads the model, preparing it for inference.
- **`predict(input_data)`** – Handles the core logic for making predictions. It processes the input data and returns the output response.
- **`generate(input_data)`** – Provides output in a streaming manner, if applicable to the model's use case.
- **`stream(input_data)`** – Manages both streaming input and output, primarily for more advanced use cases where data is processed continuously.

```python
from clarifai.runners.models.model_runner import ModelRunner

class YourCustomModelRunner(ModelRunner):
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

Before uploading your model to the Clarifai platform, it's important to test it locally to catch any typos or misconfigurations in the code. This can prevent upload failures due to issues in the `model.py` or incorrect model implementation.

It also ensures the model runs smoothly and that all dependencies are correctly configured.

To run your model locally, use the following command:

```bash
python -m clarifai.runners.models.model_run_locally --model_path <model_directory_path>
```

:::tip

You can add a dot (`.`) to the model path like this: `python -m clarifai.runners.models.model_run_locally --model_path .` This means you're specifying the current directory as the model path – the command will look for the model files (such as `model.py`, `requirements.txt`, and `config.yaml`) within the directory where you're executing the command. 
:::

:::warning

Ensure your local environment has sufficient memory and compute resources to load and run the model for testing.

:::

### Step 5: Upload the Model to Clarifai

Once your model is ready, upload it to the Clarifai platform by running the following command:

```bash
python -m clarifai.runners.models.model_upload --model_path <model_directory_path>
```

This command builds the model’s Docker image using the defined compute resources and uploads it to Clarifai, where it can be served in production.


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

## Examples

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

:::tip

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
