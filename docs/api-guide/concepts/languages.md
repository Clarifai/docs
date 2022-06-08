---
description: Multilingual support in Clarifai
sidebar_position: 2
---

# Languages

**Multilingual support in Clarifai**
<hr />

The Clarifai API supports many languages in addition to English. These are represented as translations of names of concepts so that when you search by concept name or get predictions from a model's concepts, you can utilize the language of your choice.

## Supported Languages

The currently supported languages are listed below.

| Language | Code |
| :--- | :--- |
| Arabic \(ar\) | ar |
| Bengali \(bn\) | bn |
| Danish \(da\) | da |
| German \(de\) | de |
| English \(en\) | en |
| Spanish \(es\) | es |
| Finnish \(fi\) | fi |
| French \(fr\) | fr |
| Hindi \(hi\) | hi |
| Hungarian \(hu\) | hu |
| Italian \(it\) | it |
| Japanese \(ja\) | ja |
| Korean \(ko\) | ko |
| Dutch \(nl\) | nl |
| Norwegian \(no\) | no |
| Punjabi \(pa\) | pa |
| Polish \(pl\) | pl |
| Portuguese \(pt\) | pt |
| Russian \(ru\) | ru |
| Swedish \(sv\) | sv |
| Turkish \(tr\) | tr |
| Chinese Simplified \(zh\) | zh |
| Chinese Traditional \(zh-TW\) | zh-TW |

## Default Language

When you create a new Application, you must specify a default language. This will be the default language concepts are returned in when you do not explicitly set a language in an API request. 

You cannot change the default language. You can however change languages per request.

![create new app](/img/create-new-app-new.png)

## List Language Translations by Concept ID

You can see all the language translations for a given concept ID with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).


Below is an example of how you would list language translations by concept ID. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/list_language_translations.py";
import PythonSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/specific_language_translation.py";
import PythonAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/add_language_translation.py";
import PythonUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/update_language_translation.py";

import JavaScriptListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/list_language_translations.html";
import JavaScriptSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/specific_language_translation.html";
import JavaScriptAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/add_language_translation.html";
import JavaScriptUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/update_language_translation.html";

import NodeJSListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/list_language_translations.js";
import NodeJSSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/specific_language_translation.js";
import NodeJSAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/add_language_translation.js";
import NodeJSUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/update_language_translation.js";

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonListLanguageTranslations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptListLanguageTranslations}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeJSListLanguageTranslations}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse listConceptLanguagesResponse = stub.listConceptLanguages(
    ListConceptLanguagesRequest.newBuilder()
        .setConceptId("charlie")
        .build()
);

if (listConceptLanguagesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List concept languages failed, status: " + listConceptLanguagesResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts/{concept_id}/languages
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "e3d3b16eccf82d3b5563a0a01eebc579"
}
concept_languages {
  id: "en"
  name: "Cat Name"
} 
```

</details>

## Get Specific Language Translation for a Concept

Below is an example of how to get a single language translation for a concept. You can get it by the language code and concept ID.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonSpecificLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSpecificLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSpecificLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse getConceptLanguageResponse = stub.getConceptLanguage(
    ListConceptLanguageRequest.newBuilder()
        .setConceptId("charlie")
        .setLanguage("ja")
        .build()
);

if (getConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List concept languages failed, status: " + getConceptLanguageResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "ef625131675ba87841983c6e7f654e39"
}
concept_language {
  id: "en"
  name: "Cat Name"
} 
```

</details>

## Add a Language Translation for a Concept

Below is an example of how to create a language translation for a concept by POSTing that language translation.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptAddLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeJSAddLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse postConceptLanguageResponse = stub.postConceptLanguage(
    PostConceptLanguageRequest.newBuilder()
        .setConceptId("charlie")
        .addConceptLanguages(ConceptLanguage.newBuilder().setId("ja").setName("ボスコ"))
        .build()
);

if (postConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post concept languages failed, status: " + postConceptLanguageResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "c5054cc812539059340a2275c3cb7cd5"
}
concept_languages {
  id: "ja"
  name: "\343\203\234\343\202\271\343\202\263"
}
```
</details>

## Update a Language Translation for a Concept

Below is an example of how to update a language translation for a concept by PATCHing that language translation.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)


<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonUpdateLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptUpdateLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeJSUpdateLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse patchConceptLanguageResponse = stub.patchConceptLanguage(
    PatchConceptLanguageRequest.newBuilder()
        .setAction("overwrite")
        .setConceptId("charlie")
        .addConceptLanguages(ConceptLanguage.newBuilder().setId("ja").setName("new name"))
        .build()
);

if (patchConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch concept languages failed, status: " + patchConceptLanguageResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}
```
</TabItem>

</Tabs>


<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "779d702cbb303bcce4e469eb1d3552c2"
}
concept_languages {
  id: "ja"
  name: "new name"
}
```
</details>