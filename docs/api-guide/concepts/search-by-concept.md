---
description: Search based on specific words.
sidebar_position: 3
title: Search by Concept
---

# Search by Concept

**Search based on specific words**
<hr />

You can search for concepts by `name`, even in a different `language` using the `ConceptSearches` endpoint.

Below is an example of how to search for concepts.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonSearchByConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/search_by_concept.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse postConceptsSearchesResponse = stub.postConceptsSearches(
    PostConceptsSearchesRequest.newBuilder()
        .setConceptQuery(
            ConceptQuery.newBuilder()
                .setName("人")
                .setLanguage("ja")
        )
        .build()
);

if (postConceptsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post concepts searches failed, status: " + postConceptsSearchesResponse.getStatus());
}

System.out.println("Found concepts:");
for (Concept concept : postConceptsSearchesResponse.getConceptsList()) {
    System.out.printf("\t%s %.2f%n", concept.getName(), concept.getValue());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostConceptsSearches(
    {
        concept_query: {name: "人", language: "ja"}
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post concepts searches failed, status: " + response.status.description);
        }

        console.log("Found concepts:");
        for (const concept of response.concepts) {
            console.log("\t" + concept.name + " " + concept.value);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "concept_query": {
      "name":"人",
      "language": "ja"
    }
  }'\
  https://api.clarifai.com/v2/concepts/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "concept_query": {
    "name":"人",
    "language": "ja"
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/concepts/searches", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
Found concepts:
	人 1.00
	人 1.00
```
</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "6e24dbc1e4977bd6f4092d0c72169a68"
}
concepts {
  id: "ai_ZKJ48TFz"
  name: "\344\272\272"
  value: 1.0
  created_at {
    seconds: 1458214981
    nanos: 223962000
  }
  language: "ja"
  app_id: "main"
  visibility {
    gettable: PUBLIC
  }
  user_id: "clarifai"
}
concepts {
  id: "ai_l8TKp2h5"
  name: "\344\272\272"
  value: 1.0
  created_at {
    seconds: 1458214981
    nanos: 223962000
  }
  language: "ja"
  app_id: "main"
  visibility {
    gettable: PUBLIC
  }
  user_id: "clarifai"
}

```
</details>
