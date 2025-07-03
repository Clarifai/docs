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

## **Via the UI**

Log in to the Clarifai platform and select the **Compute** option in the top navigation bar.  

![ ](/img/compute-orchestration/compute-1.png)

<br/>


You’ll be redirected to the Compute Orchestration page, where you can view and create clusters, nodepools, and deployments. 

### Step 1: Start Creating a Cluster

Click the **Create a Cluster** button to begin setting up a new cluster along with its associated nodepool.

![ ](/img/compute-orchestration/compute-2.png)

You’ll be redirected to a page, where you can specify the configurations for your new cluster and nodepool. 

### Step 2: Select an Instance

Select an instance type that aligns with your specific requirements. The table displays essential details for each instance type, which helps you make an informed decision.

:::tip

See [Supported Cloud Instances](https://docs.clarifai.com/compute/deployments/cloud-instances) to learn more about the instance types we provide.

:::

![ ](/img/compute-orchestration/compute-3-1.png)

You can narrow down the displayed options using the filters and tools provided in the top bar:

- **Search bar** — Quickly find instance types by name.
- **Provider filter** — Choose from available cloud providers to match your preferred infrastructure.
- **Region filter** — Select the geographic location for the instance. Choosing a region closer to your users can reduce latency and improve performance.
- **Instance type filter** — Directly filter for a specific instance type if you already know what you're looking for.
- **Hardware filter** — Filter based on the instance's available hardware, such as CPU or GPU.
- **Price/hour filter** — Filter instances by their hourly cost, helping you manage your budget.
- **Sorting controls** — Click the sorting arrows next to each column header to sort values in ascending or descending order, making comparisons easier.

Before making your final choice, here are some key considerations to make:

- **Workload requirements (CPU and memory)** — For applications demanding significant processing power, opt for instances with a higher number of CPU cores. For example, a `t3a.2xlarge` offers `7.6 cores`, considerably more than a `t3a.medium` with `1.6 cores`. Also, the `Gi` value displayed alongside the core count (such as `2.99Gi`) indicates the amount of RAM in Gigabytes. A higher `Gi` value signifies more available memory.
- **Cost sensitivity** — The `PRICE/HR` column helps you evaluate cost. Choose an instance that balances price and performance according to your budget.
- **GPU requirements** — If your workload involves intensive tasks like running models for video processing or other GPU-heavy tasks, you'll need to select instances equipped with GPUs.
- **Regulatory compliance** – Ensure the chosen region and instance type comply with any relevant data residency or industry-specific regulations.

Once you've found the right instance, click the circular radio button to the left of the row to select it.

<a id="node-range"></a>

### Step 3: Set Node Autoscaling Range

![ ](/img/compute-orchestration/compute-7.png)

Define the minimum and maximum number of nodes your nodepool can scale to based on workload demand. This ensures your system automatically adjusts its capacity by adding nodes during high traffic and scaling down during low usage, which balances performance and cost.

For example, setting the autoscaling range to **1–5** nodes allows the nodepool to scale up to handle more requests and scale down when demand drops.

- Setting a minimum of **1** ensures that at least one node is always running. This helps avoid cold start delays after periods of inactivity, which is crucial for maintaining low-latency response times. However, it also means incurring continuous compute costs.

- Setting a minimum of **0** reduces costs during idle periods, as no nodes will be running. Keep in mind this can introduce cold starts when traffic resumes, potentially impacting response times.

Choose your range based on the balance you need between cost-efficiency and responsiveness. 

:::info model replicas

[Click here](deploy-model.md#model-replica) to learn how to configure model replicas to distribute your workload efficiently across multiple instances of a model.

:::

### Step 4: Enable Spot Instances

You can enable this option  (_default is off_) if you want to rent spare, unused compute capacity at significantly lower prices compared to regular on-demand instances.

These spot instances are sourced from the underlying cloud provider (such as AWS or GCP) based on the region and instance type you've selected.

If spot instances are unavailable, Clarifai will automatically fall back to on-demand instances to maintain service continuity.

Keep in mind that spot instances can be terminated at any time if the capacity is reclaimed by the provider, which may cause temporary disruptions. For higher reliability and uninterrupted service, it's recommended to leave this option disabled and use on-demand instances only.


### Step 5: Provide Cluster and Nodepool Details

Fill out the form to specify the details for your cluster and nodepool. 

![ ](/img/compute-orchestration/compute-8.png)


- **Cluster ID** — Enter a unique identifier for your cluster. This ID is used when deploying models and should reflect the cluster’s purpose or workload. It is auto-filled based on your selected instance type, but you can modify it as needed.
- **Cluster Description** — Optionally, provide a short description that summarizes the details related to the cluster. 
- **Nodepool ID** — Enter a unique identifier for your nodepool. This ID is used when deploying models and should reflect the nodepool’s purpose or workload. It is auto-filled based on your selected instance type, but you can modify it as needed.
- **Nodepool Description** — Optionally, provide a short description that summarizes the details related to the nodepool. 
- **Personal Access Token (PAT)** — Select a [PAT](https://docs.clarifai.com/control/authentication/pat) to authenticate your identity when connecting to the cluster. The token must have the necessary permissions to manage compute resources. If the selected PAT is deleted, any associated compute functionality will stop working. Click the dropdown to view available PATs, or generate a new one by selecting "Create new Personal Access Token" or by visiting the [Security section](https://clarifai.com/settings/security) of your Personal Settings.

### Step 6: Finalize and Create the Cluster

Before you enter the required details for creating a cluster, the **Create Cluster** button in the upper-right corner will be disabled (greyed out).

After providing the details, the button will become active. Click it to launch your cluster and nodepool.

You'll then be redirected to your newly created cluster's page, where its associated nodepool will be listed in a table.

![ ](/img/compute-orchestration/compute-9.png)

> **Note:** _Alternatively, you can create a new nodepool from an existing cluster by clicking the **Create Nodepool** button in the upper-right corner of the cluster's page.You’ll be redirected to a page where you can specify the configurations for your new nodepool._ 

If you click on a nodepool listed in the table, you'll be taken to its individual page, where you can view its detailed information, such as the cluster type, instance type, and any resource deployments associated with it. 

![ ](/img/compute-orchestration/compute-10.png)


## **Via the API**


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_compute_cluster.py";
import CL2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_cluster.sh";
import CO5 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_compute_cluster.py";
import CO7 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_nodepool.py";
import CL3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_nodepool.sh";
import CO10 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_nodepool.py";

import CO1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/compute_cluster_config.yaml";
import CO6 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/nodepool_config.yaml";
import CO11 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/deployment_config.yaml";


### Prerequisites

#### Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```
_Note that if you want to use the Clarifai CLI, you'll need to authenticate your CLI session with Clarifai. Learn how to do that [here](https://docs.clarifai.com/additional-resources/api-overview/cli)._

#### Get a PAT

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate it in your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

Then, set it as an environment variable in your script.

```text
import os
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" # replace with your own PAT key 
```

#### Set up Project Directory

- Create an overarching directory to store your project files.
- Inside this directory, create a Python file for your Compute Orchestration code.
- Create a `configs` folder to store your YAML configuration files for clusters, nodepools, and deployments.

Then, create the following files in the `configs` folder:

**1.** `compute_cluster_config.yaml`:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO1}</CodeBlock>
</TabItem>
</Tabs>

**2.** `nodepool_config.yaml`:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO6}</CodeBlock>
</TabItem>
</Tabs>

**3.** `deployment_config.yaml`:

_We'll use this later to [deploy the model](deploy-model.md)._

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{CO11}</CodeBlock>
</TabItem>
</Tabs>

### Create a Cluster 

To create a new compute cluster, pass the `compute_cluster_id` and `config_filepath` as arguments to the `create_compute_cluster` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO2}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL2}</CodeBlock>
</TabItem>
</Tabs>

After creating it, initialize the `ComputeCluster` class by providing the `user_id` and `compute_cluster_id` parameters. 

> Initialization is essential because it establishes the specific user and compute cluster context, which allows the subsequent operations to accurately target and manage the intended resources.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO5}</CodeBlock>
</TabItem>
</Tabs>


### Create a Nodepool 

To create a new nodepool, use the `create_nodepool` method with the `nodepool_id` and `config_filepath` parameters.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO7}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL3}</CodeBlock>
</TabItem>
</Tabs>


After creating it, initialize the `Nodepool` class by providing the `user_id` and `nodepool_id` parameters. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO10}</CodeBlock>
</TabItem>
</Tabs>
