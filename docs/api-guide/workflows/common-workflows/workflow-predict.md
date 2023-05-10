---
description: Make model predictions in your workflows.
sidebar_position: 1
---

# Workflow Predict

**Make model predictions in your workflows**
<hr />

The Workflow Predict API allows you to predict using one or more model\(s\), regardless of them being Clarifai's or custom-built models, within a single API call. The max number of inputs processed at once with any given workflow is 32.

After you're set up, you can predict under a workflow using the `POST /v2/workflows/WORKFLOW_ID_HERE/results` endpoint. Your `WORKFLOW_ID_HERE` is whatever you set as your workflow ID. 

For the request body, nothing changes with how you would normally do a predict call. In the response body, you will see a `results` object and each object will be the response from the models in the same ordering from the workflow you set up.

You can also use the Explorer feature in the Clarifai Portal to see the results of your workflow's predictions on a given input.

![Image showing the Portal&apos;s workflow prediction results](/img/preview-workflows-new.png)

<p align="center">
Image showing the Portal's workflow prediction results
</p>

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
