---
description: Orchestrate your AI workloads better, avoid vendor lock-in, and use compute spend efficiently
sidebar_position: 1
toc_max_heading_level: 3
---

# Compute Orchestration

**Orchestrate your AI workloads better, avoid vendor lock-in, and use compute spend efficiently**
<hr />

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/BZYanHsxkSo" title="Introducing Compute Orchestration - Any AI, On Any Compute!" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
</div>

<br />

Clarifai’s Compute Orchestration provides efficient capabilities for you to deploy any model on any compute infrastructure, at any scale. 

These new platform capabilities bring the convenience of serverless autoscaling to any environment, regardless of deployment location or hardware, and dynamically scale resources to meet workload demands. 

With Compute Orchestration, we are providing users with the ability to organize and manage (_orchestrate_) the compute resources necessary for running their models and workflows.

These capabilities enable our enterprise customers to deploy production models with enhanced control, performance, and scalability — while addressing specific problems around compute costs, latency, and control over hosted models. 

Clarifai handles the containerization, model packing, time slicing, and other performance optimizations on your behalf. 

## Deployment Options

Compute Orchestration allows us to provide multiple deployment options — all of which can be customized with your preferred settings for autoscaling, cold start, and more, ensuring maximum cost efficiency and performance. 

These are the deployment options we provide:

:::tip Shared SaaS (Serverless)

If you’re not using Compute Orchestration, the Shared SaaS (Serverless) deployment is the default option. It abstracts away infrastructure management and allows users to easily deploy models without worrying about the underlying compute resources. In this option, Clarifai maintains multi-tenant GPU pools users can access on-demand. 

:::

- **Dedicated SaaS** — Provides access to Clarifai‑managed, isolated nodes with customizable configurations. For example, you can launch a dedicated deployment in AWS US‑East, with plans to expand to other cloud providers and hardware options in the future.

- **Self-Managed VPC (Virtual Private Cloud)** — Connect your own cloud provider’s VPC to Clarifai, allowing Clarifai to run and orchestrate deployments within your environment. This approach lets you maintain full control of your infrastructure while leveraging existing cloud resources and spend commitments.

- **Self-Managed On-Premises** — Connect your own on‑premises or bare‑metal infrastructure to Clarifai, allowing you to utilize existing compute resources. Clarifai then orchestrates model deployments within your environment, making the most of your infrastructure investments.

- **Multi-Site Deployment** — Enables deployments across multiple self‑managed compute environments, with support for a mix of on‑premises, cloud, or edge locations — and a roadmap for future multi‑cloud or multi‑region SaaS options.

- **Full Platform Deployment** — Designed for organizations with stringent security and compliance needs, this option allows you to run both the Clarifai control and compute planes within your chosen cloud, on‑premises, or air‑gapped infrastructure, ensuring complete isolation and control.

 
![ ](/img/compute-orchestration/intro-1.png)


## Compute Clusters and Nodepools

