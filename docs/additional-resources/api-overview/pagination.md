---
description: Learn how to paginate your GET or POST requests
sidebar_position: 9
---

# Pagination

**Learn how to paginate your GET or POST requests**
<hr />

Many of our API endpoints support pagination, a crucial feature when handling large outputs. It helps manage and display results efficiently by breaking them into smaller, manageable batches.

You can provide `page` and `per_page` params to the API request, and your results will be split into pages. 

- `page` — Indicates the page number⁠; defaults to 1.
- `per_page` — Indicates the number of results that will be contained in each page; defaults to 128. You can get up to 1,000 results per page. 

Creating a pagination request may vary depending on whether you're working with a GET or a POST endpoint.

:::info

The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.py";
import NodePaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.js";
import JavaPaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.java";
import CurlPaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.sh";
import JavaScriptPaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.html";
import PHPPaginationGet from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.php";

import PythonPaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.py";
import NodePaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.js";
import JavaPaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.java";
import CurlPaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.sh";
import JavaScriptPaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.html";
import PHPPaginationPost from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/post_pagination.php";

## GET Endpoints

For GET requests, the pagination parameters are included in the query string of the URL.

Below is an example using [`ListInputs`](https://docs.clarifai.com/api-guide/data/create-get-update-delete#list-all-inputs) to retrieve inputs from an app, starting at page 2 with 20 results per page.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPaginationGet}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JavaScriptPaginationGet}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS (gRPC)">
    <CodeBlock className="language-javascript">{NodePaginationGet}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaPaginationGet}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPPaginationGet}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPaginationGet}</CodeBlock>
</TabItem>

</Tabs>

## POST Endpoints

For POST requests, the pagination parameters are included in the request body.

Below is an example using [`PostAnnotationsSearches`](https://docs.clarifai.com/api-guide/search/filter#by-custom-concepts) to filter your search results by custom concepts, starting at page 2 with 20 results per page.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPaginationPost}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JavaScriptPaginationPost}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS (gRPC)">
    <CodeBlock className="language-javascript">{NodePaginationPost}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaPaginationPost}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPPaginationPost}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPaginationPost}</CodeBlock>
</TabItem>

</Tabs>



