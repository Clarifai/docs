---
description: Connect the knowledge gained by different models.
sidebar_position: 4
---

# Knowledge Graph

**Connect the knowledge gained by different models**
<hr />

![](/img/kg6.png)

The Knowledge Graph uses Clarifai's concept mapping model to establish a hierarchical relationship between your concepts.

It uses three different _predicates_ to organize your concepts: hypernyms, hyponyms, and synonyms.

**Hyponym** — represents an 'is a kind of' relation. For example, the relationship described as 'honey' \(subject\), 'hyponym' \(predicate\), 'food' \(object\) is more easily read as 'honey' 'is a kind of' 'food'.

**Hypernym** — is the opposite of 'hyponym'. When you add the relationship, the opposite will automatically appear in your queries. An 'hypernym' can be read as 'is a parent of'. For example, 'food' \(subject\), 'hypernym' \(predicate\), 'honey' \(object\) is more easily read as 'food' is a parent of 'honey'.

**Synonym** — defines two concepts that essentially mean the same thing. This is more like an "is" relationship. For example, a 'synonym' relationship could be "puppy" is "pup". The reverse is also true if the former is added; so, "pup" is "puppy" will appear in queries as well.

## Create Relations

To create a relation between two concepts, you first have to create them in your custom model. See the  [Concepts page](https://docs.clarifai.com/api-guide/concepts/create-get-update/) on how to do that programatically.

Each relation should have a specified predicate, which can be _hyponym_, _hypernym_, or _synonym_.

Below is an example of how to create a relation between two concepts. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_create.py";
import PythonListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_list.py";
import PythonDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/knowledge_graph_delete.py";

import JavaScriptCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_create.html";
import JavaScriptListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_list.html";
import JavaScriptDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/knowledge_graph_delete.html";

import NodeJSCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_create.js";
import NodeJSListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_list.js";
import NodeJSDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/knowledge_graph_delete.js";

import JavaJSCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_create.java";
import JavaJSListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_list.java";
import JavaJSDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/knowledge_graph_delete.java";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSCreateRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(
    PostConceptRelationsRequest.newBuilder()
        .setUserAppId(
            UserAppIDSet.newBuilder()
                .setAppId("{YOUR_APP_ID}")
                .build()
        )
        .setConceptId("{YOUR_SUBJECT_CONCEPT_ID}")
        .addConceptRelations(
            ConceptRelation.newBuilder()
                .setObjectConcept(Concept.newBuilder().setId("{YOUR_OBJECT_CONCEPT_ID}").build())
                .setPredicate("hypernym").build()) // This can be hypernym, hypnonym, or synonym.
        .build()
);

if (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_SUBJECT_CONCEPT_ID}/relations' \
    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "concept_relations": [
            {
                "object_concept": {
                    "id": "{YOUR_OBJECT_CONCEPT_ID}"
                },
                "predicate": "hypernym"
            }
        ]
    }'
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "0d0a5ec5df14d62a7d660f392ce26727"
}
concept_relations {
  id: "2d794e5ede534500b4ac7da44ef570ee"
  subject_concept {
    id: "honey"
    name: "honey"
    value: 1.0
    created_at {
      seconds: 1643976334
      nanos: 237961000
    }
    language: "en"
    app_id: "a39423543bb941bf9ba2ee95fad11f0a"
    visibility {
      gettable: PRIVATE
    }
    user_id: "e5y2lteoz3s3iy"
  }
  object_concept {
    id: "food"
    name: "food"
    value: 1.0
    created_at {
      seconds: 1643976326
      nanos: 123719000
    }
    language: "en"
    app_id: "a39423543bb941bf9ba2ee95fad11f0a"
    visibility {
      gettable: PRIVATE
    }
    user_id: "ei2leoz3s3iy"
  }
  predicate: "hypernym"
  visibility {
    gettable: PRIVATE
  }
}
```
</details>

## List Existing Relations

Below is an example of how to list existing relations between concepts. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSListRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptRelationResponse listConceptRelationsResponse = stub.listConceptRelations(
    ListConceptRelationsRequest.newBuilder()
        .setUserAppId(
            UserAppIDSet.newBuilder()
                .setAppId("{YOUR_APP_ID}")
                .build()
        )
        .setConceptId("{YOUR_CONCEPT_ID}")
        .setPredicate("hypernym")  // This is optional. If skipped, all concept's relations will be returned.
        .build()
);


if (listConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List concept relations failed, status: " + listConceptRelationsResponse.getStatus());
}

for (ConceptRelation relation : listConceptRelationsResponse.getConceptRelationsList()) {
    System.out.println(relation);
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Setting the predicate GET parameter is optional. If skipped, all concept's relations will be returned.
curl -X GET 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_CONCEPT_ID}/relations?predicate=hypernym' \
    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \
    -H 'Content-Type: application/json'
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "2d794e5ede534500b4ac7da44ef570ee"
subject_concept {
  id: "honey"
  name: "honey"
  value: 1.0
  created_at {
    seconds: 1643976334
    nanos: 237961000
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2leoz3s3iy"
}
object_concept {
  id: "food"
  name: "food"
  value: 1.0
  created_at {
    seconds: 1643976326
    nanos: 123719000
  }
  language: "en"
  app_id: "a39423543bb941bf9ba2ee95fad11f0a"
  visibility {
    gettable: PRIVATE
  }
  user_id: "ei2leoz3s3iy"
}
predicate: "hypernym"
visibility {
  gettable: PRIVATE
}
```
</details>

## Delete Relations

Below is an example of how to delete relations between concepts. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::tip

To retrieve the `CONCEPT_RELATION_IDS`, log in to the Portal and access the relations details of your concept. Then, inspect the network activity under your browser's Network Tab. The IDs are under the `relations` category. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSDeleteRelations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteConceptRelationsResponse = stub.deleteConceptRelations(
    DeleteConceptRelationsRequest.newBuilder()
        .setUserAppId(
            UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}").build()
        )
        .addIds("{YOUR_CONCEPT_RELATION_ID}")
        .setConceptId("{YOUR_OBJECT_CONCEPT_ID}")
        .build()
);

if (deleteConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete concept relations failed, status: " + deleteConceptRelationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_OBJECT_CONCEPT_ID}/relations' \
    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "ids": [
            "{YOUR_CONCEPT_RELATION_ID}"
        ]
    }'
```
</TabItem>

</Tabs>

