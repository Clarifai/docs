---
description: Edit and delete your clusters and nodepools
sidebar_position: 3
pagination_next: null
---

# Managing Your Compute

**Edit and delete your nodepools and clusters**
<hr />

:::note

Compute Orchestration is currently in [private preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us or sign up [here](https://forms.gle/Cj9r8wgeYk5HQ67Y9).

:::

You can eficiently manage your nodepools and clusters within the Clarifai's platform to optimize performance and costs. You can edit configurations, adjust resource allocations, or delete existing compute infrastructure as your workload requirements change. 

This flexibility allows you to fine-tune your compute environment for tasks like model training, inference, and scaling workflows.

## How to Edit a Nodepool

If you want to edit a nodepool for any reason, go to the cluster viewer page and click the three vertical dots at the end of the row where the nodepool is listed.

Then, select the **Edit Nodepool** option from the drop-down menu that appears. You'll be redirected to a page where you can modify the configurations for your nodepool. 

![ ](/img/compute-orchestration/compute-17.png)

Or, you can edit a nodepool by going to its individual page and clicking the **Edit Pool** button in the upper-right corner. 

![ ](/img/compute-orchestration/compute-18.png)

## How to Delete a Nodepool

If you want to delete a nodepool, go to the cluster viewer page and click the three vertical dots at the end of the row where the nodepool is listed.

Then, select the **Delete Nodepool** option from the drop-down menu that appears. 

![ ](/img/compute-orchestration/compute-19.png)

A pop-up window will appear, asking you to confirm your decision. Note that deleting a nodepool will also delete the model deployments associated with it. So, you may reassign the deployments to a different nodepool if you want to continue using them.

![ ](/img/compute-orchestration/compute-19-1.png)

Click the **Delete** button to permanently delete the nodepool.

Or, you can delete a nodepool by going to its individual page and clicking the three vertical dots in the upper-right corner.

Then, click the **Delete nodepool** button that appears.

![ ](/img/compute-orchestration/compute-20.png)

## How to Delete a Cluster

If you want to delete a cluster, go to its individual page and click the three vertical dots in the upper-right corner. 

Then, click the **Delete cluster** button that appears.

![ ](/img/compute-orchestration/compute-5.png)

A pop-up window will appear, asking you to confirm your decision. Note that deleting a cluster will also delete the nodepools associated with it. So, you may reassign the nodepools to a different cluster if you want to continue using them. 

Click the **Delete** button to permanently delete the cluster. 

![ ](/img/compute-orchestration/compute-6.png)