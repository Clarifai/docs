---
description: >-
  Get up-and-running in less than 5 minutes with the world's most powerful AI
  platform
sidebar_position: 3
---

# Your First Custom Model (~5 min)

**Get up and running in less than 5 minutes with your first custom model**
<hr />

Let's see how you can create your own custom models and make predictions easily. 

In this example, we'll create a simple model that differentiates between a dog and a cat. 

## Step 1: Set up your account or log in

Just [click here](https://clarifai.com/signup) if you need to set up your account for the first time. 

Or [click here](https://clarifai.com/login) to log in.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify your email address

If you created a new account, check your email. We will send you a link that enables you to automatically verify your address.‌

![verify email](/img/verify_email.png)

## Step 3: Click "my-first-application"

Go to your apps listing page, where you'll find a default "my-first-application" already created.

If you click on the application, you'll be redirected to its individual page, where you can upload inputs to it.

![my first app](/img/click_my_first_app.png)

:::tip

You can also click the **Create an App** button at the upper-right section of the navigation bar to create another application.

:::

## Step 4: Upload training data

In machine learning, training refers to the process of teaching a model to “learn” from the annotated concepts on the provided inputs. Concepts—also known as "classes"—are the tags or keywords that are used to label an input to indicate that the input has that entity.

By exposing the model to a diverse range of training examples, it can learn to make predictions or decisions on new, unseen data.



You'll be redirected to the application's individual page. Select the **Inputs** option on the collapsible left sidebar.

Next, click the **Upload inputs** button.

![data mode](/img/data_mode.png)

In this example, we are using the "General" model which comes pre-loaded in "my-first-application". The General model is designed to work with images and videos. 

Click "Browse Files" and upload one or more of your own images.‌

![browse files](/img/browse_files.png)

## Step 5: Create custom concepts

Click the "Create a Concept" button on the lefthand side of the screen.

![create-a-concept](/img/create-a-concept.png)

Enter the name of a person in your images. You  can repeat this part of the process multiple times to add multiple names.

![create-name](/img/create-name.png)

Use visual search to sort your images based on the person that you would like to recognize.

![search-by-face](/img/search-by-face.png)

Select images of the person that you would like your app to recognize.

![bsearch-and-select](/img/search-and-select.png)

## Step 6: Create and train your custom model
Click on the model mode icon on the lefthand sidebar.

![enter-model-mode](/img/enter-model-mode.png)

Click the "Create Custom Model" button on the upper righthand part of the screen.

![click-create-custom-model](/img/click-create-custom-model.png)

Select "Context-Based Classifier"

![select-context-classifier](/img/select-context-classifier.png)

Give your model a display name. Click "Select all concepts" and then click "Create Model". You can leave the default settings for this example.

![name-and-concepts](/img/name-and-concepts.png)

Click "Train Model" on the upper righthand corner of the screen. A popup will notify you when your model has successfully been trained.

![train-model](/img/train-model.png)

Click "Evaluate" and then "View".

![evaluate-and-view](/img/evaluate-and-view.png)

Take a look at the evaluation metrics of your new model! 

You can now use the model to predict all of the concepts in your application (in this case, the concepts are people's names). 

![eval-summary](/img/eval-summary.png)

That's it!