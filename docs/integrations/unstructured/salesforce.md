---
description: Learn how to ingest email messages from Salesforce
pagination_next: null
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeInit1 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/init1.py";
import CodeInit2 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/init2.py";
import CodeDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/di.py";
import CodeChat1 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/chat1.py";
import CodeChat2 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/chat2.py";



import CodeOutputDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/outputs/di.txt";
import CodeOutputChat1 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/outputs/chat1.txt";
import CodeOutputChat2 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/salesforce/outputs/chat2.txt";


# Ingest Email Messages From Salesforce Using Unstructured.io

**Learn how to ingest email messages from Salesforce**
<hr />

[Salesforce](https://www.salesforce.com/in/) is a cloud-based customer relationship management (CRM) platform that assists businesses in managing their relationships and interactions with customers and prospects. It offers a comprehensive suite of tools including Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and Analytics Cloud, among others, to streamline various business processes. In Salesforce, email messages play a crucial role in customer communication and interaction tracking. The platform integrates seamlessly with popular email services like Outlook and Gmail through Salesforce Inbox, allowing users to log emails directly into Salesforce. Additionally, Salesforce supports the creation of email templates, enabling consistent and personalized communication using merge fields from Salesforce records.  In this tutorial, we are going to ingest the email messages from Salesforce to the Clarifai app and then use LLM to classify and summarize emails.


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
! pip install "unstructured[clarifai]" 
! pip install "unstructured[salesforce]"
```

* Setup JWT authorization in Salesforce. Refer [this](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm) page for instructions.

## Initialization

The data we are going to ingest into our app is the body of the email messages in Salesforce. Since we have already set the JWT authorization for Salesforce let’s import some required libraries,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit1}</CodeBlock>
</TabItem>
</Tabs>

Next we will have to write a function to setup the ingestion configurations required to upload the data into our app in the Clarifai platform.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit2}</CodeBlock>
</TabItem>
</Tabs>


## Data Ingestion

In data ingestion, there are two important concepts, Source Connector and Destination Connector. For our use case the Source Connector will fetch the data from Salesforce and the Destination Connector will send the transformed data to the Clarifai app.

Click [here](https://unstructured-io.github.io/unstructured/ingest/index.html) to learn more about Ingestion.

:::info
In `SalesforceAccessConfig`, the category is set as `EmailMessage` for this task. Unstructured.io also supports other fields like `Account`, `Case`, `Campaign`, and `Lead` .
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

## Chat

In the final step, we are going to chat with the data using RAG. You can use a workflow with a RAG prompter for initialising RAG. After successfully creating a workflow, you can get the URL from the Clarifai portal. After creating the rag object using workflow URL you can start retrieving text from the data we ingested using Unstructured.io. 


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat1}</CodeBlock>
</details>

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat2}</CodeBlock>
</details>