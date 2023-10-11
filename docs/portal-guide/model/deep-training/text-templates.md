---
description: Learn about our text fine-tuning templates
sidebar_position: 5
---

# Text Fine-Tuning Templates

**Learn about our text fine-tuning templates**
<hr />

Clarifai's text fine-tuning templates empower you to leverage pre-trained language models and refine them through additional training on specific tasks or datasets, customizing them for precise use cases. 

Each template comes with its own hyperparameters, which you can tune to influence “how” your model learns. With hyperparameters, you can customize and adapt a template to suit your specific tasks and achieve better performance.

## GPT-Neo LoRA

The GPT-Neo LoRA template is a pre-defined configuration of parameters that can be used to fine-tune the GPT-Neo language model using a technique called Low-Rank Adaptation (LoRA).

[LoRA](https://arxiv.org/abs/2106.09685) is a specialized technique that allows for efficient and effective fine-tuning of large language models (LLMs), even when working with devices or environments that have limited computational resources.

The LoRA optimization approach streamlines the fine-tuning process for language models. It does so by identifying and leveraging low-rank structures in the model's parameter space. These low-rank structures represent patterns and relationships within the data that can be exploited during fine-tuning.

With LoRA, you can fine-tune the GPT-Neo large language model for text classification tasks, all while maximizing resource efficiency. LoRA can reduce the number of trainable parameters in the model, which makes it possible to fine-tune it on downstream tasks more efficiently.

[The GPT-Neo](https://www.eleuther.ai/artifacts/gpt-neo) large language model, developed by EleutherAI, was trained as an autoregressive language model. This means that its core functionality is taking a string of text and predicting the next token. It is an attempt to produce GPT-3-like language models and comes in 125M, 1.3B, and 2.7B parameter variants.

The GPT-Neo LoRA template supports the following hyperparameters:

### Model config

It is a dictionary of key-value pairs that define which pre-trained model can be used as a base. 

Here is an example:

```json
{
    "pretrained_model_name": "EleutherAI/gpt-neo-2.7B"
}
```
The `pretrained_model_name` key specifies the name of the pre-trained model that you want to instantiate. In this example, the name of the pre-trained model is `EleutherAI/gpt-neo-2.7B`—the 2.7B parameter variant of the GPT-Neo model.

The keys and values of the model config are passed to the `transformers.AutoModelForSequenceClassification.from_pretrained()` function to instantiate the pre-trained model for sequence classification. 

The function will automatically select the correct model class based on the name of the pre-trained model. In this example, the function will select the `GPTNeoForSequenceClassification` model class.

Once the pre-trained model has been instantiated, you can use it to classify text sequences.

### **Peft config**

It is a dictionary of key-value pairs that define how to fine-tune a pre-trained model on a downstream task using a parameter-efficient fine-tuning (PEFT) method. 

PEFT methods allow for efficient and effective fine-tuning of LLMs, even on devices with limited resources. LoRA is a specific PEFT method that uses low-rank matrices to represent the parameters of a pre-trained model. 

Here is an example:

```json
{
    "peft_type": "LORA"
}
```
The `peft_type` key specifies the type of PEFT method to use. The keys and values of Peft config are passed to the `peft.get_peft_model()` function to instantiate a PEFT model. 

The function will automatically select the correct PEFT model class based on the value of the `peft_type` key. In this example, the function will select the `LoraModel` class.

Once the model has been instantiated, you can use it to fine-tune the base model on a downstream task using the LoRA method.

### Tokenizer config

It is a dictionary of key-value pairs that define the configuration of a pre-trained tokenizer. The pre-trained tokenizer is responsible for breaking the input text into tokens, which are then used by the pre-trained model to make predictions. 

The keys and values of the tokenizer config are passed to the `transformers.AutoTokenizer.from_pretrained()` function to instantiate a pre-trained tokenizer.

If the tokenizer config is not specified, the function will use the model name from the model config to instantiate the appropriate pre-trained tokenizer. For example, if the model config specifies the model name as `EleutherAI/gpt-neo-2.7B`, the function will instantiate the `GPTNeoTokenizer` class.

### Trainer config

It is a dictionary of key-value pairs that define the configuration of the Transformers `Trainer` class. It defines the training process for a pre-trained model. 

Here is an example:

```json
{
    "num_train_epochs": 1,
    "per_device_train_batch_size": 2
}
```
The `num_train_epochs` key specifies the number of epochs to train the model for. The `per_device_train_batch_size` key specifies the batch size for each training device. The batch size is the number of training examples that are processed by the model in a single training step. 

The keys and values of the trainer config are passed to the `transformers.TrainingArguments()` function to instantiate a `TrainingArguments` object. The object defines the hyperparameters and other settings that are used by the `Trainer` class to train a pre-trained model.



