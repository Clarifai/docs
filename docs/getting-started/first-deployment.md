---
description: Set up your computing infrastructure easily and fast for inference
sidebar_position: 3
---

# Deploy Your First Model

**Quickly set up infrastructure for inference**
<hr />

Clarifai provides an intuitive interface that makes it easy to provision compute infrastructure for running your models. 

[Deployment](https://docs.clarifai.com/compute/deployments/deploy-model) allows you to configure and activate the infrastructure needed to serve model predictions. With just a few simple steps, you can deploy a trained model and start generating predictions.

:::note

Cloud model deployment via Clarifai requires a [paid plan](https://www.clarifai.com/pricing). You can try local deployment with [Local Runners](https://docs.clarifai.com/compute/local-runners) for free.

:::

## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. 

## Step 2: Get a Model

Clarifai’s [Community platform](https://clarifai.com/explore) offers a wide selection of cutting-edge models ready for integration into your AI projects.

You can easily find a model to use by visiting the Community homepage and exploring the **Trending AI Models** section, which highlights popular and ready-to-use models.

After finding a model, click the **DEPLOY THE MODEL** button in the bottom right corner of its information card.

![](/img/new-docs/deploy-1.png)

## Step 3: Review Your Compute Instances

After clicking the button, a pop-up window will appear showing the available pre-configured [compute instance](https://docs.clarifai.com/compute/deployments/cloud-instances) for deployment, along with a pre-filled [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat) for authentication.

Review the options and choose the one that best fits your needs.

- **Basic Compute** — Recommended for development and quick tests, offering reliable, low-cost performance.  
- **Advanced Compute** — Ideal for large-scale production inference or training of complex models.  

![](/img/new-docs/deploy-2.png)

:::tip

If you prefer more control and want to deploy the model using an existing [cluster and nodepool](https://docs.clarifai.com/compute/deployments/clusters-nodepools), click the provided link in the pop-up window. This will allow you to customize the deployment based on your needs.

:::

Then, click the **Deploy** button. 

A notification will appear at the top of the page confirming that a cluster and nodepool have been successfully created using the pre-configured settings, and the model has been deployed within this infrastructure.

You’ll then be automatically redirected to the newly created nodepool page, where you can view your compute settings and the deployed model.

![](/img/new-docs/deploy-3.png)

## Step 4: Run Inferences  

To make a prediction using your deployed model, start by navigating to its individual page. You can do this by clicking the model listed on the nodepool page.

Next, on the deployed model’s page, click the **Open in Playground** button in the upper-right corner.

![](/img/new-docs/deploy-4.png)

You’ll be taken to the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground) interface, where you can enter your prompt in the message box to run inferences using your deployed model. You can also try one of the predefined prompt examples.

![](/img/new-docs/deploy-8.png)

Click the arrow icon in the message box to submit your request.

The response will be streamed directly on the interface, allowing you to view the output in real time.

> **Note:** If you submit a request and don't receive a response right away, the model may still be loading. Wait a few seconds, then try sending your request again.


