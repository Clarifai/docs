---
description: Make predictions on audio inputs
sidebar_position: 5
---

# Audio

**Make predictions on audio inputs**
<hr />

To get predictions for a given audio input, you need to supply the audio along with the specific model from which you wish to receive predictions. You can supply the input via a publicly accessible URL or by directly sending bytes.

You need to specify your choice of [model](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22audio%22%5D%7D%5D&page=1&perPage=24) for prediction by utilizing the `MODEL_ID` parameter.

The file size of each audio input should be less than 20MB.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/audio_via_url.py";
import PythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/audio_via_bytes.py";

import JSPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/audio_via_url.html";
import JSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/audio_via_bytes.html";

import NodePredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/audio_via_url.js";
import NodeViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/audio_via_bytes.js";

import JavaPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/audio_via_url.java";
import JavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/audio_via_bytes.java";

import PHPPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/audio_via_url.php";
import PHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/audio_via_bytes.php";

import CurlPredictURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/audio_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/audio_via_bytes.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/audio_via_url.txt";

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

## Predict via URL

Below is an example of how you would use the [asr-wav2vec2-base-960h-english](https://clarifai.com/facebook/asr/models/asr-wav2vec2-base-960h-english) audio transcription model to convert English speech audio, sent via a URL, into English text.



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
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

## Predict via Bytes

Below is an example of how you would use the [asr-wav2vec2-base-960h-english](https://clarifai.com/facebook/asr/models/asr-wav2vec2-base-960h-english) audio transcription model to convert English speech audio, sent as bytes, into English text.

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

