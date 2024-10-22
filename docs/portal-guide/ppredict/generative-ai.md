---
description: Learn how to make predictions using our generative AI models, including LLMs
pagination_next: null
sidebar_position: 2
---

# Generative AI

**Make predictions using our generative AI models, including LLMs**
<hr />

Generative AI models are a type of artificial intelligence system that are designed to create new content, such as text, images, audio, or even videos, based on patterns learned from existing data.

Unlike traditional AI models, which typically classify or predict data, generative models can produce novel and creative outputs that are similar to, but not exactly the same as, the data they were trained on.

Large Language Models (LLMs) are a specific type of generative AI models designed primarily for natural language processing (NLP) tasks. LLMs are able to understand and generate text based on the instructions they receive.

## Prompt

A prompt is a piece of text or set of instructions that you provide to an LLM to generate a specific response or action. The clarity and specificity of the provided input prompt will greatly determine the quality and relevance of the generated response. 

So, it's important to design and refine prompts to effectively interact with and generate desired responses. Prompt engineering involves crafting specific questions, statements, or input formats that guide the model to generate useful, relevant, and accurate predictions.

There are several prompting techniques you can use to communicate with an LLM. For example, zero-shot prompting leverages a model’s inherent language understanding capabilities to generate responses without any specific preparation or examples. 

You can learn about other prompting techniques [here](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter/). 

Here are some examples of prompts.

#### Question Answering

