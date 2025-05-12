---
description: Learn how to use transfer learning to create custom visual classifier model
sidebar_position: 2
---

# Visual Classifier

**Learn how to use transfer learning to create custom visual classifier models**
<hr />

A visual classifier model is a type of machine learning model that is trained to recognize and categorize images or visual inputs into predefined classes or labels. It "classifies" visual data based on patterns it has learned from training examples.

Let's demonstrate how you can create a custom visual classifier model using the [transfer learning](README.mdx) technique. 

:::warning Objective

We intend to create a model that differentiates between pants and shorts. 

:::

## Step 1: Create an App

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note

When creating the application, go with the default Image/Video option as the primary input type.

:::

## Step 2: Create a Dataset

[Click here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/#create-a-new-dataset) to learn how to create a dataset that will store the inputs. 


## Step 3: Add and Annotate Inputs

Next, you need to upload data to the app you've created. The input data, labeled with concepts, is what will be used for training your model. Training helps your model to “learn” from the annotated concepts on your inputs so that it can be able to recognize them. 

To get started with transfer learning, you don't need a large number of images. We recommend beginning with just 10 and adding more as needed. 

In this example, we'll use 5 images of pants and 5 images of shorts sourced from [this clothing dataset](https://github.com/alexeygrigorev/clothing-dataset-small). You can clone the repository and follow along with this documentation.

![](/img/illustration-training.png)

To upload inputs, select the **Inputs** option in the collapsible left sidebar. Next, click the **Upload inputs** button. 

![upload inputs](/img/community_2/custom_model_upload_inputs.png)

The small window that pops up allows you to upload your inputs — either by providing publicly accessible URLs or by uploading them directly from your local device. For this illustration, we'll upload the images of pants and shorts from a local device. 

![upload inputs window](/img/community_2/custom_models_upload_inputs_window.png)

- Use the **Select or add datasets** search box to select the dataset you previously created for storing the uploaded inputs. 

- To label the inputs with the `pants` concept, click the plus (**+**) icon next to the **Select or add concepts** search box. Then, type the new concept name in the search box. The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept. Once created, the concept will be listed underneath the search box. 

- Click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your annotated inputs to the dataset. 

- Similarly, upload the images of shorts to the dataset you previously created, and label them with the `shorts` concept. 

![](/img/community_2/custom_models_upload_inputs_window_2.png)

:::tip

[Click here](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete) to learn more about labeling inputs.

:::

## Step 4: Update Dataset

Next, go to the individual page of your dataset and create a version for it by clicking the **New version** button. This bookmarks the state of your data so that you can apply a specific version for training your custom model. 

![](/img/community_2/custom_model_dataset_version.png)

## Step 5: Choose a Model Type

Once you've added images that contain the concepts you want to train for, you can now proceed to create your custom model.

To begin, select the **Models** option in the collapsible left sidebar. On the ensuing page, click the **Add Model** button in the upper-right corner.

In the pop-up window, choose the **Build a Custom Model** option, then click **Continue** to proceed.

![](/img/community_2/custom_model_create_model.png)

You’ll be redirected to a page where you can choose the type of model you want to create 

Let’s choose the **Transfer Learn** model type. 

![](/img/community_2/custom_model_create_new_model.png)

## Step 6: Create a Model 

On the ensuing page, provide a unique ID and click the **Continue to Configure Model** button to create your model.

![](/img/community_2/custom_model_create_new_model-2.png)

## Step 7: Set Up the Model

Next, you need to set up the model for training by providing the required details. 

![Create model page](/img/community_2/custom_model_create_model_page.png)

- **Dataset** — Select a dataset to use to train the model. For this example, let's select the dataset we previously created — alongside its version. 
- **Base Embed Model** — You can select the base model version to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present in it. For this example, let's go with the default option.
- **Concepts** — Select the concepts that you want the model to predict. For this example, let's choose the `pants` and `shorts` concepts. 
- **Concepts Mutually Exclusive** — Let's turn the button on to indicate no overlap between any of the model concepts. 
- **Enrich Dataset** — If enabled and set to `Automatic`, this option enhances your model by incorporating supplemental data from pre-built datasets of negative embeddings, helping to improve accuracy. Alternatively, setting it to `Disabled` will exclude the use of negative embeddings, regardless of their availability.
For this example, we'll proceed with the default `Automatic` option.
- **Inference Settings (optional)** — Optionally, you can configure the provided inference settings for your model. 

After configuring the settings, click the **Train Model** button to begin training your custom model.

## Step 8: Use Your Custom Model

You'll be redirected to the created model's page. Once the visual classifier model is trained, which normally takes a few seconds, you can put it to work. 

For example, to use it for making a [prediction](https://docs.clarifai.com/portal-guide/ppredict/), click the blue (**+**) **Try your own images or videos** button. A small window will pop up that allows you to upload an input and see its prediction probabilities on the right side of the page. 

![Predict with custom model](/img/community_2/custom_model_create_model_page-2.png)

That's it!

