---
description: Connect the knowledge gained by different models
sidebar_position: 3
---

# Concepts Relations

**Connect and organize concepts for smarter AI**
<hr />

The Knowledge Graph establishes semantic and hierarchical relationships between your concepts — such as synonyms, hyponyms, and hypernyms — laying the foundation for more intelligent, context-aware systems.

These relationships are crucial for building robust knowledge representations that enhance both computer vision and natural language processing capabilities.

Whether you're managing a product catalog, powering a search engine, or organizing complex datasets, using concept relationships allow you to structure, search, and retrieve information more effectively — making your AI applications significantly smarter and more precise.

## Types of Concepts Relations

- **Hyponym** — This represents an _“is a kind of”_ relationship. For instance, if you define the relationship as _'honey' (subject), 'hyponym' (predicate), 'food' (object),_ it can be interpreted as _"honey is a kind of food."_ This helps systems understand that "honey" belongs to a broader category.

- **Hypernym** — This is the inverse of a hyponym, signifying a _“parent of”_ relationship. Using the same example, if you define _'food' (subject), 'hypernym' (predicate), 'honey' (object),_ it is read as _"food is a parent of honey."_  When a hyponym is defined, the corresponding hypernym is automatically inferred in queries, and vice versa, ensuring consistency in how concept hierarchies are interpreted.

- **Synonym** — This relationship connects two concepts that essentially mean the same thing, similar to an _“is”_ statement. For example, defining _'puppy' as a synonym of 'pup'_ allows the model to treat them interchangeably. This relationship is bidirectional, so adding one synonym automatically implies the reverse, making searches and classifications more flexible and inclusive.

## Use Case Examples

- **Enhanced search and retrieval** — Concept relationships enable more intelligent searches. For example, a search for “Animal” can automatically include related hyponyms like “Dog” and “Cat,” returning broader and more relevant results.

- **Improved data organization** — Hierarchical relationships help structure complex datasets more effectively. For example, hypernyms allow models to group specific entities under broader categories, improving organizational structures.

- **Contextual understanding** — When models grasp the semantic links between concepts, they can better interpret context. For instance, recognizing that “Puppy” is a synonym of “Dog” ensures all relevant information is considered during classification or prediction.

- **Dynamic content delivery** — In use cases like personalized content, search recommendations, or targeted advertising, concept relationships allow systems to infer user intent and deliver more relevant, meaningful results.

:::tip

[Click here](https://docs.clarifai.com/create-manage/search/api/rank#search-by-concepts) to learn how to leverage concept relations for more powerful and precise search queries.

:::

## How to Create Relations

To create a relation between two concepts, you first have to create them in your app. You can see the  [previous section](../concepts/create.md) on how to create concepts.

Each relation should have a specified predicate, which can be _hyponym_, _hypernym_, or _synonym_.

Below is an example of how to create a relation between two concepts. 

:::tip

Learn how to create concept relations via the UI [here](https://docs.clarifai.com/create-manage/labeling/ui/create#update-annotations). 

:::


:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonSDKCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/sdk_knowledge_graph_create.py";
import PythonCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_create.py";
import PythonListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_list.py";
import PythonDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_delete.py";
import PythonSearchRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/search_relations.py";
import PythonSearchSpecificRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/search_specific_relations.py";
import PythonSearchRelationsShowTree from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/search_relations-show-tree.py";

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

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSDKCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateRelations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample1}</CodeBlock>
</details>

## List Existing Relations

### List All Relations

Below is an example of how to list all the existing relations between concepts. 

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSearchRelations}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSListRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListRelations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample2}</CodeBlock>
</details>

### List Specific Concept Relations

Below is an example of how to list the specific relations between concepts. 

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSearchSpecificRelations}</CodeBlock>
</TabItem>

</Tabs>

### List Relations in Tree Structure

You can set the `show_tree` argument to `True` in `search_concept_relations()` to display concept relationships in a rich, hierarchical tree structure.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSearchRelationsShowTree}</CodeBlock>
</TabItem>

</Tabs>

## Delete Relations

Below is an example of how to delete relations between concepts. 

:::tip

You can use either of the following ways to retrieve the `CONCEPT_RELATION_IDS`:

- Use the above [List Existing Relations](https://docs.clarifai.com/api-guide/concepts/knowledge_graph#list-existing-relations) method to list ALL existing relations between concepts. Remember to omit the `predicate` parameter. 
- Log in to the Portal and access the relations details of your concept. Then, inspect the network activity under your browser's Network Tab. The IDs are under the `relations` category. 

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteRelations}</CodeBlock>
</TabItem>

</Tabs>

