---
description: Learn about our text fine-tuning templates
sidebar_position: 5
keywords: [text templates, deep learning text templates, AI text processing, text classification templates, deep training text models, machine learning text processing, custom text models, pre-trained text templates, natural language processing templates, NLP model templates ]
---

# Text Fine-Tuning Templates

**Learn about our text fine-tuning templates**
<hr />

Clarifai's text fine-tuning templates empower you to leverage pre-trained language models and refine them through additional training on specific tasks or datasets, customizing them for precise use cases.

Each template comes with its own hyperparameters, which you can tune to influence “how” your model learns. With hyperparameters, you can customize and adapt a template to suit your specific tasks and achieve better performance.

## Llama 2

[Llama 2](https://arxiv.org/abs/2307.09288) is a collection of pre-trained and fine-tuned large language models (LLMs) created and publicly released by Meta AI. It is available in three model sizes: 7, 13, and 70 billion parameters. Llama 2-Chat is a fine-tuned version of Llama 2, specifically optimized for dialogue-based scenarios. 

[Llama 2-Chat](https://clarifai.com/meta/Llama-2/models/llama2-70b-chat) is designed to produce human-like responses to user inputs, which makes it appropriate for powering conversational and chatbot-like AI applications. The model can learn the structures and intricate patterns of natural language conversations and produce coherent and contextually relevant outputs. 

Llama 2-Chat is an efficient, versatile AI assistant that can tackle complicated reasoning tasks across diverse domains. You can use it for a wide range of use cases, such as: 

- Text generation 
- Text classification

At Clarifai, we converted Llama 2-Chat into the Hugging Face Transformers format to enhance its compatibility with our platform and pipelines, ease its consumption, and optimize its deployment in various environments. 

Further, to get the best of what’s possible with the Llama 2-Chat model, we quantized it using the [GPTQ](https://arxiv.org/pdf/2210.17323.pdf) quantization method. 

In addition, we employed the LoRA (Low-Rank Adaptation) method to achieve efficient and fast fine-tuning of the pre-trained Llama 2-Chat model.

:::warning Quantization

Quantization is a model compression method that involves converting the weights and activations within an LLM from a high-precision data representation to a lower-precision one – without sacrificing significant accuracy. 

This means transitioning from a data type capable of holding more information, such as a 32-bit floating-point number (FP32), to one with less capacity, such as an 8-bit or 4-bit integer (INT8 or INT4).

GPTQ offers a highly efficient and accurate method for quantizing LLMs, addressing the computational and storage challenges associated with their deployment, and unlocking significant performance improvements in inference speed. 

:::

:::warning LoRA

Full parameter fine-tuning traditionally involves adjusting all parameters across all layers of a pre-trained model. While it typically yields optimal performance, it is resource-intensive and time-consuming, demanding significant GPU resources and time.

On the other hand, Parameter Efficient Fine-Tuning (PEFT) offers a way to fine-tune models with minimal resources and costs. One notable PEFT method is [Low-Rank Adaptation (LoRA)](https://arxiv.org/abs/2106.09685).

LoRA is a game-changer for fine-tuning LLMs on resource-constrained devices or environments. It achieves this by exploiting inherent low-rank structures within the model's parameters. These structures capture essential patterns and relationships in the data, allowing LoRA to focus on these during fine-tuning, rather than modifying the entire parameter space.

This leads to efficient fine-tuning for text-to-text tasks, like text classification. LoRA significantly reduces the number of trainable parameters in models, enabling faster and more resource-friendly adaptation to specific downstream tasks.

:::

## GPT-Neo

[GPT-Neo](https://www.eleuther.ai/artifacts/gpt-neo), introduced by EleutherAI, is a variant of the Generative Pre-trained Transformer (GPT) model, which is part of the broader family of transformer-based language models. The transformer-based architecture allows models to process and understand complex relationships within text data.

The GPT-Neo model comes in 125M, 1.3B, and 2.7B parameter variants. This allows users to choose the model size that best fits their specific use case and computational constraints.

GPT-Neo is notable for being an open-source, community-driven project aimed at creating large-scale, high-quality language models that are accessible to researchers and developers. It is designed to offer similar capabilities to other large language models like GPT-3, but without the need for extensive computational resources or costly infrastructure.

At Clarifai, we converted GPT-Neo into the Hugging Face Transformers format to improve its compatibility with our platform and pipelines, simplify its usage, and enhance its deployment across different environments. 

Furthermore, we utilized the LoRA technique to efficiently and swiftly fine-tune the pre-trained GPT-Neo model.

## Mistral 7B

[Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/), introduced by Mistral AI, is an LLM that has gathered attention due to its efficiency and strong performance. 

It is a 7.3 billion-parameter model, making it smaller than other models like GPT-3 (175 billion) but still powerful for various tasks. Despite its size, Mistral 7B has shown impressive performance on various benchmarks, even surpassing some larger models in specific areas.

You can use it for a wide range of use cases, such as: 

- Text generation 
- Text classification
- Text summarization
- Code completion

One of Mistral 7B's strengths is its ability to achieve good results with fewer parameters compared to some other LLMs. This translates to lower resource requirements when using the model. 

To become efficient, the model utilizes techniques like Grouped-query Attention and Sliding Window Attention. This allows it to achieve faster processing and reduce memory usage during inference.

It is presented as a foundational model that can easily be fine-tuned for specific tasks, making it adaptable to various scenarios. For example, the Mistral 7B Instruct model is a strong showcase of how the base Mistral 7B model can be effectively fine-tuned for impressive results.  This version of the model is fine-tuned for question-answering and conversation tasks.

For Clarifai users, we've made Mistral 7B Instruct even more accessible by converting it into the Hugging Face Transformers format. This ensures seamless compatibility with our platform and pipelines, simplifies its use, and allows for optimized deployment across diverse environments.

To unlock Mistral 7B Instruct's full potential, we combined two powerful techniques: quantization with GPTQ and fine-tuning with LoRA. Quantization reduces the model size for faster inference, while LoRA enables efficient and rapid fine-tuning for specific tasks — as explained earlier.

## Hugging Face Advanced Config 

The Hugging Face Advanced Config is a flexible template designed to empower users to tailor fine-tuning configurations for language models according to their precise requirements. It allows users to define a wide range of advanced parameters and settings that govern the fine-tuning process.

With the template, you can specify various advanced parameters and settings that control the fine-tuning process. These advanced parameters enable you to optimize model performance, adapt fine-tuning processes to specific datasets, and fine-tune models for various downstream tasks more effectively.

It serves as a powerful tool for customizing and refining the fine-tuning process, ultimately enhancing the performance and versatility of language models across diverse applications and use cases.

## Template Hyperparameters

The text templates support a wide range of hyperparameters, which empower you to fine-tune language models effectively for diverse text-to-text use cases.

### Model config​

It is a dictionary of key-value pairs that outlines the aspects of the model configuration, its initialization process, and the approach to training, including the handling of pre-trained weights and the potential for resuming training from a specific checkpoint.

Here is an example:

```
{
    "pretrained_model_name": "TheBloke/Llama-2-7b-Chat-GPTQ",
    "problem_type": "multi_label_classification",
    "torch_dtype": "torch.float32"
}
```

- The `pretrained_model_name` key specifies the name of the pre-trained model to be loaded from the Hugging Face Hub and used as the base.  In this case, it's the `Llama-2-7b-Chat-GPTQ` model from the `TheBloke` repository. 
- The `problem_type` key indicates the type of problem the model is designed to solve. In this case, it's `multi_label_classification`, suggesting the model is trained to classify input data into multiple labels or categories.
- The `torch_dtype` key sets the numerical data type to be used within PyTorch, influencing precision and memory usage. It is set as `torch.float32`, indicating the model operates on 32-bit floating-point numbers.

The keys and values of the model config are passed to the `transformers.AutoModelForCausalLM.from_pretrained()` function from the `transformers` library, which initializes the model architecture and loads pre-trained weights based on the provided configuration.

Also, a `resume_from_model` parameter can be specified in the `train_info` section of the `PostModelVersions` request. This parameter overrides the `pretrained_model_name_or_path`, indicating that during training, the model will resume from a specific point indicated by `resume_from_model`, disregarding the pre-trained model's path or name.

### Quantization Config

It is a dictionary of key-value pairs for quantizing a transformer model by specifying the number of bits used for representation and indicating whether to utilize the `ExLLaMA` optimization technique.

Here is an example:

```
{
    "bits": 4,
    "use_exllama": false
}
```
- The `bits` key specifies the target precision for weight quantization. In this case, the weights will be compressed to 4 bits each. This significantly reduces model size and potentially improves inference speed, but may introduce some accuracy loss.
- The `use_exllama` key controls whether to utilize the `ExLLaMA` optimization technique. This optimization technique could potentially improve the quantization process. Setting it to `false` means that the technique is not used.

###  Peft config​

It is a dictionary of key-value pairs that define how to fine-tune a pre-trained model on a downstream task using the PEFT method.

Here is an example:

```
{
    "inference_mode": false,
    "lora_alpha": 16,
    "lora_dropout": 0.1,
    "peft_type": "LORA",
    "r": 16,
    "task_type": "CAUSAL_LM"
}
```
- The ` inference_mode` key specifies whether the model is being configured for inference mode. Setting it to `false` suggests that the model is not being optimized specifically for inference, but rather for training or fine-tuning.
- The `lora_alpha` key specifies the dimensionality of the latent vectors used for adaptation, potentially impacting training efficiency and model performance. A higher value might lead to better fine-tuning but also require more memory.
- The `lora_dropout` key specifies the dropout rate applied during training. Dropout is a regularization technique that helps prevent overfitting by randomly dropping connections between neurons. This value sets the probability of dropping out a latent vector element during training.
- The `peft_type` key specifies the type of PEFT technique to be used. In this case, it's set to `LoRA`.
- The `r` key specifies the rank of the low-rank adaptation matrices. It influences the number of parameters to be used and potentially impacts training efficiency and performance.
- The `task_type` key specifies the type of task the model is being fine-tuned for. In this case, it's set to `CAUSAL_LM`, implying the model is being fine-tuned for a causal language modeling task, where the model predicts the next word in a sequence given previous words.

###  Tokenizer config​

It is a dictionary of key-value pairs that define the configuration of a pre-trained tokenizer. A tokenizer is a crucial component in natural language processing tasks, responsible for breaking down text input into individual tokens or subwords. 

Configuration involves specifying parameters that govern how the tokenizer behaves, such as tokenization rules and maximum sequence length.

Here is an example:

```
{
    "model_max_length": 512
}
```

- The `model_max_length` key sets the maximum length (in tokens) that the tokenizer will consider for sequences.  In this case, it's set to 512, meaning that input sequences longer than 512 tokens will be truncated or split to fit within this limit.

The keys and values of the tokenizer config are passed to the `transformers.AutoTokenizer.from_pretrained()` function to instantiate a pre-trained tokenizer.

If the tokenizer config is not specified, the function will use the model name from the model config to instantiate the appropriate pre-trained tokenizer. For example, if the model config specifies the model name as `EleutherAI/gpt-neo-2.7B`, the function will instantiate the `GPTNeoTokenizer` class.

###  Trainer config​

It is a dictionary of key-value pairs that define how the training process will be executed, including settings related to optimization, training duration, and hardware utilization. 

Here is an example:

```
{
    "auto_find_batch_size": true,
    "fp16": true,
    "learning_rate": 0.0002,
    "num_train_epochs": 1
}
```

- The `auto_find_batch_size` key enables automatic batch size selection during training. The trainer will attempt to find an optimal batch size based on available GPU resources and model characteristics. 
- The ` fp16` key enables mixed-precision training using 16-bit floating-point numbers (FP16). Mixed precision is a technique that can speed up training, and reduce memory usage, with compatible hardware (e.g., GPUs with Tensor Cores).  However, it might introduce slight numerical instability. 
- The `learning_rate` key specifies the learning rate used by the optimizer during training. This value controls how much the model's weights are updated during each training step. In this case, it's set to 0.0002, indicating a relatively low learning rate.
- The `num_train_epochs` key specifies the number of training epochs; that is, the number of times the entire training dataset will be traversed during training. In this case, it's set to 1, implying that the model will be trained for a single epoch.

The keys and values of the trainer config are passed to the `transformers.TrainingArguments()` function to instantiate a `TrainingArguments` object. The object defines the hyperparameters and other settings that are used by the `Trainer` class to train a pre-trained model.
