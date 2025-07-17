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

You can view a model’s deployment details by navigating to its individual page, selecting the **Activity** tab, and reviewing the **Active Deployments** section. You can find information about the compute environments where the model is currently running. 

![](/img/compute-orchestration/compute-26-1.png)

Also, clicking the three-dot menu at the end of the row in the table reveals different options that allow you to edit the deployment, copy the deployment ID, open the model in the Playground, view deployment logs, or delete the deployment.

:::

### Nodepools

#### Edit a Nodepool

To edit a nodepool, go to its individual page and click the **Edit Nodepool** button located in the upper-right corner of the screen.

![ ](/img/compute-orchestration/compute-18.png)

You'll be redirected to a page where you can modify the [configurations for your nodepool](https://docs.clarifai.com/compute/deployments/clusters-nodepools/) based on your requirements. 

:::note Alternatively

You can perform various nodepool management tasks from the cluster viewer page. In the **Nodepools** table, locate the nodepool you want to manage, then click the three-dot menu at the end of the row.

The pop-up that appears provides options to edit the nodepool, deploy a model to it, copy its ID, or delete the nodepool.

![ ](/img/compute-orchestration/compute-17.png)

:::

#### Delete a Nodepool

To delete a nodepool, go to its individual page and click the three-dot menu in the upper-right corner of the screen.

Then, click the **Delete Nodepool** button that appears. 

![ ](/img/compute-orchestration/compute-20.png)

A confirmation pop-up will appear, warning you that deleting the nodepool will cause the associated deployments to stop functioning. So, you may reassign the deployments to a different nodepool if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

To complete the deletion, enter the name of the nodepool in the provided field, then click **Yes, Delete**.

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


### Clusters

#### Get a Cluster

To get a specific compute cluster, pass the `compute_cluster_id` to the `compute_cluster` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO3}</CodeBlock>
</TabItem>
</Tabs>


#### List All Clusters

To list your existing compute clusters, call the `list_compute_clusters` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO4}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL5}</CodeBlock>
</TabItem>
</Tabs>

### Nodepools

#### Get a Nodepool

To get a specific nodepool, provide the `nodepool_id` to the `nodepool` method of the `ComputeCluster` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>


#### List All Nodepools

To list the existing nodepools, call the `list_nodepools` method of the `ComputeCluster` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL6}</CodeBlock>
</TabItem>
</Tabs>

### Deployments

#### Get a Deployment

To get a specific deployment, provide the `deployment_id` to the `deployment` method of the `Nodepool` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO13}</CodeBlock>
</TabItem>
</Tabs>


#### List All Deployments

To list existing deployments, call the `list_deployments` method of the `Nodepool` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO14}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL7}</CodeBlock>
</TabItem>
</Tabs>


### Delete Resources

#### Delete Deployments

To delete deployments, pass a list of deployment IDs to the `delete_deployments` method of the `Nodepool` class. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO16}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL10}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Nodepools

To delete nodepools, provide a list of nodepool IDs to the `delete_nodepools` method of the `ComputeCluster` class. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO17}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL9}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Compute Clusters

To delete compute clusters, provide a list of compute cluster IDs to the `delete_compute_clusters` method of the `User` class.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO18}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL8}</CodeBlock>
</TabItem>
</Tabs>

