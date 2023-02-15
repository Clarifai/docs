---
description: Make predictions on passages of texts
sidebar_position: 3
---

# Text

**Make predictions on text inputs**
<hr />

To get predictions for an input, you need to supply the text and the model you'd like to get predictions from. You can supply the text via a publicly accessible URL, a local text file, or in the raw format. 

The file size of each text input should be less than 20MB.

You specify the model you'd like to use with the `MODEL_ID` parameter.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_bytes.py";
import CodePythonViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_raw.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_url.html";
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_bytes.html";
import CodeJavaScriptViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_raw.html";

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_bytes.js";
import CodeNodeJSViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_raw.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_bytes.java";
import CodeJavaViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_raw.java";

import CodePHPViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_url.php";
import CodePHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_bytes.php";
import CodePHPViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/php/text_via_raw.php";

import CurlViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_bytes.sh";
import CurlViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_raw.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_bytes.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_bytes.js";
import CodeOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_raw_text.txt";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_raw_text.js";

## Predict via URL 

Below is an example of how you would make predictions on passages of text hosted on the web from the [`multilingual-uncased-sentiment`](https://clarifai.com/nlptownres/text-classification/models/multilingual-uncased-sentiment) model. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

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
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>

## Predict via Local Files

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

<!--
<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample2}</CodeBlock>
</details>
-->

## Predict via Raw Text

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

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample3}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample3}</CodeBlock>
</details>