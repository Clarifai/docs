---
description: Make predictions using LLMs
sidebar_position: 4
---

# Large Language Models (LLMs)

**Make predictions using LLMs**
<hr />

Large Language Models (LLMs) are a subset of foundation models that have revolutionized natural language understanding and generation tasks. These models are characterized by their vast size, typically containing hundreds of millions to billions of parameters.

LLMs have learned to perform many kinds of prediction tasks. One of the most notable capabilities of LLMs is text generation. Given a prompt or seed text, they can generate coherent and contextually relevant text that appears as if it were written by a human.  

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePython1 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_1.py";
import CodeJavaScript1 from "!!raw-loader!../../../code_snippets/api-guide/predict/js/llms_1.html"
import CodeNodeJS1 from "!!raw-loader!../../../code_snippets/api-guide/predict/node/llms_1.js";
import CodeJava1 from "!!raw-loader!../../../code_snippets/api-guide/predict/java/llms_1.java";
import CodePHP1 from "!!raw-loader!../../../code_snippets/api-guide/predict/php/llms_1.php";
import CodeCurl1 from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/llms_1.sh";

import CodePython2 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_2.py";
import CodeJavaScript2 from "!!raw-loader!../../../code_snippets/api-guide/predict/js/llms_2.html"
import CodeNodeJS2 from "!!raw-loader!../../../code_snippets/api-guide/predict/node/llms_2.js";
import CodeJava2 from "!!raw-loader!../../../code_snippets/api-guide/predict/java/llms_2.java";
import CodePHP2 from "!!raw-loader!../../../code_snippets/api-guide/predict/php/llms_2.php";
import CodeCurl2 from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/llms_2.sh";

import CodePython3 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_3.py";
import CodeJavaScript3 from "!!raw-loader!../../../code_snippets/api-guide/predict/js/llms_3.html"
import CodeNodeJS3 from "!!raw-loader!../../../code_snippets/api-guide/predict/node/llms_3.js";
import CodeJava3 from "!!raw-loader!../../../code_snippets/api-guide/predict/java/llms_3.java";
import CodePHP3 from "!!raw-loader!../../../code_snippets/api-guide/predict/php/llms_3.php";
import CodeCurl3 from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/llms_3.sh";

import CodePython4 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_4.py";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/llms_1.txt";

## Text Completion

### Via URL

Below is an example of how you would provide a prompt text via a URL and autocomplete sentences or phrases using the [llama2-7b-chat](https://clarifai.com/meta/Llama-2/models/llama2-7b-chat) large language model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython1}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python SDK (new)">
    <CodeBlock className="language-python">{CodePython4}</CodeBlock>
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

### Via Local Files

Below is an example of how you would provide a prompt text via a local text file and autocomplete sentences or phrases using the [llama2-7b-chat](https://clarifai.com/meta/Llama-2/models/llama2-7b-chat) large language model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython2}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScript2}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJS2}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJava2}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHP2}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurl2}</CodeBlock>
</TabItem>

</Tabs>


### Via Raw Text

Below is an example of how you would provide a raw text prompt and autocomplete sentences or phrases using the [llama2-7b-chat](https://clarifai.com/meta/Llama-2/models/llama2-7b-chat) large language model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython3}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScript3}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJS3}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJava3}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHP3}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurl3}</CodeBlock>
</TabItem>

</Tabs>



