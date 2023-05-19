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

In this example, we'll create a simple classification model that differentiates between dogs and cats. 

## Step 1: Set up your account or log in

Just [click here](https://clarifai.com/signup) if you need to set up your account for the first time. 

Or [click here](https://clarifai.com/login) to log in.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify your email address

If you created a new account, check your email. We will send you a link that enables you to automatically verify your address.‌

![verify email](/img/verify_email.png)

## Step 3: Click "my-first-application"

Go to your apps listing page, where you'll find a default "my-first-application" already created.

If you click on the application, you'll be redirected to its individual page, where you can upload inputs.

![my first app](/img/click_my_first_app.png)

:::tip

You can also click the **Create an App** button at the upper-right section of the navigation bar to create another application.

:::

## Step 4: Upload training data

:::note

In machine learning, training refers to teaching a model to “learn” from the annotated concepts on the provided inputs. [Concepts](https://docs.clarifai.com/portal-guide/concepts/)—also known as "classes"—are the tags or keywords that are used to annotate (or label) an input to indicate that the input has that entity.

Training data consists of input samples and their corresponding output labels or target values. By exposing the model to a diverse range of training examples, it can learn to make predictions or decisions on new, unseen data.

:::

Select the **Inputs** option on the collapsible left sidebar to upload training data on your app.

Next, click the **Upload inputs** button.

![data mode](/img/data_mode.png)

The small window that pops up allows you to upload your inputs—either by uploading them directly from your local device or by providing a publicly accessible URL. 

Let's start by uploading images of dogs and annotating them with the "dog" concept. 

To label your inputs, click the plus (**+**) sign  next to the **Select concepts** search box. Then, type the new concept name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept.

![browse files](/img/browse_files_custom_model.png)

Click the **Upload inputs** button at the bottom of the pop-up window to complete uploading the images you've annotated with the "dog" concept.

Similarly, upload images of cats and annotate them with the "cat" concept.

![browse files](/img/browse_files_custom_model_1.png) 

Lastly, click the **Upload inputs** button at the bottom of the pop-up window to complete uploading the images you've annotated with the "cat" concept.

You can find the uploaded images on the inputs manager page. 

![uploaded images](/img/uploaded_images_1.png) 

## Step 5: Create and train your custom model

After uploading images that already contain the concepts you want your model to see, you can now proceed to create your own custom model.

Select the **Models** option on the collapsible left sidebar. And on the ensuing models manager page, click the **Create Model** button at the upper-right corner of the page.

![models manager page](/img/create_custom_model_1.png)

Next, choose the [type of model](https://docs.clarifai.com/portal-guide/model/model-types) you want to create. For this example, let’s choose a **Transfer Learning Classifier**.

![create new model](/img/create_custom_model_2.png)

On the ensuing page, provide the details required to create the custom model. 

Let's talk about the fields to fill in the form.

#### Model ID

Provide a unique, memorable ID for your model.

![create model id](/img/create_custom_model_3.png)

#### Dataset ID

You can select a dataset to use for training the model. Since we don't have a dataset for this example, a new dataset will be automatically generated with all the inputs in the app. 

You can read more about datasets [here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete). 

![dataset id](/img/create_custom_model_4.png)

#### Concepts

Select the concepts that you want the model to predict. Remember that we'd already labeled the inputs with "dog" and "cat" concepts when we uploaded the training data.

![select concepts](/img/create_custom_model_5.png)

#### Concepts mutually_exclusive

Let's turn the button on to indicate that there is no overlap between any of the model concepts.

![concepts mutually_exclusive ](/img/create_custom_model_6.png)

#### Enrich dataset

Setting this to **Automatic** enriches the training data with supplemental data from a pre-built dataset of negative embeddings, which improves the predictions' accuracy.

![Enrich dataset](/img/create_custom_model_7.png)

#### Inference settings (optional)

Optionally, you can configure the inference settings for your model. For this example, we'll go with the default inference settings. 

![inference settings](/img/create_custom_model_8.png)

#### Train model

Finally, click the **Train Model** button to create and train your model.

![train model](/img/create_custom_model_9.png)

You'll be redirected to the created model's page.

![created model page](/img/create_custom_model_10.png)

Once the model is trained and ready, you can put it to work, such as by making [predictions](https://docs.clarifai.com/portal-guide/ppredict) with it. 

