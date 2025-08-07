---
description: Generate predictions with models
sidebar_position: 2
toc_max_heading_level: 4
---

# Inference via API

**Generate predictions with models**
<hr />




:::tip

[Click here](https://github.com/Clarifai/examples/tree/main/models/model_predict) for additional examples on how to perform model predictions using various SDKs — such as the Clarifai SDK, OpenAI client, and LiteLLM. The examples demonstrate various model types and include both streaming and non-streaming modes, as well as tool calling capabilities.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO5 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_5.py";
import CO5Text from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_5-text.py";
import CO6 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_6.py";
import CO7 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_7.py";
import CO7Text from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_7_text.py";
import CO8 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_8.py";
import CO9 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_9.py";
import C10 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_10.py";

import NodePredictInterface from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_interface.js";
import NodePredictInterfaceImageInputs from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_interface_image_inputs.js";
import NodeStreamInterface from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/stream_interface.js";

import OutputUnaryTextInputs from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_1.txt";
import OutputUnaryImageInputs from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_2.txt";

import CO6Images from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_6_images.py";
import NodeStreamInterfaceImages from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/stream_interface_images.js";

import PyToolCalling from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/tool_calling.py";

import Mask1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/mask_1.py";
import Mask2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/mask_2.py";
import Mask3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/mask_3.py";
import PyModelClient from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/py_model_client.py";
import NodeModelClient from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/node_model_client.js";

import AsyncPredict from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/async_predict.py";
import AsyncGenerate from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/async_generate.py";

## Prerequisites

### Install Clarifai Packages

- Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

- Install the latest version of the Clarifai [Node.js](https://github.com/Clarifai/clarifai-nodejs) SDK package:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> npm install clarifai-nodejs </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the **Security** section. 

You can then set the PAT as an environment variable using `CLARIFAI_PAT`, in which case you don’t need to define it explicitly in your code. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

## Prediction Tips

#### Set up a Deployment

To use our Compute Orchestration capabilities, ensure your model is [deployed](https://docs.clarifai.com/compute/deployments/deploy-model). Then, specify the `deployment_id` parameter — alternatively, you can specify both `compute_cluster_id` and `nodepool_id`, as explained [here](https://docs.clarifai.com/compute/inference/#predict-with-compute-orchestration). 

```text
model = Model(
    url="MODEL_URL_HERE",  
    deployment_id="DEPLOYMENT_ID_HERE",
    # Or, set cluster and nodepool 
    # compute_cluster_id = "COMPUTE_CLUSTER_ID_HERE",
    # nodepool_id = "NODEPOOL_ID_HERE"
)
```

#### Specify a Model Version

By default, the latest version of the model is used for inference. However, you can specify a different version in either of the following two ways:

```python
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id/model_version/model_version_id")
```
Or:

```python
model = Model(url="https://clarifai.com/model_user_id/model_app_id/models/model_id", model_version = {"id": "model_version_id"})
```


#### Initialize the Model Client

You can initialize the model client using either explicit IDs or the full model URL.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyModelClient}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeModelClient}</CodeBlock>
</TabItem>
</Tabs>


## Unary-Unary Predict Call

This is the simplest form of prediction: a single input is sent to the model, and a single response is returned. It’s ideal for quick, non-streaming tasks, such as classifying an image or analyzing a short piece of text.

> **NOTE**: Streaming means that the response is streamed back token by token, rather than waiting for the entire completion to be generated before returning. This is useful for building interactive applications where you want to display the response as it's being generated.

### Text Inputs

Here is an example of a model signature configured on the server side for handling text inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
  def predict(self, prompt: str = "") -> str:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-unary predict call from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO5Text}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodePredictInterface}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputUnaryTextInputs}</CodeBlock>
</details>

### Image Inputs

#### Image-to-Text

Here is an example of a model signature configured on the server side for handling image inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def predict(self, image: Image) -> str:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-unary predict call from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodePredictInterfaceImageInputs}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputUnaryImageInputs}</CodeBlock>
</details>

#### Visual Segmentation 

> **Note:** The following visual segmentation examples use Matplotlib, Pillow, and NumPy. You can install them by running: `pip install matplotlib Pillow numpy`. 

##### Example 1

Here is an example of a [model signature](https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus?tab=overview) configured on the server side for automatic mask generation:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def segment_anything(image: data_types.Image) -> List[data_types.Region]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how to make a corresponding unary-unary predict call from the client side to generate masks for all objects in a given image.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Mask1}</CodeBlock>
</TabItem>
</Tabs>

##### Example 2

