---
description: Streamlined Compute Orchestration for model deployment
sidebar_position: 1
draft: true
---

# Clarifai CLI

**Streamlined Compute Orchestration for model deployment**
<hr />

Clarifai provides a user-friendly command line interface (CLI) that simplifies Compute Orchestration tasks. With the CLI, you can easily manage the infrastructure required for deploying and scaling machine learning models, even without extensive MLOps expertise.

This tool makes it easy to set up clusters, configure nodepools, and deploy models directly from the command line. 

:::tip

You can also follow the step-by-step tutorial provided [here](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/cli/README.md). 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CL1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli-1.yaml";
import CL2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli-2.yaml";
import CL3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli-3.yaml";
import CL4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli-4.yaml";

## Prerequisites

### Installation

To begin, install the latest version of the clarifai Python package.

```text
pip install --upgrade clarifai
```

### Create Configuration Files

**1.** Create a configuration file for storing your Clarifai account credentials. 

:::note

You can get a PAT (Personal Access Token) key by navigating to your Personal Settings page in the [Security section](https://clarifai.com/settings/security). You need it for authenticating your connection to the Clarifai platform.

:::

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CL1}</CodeBlock>
</TabItem>
</Tabs>

:::info

You can also get the following examples of configuration files [here](https://github.com/Clarifai/examples/tree/main/ComputeOrchestration/configs).

:::

**2.** Create a configuration file for storing your compute cluster settings. Here is an example:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CL2}</CodeBlock>
</TabItem>
</Tabs>

**3.** Create a configuration file for storing your nodepool settings. Here is an example:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CL3}</CodeBlock>
</TabItem>
</Tabs>

**4.** Create a configuration file for storing your model deployment settings. Here is an example:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CL4}</CodeBlock>
</TabItem>
</Tabs>

## Login

Log in to the CLI using your Clarifai account credentials stored in a configuration file.

```bash
$ clarifai login --config <config-filepath>
```

## Create Cluster and Nodepool

First, create a new compute cluster. 

```bash
$ clarifai computecluster create --config <compute-cluster-config-filepath>
```
Then, create a new nodepool within the compute cluster. 

```bash
$ clarifai nodepool create --config <nodepool-config-filepath>
```

## Deployment

After setting up your cluster and nodepool, you can proceed to deploy your model using the settings defined in a deployment configuration file.

```bash
$ clarifai deployment create --config <deployment-config-filepath>
```

## List Resources

You can list your existing compute clusters. 

```bash
$ clarifai computecluster list
```
You can list your existing nodepools in a cluster. 

```bash
$ clarifai nodepool list --compute_cluster_id <compute-cluster-id>
```
You can list your existing deployments in a nodepool. 

```bash
$ clarifai deployment list --nodepool_id <nodepool-id>
```

## Delete Resources

You can delete an existing deployment.

```bash
$ clarifai deployment delete --nodepool_id <nodepool-id> --deployment_id <deployment-id>
```
You can delete an existing nodepool. 

```bash
$ clarifai nodepool delete --compute_cluster_id <compute-cluster-id> --nodepool_id <nodepool-id>
```
You can delete an existing compute cluster. 

```bash
$ clarifai computecluster delete --compute_cluster_id <compute-cluster-id>
```