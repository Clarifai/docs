---
description: Search based on specific words.
sidebar_position: 3
title: Search by Concept
---

# Search by Concept

**Search based on specific words**
<hr />

You can search for concepts by `name`, even in a different `language`, using the `ConceptSearches` endpoint.

Below is an example of how to search for concepts.

:::info

The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/search_by_concept.py";
import JavaScriptSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/search_by_concept.html";
import NodeJSSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/search_by_concept.js";
import JavaSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/search_by_concept.java";
import PHPSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/search_by_concept.php";
import CurlSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/search_by_concept.sh";
import CodeOutputExample from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/search_by_concept.txt";
import JSONOutputExample from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/search_by_concept.js";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchByConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-js">{CodeOutputExample}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample}</CodeBlock>
</details>
