---
description: Build a powerful and flexible application for classifying text passages.
sidebar_position: 3
---

# Text Classification

**Build a powerful and flexible application for classifying text passages**
<hr />

Text classification is a natural language processing (NLP) task that involves categorizing or assigning predefined labels or categories to a given text document. It is a fundamental problem in machine learning and NLP, where the goal is to automatically analyze and classify textual data based on its content.

Text models can be trained to understand the meaning of text passages. 

This walkthrough shows you how to create a custom text classification model that can help you understand the sentiment of customer reviews on a product—whether positive or negative. 

## Create an App

Let's start by creating a new application and selecting **Text-Moderation** as the default workflow.

![](/img/others/create_text_1.png)

## Navigate to the Inputs Manager Page

Head to your application's individual page. Then, select the **Inputs** option on the collapsible left sidebar.

You'll be redirected to the inputs manager page, where you can add inputs to your app. 

![](/img/others/nav-to-explorer_1.png)

## Add Your Inputs

To add inputs to your app, click the **Upload Inputs** button. The small window that pops up allows you to upload your inputs.

![](/img/others/text-upload-inputs.png)

You can use either of the following options to add text inputs to your app:

 - Upload from a `.csv` file
 - Add texts directly

### Option 1: Upload From a `.csv` File

You can upload your text directly from a `.csv` file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. 

[Click here](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv/) to learn how to upload your text data from a `.csv` file. 

### Option 2: Add Texts Directly

Select the **Text** option on the input uploader window. Then, use the input field to add texts directly to your app. 

![](/img/others/text-upload-inputs-1.png)

### Add a Dataset

A [dataset](https://docs.clarifai.com/portal-guide/datasets/) acts like a container that holds your text inputs. It plays a crucial role in creating and training your model.

To create a new dataset on the input uploader window, click the plus sign (**+**) next to the **Select or add datasets** search box. Then, type the new dataset name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new dataset** button to create the dataset.

![](/img/others/text-add-dataset.png)

Select the dataset you've just created, if you've not done that. 

### Add Custom Concepts

A concept is something that describes the content of your text input, similar to a "tag" or "keyword." The data in these concepts give the model something to "observe" about the keyword, and learn from.

To create a new custom concept on the input uploader window, click the plus sign (**+**) next to the **Select or add concepts** search box. Then, type the new concept name in the search box. For this example, let's create two concepts: "positive" and "negative."

The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept.

![](/img/others/text-add-concept.png)

Select the concept you've just created, if you've not done that. You can follow the same process to create other concepts.

### Click Upload Inputs Button

After adding text inputs, adding a dataset to contain the text inputs, and adding concepts that annotate the text inputs, click the **Upload inputs** button at the bottom of the input uploader window. 

Your inputs and their annotations will be added to your app. 

![](/img/others/text-upload-inputs-2.png)

## Navigate to Model Mode

Next, select the **Models** option on the collapsible left sidebar. You'll be redirected to the models listing page, where you can create a new model.

Click the **Create Model** button at the upper right section of the page. 

![](/img/others/text-model-mode.png)

## Select Model Type

Select the **Transfer Learning Classifier** model type. This model leverages the knowledge captured by a pre-trained model so that you can get started very quickly with minimal training data. It allows you to transfer the knowledge gained from solving one problem to help solve a different but related problem.

![](/img/others/select-model-type.png)

## Create a Model

On the ensuing page, provide the details for creating a new text classification model.

![](/img/others/text-create-model-2.png) 

- **Model Id**—Provide a unique ID for your model.
- **Dataset Id**—Select the dataset you'd created previously. 
- **Dataset version_id**—You may select a version for your dataset. You can [create a new dataset version](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#create-a-dataset-version) by selecting the **Datasets** option on the collapsible left sidebar and following the prompts.
- **Concepts**—Select the concepts you'd created previously.
- **Concepts mutually_exclusive**—Turn this on if there is no overlap between any of your concepts. For this example, we'll not turn it on. 
- **Enrich dataset**——If it's enabled (set to **Automatic**), it lets you use Clarifai's rich dataset of negative embeddings to improve your model's accuracy. For this example, we'll enable it. 
- **Inference settings**—Optionally, you may configure the inference settings to enhance the performance of your model. 
- **Train Model**—Click the button to create and train the model.

After creating the model, you'll be redirected to its overview page.

![](/img/others/text-model-overview.png) 

## Try Out Your New model

To try out your new model, select the **Inputs** option on the collapsible left sidebar. Then, click the **Upload Inputs** button and use the small input uploader window that pops up to add some new text inputs, just as we previously illustrated.

Next, on the inputs manager page, click the specific text input you want to get its predictions. 

![](/img/others/text-click-text-input.png) 

You'll be redirected to the viewer page for that text input.

Once you're on the input viewer page, set the page's mode to **Predict**. You can find the mode settings at the upper right corner of the page.

On the right sidebar, click the **Select a Model or Workflow** link.

![](/img/others/text-try-own-model-1.png) 

On the right sidebar that appears, click the **Select Model or Workflow** search box, and select the model you created from the drop-down list.

![](/img/others/text-try-own-model-2.png) 

After selecting the model, the custom concept predictions will be processed and populated on the right sidebar.

![](/img/others/text-try-own-model-3.png) 

That's it!