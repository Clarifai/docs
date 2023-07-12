---
description: Train the entire graph for your custom model
sidebar_position: 5
---

# Deep Training

**Train the entire graph for your custom model**
<hr />

Clarifai offers a variety of pre-built models that are designed to help you create AI solutions quickly and efficiently.

Clarifai models are the recommended starting point for many users because they offer incredibly fast training times, especially when you customize them using the Context-Based Classifier model type for transfer learning.

But there are many cases where accuracy and the ability to carefully target solutions takes priority over speed and ease of use. Additionally, you may need a model to learn new features not recognized by existing Clarifai Models. 

For such cases, it is possible to "deep train" your custom models and integrate them directly within your workflows.

You might consider deep training if you have:

* **A custom tailored dataset**
* **Accurate labels**
* **Expertise and time to fine tune models**

:::info

Deep training is in early access preview. To request access, [contact us](https://www.clarifai.com/contact).

:::

## Template Types

You can take advantage of a variety of templates when building your deep trained models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way that your model learns.

### Visual Classifier

Classification templates let you classify what is in your images or videos.

### Visual Detector

Detection templates make it easy to build models that can identify objects within a region of your images or videos. Detection models return concepts and bounding boxes.

### Visual Embedder

Embedding models can be useful in their own right \(for applications like clustering and visual search\), or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.

## Hyperparameters

Deep training gives you the power to tune the hyperparameters that affect “how” your model learns. The model mode dynamically changes the available hyperparameters based on the template selected.

* **average\_horizontal\_flips**—Provides basic data augmentation for your dataset. If set to true, there is a 0.5 probability that current image and associated ground truth will flip horizontally.
* **base\_gradient\_multiplier**—This sets the learning rate of the pre-initialized base \(also sometimes called "backbone"\) model that generates embeddings. Learning rate controls how the weights of our network are adjusted with respect to the loss gradient. The lower the value, the slower the trip along the downward slope. A low learning rate can help ensure that local minima are not missed, but can take a long time to converge, especially if the model gets stuck on a plateau region.
* **batch\_size**—The number of images used to make updates to the model. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase batch size if the model is large and taking a long time to train. You also may want to increase the batch size if your total number of model concepts is larger than the batch size \(you may want to increase to around 2x the category count\).
* **detection\_score\_threshold**—Only bounding boxes with a detection score above this threshold will be returned.
* **image\_size**—The size of images used for training. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy.
* **init\_epochs**—The initial number of epochs before the first step/change in the **lrate**.
* **logreg**—Choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts \(i.e. P &gt; 0.5\) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" \(i.e. only one concept could be correctly assigned to a given input\). This will result in each prediction output representing a discrete probability distribution \(i.e. all predicted values sum to 1\).
* **lrate**—The learning rate is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function.
* **num\_epochs**—An epoch is defined as one-pass over the entire dataset. If you increase it, it will take longer to train but it could make the model more robust.
* **num\_items\_per\_epoch**—The number of training examples per "epoch". An epoch would be defined as one-pass over this amount of examples.
* **per\_128\_lrate**—Total change in **lrate** after 128 images processed. This is calculated as lrate = per\_128\_lrate \* \(batch\_size / 128\).
* **per\_item\_lrate**—The rate that model weights are changed per item.
* **step\_epochs**—The number of epochs between applications of the step/change in **lrate** scheduler.
* **test\_freq**—The number of epochs should you run before evaluation of the test set. Increased frequency can allow for more granular testing but will extend processing time.
* **use\_perclass\_regression**—Enables box coordinate local regression on a per-class basis. When set to True there will be `num_classes` sets of regressors for each anchor location, when set to False, there will be one coordinate regressor for each anchor location.

## Create your Deep Trained Model

Creating and working with deep trained models is very similar to working with Clarifai models.

Let's demonstrate how you can create a deep trained model. 

#### Create App and Upload Inputs

Get started by creating your app and uploading inputs.

:::info

In general, deep trained models need more data than the ones trained on top of Clarifai models. For most applications, you’ll need at least 1000 training inputs, but it could be much more than this depending on your specific use case.

:::

Click the **Create an App** button and provide the information required to create a new application.

![create an app](/img/community_2/custom_model_create_new_app.png)

To upload inputs into your app, select the **Inputs** option on the collapsible left sidebar. Next, click the **Upload Inputs** button and upload the inputs you want to add to the app.

![upload inputs](/img/community_2/custom_model_upload_inputs.png)

The small window that pops up allows you to upload inputs.

![upload inputs window](/img/community_2/custom_models_upload_inputs_window.png)

#### Create Concepts and Label Inputs

The process of creating concepts and labeling inputs is the same for deep trained models as for other Clarifai models.

Clicking the **Show Upload Settings** button on the small window that pops up when uploading inputs exposes a section that lets you create concepts and label inputs.

![Show Upload Settings](/img/community_2/custom_model_show_upload_settings.png)

The section allows you to add the following to your inputs:

- **Datasets**—A dataset is a set of data input examples for actions like training and evaluation. You can select a previously created dataset or create a new one. For this example, you may not provide it.
- **Concepts**—Adding concepts help in training your model. You can select a previously created concept or create a new one. For this example, create new concepts and label your image inputs with them.
- **Metadata**—You can also add inputs with custom metadata, which can be searched or filtered. Metadata can be any arbitrary JSON. For this example, you may not provide it.

Click the **Upload inputs** button at the button of the pop-up window to finalize uploading your inputs.

#### Model Mode

Next, select the **App Models** option on the collapsible left sidebar to enter the model mode.

#### Create the Custom Model you Need

On the ensuing page, click the **Create Model** button on the top-right corner of the page.

![create app models](/img/community_2/custom_model_create_model.png)

Next, on the page for choosing the type of model you want to create, select a `Visual Classifier`, `Visual Embedder`, or `Visual Detector`.

For this example, let’s choose a `Visual Classifier`, which would classify images into set of concepts.

![choose visual classifier](/img/community_2/choose_visual_classifier.png)

#### Configure Your Model

On the ensuing page, provide the details required to create the deep trained model.

For this example, let's provide the model id, select the concepts we created previously, and select a template name. You can also fill the other fields if you want to.

![configure model](/img/community_2/deep_training_create_model.png)

The pre-configured model template is essential for training with on your data. When you choose your deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired.

![template configuration](/img/community_2/template_configuration.png)

After configuring the model, click the **Create Model** button at the bottom of the page.

#### Train Your Model

Next, train your model by clicking the **Train Model** button on the upper right-hand corner of the created model's page.

![train model](/img/community_2/deep_training_train_model.png)

Deep training can take much longer time than custom training a model. Many hours are required to deep train models with large numbers of inputs and complex taxonomies. You can check the progress in the model details view and monitor the training as it continues.

![model training progress](/img/community_2/model_training_progress.png)

Once you've created and trained your new model, you can put it to work, such as by adding it to a workflow and using it in your app.

#### Job Cancellation

You can cancel a deep training job at any time by deleting the model version that you are training. 

![delete model version](/img/community_2/delete_model_version.png)

Deep training is billed at an hourly rate and for cancelled jobs, you will be charged for the time that you've used to train your model. You can learn more about deep training pricing [here](https://www.clarifai.com/pricing).

