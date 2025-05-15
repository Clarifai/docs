---
description: Manage workflows
sidebar_position: 1
toc_max_heading_level: 4
---

# Manage Workflows

**Manage workflows**
<hr />


## Manage via the UI

### Edit Workflow

After creating your workflow, you can edit it at any time by navigating to its individual page and clicking the **Edit workflow** button in the upper-right section.

This allows you to make changes easily whenever needed.


![alt_text](/img/community_2/input_nodes_edit_workflow_2.png)


For example, to add a text-to-audio node to your workflow, first locate it in the left sidebar. Drag the node and connect it to the preceding text-to-text node. Next, use the search box on the right side of the page to select the specific model you want for the text-to-audio conversion.



![alt_text](/img/community_2/input_nodes_edit_workflow_1.png)


Once you've made your changes, click the **Save as new version** button to save the updated workflow under a new version — without exiting the workflow editor.


:::note

* You can easily switch between different versions by selecting the respective version ID from the left sidebar in the workflow editor.
* Clicking the **Update Workflow** button creates a new workflow version and exits the workflow editor, redirecting to the workflow's main page.
:::



![alt_text](/img/community_2/input_nodes_edit_workflow_3.png)



:::tip

* You can add a maximum of 20 nodes in a single workflow.
* Ensure all connections between nodes are correctly set to avoid errors during execution.
:::



## Manage via the API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import PatchWorkflow from "!!raw-loader!../../../code_snippets/python-sdk/workflows/patch_workflow.py";
import CodeLW from "!!raw-loader!../../../code_snippets/python-sdk/workflows/list_workflows.py";
import CodeDW from "!!raw-loader!../../../code_snippets/python-sdk/workflows/delete_workflow.py";
import CodeExport from "!!raw-loader!../../../code_snippets/python-sdk/workflows/export.py";
import CodeOutputLW from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/list_workflows.txt";
import CodeOutputDW from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/delete_workflow.txt";

import PythonGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.py";
import PythonGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.py";
import PythonPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.py";
import PythonDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.py";
import PythonDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.py";

import JSGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.html";
import JSGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.html";
import JSPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.html";
import JSDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.html";
import JSDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.html";

import NodeGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.js";
import NodeGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.js";
import NodePatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.js";
import NodeDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.js";
import NodeDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.js";

import JavaGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.java";
import JavaGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.java";
import JavaPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.java";
import JavaDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.java";
import JavaDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.java";

import PHPGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.php";
import PHPGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.php";
import PHPPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.php";
import PHPDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.php";
import PHPDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.php";

import CurlGetWorkflowsApp from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflows_in_app.sh";
import CurlGetWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/get_workflow_specific_id.sh";
import CurlPatchWorkflow from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/patch_workflow.sh";
import CurlDeleteWorkflowID from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_workflow_id.sh";
import CurlDeleteAllWorkflows from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/delete_all_workflows.sh";



### Get

#### Get all Workflows in an App

You can return all custom workflows in your app.

:::tip

If you want to get a list of the workflows not within the scope of your app, you need to use your PAT while specifying the `user_id` of their owner and the `app_id` of the application that you’re accessing. For example, to get Clarifai's workflows in the `main` app, you need to use your PAT while specifying Clarifai's `user_id` as "clarifai" and `app_id` as "main" in the request.

:::

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeLW}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetWorkflowsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetWorkflowsApp}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputLW}</CodeBlock>
</details>

#### Get a Workflow by a Specific ID

You can return information about a specific workflow.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-javascript">{JavaGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetWorkflowID}</CodeBlock>
</TabItem>

</Tabs>

### Update

After creating a workflow, you can perform patch operations on it by merging, removing, or overwriting data. By default, all actions support overwriting, with specific behaviors for lists of objects.

- The `merge` action updates an existing `key:value` pair with `key:new_value` or appends to an existing list. For dictionaries, it merges objects that share a matching `id` field.
- The `remove` action is only used to delete the workflow's cover image on the platform UI.
- The `overwrite` action fully replaces an existing object with a new one.

#### Patch Workflow's Models

You can change a workflow; that is, change the models of which the workflow consists.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodePatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPPatchWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPatchWorkflow}</CodeBlock>
</TabItem>

</Tabs>

#### Patch YAML Configuration, Description, etc

Below is an example of performing patch operations on a workflow, where the YAML configuration is updated, and changes are made to its description, notes, and image URL. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PatchWorkflow}</CodeBlock>
</TabItem>
</Tabs>

### Delete

:::caution

Be certain that you want to delete a particular workflow as the operation cannot be undone.

:::

#### Delete Workflow by ID

You can delete a specific workflow.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDW}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteWorkflowID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteWorkflowID}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDW}</CodeBlock>
</details>

#### Delete all Workflows

You can delete all custom workflows.

:::tip

Instead of `delete_all`, you can specify a list of workflow IDs to be deleted, using the `ids` field.

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteAllWorkflows}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAllWorkflows}</CodeBlock>
</TabItem>

</Tabs>

                            
### Export workflow

You can easily export your entire workflow as a YAML file. This local copy enables convenient editing and offers the flexibility to create, reuse, or manage workflows with ease.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeExport}</CodeBlock>
</TabItem>
</Tabs>

