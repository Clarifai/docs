---
description: Learn how to use our advanced inference operations 
sidebar_position: 5
---

# Advanced Inference Options 

**Learn how to use our advanced inference operations**
<hr />

:::warning note

To find out which advanced inference parameters a model supports, you can review its description and notes on the Clarifai Community platform, or run the snippet shown [here](https://docs.clarifai.com/compute/models/inference/api#get-method-signature) to inspect the model’s signature.

:::

The advanced inference operations allow you to fine-tune how outputs are generated, giving you greater control to manipulate results according to their specific tasks and requirements.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [CLI](https://docs.clarifai.com/additional-resources/api-overview/cli), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeBP from "!!raw-loader!../../../code_snippets/python-sdk/inference/batch_predict.py";
import CodeBPTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/batchPredict.ts";

import CodeDiffBase from "!!raw-loader!../../../code_snippets/python-sdk/inference/diff_baseurl.py";
import CodeRoot from "!!raw-loader!../../../code_snippets/python-sdk/inference/root_ca.py";

import PythonByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_by_model_version_id.py";
import PythonMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_max_concepts.py";
import PythonMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_min_predict_value.py";
import PythonSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_select_concepts.py";

import JavaScriptByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_by_model_version_id.html";
import JavaScriptMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_max_concepts.html";
import JavaScriptMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_min_predict_value.html";
import JavaScriptSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_select_concepts.html";

import NodeJSByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_by_model_version_id.js";
import NodeJSMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_max_concepts.js";
import NodeJSMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_min_predict_value.js";
import NodeJSSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_select_concepts.js";

import JavaByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_by_model_version_id.java";
import JavaMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_max_concepts.java";
import JavaMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_min_predict_value.java";
import JavaSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_select_concepts.java";

import PHPByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_by_model_version_id.php";
import PHPMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_max_concepts.php";
import PHPMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_min_predict_value.php";
import PHPSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_select_concepts.php";

import CurlByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_by_model_version_id.sh";
import CurlMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_max_concepts.sh";
import CurlMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_min_predict_value.sh";
import CurlSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_select_concepts.sh";

import CodeOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_model_version_id.txt";



## Perform Batch Predictions

You can process multiple inputs in a single request, streamlining the prediction workflow and saving both time and resources.

:::info

The batch size should not exceed 128. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#upload-limits).

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeBP}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeBPTS}</CodeBlock>
</TabItem>
</Tabs>




## Customize Base_URL

You can obtain model predictions by customizing the `base_url`. This allows you to easily adapt your endpoint to different environments, providing a flexible and seamless way to access model predictions.

:::info

This feature is particularly useful for enterprises using on-premises deployments, allowing the `base_url` to be configured to point to their respective servers.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDiffBase}</CodeBlock>
</TabItem>
</Tabs>


## Add Root Certificate

A root certificate provides an additional layer of security when communicating through APIs. As a self-signed certificate that verifies the legitimacy of other certificates, it establishes a chain of trust — ensuring that you are connecting to authentic APIs and that your data remains encrypted.

You can add your own root certificates to further strengthen data security and protect user privacy.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeRoot}</CodeBlock>
</TabItem>
</Tabs>


## Prompt Types

A prompt is a piece of text or set of instructions that you provide to generative AI models, such as Large Language Models (LLMs),  to generate a specific response or action. 

Generative AI models are a type of artificial intelligence system that are designed to create new content, such as text, images, audio, or even videos, based on patterns learned from existing data.

There are several prompting techniques you can use to communicate with generative AI models. For example, zero-shot prompting leverages a model’s inherent language understanding capabilities to generate responses without any specific preparation or examples. 

You can learn about other prompting techniques [here](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter/). 

Here are some examples of prompts.

### Question Answering

```text
Prompt: 
Who was president of the United States in 1955?
```
### Grammar Correction

```text
Prompt: 
Correct this to standard English: She no went to the market.

Sample Response: 
She did not go to the market.
```

### Summarize

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

### Translation

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

## Types of Inference Parameters

When making predictions using the models on our platform, some of them offer the ability to specify various inference parameters to influence their output. 

These parameters control the behavior of the model during the prediction process, affecting aspects like creativity, coherence, and the diversity of the output. 

Let’s talk about them. 

### Max Tokens (or Max Length)

Max Tokens specifies the maximum number of tokens (words or characters) the model is allowed to generate in a single response. It limits the length of the output, preventing the model from generating overly long responses. As such, shorter token lengths will provide faster performance.

This inference parameter helps in controlling the verbosity of the output, especially in applications where concise responses are required.

