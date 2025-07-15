---
description: Set up your computing infrastructure easily and fast for inference
sidebar_position: 4
---

# Set Up Compute Fast

**Set up your computing infrastructure easily and fast for inference**
<hr />

Clarifai makes it easy to provision and manage your own [computing infrastructure](https://docs.clarifai.com/compute/overview). With just a few clicks, you can get up and running, and deploy your models for inference. 

:::note

Setting up a cloud compute infrastructure via Clarifai requires a [paid plan](https://www.clarifai.com/pricing).

:::

## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your existing Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. 

## Step 2: Choose Your Compute Option

Navigate to the **Set Up Compute** section and choose your preferred compute settings. You can access the section in any of the following ways:

- From the platform's [homepage](https://clarifai.com/home), scroll down to the **Set Up Compute** section.
- From an individual model's page, go to the **Activity** tab and scroll to the **Set Up Compute** section at the bottom.

![](/img/new-docs/deploy-9.png)

Then, select one of the following pre-configured compute options based on your needs:

- **Basic Compute** - Best suited for development, testing, and lightweight inference. Offers reliable performance at a lower cost.
- **Advanced Compute** - Designed for high-performance needs such as large-scale inference or training of complex models.

> **Note:** If these predefined options don’t fully meet your requirements, you can select the [**Create your own**](https://docs.clarifai.com/compute/deployments/clusters-nodepools/) option to customize the infrastructure according to your specific needs.

## Step 3: Review Your Compute Instances

Once you’ve selected a pre-configured option, a pop-up window will appear, displaying your chosen [compute instance](https://docs.clarifai.com/compute/deployments/cloud-instances) and settings.

![](/img/new-docs/deploy-5.png)

A [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat) will be pre-populated for your convenience. If needed, you can select a different token from the dropdown list or create a new one.
 
After confirming your settings, click the **Create** button. This will automatically generate a compute cluster and nodepool based on your pre-configured settings.

## Step 4: Deploy a Model

Once your compute cluster and nodepool are set up, you can [deploy a model](https://docs.clarifai.com/compute/deployments/deploy-model) directly to them.

To deploy a model, you can use the pop-up window to search for the model you want. Simply enter the model name in the search field and select it. 

Then, click **Deploy Model** to begin the deployment process.

![](/img/new-docs/deploy-6.png)

## Step 5: Use Your Deployed Model

After deployment, you’ll be redirected to the nodepool page, where you can view your compute settings and the details of your deployed model.

![](/img/new-docs/deploy-7.png)

You can then use the deployed model to run [inferences](https://docs.clarifai.com/compute/models/inference/ui) or perform other actions, such as integrating it into your workflows.
