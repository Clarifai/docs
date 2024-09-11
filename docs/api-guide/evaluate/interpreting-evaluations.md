---
description: Learn to interpret model evaluations.
sidebar_position: 1
---

# Interpreting Evaluations

**Learn to interpret model evaluations**
<hr />

Model evaluation takes some time — depending on the amount of data the model has. After the process is complete, you could get the results and use them to assess the performance of your model. 

## Get Evaluation Results

Below are examples of how you would use different methods to get the evaluation results. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.py";
import JSInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.html";
import NodeInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.js";
import JavaInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.java";
import PHPInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.php";
import CurlInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.sh";

import PythonListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.py";
import JSListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.html";
import NodeListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.js";
import JavaListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.java";
import PHPListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.php";
import CurlListEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_evaluations.sh";

import PythonGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.py";
import JSGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.html";
import NodeGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.js";
import JavaGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.java";
import PHPGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.php";
import CurlGetModelVersionEvaluation from "!!raw-loader!../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.sh";

import PythonListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.py";
import JSListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.html";
import NodeListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.js";
import JavaListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.java";
import PHPListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.php";
import CurlListModelVersionEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.sh";

import OutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/interpret_evaluations_1.js";

### Get Evaluation

Get the evaluation results by using the `evaluation_id` returned after starting an evaluation.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInterpretEvaluations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample1}</CodeBlock>
</details>


### List Evaluations

List the evaluation results of all models in your app. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListEvaluations}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Version Evaluation

Get the evaluation results of a specific version of a custom model by using the `evaluation_id` returned after starting an evaluation.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelVersionEvaluation}</CodeBlock>
</TabItem>

</Tabs>

### List Model Version Evaluations

List the evaluation results of a model version in your app.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelVersionEvaluations}</CodeBlock>
</TabItem>

</Tabs>

:::tip

You can also learn how to interpret a model's evaluation results via the Portal [here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations). 

:::