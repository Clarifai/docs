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
import CO9Output from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_9_output.txt";
import CO8Output from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/pythonic_8_output.txt";

import RawProtobuf from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/raw_protobuf.py";
import RawProtobufOutput from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/raw_protobuf_output.txt";
import StreamProtobuf from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/stream_protobuf.py";
import StreamProtobufOutput from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/stream_protobuf_output.txt";

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

import SetInferenceParams from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/set_inference_params.py";
import CLIUnaryUnary from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_unary_unary.sh";
import CLIUnaryStream from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_unary_stream.sh";
import CLIInferenceParams from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_inference_params.sh";

import CLIUnaryUnaryImage from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_unary_unary_image.sh";
import CLIUnaryStreamImage from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_unary_stream_image.sh";

import SegmentPointsBoxes from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/segment_points_boxes.txt";

## Prerequisites

### Install Clarifai Packages

- Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package. This also installs the [Command Line Interface (CLI)](https://docs.clarifai.com/resources/api-overview/cli).

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

- Install the latest version of the Clarifai [Node.js](https://github.com/Clarifai/clarifai-nodejs) SDK package.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> npm install clarifai-nodejs </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a [PAT](https://docs.clarifai.com/control/authentication/pat/#how-to-create-a-pat-on-the-platform) (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can get one by navigating to **Settings** in the collapsible left sidebar, selecting **Secrets**, and creating or copying an existing token from there.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`. This also authenticates your session when using the Clarifai’s CLI. 

> **Note:** Storing your PAT in an environment variable is more secure than hardcoding it directly in your code. 


<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

## Prediction Tips

#### Set Up Dedicated Deployment

To use our dedicated Compute Orchestration capabilities, ensure your model is [deployed](https://docs.clarifai.com/compute/deployments/deploy-model). Then, specify the `deployment_id` parameter — alternatively, you can specify both `compute_cluster_id` and `nodepool_id`, as explained [here](https://docs.clarifai.com/compute/inference/#predict-with-compute-orchestration). 

:::info

For dedicated deployments owned by an organization, alongside the `deployment_id`, also provide the organization ID as the `Model`'s `deployment_user_id`.

:::

```text
model = Model(
    url="MODEL_URL_HERE",  
    deployment_id="DEPLOYMENT_ID_HERE",
    # if you are targeting a specific deployment owned by an organization:
    # deployment_user_id="ORGANIZATION_ID_HERE", 
    # Or, set cluster and nodepool 
    # compute_cluster_id = "COMPUTE_CLUSTER_ID_HERE",
    # nodepool_id = "NODEPOOL_ID_HERE"
)
```

:::caution note

Only a curated set of featured models can be run using the default Clarifai [Shared SaaS (Serverless)](https://docs.clarifai.com/compute/overview#deployment-options) deployment option. To run inferences with any other models, you must deploy them to your own cluster and nodepool and specify the `deployment_id` parameter.

:::

#### Initialize the Model Client

You can initialize the model client using either explicit IDs or the full model URL.

> **Note:** By default, the latest version of the model is used for inference. However, you can specify a different version when initializing the model. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyModelClient}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeModelClient}</CodeBlock>
</TabItem>
</Tabs>

#### Set Up Inference Parameters

You can configure various [inference parameters](https://docs.clarifai.com/compute/inference/advanced/#types-of-inference-parameters) to customize your prediction requests to better suit your use case.

Here is an example using the `max_tokens` parameter:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{SetInferenceParams}</CodeBlock>
</TabItem>
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-bash">{CLIInferenceParams}</CodeBlock>
</TabItem>
</Tabs>

:::note

Before making a prediction with a model, it’s important to understand how its prediction methods are structured. Learn more [here](https://docs.clarifai.com/compute/inference/clarifai/#structure-of-prediction-methods). 

:::

## Unary-Unary Predict Call

This is the simplest form of prediction: a single input is sent to the model, and a single response is returned. It’s ideal for quick, non-streaming tasks, such as classifying an image or analyzing a short piece of text.

> **NOTE**: Streaming means that the response is streamed back token by token, rather than waiting for the entire completion to be generated before returning. This is useful for building interactive applications where you want to display the response as it's being generated.

### Text Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO5Text}</CodeBlock>
</TabItem>
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-bash">{CLIUnaryUnary}</CodeBlock>
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

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-bash">{CLIUnaryUnaryImage}</CodeBlock>
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

##### Example 1

Here’s an example that uses the [sam2_1-hiera-base-plus](https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus) model to automatically generate masks for all objects in a given image.

<details>
  <summary>Arguments and Returns</summary>

These are the model’s arguments and return values:

##### Arguments

* **image (Image)**: The input image

##### Returns

* **List[Region]**: List of generated masks, which can be accessed via `region.mask` or `region.proto.region_info.mask`.

</details>


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Mask1}</CodeBlock>
</TabItem>
</Tabs>

##### Example 2

Here’s an example that uses the sam2_1-hiera-base-plus model to generate masks using points or boxes prompt.

<details>
  <summary>Arguments and Returns</summary>

These are the model’s arguments and return values:

##### Arguments

* **image (Image)**: The input image.

* **regions (List[Region])**: A list of region prompts, where each region can specify either points or a bounding box.

  * To indicate a positive (object) point, set:
    `region.concepts = [Concepts(name="1", value=1)]`
  * To indicate a negative (background) point, set:
    `region.concepts = [Concepts(name="0", value=0)]`

* **dict_inputs (Dict)**: Keyword arguments passed directly to the `SAM2ImagePredictor.predict(...)` method. Refer to [this example](https://github.com/facebookresearch/sam2/blob/main/notebooks/image_predictor_example.ipynb) for details.

> **Note:** You may provide either `regions` or `dict_inputs`, but not both.

* **multimask_output (bool)**: Whether to return multiple masks for each prompt. Defaults to `False`.

* **return_type (str)**: Specifies the type of output to return. Must be one of:

  * `box` — return bounding boxes only
  * `mask` — return masks only
  * `all` — return both bounding boxes and masks

##### Returns

* **List[Region]**: A list of generated regions. Masks can be accessed via `region.mask` or `region.proto.region_info.mask`.

</details>


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

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO6}</CodeBlock>
</TabItem>
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-bash">{CLIUnaryStream}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeStreamInterface}</CodeBlock>
</TabItem>
</Tabs>

### Image Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO6Images}</CodeBlock>
</TabItem>
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-bash">{CLIUnaryStreamImage}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeStreamInterfaceImages}</CodeBlock>
</TabItem>
</Tabs>

### Video Inputs

Here’s an example that uses the [sam2_1-hiera-base-plus](https://clarifai.com/meta/segment-anything/models/sam2_1-hiera-base-plus) model to automatically track objects in a video.

<details>
  <summary>Arguments and Returns</summary>

These are the model’s arguments and return values:

##### Arguments

* **video (Video):** The input video.

* **frames (List[Frame]):**
  A list of frames containing tracking prompts. For each frame:

  * `frame.data.regions` specifies object locations using points or bounding boxes, as described in the `predict` method.
  * The frame index is identified by `frame.frame_info.index`.
  * The object identity is specified using `frame.data.regions[...].track_id`.

* **list_dict_inputs (List[Dict]):**
  A list of dictionaries following the `SAM2VideoPredictor.add_new_points_or_box()` method signature. Each dictionary may include `points`, `box`, `obj_id`, `labels`, and `frame_idx`. Refer to [this example](https://github.com/facebookresearch/sam2/blob/main/notebooks/video_predictor_example.ipynb) for details.

* **return_type (str):** Specifies the type of output to return. Must be one of:

  * `box` — return bounding boxes only
  * `mask` — return masks only
  * `all` — return both bounding boxes and masks

> **Note:** You may provide either `frames` or `list_dict_inputs`, but not both at the same time.

##### Returns

* **Iterator[Frame]:** An iterator over frames containing the generated masks and tracked object results for each frame.


</details>



<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Mask3}</CodeBlock>
</TabItem>
</Tabs>


## Stream-Stream Predict Call

This call enables bidirectional streaming of both inputs and outputs, making it ideal for real-time applications and processing large datasets.

In this setup, multiple inputs can be continuously streamed to the model, while predictions are returned in real time. It’s especially useful for use cases like live video analysis or streaming sensor data.

### Text Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO7Text}</CodeBlock>
</TabItem>
</Tabs>


### Audio Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO7}</CodeBlock>
</TabItem>
</Tabs>


## Multimodal Predictions

You can make predictions using models that support multimodal inputs, such as a combination of images and text. 

Here is an example:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{C10}</CodeBlock>
</TabItem>
</Tabs>


## Batch Prediction Handling

Clarifai’s model framework seamlessly supports both single and batch predictions through a unified interface. It can adapt to the input format, so no code changes are needed.

The system automatically detects the type of input provided: 

- If you pass a single input, it’s treated as a singleton batch;

- If you pass multiple inputs as a list, they are handled as a parallel batch.

This means you can pass either a single input or a list of inputs, and the system will automatically process them appropriately — making your code cleaner and more flexible.

### Text Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CO9Output}</CodeBlock>
</details>

### Image Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CO8Output}</CodeBlock>
</details>

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

## Raw Protobuf Response Information

By default, prediction methods in the [`Model`](https://docs.clarifai.com/resources/api-references/python#model) class — such as `predict()`, `generate()`, and others — return only the processed, user-friendly response.

If you need deeper insight, you can pass `with_proto=True`, which makes the method return a tuple containing both the processed result and the underlying raw Protobuf response.

Note that `with_proto=False` is the default behavior, meaning only the processed result is returned without the raw protobuf data.

> **Note:**  This parameter is supported in both [synchronous and asynchronous](#asynchronous-inference) model operations.

### Predict With Protobuf 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{RawProtobuf}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{RawProtobufOutput}</CodeBlock>
</details>

### Stream With Protobuf

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{StreamProtobuf}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{StreamProtobufOutput}</CodeBlock>
</details>

:::tip

Retrieving raw Protobuf response information works with any custom method defined in the `ModelClient` class. For example:

```python
result, proto = model.my_custom_method(
    input_data="some data",
    temperature=0.7,
    with_proto=True
)
```


:::