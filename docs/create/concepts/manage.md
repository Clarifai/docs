---
description: Learn how to get, update, and delete concepts
sidebar_position: 2
toc_max_heading_level: 4
---

# Manage Concepts

**Learn how to get, update, and delete concepts**
<hr />


:::warning Delete Concepts

We currently do not support deleting concepts solitarily since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc.

:::


## **Via the API**

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


Within your app, you can retrieve and modify concepts after they've been created.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/get_concept.py";
import PythonListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_concepts.py";
import PythonListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_model_concepts.py";
import PythonUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/update_concept.py";

import JavaScriptGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/get_concept.html";
import JavaScriptListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_concepts.html";
import JavaScriptListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_model_concepts.html";
import JavaScriptUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/update_concept.html";

import NodeJSGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/get_concept.js";
import NodeJSListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/list_concepts.js";
import NodeJSUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/update_concept.js";

import JavaGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/get_concept.java";
import JavaListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/list_concepts.java";
import JavaUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/update_concept.java";

import PHPGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/get_concept.php";
import PHPListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/list_concepts.php";
import PHPListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/list_model_concepts.php";
import PHPUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/update_concept.php";

import CurlGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/get_concept.sh";
import CurlListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/list_concepts.sh";
import CurlListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/list_model_concepts.sh";
import CurlUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/update_concept.sh";

import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/get_concept.js";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/list_concepts.js";
import JSONOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/update_concept.js";


### Get

#### Get Concept by ID

Below is an example of how to get a single concept by its ID.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptGetConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSGetConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample2}</CodeBlock>
</details>

#### List Concepts

You can get a list of concepts within your app with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

Below is an example of how to list concepts. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSListConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample3}</CodeBlock>
</details>

#### List Model Concepts

You can get a list of concepts within your model with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

Below is an example of how to list the concepts in your model. 

:::note

If you are using any of the Clarifai gRPC clients, the `ListModelConcepts` endpoint, which lists concepts in a model, is only available from release 8.10.0. 

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Update

#### Update Concept Name

Below is an example of how to update a concept's name given its id by using the "overwrite" action. You can also patch multiple concepts by sending a list of concepts.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample4}</CodeBlock>
</details>

