---
description: Set up your computing infrastructure easily and fast for inference
sidebar_position: 4
---

# Deploy Your First Model via UI

**Quickly set up infrastructure for inference**
<hr />

Clarifai provides an intuitive interface that makes it easy to provision compute infrastructure for running your models.

[Deployment](https://docs.clarifai.com/compute/deployments/deploy-model) allows you to configure and activate the infrastructure needed to serve model predictions. With just a few simple steps, you can deploy a trained model and start generating predictions.


## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. 

## Step 2: Choose a Model

The Clarifai [Community platform](https://clarifai.com/explore) offers a wide range of state-of-the-art models that are ready to use in your AI applications.

Browse the platform to quickly discover a model that fits your use case — whether for text generation, vision, or multimodal tasks.

For this guide, we’ll use the [Llama-3.2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct) model.

After finding a model, click the **Deploy Model** button in the upper-right corner of the page.

![](/img/new-docs/deploy-1.png)

## Step 3: Configure Your Deployment

You’ll be redirected to the deployment creation page, where most fields are automatically pre-filled for your convenience — such as the Deployment ID and [PAT](https://docs.clarifai.com/control/authentication/pat) (used for authentication).

You can edit these values as needed and optionally add descriptive notes to help identify the deployment later.

![](/img/new-docs/deploy-2.png)

The only required action is selecting a nodepool, which defines the [cloud instance and hardware](https://docs.clarifai.com/compute/cloud-instances) that will host your model. To configure it, click the pencil icon on the far right of the nodepool section.

In the nodepool configuration dialog, open the **Recommended** tab to view a list of pre-vetted instances that are known to work well with the selected model and will be provisioned automatically.

![](/img/new-docs/deploy-3.png)

Choose the option that best fits your performance and cost requirements, then click **Save Changes**.

> **Note:** If you already have an existing nodepool, you can select it instead. You may also create a [custom nodepool](https://docs.clarifai.com/compute/deployments/clusters-nodepools) tailored to your specific needs. If you need access to a premium nodepool, please [contact us](https://www.clarifai.com/explore/contact-us).

On the **Create Deployment** page, the remaining deployment settings, including pricing, will be automatically filled in for you.

![](/img/new-docs/deploy-4.png)

Finally, click **Create Deployment** in the bottom-right corner of the page to launch your deployment.

A toast notification will appear at the top of the page confirming that the cluster and nodepool have been successfully created using the pre-configured settings, and the model has been deployed within this infrastructure.

You’ll then be automatically redirected to the newly created nodepool page, where you can view your compute settings and the deployed model.

![](/img/new-docs/deploy-8.png)


## Step 4: Run Inferences  

To make a prediction using your deployed model, start by navigating to its individual page. You can do this by clicking the model listed on the nodepool page.

Next, on the deployed model’s page, click the **Try in Playground** button in the upper-right corner.

> **Note:** On the model’s individual page, open the **Compute** tab to view details of the compute environment where it’s deployed.

![](/img/new-docs/deploy-9-a.png)

You’ll be taken to the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground) interface, where you can enter your prompt in the message box to run inferences using your deployed model. You can also try one of the predefined prompt examples.

![](/img/new-docs/deploy-9-b.png)

Next, submit your request by clicking the arrow icon in the message box or pressing Enter on your keyboard.

The response will be streamed directly on the interface, allowing you to view the output in real time.


