---
description: Train and deploy any model on any compute infrastructure, at any scale
pagination_prev: null
sidebar_position: 6.1
unlisted: true
---

# Compute Orchestration

**Train and deploy any model on any compute infrastructure, at any scale**
<hr />

:::note

Compute Orchestration is currently in [private preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us or sign up [here](https://forms.gle/Cj9r8wgeYk5HQ67Y9).

:::

Clarifai’s Compute Orchestration offers a streamlined solution for managing the infrastructure required for training, deploying, and scaling machine learning models and workflows. 

This flexible system supports any compute instance — across various hardware providers and deployment methods — and provides automatic scaling to match workload demands.

[Click here](https://docs.clarifai.com/portal-guide/compute-orchestration) to learn more about our Compute Orchestration system. 

:::tip Tips

- Run the following command to clone the repository containing various Compute Orchestration examples: `git clone https://github.com/Clarifai/examples.git`. After cloning, navigate to the `ComputeOrchestration` folder to follow along with the tutorial.

- For a step-by-step tutorial, check the [CRUD operations notebook](https://github.com/Clarifai/examples/blob/main/ComputeOrchestration/crud_operations.ipynb). 

:::

:::info Clarifai CLI

Clarifai provides a user-friendly command line interface (CLI) that simplifies Compute Orchestration tasks. With the CLI, you can easily manage the infrastructure required for deploying and scaling machine learning models, even without extensive MLOps expertise.
This tool makes it easy to set up clusters, configure nodepools, and deploy models directly from the command line. You can follow its step-by-step tutorial provided [here](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/cli/README.md).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO1 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/compute_cluster_config.yaml";
import CO2 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/create_compute_cluster.py";
import CO3 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/get_compute_cluster.py";
import CO4 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/list_compute_cluster.py";
import CO5 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/init_compute_cluster.py";
import CO6 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/nodepool_config.yaml";
import CO7 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/create_nodepool.py";
import CO8 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/get_nodepool.py";
import CO9 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/list_nodepool.py";
import CO10 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/init_nodepool.py";
import CO11 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/deployment_config.yaml";
import CO12 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/create_deployment.py";
import CO13 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/get_deployment.py";
import CO14 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/list_deployment.py";
import CO15 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/init_deployment.py";
import CO16 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/delete_deployments.py";
import CO17 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/delete_nodepools.py";
import CO18 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/delete_clusters.py";
import CO19 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";

import CL1 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli-1.yaml";
import CL2 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_create_cluster.sh";
import CL3 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_create_nodepool.sh";
import CL4 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_create_deployment.sh";
import CL5 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_list_cluster.sh";
import CL6 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_list_nodepool.sh";
import CL7 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_list_deployment.sh";
import CL8 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_delete_cluster.sh";
import CL9 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_delete_nodepool.sh";
import CL10 from "!!raw-loader!../../code_snippets/python-sdk/compute-orchestration/cli_delete_deployment.sh";


## Prerequisites

#### Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```

#### Get a PAT

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate it in your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

Then, set it as an environment variable in your script.

```text
import os
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" # replace with your own PAT key 
```

#### Set up Project Directory

- Create a directory to store your project files.
- Inside this directory, create a Python file for your Compute Orchestration code.
- Create a `configs` folder to store your YAML configuration files for clusters, nodepools, and deployments.

In the `configs` folder:

**1.** `compute_cluster_config.yaml`:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO1}</CodeBlock>
</TabItem>
</Tabs>

**2.** `nodepool_config.yaml`:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO6}</CodeBlock>
</TabItem>
</Tabs>

**3.** `deployment_config.yaml`:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO11}</CodeBlock>
</TabItem>
</Tabs>

Optionally, if you want to use the Clarifai CLI, create a login configuration file for storing your account credentials:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CL1}</CodeBlock>
</TabItem>
</Tabs>

Then, authenticate your CLI session with Clarifai using the stored credentials in the configuration file:

```bash
$ clarifai login --config <config-filepath>
```

## Cluster Operations

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

#### Get a Cluster

To get a specific compute cluster, pass the `compute_cluster_id` to the `compute_cluster` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO3}</CodeBlock>
</TabItem>
</Tabs>

#### List All Clusters

To list your existing compute clusters, call the `list_compute_clusters` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO4}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL5}</CodeBlock>
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

## Nodepool Operations

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

#### Get a Nodepool

To get a specific nodepool, provide the `nodepool_id` to the `nodepool` method of the `ComputeCluster` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>

#### List All Nodepools

To list the existing nodepools, call the `list_nodepools` method of the `ComputeCluster` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL6}</CodeBlock>
</TabItem>
</Tabs>

#### Initialize the `Nodepool` Class

To initialize the `Nodepool` class, provide the `user_id` and `nodepool_id` parameters. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO10}</CodeBlock>
</TabItem>
</Tabs>

## Deployment Operations

#### Create a Deployment

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

#### Get a Deployment

To get a specific deployment, provide the `deployment_id` to the `deployment` method of the `Nodepool` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO13}</CodeBlock>
</TabItem>
</Tabs>

#### List All Deployments

To list existing deployments, call the `list_deployments` method of the `Nodepool` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO14}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL7}</CodeBlock>
</TabItem>
</Tabs>

#### Initialize the `Deployment` Class

To initialize the `Deployment` class, provide the `user_id` and `deployment_id` parameters. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO15}</CodeBlock>
</TabItem>
</Tabs>

## Predict With Deployed Model

Once your model is deployed, you can use it to make predictions. To do this, pass the `compute_cluster_id` and `nodepool_id` to the `predict` method.

For example, here is how you can make a prediction using the deployed model.  

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO19}</CodeBlock>
</TabItem>
</Tabs>

:::tip

[Click here](https://docs.clarifai.com/sdk/Inference-from-AI-Models/) to learn more about how to make predictions using different types of models. 

:::

## Delete Resources

#### Delete Deployments

To delete deployments, pass a list of deployment IDs to the `delete_deployments` method of the `Nodepool` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO16}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL10}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Nodepools

To delete nodepools, provide a list of nodepool IDs to the `delete_nodepools` method of the `ComputeCluster` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO17}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL9}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Compute Clusters

To delete compute clusters, provide a list of compute cluster IDs to the `delete_compute_clusters` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO18}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL8}</CodeBlock>
</TabItem>
</Tabs>

