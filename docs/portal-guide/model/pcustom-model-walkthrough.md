---
description: Use a "Context based classifier" to quickly customize an existing model.
sidebar_position: 3
---

# Custom Models

**Use a "Context based classifier" to quickly customize an existing model**
<hr />

To set up a new model, you will need to head over to the [Applications page](https://portal.clarifai.com/) through your account. Start by creating your new application.

![](/img/create_an_application.jpg)

Click "View in Explorer", or click the "eye" icon in the lefthand sidebar.

![](/img/view_in_explorer.jpg)

Add your inputs. Just click "browse your files" or paste image URLs in the space provided.

![](/img/Add_inputs2.jpg)

Click on an image. You can create new concepts and label your images in the right hand sidebar.

![](/img/create_concepts_and_label.jpg)

Navigate to Model Mode and select your model. Click on the "four squares" icon on the lefthand sidebar.

![](/img/model_gallery.jpg)

Click "Create Custom Model" to choose a model template. You can filter your results by:

* **Model Type** You can choose "Trainable" \(machine learning\), or "Non-Trainable" \(fixed-function\) models.
* **Input** Inputs currently accept Embeddings, Concepts, Image, Image or Video, Region Images, or Region Concepts.
* **Output** Outputs currently return Clusters, Color, Concepts, Embeddings, Region Embeddings, Region Concepts, Region Images, or Region Text.

![](/img/create_custom_model.jpg)

For this example we choose a context-based classifier that can use a pre-trained Clarifai Model. From here we name the model, and add concepts that we have created. The available parameters vary based on the type of model that you choose. When you have configured the model the way you like it, click the "Create Model" button at the bottom of the page.

![](/img/create_context_based_classifier.jpg)

Finally, click the blue "Train Model" button in the upper righthand corner of the screen. Once it is trained you can put it to work by [adding it to your workflows](https://docs.clarifai.com/portal-guide/workflows).

![](/img/train_model.jpg)

