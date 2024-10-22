---
description: Using Clarifai models in Embedchain
pagination_next: null
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeInit from "!!raw-loader!../../../code_snippets/python-sdk/embedchain/init.py";
import CodeDI from "!!raw-loader!../../../code_snippets/python-sdk/embedchain/di.py";
import CodeQuery from "!!raw-loader!../../../code_snippets/python-sdk/embedchain/query.py";




import CodeOutputDI from "!!raw-loader!../../../code_snippets/python-sdk/embedchain/outputs/di.txt";
import CodeOutputQuery from "!!raw-loader!../../../code_snippets/python-sdk/embedchain/outputs/query.txt";



# Using Clarifai LLMs And Models In Embedchain
**Using Clarifai models in Embedchain**
<hr />

In this example, we will explore ways to create a RAG agent with LLMs and embedders from Clarifai using Embedchain.


## Prerequisites

* Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token [here](https://docs.clarifai.com/python-sdk/sdk-overview/).
:::note
Guide to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
:::

* Install the required packages.
```
!pip install embedchain[clarifai]
```

## Initialisation

Embedchain allows users to create personalised AI apps using the `App` method. It also allows users to create and manage instances of bots (applications) that leverage custom knowledge bases for answering queries. You can also add data from different sources such as text, documents, websites, images, and videos into your app. 

Click [here](https://docs.embedchain.ai/api-reference/app/overview) to learn more about apps in embedchain.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit}</CodeBlock>
</TabItem>
</Tabs>

This code initializes an application instance from the EmbedChain framework with specific configurations for a large language model (LLM) and an embedder, both sourced from Clarifai. The `App.from_config` method is used to set up this instance. The LLM configuration specifies the use of the `mistral-7B-Instruct` model hosted by Clarifai, with additional parameters such as a temperature setting of 0.5 to control response randomness and a maximum token limit of 1000 for generated outputs. The embedder configuration uses the `text-embedding-ada` model from Clarifai for embedding text data. 


## Data Ingestion

In EmbedChain you can add data and its embedding from various sources into the application's knowledge base, making it accessible for querying by the bots. This process involves extracting content from different data types, converting it into embeddings using specified models, and storing these embeddings in the knowledge base. For our example, we are going to use an Image URL.

Click [here](https://docs.embedchain.ai/api-reference/app/add) to learn more about data ingestion in embedchain.

:::info
By default, embedchain uses `chromadb` as vectorstore for your app.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDI}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputDI}</CodeBlock>
</details>

## Query

Users can now run queries on the data they ingested using the `app.query()` method.

Refer to [this](https://docs.embedchain.ai/api-reference/app/query) page to know more about `app.query()`.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeQuery}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputQuery}</CodeBlock>
</details>