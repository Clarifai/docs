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

import JavaListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/list_language_translations.java";
import JavaSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/specific_language_translation.java";
import JavaAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/add_language_translation.java";
import JavaUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/update_language_translation.java";

import PHPListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/list_language_translations.php";
import PHPSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/specific_language_translation.php";
import PHPAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/add_language_translation.php";
import PHPUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/update_language_translation.php";

import CurlListLanguageTranslations from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/list_language_translations.sh";
import CurlSpecificLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/specific_language_translation.sh";
import CurlAddLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/add_language_translation.sh";
import CurlUpdateLanguageTranslation from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/update_language_translation.sh";

import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/list_language_translations.js";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/specific_language_translation.js";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/add_language_translation.js";
import JSONOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/update_language_translation.js";

## List Language Translations by Concept ID

You can see all the language translations for a given concept ID with a GET call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).


Below is an example of how you would list language translations by concept ID. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

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
    <CodeBlock className="language-java">{JavaListLanguageTranslations}</CodeBlock>
</TabItem>

<TabItem value="grpc_php" label="gRPC PHP">
    <CodeBlock className="language-php">{PHPListLanguageTranslations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListLanguageTranslations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample1}</CodeBlock>
</details>

## Get Specific Language Translation for a Concept

Below is an example of how to get a single language translation for a concept. You can get it by the language code and concept ID.

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
    <CodeBlock className="language-java">{JavaSpecificLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_php" label="gRPC PHP">
    <CodeBlock className="language-php">{PHPSpecificLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSpecificLanguageTranslation}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample2}</CodeBlock>
</details>

## Add a Language Translation for a Concept

Below is an example of how to create a language translation for a concept by POSTing that language translation.

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
    <CodeBlock className="language-java">{JavaAddLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_php" label="gRPC PHP">
    <CodeBlock className="language-php">{PHPAddLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddLanguageTranslation}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample3}</CodeBlock>
</details>

## Update a Language Translation for a Concept

Below is an example of how to update a language translation for a concept by PATCHing that language translation.

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
    <CodeBlock className="language-java">{JavaUpdateLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="grpc_php" label="gRPC PHP">
    <CodeBlock className="language-php">{PHPUpdateLanguageTranslation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateLanguageTranslation}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample4}</CodeBlock>
</details>