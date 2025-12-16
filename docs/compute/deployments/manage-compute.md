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

You can manage various aspects of your deployments by visiting the nodepool viewer page. The **Deployments** table displays all your current deployments within that nodepool, along with their associated models and deployed model versions.

The table also supports sorting, allowing you to organize entries alphabetically (A–Z or Z–A) as needed.

To manage a specific deployment, locate it in the table and click the three-dot menu at the end of its row. This reveals a list of available actions, such as editing, viewing logs, opening the model in the Playground, or deleting the deployment.

![](/img/compute-orchestration/compute-26-2.png)

#### Copy Deployment ID

To copy a deployment ID, navigate to the **Deployments** table and locate the **ID** column. Find the ID you need, then click to copy it to your clipboard.

#### Open in Playground

To open a model in the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground) and test its performance, go to the **Deployments** table and click the three-dot menu at the end of the corresponding row. From the pop-up that appears, select **Open in Playground**.

#### View Deployment Logs

You can access deployment logs to monitor performance and troubleshoot issues.

To view the logs, locate the desired deployment in the **Deployments** table, click the three-dot menu at the end of its row, and select the **View Logs** option from the  pop-up that appears.

A preview window will open, displaying a summary of the log file. To view a full version of the deployment logs, click the **Download** button.

![ ](/img/compute-orchestration/compute-23.png)

#### Edit a Deployment

To edit a deployment, navigate to the **Deployments** table and click the three-dot menu at the end of the corresponding row, as described previously. 

Then, select the **Deployment Setup** option from the pop-up that appears.

You’ll be redirected to the [deployment configuration page](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model#make-a-deployment), where you can review and modify the model deployment settings as needed.

#### Delete a Deployment

To delete a deployment, navigate to the **Deployments** table and click the three-dot menu at the end of the corresponding row, as described previously.

Then, select the **Delete Deployment** option from the pop-up that appears.

A confirmation dialog will appear, warning you that this is a destructive action and cannot be undone. To complete the deletion, enter the name of the deployment in the provided field, then click **Yes, Delete**.

![ ](/img/compute-orchestration/compute-26.png)

#### View Deployment Details

You can view deployment details directly from the **Deployments** table. Once you've located the desired deployment, hover over the **CONFIG** column (represented by the clipboard icon) in the same row.

A quick-access tooltip will appear, showing the autoscaling configuration for that deployment.

![](/img/compute-orchestration/compute-30.png)


:::note Alternatively

You can view a model’s deployment details by navigating to its individual page, selecting the **Compute** tab, and reviewing the **Active Deployments** section. You can find information about the compute environments where the model is currently running. 

![](/img/compute-orchestration/compute-26-1.png)

Also, clicking the three-dot menu at the end of the row in the table reveals different options that allow you to edit the deployment, copy the deployment ID, open the model in the Playground, view deployment logs, or delete the deployment.

:::

### Nodepools

#### Edit a Nodepool

To edit a nodepool, go to its individual page and click the **Edit Nodepool** button located in the upper-right corner of the screen.

![ ](/img/compute-orchestration/compute-18.png)

You'll be redirected to a page where you can modify the [configurations for your nodepool](https://docs.clarifai.com/compute/deployments/clusters-nodepools/) based on your requirements. 

:::note Alternatively

You can perform various nodepool management tasks from the nodepools listing page. In the table, locate the nodepool you want to manage, then click the three-dot menu at the end of the row.

The pop-up that appears provides options to copy its ID, deploy a model to it, edit the nodepool, or delete the nodepool.

![ ](/img/compute-orchestration/compute-17.png)

:::

#### Delete a Nodepool

To delete a nodepool, go to its individual page and click the three-dot menu in the upper-right corner of the screen.

Then, click the **Delete Nodepool** button that appears. 

![ ](/img/compute-orchestration/compute-20.png)

A confirmation pop-up will appear, warning you that deleting the nodepool will cause the associated deployments to stop functioning. So, you may reassign the deployments to a different nodepool if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution. To complete the deletion, enter the name of the nodepool in the provided field, then click **Yes, Delete**.

![ ](/img/compute-orchestration/compute-19-1.png)


### Clusters

#### Delete a Cluster

To delete a cluster, go to its individual page and click the three-dot menu in the upper-right corner of the screen.

Then, click the **Delete Cluster** button that appears.

![ ](/img/compute-orchestration/compute-5.png)

A confirmation pop-up will appear, warning you that deleting the cluster will cause the associated nodepools to stop functioning. So, you may reassign the nodepools to a different cluster if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

To complete the deletion, enter the name of the cluster in the provided field, then click **Yes, Delete**.

![ ](/img/compute-orchestration/compute-6.png)

:::note Alternatively

You can perform various cluster management tasks from the clusters listing page. In the table, locate the cluster you want to manage, then click the three-dot menu at the end of the row.

The pop-up that appears provides options to add a new nodepool, copy its ID, or delete the cluster.

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