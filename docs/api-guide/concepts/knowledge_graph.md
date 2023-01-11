---
description: Connect the knowledge gained by different models.
sidebar_position: 4
---

# Knowledge Graph

**Connect the knowledge gained by different models**
<hr />

![](/img/kg6.png)

The Knowledge Graph uses Clarifai's concept mapping model to establish a hierarchical relationship between your concepts.

It uses three different _predicates_ to organize your concepts: hypernyms, hyponyms, and synonyms.

**Hyponym** — represents an 'is a kind of' relation. For example, the relationship described as 'honey' \(subject\), 'hyponym' \(predicate\), 'food' \(object\) is more easily read as 'honey' 'is a kind of' 'food'.

**Hypernym** — is the opposite of 'hyponym'. When you add the relationship, the opposite will automatically appear in your queries. An 'hypernym' can be read as 'is a parent of'. For example, 'food' \(subject\), 'hypernym' \(predicate\), 'honey' \(object\) is more easily read as 'food' is a parent of 'honey'.

**Synonym** — defines two concepts that essentially mean the same thing. This is more like an "is" relationship. For example, a 'synonym' relationship could be "puppy" is "pup". The reverse is also true if the former is added; so, "pup" is "puppy" will appear in queries as well.

## Create Relations

To create a relation between two concepts, you first have to create them in your custom model. See the  [Concepts section](https://docs.clarifai.com/api-guide/concepts/create-get-update/) on how to do that programatically.

Each relation should have a specified predicate, which can be _hyponym_, _hypernym_, or _synonym_.

Below is an example of how to create a relation between two concepts. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_create.py";
import PythonListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_list.py";
import PythonDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_delete.py";

import JavaScriptCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_create.html";
import JavaScriptListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_list.html";
import JavaScriptDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_delete.html";

import NodeJSCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_create.js";
import NodeJSListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_list.js";
import NodeJSDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_delete.js";

import JavaCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_create.java";
import JavaListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_list.java";
import JavaDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_delete.java";

import PHPCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/knowledge_graph_create.php";
import PHPListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/knowledge_graph_list.php";
import PHPDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/knowledge_graph_delete.php";

import CurlCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/knowledge_graph_create.sh";
import CurlListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/knowledge_graph_list.sh";
import CurlDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/knowledge_graph_delete.sh";

import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/knowledge_graph_create.js";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/knowledge_graph_list.js";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/knowledge_graph_delete.js";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateRelations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample1}</CodeBlock>
</details>

## List Existing Relations

Below is an example of how to list existing relations between concepts. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSListRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListRelations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample2}</CodeBlock>
</details>

## Delete Relations

Below is an example of how to delete relations between concepts. 

:::tip

You can use either of the following ways to retrieve the `CONCEPT_RELATION_IDS`:

- Use the above [List Existing Relations](https://docs.clarifai.com/api-guide/concepts/knowledge_graph#list-existing-relations) method to list ALL existing relations between concepts. Remember to omit the `predicate` parameter. 
- Log in to the Portal and access the relations details of your concept. Then, inspect the network activity under your browser's Network Tab. The IDs are under the `relations` category. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteRelations}</CodeBlock>
</TabItem>

</Tabs>

