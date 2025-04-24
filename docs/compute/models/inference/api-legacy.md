---
description: Perform predictions using our older method
sidebar_position: 2
---

# Legacy Inference via API

**Perform predictions using our older method**
<hr />

The legacy inference technique uses our previous API structure and is best suited for models built using the older techniques.

While this method remains functional, we recommend transitioning to the [new inference method](api.md) for improved efficiency, scalability, and access to the latest features.

:::info

Before making a prediction, ensure that your model has been deployed, [as mentioned previously](README.mdx). Otherwise, the prediction will default to the `Clarifai Shared` deployment type. 

:::



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO19 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";


import OutputExample1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_1.txt";
import OutputExample2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_2.txt";
import OutputExample3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_3.txt";

## Unary-Unary Predict Call

This is the simplest type of prediction. In this method, a single input is sent to the model, and it returns a single response. This is ideal for tasks where a quick, non-streaming prediction is required, such as classifying an image.

It supports the following prediction methods:

- `predict_by_url`  — Use a publicly accessible URL for the input.
- `predict_by_bytes` — Pass raw input data directly.
- `predict_by_filepath` — Provide the local file path for the input. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO19}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL22}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample1}</CodeBlock>
</details>

## Unary-Stream Predict Call 

The **Unary-Stream** predict call processes a single input, but returns a stream of responses. It is particularly useful for tasks where multiple outputs are generated from a single input, such as generating text completions from a prompt.

It supports the following prediction methods:

- `generate_by_url`  — Provide a publicly accessible URL and handle the streamed responses iteratively.
- `generate_by_bytes` — Use raw input data.
- `generate_by_filepath` — Use a local file path for the input.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO20}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample2}</CodeBlock>
</details>

##  Stream-Stream Predict Call 

The **stream-stream** predict call enables bidirectional streaming of both inputs and outputs, making it highly effective for processing large datasets or real-time applications.

In this setup, multiple inputs can be continuously sent to the model, and the corresponding multiple predictions are streamed back in real-time. This is ideal for tasks like real-time video processing/predictions or live sensor data analysis.

It supports the following prediction methods:

- `stream_by_url` — Stream a list of publicly accessible URLs and receive a stream of predictions. It takes an iterator of inputs and returns a stream of predictions.
- `stream_by_bytes` — Stream raw input data.
- `stream_by_filepath` — Stream inputs from local file paths.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO21}</CodeBlock>
</TabItem>
</Tabs>

<!--
<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample3}</CodeBlock>
</details>

-->
