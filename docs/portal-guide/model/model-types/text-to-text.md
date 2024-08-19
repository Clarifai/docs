---
description: Learn about our text-to-text model type and understand its fine-tuning process
sidebar_position: 9
keywords: [text-to-text models, text generation models, natural language processing, NLP text generation, machine learning text generation,
AI text generation, text synthesis, text-to-text conversion, deep learning text generation, custom text-to-text models, pre-trained text-to-text models, text transformation AI]
---

# Text Generation

**Learn about our text-to-text model type and understand its fine-tuning process**
<hr />

**Input**: Text

**Output**: Text

Text generation involves generating or converting text based on the provided text input. Large language models (LLMs) are usually used to produce the next text that follows the instructions of the user. 

It is a general-purpose type of deep fine-tuning that operates on a text-completion principle, specifically utilizing next-token prediction. In the field of natural language processing (NLP), a language model is a computational model that is trained on a large dataset of text and learns to predict the probability distribution of the next word or token given the preceding context.

In the case of a text-to-text model, the approach is a bit more flexible than traditional language models. Instead of being restricted to generating text in a sequential manner, where the output builds upon the previous tokens, text-to-text models treat both the input and output as sequences of tokens. This means that the model can be used for various tasks beyond just predicting the next token.

The general idea behind text-to-text models is to frame a wide range of NLP tasks, including both generation and comprehension tasks, as a text-to-text problem. This approach provides a unified framework for solving various NLP tasks. The model is trained to take an input sequence (the "text") and generate an output sequence (also "text") that corresponds to the desired task.

:::info

The text-to-text model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

You may choose a text-to-text model type in cases where:

- You need a generative model that can effectively learn patterns and structures from training data, and use this learned knowledge to generate text that is coherent and contextually relevant based on the input it receives. 
- You need a text-to-text model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Training Data

Fine-tuning a text-to-text model requires a dataset with examples in a specific format that includes both input and target sequences. Typically, when organizing training data examples, it’s recommended to present each instance on a separate line. To structure the data clearly, use the "###" separator as a consistent delimiter, demarcating distinct sections within each example. 

