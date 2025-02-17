---
description: Set up your compute clusters and nodepools
sidebar_position: 2
---


# Clusters and Nodepools

**Set up your compute clusters and nodepools**

<hr />

A compute cluster serves as the primary environment for running models, whether for training or inference. Each cluster consists of multiple nodepools — groups of virtual machine instances with similar configurations, such as CPU/GPU type and memory.

After setting up a custom cluster, you can configure nodepools to optimize resource usage, tailoring the infrastructure to specific hardware, performance, cost, or compliance requirements.

:::note

> The following sections will guide you through creating clusters and nodepools and deploying your models. Note that Compute Orchestration supports only models uploaded to the Clarifai platform via the Python SDK, as outlined [here](model-upload.md).

> Before configuring compute clusters and nodepools, ensure you have completed the necessary prerequisites, as outlined [here](README.mdx#prerequisites).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_compute_cluster.py";
import CL2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_cluster.sh";
import CO5 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_compute_cluster.py";
import CO7 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_nodepool.py";
import CL3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_nodepool.sh";
import CO10 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_nodepool.py";
import CO12 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_deployment.py";
import CL4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_deployment.sh";
import CO15 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_deployment.py";
import CO19 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";


## Cluster Operations

### Create a Compute Cluster

To create a new compute cluster, pass the `compute_cluster_id` and `config_filepath` as arguments to the `create_compute_cluster` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO2}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL2}</CodeBlock>
</TabItem>
</Tabs>


### Initialize the `ComputeCluster` Class

To initialize the `ComputeCluster` class, provide the `user_id` and `compute_cluster_id` as parameters. 

Initialization is essential because it establishes the specific user and compute cluster context, which allows the subsequent operations to accurately target and manage the intended resources.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
</Tabs>


## Nodepool Operations

### Create a Nodepool

To create a new nodepool, use the `create_nodepool` method with the `nodepool_id` and `config_filepath` as parameters.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO7}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL3}</CodeBlock>
</TabItem>
</Tabs>


### Initialize the `Nodepool` Class

To initialize the `Nodepool` class, provide the `user_id` and `nodepool_id` parameters. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO10}</CodeBlock>
</TabItem>
</Tabs>

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
