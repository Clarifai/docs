---
description: Manage your concepts.
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your concepts**
<hr />

Within your app, you can create concepts, modify them after creation, and get them from your app. 

:::important
We currently do not support deleting concepts since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc.
:::

You will find that some of our endpoints have additional information returned from the clarifai/main app, which contains our pre-trained models and a large knowledge graph we've assembled over the years.

## Create

### Add Concepts

To create a new concept in you app, you POST the concept with an id and name. You can also post more than one concept in the same API by sending a list of concepts.

Below is an example of how to add concepts.  

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/add_concepts.py";
import PythonGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/get_concept.py";
import PythonListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_concepts.py";
import PythonUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/update_concept.py";

import JavaScriptAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/add_concepts.html";
import JavaScriptGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/get_concept.html";
import JavaScriptListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_concepts.html";
import JavaScriptUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/update_concept.html";

import NodeJSAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/add_concepts.js";
import NodeJSGetConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/get_concept.js";
import NodeJSListConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/list_concepts.js";
import NodeJSUpdateConcept from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/update_concept.js";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse postConceptsResponse = stub.postConcepts(
    PostConceptsRequest.newBuilder()
        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))
        .build()
);

if (postConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post concepts failed, status: " + postConceptsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "concepts": [
      {
        "id": "{concept_id}",
        "name": "{new_concept_name}"
      }
      ]
  }'\
  https://api.clarifai.com/v2/concepts
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "9852fce206578f4bc5b6bed38f03eed8"
}
concepts {
  id: "cat"
  name: "Cat Name"
  value: 1.0
  created_at {
    seconds: 1643890626
    nanos: 775078265
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2l2oz3s3iz"
}
```
</details>

## Get

### Get Concept by ID

Below is an example of how to get a single concept by its ID.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptGetConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSGetConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleConceptResponse getConceptResponse = stub.getConcept(
    GetConceptRequest.newBuilder()
        .setConceptId("charlie")
        .build()
);

if (getConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get concepts failed, status: " + getConceptsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts/{concept_id}
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "240b8fa082722b0f137c09ec5141cfa3"
}
concept {
  id: "cat"
  name: "Cat Name"
  value: 1.0
  created_at {
    seconds: 1643890626
    nanos: 775078000
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2l2oz3s3iz"
}
```
</details>

### List Concepts

You can get a list of concepts within your app with a GET call. This call supports [pagination](../advanced-topics/pagination.md)

Below is an example of how to list concepts. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSListConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse listConceptsResponse = stub.listConcepts(
    ListConceptsRequest.newBuilder()
        .build()
);

if (listConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List concepts failed, status: " + listConceptsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "1155d18c386559cfdaa22274a0531d9f"
}
concepts {
  id: "cat"
  name: "Cat Name"
  value: 1.0
  created_at {
    seconds: 1643890626
    nanos: 775078000
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2leoz3s3iy"
}
concepts {
  id: "charlie"
  name: "Charlie Name"
  value: 1.0
  created_at {
    seconds: 1643865054
    nanos: 92351000
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2l2oz3s3iz"
}
```
</details>

## Update

### Update Concept Name

Below is an example of how to update a concept's name given its id by using the "overwrite" action. You can also patch multiple concepts by sending a list of concepts.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSUpdateConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse patchConceptsResponse = stub.patchConcepts(
    PatchConceptsRequest.newBuilder()
        .setAction("overwrite")  // The only supported action right now is overwrite.
        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))
        .build()
);

if (patchConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch concepts failed, status: " + patchConceptsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "concepts": [
      {
        "id": "charlie",
        "name": "Charlie Name"
      }
      ],
    "action": "overwrite"
  }'\
  https://api.clarifai.com/v2/concepts
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "67ba891f905e081690e4e94522fc21c7"
}
concepts {
  id: "cat"
  name: "New Cat Name"
  value: 1.0
  created_at {
    seconds: 1643897414
    nanos: 497920914
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  user_id: "ei2l2oz3s3iz"
}
```
</details>

