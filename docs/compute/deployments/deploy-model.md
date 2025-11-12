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
import CURLRestrictDeployment from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/restrict_deployment.sh";
import OutputCURLRestrictDeployment from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/output_restrict_deployment.txt";


## **Via the UI**

:::note

Each model or workflow can only have one deployment per nodepool.

:::

### Step 1: Start Creating a Deployment

To create a deployment, go to the **Compute** option in the collapsible left sidebar. Then, select **Deployments** from the dropdown list.

You'll be redirected to the **Deployments** page, where you can view and manage deployments across your Clarifai compute resources.

To start creating a deployment, click the **Create Deployment** button in the upper-right corner of the page. 

![ ](/img/compute-orchestration/compute-12.png)

:::note Alternatively

You can create a deployment directly from other areas within the platform. To deploy from a specific model, go to the individual page of the model you want to deploy and click the **Deploy Model** button. You can also create a deployment from a particular cluster or nodepool by navigating to its page and clicking **Deploy Model** there.

> **Note:** On an individual model page, you can also open the **Compute** tab to check if it is already running on any compute environments. This tab displays the compute requirements needed for successfully deploying the model, allowing you to choose a configuration that meets those requirements.

![ ](/img/compute-orchestration/compute-11.png)

:::

### Step 2: Select a Model

You’ll be redirected to a page where you can configure your model's compute settings and deploy it in one click.

![ ](/img/compute-orchestration/compute-13.png)

If you haven’t already selected a trained model, you can do so here. 

When you click the **Search models...** field, a selection window appears, allowing you to choose which model to deploy. You can browse through the listed models or use the search bar to quickly find a specific one.

![ ](/img/compute-orchestration/compute-13-3.png)

In the upper-right corner of the window, there’s an account selector that lets you switch between different sources — such as your personal workspace, any organizations you belong to, or the public Clarifai model library. Selecting a different source updates the list to show the available models from that account or library.

After selecting your desired model, it will be listed in the **Select a Model** field. By default, the latest version of the model will be used, unless you use the **Select Version** field to manually select a different version.

![ ](/img/compute-orchestration/compute-13-4.png)

### Step 3: Configure an Instance

Next, choose a cloud instance type and hardware configuration that best fits your model’s compute requirements and performance goals.

To do this, select **Choose an instance** or click the **Edit** button. 

![ ](/img/compute-orchestration/compute-13-5.png)

A window will appear, allowing you to select an instance type for your deployment. You can pick from your existing instances listed under **Your Instances**, or select from the automatically pre-configured **Recommended Instances** provided based on your model’s compatibility and resource needs.

![ ](/img/compute-orchestration/compute-13-6.png)

Each instance option displays key details such as GPU type, available memory, CPU cores, and cost per minute. Make sure the instance you select is compatible with your model — incompatible instances will be clearly labeled in red.

