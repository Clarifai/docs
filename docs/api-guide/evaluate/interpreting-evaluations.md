---
description: Learn to interpret model evaluations.
sidebar_position: 1
---

# Interpreting Evaluations

**Learn to interpret model evaluations**
<hr />


## Get Evaluation Results

Below is an example of how you would get the evaluation results of a specific version of a custom model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.py";
import JSthonInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.html";
import NodeInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.js";
import JavaInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.java";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSthonInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeInterpretEvaluations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaInterpretEvaluations}</CodeBlock>
</TabItem>

</Tabs>

:::tip

You can also learn how to interpret a model's evaluation results on the Portal [here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations). 

:::