Here is an example of a model signature configured on the server side for creating masks in a given image:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def predict(image: data_types.Image, regions: List[data_types.Region], dict_inputs: data_types.JSON, round_mask: bool = False, multimask_output: bool = False, denormalize_coord: bool = True) -> List[data_types.Region]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how to make a corresponding unary-unary predict call from the client side to generate masks using a points or boxes prompt.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Mask2}</CodeBlock>
</TabItem>
</Tabs>

:::tip

[Click here](https://docs.clarifai.com/compute/models/model-upload/data-types/) to explore how to make predictions with other data types.

:::


## Unary-Stream Predict Call

This call sends a single input to the model but returns a stream of responses. This is especially useful for tasks that produce multiple outputs from one input, such as generating text completions or progressive predictions from a prompt.

### Text Inputs

Here is an example of a model signature configured on the server side for handling text inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def generate(self, prompt: str) -> Iterator[str]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-stream predict call from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO6}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeStreamInterface}</CodeBlock>
</TabItem>
</Tabs>

### Image Inputs

Here is an example of a model signature configured on the server side for handling image inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def generate(self, image: Image) -> Iterator[str]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding unary-stream predict call from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO6Images}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeStreamInterfaceImages}</CodeBlock>
</TabItem>
</Tabs>


### Video Inputs

> **Note:** The following video tracking example uses Matplotlib and NumPy. You can install them by running: `pip install matplotlib numpy`. 

Here is an example of a [model signature](https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus?tab=overview) configured on the server side for handling video inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def generate(video: data_types.Video, frames: List[data_types.Frame], list_dict_inputs: List[data_types.JSON], denormalize_coord: bool = True) -> Iterator[data_types.Frame]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how to make a corresponding unary-stream predict call from the client side to track objects in a video:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Mask3}</CodeBlock>
</TabItem>
</Tabs>

## Stream-Stream Predict Call

This call enables bidirectional streaming of both inputs and outputs, making it ideal for real-time applications and processing large datasets.

In this setup, multiple inputs can be continuously streamed to the model, while predictions are returned in real time. It’s especially useful for use cases like live video analysis or streaming sensor data.


### Text Inputs

Here is an example of a [model signature](https://docs.clarifai.com/compute/models/upload/#step-1-prepare-the-modelpy-file) configured on the server side for handling text inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
  def stream(self, input_iterator: Iterator[str]) -> Iterator[str]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding stream-stream predict call from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO7Text}</CodeBlock>
</TabItem>
</Tabs>

### Audio Inputs

Here is an example of a model signature configured on the server side for handling audio inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def transcribe_audio(self, audio: Iterator[Audio]) -> Iterator[Text]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can make a corresponding stream-stream predict call from the client side:

<Tabs groupId="code">
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

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">@ModelClass.method
def predict_image(self, image: Image) -> Dict[str, float]:</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can perform batch predictions with image inputs from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>

### Text Inputs

Here is an example of a model signature configured on the server side for handling text inputs:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">class TextClassifier(ModelClass):
  @ModelClass.method
  def predict(self, text: Text) -> float:
    """Single text classification (automatically batched)"""
    return self.model(text.text)</CodeBlock>
</TabItem>
</Tabs>

Here’s how you can perform batch predictions with text inputs from the client side:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
</Tabs>


## Multimodal Predictions

You can make predictions using models that support multimodal inputs, such as a combination of images and text. 

Additionally, you can configure various [inference parameters](https://docs.clarifai.com/sdk/Inference-from-AI-Models/Advance-Inference-Options/#prediction-paramaters) to customize your prediction requests to better suit your use case.

Here is an example:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{C10}</CodeBlock>
</TabItem>
</Tabs>

## Tool Calling

Tool calling in LLMs is a capability that allows models to autonomously decide when and how to call external tools, functions, or APIs during a conversation — based on the user’s input and the context.

You can learn more about it [here](https://docs.clarifai.com/compute/models/inference/open-ai#tool-calling). 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyToolCalling}</CodeBlock>
</TabItem>
</Tabs>

## Asynchronous Inference

Asynchronous inference enables non-blocking execution of model prediction tasks. Instead of waiting for each prediction to complete before proceeding, you can use the `async_predict` and `async_generate` methods to submit multiple requests concurrently and retrieve the results once they're ready.

### Async Prediction 

You can use this for standard prediction tasks that return a complete result in a single response. The output is typically a structured object, like a dictionary or JSON. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{AsyncPredict}</CodeBlock>
</TabItem>
</Tabs>

### Async Generation  

You can use this for generative models that produce output incrementally — such as large language models that stream tokens one by one. The response is an asynchronous stream, which you iterate over.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{AsyncGenerate}</CodeBlock>
</TabItem>
</Tabs>