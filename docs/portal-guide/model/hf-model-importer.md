---
description: Step-by-step instructions for importing models into the Clarifai platform
sidebar_position: 7
---

# Import Models from Hugging Face

**Step-by-step instructions for importing models into the Clarifai platform**
<hr />

You can import models from external sources and use them on the Clarifai platform. With this feature, you can seamlessly integrate pre-trained models, developed externally, into the Clarifai platform, allowing you to expand the range of capabilities and possibilities for leveraging artificial intelligence (AI) in various applications.

By utilizing this feature, you gain the flexibility to import models that have been trained on specific tasks or datasets, taking advantage of external expertise or specialized knowledge.

Whether it's a custom model created by a data scientist, a state-of-the-art model developed by a research institution, or a community-driven model from open-source projects, this feature simplifies the process of incorporating these models into the Clarifai ecosystem.

This feature offers a user-friendly interface that streamlines the importing process, ensuring smooth integration with the Clarifai platform. Once imported, the models become seamlessly accessible, empowering you to tap into advanced AI capabilities without the need to build models from scratch.

## How to Import a Model 

In this example, we’ll demonstrate how to import a model from Hugging Face, which is a popular hub for a wide range of open source models.

Let’s go through the step-by-step instructions for importing a model from Hugging Face and deploying it on your own Clarifai app. 

:::info

The imported model will be automatically deployed and ready to be evaluated, combined with other models and agent operators in a workflow, or used to serve inference requests as it is. 

:::

### Step 1: Find a model on Hugging Face

Log in to the [Hugging Face](https://huggingface.co/models) platform and look for the model you want to import. You can search, filter, and sort by popularity  to get the best model that meets your needs. 
 
 ![](/img/model-importer/model_importer-1.png)

After selecting a model, you’ll be redirected to its individual page, where you can further assess whether you can import it to the Clarifai platform.  

 ![](/img/model-importer/model_importer-2.png)

- Click the **Use in Transformers** button and ensure that the model is supported by the Transformers machine learning library. If it cannot be used by the Transformers library, then it could be incompatible with our platform. 

- Click the **Edit model card** button and ensure that the model’s card doesn't mention `trust_remote_code=True` condition. This condition is necessary for certain model architectures that are not yet included in the Hugging Face Transformers library. Unfortunately, we can't import such models at the moment. 

- Click the **Files and versions** tab and check the size of the model. We only allow importing models that are less than 5GB. 

- Check the license of the model to ensure you can comfortably use the model. If the license type is not listed, you can check it on the model’s GitHub page. 

### Step 2: Import the model

After identifying a Hugging Face model, you can now import it to the Clarifai platform. To do so, go to the individual page of an application you own. 

The **Model Importer** form that appears allows you to import the model. 

Let’s talk about the fields to fill in the form. 

 ![](/img/model-importer/model_importer-3.png)

#### Clarifai-model-id

You can carefully pick a readable model ID. You can be faithful to the original model ID, while trying to follow Clarifai’s model ID convention: `[use case]-[language (for text or audio) ]-[input type)] -[architecture (optional)]-[public dataset(optional)]`.

##### Clarifai-model-notes

You can provide a short description of what the model is about. 

#### Toolkit

Choose the model’s toolkit from the drop-down list. 

#### Huggingface-pipeline-name

Pick the model type from the drop-down list. We support most of the Hugging Face model types. 
Click the **Next** button. 

#### Huggingface-model-name

Provide the name of the model as it appears on the Hugging Face platform. You can use the Hugging Face’s copy button to copy the model name, such as `cardiffnlp/twitter-roberta-base-sentiment`.

 ![](/img/model-importer/model_importer-5.png)

#### Submit

Finally, click the **Submit** button and enjoy the balloons celebrating your first imported Hugging Face model!

 ![](/img/model-importer/model_importer-4.png)

### Step 3: Use the model

Go to the **Models** category on the collapsible left sidebar and select the model you just imported.

 ![](/img/model-importer/model_importer-7.png)

You’ll be redirected to the individual page of the model. Click the **See versions table** button. You’ll notice that the model is still being uploaded. It takes a few minutes for the model to be uploaded—large models can take longer. 
 
 ![](/img/model-importer/model_importer-6.png)

After the model has been uploaded, the status will change to “Model is trained and ready.”

 ![](/img/model-importer/model_importer-8.png)

You can now click the **Use Model** button at the upper-right corner of the page to start using the model. 

Also, you can go to the **Overview** tab and add public preview examples, model description, notes, use case, toolkit (which is "Huggingface"), license, and more. 

 ![](/img/model-importer/model_importer-9.png)



