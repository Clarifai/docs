---
description: Deploy a model into your created cluster and nodepool
sidebar_position: 2
toc_max_heading_level: 4
---

# Deploy a Model

**Deploy a model into your created cluster and nodepool**
<hr />

Clarifai’s Compute Orchestration provides efficient capabilities for you to deploy any model on any compute infrastructure, at any scale. 

You can configure your compute environment and deploy your models into nodepools with your preferred settings, optimizing for both cost and scalability.

With model deployment, you can quickly take a trained model and set it up for inference.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO12 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_deployment.py";
import CL4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_deployment.sh";
import CO15 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_deployment.py";


## **Via the UI**

### Create a Deployment

:::note

Each model or workflow can only have one deployment per nodepool.

:::

To deploy a model, navigate to your cluster or nodepool and click the **Deploy model** button in the page. 
 
![ ](/img/compute-orchestration/compute-11.png)

> _Alternatively, navigate to a model's page, go to the **Deployments** tab, and click the **Deploy model** or **Deploy this model** button._

> ![ ](/img/compute-orchestration/compute-12.png)

You’ll be redirected to a page where you can customize the compute configurations for deploying your model. 

![ ](/img/compute-orchestration/compute-13.png)

-  **Deployment details** — Create a deployment ID and description that helps identify your model version and selected compute combination.

- **Model and version** — Select an already trained model and the version you want to deploy.

- **Cluster** —Select or create a cluster.

- **Nodepool** — Select or create a nodepool to deploy your model considering your performance goals. The details of the dedicated cluster and nodepool you’ve selected will be displayed. 

<a id="model-replica"></a>

- **Advanced Settings** — Optionally, you can click the collapsible section to configure the following settings:

    - **Model Replicas** — This specifies the minimum and maximum range of model replicas to deploy, adjusting based on your performance needs and anticipated workload. Adding replicas enables horizontal scaling, where the workload is distributed across several instances of the model rather than relying on a single one. However, increasing them consumes more resources and may lead to higher costs. Each node in your nodepool can host multiple replicas, depending on model size and available resources.

   :::tip node autoscaling range

    [Click here](clusters-nodepools.md#node-range) to find out how to set up node autoscaling ranges to automatically adjust your infrastructure based on traffic demand.

    :::

    - **Scale Up Delay** — This sets the waiting period (in seconds) before adding resources in response to rising demand.
    - **Scale Down Delay** — This sets the waiting period (in seconds) before reducing resources after a demand decrease. Note that your nodepool will only scale down to the minimum number of replica(s) configured.
    - **Traffic History Timeframe** — This defines the traffic history period (in seconds) that your deployment will review before making scaling decisions.
    - **Scale To Zero Delay** — This sets the idle time (in seconds) before scaling down to zero replicas after inactivity.
    - **Disable Nodepool Packing** — Enabling this option restricts deployments to a single model replica per node. While this can be useful for specific performance needs, it may lead to underutilized nodes and increased costs due to reduced resource efficiency.
   
After completing the setup, click the **Deploy Model** button at the bottom of the page to create the deployment. 

You’ll then be redirected to the nodepool page, where your deployed model will be listed.

![ ](/img/compute-orchestration/compute-14.png)

You can find the deployment listed in the **Deployment** dropdown menu in the model's playground, where you can select it for [inferencing](https://docs.clarifai.com/compute/models/model-inference).

![ ](/img/compute-orchestration/compute-14-1.png)

## **Via the API**

### Create a Deployment

To deploy a model within a nodepool you've created, provide the `deployment_id` and `config_filepath` parameters to the `create_deployment` method of the `Nodepool` class.

You can learn how to create the `deployment_config.yaml` file, which contains the deployment configuration details, [here](clusters-nodepools.md#set-up-project-directory).

:::note

Each model or workflow can only have one deployment per nodepool.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO12}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL4}</CodeBlock>
</TabItem>
</Tabs>

After creating it, initialize the `Deployment` class by providing the `user_id` and `deployment_id` parameters. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO15}</CodeBlock>
</TabItem>
</Tabs>

:::tip Model Inferencing

Once your model is deployed, you can use it for [inferencing](https://docs.clarifai.com/compute/models/model-inference) by calling the appropriate prediction methods. Note that you need to specify the `deployment_id` parameter for ensure proper routing and execution of your prediction call. 

:::
