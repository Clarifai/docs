---
description: Edit and delete deployments, clusters, and nodepools
sidebar_position: 3
toc_max_heading_level: 4
---

# Manage Your Compute

**Edit and delete deployments, nodepools, and clusters**
<hr />


You can efficiently manage your deployments, nodepools, and clusters within the Clarifai's platform to optimize performance and costs, as well as fine-tune your compute environment for tasks like model inference.

You can easily edit configurations, adjust resource allocations, or remove unused resources to free up compute infrastructure as your workload requirements evolve.


## **Via the UI**

### Deployments

The **Deployments** page provides a centralized workspace for viewing, monitoring, and managing all deployments across your compute infrastructure.

To access the page, expand the **Compute** section in the collapsible left navigation sidebar and select **Deployments**. 

This opens a comprehensive dashboard where you can track deployment activity, monitor resource usage, and perform deployment-related actions from a single interface.

![](/img/compute-orchestration/compute-26-2.png)

From the **Deployments** page, you can:

- **Create a deployment** — Click the **Create Deployment** button in the upper-right corner to deploy a new model.
- **Filter deployments** — Quickly narrow down deployments using the filter controls at the top of the page. You can filter by **Cluster**, **Nodepool**, **GPU Hardware**, **Model**, or deployment **Status**.
- **View deployment details** — Each deployment row displays key information, including the deployment name, associated model, nodepool, region, current status, replica configuration, usage metrics, estimated cost, and last modified date.
- **Monitor deployment status** — Easily identify the current state of a deployment, such as `Idle` when no replicas are running, along with configured minimum and maximum replica limits.
- **Manage deployments** — Use the action controls on each deployment row to:
  - Pause traffic; that is, scale the deployment to zero replicas (stopping all traffic until restarted)
  - Open the deployed model in the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground) for testing
  - View deployment logs and runtime details
- **Access additional actions** — Click the three-dot menu at the end of a deployment row to open additional management options, including:
  - Copy the deployment ID
  - View the deployment
  - Edit the deployment
  - Delete the deployment
- **Track activity trends** — The activity graph provides a quick visual overview of recent deployment activities and usage patterns over the past several days. 

> **Note:** The page also includes sorting and layout options, allowing you to switch between **List** and **Grid** views for easier deployment management.

:::note Alternatively

If you click a deployment listed on the page, you'll be redirected to its dedicated details page, where you can view deployment information, monitor runtime activity, manage scaling and traffic settings, access logs, and perform additional deployment management tasks.

![ ](/img/compute-orchestration/compute-5.png)

:::


### Nodepools

The **Nodepools** page provides a centralized view for managing the compute resources available across your clusters. It allows you to monitor nodepool capacity, hardware configuration, deployment usage, and operational status from a single interface.

To access the page, expand the **Compute** section in the collapsible left navigation sidebar and select **Nodepools**. 

This opens the **Nodepools** dashboard, where you can view, filter, and manage all nodepools across your infrastructure.

![ ](/img/compute-orchestration/compute-18.png)

From the **Nodepools** page, you can:

- **Create a nodepool** — Click the **Create Nodepool** button in the upper-right corner to provision a new nodepool with your preferred infrastructure and hardware configuration.
- **Filter nodepools** — Use the filters at the top of the page to quickly locate nodepools by **Cluster**, **Region**, **Cloud Provider**, or **GPU Hardware**.
- **View nodepool details** — Each nodepool row displays important information, including:
  - Associated cluster and region
  - Hardware specifications such as CPU, memory, and GPU type
  - Minimum and maximum instance limits
  - Hourly cost estimates
  - Number of active deployments
- **Monitor compute capacity** — Easily track configured scaling limits and available hardware resources for each nodepool.
- **View deployment usage** — The **Deploys** column shows how many deployments are currently using a nodepool, with quick access to view associated deployments.
- **Manage nodepools** — Use the action controls on each row to:
  - Deploy a model to the nodepool
  - Edit the nodepool configuration
- **Access additional actions** — Clicking the three-dot menu opens a pop-up menu with additional management options, including:
  - Copy the nodepool ID
  - Deploy a Model 
  - Edit the nodepool
  - Delete the nodepool
- **Track activity trends** — The activity graph provides a quick visual overview of recent nodepool activities and usage patterns over the past several days. 

> **Note:** The page also supports **List** and **Grid** layouts, allowing you to choose the view that best fits your workflow and monitoring preferences.

:::note Alternatively

If you click a nodepool listed on the page, you'll be redirected to its dedicated details page, where you can view additional information, monitor activity, and perform further management and configuration tasks for that nodepool.

![ ](/img/compute-orchestration/compute-17.png)

:::


### Clusters

