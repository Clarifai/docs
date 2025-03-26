---
description: Set up capabilities that match your computational needs
sidebar_position: 1
toc_max_heading_level: 4
---

# Create Clusters and Nodepools

**Set up capabilities that match your computational needs**
<hr />

A compute cluster serves as the main environment where models are deployed, whether for training or inference. Each cluster can contain multiple nodepools, which are groups of virtual machine instances with similar configurations (such as CPU/GPU type, memory). 

After creating a custom cluster, you can configure nodepools within it to optimize resource usage. These nodepools will help tailor the infrastructure to meet the specific hardware, performance, cost, or regulatory compliance of your machine learning needs.

For example, you may create a nodepool for GPU-intensive tasks and another for lighter workloads running on CPUs.

With clusters and nodepools, you can organize and manage (_orchestrate_) the compute resources necessary for running your models and workflows. 

:::info Shared Compute

By default, Clarifai offers a Shared SaaS (Serverless) compute cluster with a nodepool. This allows you to quickly get started without configuring any underlying compute instances (such as clusters, nodepools, and accelerators) — the pre-configured nodepool dynamically scales resources based on your model's needs.

If you opt for the shared cluster, you do not need to make any setup configurations on the Compute Orchestration pane — your models will automatically be deployed using it.  

Note that the default setup is ideal for general use cases and may not meet more specific or demanding performance scenarios. 

:::

## **Via the API**

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
import CO19 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";


### Cluster Operations

#### Create a Compute Cluster

To create a new compute cluster, pass the `compute_cluster_id` and `config_filepath` as arguments to the `create_compute_cluster` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO2}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL2}</CodeBlock>
</TabItem>
</Tabs>


#### Initialize the `ComputeCluster` Class

To initialize the `ComputeCluster` class, provide the `user_id` and `compute_cluster_id` as parameters. 

Initialization is essential because it establishes the specific user and compute cluster context, which allows the subsequent operations to accurately target and manage the intended resources.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
</Tabs>


### Nodepool Operations

#### Create a Nodepool

To create a new nodepool, use the `create_nodepool` method with the `nodepool_id` and `config_filepath` as parameters.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO7}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL3}</CodeBlock>
</TabItem>
</Tabs>


#### Initialize the `Nodepool` Class

To initialize the `Nodepool` class, provide the `user_id` and `nodepool_id` parameters. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO10}</CodeBlock>
</TabItem>
</Tabs>


### Predict With Deployed Model

