---
description: Learn how to evaluate models via the API
sidebar_position: 1
toc_max_heading_level: 4
---

# Evaluate via API

**Learn how to evaluate models via the API**
<hr />

Model evaluation is the process of assessing how well a model performs on a given dataset. The Clarifai API provides several ways to evaluate a model.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeEval1 from "!!raw-loader!../../../../code_snippets/python-sdk/model-train-eval/model_eval1.py";
import CodeEval2 from "!!raw-loader!../../../../code_snippets/python-sdk/model-train-eval/model_eval2.py";

import CodeOutputEval1 from "!!raw-loader!../../../../code_snippets/python-sdk/model-train-eval/outputs/model_eval1.txt";
import CodeOutputEval2 from "!!raw-loader!../../../../code_snippets/python-sdk/model-train-eval/outputs/model_eval2.txt";


import PythonEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.py";
import JSEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.html";
import NodeEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.js";
import JavaEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.java";
import PHPEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.php";
import CurlEvaluateModel from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model.sh";

import PythonEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.py";
import JSEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.html";
import NodeEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.js";
import JavaEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.java";
import PHPEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.php";
import CurlEvaluateModelVersion from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/evaluate_model_version.sh";

import PythonInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.py";
import JSInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.html";
import NodeInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.js";
import JavaInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.java";
import PHPInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.php";
import CurlInterpretEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/interpret_evaluations.sh";

import PythonListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.py";
import JSListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.html";
import NodeListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.js";
import JavaListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.java";
import PHPListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.php";
import CurlListEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_evaluations.sh";

import PythonGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.py";
import JSGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.html";
import NodeGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.js";
import JavaGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.java";
import PHPGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.php";
import CurlGetModelVersionEvaluation from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/get_model_version_evaluation.sh";

import PythonListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.py";
import JSListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.html";
import NodeListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.js";
import JavaListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.java";
import PHPListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.php";
import CurlListModelVersionEvaluations from "!!raw-loader!../../../../code_snippets/api-guide/evaluate/list_model_version_evaluations.sh";

import OutputExample1 from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/interpret_evaluations_1.js";

## Running Evaluation

### Model.Evaluate 

You can obtain evaluation metrics for each dataset split (e.g., training, validation, or test) individually. The `model.evaluate()` method runs the evaluation using the dataset you pass as a parameter.

Each evaluation is assigned a unique `eval_id`, allowing you to perform and track multiple evaluations across different datasets for deeper analysis.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeEval1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputEval1}</CodeBlock>
</details>

### EvalResultCompare

The Python SDK also includes a feature called `EvalResultCompare`, which allows you to compare the results from different evaluations. This is useful for analyzing how model performance varies across different datasets or parameter settings.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeEval2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputEval2}</CodeBlock>
</details>

### PostModelVersionEvaluations

:::tip

If evaluating an `embedding-classifier` model type, you need to set `use_kfold` to `false` in the `eval_info.params` of the evaluation request. Here is an example:
`params.update({"dataset_id": DATASET_ID, "use_kfold": False})`

:::

Below is an example of how you would use the `PostModelVersionEvaluations` method to run an evaluation on a specific version of a custom model.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonEvaluateModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSEvaluateModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeEvaluateModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaEvaluateModelVersion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPEvaluateModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlEvaluateModelVersion}</CodeBlock>
</TabItem>

</Tabs>

### PostEvaluations

Below is an example of how you would use the `PostEvaluations` method to run an evaluation on a specific version of a custom model. The method allows you to choose models and datasets from different apps that you have access to.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonEvaluateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSEvaluateModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeEvaluateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaEvaluateModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPEvaluateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlEvaluateModel}</CodeBlock>
</TabItem>

</Tabs>


## Interpreting Evaluations

Model evaluation takes some time — depending on the amount of data the model has. After the process is complete, you could get the results and use them to assess the performance of your model. 

### Get Evaluation Results

Below are examples of how you would use different methods to get the evaluation results. 

#### Get Evaluation

Get the evaluation results by using the `evaluation_id` returned after starting an evaluation.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
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


#### List Evaluations

List the evaluation results of all models in your app. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListEvaluations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListEvaluations}</CodeBlock>
</TabItem>

</Tabs>

#### Get Model Version Evaluation

Get the evaluation results of a specific version of a custom model by using the `evaluation_id` returned after starting an evaluation.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetModelVersionEvaluation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelVersionEvaluation}</CodeBlock>
</TabItem>

</Tabs>

#### List Model Version Evaluations

List the evaluation results of a model version in your app.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListModelVersionEvaluations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelVersionEvaluations}</CodeBlock>
</TabItem>

</Tabs>

