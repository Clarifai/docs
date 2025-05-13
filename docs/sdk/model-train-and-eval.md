---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeEval1 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/model_eval1.py";
import CodeEval2 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/model_eval2.py";

import CodeOutputEval1 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/outputs/model_eval1.txt";
import CodeOutputEval2 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/outputs/model_eval2.txt";


# Model Training And Evaluation Overview
**Get a brief overview about model training and evaluation using Clarifai Python SDK**
<hr />



## Model Evaluation

Model evaluation is the process by which we monitor the model's performance on the dataset. The Clarifai Python SDK allows you to evaluate the model in two ways. Firstly, you can receive evaluation metrics for each dataset split separately.  The `Mode.evaluate()` method will run the evaluation on the model by using the dataset passed as a parameter. Each evaluation is marked by `eval_id`. This allows users to run multiple evaluations using different datasets.

:::info
Evaluation is currently supported for the following model types: Embedding Classifier, Text Classifier, Visual Classifier, and Visual Detector.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeEval1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputEval1}</CodeBlock>
</details>

The SDK also has a feature called `EvalResultCompare`. This method allows users to compare the outputs from different evaluations.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeEval2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputEval2}</CodeBlock>
</details>