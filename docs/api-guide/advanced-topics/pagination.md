---
description: Paginate your data batches.
sidebar_position: 3
---

# Pagination

**Paginate your data batches**
<hr />

Many API calls are paginated. It is an helpful feature when working with our API, especially if you have a huge number of results to display.

You can provide `page` and `per_page` params to the API request, and your results will be split into pages. 

The `page` params indicates the page number⁠—defaults to 1. The `per_page` params indicates the number of results that will be contained in each page⁠—defaults to 128. You can get up to 1,000 results per page. 

In the following example, we are getting all inputs and specifying to start at page 2 and retrieve 20 results per page.


:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.py";
import NodePagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.js";
import JavaPagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.java";
import CurlPagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.sh";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPagination}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePagination}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaPagination}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPagination}</CodeBlock>
</TabItem>

</Tabs>

