---
description: Learn how to use the Clarifai SDKs
sidebar_position: 2
---

# Build RAG Apps

**Use the Clarifai SDKs to build RAG Applications**
<hr />


In the field of text generation, Retrieval-Augmented Generation (RAG) enhances the capabilities of Large Language Models (LLMs) by combining information retrieval with natural language generation. 

This approach addresses key limitations of LLMs by retrieving relevant data from external knowledge bases in real time, enriching responses with increased precision and contextual relevance.

Clarifai SDKs streamline the creation of RAG-based applications by minimizing the complexity of integrating retrieval and generation steps. This makes it easier for developers to build powerful, context-aware AI solutions with improved accuracy and reliability.

Click [here](https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation) to learn more about RAG.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeInit from "!!raw-loader!../../../code_snippets/python-sdk/rag/ini.py";
import CodeInitTS from "!!raw-loader!../../../code_snippets/python-sdk/rag/initialization.ts";

import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/rag/du.py";
import CodeDUTS from "!!raw-loader!../../../code_snippets/python-sdk/rag/datasetUpload.ts";


import CodeChat from "!!raw-loader!../../../code_snippets/python-sdk/rag/chat.py";
import CodeChatTS from "!!raw-loader!../../../code_snippets/python-sdk/rag/chat.ts";

import CodeChat2 from "!!raw-loader!../../../code_snippets/python-sdk/rag/chat2.py";
import CodeWF1 from "!!raw-loader!../../../code_snippets/python-sdk/rag/workflow1.py";
import CodeWF2 from "!!raw-loader!../../../code_snippets/python-sdk/rag/workflow2.py";


import CodeOutputDU from "!!raw-loader!../../../code_snippets/python-sdk/rag/outputs/du.txt";
import CodeOutputChat from "!!raw-loader!../../../code_snippets/python-sdk/rag/outputs/chat.txt";
import CodeOutputChat2 from "!!raw-loader!../../../code_snippets/python-sdk/rag/outputs/chat2.txt";
import CodeOutputWF1 from "!!raw-loader!../../../code_snippets/python-sdk/rag/outputs/wf1.txt";
import CodeOutputWF2 from "!!raw-loader!../../../code_snippets/python-sdk/rag/outputs/wf2.txt";

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

## Prerequisites



* You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).


* Clone the Clarifai Examples repository to get the data files required for the building RAG.

```
!git clone https://github.com/Clarifai/examples.git
%cd /content/examples/
```
:::info
To run on a local system use: cd examples/ 
:::

:::note
Before you proceed install ```llama_index``` using ```pip install llama-index-core==0.10.24```
:::

## Initializing RAG

The first step in building a RAG-based application is initializing the RAG object. You can do this in three ways:

- **Using User ID** – Automatically creates a new app.

- **Using App URL** – Initializes RAG with an existing app and its data.

- **Using Workflow URL or ID** – Uses a specific workflow that includes the RAG Prompter and LLM model for seamless integration.

:::tip

You can set a specific version of LLM like this: `https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct/model_version/version_id`.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeInit}</CodeBlock>
    <details>
  <summary>Image Output</summary>
   <img src="/img/python-sdk/rag_init.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeInitTS}</CodeBlock>
</TabItem>
</Tabs>

We're using Mistral-7B-Instruct as the LLM for this RAG setup, but you can choose from various LLMs available in the Clarifai Community models [platform](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24). The Clarifai SDKs let you configure parameters like `min_score`, `max_results`, and `prompt_template` to fine-tune data retrieval.

You can also initialize RAG using a workflow created in the Clarifai Portal that includes a RAG Prompter. There are two ways to set this up — one is by providing the workflow URL as a parameter.

:::info

You should only use `RAG(workflow_url)` or `RAG(workflow)` when a rag workflow already exists in your app.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeWF1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputWF1}</CodeBlock>
</details>


The next option is to pass `workflow_id` parameter in `RAG.setup()`. This will create a new workflow in your app with the defined parameters.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeWF2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputWF2}</CodeBlock>
</details>

## Dataset Upload

Next, upload your dataset—here, we're using a Vehicle Repair Manual as the RAG source. You can use the previously created RAG object to handle the upload. One key advantage of the Clarifai SDKs is that embeddings are automatically generated and stored in the vector database during upload, making the data instantly ready for retrieval.

:::info

Supported formats for upload include: DOC, PDF, plain text files, folders containing PDFs or DOCs, and URLs pointing to PDF, DOC, or text files.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
    <details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputDU}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeDUTS}</CodeBlock>
</TabItem>
</Tabs>


## Chat

In the final step, we are going to perform information retrieval using RAG based on the data we provided.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeChat}</CodeBlock>
    <details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeChatTS}</CodeBlock>
</TabItem>
</Tabs>



Now let's ask questions that are related to the answer we received before so that we can be sure the RAG has understood the context properly.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeChat2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat2}</CodeBlock>
</details>

