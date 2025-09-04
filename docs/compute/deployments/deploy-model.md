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

:::tip 

Learn how deployment works when making a prediction using our Compute Orchestration capabilities [here](https://docs.clarifai.com/compute/inference/#predict-with-compute-orchestration). 

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO12 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/create_deployment.py";
import CL4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_create_deployment.sh";
import CO15 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/init_deployment.py";


## **Via the UI**

:::note

Each model or workflow can only have one deployment per nodepool.

:::

### Step 1: Start Creating a Deployment

To create a deployment, navigate to the model’s page and click the **Deploy Model** button.

You can also open the **Activity** tab to check if the model is already running on any compute environments. This tab displays the compute requirements needed for successfully deploying the model, allowing you to choose a nodepool that meets those requirements.

![ ](/img/compute-orchestration/compute-12.png)


> _Alternatively, to create a deployment, go to the specific cluster or nodepool where you want the deployment to run, then click the **Deploy Model** button on that page._
 
> _![ ](/img/compute-orchestration/compute-11.png)_

### Step 2: Select a Model

You’ll be redirected to a page where you can configure the compute settings for your deployment.

![ ](/img/compute-orchestration/compute-13.png)

If you haven’t already selected a trained model, you can do so here. By default, the latest version of the model will be used, unless you switch the version toggle off to manually select a different version.

The model’s compute requirements will also be displayed, helping you select a compatible cluster and nodepool that meet those specifications.

### Step 3: Select Cluster and Nodepool

Choose an existing cluster and nodepool — or create new ones — based on your model’s compute requirements and performance goals. 

Once selected, the details of the chosen cluster and nodepool will be displayed for your review.

![ ](/img/compute-orchestration/compute-14.png)

### Step 4: Provide Deployment ID

Provide a deployment ID to uniquely identify your deployment. 

You can also add an optional description to provide additional context and make it easier to recognize later.

### Step 5: Configure Advanced Settings

You can also configure advanced deployment settings if needed. If you choose not to, the default values will be applied automatically.

![ ](/img/compute-orchestration/compute-13-2.png)

<a id="model-replica"></a>

- **Model Replicas** — This specifies the minimum and maximum range of model replicas to deploy, adjusting based on your performance needs and anticipated workload. Adding replicas enables horizontal scaling, where the workload is distributed across several instances of the model rather than relying on a single one. However, increasing them consumes more resources and may lead to higher costs. Each node in your nodepool can host multiple replicas, depending on model size and available resources.

:::tip node autoscaling range

    [Click here](clusters-nodepools.md#node-range) to find out how to set up node autoscaling ranges to automatically adjust your infrastructure based on traffic demand.

:::

- **Scale Up Delay** — This sets the waiting period (in seconds) before adding resources in response to rising demand.
- **Scale Down Delay** — This sets the waiting period (in seconds) before reducing resources after a demand decrease. Note that your nodepool will only scale down to the minimum number of replica(s) configured.
- **Scale To Zero Delay** — This sets the idle time (in seconds) before scaling down to zero replicas after inactivity.
- **Traffic History Timeframe** — This defines the traffic history period (in seconds) that your deployment will review before making scaling decisions.
- **Disable Nodepool Packing** — Packing refers to placing multiple replicas on the same node to improve resource utilization and reduce costs. When set to `false` (default), replicas may be packed together for efficiency. When set to `true`, deployments are restricted to a single model replica per node, which can improve isolation or meet specific performance needs, but may result in underutilized nodes and higher costs.
   

### Step 6: Finalize and Create the Deployment

After completing the setup, click the **Deploy Model** button to create the deployment. You’ll be redirected to the nodepool page, where your deployed model will be listed.

You can also find the deployment listed in the **Activity** tab within the model's page. From there, you can select it to run [inferences](https://docs.clarifai.com/compute/models/model-inference).

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

