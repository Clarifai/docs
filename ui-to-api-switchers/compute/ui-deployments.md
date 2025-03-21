
import TOCInline from '@theme/TOCInline';

<div className="toc-inline">
  <TOCInline toc={toc} maxHeadingLevel={2}  
  />
</div>

Clarifai’s Compute Orchestration provides efficient capabilities for you to deploy any model on any compute infrastructure, at any scale. 

This new platform capability brings the convenience of serverless autoscaling to any compute, regardless of where it’s deployed and what hardware it’s running on, and scale automatically to meet workload demands.

Compute Orchestration allows you to upload a model, configure your SaaS or self-managed compute, and then deploy your model into your nodepools with your preferred settings cost-efficiently and scalably. 

:::tip info

For the Compute Orchestration Public Preview, deployment is only supported for models that users have uploaded to our platform via the Python SDK. We plan to expand this functionality to include out-of-the-box and custom-trained models on our platform in the future. You can learn how to upload models [here](https://docs.clarifai.com/sdk/compute-orchestration/model-upload).

:::

## Prerequisites

- Set up a compute cluster and nodepool. You can follow the instructions provided [here](https://docs.clarifai.com/portal-guide/compute-orchestration/set-up-compute).
- [Upload](https://docs.clarifai.com/sdk/compute-orchestration/model-upload) a model you'd like to use for running inferences.


## Make a Deployment

:::note

Each model or workflow can only have one deployment per nodepool.

:::

To deploy a model, navigate to your cluster or nodepool page and click the **Deploy a model** button in the upper-right corner. 
 
![ ](/img/compute-orchestration/compute-11.png)

> _Alternatively, navigate to your model's page, go to the **Deployments** tab, and click the **Deploy model** or **Deploy this model** button._

> ![ ](/img/compute-orchestration/compute-12.png)

You’ll be redirected to a page where you can customize the compute configurations for deploying your model. 

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

Once your model is deployed, you can start utilizing it to run inferences. To access your deployments, navigate to the model’s individual page and select the **Deployments** tab.  

Here, you’ll find a table listing all deployments associated with the model, including details such as the cluster and nodepool. You can also sort the table alphabetically (A–Z or Z–A) based on your preferences.

![ ](/img/compute-orchestration/compute-16.png)

To select a deployment, click the **Deployment** button. 

A dropdown list will appear, showing your available deployments. Choose the one you want to use to direct traffic to a specific cluster and nodepool. If no selection is made, the default **Clarifai Shared** deployment will be used.

![ ](/img/compute-orchestration/compute-15.png)

:::warning Why Deployment Selection Matters

Choosing the right deployment ensures efficient routing and execution of prediction requests. For example, you can route requests to a GCP cluster by selecting a corresponding deployment ID, use a different deployment ID for an AWS cluster, and yet another for an on-premises deployment. This gives you full control over performance, costs, and security, allowing you to focus on building cutting-edge AI solutions while we handle the infrastructure complexity. 

:::

Once you’ve selected a deployment ID, go to the **Overview** pane to use it for making [prediction requests](https://docs.clarifai.com/portal-guide/ppredict/). When inferencing using a deployed model, the request is routed to the nodepool within the cloud region specified in the cluster, and the model’s predictions are returned as output.

![ ](/img/compute-orchestration/compute-21.png)