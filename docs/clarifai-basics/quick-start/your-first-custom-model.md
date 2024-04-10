---
description: >-
  Get up-and-running in less than 5 minutes with the world's most powerful AI
  platform
sidebar_position: 3
---

# Your First Custom Model (~5 min)

**Get up and running in less than 5 minutes with your first custom model**
<hr />

Let's see how you can easily create custom models on the Clarifai portal. 

:::caution objective

For this example, we'll create a simple classification model that differentiates between dogs and cats. 

:::

## Step 1: Set up Your Account or Login

[Click here](https://clarifai.com/signup) if you need to set up your account for the first time. 

Or [click here](https://clarifai.com/login) to log in.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify Your Email Address

If you created a new account, check your email inbox. We will send you a link that enables you to automatically verify your address.‌

![verify email](/img/verify_email.png)

## Step 3: Click "my-first-application"

Go to your apps' listing page, where you'll find a default "my-first-application" already created.

If you click on the application, you'll be redirected to its individual page, where you can upload inputs.

![my first app](/img/click_my_first_app.png)

:::tip

You can also click the **Create** button at the upper-right section of the navigation bar to easily create a new application.

:::

## Step 4: Upload Training Data

:::warning training

In machine learning, training refers to teaching a model to “learn” from the annotated concepts on the provided inputs. [Concepts](https://docs.clarifai.com/portal-guide/concepts/)—also known as "classes"—are the tags or keywords that are used to annotate (or label) an input to indicate that the input has that entity.

Training data consists of input samples and their corresponding output labels or target values. By exposing the model to a diverse range of training examples, it can learn to make predictions or decisions on new, unseen data.

:::

Select the **Inputs** option on the collapsible left sidebar to upload training data on your app.

Next, click the **Upload inputs** button.

![data mode](/img/data_mode.png)

The small window that pops up allows you to upload your inputs — either by uploading them directly from your local device or by providing publicly accessible URLs. 

Let's start by uploading images of dogs and annotating them with the "dog" concept. 

For this illustration, let's select the **URL** tab and provide the following images of dogs:

```text
https://samples.clarifai.com/dog1.jpeg
https://samples.clarifai.com/dog2.jpeg
https://samples.clarifai.com/dog3.jpeg
```

![browse files](/img/browse_files_custom_model.png)

To label the inputs, click the plus (**+**) sign  next to the **Select or add concepts** search box. Then, type the new concept name in the search box.

The new name you typed will appear underneath the search box. Click the **Add new concept** button to create the concept. Once created, the concept will be listed underneath the search box.

To upload the images you've annotated with the "dog" concept, click the **Upload inputs** button at the bottom of the pop-up window

Similarly, let's upload the following images of cats and annotate them with the "cat" concept.

```text
https://samples.clarifai.com/cat1.jpeg
https://samples.clarifai.com/cat2.jpeg
https://samples.clarifai.com/cat3.jpeg
```

![browse files](/img/browse_files_custom_model_1.png) 

Lastly, click the **Upload inputs** button at the bottom of the pop-up window to upload the images you've annotated with the "cat" concept.

You can find the uploaded images on the Inputs-Manager page. 

![uploaded images](/img/uploaded_images_1.png) 

## Step 5: Create Your Custom Model

After uploading images that already contain the concepts you want your model to see, you can now proceed to create your own custom model.

Select the **Models** option on the collapsible left sidebar. And on the ensuing Models-Manager page, click the **Add Model** button at the upper-right corner of the page.

And on the window that pops up, select the **Build a Custom Model** option and click the **Continue** button.

![models manager page](/img/create_custom_model_1.png)

Next, choose the [type of model](https://docs.clarifai.com/portal-guide/model/model-types) you want to create. For this example, let’s choose the **Transfer Learn** model type.

:::tip

Essentially, transfer learning leverages the knowledge gained from a pre-trained model to facilitate the learning process of a new model for a related problem. This lets you train new models in seconds, not minutes or hours. [Click here](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) to learn more about it. 

:::

![create new model](/img/create_custom_model_2.png)

On the ensuing page, provide a unique, memorable ID for your model. 

Click the **Continue to Configure Model** button to create your model. 

![create model id](/img/create_custom_model_3.png)

## Step 6: Train Your Custom Model

Next, set up the details required to train your model. 

![train model](/img/create_custom_model_4.png)

#### Dataset

You can select a dataset to use to train the model. Since we don't have a dataset for this example, we'll use the default dataset automatically generated with all the compatible labeled inputs in the app. 

You can read more about datasets [here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete). 

#### Base Embed Model

Select the base embed model to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present. 

For this example, let's go with the default option. 

#### Concepts

Select the concepts that you want the model to predict. 

For this example, let's choose the concepts of "dog" and "cat," which we previously assigned as labels when we uploaded the training data. 

#### Concepts Mutually Exclusive

Let's turn the button on to indicate no overlap between any of the model concepts.

#### Enrich Dataset

If it's enabled (set to `Automatic`), it lets you enrich the model with supplemental data from pre-built datasets of negative embeddings, which improves the model's accuracy.

Otherwise, setting it to `Disabled` lets you not use the negative embeddings, whether they are available or not.

For this example, let's go with the default option. 

#### Inference Settings (optional)

Optionally, you can configure the following inference settings for your model:

- **Max Concepts** — The maximum number of concepts to return.
- **Min Value** — The minimum value of the prediction confidence to filter. 

For this example, we'll go with the default option.  

#### Train Model

After configuring the settings, click the **Train Model** button to begin training your model.

## Step 7: Use Your Custom Model

You'll be redirected to the created model's page.

![use custom model](/img/create_custom_model_5.png)

Once the model is trained and ready, you can put it to work, such as by making [predictions](https://docs.clarifai.com/portal-guide/ppredict) with it. 

