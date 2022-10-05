---
description: Learn to interpret model evaluations.
sidebar_position: 1
---

# Interpreting Evaluations

**Learn to interpret model evaluations**
<hr />


## Get Evaluation Results

Below is an example of how you would get the evaluation results of a specific version of a custom model. 

You can use the results to assess the performance of your model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.py";
import JSthonInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.html";
import NodeInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.js";
import JavaInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.java";
import CurlInterpretEvaluations from "!!raw-loader!../../../code_snippets/api-guide/evaluate/interpret_evaluations.sh";

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

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInterpretEvaluations}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
status {
  code: SUCCESS
  description: "Ok"
  req_id: "c0168837e14b654f4487ab1846660ad9"
}
model_version {
  id: "4fa241e368534224a07be38955a16a98"
  created_at {
    seconds: 1659633219
    nanos: 356537000
  }
  status {
    code: MODEL_TRAINED
    description: "Model is trained and ready"
  }
  active_concept_count: 1
  metrics {
    status {
      code: MODEL_EVALUATED
      description: "Model was successfully evaluated."
    }
    summary {
      macro_avg_roc_auc: 0.75
      macro_std_roc_auc: 0.25
      macro_avg_f1_score: 1.0
      macro_avg_precision: 1.0
      macro_avg_recall: 0.5
    }
  }
  total_input_count: 24
  completed_at {
    seconds: 1659633222
    nanos: 16763000
  }
  visibility {
    gettable: PRIVATE
  }
  app_id: "deep-learning"
  user_id: "ei2leoz3s3iy"
  metadata {
  }
}
```

</details>

:::tip

You can also learn how to interpret a model's evaluation results on the Portal [here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations). 

:::