---
description: Edit and delete deployments, clusters, and nodepools
sidebar_position: 3
---

# Managing Your Compute

**Edit and delete deployments, nodepools, and clusters**
<hr />

:::note

Compute Orchestration is currently in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us [here](https://www.clarifai.com/explore/contact-us-co).

:::

You can efficiently manage your deployments, nodepools, and clusters within Clarifai's platform to optimize performance and costs. You can easily edit configurations, adjust resource allocations, or remove unused resources to free up compute infrastructure as your workload requirements evolve.

This flexibility allows you to fine-tune your compute environment for tasks like model training, inference, and scaling workflows.

## Deployments

### View Deployment Logs

You can access deployment logs to monitor performance and troubleshoot issues.

To view the logs:

- Navigate to the nodepool viewer page.
- In the **Deployments** table, locate the deployment you want to inspect. 
- Click the three-dot menu in the **Actions** column.
- Select the **View logs** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-22.png)

A preview window will open, displaying a summary of the log file. To view a full version of the deployment logs, click the **Download** button.

![ ](/img/compute-orchestration/compute-23.png)

### Edit a Deployment

To edit a deployment, navigate to the **Deployments** table and click the three-dot menu in the **Actions** column, as described previously. 

Then, select the **Deployment setup** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-24.png)

You’ll be redirected to the [deployment configuration page](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model#make-a-deployment), where you can review and modify the model deployment settings as needed.

### Delete a Deployment

To delete a deployment, navigate to the **Deployments** table and click the three-dot menu in the **Actions** column, as described previously.

Then, select the **Delete deployment** option from the dropdown menu.

![ ](/img/compute-orchestration/compute-25.png)

A confirmation pop-up will appear, warning you that deleting the deployment will cause the associated model to stop functioning. 

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion. 

![ ](/img/compute-orchestration/compute-26.png)


## Nodepools

### Edit a Nodepool

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


### Delete a Nodepool

To delete a nodepool, navigate to its individual page and click the three-dot menu in the upper-right corner. 

Then, click the **Delete nodepool** button that appears. 

![ ](/img/compute-orchestration/compute-20.png)

A confirmation pop-up will appear, warning you that deleting the nodepool will cause the associated deployments to stop functioning. So, you may reassign the deployments to a different nodepool if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion.

![ ](/img/compute-orchestration/compute-19-1.png)

> _Alternatively, you can delete a nodepool from the cluster viewer page. In the **Nodepools** table, locate the nodepool you want to remove, click the three-dot menu in the **Actions** column, and select **Delete nodepool** from the dropdown menu._

> ![ ](/img/compute-orchestration/compute-19.png)

## Clusters

### Delete a Cluster

To delete a cluster, navigate to its individual page and click the three-dot menu in the upper-right corner.

Then, click the **Delete cluster** button that appears.

![ ](/img/compute-orchestration/compute-5.png)

A confirmation pop-up will appear, warning you that deleting the cluster will cause the associated nodepools to stop functioning. So, you may reassign the nodepools to a different cluster if you want to continue using them.

Note that since this action cannot be undone, you need to proceed with caution.

Click the **Yes, delete** button to complete the deletion.

![ ](/img/compute-orchestration/compute-6.png)