Once your model is deployed, it can be used to [make predictions](https://github.com/Clarifai/examples/tree/main/models/model_upload#model-prediction) by calling the appropriate prediction methods. Clarifai's Compute Orchestration system offers different types of prediction calls to suit various use cases.

:::warning important

To ensure proper routing and execution, you must specify the `deployment_id` parameter. This parameter is essential in directing prediction requests to the appropriate cluster. For example, you can assign a specific deployment ID to route requests to a GCP cluster, a different ID for an AWS cluster, and yet another for an on-premises deployment. This is important for performance optimization, scalability, and better load balancing. 

:::

:::tip

The following examples illustrate how to make predictions with inputs provided as publicly accessible URLs. [Click here](https://docs.clarifai.com/sdk/Inference-from-AI-Models/) to learn how to make predictions using other types of inputs and models. 

:::

#### Unary-Unary Predict Call

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

#### Unary-Stream Predict Call 

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

####  Stream-Stream Predict Call 

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

## **Via the UI**

### How to Create a Cluster

Log in to the Clarifai platform and select the **Compute** option in the top navigation bar.  

![ ](/img/compute-orchestration/compute-1.png)

<br/>

> _Alternatively, you can click the **Compute Settings** button found in the **Deployments** tab on a model's viewer page or anywhere this button appears on the platform._

> ![ ](/img/compute-orchestration/compute-1-1.png)

You’ll be redirected to the Compute Orchestration pane.  Then, click the **Create a new cluster** button. 

![ ](/img/compute-orchestration/compute-2.png)

You’ll be redirected to a page, where you can specify the configurations for your new cluster. 

![ ](/img/compute-orchestration/compute-3.png)

- **Cluster ID** — Provide an ID that helps identify the cluster to use when deploying your models. We recommend an easy-to-remember ID that’s related to the cluster’s use case. 

- **Cluster Description** — Optionally, provide a short description that summarizes the details related to the cluster. 

- **Cluster Type** — Choose the type of cluster you want to use:

    - **Dedicated Clarifai-managed cloud compute** — Run workloads in dedicated compute instances in Clarifai's cloud. 
    - **Dedicated self-managed compute** (*coming soon*) — Bring your own existing dedicated compute resources, either from cloud or on-premise instances. If you're interested in using your own cloud or on-prem compute, let us know by sending feedback or contacting our support department.
    
- **Instance Settings** — Select your preferred cloud provider and geographic region for deploying your models (*more options are coming soon*). Note that the choice depends on several factors, including performance needs, costs, and regulatory compliance. For example, selecting an instance type closer to your users reduces network latency, leading to faster response times. 

- **Personal Access Token (PAT)** — Select a PAT that is used to verify your identity when connecting to the cluster. Note that if the selected PAT is deleted, the associated compute resources will no longer function. You can generate a new PAT by clicking the "Create new Personal Access Token" link at the bottom of the corresponding dropdown list or by going to your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

After configuring the settings, click the **Continue** button in the upper-right corner. You’ll be redirected to a page where you can create a nodepool related to the cluster. 

### How to Create a Nodepool

After clicking the **Continue** button upon creating a cluster, you’ll be redirected to a page where you can specify the configurations for your new nodepool. 

> _Alternatively, you can create a new nodepool from an existing cluster by clicking the **Create a new nodepool** button in the upper-right corner of the cluster's page._

> ![ ](/img/compute-orchestration/compute-7.png)

These are the configurations options you can set for your new nodepool:

![ ](/img/compute-orchestration/compute-8.png)

- **Instance Configuration** — Provide an ID that helps identify the nodepool to use when deploying your models. We recommend an easy-to-remember ID that’s related to the nodepool’s use case. Optionally, provide a short description that summarizes the details related to the nodepool. 

- **Node Autoscaling Range** — Specify the minimum and maximum number of nodes that the system can automatically scale within a nodepool, based on the workload demand. This means that the system will spin up more nodes to handle increased traffic or scale down when demand decreases to optimize costs. For instance, you can set your nodepool to scale between 1 and 5 nodes, depending on how many requests your model is processing. A minimum value of 1 (rather than 0) prevents cold start delays after inactivity, which is essential for meeting latency requirements, though it ensures that at least one node will always be running, which incurs compute costs. Alternatively, setting the minimum to 0 eliminates costs during idle periods but may introduce cold start delays when traffic resumes. 

- **Instance Type** — Select the instance type you would like the deployment to run on.  You can find an explanation of the available instance types [here](https://docs.clarifai.com/portal-guide/compute-orchestration/instance-types). 

- **Spot Instances** (_default is off_) — Enable this option if you want to rent spare, unused compute capacity at significantly lower prices compared to regular on-demand instances. If no spot instances are available, Clarifai will automatically fall back to on-demand instances. Note that spot instances can be terminated if capacity is needed elsewhere, making your node temporarily unavailable. For greater reliability, leave this option unchecked to use only on-demand instances.

After configuring the settings, click the **Create** button in the upper-right corner. You'll then be redirected to your cluster's page, where the newly created nodepool will be listed in a table.

![ ](/img/compute-orchestration/compute-9.png)

If you click on a nodepool listed in the table, you'll be taken to its individual page where you can view its detailed information, such as the cluster type, instance type, and any resource deployments associated with it. 

![ ](/img/compute-orchestration/compute-10.png)

### How to Deploy a Model

After creating a nodepool, you can use it to deploy a model. 

[Click here](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model) to learn more about deploying a model using a nodepool. 
