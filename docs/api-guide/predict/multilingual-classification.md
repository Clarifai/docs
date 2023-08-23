---
description: Multilingual predictions.
sidebar_position: 7
---

# Multilingual Classification

**Make multilingual predictions**
<hr />

The Clarifai API supports [many languages in addition to English](https://docs.clarifai.com/api-guide/concepts/languages/). When making a [predict API request](https://docs.clarifai.com/api-guide/predict/), you can pass in the language you would like the concepts returned in. 

When you create a new Application, you must specify a default language, which will be the language of the returned concepts, if not specified in the predict request.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/python/multilingual_classification_specific_language.py";
import PythonSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/multilingual_classification_search_concepts.py";

import JavaScriptBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/js/multilingual_classification_specific_language.html";
import JavaScriptSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/multilingual_classification_search_concepts.html";

import NodeJSBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/node/multilingual_classification_specific_language.js";
import NodeJSSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/multilingual_classification_search_concepts.js";

import JavaBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/java/multilingual_classification_specific_language.java";
import JavaSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/multilingual_classification_search_concepts.java";

import PHPBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/php/multilingual_classification_specific_language.php";
import PHPSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/php/multilingual_classification_search_concepts.php";

import CurlBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/multilingual_classification_specific_language.sh";
import CurlSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/multilingual_classification_search_concepts.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/multilingual_classification_specific_language.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/multilingual_classification_specific_language.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/multilingual_classification_search_concepts.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/multilingual_classification_search_concepts.js";

## Predict By Specific Language

You can predict concepts in a language other than the Application's default, by explicitly passing in the language. 

Below is an example of how you would predict concepts in Chinese using Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model.

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlBySpecificLanguage}</CodeBlock>
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

## Search Concepts in Languages 

You can search for concepts in other languages even if the default language of your application is English. When you add inputs to your application, concepts are predicted for every language. 

Below is an example of how your would search for '人', which is simplified Chinese for 'people'.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchConcepts}</CodeBlock>
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
