---
description: Set up your compute cluster and nodepool
sidebar_position: 1
---

# Clusters and Nodepools

**Set up your compute clusters and nodepools**
<hr />

:::note

Compute Orchestration is currently in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us [here](https://www.clarifai.com/explore/contact-us-co).

:::

A compute cluster serves as the main environment where models are executed, whether for training or inference. Each cluster can contain multiple nodepools, which are groups of virtual machine instances with similar configurations (such as CPU/GPU type, memory). 

After creating a custom cluster, you can configure nodepools within it to optimize resource usage. These nodepools will help tailor the infrastructure to meet the specific hardware, performance, cost, or regulatory compliance of your machine learning needs.

For example, you may create a nodepool for GPU-intensive tasks and another for lighter workloads running on CPUs.

With clusters and nodepools, you can organize and manage (_orchestrate_) the compute resources necessary for running your models and workflows. 

## Default Cluster and Nodepool

By default, Clarifai offers a Shared SaaS (Serverless) compute cluster with a nodepool. This allows you to quickly get started without configuring any underlying compute instances (such as clusters, nodepools, and accelerators) — the pre-configured nodepool dynamically scales resources based on your model's needs.

If you opt for the shared cluster, you do not need to make any setup configurations on the Compute Orchestration pane — your models will automatically be deployed using it.  

Note that the default setup is ideal for general use cases and may not meet more specific or demanding performance scenarios. 

:::tip info

For the Compute Orchestration Public Preview, the default shared cluster is available only for deploying out-of-the-box or custom-trained models on our platform. If you want to use dedicated compute instances, you need to upload your models to our platform via the [Python SDK](https://docs.clarifai.com/sdk/compute-orchestration/model-upload).  

:::

## How to Create a Cluster

You can create a custom cluster with custom nodepools that match your computational needs. 

To get started, log in to the Clarifai platform and select the **Compute** option in the top navigation bar.  

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
    
- **Instance Settings** — Select your preferred cloud provider and geographic region for deploying your models (*more options are coming soon*).

- **Personal Access Token (PAT)** — Select a PAT that is used to verify your identity when connecting to the cluster. Note that if the selected PAT is deleted, the associated compute resources will no longer function. You can generate a new PAT by clicking the "Create new Personal Access Token" link at the bottom of the corresponding dropdown list or by going to your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

After configuring the settings, click the **Continue** button in the upper-right corner. You’ll be redirected to a page where you can create a nodepool related to the cluster. 

## How to Create a Nodepool

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
