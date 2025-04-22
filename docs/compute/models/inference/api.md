---
description: Perform predictions using your deployed models
sidebar_position: 1
---

# Inference via the API

**Perform predictions using your deployed models**
<hr />

Our new inference technique provides an efficient, scalable, and streamlined way to perform predictions with models. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_1.py";
import CO2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_2.py";
import CO3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_3.py";
import CO4 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_4.py";
import CO5 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_5.py";
import CO6 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_6.py";
import CO7 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_7.py";
import CO8 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_8.py";
import CO9 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_9.py";
import C10 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_10.py";

## Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK package. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security). 

You can then set the PAT as an environment variable using `CLARIFAI_PAT`.

:::note tip

On Windows, the Clarifai Python SDK expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the SDK, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::

## Structure of Prediction Methods

Before making a prediction with a model, it’s important to understand how its prediction methods are structured.

You can learn more about the structure of model prediction methods [here](README.mdx#structure-of-prediction-methods).

### Get Available Methods

You can list all the methods implemented in the model's configuration that are available for performing model inference.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO1}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">dict_keys(['predict', 'generate', 'chat'])</CodeBlock>
</details>

:::note Initializing the Model Client

When instantiating a model, you can use either its explicit IDs or its URL.

```text
# Initialize with explicit IDs
model = Model(user_id="model_user_id", app_id="model_app_id", model_id="model_id"
)
```

```text
# Or initialize with model URL
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id")
```

:::

### Get Method Signature

You can retrieve the method signature of a specified model's method to identify all its arguments and their type annotations, which are essential for performing model inference. 

A method signature defines the method's name, its input parameters (with types and default values), and the return type, helping you understand how to properly call the method.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">def predict(prompt: str, image: data_types.Image, images: List[data_types.Image], chat_history: List[data_types.JSON], max_tokens: int = 512, temperature: float = 0.7, top_p: float = 0.8) -> str:</CodeBlock>
</details>

### Generate Example Code

You can generate a sample code snippet to better understand how to perform inference using a model.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO3}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CO4}</CodeBlock>
</details>

:::warning Set up a deployment

To use Clarifai’s Compute Orchestration capabilities, ensure your model is deployed, [as described previously](README.mdx).
Then, configure the `deployment_id` parameter — alternatively, you can specify `compute_cluster_id` and `nodepool_id`. If none of these are set, the prediction will default to the `Clarifai Shared` deployment type.

```text
model = Model(
    url="MODEL_URL_HERE",  
    deployment_id="DEPLOYMENT_ID_HERE",
    # Or, set cluster and nodepool 
    # compute_cluster_id = "COMPUTE_CLUSTER_ID_HERE",
    # nodepool_id = "NODEPOOL_ID_HERE"
)
```
:::

## Unary-Unary Predict Call

This is the simplest form of prediction: a single input is sent to the model, and a single response is returned. It’s ideal for quick, non-streaming tasks, such as classifying an image or analyzing a short piece of text.

> **NOTE**: Streaming refers to the continuous flow of data between a client and a model, rather than sending or receiving all the data at once.

Here is an example of a model signature configured on the server side for handling image inputs:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def predict_image(self, image: Image) -> Dict[str, float]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-unary predict call from the client side:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
</Tabs>

:::tip

[Click here](https://docs.clarifai.com/compute/models/model-upload/data-types/) to explore how to make predictions with other data types.

:::


## Unary-Stream Predict Call

This call sends a single input to the model but returns a stream of responses. This is especially useful for tasks that produce multiple outputs from one input, such as generating text completions or progressive predictions from a prompt.

Here is an example of a model signature configured on the server side for handling text inputs:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def generate(self, prompt: Text) -> Iterator[Text]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-stream predict call from the client side:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO6}</CodeBlock>
</TabItem>
</Tabs>

## Stream-Stream Predict Call

This call enables bidirectional streaming of both inputs and outputs, making it ideal for real-time applications and processing large datasets.

In this setup, multiple inputs can be continuously streamed to the model, while predictions are returned in real time. It’s especially useful for use cases like live video analysis or streaming sensor data.

Here is an example of a model signature configured on the server side for handling audio inputs:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def transcribe_audio(self, audio: Iterator[Audio]) -> Iterator[Text]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding stream-stream predict call from the client side:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO7}</CodeBlock>
</TabItem>
</Tabs>

## Dynamic Batch Prediction Handling

Clarifai’s model framework seamlessly supports both single and batch predictions through a unified interface. It dynamically adapts to the input format, so no code changes are needed.

The system automatically detects the type of input provided: 

- If you pass a single input, it’s treated as a singleton batch;

- If you pass multiple inputs as a list, they are handled as a parallel batch.

This means you can pass either a single input or a list of inputs, and the system will automatically process them appropriately — making your code cleaner and more flexible.

### Image Inputs

Here is an example of a model signature configured on the server side for handling image inputs:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def predict_image(self, image: Image) -> Dict[str, float]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can perform batch predictions with image inputs from the client side:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>

### Text Inputs

Here is an example of a model signature configured on the server side for handling text inputs:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">class TextClassifier(ModelClass):
  @ModelClass.method
  def predict(self, text: Text) -> float:
    """Single text classification (automatically batched)"""
    return self.model(text.text)</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can perform batch predictions with text inputs from the client side:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
</Tabs>


## Multimodal Predictions

You can make predictions using models that support multimodal inputs, such as a combination of images and text. 

Additionally, you can configure various [inference parameters](https://docs.clarifai.com/sdk/Inference-from-AI-Models/Advance-Inference-Options/#prediction-paramaters) to customize your prediction requests to better suit your use case.

:::tip

[Click here](https://github.com/Clarifai/runners-examples/tree/main/multimodal-models/pythonic-openai_server_vlm) to learn more how to make multimodal predictions, including how to use parameters like `chat_history` and `messages`.

:::

Here is an example:

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{C10}</CodeBlock>
</TabItem>
</Tabs>