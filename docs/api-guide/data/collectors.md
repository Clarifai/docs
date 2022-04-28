---
description: Capture data for your application.
sidebar_position: 4
---

# Collectors

**Capture data for your application**
<hr />

Collectors capture input data for your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning. 

Collectors are available with Essential and Enterprise plans to help you manage data ingestion at scale.

You can create app-level collectors to monitor specific models and specify sampling rules for triggering data ingestion. Collectors can only collect data from apps where you are the app owner.

## Collector Parameters

### Collector ID

Give your collector a useful and descriptive name.

### Description

Provide additional details about your collector.

### Pre-queue workflow

In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion. 

Common pre-queue workflows are designed to:

* Randomly sample inputs
* Filter inputs by metadata
* Filter inputs with a maximum probability below a given threshold
* Filter inputs with a minimum probability above a given threshold
* Filter specific concept probabilities above a given threshold
* Knowledge graph mapping from public General model concepts to a custom model

At least one \(pre-queue or post-queue\) workflow ID is required. The input to this workflow is going to be the OUTPUT of the model. We recommend that you use fast and light-weight models in it as it will effect the speed of the predictions being made.

### Post Inputs key

Select the API key that you would like to use to allow new inputs to be posted to your app. This is the post-queue workflow ID of the workflow to run to after the collector is processing the queued input. This API key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app.

This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. If the workflow output has any field that is non-empty, then it will be passed on to POST /inputs to the destination app. At least one \(pre-queue or post-queue\) workflow ID is required.

### Source

Select the model that you would like to collect data from, and the collector will automatically post the new inputs to your app. Simply enter your model name, or model ID number. When the user predicts an input against this model, the input is going to be collected.

You need to specify the app ID and user ID where the model is located. If using a publicly available model, the model's user and app ID should be `clarifai` and `main`, respectively. Otherwise, the IDs should belong to the user who created the model. You also need to specify an API key ID where the inputs are going to be added.

See also [Auto Annotation walkthrough](../workflows/common-workflows/auto-annotation-walkthrough).

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.py";
import PythonUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.py";
import PythonListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.py";
import PythonGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.py";
import PythonDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.py";

import NodeAddCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/add_collector.js";
import NodeUpdateCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/update_collector.js";
import NodeListCollectors from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/list_collectors.js";
import NodeGetCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/get_collector.js";
import NodeDeleteCollector from "!!raw-loader!../../../code_snippets/api-guide/data/collectors/delete_collector.js";

## Add Collector

Add a new collector to your application.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiCollectorResponse postCollectorsResponse = stub.postCollectors(
    PostCollectorsRequest.newBuilder()
        .addCollectors(
            Collector.newBuilder()
                .setId("{YOUR_COLLECTOR_ID}")
                .setDescription("{YOUR_COLLECTOR_DESCRIPTION}")
                .setPreQueueWorkflowId("{YOUR_PRE_QUEUE_WORKFLOW_ID}")
                .setPostQueueWorkflowId("{YOUR_POST_QUEUE_WORKFLOW_ID}")
                .setCollectorSource(
                    CollectorSource.newBuilder()
                        .setApiPostModelOutputsCollectorSource(
                            APIPostModelOutputsCollectorSource.newBuilder()
                                .setModelUserId("{YOUR_MODEL_USER_ID}")
                                .setModelAppId("{YOUR_MODEL_APP_ID}")
                                .setModelId("{YOUR_MODEL_ID}")
                                .setModelVersionId("{YOUR_MODEL_VERSION_ID}")
                                .setPostInputsKeyId("{YOUR_API_KEY}")
                        )
                )
        )
        .build()
);

if (postCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post collectors failed, status: " + postCollectorsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/collectors' \
  -H 'Authorization: Key YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "collectors": [
        {
            "id": "{YOUR_COLLECTOR_ID}",
            "description": "{YOUR_COLLECTOR_DESCRIPTION}",
            "pre_queue_workflow_id": "{YOUR_PRE_QUEUE_WORKFLOW_ID}",
            "post_queue_workflow_id": "{YOUR_POST_QUEUE_WORKFLOW_ID}",
            "collector_source": {
                "api_post_model_outputs_collector_source": {
                    "model_user_id": "{YOUR_MODEL_USER_ID]",
                    "model_app_id": "{YOUR_MODEL_APP_ID}",
                    "model_id": "{YOUR_MODEL_ID}",
                    "model_version_id": "{YOUR_MODEL_VERSION_ID}",
                    "post_inputs_key_id": "{YOUR_API_KEY}"
                }
            }
       }
    ]
}'
```
</TabItem>
</Tabs>

## Update Collector

Update an existing collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiCollectorResponse patchCollectorsResponse = stub.patchCollectors(
    PatchCollectorsRequest.newBuilder()
        .addCollectors(
            Collector.newBuilder()
                .setId("{YOUR_COLLECTOR_ID}")
                .setDescription("{A_NEW_DESCRIPTION}")
                .setPreQueueWorkflowId("{A_NEW_WORKFLOW_ID}")
        )
        .build()
);

if (patchCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch collectors failed, status: " + patchCollectorsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH 'https://api-dev.clarifai.com/v2/collectors' \
  -H 'Authorization: Key YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "action": "overwrite",
    "collectors": [
        {
            "id": "{YOUR_COLLECTOR_ID}",
            "description": "{A_NEW_DESCRIPTION}",
            "pre_queue_workflow_id": "{A_NEW_WORKFLOW_ID}"
       }
    ]
}'
```
</TabItem>
</Tabs>

## List Collectors

List all the collectors. See [Pagination](../advanced-topics/pagination) on how to control which page gets displayed.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListCollectors}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListCollectors}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiCollectorResponse listCollectorsResponse = stub.listCollectors(
    ListCollectorsRequest.newBuilder()
        .build()
);

if (listCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List collectors failed, status: " + listCollectorsResponse.getStatus());
}

for (Collector collector : listCollectorsResponse.getCollectorsList()) {
    System.out.println(collector);
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/collectors' \
  -H 'Authorization: Key YOUR_API_KEY' \
  -H 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get Collector

Return details of a certain collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

SingleCollectorResponse getCollectorResponse = stub.getCollector(
    GetCollectorRequest.newBuilder()
        .setCollectorId("{YOUR_COLLECTOR_ID}")
        .build()
);

if (getCollectorResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get collector failed, status: " + getCollectorResponse.getStatus());
}

System.out.println(getCollectorResponse.getCollector());
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/collectors/{YOUR_COLLECTOR_ID}' \
  -H 'Authorization: Key YOUR_API_KEY' \
  -H 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Delete Collector

Delete a collector.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```bash
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

BaseResponse deleteCollectorsResponse = stub.deleteCollectors(
    DeleteCollectorsRequest.newBuilder()
        .addIds("{YOUR_COLLECTOR_ID}")
        .build()
);

if (deleteCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete collectors failed, status: " + deleteCollectorsResponse.getStatus());
}
```
</TabItem>
</Tabs>