The **Clusters** page provides a centralized view for managing all compute clusters across your environments. It allows you to monitor cluster configuration, deployment usage, nodepool allocation, and overall infrastructure status from a single interface.

To access the page, expand the **Compute** section in the collapsible left navigation sidebar and select **Clusters**. This opens the **Clusters** dashboard, where you can view, filter, and manage all available clusters.

![ ](/img/compute-orchestration/compute-6.png)

From the **Clusters** page, you can:

- **Create a cluster** — Click the **Create Cluster** button in the upper-right corner to provision a new cluster.
- **Filter clusters** — Use the filter controls at the top of the page to quickly find clusters by **Cloud Provider** or **Region**.
- **View cluster details** — Each cluster row displays important information, including:
  - Cloud provider and region
  - Visibility settings
  - Cluster type
  - Estimated cost
- **Monitor infrastructure usage** — Quickly view how many nodepools and deployments are associated with each cluster, helping you track infrastructure utilization and workload distribution.
- **Manage clusters** — Use the action controls on each row to:
  - Add a nodepool to the cluster
  - Edit cluster settings
- **Access additional actions** — Clicking the three-dot menu opens a pop-up menu with additional management options, including:
  - Copy cluster ID
  - Deploy a model
  - Add a new nodepool
  - Edit the cluster
  - Delete the cluster
  
> **Note:** The page supports both **List** and **Grid** layouts, allowing you to switch between viewing styles based on your workflow and monitoring preferences.

:::note Alternatively

If you click a cluster listed on the page, you'll be redirected to its dedicated details page, where you can view additional information, monitor cluster activity, manage associated nodepools and deployments, and perform further configuration and administrative tasks.

![ ](/img/compute-orchestration/compute-6-3.png)

:::

## **Via the API**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_compute_cluster.py";
import CO4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_compute_cluster.py";
import CO8 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_nodepool.py";
import CO9 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_nodepool.py";
import CO13 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_deployment.py";
import CO14 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_deployment.py";
import CO16 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_deployments.py";
import CO17 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_nodepools.py";
import CO18 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_clusters.py";
import CL5 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_cluster.sh";
import CL6 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_nodepool.sh";
import CL7 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_deployment.sh";
import CL8 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_cluster.sh";
import CL9 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_nodepool.sh";
import CL10 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_deployment.sh";
import GetDeploymentOutput from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_deployment_output.txt";
import CurlList1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_1.sh";
import CurlList2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_2.sh";
import CurlList3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_3.sh";
import CurlList4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_4.sh";
import CurlOutput1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_output_1.txt";
import CurlOutput2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_output_2.txt";
import CurlOutput3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_output_3.txt";
import CurlOutput4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_output_4.txt";

import CurlGetCluster from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_get_cluster.sh";
import CurlListClusters from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_clusters.sh";
import CurlEditCluster from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_edit_cluster.sh";
import CurlDeleteCluster from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_delete_cluster.sh";
import CurlDeleteNodepool from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_delete_nodepool.sh";
import CurlGetNodepool from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_get_nodepool.sh";
import CurlEditNodepool from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_edit_nodepool.sh";
import CurlListNodepools from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_nodepools.sh";
import CurlListNodepoolsReplicas from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_list_nodepools_replicas.sh";
import CurlGetDeployment from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_get_deployment.sh";
import CurlEditDeployment from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_edit_deployment.sh";
import CurlDeleteDeployment from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_delete_deployment.sh";


:::note tip

A Personal Access Token (PAT) authenticates your connection to the Clarifai platform, including CLI sessions. Set the token as an environment variable [as explained previously](clusters-nodepools.md#get-a-pat).

:::

### Clusters

#### Get a Cluster

To get the details of your compute cluster, pass the `compute_cluster_id` to the `compute_cluster` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO3}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetCluster}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Clarifai Compute Cluster Details: 
description=My AWS compute cluster, cloud_provider=id: "aws"
name: "AWS"
, region=us-east-1, created_at=seconds: 1757331634
nanos: 59523000
, modified_at=seconds: 1757331634
nanos: 59523000
, visibility=gettable: PRIVATE
, cluster_type=dedicated, managed_by=clarifai, key=id: "****"
, id=test-compute-cluster, user_id=alfrick
```
</details>

#### List All Clusters

To list all your existing compute clusters, call the `list_compute_clusters` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO4}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL5}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListClusters}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Available Compute Clusters:
- ID: advanced-cluster-ebus, Description: , Region: us-east-1
- ID: test-compute-cluster, Description: My AWS compute cluster, Region: us-east-1
```
</details>


#### Edit a Cluster

You can update an existing cluster by setting `"action": "overwrite"` in the request body.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlEditCluster}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Compute Clusters

To delete your compute clusters, provide a list of compute cluster IDs to the `delete_compute_clusters` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO18}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL8}</CodeBlock>
</TabItem>