Here is a usage example:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">inference_params = dict(max_tokens=100) 
Model(model_url).predict(inputs,inference_params=inference_params)</CodeBlock>
</TabItem>
</Tabs>

### Minimum Prediction Value 

The `min_value` specifies the minimum prediction confidence required to include a result in the output. For example if you want to see all concepts with a probability score of `.95` or higher, this parameter will allow you to accomplish that. 

Also note that if you don't specify the number of `max_concepts`, you will only see the top 20. If your result can contain more values you will have to increase the number of maximum concepts as well.

Here is a usage example:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">output_config = dict(min_value=0.6) 
Model(model_url).predict(inputs,output_config=output_config)</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMinPredictValue}</CodeBlock>
</TabItem>

</Tabs>

### Maximum Concepts

The `max_concepts` parameter specifies how many concepts and their associated probability scores the Predict endpoint should return. If not set, the endpoint defaults to returning the top 20 concepts.

You can currently set `max_concepts` to any value between 1 and 200.

If your use case requires more than 200 concepts, please reach out to our [support team](mailto:support@clarifai.com) for assistance.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">output_config = dict(max_concepts=3) 
Model(model_url).predict(inputs,output_config=output_config)</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMaxConcepts}</CodeBlock>
</TabItem>
</Tabs>

### Select Concepts

The `select_concepts` specifies the concepts to include in the prediction results. By putting this additional parameter on your predict calls, you can receive predict value\(s\) for **only** the concepts that you want to. You can specify particular concepts by either their id and/or their name. 

The concept names and ids are case sensitive; and so, these must be exact matches.

> **Note**: You can use the [`GetModelOutputInfo`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#get-model-output-info-by-id) endpoint to retrieve an entire list of concepts from a given model, and get their ids and names.

:::caution

If you submit a request with not an exact match of the concept id or name, you will receive an invalid model argument error. However, if one or more matches while one or more do not, the API will respond with a Mixed Success.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">output_config = dict(select_concepts=["concept_name"]) 
Model(model_url).predict(inputs,output_config=output_config)</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSelectConcepts}</CodeBlock>
</TabItem>
</Tabs>


### Temperature

Temperature is a decimal number (between 0 and 1) that controls the degree of randomness in the response.

A low temperature (e.g., 0.2) makes the model more deterministic, leading to a more conservative and predictable output. A high temperature (e.g., 0.8) increases the randomness, allowing for more creative and varied responses.

Adjusting temperature is useful when you want to balance between creative responses and focused, precise answers.

Here is a usage example:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">inference_params = dict(temperature=0.2) 
Model(model_url).predict(inputs,inference_params=inference_params)</CodeBlock>
</TabItem>
</Tabs>
           

### Top-p (Nucleus) 

Top-p sampling is an alternative to temperature sampling that controls output diversity by considering the smallest set of tokens whose cumulative probability is greater than or equal to a specified threshold p (e.g., 0.9).

Rather than restricting the model to a fixed number of top tokens, this method dynamically adjusts the selection based on token probabilities, ensuring that the most likely tokens are always included while maintaining flexibility in the number of tokens considered.

It’s useful when you want to dynamically control the diversity of the generated output without setting a fixed limit on the number of tokens.

### Top-k

Top-k sampling limits the model to only consider the top k most probable tokens when generating the next word, ignoring all others.

A low k (e.g., 10) reduces diversity by restricting the choice of tokens, leading to more focused outputs. A high k increases diversity by allowing a broader range of possible tokens, leading to more varied outputs.

It’s useful when you want to prevent the model from choosing rare, less likely words, but still allow for some diversity.

### Reasoning Effort 

The Reasoning Effort parameter controls how much internal reasoning the model performs before generating a response.

You can set it to:

- **Low** – Prioritizes faster responses and minimal token usage.

- **Medium** – Strikes a balance between response time and depth of reasoning.

- **High** – Emphasizes thorough reasoning, which may lead to slower but more detailed answers.

You can adjust this setting based on your needs — whether you value speed, detail, or a balance of both.

### Number of Beams

The Number of Beams inference parameter is integral to a method called beam search. Beam search is a search algorithm that keeps track of the top n (beam width) sequences at each step of generation, considering multiple possibilities before selecting the best one.

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


## Predict By Model Version ID

Every time you train a custom model, it creates a new model version. By specifying `version_id` in your predict call, you can continue to predict on a previous version, for consistent prediction results. Clarifai also updates its pre-built models on a regular basis.

If you are looking for consistent results from your predict calls, use `version_id`. If the model `version_id` is not specified, predict will default to the most current model.

Below is an example of how you would set a model version ID and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 


<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlByModelVersion}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample4}</CodeBlock>
</details>
