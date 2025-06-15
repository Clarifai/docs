import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeInit1 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/init1.py";
import CodeInit2 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/init2.py";
import CodeDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/di.py";
import CodeChat from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/chat.py";

import CodeOutputDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/outputs/di.txt";
import CodeOutputChat from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/s3/outputs/chat.txt";





# Use RAG With Unstructured.io
**Learn how to use RAG with Unstructured.io**
<hr />
RAG systems are a powerful combination of two techniques: information retrieval and text generation. When you ask a question, the system searches for related details (context) and then leverages that context to generate a response using text generation methods. Using Unstructured.io we can transform the data into a format suitable for RAG. The Clarifai platform provides various LLMs that can be used for text generation inside RAG. Hence by integrating Clarifai with Unstructured.io, you can build RAG applications with ease.


## Prerequisites

* Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token [here](https://docs.clarifai.com/python-sdk/sdk-overview/).

:::note
Guide to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
:::
```python
import os
os.environ['CLARIFAI_PAT'] ="YOUR_PAT"
```
* Install the required packages.

```
! pip install "unstructured[clarifai]" #make sure the unstructured version is 0.13 or above
! pip install "unstructured[s3]" #since our source is S3
! pip install httpx
```

## Initialization

The first part of creating an app based on Unstructured.io is to set up the data we are going to ingest into the app. The data we are going to use will be stored in the s3 bucket. To access the data using Unstructured.io, we have to provide some AWS access keys.

:::info
Click [here](https://medium.com/@shamnad.p.s/how-to-create-an-s3-bucket-and-aws-access-key-id-and-secret-access-key-for-accessing-it-5653b6e54337) to learn how to get the s3 access keys. 
:::

```python
access_key='YOUR_S3_ACCESS_KEYS'
secret_access='YOUR_S3_SECRET_ACCESS_KEYS'
```
After setting up the access keys for the s3 bucket, let’s import some necessary libraries.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit1}</CodeBlock>
</TabItem>
</Tabs>

Next, we have to write a function that will configure the target Clarifai app where the ingested documents will be loaded,
<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit2}</CodeBlock>
</TabItem>
</Tabs>

## Data Ingestion

In data ingestion, there are two important concepts Source Connector and Destination Connector. For our use case the Source Connector will fetch the data from the S3 bucket and the Destination Connector will send the transformed data to the Clarifai app.

Click [here](https://unstructured-io.github.io/unstructured/ingest/index.html) to learn more about Ingestion.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDI}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputDI}</CodeBlock>
</details>

## Chat

In the final step, we are going to perform information retrieval using RAG based on the data we ingested from S3 to the Clarifai app using Unstructured.io. You can use a workflow with a RAG prompter for initialising RAG. After successfully creating a workflow, you can get the URL from the Clarifai portal. After creating the rag object using workflow URL you can start retrieving text from the data we ingested using Unstructured.io.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat}</CodeBlock>
</details>