---
description: Use AI to index your images based on semantic similarity.
sidebar_position: 5
---

# Index Images for Search

**Use AI to index your images based on semantic similarity**
<hr />

To get started with search, you must first add images to the search index. You can add one or more images to the index at a time. You can supply an image either with a publicly accessible URL or by directly sending image bytes. You can send up to 128 images in one API call.

Below is an example of how to add images to the search index.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.py";
import JSIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.html";
import NodeIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.js";
import JavaIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.java";
import CurlIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.sh";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonIndexImages}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSIndexImages}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeIndexImages}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaIndexImages}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlIndexImages}</CodeBlock>
</TabItem>

</Tabs>