We use [clusters and nodepools](https://docs.clarifai.com/portal-guide/compute-orchestration/set-up-compute) to organize and manage the compute resources required for the Compute Orchestration capabilities.

:::info Cluster

A compute cluster in Clarifai acts as the overarching computational environment where models are executed, whether for training or inference. 

:::

:::info nodepool

A nodepool refers to a set of dedicated nodes (virtual machine instances) within a cluster that share similar configurations and resources, such as CPU or GPU type, memory size, and other performance parameters.

:::

Cluster configuration lets you specify where and how your models are run, ensuring better performance, lower latency, and adherence to regional regulations. You can specify a cloud provider, such as AWS, that will provide the underlying compute infrastructure for hosting and running your models. You can also specify the geographic location of the data center where the compute resources will be hosted.

Nodepools are an important part of how compute resources are operated within a cluster. They provide flexibility in choosing the type of instances used to run your machine learning models and workflows and help determine how resources are scaled to meet demand.

Nodepools specify the accelerator and instance that will run your models and other workloads. Accelerators are specialized hardware resources, such as GPUs or dedicated ML chips used for computation.

Each nodepool can run containers or workloads, and you can have multiple nodepools within a single cluster to support different types of workloads or performance requirements. These nodes execute tasks like model training, inference, and workflow orchestration within a compute cluster. 

With compute orchestration, you can ensure these nodepools are properly scaled up or down depending on the workload's size, complexities, and costs.

## Benefits of Compute Orchestration

![ ](/img/compute-orchestration/intro-2.png)

### 1. Performance and Deployment Flexibility

- It provides access to a wide range of [accelerator options](https://docs.clarifai.com/portal-guide/compute-orchestration/cloud-instances) tailored to your use case. You can configure multiple compute clusters each tailored to your AI development stage, performance requirements, and budget. You can also run affordable proof of concepts or compute-heavy LLMs or LVMs in production all from a single product.

- It offers flexibility to [make deployments](https://docs.clarifai.com/portal-guide/compute-orchestration/deploy-model) in any cloud service provider, on-premises, air-gapped, or Kubernetes-supported environment. Or, you can make deployments in Clarifai’s compute to avoid having to worry about managing infrastructure.
This allows users to leverage their hardware of choice without being locked into a single vendor.

- You can customize auto-scaling settings to prevent cold-start issues and handle traffic swings; and scale down to zero for cost efficiency.  The ability to scale from zero to infinity ensures both flexibility and cost management.

- Just like with our previous offerings, we ensure efficient resource usage and cost savings through bin-packing (running multiple models per GPU), time slicing, and other optimizations.

### 2. Enhanced Security

- Users can run compute planes within their own cloud service provider or on-premise environments and securely connect to Clarifai’s control plane, while only having to open outbound ports for traffic. This reduces networking complexities and security risks compared to opening inbound access or configuring cloud Identity and Access Management (IAM) access roles within your VPC. 

- Nodepool-based compute allows users to keep their resources isolated and provides precise control over scaling models and nodes. This allows users to specify where models are executed, addressing compliance and security needs for regulated industries.

- Clarifai offers fine-grained access control across apps, teams, users, and compute resources.

- Users can group CPU and GPU types into dedicated scaling nodepools, enabling them to handle diverse workloads or team-specific requirements while enhancing security and resource management.

### 3. Use Compute Cost-Efficiently and Abstract Away Complexity

- An intuitive control plane enables users to efficiently govern access to AI resources, monitor performance, and manage costs. Clarifai’s expertly designed platform takes care of dependencies and optimizations, offering features like model packing, streamlined dependency management, and customizable autoscaling options — including scale-to-zero for both model replicas and compute nodes.

- The advanced optimizations deliver exceptional efficiency, with model packing reducing compute usage by up to 3.7x and enabling support for over 1.6 million inputs per second with an impressive 99.9997% reliability. Depending on the chosen configuration, customers can achieve cost savings of at least 60%, and in some cases, up to 90%.

- Organizations with pre-committed cloud spend or compute contracts with major cloud service providers, like AWS, Azure, or GCP, or existing GPU and hardware investments, can efficiently leverage their compute using Clarifai Compute Orchestration. 

### 4. New Inference Capabilities and Developer Experience Improvements

- Resourceful features such as inference streaming improve time-to-first-token for LLM generations.

- Faster cold starts and optimized frameworks improve performance for critical workloads.

- Continuous batching is available to reduce costs by processing multiple inference requests in batches.

- Clarifai containerizes your desired models into Docker images, ensuring model package requirements are encapsulated in a portable environment and dependencies are handled automatically.

- Low-latency deployment minimizes gRPC hops, speeding up communication.

- New model types are easily supported with a unified protobuf format, and local inference runners allow users to [test models](https://docs.clarifai.com/sdk/compute-orchestration/model-upload/#step-4-test-the-model-locally) before deploying to the cloud.


import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
