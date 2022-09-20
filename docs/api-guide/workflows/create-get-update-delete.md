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

import CurlCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.sh";
import CurlWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.sh";
import CurlGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.sh";
import CurlGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.sh";
import CurlPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.sh";
import CurlDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.sh";
import CurlDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.sh";

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
    <CodeBlock className="language-bash">{CurlCreate}</CodeBlock>
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

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredict}</CodeBlock>
</TabItem>

<!--
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
-->

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
    <CodeBlock className="language-bash">{CurlGetWorkflowsApp}</CodeBlock>
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
    <CodeBlock className="language-javascript">{JavaGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetWorkflowID}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPatchWorkflow}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteWorkflowID}</CodeBlock>
</TabItem>

</Tabs>

### Delete all Workflows

You can delete all custom workflows.

:::tip

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
    <CodeBlock className="language-java">{JavaDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAllWorkflows}</CodeBlock>
</TabItem>

</Tabs>

