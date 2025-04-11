---
description: Perform predictions using your deployed models
sidebar_position: 1
---

# Model Inference

**Perform predictions using your deployed models**
<hr />

Clarifai's Compute Orchestration capabilities provide efficient ways to make prediction calls to suit various use cases. Once your model is deployed, you can use it to perform inferences seamlessly.

:::warning Deploy model first

- Before making the following prediction requests, ensure you have [set up a cluster](https://docs.clarifai.com/compute/deployments/clusters-nodepools), created a nodepool, and [deployed your model](https://docs.clarifai.com/compute/deployments/deploy-model) in it. Once the model is deployed, you'll specify its `deployment_id` parameter, which is essential for proper routing and execution of your prediction request. 

- If you do not specify the `deployment_id` parameter, the prediction will default to the `Clarifai Shared` deployment type.

:::

:::note Why Deployment Selection Matters

The `deployment_id` parameter is vital in directing prediction requests to the appropriate cluster and nodepool. For example, you can route requests to a GCP cluster by selecting a corresponding deployment ID, use a different deployment ID for an AWS cluster, and yet another for an on-premises deployment. This gives you full control over performance, costs, and security, allowing you to focus on building cutting-edge AI solutions while we handle the infrastructure complexity.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO19 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";


import OutputExample1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/output_example_1.txt";
import OutputExample2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/output_example_2.txt";
import OutputExample3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/output_example_3.txt";

## **Via the API**

### Unary-Unary Predict Call

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

### Unary-Stream Predict Call 

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

###  Stream-Stream Predict Call 

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

## **Via the UI**

### Model Playground

To access your deployments, navigate to the model’s playground page and select the **Deployments** tab.  

Here, you’ll find a **Deployments & Usage** table listing all deployments associated with the model, including details such as the cluster and nodepool. You can also sort the table alphabetically (A–Z or Z–A) based on your preferences.

![ ](/img/compute-orchestration/compute-16.png)

To select a deployment, click the **Deployment** button. A dropdown list will appear, showing your available deployments. Choose the one you want to use to direct traffic to a specific cluster and nodepool. 

Once you’ve selected a deployment ID, go to the **Overview** pane to use it for making prediction requests.

When inferencing using a deployed model, the request is routed to the nodepool within the cloud region specified in the cluster, and the model’s predictions are returned as output in real time.

![ ](/img/compute-orchestration/compute-21.png)

### Predictions Within Input-Viewer

> The single Input-Viewer is the main page that showcases the details of a single input available in your app. If you click an input listed on the [Inputs-Manager](https://docs.clarifai.com/portal-guide/inputs-manager/) page, you'll be redirected to the viewer page for that input, where you can view and interact with it.

To make predictions on an input, switch to predict mode by toggling the **Predict** button located in the top-right corner of the page. Next, click the **Choose a model or workflow** button in the right-hand sidebar to select the model you want to use. 

![ ](/img/compute-orchestration/compute-27.png)

In the window that appears, choose your desired model and then select a deployment from the **Deployment** dropdown. If needed, you can also create a new deployment from this window. 

![ ](/img/compute-orchestration/compute-28.png)

Lastly, click the **Predict** button at the bottom of the sidebar. The model will process the input and return predictions in real time, allowing you to immediately view the results within the Input-Viewer screen.

![ ](/img/compute-orchestration/compute-29.png)