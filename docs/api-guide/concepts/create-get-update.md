---
description: Manage your concepts.
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your concepts**
<hr />

Within your app, you can create concepts, modify them after creation, or get them from your app. 

:::caution

We currently do not support deleting concepts since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc.

:::

You will find that some of our endpoints have additional information returned from the clarifai/main app, which contains our pre-trained models and a large knowledge graph we've assembled over the years.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/add_concepts.py";
import PythonGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/get_concept.py";
import PythonListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_concepts.py";
import PythonListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_model_concepts.py";
import PythonUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/update_concept.py";

import JavaScriptAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/add_concepts.html";
import JavaScriptGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/get_concept.html";
import JavaScriptListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_concepts.html";
import JavaScriptListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_model_concepts.html";
import JavaScriptUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/update_concept.html";

import NodeJSAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/add_concepts.js";
import NodeJSGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/get_concept.js";
import NodeJSListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/list_concepts.js";
import NodeJSUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/update_concept.js";

import JavaAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/add_concepts.java";
import JavaGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/get_concept.java";
import JavaListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/list_concepts.java";
import JavaUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/update_concept.java";

import PHPAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/add_concepts.php";
import PHPGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/get_concept.php";
import PHPListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/list_concepts.php";
import PHPListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/list_model_concepts.php";
import PHPUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/update_concept.php";

import CurlAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/add_concepts.sh";
import CurlGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/get_concept.sh";
import CurlListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/list_concepts.sh";
import CurlListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/list_model_concepts.sh";
import CurlUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/update_concept.sh";

import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/add_concepts.js";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/get_concept.js";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/list_concepts.js";
import JSONOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/update_concept.js";


## Create

### Add Concepts

To create a new concept in your app, you POST the concept with an id and name. You can also post more than one concept in the same request by sending a list of concepts.

Below is an example of how to add concepts.  

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample1}</CodeBlock>
</details>


## Get

### Get Concept by ID

Below is an example of how to get a single concept by its ID.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptGetConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSGetConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPGetConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample2}</CodeBlock>
</details>

### List Concepts

You can get a list of concepts within your app with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

Below is an example of how to list concepts. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSListConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample3}</CodeBlock>
</details>

### List Model Concepts

You can get a list of concepts within your model with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

Below is an example of how to list the concepts in your model. 

:::note

If you are using any of the Clarifai gRPC clients, the `ListModelConcepts` endpoint, which lists concepts in a model, is only available from release 8.10.0. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelConcepts}</CodeBlock>
</TabItem>

</Tabs>

## Update

### Update Concept Name

Below is an example of how to update a concept's name given its id by using the "overwrite" action. You can also patch multiple concepts by sending a list of concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample4}</CodeBlock>
</details>

