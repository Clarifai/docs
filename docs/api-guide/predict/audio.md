---
description: Make predictions on passages of text
sidebar_position: 5
---

# Audio

**Make predictions on audio inputs**
<hr />

To make predictions on audio inputs, you need to use a [workflow](https://docs.clarifai.com/api-guide/workflows/create-get-update-delete). Workflows is a useful Clarifai's feature that allows you to combine multiple models and carry out different operations. You can use Clarifai's built-in models or your own custom models.

In this case, we'll create a workflow that first does audio-to-text transcription and then makes predictions from the transcribed texts. 

The file size of each audio input should be less than 20MB.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/python/audio_create_workflow.py";
import PythonPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/audio_via_url.py";
import PythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/audio_via_bytes.py";

import JSCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/js/audio_create_workflow.html";
import JSPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/audio_via_url.html";
import JSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/audio_via_bytes.html";

import NodeCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/node/audio_create_workflow.js";
import NodePredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/audio_via_url.js";
import NodeViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/audio_via_bytes.js";

import JavaCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/java/audio_create_workflow.java";
import JavaPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/audio_via_url.java";
import JavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/audio_via_bytes.java";

import PHPCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/php/audio_create_workflow.php";
import PHPPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/audio_via_url.php";
import PHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/audio_via_bytes.php";

import CurlCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/audio_create_workflow.sh";
import CurlPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/audio_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/audio_via_bytes.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/audio_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/audio_via_url.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/audio_via_bytes.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/audio_via_bytes.js";

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

## Create a Workflow

In this example, we'll create a simple workflow that first converts an audio file to text and then analyses the sentiment of the transcribed text. 

We'll connect the following two models to achieve our objective:

- The [asr-wav2vec2-base-960h-english](https://clarifai.com/facebook/asr/models/asr-wav2vec2-base-960h-english), which converts English audio to English text. 
- The [sentiment-analysis-distilbert-english](https://clarifai.com/erfan/text-classification/models/sentiment-analysis-distilbert-english), which predicts whether the sentiment of an English text is positive or negative. 

We'll specify the IDs of the models and their versions—since a model can have several versions.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{JavaCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{PHPCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>


## Predict via URL

After creating the workflow, let's now use it to convert this [audio file](https://samples.clarifai.com/negative_sentence_1.wav) to text and then get the sentiment of the generated text. 

The response will contain the predictions each model in the workflow returns for the audio input.


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPredictURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSPredictURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{NodePredictURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{JavaPredictURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
   <CodeBlock className="language-php">{PHPPredictURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPredictURL}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>

## Predict via Bytes

Below is an example of how you would send the bytes of an audio and receive predictions from the above-mentioned workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{NodeViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytes}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample2}</CodeBlock>
</details>
