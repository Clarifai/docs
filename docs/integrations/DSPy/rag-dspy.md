---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeInit from "!!raw-loader!../../../code_snippets/python-sdk/dspy/init.py";
import CodeData from "!!raw-loader!../../../code_snippets/python-sdk/dspy/data.py";
import CodeDsp from "!!raw-loader!../../../code_snippets/python-sdk/dspy/dspy.py";
import CodeTrun from "!!raw-loader!../../../code_snippets/python-sdk/dspy/trun.py";
import CodeGA from "!!raw-loader!../../../code_snippets/python-sdk/dspy/ga.py";
import CodeRAG from "!!raw-loader!../../../code_snippets/python-sdk/dspy/rag.py";
import CodeChat from "!!raw-loader!../../../code_snippets/python-sdk/dspy/chat.py";


import CodeOutputData from "!!raw-loader!../../../code_snippets/python-sdk/dspy/outputs/data.txt";
import CodeOutputTrun from "!!raw-loader!../../../code_snippets/python-sdk/dspy/outputs/trun.txt";
import CodeOutputChat from "!!raw-loader!../../../code_snippets/python-sdk/dspy/outputs/chat.txt";


# Building RAG with DSPy

**Learn how to build RAG with DSPy and  Clarifai Python SDK**
<hr />

RAG systems combine two key functionalities: information retrieval and text generation. When you ask a question, RAG first retrieves relevant information (context) from a source like a document or database. Then, it uses that context to generate a well-informed and accurate answer. DSPy acts as your mission control for building RAG systems. It provides essential tools like modules and signatures to design and execute your program efficiently.
Click [here](https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation) to learn more about RAG.

## Prerequisites

* Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token [here](https://docs.clarifai.com/python-sdk/sdk-overview/).

:::note
Guide to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
:::

* Clone the Clarifai Examples repository to get the data files required for this example.
```
!git clone https://github.com/Clarifai/examples.git
%cd /content/examples/
```
* Install the required packages.
```
!pip install clarifai
!pip install langchain
!pip install dspy-ai
```

## Initialization

The first part of creating a DSPy-Clarifai application is to set some initial fields. The variables should be configured correctly for authentication and model access.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit}</CodeBlock>
</TabItem>
</Tabs>

Here we are opting for llama2-70b-chat as the LLM Model. You can choose different LLM Models for the DSPy from Clarifai Community [Models](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24).


## Data Ingestion

To use Clarifai as a retriever, the straightforward approach involves ingesting documents directly into the Clarifai app, which functions as your vector database. This enables easy retrieval of similar documents based on their vectors. To streamline this ingestion process, we've integrated the Clarifai vector database into our workflow. For this task, we will be using the Vehicle Repair Manual as data for DSPy. 

:::info
Langchain is required only for the data ingestion step, which you can skip if data has been already ingested through alternate methods.
:::

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeData}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputData}</CodeBlock>
</details>



## Setup DSPy

In the next step we are going to initialize DSPy with an LLM model from the Clarifai platform, this showcases the flexibility Clarifai offers. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDsp}</CodeBlock>
</TabItem>
</Tabs>

Before we move on to the next section let’s do a test run,

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrun}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputTrun}</CodeBlock>
</details>


## RAG with DSPy

To construct a RAG module in DSPy effectively, you first need to define its signature. The signature explains the input and output fields succinctly, mapping from "question" to "answer" in a clear and intuitive manner. Once the signature is established, you proceed to create the module itself. A module in DSPy is where you put the signature into action, defining a specific functionality that compiles and generates responses based on the given queries. To begin, you construct a signature class, detailing the required input fields and the corresponding output fields. It's essential to provide comprehensive docstrings and descriptions within the class to ensure that the DSPy signature understands the context thoroughly and can compile the best prompt for the given use case. By following these steps, you can create robust and effective modules within DSPy, enabling seamless processing and response generation for various natural language processing tasks.

The ```GenerateAnswer``` class is given below,
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeGA}</CodeBlock>
</TabItem>
</Tabs>

The ```RAG``` class is given below,
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeRAG}</CodeBlock>
</TabItem>
</Tabs>

## Chat

In the final step, we are going to perform information retrieval using a Clarifai retriever based on factual evidence.
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat}</CodeBlock>
</details>