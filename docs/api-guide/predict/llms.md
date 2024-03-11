---
description: Make predictions using LLMs
sidebar_position: 4
---

# Large Language Models (LLMs)

**Make predictions using LLMs**
<hr />

[Large Language Models (LLMs)](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D) are a subset of foundation models that have revolutionized natural language understanding and generation tasks. These models are characterized by their vast size, typically containing hundreds of millions to billions of parameters.

LLMs have learned to perform many kinds of prediction tasks. One of the most notable capabilities of LLMs is text generation. Given a prompt or seed text, they can generate coherent and contextually relevant text that appears as if it were written by a human.  

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

:::tip

<!--- [Click here]( https://docs.google.com/document/d/1JnZqqSeXpKFH4zh-go0udtUslXTqpPg0y-uUZExGa-E/edit#heading=h.msg9apiqll5r) to explore a list of LLM models available on the Clarifai Community platform. It's important to distinguish between Clarifai-hosted models, which we host within our Clarifai Cloud, and wrapped models, which are hosted externally but we deploy them on our platform using third-party API keys. When utilizing a wrapped model, your user data is transmitted to the third-party provider in addition to our own data. There are also differentiating pricing structures we employ for these two types of models. 
-->

For the third-party models we've wrapped into our platform, like those provided by OpenAI, Anthropic, Cohere, and others, you can also choose to utilize their API keys as an option—in addition to using the default Clarifai keys. You can learn how to add them [here](https://docs.clarifai.com/api-guide/predict/text#use-third-party-api-keys). 

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

import CodePythonParam from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_param.py";
import CodeJavaScriptParam from "!!raw-loader!../../../code_snippets/api-guide/predict/js/llms_param.html"
import CodeNodeJSParam from "!!raw-loader!../../../code_snippets/api-guide/predict/node/llms_param.js";
import CodeJavaParam from "!!raw-loader!../../../code_snippets/api-guide/predict/java/llms_param.java";
import CodePHPParam from "!!raw-loader!../../../code_snippets/api-guide/predict/php/llms_param.php";
import CodeCurlParam from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/llms_param.sh";

import CodePython4 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/llms_4.py";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/llms_1.txt";

## Text Completion

### Via URL

Below is an example of how you would provide a prompt text via a URL and autocomplete sentences or phrases using the [llama2-7b-chat](https://clarifai.com/meta/Llama-2/models/llama2-7b-chat) large language model. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython1}</CodeBlock>
</TabItem>

<!--
<TabItem value="python2" label="Python SDK (new)">
    <CodeBlock className="language-python">{CodePython4}</CodeBlock>
</TabItem>
-->

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


## Use Hyperparameters to Customize LLMs

You can use hyperparameters to fine-tune and customize the behavior of LLMs. This allows you to gain precise control over the prediction output of LLMs, shaping their responses to suit your unique needs.

Here are some parameters we support:

- **Temperature**—It affects the randomness of the model's output. A higher temperature (e.g., 0.8) will make the output more random and creative, while a lower temperature (e.g., 0.2) will make it more deterministic and focused.

- **Max Tokens**—It allow you to limit the length of the generated text. You can set a maximum number of tokens to prevent the output from becoming too long or to fit within specific constraints.

- **Top K**—It controls the diversity of the output. It limits the vocabulary to the `top_k` most likely tokens at each step. A lower value of K (e.g., 10) will make the output more focused, while a higher value (e.g., 50) will make it more diverse.

:::tip

Most of our models now have new versions that support inference hyperparameters like temperature, top_k, etc. This example illustrates how you can configure them. 

:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonParam}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptParam}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJSParam}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJavaParam}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHPParam}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurlParam}</CodeBlock>
</TabItem>

</Tabs>

