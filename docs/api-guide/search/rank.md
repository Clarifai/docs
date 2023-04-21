---
description: Search your data based on concepts or visual similarity
sidebar_position: 4
---

# Rank

**Search your data based on concepts or visual similarity**
<hr />

Rank order your search results with the intuitive insights of an AI. Your model can identify concepts in your data and rank search results by how confident it is that a given concept is present. 

You can even rank search results by how similar one input is to another input or region of the input model detected. The search results will return the input and also the annotation, which includes the region.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/by_clarifaimain_app_concepts.py";
import PythonCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/by_custom_concepts.py";
import PythonClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/by_clarifaimain_custom_concepts.py";
import PythonConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/by_concept_another_language.py";
import PythonSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/search_by_image_url.py";
import PythonImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/search_by_image_bytes.py";
import PythonInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/by_input_id.py";
import PythonSearchText from "!!raw-loader!../../../code_snippets/api-guide/search/rank/py/search_by_text.py";

import JSAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/by_clarifaimain_app_concepts.html";
import JSCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/by_custom_concepts.html";
import JSClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/by_clarifaimain_custom_concepts.html";
import JSConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/by_concept_another_language.html";
import JSSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/search_by_image_url.html";
import JSImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/search_by_image_bytes.html";
import JSInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/by_input_id.html";
import JSSearchText from "!!raw-loader!../../../code_snippets/api-guide/search/rank/js/search_by_text.html";

import NodeAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/by_clarifaimain_app_concepts.js";
import NodeCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/by_custom_concepts.js";
import NodeClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/by_clarifaimain_custom_concepts.js";
import NodeConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/by_concept_another_language.js";
import NodeSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/search_by_image_url.js";
import NodeImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/search_by_image_bytes.js";
import NodeInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/by_input_id.js";
import NodeSearchText from "!!raw-loader!../../../code_snippets/api-guide/search/rank/node/search_by_text.js";

import JavaAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/by_clarifaimain_app_concepts.java";
import JavaCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/by_custom_concepts.java";
import JavaClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/by_clarifaimain_custom_concepts.java";
import JavaConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/by_concept_another_language.java";
import JavaSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/search_by_image_url.java";
import JavaImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/search_by_image_bytes.java";
import JavaInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/by_input_id.java";
import JavaSearchText from "!!raw-loader!../../../code_snippets/api-guide/search/rank/java/search_by_text.java";

import CurlAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/by_clarifaimain_app_concepts.sh";
import CurlCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/by_custom_concepts.sh";
import CurlClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/by_clarifaimain_custom_concepts.sh";
import CurlConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/by_concept_another_language.sh";
import CurlSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/search_by_image_url.sh";
import CurlImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/search_by_image_bytes.sh";
import CurlInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/by_input_id.sh";
import CurlSearchText from "!!raw-loader!../../../code_snippets/api-guide/search/rank/curl/search_by_text.sh";

## Search by Concepts

Once your images are indexed, you can search for them by concepts.

### By Clarifai/main App Concepts

When you add an input, it automatically gets predictions from the models in your base workflow, which are typically models from the clarifai/main app, such as the General model. You can search by those predictions.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAppConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Custom Concepts

After you have added inputs, annotated the inputs, and tried a custom model, you can search by those concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCustomConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Clarifai/main and Custom Concepts

You can combine a search to find inputs that have concepts you have supplied as well as predictions from your model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlClarifaiCustomConcepts}</CodeBlock>
</TabItem>

</Tabs>

### By Concept in Another Language

Concepts that have a translation into another language can be searched for in that language, even without having the default language for your app being in that language. This uses the Clarifai's knowledge graph to lookup the translation and then perform the search. 

For example, if your app is in English and you want to search for "dog" in Japanese, then you could search with `language="ja"` and `name="犬"`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConceptLanguage}</CodeBlock>
</TabItem>

</Tabs>

## Search by Visual Similarity

You can use images to search through your collection. The API will return ranked results based on how similar the results are to the image you provided in your query.

### Search by Image URL

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeSearchImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchImage}</CodeBlock>
</TabItem>

</Tabs>

### Search by Image Bytes

You can also search for an input by bytes.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImageBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImageBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImageBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImageBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageBytes}</CodeBlock>
</TabItem>

</Tabs>

### By Input ID

If the input has been indexed, we can use the input ID. If there are multiple embeddings \(for example multiple regions\), we will average the embeddings.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonInputID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSInputID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeInputID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaInputID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInputID}</CodeBlock>
</TabItem>

</Tabs>

## Search by Text Similarity

You can use texts to search through your collection. The API will return ranked results based on how similar the results are to the text you provided in your query.

:::tip 

- Your inputs should be provided as texts. 
- You should choose a workflow that includes a text embedder and a clusterer, such as the Language-Understanding workflow, as the Base Workflow for your application.  

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeSearchText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchText}</CodeBlock>
</TabItem>

</Tabs>