---
description: Evaluate your LLM applications using DeepEval and Clarifai
sidebar_position: 8
---

# DeepEval

**Evaluate your LLM applications using DeepEval and Clarifai**
<hr />

[DeepEval](https://docs.confident-ai.com/) is an open-source evaluation framework for LLM applications. It provides a rich set of metrics to evaluate hallucination, answer relevancy, contextual precision, faithfulness, toxicity, and other qualities that matter in production LLM systems.

By integrating Clarifai with DeepEval, you can use Clarifai-hosted models as both the models being evaluated and as judge models that score evaluation metrics — giving you a fully self-contained evaluation pipeline on the Clarifai platform.

## Prerequisites

Before getting started, make sure you have the following:

- A [Clarifai account](https://clarifai.com/signup) with a valid [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat)
- Python 3.8 or later

## Installation

You can install the following necessary packages:

- `deepeval` — The DeepEval framework, which provides evaluation metrics and test case utilities.
- `openai` — The OpenAI client library used for the OpenAI-compatible connection to Clarifai.

This is the combined command for installing them:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import DeepEvalWrapper from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/deepeval_wrapper.py";
import DeepEvalEval from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/deepeval_eval.py";
import DeepEvalOutput from "!!raw-loader!../../code_snippets/python-sdk/model-train-eval/outputs/deepeval_output.txt";

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install deepeval openai </CodeBlock>
</TabItem>
</Tabs>

## Create a Clarifai LLM Wrapper

DeepEval requires a custom model class that conforms to its `DeepEvalBaseLLM` interface. The following wrapper connects to any Clarifai-hosted model via the [OpenAI-compatible endpoint](https://docs.clarifai.com/compute/inference/open-ai):

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{DeepEvalWrapper}</CodeBlock>
</TabItem>
</Tabs>

:::tip

You can use any model from the [Clarifai Community](https://clarifai.com/explore) as the judge model by changing the `model_url` parameter to any publicly accessible Clarifai model URL.

:::

## Run an Evaluation

Once the wrapper is in place, you can define evaluation metrics and run them against test cases. The example below uses `GEval` — a flexible, criteria-based metric — to evaluate the factual correctness of a model's response:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{DeepEvalEval}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{DeepEvalOutput}</CodeBlock>
</details>

The `metric.score` is a float between 0 and 1, and `metric.reason` provides a natural-language explanation of the score produced by the judge model.

## Supported Metrics

The following DeepEval metrics are compatible with Clarifai models as the judge:

| Metric | What It Measures |
|---|---|
| **Answer Relevancy** | How relevant the generated answer is to the input question |
| **Faithfulness** | Whether the response is grounded in the provided context without hallucinating |
| **Contextual Precision** | Whether the retrieved context ranks relevant items higher than irrelevant ones |
| **Contextual Recall** | How much of the expected output is supported by the retrieved context |
| **Toxicity** | Presence of harmful, offensive, or inappropriate content in responses |
| **Bias** | Whether the response reflects unfair bias toward a group or viewpoint |
| **GEval** | A customizable metric scored against user-defined criteria and evaluation steps |

:::info

For a complete walkthrough including knowledge bases and RAG evaluation, visit the [Clarifai Examples Repository](https://github.com/Clarifai/examples/tree/main/Integrations/DeepEval).

:::