These sections typically include the instructions, human-provided input, and the model-generated output (assistant's response). This standardized approach ensures clarity and facilitates easy parsing and processing during the training phase.

Here are some examples of training data for a text classification task:

```text
### Instruction: What is the sentiment of this tweet? Please choose an answer from `{negative/neutral/positive}` ### Human: Net sales of the Paper segment decreased to EUR 221.6 mn in the second quarter of 2009 from EUR 241.1 mn in the second quarter of 2008, while operating profit excluding non-recurring items rose to EUR 8.0 mn from EUR 7.6 mn . ### Assistant: negative.
```

```text
### Instruction: What is the sentiment of this tweet? Please choose an answer from `{negative/neutral/positive}` ### Human: Stora Enso said DeLight was suitable for a wide range of applications including food , cosmetics , home decoration and leisure products . ### Assistant: neutral.
```

```text
### Instruction: What is the sentiment of this tweet? Please choose an answer from `{negative/neutral/positive}` ### Human: Earnings per share were higher at 0.48 against 0.37 a year before and ahead of market consensus of 0.40 eur . ### Assistant: positive.
```
As you can see above, each example data is presented on an individual line. Also, the "###" separator is employed as a consistent marker to signify the beginning and end of different sections within each training example. The sections typically include:

1. **Instruction**: This part serves as a prompt or guidance for the model. It instructs the model on the specific task it should perform. In this case, the instruction is to determine the sentiment of a given tweet, and the model is expected to choose an answer from a predefined set of sentiments: `{negative/neutral/positive}`.

2. **Human**: This section contains the input query or context that the model should analyze. 

3. **Assistant**: The model-generated response to the given input. 

The idea here is to create a dataset where the model learns to generate responses based on the context provided in the "Human" section, adhering to the task defined in the "Instruction." The above dataset is typically used for training a model to perform sentiment analysis on similar types of input data.

This format is structured and labeled, making it suitable for supervised learning tasks where the model learns from examples with known correct answers. The model is trained to generate responses that align with the expected output for a given input context.

:::tip

We recommend starting with more than 50 well-crafted examples for fine-tuning a text generation model. Nonetheless, the right number depends on your exact use case.

:::

### CSV template

To help you get started, you can download `.csv` template for fine-tuning a generative AI model for text classification tasks [here](/templates/ClarifaiTextClassificationGeneratorUploadTemplate.csv). 

Note that the template comprises two columns: 

- `input.data.text.raw`—This column houses the example data, with each row having its own instance.
- `input.data.concepts[*].id`—This empty column is included to fulfill the prerequisites for [uploading a CSV file](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv/#csv-templates) to the Clarifai platform.


## Use Cases

The text-to-text model type can be used for a wide range of applications. _Note that we have included sample training data for most of the use cases below, offering practical examples to facilitate your instruction-fine-tuning process._

### Text completion

The model is given a prompt, such as a sentence or a paragraph, and it generates the next sentence. This generative action can be used to create creative text formats, such as poems, code, scripts, musical pieces, emails, letters, etc.

```text
### Instruction: Below is an instruction that describes a task. Write a response that appropriately completes the request. ### Human: What is the capital of Vietnam? ### Assistant: The capital of Vietnam is Hanoi. 
```

### Text classification

The model can assign a label or category to a given piece of text. This can be used to organize, structure, and categorize text data. For example, it can categorize customer reviews, identify spam emails, or detect hate speech.

### Text summarization

The model can condense a longer piece of text into a shorter version while retaining its key information and main ideas. 

```text
Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request. ### Instruction: Summarize the given passage. ### Input: A recent study showed that global climate change is one of the most important challenges facing the world today. The consequences of global warming include rising sea levels, extreme weather events and biodiversity loss. Climate change is caused by human activities such as burning fossil fuels, and if unchecked will have long-term and devastating impacts on the planet. ### Response: A recent study revealed that global climate change is one of the world’s most pressing issues. In addition to rising sea levels, extreme weather events and biodiversity loss, it is caused largely by human activities like burning fossil fuels. If left unchecked, climate change will have far-reaching and devastating consequences.
```
### Translation

The model can convert text from one language to another. 

```text
Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request. ### Instruction: Translate the following phrase into French. ### Input: I miss you ### Response: Je te manque.
```

### Pre-encoded knowledge QA

The model can be used as a question-answering system where it answers questions from a knowledge base that has been pre-encoded with information.

```text
Below is an instruction that describes a task. Write a response that appropriately completes the request. ### Instruction: How did Julius Caesar die? ### Response: Julius Caesar was assassinated by a group of up to 60 conspirators, led by Gaius Cassius Longinus and Marcus Junius Brutus, in the Senate House on the Ides of March (15 March) of 44 BC.
```

### Close-book QA

The model can be used as a question-answering system where it is provided with a set of questions and a corresponding set of passages or documents that it should use as reference material to generate answers. In contrast, open-book QA allows the model to access external sources, such as the Internet, to find answers beyond the provided passages.

### Other tasks

The model can also be used for extraction of specific texts from a given passage, removal of  personally identifying information from documents, and more. 

## How to Fine-Tune Text Generation Models

Fine-tuning allows you to adapt foundational text-to-text models to specific tasks or domains, making them more suitable for particular applications. Foundation models, also referred to as pre-trained or base models, are massive models that have been trained on extensive amounts of data. You can use them as a starting point for text generation tasks. 

By training on task-specific data, you can improve model performance on those tasks. Fine-tuning lets you take advantage of [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) and utilize the knowledge gained from a pre-trained text model to facilitate the learning process of a new model for a related problem. 

You can follow these steps to fine-tune a text-to-text model for generative or conversion tasks. 

### 1. Prepare your training data

You can go through the previous [Training Data](#training-data) section to learn how to prepare your data for fine-tuning a foundational generative model.


### 2. Create an app

After preparing your dataset, the next step is to [create an application]( https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal).

:::tip

When creating an application, choose the **Text/Document** option as the primary input type. The base workflow will be automatically selected for you.

:::

Then, select the **Inputs** option on the collapsible left sidebar, and use the inputs uploader pop-up window to [upload](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#add-inputs) the text data you prepared to a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) within your application.  

![upload text data](/img/others/fine-tune-1.png)

### 3. Choose a model 

Next, choose the **Models** option on the collapsible left sidebar. Click the **Add Model** button on the upper-right corner of the page. 

On the window that pops up, select the **Build a Custom Model** option and click the **Continue** button. 

![model types](/img/others/fine-tune-2.png)

You’ll be redirected to a page where you can choose the type of model you want to fine-tune.

Select the **Text Generator** option. 

![model types](/img/others/fine-tune-3.png)

### 4. Create and train the model

The ensuing page allows you to create and train a text-to-text model for generation or conversion purposes. 

![model types](/img/others/fine-tune-4.png)

- **Model Id**—Provide an ID for your model.
- **Dataset**—Select the dataset you want to use for fine-tuning the model. Also, select the version of your dataset.
- **Invalid data_tolerance_percent**—Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error.
- **Template**—Select a pre-configured model template you want to use to train on your data. You can select any of the following templates:

     - Llama2 7/13B or Mistral models with GPTQ-Lora, featuring enhanced support for quantized/mixed-precision training techniques.
     - GPT-Neo model, either the 125 million parameters version or the 2.7 billion parameters version.

:::warning text Fine-Tuning Templates

[Click here](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates/) to learn more about the text fine-tuning templates and their associated hyperparameters.

:::

- **Training settings**—Optionally, you may configure the training and inference settings to enhance the performance of your model. Otherwise, you may use the provided default settings. These are some of the settings you may customize: 
   - **Model config**—provide a dictionary of key-value pairs that define the pre-trained model to be used as a base. 
   - **Quantization config**—provide a dictionary of key-value pairs that define how to fine-tune or adjust the behavior of quantization during the training or inference process. 
   - **Peft config**—provide a dictionary of key-value pairs that define how to fine-tune a pre-trained model on a downstream task using a parameter-efficient fine-tuning (PEFT) method.
   - **Tokenizer config**—provide a dictionary of key-value pairs that define the configuration of a pre-trained tokenizer. 
   - **Trainer config**—provide a dictionary of key-value pairs that define the configuration of the Transformers `Trainer` class.

Finally, click the **Train** button. 

### 5. Generate texts

After the model has been trained, you can start using it to make generative text-to-text predictions. 

![model types](/img/others/fine-tune-5.png)

:::info

[Click here](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter/) to learn more about the different prompt techniques you can use to instruct your text-to-text model. 

:::
