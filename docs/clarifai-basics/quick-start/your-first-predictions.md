---
description: >-
  Get your first AI prediction in approximately 1 minute
sidebar_position: 1
---

# Your First AI Predictions (~1 min)

**Get your first AI prediction in approximately 1 minute**
<hr />

When we talk about artificial intelligence, we generally refer to computer systems that can make predictions. What is being predicted, you ask?

Predictions usually include at least two parts:

* Model output(s)
* Some kind of accuracy score (sometimes this part is hidden under the hood)

Why is this considered "intelligence"?

Your model offers ideas, and tells you which ones it is most confident about. This turns out to be a very useful way to do computing.

And due to the diligent work of our engineers and research scientists, Clarifai models can deliver predictions in the form of many different types of model outputs.

Let's start with the most common type of prediction: "concepts."

:::info

A [concept](https://docs.clarifai.com/clarifai-basics/glossary#concept) is something that describes an entity in the physical world, similar to a "tag" or "keyword." Concepts are also known as "classes" in the field of machine learning.

:::

## Step 1: Set up your account or login

[Click here](https://clarifai.com/signup) if you need to set up your account for the first time. 

Or [click here](https://clarifai.com/login) to log in.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify your email address

If you created a new account, check your email. We will send you a link that enables you to automatically verify your address.‌

![verify email](/img/verify_email.png)

If you click the link in your email, you'll be redirected to the portal and prompted to complete setting up your profile. 

![comple your profile](/img/complete_your_profile.png)

## Step 3: Click "my-first-application"

Go to your apps' listing page, where you'll find a default "my-first-application" already created. 

Click that application. 

![my first app](/img/click_my_first_app.png)

:::tip

You can also click the **Create** button at the upper-right section of the navigation bar to easily create a new application.

:::

## Step 4: Upload an image

You'll be redirected to the application's individual page. Select the **Inputs** option on the collapsible left sidebar. 

Next, click the **Upload inputs** button.

![data mode](/img/data_mode.png)

The small window that pops up allows you to upload your inputs — either by uploading them directly from your local device or by providing a publicly accessible URL. 

:::note

On the Clarifai portal, you can upload images, videos, text, or audio inputs.

:::

For this example, we'll provide an image of a dog accessible via the following URL: https://samples.clarifai.com/dog1.jpeg. 

To upload the image, click the **Upload inputs** button at the bottom of the pop-up window.

![browse files](/img/browse_files.png)

## Step 5: Take a look at your first prediction

:::warning general-image-recognition model

For this example, we'll predict using the [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model, which is available in the Clarifai Community. This general model can be used to identify various concepts in images or videos. 

:::

Once the image is uploaded, it will be displayed on the Input-Manager page. Click on that listed image.

![view explorer](/img/view-explorer.png)

You'll be redirected to the viewer page for that image, where you can take a look at your first prediction.

Once you're on the Input-Viewer page, set its mode to **Predict**. You can find the mode settings at the upper-right corner of the page. 

On the right sidebar, click the **Select a Model or Workflow** link.

![input viewer page](/img/select_model_or_workflow.png)

On the pop-up that appears, use the search box to choose a model you want to use to view predictions on your input. 

Click the **Explore Community Models / Workflows** button. 

![prediction sidebar](/img/prediction_sidebar.png)

Use the pop-up window to search for the `general-image-recognition` model, then select it to proceed.

![prediction sidebar](/img/prediction_sidebar-1.png)

After selecting the model, the predictions will be processed and populated on the right sidebar.

![view predictions](/img/view-predictions.png)

That's it!