---
description: Use Clarifai and LangChain to create a vector store and perform searches
sidebar_position: 3
---

# Vector Store

**Use Clarifai and LangChain to create a vector store and perform searches**
<hr />

Clarifai offers a powerful, built-in [vector database](https://www.clarifai.com/blog/using-clarifais-native-vector-database) within its AI platform. It is designed to store and retrieve large amounts of unstructured data quickly and accurately. 

The Clarifai platform uses an embedding model to automatically index any piece of data uploaded to it. It creates high-dimensional vectors that are kept in the vector store, from where you can efficiently search for and retrieve data based on these vectors.

Let’s illustrate how you can use Clarifai and LangChain to [retrieve text data](https://docs.clarifai.com/portal-guide/psearch/text-search) based on their content and semantic similarity.

### Prerequisites

- Python development environment
- Get a PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get your Clarifai’s user ID
- Get the ID of the text app where the text data will be uploaded. _Ensure your text app has the appropriate base workflow for indexing your text documents, such as the Language-Understanding workflow_
- Install the [Clarifai Python SDK](https://docs.clarifai.com/python-sdk/sdk-overview) by running `pip install clarifai`
- Install LangChain by running `pip install langchain`

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::
  
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Langchain4 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_4.py";
import Langchain5 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_5.py";
import Langchain6 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_6.py";

import OutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_4.txt";
import OutputExample5 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_5.txt";
import OutputExample6 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_6.txt";

## Similarity Search on Uploaded Texts

You can create a Clarifai vector store from a list of texts. You can upload each text with its respective metadata to a Clarifai application.
You can then use your Clarifai application to perform a semantic search and find contextually relevant texts.

Here is an example.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain4}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample4}</CodeBlock>
</details>

You can also leverage metadata filters to enhance the filtering capabilities within an app.

```python
# This one will limit the similarity query to only the texts that have key of "source" matching value of "book 1"
 book1_similar_docs = clarifai_vector_db.similarity_search("I would love to see you", filter={"source": "book 1"})

 # You can also use lists in the input's metadata and then select things that match an item in the list. This is useful for categories like below:
 book_category_similar_docs = clarifai_vector_db.similarity_search("I would love to see you", filter={"category": ["books"]})
```

## Similarity Search on Uploaded Web Documents

You can create a Clarifai vector store from a list of web documents. You can upload each document with its respective metadata to a Clarifai application.

You can then use your Clarifai application to perform a semantic search and find contextually relevant documents.

Here is an example.

:::note

We’ll use the [`unstructured` library](https://python.langchain.com/docs/integrations/providers/unstructured) to extract clean text and prepare the raw source documents for downstream tasks. You can install it by running `pip install unstructured`.

:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain5}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample5}</CodeBlock>
</details>

## Similarity Search on Existing Applications

Most users are likely to have already added data to their Clarifai applications before engaging with LangChain.

In this example, we will leverage the existing data within an application to perform a semantic search and find relevant documents.
 
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain6}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample6}</CodeBlock>
</details>

:::info

You can explore the [LangChain documentation](https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.clarifai.Clarifai.html#langchain.vectorstores.clarifai.Clarifai) to learn more on how to use the framework with the Clarifai vector store.

:::