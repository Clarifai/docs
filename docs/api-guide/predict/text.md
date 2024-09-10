---
description: Make predictions on passages of texts
sidebar_position: 3
---

# Text

**Make predictions on text inputs**
<hr />

To get predictions for a given text input, you need to supply the text along with the specific model from which you wish to receive predictions. You can supply the text via a publicly accessible URL, a local text file, or in its raw format. 

The file size of each text input should be less than 20MB.

You need to specify your choice of [model](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%5D&page=1&perPage=24) for prediction by utilizing the `MODEL_ID` parameter.

:::tip

Most of our models now have new versions that support inference hyperparameters like temperature, top_k, etc. You can learn how to configure them [here](https://docs.clarifai.com/api-guide/predict/llms/#use-hyperparameters-to-customize-llms). 

:::

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_bytes.py";
import CodePythonViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_raw.py";
import CodePythonImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/python/image_generation.py";
import CodePythonTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_to_speech.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_url.html";
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_bytes.html";
import CodeJavaScriptViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_raw.html";
import CodeJavaScriptImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/js/image_generation.html";
import CodeJavaScriptTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_to_speech.html";

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_bytes.js";
import CodeNodeJSViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_raw.js";
import CodeNodeJSImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/node/image_generation.js";
import CodeNodeJSTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_to_speech.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_bytes.java";
import CodeJavaViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_raw.java";
import CodeJavaImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/java/image_generation.java";
import CodeJavaTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_to_speech.java";

import CodePHPViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_url.php";
import CodePHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_bytes.php";
import CodePHPViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_raw.php";
import CodePHPImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/php/image_generation.php";
import CodePHPTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_to_speech.php";

import CurlViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_bytes.sh";
import CurlImageGeneration from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/image_generation.sh";
import CurlViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_raw.sh";
import CurlTextToSpeech from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_to_speech.sh";
import ThirdPartyKey from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/third_party_api_key.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.js";

## Text Classification

**Input**: Text

**Output**: [Concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete)

Text classification is the process of categorizing text documents into predefined categories based on their content. This task is typically accomplished using machine learning models trained on labeled datasets, where each document is associated with a specific category. 

These models learn patterns and features in the text data during training, enabling them to classify new, unseen documents into the relevant categories effectively.

### Predict via URL 

Below is an example of how you would make predictions on passages of text hosted on the web from the [`multilingual-uncased-sentiment`](https://clarifai.com/nlptownres/text-classification/models/multilingual-uncased-sentiment) model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{CodePHPViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURL}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>

### Predict via Local Files

Below is an example of how you would provide text inputs via local text files and receive predictions from the [`multilingual-uncased-sentiment`](https://clarifai.com/nlptownres/text-classification/models/multilingual-uncased-sentiment) model. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{CodeJavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHPViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytes}</CodeBlock>
</TabItem>

</Tabs>


### Predict via Raw Text

Below is an example of how you would provide raw text inputs and receive predictions from the [`multilingual-uncased-sentiment`](https://clarifai.com/nlptownres/text-classification/models/multilingual-uncased-sentiment) model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaRaw}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaRaw}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaRaw}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaViaRaw}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{CodePHPViaRaw}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaRaw}</CodeBlock>
</TabItem>

</Tabs>

## Text-to-Image Generation

**Input**: Text

**Output**: Images

Text-to-image generation involves creating visual images based on textual descriptions. In this field, machine learning models are trained to establish a meaningful connection between textual descriptions and their corresponding visual representations. 

Then, when given a textual input, these models can generate images that accurately reflect the content described in the text.

Below is an example of how you would perform text-to-image generation using the [Stable Diffusion XL](https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl) model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonImageGeneration}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageGeneration}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSImageGeneration}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaImageGeneration}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{CodePHPImageGeneration}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageGeneration}</CodeBlock>
</TabItem>

</Tabs>

Here is a generated output example:

![generated image output example](/img/others/gen-image_200.jpg)

## Text-to-Speech Generation

**Input**: Text

**Output**: Audio

Text-to-speech (TTS) generation involves converting written text into spoken words. A machine learning model is used to synthesize human-like speech from input text, allowing a computer or device to "speak" the provided content.

Below is an example of how you would perform text-to-speech generation using the [Speech-synthesis](https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis) model.

:::note

In this example, we've used the `params.update()` method to fine-tune various inference parameters that allow us to customize the behavior of the Speech-synthesis model. You can check the various inference parameters you can configure on the model's description page on the Clarifai portal.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonTextToSpeech}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptTextToSpeech}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSTextToSpeech}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaTextToSpeech}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{CodePHPTextToSpeech}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTextToSpeech}</CodeBlock>
</TabItem>

</Tabs>

## Use Third-Party API Keys 

:::info

The ability to use third-party API keys is currently exclusively available to Enterprise users. Learn more [here](https://www.clarifai.com/pricing). 

:::

For the third-party models we've wrapped into our platform, like those provided by OpenAI, Anthropic, Cohere, and others, you can also choose to utilize their API keys as an option—in addition to using the default Clarifai keys. 

This Bring Your Own Key (BYOK) flexibility allows you to integrate your preferred services and APIs into your workflow, enhancing the versatility of our platform.

Here is an example of how to add an OpenAI API key for [Dalle-3](https://clarifai.com/openai/dall-e/models/dall-e-3) for text-to-image tasks. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{ThirdPartyKey}</CodeBlock>
</TabItem>

</Tabs>