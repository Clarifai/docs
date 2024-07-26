---
sidebar_position: 9
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeInit from "!!raw-loader!../../code_snippets/python-sdk/rag/ini.py";
import CodeInitTS from "!!raw-loader!../../code_snippets/python-sdk/rag/initialization.ts";

import CodeDU from "!!raw-loader!../../code_snippets/python-sdk/rag/du.py";
import CodeDUTS from "!!raw-loader!../../code_snippets/python-sdk/rag/datasetUpload.ts";


import CodeChat from "!!raw-loader!../../code_snippets/python-sdk/rag/chat.py";
import CodeChatTS from "!!raw-loader!../../code_snippets/python-sdk/rag/chat.ts";

import CodeChat2 from "!!raw-loader!../../code_snippets/python-sdk/rag/chat2.py";
import CodeWF1 from "!!raw-loader!../../code_snippets/python-sdk/rag/workflow1.py";
import CodeWF2 from "!!raw-loader!../../code_snippets/python-sdk/rag/workflow2.py";


import CodeOutputDU from "!!raw-loader!../../code_snippets/python-sdk/rag/outputs/du.txt";
import CodeOutputChat from "!!raw-loader!../../code_snippets/python-sdk/rag/outputs/chat.txt";
import CodeOutputChat2 from "!!raw-loader!../../code_snippets/python-sdk/rag/outputs/chat2.txt";
import CodeOutputWF1 from "!!raw-loader!../../code_snippets/python-sdk/rag/outputs/wf1.txt";
import CodeOutputWF2 from "!!raw-loader!../../code_snippets/python-sdk/rag/outputs/wf2.txt";

# Building RAG Applications

**Learn how to build a RAG application using Clarifai SDKs**
<hr />

In the realm of text generation, Retrieval Augmented Generation (RAG) steps up the game for Large Language Models (LLMs) by fusing information retrieval capabilities with text generation skills, tackling key drawbacks of LLMs. When presented with a query, RAG fetches relevant information from an external knowledge base, which increases precision and contextual appropriateness through the integration of this retrieved data into the input. The Clarifai SDKs allows you to create RAG-based applications with ease by reducing the number of steps in the process.

Click [here](https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation) to learn more about RAG.


## Prerequisites



* Setting up the Clarifai SDKs along with PAT. Refer to the installation and configuration with the PAT token [here](https://docs.clarifai.com/python-sdk/sdk-overview/).

:::note
Guide to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
:::


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

## Initialising RAG

The first part of creating a RAG-based application includes setting up the RAG object. Just by setting up the RAG object, Clarifai SDKs will automatically create the app along with a prompter model and workflow containing the RAG prompter and the LLM Model.

:::tip
You can set a specific version of LLM by using `https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct/model_version/version_id`.
:::
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit}</CodeBlock>
    <details>
  <summary>Image Output</summary>
   <img src="/img/python-sdk/rag_init.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeInitTS}</CodeBlock>
</TabItem>
</Tabs>




Here we are opting for Mistral-7B-Instruct as the LLM Model. You can choose different LLM Models for the RAG agent from Clarifai Community [Models](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24). The Clarifai SDKs also allows you to set parameters like min_score,max_results and prompt_template  for retrieving relevant data.

The Clarifai SDKs also enables users to initialize RAG using a workflow you have created in the portal which should contain a RAG prompter.
There are two ways you can set up RAG using workflows.
In the first method, you can provide the workflow URL as a parameter,

:::info
You should only use `RAG(workflow_url)` or `RAG(workflow)` when a rag workflow already exists in your app.
:::
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeWF1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputWF1}</CodeBlock>
</details>


The next option is to pass `workflow_id` parameter in `RAG.setup()`, this will create a new workflow in your app with the defined parameters.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeWF2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputWF2}</CodeBlock>
</details>

## Dataset Upload

The next step involves uploading the dataset. In this example, we are using a Vehicle Repair Manual as data for the RAG. You can use the RAG object we created earlier for the data upload process. Now comes the perks of using Clarifai SDKs. When you upload the data the Clarifai platform will automatically generate embeddings for the inputs and store them in the vector database which makes it ready for retrieval seconds after uploading data.

:::info
Supported formats for upload are Doc, PDF, Text, Folder Containing PDF, Doc and URL of PDF,Doc, Text files.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
    <details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputDU}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeDUTS}</CodeBlock>
</TabItem>
</Tabs>


## Chat

In the final step, we are going to perform information retrieval using RAG based on the data we provided.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat}</CodeBlock>
    <details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeChatTS}</CodeBlock>
</TabItem>
</Tabs>



Now let's ask questions that are related to the answer we received before so that we can be sure the RAG has understood the context properly.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat2}</CodeBlock>
</details>

