---
description: Learn about our text classifier model type
sidebar_position: 8
---

# Text Classifier 

**Learn about our text classifier model type**
<hr />

**Input**: Text

**Output**: Concepts

Text classifier is a type of deep fine-tuned model designed to automatically categorize or classify text data into predefined categories or concepts. This is a common task in natural language processing (NLP) and has a wide range of applications, including sentiment analysis, spam detection, topic categorization, and more. 

:::info

The text classifier model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

You may choose a text classifier model type in cases where:

- You need an automated way to process and categorize large amounts of textual data, enabling applications that require efficient and accurate text categorization.
- You need a text classification model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example Use Case

A company wants to monitor customer sentiment towards its products by analyzing online reviews. They receive a large number of product reviews on their website and social media platforms. To efficiently understand customer opinions, they can employ a text classifier model to automatically classify these reviews as positive, negative, or neutral. 

:::tip

You can explore the step-by-step tutorial on fine-tuning the GPT-Neo LoRA template for text classification tasks [here](https://www.clarifai.com/blog/fine-tuning-gpt-neo-for-text-classification).

:::

## Train Text Classifier

Let's demonstrate how to train a text classifier model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model-train-eval/model_train.py";

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>
