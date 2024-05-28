---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeIMT from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/model_train.py";
import CodeEval1 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/model_eval1.py";
import CodeEval2 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/model_eval2.py";

import CodeOutputEval1 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/outputs/model_eval1.txt";
import CodeOutputEval2 from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/outputs/model_eval2.txt";


# Model Training And Evaluation Overview
**Get a brief overview about model training and evaluation using Clarifai SDKs**
<hr />

## Model Training 

Model training is the process of feeding data to an algorithm and iteratively adjusting its internal parameters to enable it to make accurate predictions on unseen data. After defining the model architecture, you can initiate the training process using the Clarifai SDKs. During training, the SDK provides valuable feedback on the model's progress, allowing you to monitor metrics such as accuracy and loss. The structure followed during model training is app creation -> data upload -> model creation -> setting training configuration -> model training.

Click [here](https://docs.clarifai.com/python-sdk/Model-Training-Tutorial/) to learn more about model training.

:::tip
Clone [this](https://github.com/Clarifai/examples.git ) repository to get the dataset used for training.
:::
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/tc_imt.png" width="700" height="700" />
</details>

## Model Evaluation

Model evaluation is the process by which we monitor the model's performance on the dataset. The Clarifai SDKs allows you to evaluate the model in two ways. Firstly, you can receive evaluation metrics for each dataset split separately.  The `Mode.evaluate()` method will run the evaluation on the model by using the dataset passed as a parameter. Each evaluation is marked by `eval_id`. This allows users to run multiple evaluations using different datasets.

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