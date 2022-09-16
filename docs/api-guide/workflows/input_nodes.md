---
description: Connect your models together.
sidebar_position: 2
---

# Input Nodes

**Connect your models together**
<hr />

The outputs from one model can be used as inputs for another model. This allows you to link together the models in a graph. Linking models helps you build sophisticated AI solutions that can zero-in on a specific use case.

## Supported Input and Output Types

To view your available models, just open your application in the Portal and click the **Model Mode** icon on the left-hand side of the screen. From there, just click the **Create a Custom Model** button on the top right-hand corner of the screen.

Different models accept different types of inputs and return different types of outputs. They are named after the fields in the Data object of our API. This object uses inputs, annotations, models, and workflows. 

Some examples include:

#### Inputs

* Concepts
* Embeddings
* Image
* Image or video
* Regions

#### Outputs

* Concepts
* Clusters
* Regions

## The Building Blocks

You can create workflows out of any Clarifai Models or custom models that you have created for your app. The inputs and outputs supported by your custom models will depend on the inputs and outputs supported by the Clarifai Models, or model templates that you have used to build them.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.py";
import PythonSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.py";

import JSSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.html";
import JSSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.html";

import NodeSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.js";
import NodeSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.js";

import JavaSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.java";
import JavaSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.java";

import CurlSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.sh";
import CurlSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.sh";

### Sample Workflow With Multiple Connected Nodes

The following is an example of how to build a workflow with multiple connected nodes. Note that model IDs and model version IDs from the public `clarifai/main` application are fixed, so they are already hard-coded in the code examples below. It is possible to use other public model or model version IDs.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSampleNodes}</CodeBlock>
</TabItem>

</Tabs>

### Suppressing the Output From Nodes

It is possible to turn the outputs from given nodes in your workflow on and off with the `suppress_output` endpoint. This can be helpful when you want to hide outputs for expensive return values like image crops or embedding.

By default, this endpoint will be set to false, meaning that we do not suppress any model's output.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSuppressNodes}</CodeBlock>
</TabItem>

</Tabs>

