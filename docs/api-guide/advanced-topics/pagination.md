---
description: Paginate your data batches.
sidebar_position: 3
---

# Pagination

**Paginate your data batches**
<hr />

Many API calls are paginated. You can provide `page` and `per_page` params to the API request, and your results will be split into pages. 

The `page` params indicates the page number⁠—defaults to 1. The `per_page` params indicates the number of results that will be contained in each page⁠—defaults to 128. You can get up to 1,000 results per page. 

In the example below, we are getting all inputs and specifying to start at page 2 and get 20 results per page.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](../../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonPagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.py";
import NodePagination from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/pagination.js";

<Tabs>

<TabItem value="python" label="Python" default>
    <CodeBlock className="language-python">{PythonPagination}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS" default>
    <CodeBlock className="language-javascript">{NodePagination}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java" default>

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse listInputsResponse = stub.listInputs(
    ListInputsRequest.newBuilder()
        .setPage(2)
        .setPerPage(20)
        .build()
);

if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List inputs failed, status: " + listInputsResponse.getStatus());
}

for (Input input : listInputsResponse.getInputsList()) {
    System.out.println(input);
}
```
</TabItem>

<TabItem value="curl" label="cURL" default>

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs?page=2&per_page=20
```
</TabItem>
</Tabs>

