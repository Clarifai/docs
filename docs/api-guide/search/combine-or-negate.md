---
description: Group or separate items in your dataset.
sidebar_position: 2
---

# Combine or Negate

**Group or separate items in your dataset**
<hr />

You can also combine searches. Unlike our legacy search, in annotation search, `Filter` and `Rank` is a list of `Annotation` objects. Filtered annotations will be ANDed. 

When you combine both `Filter` and `Rank`, filter will be applied before ranking annotations. This is important because limiting the result set on large applications can speedup the overall query drastically when doing a ranking.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.py";
import NodeCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.js";
import JSCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.html";
import JavaCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.java";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Here we search for images which we labeled with "cat" and for which the General prediction model does not find
# a "dog" concept.

curl -X POST \
  -H "Authorization: Key {api-key}" \
  -H "Content-Type: application/json" \
-d '
{
    "searches": [
      {
        "query": {
          "filters": [
            {
              "annotation": {
                "data": {
                  "concepts": [
                    {
                      "id":"people",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ],
          "ranks": [
            {
              "annotation": {
                "data": {
                  "concepts": [
                    {
                      "id":"people",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ]
}'\
https://api.clarifai.com/v2/searches
```
</TabItem>

</Tabs>
