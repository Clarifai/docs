---
description: Learn how to use transfer learning to create custom text classifier models
sidebar_position: 2.1
---

# Text Classifiers By Transfer Learning

**Learn how to use transfer learning to create custom text classifier models**
<hr />

Text classification is a natural language processing (NLP) task that involves categorizing or assigning predefined labels or categories to a given text document. It is a fundamental problem in machine learning and NLP, where the goal is to automatically analyze and classify textual data based on its content.

With transfer learning, you can train a text model to understand the meaning of text passages. Transfer learning allows you to use pre-trained models, which have already learned linguistic patterns and structures from vast amounts of data. This reduces the need for extensive labeled datasets and speeds up training.

You can learn more about transfer learning [here](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/).

Let's demonstrate how you can create a custom text classifier model using the transfer learning technique.

:::info objective

We intend to create a model that identifies whether an email message is a spam or not a spam. 

:::

## Step 1: Create an App

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note

When creating the application, choose the Text/Document option as the primary input type.

:::

## Step 2: Create a Dataset

[Click here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/#create-a-new-dataset) to learn how to create a dataset that will store the text inputs. 

## Step 3: Add and Annotate Inputs

Next, you'll need to upload data to the app you've created. This input data, labeled with specific concepts, will be used to train your model. 

A concept is something that describes the content of your text input, similar to a "tag" or "keyword." The data in these concepts give the model something to "observe" about the keyword, and learn from.

For transfer learning, you can start with a small dataset. We recommend beginning with just 10 text inputs and gradually adding more as needed. 

In this example, we'll use 5 examples of spam messages and 5 examples of non-spam messages sourced from [this dataset](https://www.kaggle.com/datasets/datatattle/email-classification-nlp). You can download the dataset and follow along with this documentation.

To upload inputs, select the **Inputs** option in the collapsible left sidebar. Next, click the **Upload inputs** button.

![](/img/others/nav-to-explorer_1.png)

The small window that pops up allows you to upload your inputs.

You can use either of the following options to add text inputs to your app:

 - Upload from a `.csv` file
 - Add texts directly

### Option 1: Upload From a `.csv` File

You can upload your text directly from a `.csv` file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. 

[Click here](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv/) to learn how to upload your text data from a `.csv` file. 

### Option 2: Add Texts Directly

Select the **Text** option in the input uploader window. Then, use the input field to add each of the text inputs directly to your app. 

For this illustration, let's use the second option. 

![](/img/others/text-upload-inputs-1.png)

- In the **Select or add datasets** search box, choose the dataset you previously created for storing your uploaded inputs.

- To label the inputs with the `non-spam` concept, click the plus (**+**) icon next to the **Select or add concepts** search box. Then, type the concept name in the search box. The new name will appear below the search box — click **Add new concept** to create it. The newly created concept will now be listed below the search box.

- To complete the process, click **Upload inputs** at the bottom of the pop-up window to upload your annotated input to the selected dataset. 

- Similarly, upload the examples of spam messages to the previously created dataset and label them with the `spam` concept.

![](/img/others/text-upload-inputs-2-2.png)

:::note

If you're adding text inputs directly, you'll need to repeat the process for each example message: select the dataset to which you want to add the input, choose the relevant concept, and then click the upload button.

:::

:::tip

[Click here](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete) to learn more about labeling inputs.

:::

## Step 4: Update Dataset

Next, navigate to your dataset's individual page and create a new version by clicking the **New version** button. This action bookmarks the current state of your dataset, allowing you to apply a specific version when training your custom text model.

![](/img/others/text-add-dataset.png)

## Step 5: Choose a Model Type

Once you've uploaded the example text messages containing the concepts you want to train for, you're ready to create your custom model.

Begin by selecting the **Models** option from the collapsible left sidebar. On the following page, click the **Add Model** button in the upper-right corner.

In the pop-up window, select **Build a Custom Model** and click **Continue** to proceed.

![](/img/others/text-model-mode.png)

You'll then be redirected to a page where you can choose the model type. In the **Text** section, select the **Transfer Learn** model type.

![](/img/others/select-model-type.png)

## Step 6: Create a Model

On the ensuing page, provide a unique ID and click the **Continue to Configure Model** button to create your model.

![](/img/others/text-create-model-2.png) 

## Step 7: Set Up the Model

Next, provide the details for training your text classification model.

![](/img/others/custom-transfer-text-model-1.png) 

- **Dataset selection** — Choose the dataset you want to use for training. For this example, let's select the dataset we previously created, along with its specific version.
- **Base embedding model** — You can pick a base model to generate embeddings. Let's use the default option.
- **Define concepts** — Specify the concepts you want the model to classify. Here, let's use `spam` and `non-spam` as the two concepts.
- **Set concepts as mutually exclusive** — Enable this option to indicate that there is no overlap between the defined concepts.
- **Enrich dataset** — If set to `Automatic`, this feature will enhance the model by including additional data from pre-built datasets with negative embeddings, improving accuracy. If set to `Disabled`, it will exclude these embeddings. Let's use the default `Automatic` setting for this example.
- **Configure inference settings (optional)** — Adjust inference settings as needed for your model. This step is optional.

After configuring the settings, click on **Train Model** to start the training process. Training typically takes a few seconds.

## Step 8: Use Your Custom Model

You'll be redirected to the created model's page. Once the text classifier model is trained, you can put it to work, such as for making a [prediction](https://docs.clarifai.com/portal-guide/ppredict/).

To test it:

- Click the blue **(+)** button labeled "Try your own text."
- A window will appear where you can input a text sample.
- The model will display prediction probabilities, showing how it classifies the text input.


![](/img/others/custom-transfer-text-model-2.png) 

That's it!