```text
Prompt: 
Who was president of the United States in 1955?
```
Here is how you can provide it to a model, such as the [Llama 3.1-8b-Instruct]( https://clarifai.com/meta/Llama-3/models/llama-3_1-8b-instruct) model. 

![](/img/community_2/generative-ai-1.png)

To get a response, click the **Generate** button.

![](/img/community_2/generative-ai-2.png)

After processing the prompt, the model will output the response. 

![](/img/community_2/generative-ai-3.png)

#### Grammar Correction

```text
Prompt: 
Correct this to standard English: She no went to the market.

Sample Response: 
She did not go to the market.
```

#### Summarize

```text
Prompt: 
Summarize this: Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a 
gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times
that of all the other planets in the Solar System combined. Jupiter is one of the 
brightest objects visible to the naked eye in the night sky, and has been known to
ancient civilizations since before recorded history. It is named after the Roman 
god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its 
reflected light to cast visible shadows,[20] and is on average the third-brightest 
natural object in the night sky after the Moon and Venus.

Sample Response: 
Jupiter is the fifth planet from the Sun and is very big and bright. It can be seen
with our eyes in the night sky and it has been known since ancient times. Its 
name comes from the Roman god Jupiter. It is usually the third brightest object in 
the night sky after the Moon and Venus.
```

#### Translation

```text
Prompt: 
Translate this into 1. French, 2. Spanish, and 3. Japanese: What rooms do you have available?`

Sample Response: 
Quels sont les chambres que vous avez disponibles?
2. ¿Qué habitaciones tienes disponibles?
3. どの部屋が利用可能ですか？
```

:::tip

[Click here](https://platform.openai.com/docs/examples) for more prompting examples.
 
::: 

## Inference Parameters

When making predictions using LLMs on our platform, some models offer the ability to specify various inference parameters to influence their output. These parameters control the behavior of the model during the generation process, affecting aspects like creativity, coherence, and the diversity of the generated text. 

Let’s talk about them. 

### Max Tokens (or Max Length)

Max Tokens specifies the maximum number of tokens (words or characters) the model is allowed to generate in a single response. It limits the length of the output, preventing the model from generating overly long responses. As such, shorter token lengths will provide faster performance.

This inference parameter helps in controlling the verbosity of the output, especially in applications where concise responses are required.

### Temperature

Temperature is a decimal number that controls the degree of randomness in the response. 

A low temperature (e.g., 0.2) makes the model more deterministic, leading to a more conservative and predictable output. A high temperature (e.g., 0.8) increases the randomness, allowing for more creative and varied responses.

Adjusting temperature is useful when you want to balance between creative responses and focused, precise answers.

### Top-p (Nucleus) 

Top-p sampling is an alternative to temperature sampling that controls output diversity by considering the smallest set of tokens whose cumulative probability is greater than or equal to a specified threshold p (e.g., 0.9).

Rather than restricting the model to a fixed number of top tokens, this method dynamically adjusts the selection based on token probabilities, ensuring that the most likely tokens are always included while maintaining flexibility in the number of tokens considered.

It’s useful when you want to dynamically control the diversity of the generated output without setting a fixed limit on the number of tokens.

### Top-k

Top-k sampling limits the model to only consider the top k most probable tokens when generating the next word, ignoring all others.

A low k (e.g., 10) reduces diversity by restricting the choice of tokens, leading to more focused outputs. A high k increases diversity by allowing a broader range of possible tokens, leading to more varied outputs.

It’s useful when you want to prevent the model from choosing rare, less likely words, but still allow for some diversity.

### Number of Beams

The number of beams inference parameter is integral to a method called beam search. Beam search is a search algorithm that keeps track of the top n (beam width) sequences at each step of generation, considering multiple possibilities before selecting the best one.

It helps produce more coherent and optimized outputs by exploring multiple potential sequences. This parameter is particularly useful in tasks where the quality and diversity of the entire sequence is crucial, such as translation or summarization.

### Do Sample

This parameter determines whether the model should sample from the probability distribution of the next token or select the token with the highest probability.

If set to true, the model samples from the probability distribution, introducing randomness and allowing for more creative and diverse outputs. If set to false, the model selects the token with the highest probability, leading to more deterministic and predictable responses.

Sampling is typically enabled (set to true) when you want the model to generate varied and creative text. When precision and consistency are more important, sampling may be disabled (set to false).

### Return Full Text

This parameter determines whether the entire generated text should be returned or just a portion of it. 

If set to true, the model returns the full text, including both the prompt (if provided) and the generated continuation. If set to false, the model returns only the newly generated text, excluding the prompt.

It’s useful when you need the complete context, including the prompt, in the output. This can be important for understanding the generated response in the context of the input.

### System Prompt

A system prompt is a special input prompt provided to guide the model's behavior throughout the conversation or task. It sets the tone, style, or context for the model’s responses.

It influences how the model generates responses by setting expectations or providing instructions that the model follows.

It’s often used in conversational AI to define the role the model should play (e.g., a helpful assistant, a friendly chatbot) or in specialized tasks where specific behavior or output style is desired. 

It helps steer the model's responses in a consistent and contextually appropriate direction.

### Prompt Template

A prompt template serves as a pre-configured piece of text used to instruct an LLM. It acts as a structured query or input that guides the model in generating the desired response. You can use a template to tailor your prompts for different use cases.

Many LLMs require prompts to follow a specific template format. To streamline this process, we provide the `prompt_template` inference parameter, which automatically applies the correct template format for the LLM. This means that you do not need to manually format your prompts when using an LLM through our UI or [SDK](https://docs.clarifai.com/sdk/Inference-from-AI-Models/Text-as-Input#text-generation-using-llm#set-inference-parameters). 

By default, the `prompt_template` is set to the LLM's standard template, allowing you to simply enter your prompts without worrying about formatting. The prompts will be automatically adjusted to fit the required template.

If you need more flexibility, you can customize the `prompt_template` parameter. When modifying this variable, make sure it includes the placeholder `{prompt}`, which will be replaced with the user's prompt input.

For example, the [Openchat-3.6-8b](https://clarifai.com/openchat/openchat/models/openchat-3_6-8b-20240522) model supports the following chat template format:

```text
GPT4 Correct User: {prompt}<|end_of_turn|>GPT4 Correct Assistant:
```

Let’s break down the meaning of the template:
-      `GPT4 Correct User`:  — This delimiter indicates the start of a user's input.
-       `{prompt}`: — This substring will be replaced by the actual input or question from the user. It must be included in the prompt template. It works just like the [prompter node](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter#zero-shot-prompting) in a workflow builder, which must contain the `{data.raw.text}` substring. When your text data is inputted at inference time, all occurrences of the `{prompt}` variable within the template will be replaced with the prompt text.
-        `<|end_of_turn|>`:— This delimiter indicates the end of a user's input.
-        `GPT4 Correct Assistant:` — This indicates the start of the assistant's (or the language model's) response, which should be a corrected or refined version of the user's input or an appropriate answer to the user's question.

You can also add the `<|start_of_turn|>` delimiter, which specifically indicates the start of a turn; in this case, a user’s input.

Here is an example:

```text
GPT4 Correct User: <|start_of_turn|> {prompt}<|end_of_turn|>GPT4 Correct Assistant:
```

Another example is the [Llama 3.1-8b-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3_1-8b-instruct) model, which supports the following chat template format:

```text
<|begin_of_text|><|start_header_id|>system<|end_header_id|>

{system_prompt}<|eot_id|><|start_header_id|>user<|end_header_id|>

{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>
```

The main purpose of this format is to clearly delineate the roles and contributions of different participants in the conversation: system, user, and assistant.

Let’s break down its meaning:

- `<|begin_of_text|>` — This delimiter marks the beginning of the text content.
- `<|start_header_id|>system<|end_header_id|>` — This indicates the beginning of a system-level instruction or context.
- `{system_prompt}` — This placeholder is for the actual system-level instruction or context.
- `<|eot_id|>` — This indicates the end of a text unit; in this case, the system prompt.
- `<|start_header_id|>user<|end_header_id|>` — This marks the beginning of a user's input.
-  `{prompt}` — As earlier described, this placeholder represents the actual prompt or query from the user.
- `<|eot_id|>` — This marks the end of a text unit; in this case, the user's input.
-  `<|start_header_id|>assistant<|end_header_id|>` —  This indicates the beginning of the assistant's response.
