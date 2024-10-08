---
description: Learn how to use transfer learning to create your own custom model
sidebar_position: 2
---

# Transfer Learn Custom Models

**Learn how to use transfer learning to create your own custom model**
<hr />

Transfer learning is a model training technique that utilizes the feature representations of a pre-trained model, which has been trained on vast amounts of data. This allows you to build new models more efficiently by reducing the need for extensive training from scratch and enabling faster learning with minimal data.

You can learn more about transfer learning [here](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning).

Let's demonstrate how you can create a custom visual classifier model using the transfer learning technique. 

### Step 1: Create an App

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note

When creating the application, go with the default Image/Video option as the primary input type.

:::

### Step 2: Add and Annotate Inputs

Next, you need to upload data, such as images, to the app you've created. The input data, labeled with concepts, is what will be used for training your model. Training helps your model to “learn” from the annotated concepts on your inputs so that it can be able to recognize them. 

You do not need many images to get started. We recommend starting with 10 and adding more as needed.

![](/img/illustration-training.png)

To upload inputs, select the **Inputs** option in the collapsible left sidebar. Next, click the **Upload inputs** button. 

![upload inputs](/img/community_2/custom_model_upload_inputs.png)

The small window that pops up allows you to upload your inputs — either by providing publicly accessible URLs or by uploading them directly from your local device.

![upload inputs window](/img/community_2/custom_models_upload_inputs_window.png)

For this illustration, let's select the **URL** tab and provide the following images of cars:

```text
https://samples.clarifai.com/black-car.jpg
https://samples.clarifai.com/car.jpeg
https://samples.clarifai.com/car.png
https://samples.clarifai.com/featured-models/imagen-car.png
https://samples.clarifai.com/featured-models/person-vehicle-porsche-tail-lights-red.jpg
https://samples.clarifai.com/license-plate/veh_0.jpg
https://samples.clarifai.com/license-plate/veh_1.jpg
https://samples.clarifai.com/license-plate/veh_2.jpg
https://samples.clarifai.com/license-plate/veh_3.jpg
https://samples.clarifai.com/featured-models/person-vehicle-japan-nightime-men.jpg
```

To label the inputs with the `car` concept, click the plus (**+**) sign next to the **Select or add concepts** search box. Then, type the new concept name in the search box. The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept. Once created, the concept will be listed underneath the search box. 

Similarly, click the plus (**+**) sign next to the **Select or add datasets** search box and create a dataset that will store the inputs. 

Click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your annotated inputs to the dataset. 

Next, go to the individual page of the dataset and create a version for it by clicking the **New version** button. This bookmarks the state of your data so that you can apply a specific version for training your custom model. 

![](/img/community_2/custom_model_dataset_version.png)

:::tip

- [Click here](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete) to learn more about labeling inputs.

- [Click here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/) to learn more about datasets. 

:::

### Step 3: Choose a Model Type

Once you've added images that contain the concept you want to train, you can now proceed to create your custom model.

To begin, select the **Models** option in the collapsible left sidebar. On the ensuing page, click the **Add Model** button in the upper-right corner.

In the pop-up window, choose the **Build a Custom Model** option, then click **Continue** to proceed.

![](/img/community_2/custom_model_create_model.png)

You’ll be redirected to a page where you can choose the type of model you want to create 

For this example, let’s choose the **Transfer Learn** model type. 

![](/img/community_2/custom_model_create_new_model.png)

### Step 4: Create a Model 

On the ensuing page, provide a unique ID and click the **Continue to Configure Model** button to create your model.

![](/img/community_2/custom_model_create_new_model-2.png)

### Step 5: Set Up the Model

Next, you need to set up the model for training by providing the required details. 

![Create model page](/img/community_2/custom_model_create_model_page.png)

- **Dataset** — Select a dataset to use to train the model. For this example, let's select the dataset we previously created that has the images of cars — alongside its version. 
- **Base Embed Model** — You can select the base model to be used for embeddings. For this example, let's go with the default option.
- **Concepts** — Select the concepts that you want the model to predict. For this example, let's choose the `car` concept, which we previously assigned as the label when uploading the training data.
- **Concepts Mutually Exclusive** — Let's go with the default option as we're only training on a single concept. 
- **Enrich Dataset** — If enabled and set to `Automatic`, this option enhances your model by incorporating supplemental data from pre-built datasets of negative embeddings, helping to improve accuracy. Alternatively, setting it to `Disabled` will exclude the use of negative embeddings, regardless of their availability.
For this example, we'll proceed with the default `Automatic` option.
- **Inference Settings (optional)** — Optionally, you can configure the provided inference settings for your model. 

After configuring the settings, click the **Train Model** button to begin training your custom model.

### Step 6: Use Your Custom Model

You'll be redirected to the created model's page. Once the visual classifier model is trained, which normally takes a few seconds, you can put it to work. 

For example, to use it for making a [prediction](https://docs.clarifai.com/portal-guide/ppredict/), click the blue **Try your own images or videos** button. A small window will pop up that allows you to upload an input and see its prediction probabilities on the right side of the page. 

That's it!

