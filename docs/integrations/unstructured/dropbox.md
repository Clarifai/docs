
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeInit1 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/init1.py";
import CodeInit2 from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/init2.py";
import CodeDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/di.py";
import CodeChat from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/chat.py";


import CodeOutputDI from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/outputs/di.txt";
import CodeOutputChat from "!!raw-loader!../../../code_snippets/python-sdk/unstructured/dropbox/outputs/chat.txt";


# Chat With Dropbox Using Unstructured.io
**Learn how to chat with data from Dropbox**
<hr />

[Dropbox](https://www.dropbox.com/official-teams-page?_tk=paid_sem_goog_biz_b&_camp=1018334849&_kw=dropbox|e&_ad=666300362351||c&gad_source=1&gclid=CjwKCAjw1K-zBhBIEiwAWeCOFw939qj3aTgFRDagZZw0ugD4sLAMy1AeGE_ReqKsEyd5dgMn96KX8RoCzJ4QAvD_BwE) is a cloud storage service that allows users to store, sync, and share files online. It provides seamless file synchronization across devices, enabling access to updated files from anywhere with an internet connection. Users can easily share files and folders with others, even if they don't have a Dropbox account.  Using Dropbox as a source connector you can now ingest data to a Clarifai app and then leverage all of Clarifai platform's abilities. In this example, we are going to chat with our data ingested into the Clarifai app using RAG.


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
! pip install "unstructured[dropbox]"
```



## Initialization

First, let us setup the data we are going to ingest into the app. The data we are going to use will be stored in Dropbox. To access the data using Unstructured.io, we have to provide Dropbox access token.

:::info
Setup dropbox access token. Refer [this](https://developers.dropbox.com/oauth-guide) page for instructions.
:::

```python
DROPBOX_ACCESS_TOKEN="YOUR_ACCESS_TOKEN"
```

After setting up the access tokens, let’s import some necessary libraries.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit1}</CodeBlock>
</TabItem>
</Tabs>

Next, we will have to write a function to set up the ingestion configurations required to upload the data into our app in the Clarifai platform.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInit2}</CodeBlock>
</TabItem>
</Tabs>

## Data Ingestion

In data ingestion, there are two important concepts Source Connector and Destination Connector. For our use case the Source Connector will fetch the data from Dropbox and the Destination Connector will send the transformed data to the Clarifai app.

Click [here](https://unstructured-io.github.io/unstructured/ingest/index.html) to learn more about Ingestion.

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

In the final step, we are going to perform information retrieval using RAG based on the data we ingested from Dropbox to the Clarifai app using Unstructured.io. You can use a workflow with a RAG prompter for initialising RAG. After successfully creating a workflow, you can get the URL from the Clarifai portal. After creating the rag object using workflow URL you can start retrieving text from the data we ingested using Unstructured.io.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeChat}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputChat}</CodeBlock>
</details>

