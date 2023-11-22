---
description: Make predictions with your workflows.
sidebar_position: 1
---

# Workflow Predict

**Make predictions with your workflows**
<hr />

The Workflow Predict API allows you make predictions using one or more models, whether they are Clarifai's pre-built models or custom creations, all in a single API call.

The maximum number of inputs that can be processed at once with any given workflow is 32.

After you're set up, you can initiate predictions under a specific workflow by utilizing the `POST /v2/workflows/WORKFLOW_ID_HERE/results` endpoint, where `WORKFLOW_ID_HERE` corresponds to the unique ID you assigned to your workflow.

When crafting the request body, its layout remains consistent with the usual approach for making a prediction call. The response body will include a `results` object, with each sub-object representing a response from the models, maintaining the same order as specified in the workflow you configured.

You can also use the [Workflow Builder](https://docs.clarifai.com/portal-guide/workflows/workflow-builder) in the Clarifai Portal to build your workflows and see the results of their predictions on a given input.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/workflow_predict.py";
import NodeWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/workflow_predict.js";
import JavaWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/workflow_predict.java";
import CurlWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/workflow_predict.sh";
import PHPWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/workflow_predict.php";

import ExampleCodeWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/example_workflow_predict.txt";
import ExampleJSONWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/example_workflow_predict.js";

## Predict

:::tip

If you want to make a predict call with an external workflow that is outside the scope of your app, you need to use a PAT while specifying the `app_id` and the `user_id` associated with the workflow you want to use. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredict}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredict}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredict}</CodeBlock>
</details>
