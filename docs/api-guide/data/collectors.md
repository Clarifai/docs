---
description: Capture data for your application.
sidebar_position: 5
---

# Collectors

**Capture inputs used for making predictions in your app**
<hr />

Collector is an ingenious feature that allows you to capture the inputs used for making predictions. After creating a collector, which includes specifying the caller user ID and the source model, a triggering process is established. 

This process ensures that whenever the stated user makes a prediction using the specified model, the inputs used in generating the predictions are automatically ingested and stored in your app.

With collectors, you can automatically pipe in data from production models, gather inputs to feed your models with real-world training data, and unlock many platform training capabilities.

:::tip

You can learn how to create collectors via the UI [here](https://docs.clarifai.com/portal-guide/data/collectors/). 

:::

:::caution feature availability

The Collector feature is currently exclusively available to our Professional and Enterprise users. Learn more [here](https://www.clarifai.com/pricing).

:::


## Collector Parameters

Let's talk about the parameters required to create a collector via the API. 

### Collector ID

Give your collector a useful and descriptive name.

### Description

Provide additional details about your collector.

### Pre-queue Workflow

In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion.

Common pre-queue workflows are designed to:

- Randomly sample inputs
- Filter inputs by metadata
- Filter inputs with a maximum probability below a given threshold
- Filter inputs with a minimum probability above a given threshold
- Filter specific concept probabilities above a given threshold
- Undertake knowledge graph mapping from public General model concepts to a custom model

:::note

At least one (pre-queue or post-queue) workflow ID is required. 

:::

### Post-queue Workflow​

This is the workflow to run after the collector has processed the queued input. This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. 

### Source

These are the details of the source model from which you want to collect data. The collector will automatically post the inputs utilized by the caller for making predictions using the specified model into your app. 

### Post Inputs Key

This is the PAT or the API key to use to enable inputs to be posted to your app. This key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app. 

It should also have the permissions to access the source model used for making the predictions. 

### Caller User ID

This is the ID of the caller who will be making the prediction requests. You can even provide your own user ID. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.py";
import PythonUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.py";
import PythonListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.py";
import PythonGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.py";
import PythonDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.py";

import JSAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.html";
import JSUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.html";
import JSListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.html";
import JSGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.html";
import JSDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.html";

import NodeAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.js";
import NodeUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.js";
import NodeListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.js";
import NodeGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.js";
import NodeDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.js";

import JavaAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.java";
import JavaUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.java";
import JavaListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.java";
import JavaGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.java";
import JavaDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.java";

import PHPAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.php";
import PHPUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.php";
import PHPListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.php";
import PHPGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.php";
import PHPDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.php";

import CurlAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.sh";
import CurlUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.sh";
import CurlListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.sh";
import CurlGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.sh";
import CurlDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.sh";

## Add Collector

Here is how to add a new collector to your application.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSAddCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddCollector}</CodeBlock>
</TabItem>

</Tabs>

## Update Collector

You can update an existing collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-javascript">{JavaUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateCollector}</CodeBlock>
</TabItem>

</Tabs>

## List Collectors

You can list all the collectors in your app. Click [here](https://docs.clarifai.com/api-guide/advanced-topics/pagination/) to learn how to control the page that gets displayed.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListCollectors}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSListCollectors}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListCollectors}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListCollectors}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListCollectors}</CodeBlock>
</TabItem>


<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListCollectors}</CodeBlock>
</TabItem>

</Tabs>

## Get Collector

You can return the details of a certain collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSGetCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPGetCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetCollector}</CodeBlock>
</TabItem>

</Tabs>

## Delete Collector

You can delete a collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteCollector}</CodeBlock>
</TabItem>

</Tabs>

