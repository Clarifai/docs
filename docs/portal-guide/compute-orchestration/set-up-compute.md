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

With clusters and nodepools, you can organize and manage the compute resources necessary for running your models and workflows. 

## Default Cluster and Nodepool

By default, Clarifai offers a Shared SaaS (Serverless) compute cluster with a nodepool. This allows you to quickly get started without configuring any underlying compute instances (such as clusters, nodepools, and accelerators) — the pre-configured nodepool dynamically scales resources based on your model's needs.

If you opt for the shared cluster, you do not need to make any setup configurations on the Compute Orchestration pane — your models will automatically be deployed using it.  

Note that the default setup is ideal for general use cases and may not meet more specific or demanding performance scenarios. 

:::tip info

For the Compute Orchestration private preview, the default shared cluster is available only for deploying out-of-the-box or custom-trained models on our platform. If you want to use dedicated compute instances, you need to upload your models to our platform via the [Python SDK](https://docs.clarifai.com/sdk/advance-model-operations/model-upload).  

:::

## How to Create a Cluster

You can create a custom cluster with custom nodepools that match your computational needs. 

To get started, click your profile icon in the upper-right corner and select the **Compute** option in the list that drops down. 

![ ](/img/compute-orchestration/compute-1.png)

Alternatively, you can click the **Compute Settings** button found in the **Deployments** tab on a model's viewer page or anywhere this button appears in the platform.

![ ](/img/compute-orchestration/compute-1-1.png)

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

- **Private Access Token (PAT)** — Select a PAT that is used to verify your identity when connecting to the cluster. Note that if the selected PAT is deleted, the associated compute resources will no longer function. You can generate a new PAT key in your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

After configuring the settings, click the **Continue** button in the upper-right corner. You’ll be redirected to a page where you can create a nodepool related to the cluster. 

## How to Create a Nodepool

After clicking the **Continue** button upon creating a cluster, you’ll be redirected to a page where you can specify the configurations for your new nodepool. 

Alternatively, you can create a new nodepool from an existing cluster by clicking the **Create a new nodepool** button in the upper-right corner of the cluster's page. 

![ ](/img/compute-orchestration/compute-7.png)

These are the configurations options you can set for your new nodepool:

![ ](/img/compute-orchestration/compute-8.png)

- **Nodepool ID** — Provide an ID that helps identify the nodepool to use when deploying your models. We recommend an easy-to-remember ID that’s related to the nodepool’s use case. 

- **Nodepool Description** — Optionally, provide a short description that summarizes the details related to the nodepool. 

- **Node autoscaling range** — Specify the minimum and maximum number of nodes that the system can automatically scale within a nodepool, based on the workload demand. This means that the system will spin up more nodes to handle increased traffic or scale down when demand decreases to optimize costs. For instance, you can set your nodepool to scale between 1 and 5 nodes, depending on how many requests your model is processing. A minimum value of 1 (rather than 0) prevents cold start delays after inactivity, which is essential for meeting latency requirements, though it ensures that at least one node will always be running, which incurs compute costs. Alternatively, setting the minimum to 0 eliminates costs during idle periods but may introduce cold start delays when traffic resumes. 

- **Instance Type** — Select the instance type you would like the deployment to run on.  You can find an explanation of the available instance types [below](#instance-types). 

- **Spot instances** (default is off) — Enable this option if you want to rent spare, unused compute capacity at significantly lower prices compared to regular on-demand instances. If no spot instances are available, Clarifai will automatically fall back to on-demand instances. Note that spot instances can be terminated if capacity is needed elsewhere, making your node temporarily unavailable. For greater reliability, leave this option unchecked to use only on-demand instances.

After configuring the settings, click the **Create Nodepool** button in the upper-right corner. You'll then be redirected to your cluster's page, where the newly created nodepool will be listed in a table.

![ ](/img/compute-orchestration/compute-9.png)

If you click on a nodepool listed in the table, you'll be taken to its individual page where you can view its detailed information, such as the cluster type, instance types, and any resource deployments associated with it. 

![ ](/img/compute-orchestration/compute-10.png)

### How to Deploy a Model

After creating a nodepool, you can use it to deploy a model. 

[Click here](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model) to learn more about deploying a model using a nodepool. 

### Instance Types

We offer a range of Amazon Web Services (AWS) instance types, each tailored to specific workloads. These instances vary in their CPU, RAM (Random Access Memory), and GPU configurations, which allow you to orchestrate the right balance of performance and cost for your use case.

:::info

You can contact us to unlock access to our most powerful instances, including NVIDIA A100 and H100 GPUs.

:::

#### t3a Instances (t3a.small, t3a.medium, t3a.large, etc.)

The `t3a` series consists of general-purpose Amazon EC2 burstable performance instances. These are ideal for low- to moderate-compute tasks that don’t require GPU acceleration, making them cost-effective for various applications. These instances are powered by AMD EPYC processors.

- **vCPUs (virtual CPUs)** — These instances can burst to higher levels of CPU performance when needed. For example, `t3a.small` has 2 vCPUs, while `t3a.2xlarge` offers 8 vCPUs, providing better parallel processing for CPU-intensive workloads.
- **RAM** — RAM determines the capacity for handling data in memory. For `t3a` instances, RAM ranges from 2 GiB (in `t3a.small`) to 32 GiB (in `t3a.2xlarge`), allowing the instances to support more memory-heavy workloads as needed.

These instances are best suited for web servers, development environments, and applications with variable workloads that occasionally require more CPU power.

#### g4dn Instances (g4dn.xlarge)

The `g4dn` instances are designed for tasks requiring GPU acceleration, such as machine learning inference, graphic rendering, and video transcoding.

- **GPU** — These instances are equipped with NVIDIA T4 GPUs, which offer excellent performance for inferencing tasks on trained machine learning models and graphics processing.
- **vCPUs and RAM** — The `g4dn.xlarge` instance provides 4 vCPUs and 16 GiB of RAM, along with 16 GiB of GPU memory, which is critical for handling high-volume workloads that rely on both CPU and GPU power.

#### g5 Instances (g5.xlarge, g5.2xlarge)

The `g5` instances are next-generation GPU instances designed for high-performance tasks, such as large-scale deep learning model training and data processing. They are equipped with NVIDIA A10G GPUs.

- **vCPUs and RAM** — `g5.xlarge` includes 4 vCPUs and 16 GiB of RAM, while `g5.2xlarge` offers 8 vCPUs and 32 GiB of RAM. Both have 24 GiB of GPU memory, which makes them suitable for memory-intensive workloads and high-fidelity model training.

These instances are optimized for tasks that require a high degree of parallel processing and large amounts of data, such as video analytics, 3D rendering, and scientific computing.

#### g6 Instances (g6.xlarge)

The `g6` series represents the latest in high-performance GPU computing, optimized for demanding applications such as AI model training, large-scale simulations, and data analytics.

- **vCPUs and RAM** —  The `g6.xlarge` instance includes 4 vCPUs, 16 GiB of RAM, and a next-gen NVIDIA L4 GPU.  
- **GPU Memory** — It offers 24 GiB of GPU memory, which provides ample resources for running advanced deep learning models and other compute-heavy tasks.

These instances are ideal for applications that require cutting-edge GPU performance, such as autonomous driving simulations, deep learning model training, and large-scale data processing.
