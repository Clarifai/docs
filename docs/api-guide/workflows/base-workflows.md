---
description: Index your data and provide your app with a default knowledge base
pagination_next: null
sidebar_position: 4
---

# Base Workflow

**Index your data and provide your app with a default knowledge base**
<hr />

The base workflow acts as the default knowledge base for your app and provides the basic structure for indexing your data. It gives you a "head start" when working with your data — by pre-indexing your inputs for search and by providing a default embedding for your custom models.

[Click here](https://docs.clarifai.com/portal-guide/workflows/base-workflows) to learn more about the base workflow functionality. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.py";
import PythonUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.py";

import JSCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.html";
import JSUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.html";

import NodeCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.js";
import NodeUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.js";

import JavaCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.java";
import JavaUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.java";

import PHPCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.php";
import PHPUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.php";

import CurlCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.sh";
import CurlUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.sh";

Let's demonstrate how you can update the default workflow for your app. 

## Create a Workflow 

You may need to start by creating a workflow for your app. 

Below is an example of how to create a workflow with a custom model. Note that you can also create a workflow using the models available publicly on the Clarifai Community platform. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

## Update Your Base Workflow

After creating a workflow, you can then use it to update the default workflow for your app. You can also use a publicly available workflow to update your default workflow. 

Below is an example of how to update your base workflow.

:::note

Updating the base workflow will re-index your app, processing all inputs through the new base workflow. This may take some time, and could incur costs. You could avoid the costs by deleting all your inputs before updating the base workflow.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateWorkflow}</CodeBlock>
</TabItem>

<!--
<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateWorkflow}</CodeBlock>
</TabItem>
-->

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateWorkflow}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateWorkflow}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateWorkflow}</CodeBlock>
</TabItem>

</Tabs>
