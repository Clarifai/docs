---
description: Set up your computing infrastructure easily and fast for inference
sidebar_position: 4
draft: true
---

# Set Up Compute Quickly

**Set up your computing infrastructure easily and fast for inference**
<hr />

Clarifai makes it easy to provision and manage your own [computing infrastructure](https://docs.clarifai.com/compute/overview). With just a few clicks, you can spin up pre-configured compute resources and use them for deploying your models for inference.

## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your existing Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. 

## Step 2: Choose Quick Compute Option

Navigate to the **Set Up Compute** section. You can access the section in any of the following ways:

- From the platform's [homepage](https://clarifai.com/home), go to the **Set Up Compute** section.
- From an individual model's page, such as for [Llama-3_2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct?tab=compute), go to the **Compute** tab and scroll to the **Set Up Compute** section at the bottom. 

![](/img/new-docs/deploy-9.png)

Then, click the **Quick Compute** button located in the bottom-left corner of the Quick Compute information card.

> **Note:** If the quick, pre-configured compute option don’t fully meet your requirements, you can select the [**Create your own**](https://docs.clarifai.com/compute/deployments/clusters-nodepools/) option to customize the infrastructure according to your specific needs.

## Step 3: Review Your Compute Instance

After clicking the button, a pop-up window will appear, displaying your pre-configured [compute instance](https://docs.clarifai.com/compute/cloud-instances) and its settings.

A [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat) will be pre-populated for your convenience. If needed, you can select a different token from the dropdown list or create a new one.

![](/img/new-docs/deploy-5.png)

After reviewing your compute instance details, click the **Create** button. This will automatically generate a compute cluster and nodepool based on the pre-configured settings.

![](/img/new-docs/deploy-6.png)

> **Note:** If you want to deploy a model right away, use the modal that appears to select a model, then click the **Deploy model** button.

## Step 4: Use Your Compute Instance

Once your compute cluster and nodepool are created, you can open the **Compute** section from the collapsible left sidebar and select **Compute Overview** to view them.

![](/img/new-docs/deploy-6-1.png)

You can then use these resources to [deploy](https://docs.clarifai.com/compute/deployments/deploy-model) models and run [inference](https://docs.clarifai.com/compute/models/inference/ui).

