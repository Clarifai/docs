---
description: Learn about our text-to-text model type and understand its fine-tuning process
sidebar_position: 9
---

# Text-To-Text 

**Learn about our text-to-text model type and understand its fine-tuning process**
<hr />

**Input**: Text

**Output**: Text

Text-to-text is a general-purpose type of deep fine-tuned model that operates on a text-completion principle, specifically utilizing next-token prediction.
In the field of natural language processing (NLP), a language model is a computational model that is trained on a large dataset of text and learns to predict the probability distribution of the next word or token given the preceding context.

In the case of a text-to-text model, the approach is a bit more flexible than traditional language models. Instead of being restricted to generating text in a sequential manner, where the output builds upon the previous tokens, text-to-text models treat both the input and output as sequences of tokens. This means that the model can be used for various tasks beyond just predicting the next token.

The general idea behind text-to-text models is to frame a wide range of NLP tasks, including both generation and comprehension tasks, as a text-to-text problem. This approach provides a unified framework for solving various NLP tasks. The model is trained to take an input sequence (the "text") and generate an output sequence (also "text") that corresponds to the desired task.

:::info

The text-to-text model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

The text-to-text model type can be used in a wide range of applications, including:

- **Text completion**: The model is given a prompt, such as a sentence or a paragraph, and it generates the next sentence. This can be used to create creative text formats, such as poems, code, scripts, musical pieces, emails, letters, etc.
- **Text classification**: The model can assign a label or category to a given piece of text. This can be used to organize, structure, and categorize text data. For example, it can categorize customer reviews, identify spam emails, or detect hate speech.
- **Translation**: The model can convert text from one language to another. 
- **Pre-encoded knowledge QA**: The model can be used as a question-answering system where it answers questions from a knowledge base that has been pre-encoded with information. 
- **Close-book QA**: The model can be used as a question-answering system where it is provided with a set of questions and a corresponding set of passages or documents that it should use as reference material to generate answers. In contrast, open-book QA allows the model to access external sources, such as the Internet, to find answers beyond the provided passages.
- **Other tasks**: The model can also be used for text summarization, extraction of specific texts from a given passage, removal of  personally identifying information from documents, and more. 

You may choose a text-to-text model type in cases where:

- You need a model that can effectively learn patterns and structures from training data, and use this learned knowledge to generate text that is coherent and contextually relevant based on the input it receives. 
- You need a text-to-text model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## How to Fine-Tune Text-to-Text Models

Fine-tuning allows you to adapt text-to-text models to specific tasks or domains, making them more suitable for particular applications. By training on task-specific data, you can improve model performance on those tasks.

With fine-tuning, you can take advantage of [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) and utilize the knowledge gained from a pre-trained text model to facilitate the learning process of a new model for a related problem. 

You can follow the following steps to fine-tune a text-to-text model. 

:::info

We currently only support fine-tuning text-to-text models using the [GPT-Neo LoRA template](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates#gpt-neo-lora). 

:::

### 1. Prepare your data

If you want to upload bulk text data from a file to the Clarifai platform, you need to convert the data into a format Clarifai accepts. 

You can download a CSV file template [here]( https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv#csv-templates), and follow the prescribed format to prepare your text data, alongside the concepts you want to fine-tune for.

### 2. Create an app

After preparing your dataset, the next step is to [create an application]( https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal).

:::tip

When creating an application, choose the **Text/Document** option as the primary input type. The base workflow will be automatically selected for you.

:::

Then, select the **Inputs** option on the collapsible left sidebar, and use the inputs uploader pop-up window to [upload](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#add-inputs) the text data you prepared to a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) within your application.  

![model types](/img/others/fine-tune-1.png)

### 3. Choose a model 

Next, choose the **Models** option on the collapsible left sidebar. Click the **Add Model** button on the upper-right corner of the page. 

On the window that pops up, select the **Build a Custom Model** option and click the **Continue** button. 

![model types](/img/others/fine-tune-2.png)

You’ll be redirected to a page where you can choose the type of model you want to fine-tune.

Select the **Text to Text** option. 

![model types](/img/others/fine-tune-3.png)

### 4. Create the model

The ensuing page allows you to create a text-to-text model. 

![model types](/img/others/fine-tune-4.png)

- **Model Id**—Provide an ID for your model.
- **Dataset**—Select the dataset you want to use for fine-tuning the model.
- **Version**—Select the version of your dataset.
- **Invalid data_tolerance_percent**—Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error.
- **Template**—Select the pre-configured model template you want to use to train on your data. You can choose a template for either the 125 million parameters version or the 2.7 billion parameters version of the GPT-Neo model. For this example, let’s choose the former. You have the option to configure the training settings, but we won't configure them—we’ll proceed with the default settings. 

Finally, click the **Train** button. 

After the model has been trained, you can start using it to make text-to-text [predictions](https://docs.clarifai.com/portal-guide/ppredict). 

![model types](/img/others/fine-tune-5.png)

You can also evaluate the performance of the model. To do so, under the **ROC** column, click the **Calculate** button, which will initiate the evaluation process. 

[Click here](https://docs.clarifai.com/portal-guide/evaluate/) to learn more on how to evaluate a model’s performance. 

:::tip

You can further explore the step-by-step tutorial on fine-tuning the GPT-Neo LoRA template for text classification tasks [here](https://www.clarifai.com/blog/fine-tuning-gpt-neo-for-text-classification).

:::





