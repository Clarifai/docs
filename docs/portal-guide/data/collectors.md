---
description: Capture inputs used for making predictions in your app
sidebar_position: 3
---

# Collectors

**Capture inputs used for making predictions in your app**
<hr />

Collector is an ingenious feature that allows you to capture the inputs used for making predictions. After creating a collector, which includes specifying the caller user ID and the source model, a triggering process is established. 

This process ensures that whenever the stated user makes a prediction using the specified model, the inputs used in generating the predictions are automatically ingested and stored in your app.

With collectors, you can automatically pipe in data from production models, gather inputs to feed your models with real-world training data, and unlock many platform training capabilities.

To create a collector within your application, you need to use the Clarifai’s [Collectors module](https://clarifai.com/clarifai/data/modules/collector). 

:::tip

Modules are custom plugins with UI elements that let you extend the capabilities of the Clarifai platform. You can learn more about them [here](https://docs.clarifai.com/portal-guide/modules/). 

:::

:::info

The Collector feature is currently exclusively available to our Professional and Enterprise users. Learn more [here](https://www.clarifai.com/pricing).

:::


Let’s demonstrate how you can use the module to create a collector. 

## Install the Module

### Option 1

Go to the Collectors module [page](https://clarifai.com/clarifai/data/modules/collector) and click the **Install Module** button at the upper-right corner. 

Next, on the small window that pops up, select a desired user and destination app for installing the module.

Click the **Confirm** button.

![](/img/modules/collector-1.png)

On the ensuing page, choose a destination URL for installing the module, select the module visibility, and click the **Install to this App!** button. 

After the module has been successfully installed, click the **Click to use installed module version** button to start using it. You can also refresh the page for your installed module to appear on the left sidebar under the **Installed Modules** category.

![](/img/modules/collector-2.png)

If you click the button, you’ll be redirected to a page that requires you to authorize the module to access data on your behalf. You will see the permissions the module requires.  

![](/img/modules/collector-3.png)

Click the **Authorize** button.

### Option 2

Alternatively, you can use the module’s URL to install it in your app. To do so, click the **Manage Installed Modules** option at the bottom of the collapsible left sidebar. 

Grab the URL of the Collectors module and paste it into the **Module URL** input field.  

![](/img/modules/collector-4.png)

You can then follow the ensuing prompts to complete installing the module in your app. 

## Create Collector

After installing the module and authorizing it to access data on your behalf, you’ll be redirected to a page that allows you to create it. You can fill in the required details. 
 
![](/img/modules/collector-5.png)

### Collector ID​

Give your collector a useful and descriptive name.

### Description
​
Provide additional details about your collector.

### Pre-queue Workflow​

In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion.

Common pre-queue workflows are designed to:

- Randomly sample inputs
- Filter inputs by metadata
- Filter inputs with a maximum probability below a given threshold
- Filter inputs with a minimum probability above a given threshold
- Filter specific concept probabilities above a given threshold
- Undertake knowledge graph mapping from public General model concepts to a custom model

:::note

At least one (pre-queue or post-queue) workflow ID is required. 

:::

> _For this example, let’s create a **random-sample** workflow, which randomly samples the inputs to be collected in your app. Let’s set the **keep_fraction** parameter to 1, implying that all (100%) the inputs predicted by the specified model will be kept and added to your app._ 

> ![](/img/modules/collector-6.png)

> _After creating the workflow in the [Workflow Builder](https://docs.clarifai.com/portal-guide/workflows/workflow-builder/), let’s select it in the **Pre-Queue Workflow** field._

### Post-queue Workflow​

This is the workflow to run after the collector has processed the queued input. This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. 

> _For this example, let’s create an **image-to-text** workflow, which uses the [general-english-image-caption-blip](https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip) model to generate English captions from images. So, the images outputted by the pre-queue workflow will be captioned by the post-queue workflow, and the captioned text stored in your app._

> ![](/img/modules/collector-11.png)

> _After creating the workflow in the Workflow Builder, let’s select it in the **Post-Queue Workflow** field._

If the workflow output has any field that is non-empty, then it will be passed on to POST /inputs to the destination app.

### Post Inputs Key

Select the PAT key that you would like your module to use to enable inputs to be posted to your app. This key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app. 

It should also have the permissions to access the source model used for making the predictions. 

### Activate Collector

Select the checkbox if you want to activate the collector and make it ready to be used. Otherwise, the collector will remain inactive. 

### Caller

Specify the ID of the caller who will be making the prediction requests. You can even provide your own user ID. 

### Source

Specify the source model from which you want to collect data. The collector will automatically post the inputs utilized by the caller for making predictions using the specified model into your app. 

You need to specify the model URL and its version ID. 

> _For this example, let’s specify the [general-image-recognition]( https://clarifai.com/clarifai/main/models/general-image-recognition) model with its version ID as aa7f35c01e0642fda5cf400f543e7c40._

### Create new Collector

Here are the details we provided for creating the new collector:

![](/img/modules/collector-7.png)

Finally, click the **Create new collector** button. 

## Manage Collectors

If you click the **Show All** option located under the **collector** module within the collapsible left sidebar, you will be directed to a subsequent page where your created collector, along with its corresponding details, will be listed for your review.

This page also allows you to effortlessly deactivate, reactivate, or delete collectors as needed.

![](/img/modules/collector-8.png)

If you click the **Update** option, you will be directed to a subsequent page where you can update the details of your collector.

## Example

Let’s say the caller you’d specified uses [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg) to make a prediction on the general-image-recognition model, which you’d stated as the source model. 

![](/img/modules/collector-9.png)

The image used for making the prediction will be automatically captured, captioned, and the generated text stored in your app — according to the rules you specified when creating the collector.  

![](/img/modules/collector-10.png)

If you update the collector by deselecting the post-queue workflow, only the pre-queue workflow will remain active. As such, you'll notice that the image used for making the prediction will be captured in your app as-is. 

![](/img/modules/collector-12.png)

That’s  it!                                                                                                                                                                                                                                                                                                                                                                                      