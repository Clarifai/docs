---
description: Deploy any model anywhere, at any scale
sidebar_position: 2
---

# How to Deploy a Model

**Deploy any model anywhere, at any scale**
<hr />

:::note

Compute Orchestration is currently in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us [here](https://www.clarifai.com/explore/contact-us-co).

:::

Clarifai’s Compute Orchestration provides efficient capabilities for you to deploy any model on any compute infrastructure, at any scale. 

This new platform capability brings the convenience of serverless autoscaling to any compute, regardless of where it’s deployed and what hardware it’s running on, and scale automatically to meet workload demands.

Compute Orchestration allows you to upload a model, configure your SaaS or self-managed compute, and then deploy your model into your nodepools with your preferred settings cost-efficiently and scalably. 

:::tip info

For the Compute Orchestration Public Preview, deployment is only supported for models that users have uploaded to our platform via the Python SDK. We plan to expand this functionality to include out-of-the-box and custom-trained models on our platform in the future. You can learn how to upload models [here](https://docs.clarifai.com/sdk/compute-orchestration/model-upload).

:::

## Prerequisites

- Set up a compute cluster and nodepool. You can follow the instructions provided [here](https://docs.clarifai.com/portal-guide/compute-orchestration/set-up-compute).
- [Upload](https://docs.clarifai.com/sdk/compute-orchestration/model-upload) or select a model you'd like to use for running inferences.


## Make a Deployment

:::note

Each model or workflow can only have one deployment per nodepool.

:::

To deploy a model, navigate to your cluster or nodepool page and click the **Deploy a model** button in the upper-right corner. 
 
![ ](/img/compute-orchestration/compute-11.png)

> _Alternatively, navigate to your model's page, go to the **Deployments** tab, and click the **Deploy a Model** button._

> ![ ](/img/compute-orchestration/compute-12.png)

You’ll be redirected to a page where you can customize the compute options for deploying your model. 

![ ](/img/compute-orchestration/compute-13.png)

-  **Deployment details** — Create a deployment ID and description that helps identify your model version and selected compute combination.

- **Model and version** — Select an already trained model and the version you want to deploy.

- **Cluster** —Select or create a cluster.

- **Nodepool** — Select or create a nodepool to deploy your model considering your performance goals. The details of the dedicated cluster and nodepool you’ve selected will be displayed. 

- **Advanced settings** — Optionally, you can click the collapsible section to configure the following settings:

    - **Model replicas** — Specify the minimum and maximum range of model replicas to deploy, adjusting based on your performance needs and anticipated workload. Adding replicas enables horizontal scaling, where the workload is distributed across several instances of the model rather than relying on a single one. However, increasing them consumes more resources and may lead to higher costs. Each node in your nodepool can host multiple replicas, depending on model size and available resources.
    - **Scale down delay** — This sets the waiting period before reducing resources after a demand decrease, ensuring stability by only scaling down to the preconfigured minimum replica(s). 
    - **Scaling timeframe** — This defines the traffic history period that your deployment will review before making scaling decisions.
    - **Scale up delay** — This is the waiting period before adding resources in response to rising demand.

After completing the setup, click the **Deploy model** button at the bottom of the page to initiate the deployment. 

You’ll then be redirected to the nodepool page, where your deployed model will be listed.

![ ](/img/compute-orchestration/compute-14.png)

## Use Deployed Model

Once the model is deployed, you can make use of it. To do so, go to the nodepool page where the model is listed, and click on the model. 

![ ](/img/compute-orchestration/compute-15.png)

You’ll be redirected to the individual model’s page, where you can run [inferences](https://docs.clarifai.com/portal-guide/ppredict/), integrate it into a [workflow](https://docs.clarifai.com/portal-guide/workflows/), or use it for other tasks. 

When inferencing using a deployed model, the request is routed to the nodepool within the cloud region specified in the cluster, and the model’s predictions are returned as output.

In the model's **Deployments** tab, you can view a table listing all the completed deployments.

![ ](/img/compute-orchestration/compute-16.png)