<!--
Error: "Must supply a list of 'ids' to delete. Check your request fields."
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteCluster}</CodeBlock>
</TabItem>
-->

</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Compute Cluster Deleted
code: SUCCESS
description: "Ok"
req_id: "sdk-python-11.7.5-dc2a5ef7b8824ed0999dad18b5594a12"
```
</details>


### Nodepools

#### Get a Nodepool

To get the details of your nodepool, provide the `nodepool_id` to the `nodepool` method of the `ComputeCluster` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetNodepool}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Nodepool Details: 
description=First nodepool in AWS in a proper compute cluster, created_at=seconds: 1757331678
nanos: 990816000
, modified_at=seconds: 1757331678
nanos: 990816000
, compute_cluster=id: "test-compute-cluster"
description: "My AWS compute cluster"
cloud_provider {
  id: "aws"
  name: "AWS"
}
region: "us-east-1"
user_id: "alfrick"
created_at {
  seconds: 1757331634
  nanos: 59523000
}
modified_at {
  seconds: 1757331634
  nanos: 59523000
}
visibility {
  gettable: PRIVATE
}
cluster_type: "dedicated"
managed_by: "clarifai"
key {
  id: "****"
}
, node_capacity_type=capacity_types: ON_DEMAND_TYPE
, instance_types=[id: "g5.2xlarge"
description: "g5.2xlarge"
compute_info {
  cpu_memory: "29033Mi"
  num_accelerators: 1
  accelerator_memory: "23028Mi"
  accelerator_type: "NVIDIA-A10G"
  cpu_limit: "7525m"
}
price: "42.000000"
cloud_provider {
  id: "aws"
  name: "aws"
}
region: "us-east-1"
], max_instances=1, visibility=gettable: PRIVATE
, enforced_max_instances=1, id=test-nodepool
```
</details>

#### List All Nodepools

To list all the existing nodepools in your cluster, call the `list_nodepools` method of the `ComputeCluster` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL6}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListNodepools}</CodeBlock>
</TabItem>
<TabItem value="curl2" label="cURL (with min replicas)">
    <CodeBlock className="language-bash">{CurlListNodepoolsReplicas}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Available Nodepools:
- ID: test-nodepool, Description: First nodepool in AWS in a proper compute cluster, Min Instances: 0, Max Instances: 1
```
</details>


#### Edit a Nodepool

You can update an existing nodepool by setting `"action": "overwrite"` in the request body.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlEditNodepool}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Nodepools

To delete your nodepools, provide a list of nodepool IDs to the `delete_nodepools` method of the `ComputeCluster` class. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO17}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL9}</CodeBlock>
</TabItem>

<!--
Error: "Must supply a list of 'ids' to delete. Check your request fields.
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteNodepool}</CodeBlock>
</TabItem>
-->

</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Nodepools Deleted
code: SUCCESS
description: "Ok"
req_id: "sdk-python-11.7.5-d69f92a0263b41719b51083f44d6ed43"
```
</details>

### Deployments

#### Get a Deployment

To get the details of your deployment, provide the `deployment_id` to the `deployment` method of the `Nodepool` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO13}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetDeployment}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{GetDeploymentOutput}</CodeBlock>
</details>

#### List All Deployments

To list all the existing deployments in your nodepool, call the `list_deployments` method of the `Nodepool` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO14}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL7}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Available Deployments:
- ID: test-deployment, Description: some random deployment, Min Replicas: 0, Max Replicas: 5
```
</details>


#### Edit a Deployment

You can update an existing deployment by setting `"action": "overwrite"` in the request body.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlEditDeployment}</CodeBlock>
</TabItem>
</Tabs>



#### Delete Deployments

To delete your deployments, pass a list of deployment IDs to the `delete_deployments` method of the `Nodepool` class. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO16}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL10}</CodeBlock>
</TabItem>

<!--
Error: "Must supply a list of 'ids' to delete. Check your request fields.
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteDeployment}</CodeBlock>
</TabItem>
-->

</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
Deployments Deleted
code: SUCCESS
description: "Ok"
req_id: "sdk-python-11.7.5-a08b6c5f21674916ba5791df8eae5dd8"
```
</details>


### List Cloud Providers

You can retrieve the available cloud providers to use when creating clusters and nodepools.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlList1}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CurlOutput1}</CodeBlock>
</details>

### List Regions

You can retrieve the geographic regions supported by a cloud provider.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlList2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CurlOutput2}</CodeBlock>
</details>

### List Instance Types 

You can retrieve the instance types a cloud provider offers in a given region.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlList3}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CurlOutput3}</CodeBlock>
</details>

### List All Instance Types

You can retrieve all instance types offered by all cloud providers across their supported regions.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlList4}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CurlOutput4}</CodeBlock>
</details>