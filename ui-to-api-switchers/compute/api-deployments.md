
import TOCInline from '@theme/TOCInline';

<div className="toc-inline">
  <TOCInline toc={toc} maxHeadingLevel={2}  
  />
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO12 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/create_deployment.py";
import CL4 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_create_deployment.sh";
import CO15 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/init_deployment.py";
import CO19 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";

## Deployment Operations

### Create a Deployment

To deploy a model within a nodepool, provide the `deployment_id` and `config_filepath` parameters to the `create_deployment` method of the `Nodepool` class.

:::note

Each model or workflow can only have one deployment per nodepool.

:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO12}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL4}</CodeBlock>
</TabItem>
</Tabs>


### Initialize the `Deployment` Class

To initialize the `Deployment` class, provide the `user_id` and `deployment_id` parameters. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO15}</CodeBlock>
</TabItem>
</Tabs>



## Predict With Deployed Model

Once your model is deployed, it can be used to [make predictions](https://github.com/Clarifai/examples/tree/main/models/model_upload#model-prediction) by calling the appropriate prediction methods. Clarifai's Compute Orchestration system offers different types of prediction calls to suit various use cases.

:::warning important

To ensure proper routing and execution, you must specify the `deployment_id` parameter. This parameter is essential in directing prediction requests to the appropriate cluster. For example, you can assign a specific deployment ID to route requests to a GCP cluster, a different ID for an AWS cluster, and yet another for an on-premises deployment. This is important for performance optimization, scalability, and better load balancing. 

:::

:::tip

The following examples illustrate how to make predictions with inputs provided as publicly accessible URLs. [Click here](https://docs.clarifai.com/sdk/Inference-from-AI-Models/) to learn how to make predictions using other types of inputs and models. 

:::

### Unary-Unary Predict Call

This is the simplest type of prediction. In this method, a single input is sent to the model, and it returns a single response. This is ideal for tasks where a quick, non-streaming prediction is required, such as classifying an image.

It supports the following prediction methods:

- `predict_by_url`  — Use a publicly accessible URL for the input.
- `predict_by_bytes` — Pass raw input data directly.
- `predict_by_filepath` — Provide the local file path for the input. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO19}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL22}</CodeBlock>
</TabItem>
</Tabs>

### Unary-Stream Predict Call 

The **Unary-Stream** predict call processes a single input, but returns a stream of responses. It is particularly useful for tasks where multiple outputs are generated from a single input, such as generating text completions from a prompt.

It supports the following prediction methods:

- `generate_by_url`  — Provide a publicly accessible URL and handle the streamed responses iteratively.
- `generate_by_bytes` — Use raw input data.
- `generate_by_filepath` — Use a local file path for the input.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO20}</CodeBlock>
</TabItem>
</Tabs>

###  Stream-Stream Predict Call 

The **stream-stream** predict call enables bidirectional streaming of both inputs and outputs, making it highly effective for processing large datasets or real-time applications.

In this setup, multiple inputs can be continuously sent to the model, and the corresponding multiple predictions are streamed back in real-time. This is ideal for tasks like real-time video processing/predictions or live sensor data analysis.

It supports the following prediction methods:

- `stream_by_url` — Stream a list of publicly accessible URLs and receive a stream of predictions. It takes an iterator of inputs and returns a stream of predictions.
- `stream_by_bytes` — Stream raw input data.
- `stream_by_filepath` — Stream inputs from local file paths.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO21}</CodeBlock>
</TabItem>
</Tabs>
