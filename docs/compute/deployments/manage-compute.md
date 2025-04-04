---
description: Edit and delete deployments, clusters, and nodepools
sidebar_position: 3
toc_max_heading_level: 4
---

# Manage Your Compute

**Edit and delete deployments, nodepools, and clusters**
<hr />


You can efficiently manage your deployments, nodepools, and clusters within the Clarifai's platform to optimize performance and costs, as well as fine-tune your compute environment for tasks like model inferencing.

You can easily edit configurations, adjust resource allocations, or remove unused resources to free up compute infrastructure as your workload requirements evolve.

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
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL5}</CodeBlock>
</TabItem>
</Tabs>

### Nodepools

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
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL6}</CodeBlock>
</TabItem>
</Tabs>

### Deployments

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
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL7}</CodeBlock>
</TabItem>
</Tabs>


### Delete Resources

#### Delete Deployments

To delete deployments, pass a list of deployment IDs to the `delete_deployments` method of the `Nodepool` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO16}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL10}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Nodepools

To delete nodepools, provide a list of nodepool IDs to the `delete_nodepools` method of the `ComputeCluster` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO17}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL9}</CodeBlock>
</TabItem>
</Tabs>

#### Delete Compute Clusters

To delete compute clusters, provide a list of compute cluster IDs to the `delete_compute_clusters` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO18}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL8}</CodeBlock>
</TabItem>
</Tabs>


## **Via the UI**

### Deployments

#### Copy Deployment ID

You can view your deployment details — such as the deployment ID, cluster, and nodepool — by navigating to your model's playground page, selecting the **Deployments** tab, and checking the **Deployments & Usage** table.

To copy a deployment ID, locate the **Deployment ID** column and copy the desired ID.

![](/img/compute-orchestration/compute-26-1.png)

:::tip

The **Deployments & Usage** table also allows you to view deployment logs, edit a deployment, or delete a deployment. To do so, click the three-dot menu in the **Actions** column and select your desired option from the menu that appears. 

:::

#### View Deployment Logs

You can access deployment logs to monitor performance and troubleshoot issues.

To view the logs:

- Navigate to the nodepool viewer page.
- In the **Deployments** table, locate the deployment you want to inspect. 
- Click the three-dot menu in the **Actions** column.
- Select the **View logs** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-22.png)

A preview window will open, displaying a summary of the log file. To view a full version of the deployment logs, click the **Download** button.

![ ](/img/compute-orchestration/compute-23.png)

#### Edit a Deployment

To edit a deployment, navigate to the **Deployments** table and click the three-dot menu in the **Actions** column, as described previously. 

Then, select the **Deployment setup** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-24.png)

You’ll be redirected to the [deployment configuration page](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model#make-a-deployment), where you can review and modify the model deployment settings as needed.

#### Delete a Deployment

To delete a deployment, navigate to the **Deployments** table and click the three-dot menu in the **Actions** column, as described previously.

Then, select the **Delete deployment** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-25.png)

A confirmation pop-up will appear, warning you that deleting the deployment will cause the associated model to stop functioning. 

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion. 

![ ](/img/compute-orchestration/compute-26.png)

### Nodepools

#### Edit a Nodepool

To edit a nodepool:

- Navigate to the nodepool’s individual page.
- Click the **Edit nodepool** button in the upper-right corner. 

![ ](/img/compute-orchestration/compute-18.png)

You'll be redirected to a page where you can modify the [configurations for your nodepool](https://docs.clarifai.com/portal-guide/compute-orchestration/set-up-compute#how-to-create-a-nodepool) based on your requirements. 

> _Alternatively, you can edit a nodepool from the cluster viewer page:_

> - _In the **Nodepools** table of your cluster, find the nodepool you want to edit._
> - _Click the three-dot menu in the **Actions** column._
> - _Select the **Edit Nodepool** option from the dropdown menu._

> ![ ](/img/compute-orchestration/compute-17.png)


#### Delete a Nodepool

To delete a nodepool, navigate to its individual page and click the three-dot menu in the upper-right corner. 

Then, click the **Delete nodepool** button that appears. 

![ ](/img/compute-orchestration/compute-20.png)

A confirmation pop-up will appear, warning you that deleting the nodepool will cause the associated deployments to stop functioning. So, you may reassign the deployments to a different nodepool if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion.

![ ](/img/compute-orchestration/compute-19-1.png)

> _Alternatively, you can delete a nodepool from the cluster viewer page. In the **Nodepools** table, locate the nodepool you want to remove, click the three-dot menu in the **Actions** column, and select **Delete nodepool** from the dropdown menu._

> ![ ](/img/compute-orchestration/compute-19.png)

### Clusters

#### Delete a Cluster

To delete a cluster, navigate to its individual page and click the three-dot menu in the upper-right corner.

Then, click the **Delete cluster** button that appears.

![ ](/img/compute-orchestration/compute-5.png)

A confirmation pop-up will appear, warning you that deleting the cluster will cause the associated nodepools to stop functioning. So, you may reassign the nodepools to a different cluster if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion.

![ ](/img/compute-orchestration/compute-6.png)
