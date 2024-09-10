---
description: Translate complex data into numerical vector representations 
sidebar_position: 7
---

# Embeddings

**Translate complex data into numerical vector representations**
<hr />

**Input**: Text, images, or audio 

**Output**: Embeddings

Embedding models, often referred to as embeddings or embedding vectors, allow you to convert complex data into vectors while preserving meaningful relationships between them. 

Embeddings are a powerful tool in the world of machine learning, acting as a bridge between complex data and the mathematical world that machine learning models operate in. 

Data lives in its own world. For example, text is a sequence of words, images are a grid of pixels, and audio is a wave of sound. These are all very different from the numbers that machine learning models use.

Embedding models take these complex data types and transform them into numerical vectors. These vectors are like condensed summaries of the data, capturing its important aspects in a way that the model can understand. 

By using these vectors, machine learning models can now reason about the data, compare different pieces of information, and perform tasks like classification, similarity search, and prediction.


:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePython1 from "!!raw-loader!../../../code_snippets/api-guide/predict/python/embeddings.py";
import CodeJavaScript1 from "!!raw-loader!../../../code_snippets/api-guide/predict/js/embeddings.html"
import CodeNodeJS1 from "!!raw-loader!../../../code_snippets/api-guide/predict/node/embeddings.js";
import CodeJava1 from "!!raw-loader!../../../code_snippets/api-guide/predict/java/embeddings.java";
import CodePHP1 from "!!raw-loader!../../../code_snippets/api-guide/predict/php/embeddings.php";
import CodeCurl1 from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/embeddings.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/embeddings.txt";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/embeddings.js";

## Text Embeddings

Below is an example of how you would create text embeddings using the [Cohere Embed-v3](https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0) model. 

The Cohere Embed-v3 model requires an `input_type` parameter to be specified, which can be set using one of the following values:

- `search_document` (default): For texts (documents) intended to be stored in a vector database.
- `search_query`: For search queries to find the most relevant documents in a vector database.
- `classification`: If the embeddings are used as input for a classification system.
- `clustering`: If the embeddings are used for text clustering.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePython1}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScript1}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJS1}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJava1}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHP1}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurl1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>