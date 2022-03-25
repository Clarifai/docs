---
description: Manage your Mesh Workflows.
sidebar_position: 3
---

# Setting Up Mesh Workflows

**Manage your Mesh Workflows**
<hr />


:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

## Create

To create a new custom workflow, specify a list of model IDs that are to be included in the workflow. Since a model can have several versions, each model ID also requires a specific model version ID.

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


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(
    PostWorkflowsRequest.newBuilder().addWorkflows(
        Workflow.newBuilder()
            .setId("my-custom-workflow")
            .addNodes(
                WorkflowNode.newBuilder()
                    .setId("food-concepts")
                    .setModel(
                        Model.newBuilder()
                            .setId("bd367be194cf45149e75f01d59f77ba7")
                            .setModelVersion(ModelVersion.newBuilder().setId("dfebc169854e429086aceb8368662641"))
                    )
            )
            .addNodes(
                WorkflowNode.newBuilder()
                    .setId("general-concepts")
                    .setModel(
                        Model.newBuilder()
                            .setId("aaa03c23b3724a16a56b629203edc62c")
                            .setModelVersion(ModelVersion.newBuilder().setId("aa9ca48295b37401f8af92ad1af0d91d"))
                    )
            )
    ).build()
);

if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostWorkflows(
    {
        workflows: [
            {
                id: "my-custom-workflow",
                nodes: [
                    {
                        id: "food-concepts",
                        model: {
                            id: "bd367be194cf45149e75f01d59f77ba7",
                            model_version: {
                                id: "dfebc169854e429086aceb8368662641"
                            }
                        }
                    },
                    {
                        id: "general-concepts",
                        model: {
                            id: "aaa03c23b3724a16a56b629203edc62c",
                            model_version: {
                                id: "aa9ca48295b37401f8af92ad1af0d91d"
                            }
                        }
                    },
                ]
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);
```
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
// The first model is the Clarifai's Food model, and the second the Clarifai's General model.

const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
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
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/workflows`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Workflow Predict

You can predict using a workflow. The response will contain the predictions each model in the workflow returns for the input.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

PostWorkflowResultsResponse postWorkflowResultsResponse = stub.postWorkflowResults(
    PostWorkflowResultsRequest.newBuilder()
        .setWorkflowId("{YOUR_WORKFLOW_ID}")
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl(
                        "https://samples.clarifai.com/metro-north.jpg"
                    )
                )
            )
        )
        .build()
);

if (postWorkflowResultsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post workflow results failed, status: " + postWorkflowResultsResponse.getStatus());
}

// We'll get one WorkflowResult for each input we used above. Because of one input, we have here
// one WorkflowResult.
WorkflowResult results = postWorkflowResultsResponse.getResults(0);

// Each model we have in the workflow will produce one output.
for (Output output : results.getOutputsList()) {
    Model model = output.getModel();

    System.out.println("Predicted concepts for the model `" + model.getName() + "`:");
    for (Concept concept : output.getData().getConceptsList()) {
        System.out.printf("\t%s %.2f%n", concept.getName(), concept.getValue());
    }
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostWorkflowResults(
    {
        workflow_id: "{YOUR_WORKFLOW_ID}",
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post workflow results failed, status: " + response.status.description);
        }

        // We'll get one WorkflowResult for each input we used above. Because of one input, we have here
        // one WorkflowResult.
        const results = response.results[0];

        // Each model we have in the workflow will produce one output.
        for (const output of results.outputs) {
            const model = output.model;

            console.log("Predicted concepts for the model `" + model.name + "`:");
            for (const concept of output.data.concepts) {
                console.log("\t" + concept.name + " " + concept.value);
            }
        }
    }
);
```
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const workflowID = '{YOUR_WORKFLOW_ID}'

const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/workflows/${workflowID}/results`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiWorkflowResponse listWorkflowsResponse = stub.listWorkflows(ListWorkflowsRequest.newBuilder().build());

if (listWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List workflows failed, status: " + listWorkflowsResponse.getStatus());
}

for (Workflow workflow : listWorkflowsResponse.getWorkflowsList()) {
    System.out.println("The workflow " + workflow.getId() + " consists of these models:");
    for (WorkflowNode workflowNode : workflow.getNodesList()) {
        Model model = workflowNode.getModel();
        System.out.println(model.getId());
    }
    System.out.println();
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListWorkflows(
    {},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List workflows failed, status: " + response.status.description);
        }

        for (const workflow of response.workflows) {
            console.log("The workflow " + workflow.id + " consists of these models:");
            for (const workflowNode of workflow.nodes) {
                const model = workflowNode.model;
                console.log(model.id);
            }
            console.log();
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/workflows' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/workflows`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get a Workflow by a Specific ID

You can return information about a specific workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetWorkflowID}</CodeBlock>
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetWorkflow(
    {
        workflow_id: "my-custom-workflow"
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get workflow failed, status: " + response.status.description);
        }

        const workflow = response.workflow;

        console.log("The workflow consists of these models:");
        for (const workflowNode of workflow.nodes) {
            const model = workflowNode.model;
            console.log(model.id);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/workflows/my-custom-workflow' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const workflowId = '{YOUR_WORKFLOW_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/workflows/${workflowId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchWorkflows(
    {
        action: "overwrite",
        workflows: [
            {
                id: "my-custom-workflow",
                nodes: [
                    {
                        id: "travel-concepts",
                        model: {
                            id: "ccc28c313d69466f836ab83287a54ed9",
                            model_version: {
                                id: "cce28c313d69466f836ab83287a54ed9"
                            }
                        }
                    },
                    {
                        id: "nsfw-concepts",
                        model: {
                            id: "ccc76d86d2004ed1a38ba0cf39ecb4b1",
                            model_version: {
                                id: "cc76a92beaeb4d8495a58ba197998158"
                            }
                        }
                    },
                    {
                        id: "wedding-concepts",
                        model: {
                            id: "c386b7a870114f4a87477c0824499348",
                            model_version: {
                                id: "787cc9a002164250800598d36b072384"
                            }
                        }
                    },
                ]
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch workflows failed, status: " + response.status.description);
        }
    }
);
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript

const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
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
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/workflows`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteWorkflow(
    {
        workflow_id: "my-custom-workflow",
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete workflow failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE 'https://api.clarifai.com/v2/workflows/my-custom-workflow \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const workflowId = '{YOUR_WORKFLOW_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/workflows/${workflowId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteWorkflows(
    {
        delete_all: true
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete workflows failed, status: " + response.status.description);
        }
    }
);
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

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "delete_all": true
});

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/workflows`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