If you wish to use a premium instance, click **Contact Us** to reach our team for manual provisioning. You can also click **[Create Custom Instance](https://docs.clarifai.com/compute/deployments/clusters-nodepools)** in the upper-right corner to configure a new instance that matches your specific requirements.

Once you’ve selected your preferred instance, click **Save Changes** to apply the configuration. The chosen instance will then appear in the **Instance Configuration** field of your deployment setup.

![ ](/img/compute-orchestration/compute-13-7.png)


### Step 4: Set Autoscaling

Next, configure how your deployment scales based on usage and demand. You can either keep the default autoscaling settings provided or customize them to better suit your workload.

To adjust the settings, select the **Autoscaling** field or click the **Edit** button. 

![ ](/img/compute-orchestration/compute-13-2.png)

This opens a window where you can define how your deployment automatically scales up or down depending on traffic and resource utilization.

Once you’ve configured your preferred scaling parameters, click **Save Changes** to apply the updates.

![ ](/img/compute-orchestration/compute-14.png)

These are the autoscaling settings you can configure:

- **Scale To Zero** — Turn this on if you want your deployment to automatically pause and use no active instances when it’s not in use.

<a id="model-replica"></a>

- **Min Replicas / Max Replicas** — This specifies the minimum and maximum range of model replicas to deploy, adjusting based on your performance needs and anticipated workload. Adding replicas enables horizontal scaling, where the workload is distributed across several instances of the model rather than relying on a single one. However, increasing them consumes more resources and may lead to higher costs. Each node in your nodepool can host multiple replicas, depending on model size and available resources.

    > **Note:** Your nodepool must have enough capacity to support this range. 

:::tip node autoscaling range

[Click here](clusters-nodepools.md#node-range) to find out how to set up node autoscaling ranges to automatically adjust your infrastructure based on traffic demand.

:::

- **Scale To Zero Delay** — This sets the idle time (in seconds) before scaling down to zero replicas after inactivity.
- **Scale Up Delay** — This sets the waiting period (in seconds) before adding replicas in response to rising demand. Shorter delays respond faster, but may over-provision. 
- **Scale Down Delay** — This sets the waiting period (in seconds) before removing replicas after a demand decrease. A longer delay helps avoid unnecessary scale-downs during brief drips in activity. 
Note that your nodepool will only scale down to the minimum number of replica(s) configured.


:::note Advanced Deployment

In the **Edit Autoscaling Configuration** window, you can click the **Advanced Deployment** link to access additional configuration options that provide greater control over your deployment behavior.

<details>
  <summary>Advanced Deployment</summary>

    ![ ](/img/compute-orchestration/compute-14-2.png)
</details>

The following settings are available for customization:

- **Model** — Select the model (and optionally the version) you want to deploy, as described earlier. 
- **Cluster** — Select the cluster you want to use. 
- **Nodepool** — Choose a nodepool to run your model.
- **Deployment ID** — Provide a deployment ID to uniquely identify your deployment. You can also add an optional description to provide additional context and make it easier to recognize later.
- **Advanced Deployment Settings** — If needed, you can configure additional advanced deployment settings. In addition to the autoscaling options described earlier, the following settings are also available for customization:
    - **Traffic History Timeframe** — This defines the traffic history period (in seconds) that your deployment will review before making scaling decisions.
    - **Disable Nodepool Packing** — Packing refers to placing multiple replicas on the same node to improve resource utilization and reduce costs. When set to `false` (default), replicas may be packed together for efficiency. When set to `true`, deployments are restricted to a single model replica per node, which can improve isolation or meet specific performance needs, but may result in underutilized nodes and higher costs.

:::

### Step 5: Set Required Credentials

Select a [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT) to associate with your deployment. This token authorizes access to the resources your deployment needs to run.

![ ](/img/compute-orchestration/compute-14-1.png)

> **Note:** Be cautious when modifying the PAT after the deployment has been created, as doing so may cause the associated compute resources to stop functioning properly.

If you don’t already have a suitable PAT, you can click the button provided to generate one for this deployment.

### Step 6: Create a Deployment

After completing all configuration steps, click **Create a Deployment** to launch your deployment. If a cluster or nodepool does not already exist, they will be automatically created using your specified settings, and your model will be deployed within this infrastructure.

![ ](/img/compute-orchestration/compute-14-3.png)

> **Note:** Review the price range displayed on the page to understand the estimated deployment cost. You can learn more about pricing [here](https://www.clarifai.com/pricing).

Once the deployment is created, you’ll be redirected to the nodepool page, where your deployed model will be listed. You can then start using the deployment to run [inferences](https://docs.clarifai.com/compute/inference/clarifai/ui).

![ ](/img/compute-orchestration/compute-14-4.png)

## **Via the API**

### Create a Deployment

To deploy a model within a nodepool you've created, provide the `deployment_id` and `config_filepath` parameters to the `create_deployment` method of the `Nodepool` class.

You can learn how to create the `deployment_config.yaml` file, which contains the deployment configuration details, [here](clusters-nodepools.md#3-deployment_configyaml).

:::note

Each model or workflow can only have one deployment per nodepool.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO12}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL4}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
  ```text
[INFO] 14:45:29.871319 Deployment with ID 'test-deployment' is created:
code: SUCCESS
description: "Ok"
req_id: "sdk-python-11.7.5-1eb407b9e125478287d552fb76bc37dd"
```
</details>

After creating it, initialize the `Deployment` class by providing the `user_id` and `deployment_id` parameters. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO15}</CodeBlock>
</TabItem>
</Tabs>

### Restrict Deployments

You can specify the type of compute cluster an existing model you own is deployed to. By setting the `deploy_restriction` value, you can patch a model and define whether it runs on shared or dedicated resources.

These are the values you can set:

- `0` (`USAGE_RESTRICTION_NOT_SET`) — The default where no explicit restriction is set.
- `1` (`NO_LIMITS`) — The model can be deployed on any kind of compute (shared or dedicated). There are no policy constraints.
- `2` (`SHARED_COMPUTE_ONLY`) — The model can only run on shared compute resources. This is typically cheaper but may have lower isolation or performance guarantees.
- `3` (`DEDICATED_COMPUTE_ONLY`) — The model can only run on dedicated compute resources. This is used when you need guaranteed performance, security isolation, or compliance.

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
       <CodeBlock className="language-python">{CURLRestrictDeployment}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{OutputCURLRestrictDeployment}</CodeBlock>
</details>