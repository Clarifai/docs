---
description: Manage your Mesh Workflows.
sidebar_position: 3
---

# Setting Up Mesh Workflows

**Manage your Mesh Workflows**
<hr />


:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.py";
import PythonWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.py";
import PythonGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.py";
import PythonGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.py";
import PythonPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.py";
import PythonDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.py";
import PythonDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.py";

import JSCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.html";
import JSWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.html";
import JSGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.html";
import JSGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.html";
import JSPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.html";
import JSDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.html";
import JSDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.html";

import NodeCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.js";
import NodeWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.js";
import NodeGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.js";
import NodeGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.js";
import NodePatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.js";
import NodeDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.js";
import NodeDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.js";

import JavaCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.java";
import JavaWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.java";
import JavaGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.java";
import JavaGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.java";
import JavaPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.java";
import JavaDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.java";
import JavaDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.java";

## Create

To create a new custom workflow, specify a list of model IDs that are to be included in the workflow. Since a model can have several versions, each model ID also requires a specific model version ID.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreate}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreate}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# The first model is the Clarifai's Food model, and the second the Clarifai's General model.

curl -X POST 'https://api.clarifai.com/v2/workflows' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY' \
    --data-raw '{
      "workflows": [{
        "id": "my-custom-workflow",
        "nodes": [
          {
            "id": "food-concepts",
            "model": {
              "id": "bd367be194cf45149e75f01d59f77ba7",
              "model_version": {
                "id": "dfebc169854e429086aceb8368662641"
              }
            }
          },
          {
            "id": "general-concepts",
            "model": {
              "id": "aaa03c23b3724a16a56b629203edc62c",
              "model_version": {
                "id": "aa9ca48295b37401f8af92ad1af0d91d"
              }
            }
          }
        ]
      }]
    }'
```
</TabItem>

</Tabs>

## Workflow Predict

You can predict using a workflow. The response will contain the predictions each model in the workflow returns for the input.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

var response = client.PostModelOutputs(
    new PostModelOutputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "excaliburne",
            AppId = "moderation-test"
        },
        ModelId = "aaa03c23b3724a16a56b629203edc62c", // <- This is the general model_id
        Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/dog2.jpeg"
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);

Console.WriteLine("Predicted concepts:");
foreach (var concept in response.Outputs[0].Data.Concepts)
{
    Console.WriteLine($"{concept.Name, 15} {concept.Value:0.00}");
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H 'authorization: Key YOUR_API_KEY' \
  -H 'content-type: application/json' \
  -d '{
    "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ]
}'\
https://api.clarifai.com/v2/workflows/{YOUR_WORKFLOW_ID}/results
```
</TabItem>

</Tabs>

## Get

### Get all Workflows in an App

You can return all custom workflows in your app.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/workflows' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

</Tabs>

### Get a Workflow by a Specific ID

You can return information about a specific workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleWorkflowResponse getWorkflowResponse = stub.getWorkflow(
    GetWorkflowRequest.newBuilder()
        .setWorkflowId("food-and-general")
        .build()
);

if (getWorkflowResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get workflow failed, status: " + getWorkflowResponse.getStatus());
}

Workflow workflow = getWorkflowResponse.getWorkflow();

System.out.println("The workflow consists of these models:");
for (WorkflowNode workflowNode : workflow.getNodesList()) {
    Model model = workflowNode.getModel();
    System.out.println(model.getId());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/workflows/my-custom-workflow' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

</Tabs>

## Update

### Patch Workflow

You can change a workflow; that is, change the models of which the workflow consists.

The possible actions are `overwrite`, `merge`, and `remove`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiWorkflowResponse patchWorkflowsResponse = stub.patchWorkflows(
    PatchWorkflowsRequest.newBuilder()
        .setAction("overwrite")
        .addWorkflows(
            Workflow.newBuilder()
                .setId("my-custom-workflow")
                .addNodes(
                    WorkflowNode.newBuilder()
                        .setId("travel-concepts")
                        .setModel(
                            Model.newBuilder()
                                .setId("ccc28c313d69466f836ab83287a54ed9")
                                .setModelVersion(ModelVersion.newBuilder().setId("cce28c313d69466f836ab83287a54ed9"))
                        )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                        .setId("nsfw-concepts")
                        .setModel(
                            Model.newBuilder()
                                .setId("ccc76d86d2004ed1a38ba0cf39ecb4b1")
                                .setModelVersion(ModelVersion.newBuilder().setId("cc76a92beaeb4d8495a58ba197998158"))
                        )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                        .setId("wedding-concepts")
                        .setModel(
                            Model.newBuilder()
                                .setId("c386b7a870114f4a87477c0824499348")
                                .setModelVersion(ModelVersion.newBuilder().setId("787cc9a002164250800598d36b072384"))
                        )
                )
        ).build()
);

if (patchWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch workflows failed, status: " + patchWorkflowsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Supported actions are: overwrite, merge, remove.

curl -X PATCH 'https://api.clarifai.com/v2/workflows' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY' \
    --data-raw '{
        "action": "overwrite",
        "workflows": [
            {
                "id": "my-custom-workflow",
                "nodes": [
                    {
                        "id": "travel-concepts",
                        "model": {
                            "id": "ccc28c313d69466f836ab83287a54ed9",
                            "model_version": {
                                "id": "cce28c313d69466f836ab83287a54ed9"
                            }
                        }
                    },
                    {
                        "id": "nsfw-concepts",
                        "model": {
                            "id": "ccc76d86d2004ed1a38ba0cf39ecb4b1",
                            "model_version": {
                                "id": "cc76a92beaeb4d8495a58ba197998158"
                            }
                        }
                    },
                    {
                        "id": "wedding-concepts",
                        "model": {
                            "id": "c386b7a870114f4a87477c0824499348",
                            "model_version": {
                                "id": "787cc9a002164250800598d36b072384"
                            }
                        }
                    }
                ]
            }
        ]
    }'
```
</TabItem>

</Tabs>

## Delete

### Delete Workflow by ID

You can delete a specific workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteWorkflowResponse = stub.deleteWorkflow(
    DeleteWorkflowRequest.newBuilder()
        .setWorkflowId("my-custom-workflow")
        .build()
);

if (deleteWorkflowResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete workflow failed, status: " + deleteWorkflowResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE 'https://api.clarifai.com/v2/workflows/my-custom-workflow \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

</Tabs>

### Delete all Workflows

You can delete all custom workflows.

:::note
Instead of `delete_all`, you can specify a list of workflow IDs to be deleted, using the `ids` field.
::::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteWorkflowsResponse = stub.deleteWorkflows(
    DeleteWorkflowsRequest.newBuilder()
        .setDeleteAll(true)
        .build()
);

if (deleteWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete workflows failed, status: " + deleteWorkflowsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE 'https://api.clarifai.com/v2/workflows' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY' \
    --data-raw '{
        "delete_all": true
    }'
```
</TabItem>

</Tabs>

