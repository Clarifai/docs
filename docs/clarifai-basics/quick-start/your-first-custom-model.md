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

## Step 1: Set up your account or login
Just [click here](https://portal.clarifai.com/signup) if you need to set up your account for the first time. Or [click here](https://portal.clarifai.com/login) to login.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify your email address
Check your email. We will send you a link that enables you to automatically verify your email.‌

![verify email](/img/verify_email.png)

## Step 3: Click "my-first-application"

![my first app](/img/click_my_first_app.png)

## Step 4: Upload an image
In the Clarifai Portal, you can upload images, videos, and text in "Data Mode". Click "Add Inputs", or visit Data Mode by clicking the icon on the lefthand side of the screen.‌

![data mode](/img/data_mode.png)

In this example, we are using the "General" model which comes pre-loaded in "my-first-application". The General model is designed to work with images and videos. 

Click "Browse Files" and upload one or more of your own images.‌

![browse files](/img/browse_files.png)

You will be prompted to Add or Assign Concepts. Let's skip this step for now.

![skip add labels](/img/skip_add_labels.png)

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