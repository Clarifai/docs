---
description: Make multimodal-to-text predictions 
sidebar_position: 6
---

# Multimodal-to-Text 

**Make multimodal-to-text predictions**
<hr />

**Input**: Text and images, etc

**Output**: Text

Multimodal-to-text models allow you to generate textual descriptions or responses from multimodal inputs. "Multimodal" refers to the integration of information from multiple modalities, such as text, images, and/or other types of data.

A multimodal-to-text model might take as input a combination of textual data and images and generate a descriptive text that captures the content of both modalities. It can comprehend and generate a human-like response that encompasses multiple types of information. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePython1 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/multimodal-to-text.py";
import CodeJavaScript1 from "!!raw-loader!../../../code_snippets/api-guide/predict/js/multimodal-to-text.html"
import CodeNodeJS1 from "!!raw-loader!../../../code_snippets/api-guide/predict/node/multimodal-to-text.js";
import CodeJava1 from "!!raw-loader!../../../code_snippets/api-guide/predict/java/multimodal-to-text.java";
import CodePHP1 from "!!raw-loader!../../../code_snippets/api-guide/predict/php/multimodal-to-text.php";
import CodeCurl1 from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/multimodal-to-text.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/multimodal-to-text.txt";

:::note

You can use [hyperparameters](https://docs.clarifai.com/api-guide/predict/llms#use-hyperparameters-to-customize-llms) to customize the behavior of the models. You can also utilize the [API keys](https://docs.clarifai.com/api-guide/predict/text#use-third-party-api-keys) from a third-party model provider as an option—in addition to using the default Clarifai keys. 

:::

Below is an example of how you would make a multimodal-to-text prediction using the [GPT-4 Vision](https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision) model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython1}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScript1}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJS1}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJava1}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHP1}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurl1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>