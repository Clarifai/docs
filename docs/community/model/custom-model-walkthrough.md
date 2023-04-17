---
description: Learn how to create your own custom model
sidebar_position: 2
---

# Custom Models

**Create your own custom model**
<hr />

You can create your own custom model on the Community platform and make predictions with it. 

To start with, log in to your account and click the **Create an App** button at the top-right section of the navigation bar. And on the small window that pops up, provide the information required to create a new application. 

![create an app](/img/community_2/custom_model_create_new_app.png)

Next, you need to upload data, such as images, to the app you've created. The input data, labeled with concepts, is what will be used for training your model. Training helps your model to “learn” from the annotated concepts on your inputs so that it can be able to recognize them. 

You do not need many images to get started. We recommend starting with 10 and adding more as needed.

![](/img/illustration-training.png)

To upload inputs, select the **Inputs** option on the collapsible left sidebar. Next, click the **Upload Inputs** button and upload the inputs you want to add to the app.

![upload inputs](/img/community_2/custom_model_upload_inputs.png)

The small window that pops up allows you to upload inputs. 

![upload inputs window](/img/community_2/custom_models_upload_inputs_window.png)

If you click the **Show Upload Settings** button, you'll expose a section that allows you to add the following items to your inputs:

![Show Upload Settings](/img/community_2/custom_model_show_upload_settings.png)

- **Datasets**—A dataset is a set of data input examples for actions like training and evaluation. You can select a previously created dataset or create a new one. For this example, you may not provide it. 
- **Concepts**—Adding concepts help in training your model. You can select a previously created concept or create a new one. For this example, create new concepts and label your image inputs with them.
- **Metadata**—You can also add inputs with custom metadata, which can be searched or filtered. Metadata can be any arbitrary JSON. For this example, you may not provide it. 

Click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your inputs. 

Next, after adding images that already contain the concepts you want your model to see, you can now proceed to create your own custom model.

Select the **App Models** option on the collapsible left sidebar. And on the ensuing page, click the **Create Model** button on the top-right corner of the page.

![Create app models](/img/community_2/custom_model_create_model.png)

Next, choose the type of model you want to create. 

![Create app models](/img/community_2/custom_model_create_new_model.png)

You can filter results by:

- **Input Type**—Several options are available, including embeddings, audio, image, text, concepts, regions, and frames. 
- **Output Type**—Several options are available, including concepts, embeddings, regions, image, text, clusters, colors, and audio.
- **Trainable**—You can choose "Trainable" \(machine learning\) or "Not-Trainable" \(fixed-function\) models.

For this example, let’s choose a **Transfer Learning Classifier**. 

On the ensuing page, provide the details required to create the custom model. For this example, let's provide the model id, select the concepts we created previously, and set the **Concepts mutually_exclusive** button to true. 

You can also fill the other fields if you want to. 

![Create model page](/img/community_2/custom_model_create_model_page.png)

After configuring the model, click the **Create Model** button at the bottom of the page.

You'll be redirected to the created model's page.

Finally, click the **Train Model** button on the upper right-hand corner of the page. 

![Create model page](/img/community_2/custom_model_created_model_page.png)

Once the model is trained, you can put it to work, such as by adding it to a workflow. 

That's it!

