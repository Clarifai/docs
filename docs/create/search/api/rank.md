---
description: Search your data based on concepts or visual similarity
sidebar_position: 2
---

# Rank

**Search your data based on concepts or visual similarity**
<hr />

You can rank order your search results with the intuitive insights of an AI. Your model can identify concepts in your data and rank search results by how confident it is that a given concept is present. 

You can even rank search results by how similar one input is to another input or region of the input model detected. The search results will return the input and also the annotation, which includes the region.

In annotation search, `Rank` is a list of `Annotation` objects.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

:::tip

You can learn how to paginate your API requests results [here](https://docs.clarifai.com/additional-resources/api-overview/pagination). 

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/by_clarifaimain_app_concepts.py";
import PythonCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/by_custom_concepts.py";
import PythonClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/by_clarifaimain_custom_concepts.py";
import PythonConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/by_concept_another_language.py";
import PythonSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/search_by_image_url.py";
import PythonImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/search_by_image_bytes.py";
import PythonInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/by_input_id.py";
import PythonSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/py/search_by_text.py";

import JSAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/by_clarifaimain_app_concepts.html";
import JSCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/by_custom_concepts.html";
import JSClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/by_clarifaimain_custom_concepts.html";
import JSConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/by_concept_another_language.html";
import JSSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/search_by_image_url.html";
import JSImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/search_by_image_bytes.html";
import JSInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/by_input_id.html";
import JSSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/js/search_by_text.html";

import NodeAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/by_clarifaimain_app_concepts.js";
import NodeCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/by_custom_concepts.js";
import NodeClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/by_clarifaimain_custom_concepts.js";
import NodeConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/by_concept_another_language.js";
import NodeSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/search_by_image_url.js";
import NodeImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/search_by_image_bytes.js";
import NodeInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/by_input_id.js";
import NodeSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/node/search_by_text.js";

import JavaAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/by_clarifaimain_app_concepts.java";
import JavaCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/by_custom_concepts.java";
import JavaClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/by_clarifaimain_custom_concepts.java";
import JavaConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/by_concept_another_language.java";
import JavaSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/search_by_image_url.java";
import JavaImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/search_by_image_bytes.java";
import JavaInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/by_input_id.java";
import JavaSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/java/search_by_text.java";

import PHPAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/by_clarifaimain_app_concepts.php";
import PHPCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/by_custom_concepts.php";
import PHPClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/by_clarifaimain_custom_concepts.php";
import PHPConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/by_concept_another_language.php";
import PHPSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/search_by_image_url.php";
import PHPImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/search_by_image_bytes.php";
import PHPInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/by_input_id.php";
import PHPSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/php/search_by_text.php";

import CurlAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/by_clarifaimain_app_concepts.sh";
import CurlCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/by_custom_concepts.sh";
import CurlClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/by_clarifaimain_custom_concepts.sh";
import CurlConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/by_concept_another_language.sh";
import CurlSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/search_by_image_url.sh";
import CurlImageBytes from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/search_by_image_bytes.sh";
import CurlInputID from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/by_input_id.sh";
import CurlSearchText from "!!raw-loader!../../../../code_snippets/api-guide/search/rank/curl/search_by_text.sh";

import CodeRKTXT from "!!raw-loader!../../../../code_snippets/python-sdk/Search/ranks/rk_text.py";
import CodeRKTXTTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/ranks/rankWithText.ts";

import CodeIMURL from "!!raw-loader!../../../../code_snippets/python-sdk/Search/ranks/rk_imurl.py";
import CodeIMURLTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/ranks/rankWithImageUrl.ts";

import PythonSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/python/search_by_concept.py";
import JavaScriptSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/js/search_by_concept.html";
import NodeJSSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/node/search_by_concept.js";
import JavaSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/java/search_by_concept.java";
import PHPSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/php/search_by_concept.php";
import CurlSearchByConcept from "!!raw-loader!../../../../code_snippets/api-guide/concepts/curl/search_by_concept.sh";
import CodeOutputExample from "!!raw-loader!../../../../code_snippets/api-guide/concepts/code_output_examples/search_by_concept.txt";
import JSONOutputExample from "!!raw-loader!../../../../code_snippets/api-guide/concepts/code_output_examples/search_by_concept.js";



## Search by Concepts

Once your inputs are indexed, you can search for them by concepts.

### By Clarifai/main App Concepts

When you add an input, it automatically gets predictions from the workflow in your [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows), which is typically from the [`clarifai/main`](https://clarifai.com/clarifai/main) app, such as the [Universal](https://clarifai.com/clarifai/main/workflows/Universal) workflow. You can search by those predictions.

[Click here](https://docs.clarifai.com/api-guide/concepts/create-get-update#list-concepts) to learn how to get a list of concepts available in the app.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAppConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Custom Concepts

After you have added inputs, annotated the inputs, and trained a custom model, you can search by those concepts.

:::caution train a model

When performing a search with custom concepts, ensure that these concepts are first trained using an `embedding-classifier` model ([transfer-learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) model). Without this training, the search query will result in an error.

Training a model generates embeddings for each custom concept. These concept embeddings are then utilized in the search process.

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCustomConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Clarifai/main and Custom Concepts

You can combine a search to find inputs that have concepts you have supplied as well as predictions from your model.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlClarifaiCustomConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Concept in Another Language

Concepts that have a translation into another language can be searched for in that language, even without having the default language for your app being in that language. This uses the Clarifai's knowledge graph to lookup the translation and then perform the search. 

For example, if your app is in English and you want to search for "dog" in Japanese, then you could search with `language="ja"` and `name="犬"`.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConceptLanguage}</CodeBlock>
</TabItem>

</Tabs>

###  By Using ConceptSearches Endpoint

You can search for concepts by `name`, even across different languages, using the `ConceptSearches` endpoint.


<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPSearchByConcept}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchByConcept}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{CodeOutputExample}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample}</CodeBlock>
</details>



## Search by Visual Similarity

You can use images to search through your collection. The API will return ranked results based on how similar the results are to the image you provided in your query.

### Search by Image URL

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMURL}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeIMURLTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSearchImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeSearchImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSearchImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPSearchImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchImage}</CodeBlock>
</TabItem>

</Tabs>

### Search by Image Bytes

You can also search for an input by bytes, with the bytes being from local storage.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonImageBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImageBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeImageBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaImageBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPImageBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageBytes}</CodeBlock>
</TabItem>

</Tabs>

### By Input ID

If the input has been indexed, we can use the input ID. If there are multiple embeddings \(for example multiple regions\), we will average the embeddings.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonInputID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSInputID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeInputID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaInputID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPInputID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInputID}</CodeBlock>
</TabItem>

</Tabs>

## Search by Text Similarity

You can use texts to search through your collection of texts. The text-to-text search will return ranked results based on how similar the results are to the text you provided in your query.

:::tip 

- To perform text-to-text searches, you could choose a workflow that includes a text embedder and a clusterer, such as the [**Text**](https://clarifai.com/clarifai/main/workflows/Text) workflow, as the [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) for your application.  
- To perform text-to-image searches, you could choose [**Universal**](https://clarifai.com/clarifai/main/workflows/Universal) as the base workflow, which allows you to use texts to search through your collection of images.

:::

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeRKTXT}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeRKTXTTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSearchText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeSearchText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSearchText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPSearchText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchText}</CodeBlock>
</TabItem>

</Tabs>