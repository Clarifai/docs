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

To create a relation between two concepts, you first have to create them in your custom model. See [the Concepts page](./api-guide/concepts/create-get-update.md) on how to do that programatically.

Each relation should have a specified predicate, which can be _hyponym_, _hypernym_, or _synonym_.

Below is an example of how to create a relation between two concepts. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/knowledge_graph_create.py";
import PythonListRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/knowledge_graph_list.py";
import PythonDeleteRelations from "!!raw-loader!../../../code_snippets/api-guide/concepts/knowledge_graph_delete.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateRelations}</CodeBlock>
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostConceptRelations(
    {
        user_app_id: {
            app_id: "{YOUR_APP_ID}"
        },
        concept_id: "{YOUR_SUBJECT_CONCEPT_ID}",
        concept_relations: [
            {
                object_concept: {
                    id: "{YOUR_OBJECT_CONCEPT_ID}",
                },
                predicate: "hypernym" // This can be hypernym, hyponym, or synonym.
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Create concept relations failed, status: " + response.status.description);
        }
    }
);
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const subjectConceptId = '{YOUR_SUBJECT_CONCEPT_ID}'

const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "concept_relations": [
      {
          "object_concept": {
              "id": "{YOUR_OBJECT_CONCEPT_ID}"
          },
          "predicate": "hypernym"
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

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${subjectConceptId}/relations`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListRelations}</CodeBlock>
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListConceptRelations(
    {
        user_app_id: {
            app_id: "{YOUR_APP_ID}"
        },
        concept_id: "{YOUR_CONCEPT_ID}",
        predicate: "hypernym" // This is optional. If skipped, all concept's relations will be returned.
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List concept relations failed, status: " + response.status.description);
        }

        for (const relation of response.concept_relations) {
            console.log(relation);
        }
    }
);
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const conceptId = '{YOUR_CONCEPT_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

// Setting the predicate GET parameter is optional. If skipped, all concept's relations will be returned
fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/relations?predicate=hypernym`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteRelations}</CodeBlock>
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteConceptRelations(
    {
        user_app_id: {
            app_id: "{YOUR_APP_ID}"
        },
        concept_id: "{YOUR_OBJECT_CONCEPT_ID}",
        ids: [
            "{YOUR_CONCEPT_RELATION_ID}"
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete concept relations failed, status: " + response.status.description);
        }
    }
);
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const conceptId = '{YOUR_CONCEPT_ID}'

const raw = JSON.stringify({
	"ids": [
	  "{YOUR_CONCEPT_RELATION_ID}"
  ]
})

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/relations`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

