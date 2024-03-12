---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeBP from "!!raw-loader!../../../code_snippets/python-sdk/inference/batch_predict.py";
import CodeDiffBase from "!!raw-loader!../../../code_snippets/python-sdk/inference/diff_baseurl.py";
import CodeOutputTextEmbedder from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/text_embedder.txt";



import CodeOutputBP from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/batch_predict.txt";


# Advanced Inference Options

**Learn how to perform advance inference operations using  Clarifai Python SDK**
<hr />

The inference API contains certain features that provides more flexibility while running predictions on inputs. This can help the end users to manipulate the outputs required for their tasks.


## Batch Predict

Efficiently process multiple inputs in a single request by leveraging the Predict API's batch prediction feature. This allows you to streamline the prediction process, saving time and resources. Simply submit a batch of inputs to the model, and receive comprehensive predictions in return.

:::info
The batch size should not exceed 128.
:::imp

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeBP}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputBP}</CodeBlock>
</details>


## Different Base_URL

Use the flexibility of the Predict API to obtain model predictions by tailoring the base_url. Customize your endpoint to seamlessly integrate with different environments, ensuring a versatile and adaptable approach to accessing model predictions.

:::info
This feature is for Enteprise that use on-prem deployments. So the base_url can be used to point to the respective servers.
:::info

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDiffBase}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextEmbedder}</CodeBlock>
</details>

## Prediction Paramaters
These parameters play a crucial role in configuring and customizing your prediction requests, ensuring accurate and tailored results based on your specific use case. Understanding and appropriately setting these prediction parameters will enhance your experience and enable you to extract meaningful insights from the Clarifai platform. The below parameters allows users to modify the predictions received from the model according to their needs.


| Param Name     | Param Description                                                                                                                                                                   | Usage example                                                                                                                                                     |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| temperature    | Temperature is a parameter of OpenAI ChatGPT, GPT-3 and GPT-4 models that governs the randomness and thus the creativity of the responses. It is always a number between 0 and 1. | ```inference_params = dict(temperature=0.2) Model(model_url).predict(inputs,inference_params=inference_params)```                                             |
| max_tokens     | Max_tokens is a parameter for GPT models. This parameter shows the maximum number of tokens that can be processed inorder to get the response to your needs.              | ```inference_params = dict(max_tokens=100) Model(model_url).predict(inputs,inference_params=inference_params)```                                                  |
| min_value      | The minimum value of the prediction confidence to filter.                                                                                                                     | ```output_config = dict(min_value=0.6) Model(model_url).predict(inputs,output_config=output_config)```                                                             |
| max_concepts   | The maximum number of concepts to return.                                                                                                                                     | ```output_config = dict(max_concepts=3) Model(model_url).predict(inputs,output_config=output_config)```                                                           |
| select_concepts| The concepts to select.                                                                                                                                                       | ```output_config = dict(select_concepts=["concept_name"]) Model(model_url).predict(inputs,output_config=output_config)```                                       |
