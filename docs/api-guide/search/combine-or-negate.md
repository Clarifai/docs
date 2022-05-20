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
The initialization code used in the following example is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.py";
import NodeCombineNegate from "!!raw-loader!../../../code_snippets/api-guide/search/combine_or_negate.js";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

// Here we search for images which we labeled with "cat" and for which the General prediction model does not find
// a "dog" concept.
MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder()
                .addFilters(
                    Filter.newBuilder().setAnnotation(
                        Annotation.newBuilder().setData(
                                Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                                Concept.newBuilder()
                                    .setId("cat")  // You could search by concept Name as well.
                                    .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                            )
                        )
                    )
                )
                .addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                            Concept.newBuilder()
                                .setId("dog")  // You could search by concept Name as well.
                                .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                        )
                    )
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
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
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>
