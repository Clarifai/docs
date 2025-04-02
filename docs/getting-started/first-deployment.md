---
description: Set up your own computing infrastructure easily and fast
sidebar_position: 2
---

# Deploy Your First Model

**Set up your own computing infrastructure easily and fast**
<hr />

Clarifai offers an intuitive interface and a robust API that allow you to quickly provision your own computing infrastructure — making the process of deploying your models easier and faster.

With just a few simple steps or a minimal amount of code, you can take a trained model and set it up for inference. 

:::warning Log in or Set up an Account

[Log in to](https://clarifai.com/login) your existing Clarifai account or [create](https://clarifai.com/signup) a new one to explore the platform's powerful AI capabilities. New accounts receive free operations to begin exploration.

:::

## Step 1: Identify a Model

Log in to the Clarifai platform and identify the model you want to deploy on the homepage. Then, click the **DEPLOY THE MODEL** button in the bottom right corner of the model's information card.

![](/img/new-docs/deploy-1.png)

## Step 2: Review Your Compute Instances

After clicking the button, a small window will appear, displaying the pre-configured [compute instances](https://docs.clarifai.com/compute/deployments/cloud-instances) available for deployment. Review the options and choose the one that best fits your needs.

- **Basic Compute** — Recommended for development and quick tests, offering reliable, low-cost performance.  
- **Advanced Compute** — Ideal for large-scale production inference or training of complex models.  

![](/img/new-docs/deploy-2.png)

:::tip

If you prefer more control and want to deploy the model using an existing cluster and nodepool, click the provided link in the pop-up window. This will allow you to [customize](https://docs.clarifai.com/compute/deployments/clusters-nodepools) the deployment based on your needs.

:::

Then, click the **Deploy** button. 

A compute cluster and nodepool will be automatically created using the pre-configured settings. The model will be deployed within this infrastructure.  

## Step 3: Run Inferences  

After clicking the button, you'll be redirected to the created nodepool page, where your compute settings and deployed model will be listed.  

![](/img/new-docs/deploy-3.png)

You can then run inferences by:

- Navigating to the model’s individual page.  
- Selecting the deployment from the **Deployment** dropdown.  
- Going to the **Overview** pane and submitting your prediction requests.

![](/img/new-docs/deploy-4.png)

## Alternative Deployment Method

> _Alternatively, you can initiate your first deployment by navigating to the **Set Up Compute** section on the homepage. Then, choose either the **Basic Compute** or **Advanced Compute** option, as outlined earlier, to apply your pre-configured compute orchestration settings. If these predefined options don’t fully meet your requirements, you can select the **Create your own** option to customize the infrastructure according to your specific needs._

> ![](/img/new-docs/deploy-5.png)

> _Once you’ve selected a pre-configured option, a confirmation window will appear, displaying your chosen compute settings. A Personal Access Token (PAT) will be pre-populated for your convenience. If needed, you can select a different token from the dropdown list or create a new one._

> _After confirming your settings, click the **Create** button. This will automatically generate a compute cluster and nodepool based on your pre-configured settings._

> ![](/img/new-docs/deploy-6.png)

> _Next, choose the model you wish to deploy and click the **Deploy Model** button. You’ll then be redirected to the nodepool page, where your compute settings and deployed model will be displayed for reference, as outlined earlier._

> ![](/img/new-docs/deploy-7.png)