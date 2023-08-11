---
description: Learn about our text-to-text model type
sidebar_position: 9
---

# Text-to-Text 

**Learn about our text text-to-text model type**
<hr />

**Input**: Text

**Output**: Text

Text-to-text is a general-purpose type of deep fine-tuned model that operates on a text-completion principle, specifically utilizing next-token prediction.
In the field of natural language processing (NLP), a language model is a computational model that is trained on a large dataset of text and learns to predict the probability distribution of the next word or token given the preceding context.

In the case of a text-to-text model, the approach is a bit more flexible than traditional language models. Instead of being restricted to generating text in a sequential manner, where the output builds upon the previous tokens, text-to-text models treat both the input and output as sequences of tokens. This means that the model can be used for various tasks beyond just predicting the next token.

The general idea behind text-to-text models is to frame a wide range of NLP tasks, including both generation and comprehension tasks, as a text-to-text problem. This approach provides a unified framework for solving various NLP tasks. The model is trained to take an input sequence (the "text") and generate an output sequence (also "text") that corresponds to the desired task.

:::info

The text-to-text model type also comes with various templates that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

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

## Example use case

A text-to-text model can be used for language translation, which involves converting text from one language to another while maintaining the meaning and context. The model is given a text in one language, and it generates the text in another language. This can be used to translate between any two languages that the model has been trained on.
