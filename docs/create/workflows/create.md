---
description: Create computational graphs that include one or more models
sidebar_position: 1
---

# Create Workflows

**Create computational graphs that include one or more models**
<hr />

You can build workflows using any Clarifai models or custom models you've created in your app. Outputs from one model can serve as inputs to another — provided the receiving model supports the input type.

The input and output types supported by your custom workflows depend on the capabilities of the individual models used to construct them.

This model-linking approach enables you to form a graph of interconnected models, allowing you to build sophisticated AI solutions tailored to specific use cases.

## Supported Input and Output Types

Different models support different input and output formats. Here are some common examples:

#### Inputs

* Concepts
* Embeddings
* Images
* Images or videos
* Regions

#### Outputs

* Concepts
* Clusters
* Regions



## Create via the UI

Let’s demonstrate how to create workflows with a simple example that first extracts text from an image and then translates the extracted text to Spanish.

We'll connect the following two Clarifai models to achieve our objective:

* The [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr) model, which detects and recognizes English texts in images;
* The [text-translation-english-spanish](https://clarifai.com/helsinkinlp/translation/models/text-translation-english-spanish) model translates texts from English to Spanish.

We'll specify the IDs of the models and their versions — since a model can have several versions.


:::note
 You can add up to 20 models to a single workflow.
:::

### Step 1: Create Application

Let's begin by creating an application that will act as the container for all the related models and workflows for this particular project.

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note
 When creating the application, select the Text/Document option as the primary input type.
:::

### Step 2: Create a New Workflow

To create a new workflow, select the Workflows option in the collapsible left sidebar. Next, click the **Create Workflow** button in the upper-right corner of the page.



![alt_text](/img/community_2/input_nodes_create_new_workflow.png)



### Step 3: Create Your Nodes

You'll be redirected to a simple, no-code, drag-and-drop interface that allows you to connect your models together. You'll need to connect the input nodes in your workflow. You can link your nodes to any nodes that precede them in the visual graph.


#### Name Your Workflow

Let's start by clicking the input field in the upper section of the page and providing a name for the custom workflow.


#### Search for First Node

Next, in the left sidebar, search for the optical-character-recognizer node. This allows you to configure a model that enables the extraction of texts from images, such as scans of printed pages or photos of street signs.

After finding the node, drag and drop it on the empty workspace pane and connect it to the IN element.


![alt_text](/img/community_2/input_nodes_empty_pane.png)


:::tip
You can use the tools on the left side of the workspace pane to manage the workflow creation process. These tools enable you to zoom in and out, fit the view, arrange the workflow, reset the workspace, and perform other actions to help you efficiently design and organize your workflow.
:::

#### Search for the Second Node

Next, search for the text-to-text node. This allows you to configure a model that enables the transformation of one kind of text into another.

After finding the second node, drag and drop it on the workspace and draw a line that connects it to the first node. This shows the flow of information from one node to another.



![alt_text](/img/community_2/input_nodes_add_another_model.png)



### Step 4: Search for Models

Click the optical-character-recognizer node. And on the search box that appears on the right side of the page, specify the ocr-scene-english-paddleocr model as the one to use for optical character recognition. Also, select the version of the model you want to use.


![alt_text](/img/community_2/input_nodes_ocr_model.png)


Similarly, click the text-to-text node and specify the text-translation-english-spanish model as the one to use for translating the extracted text from English to Spanish. Also, select its version.



![alt_text](/img/community_2/input_nodes_text_to_text.png)



### Step 5: Save Workflow

Finally, click the **Save Workflow** button to save the workflow. This will save the state of your workflow. Now, you are ready to [predict](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#using-a-workflow) using your brand-new workflow.


![alt_text](/img/community_2/input_nodes_save_workflow.png)


## Create via the API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCW from "!!raw-loader!../../../code_snippets/python-sdk/workflows/create_workflow.py";

import PythonSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.py";
import PythonSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.py";

import JSSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.html";
import JSSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.html";

import NodeSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.js";
import NodeSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.js";

import JavaSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.java";
import JavaSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.java";

import PHPSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.php";
import PHPSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.php";

import CurlSampleNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/sample_workflow_multiple_nodes.sh";
import CurlSuppressNodes from "!!raw-loader!../../../code_snippets/api-guide/workflows/input_nodes/suppress_output_from_nodes.sh";

import PythonCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.py";
import JSCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.html";
import NodeCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.js";
import JavaCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.java";
import PHPCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.php";
import CurlCreate from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/create.sh";
import PythonWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.py";
import JSWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.html";
import NodeWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.js";
import JavaWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.java";
import PHPWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.php";
import CurlWorkflowPredict from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/workflow_predict.sh";
import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/workflows/create_get_update_delete/sample_workflow_predict.txt";

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

### Create Workflow

In this example, we'll create a simple custom workflow that first extracts text from an image and then translates the extracted text to Spanish.

We'll connect the following two models to achieve our objective:
- The [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr) model, which detects and recognizes English texts in images;
- The [text-translation-english-spanish](https://clarifai.com/helsinkinlp/translation/models/text-translation-english-spanish) model, which translates texts from English to Spanish. 

We'll specify the IDs of the models and their versions — since a model can have several versions. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCreate}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCreate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCreate}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{PHPCreate}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreate}</CodeBlock>
</TabItem>

</Tabs>

#### Predict With Workflow 

After creating the workflow, let's now use it to extract texts from [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg) and translate them into Spanish. 

The response will contain the predictions each model in the workflow returns for the input.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredict}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

var response = client.PostModelOutputs(
    new PostModelOutputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "excaliburne",
            AppId = "moderation-test"
        },
        ModelId = "aaa03c23b3724a16a56b629203edc62c", // <- This is the general model_id
        Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/dog2.jpeg"
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);

Console.WriteLine("Predicted concepts:");
foreach (var concept in response.Outputs[0].Data.Concepts)
{
    Console.WriteLine($"{concept.Name, 15} {concept.Value:0.00}");
}
```
</TabItem>
-->

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

### Create With Multiple Connected Nodes

The following is an example of how to build a workflow with multiple connected nodes. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{PHPSampleNodes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSampleNodes}</CodeBlock>
</TabItem>

</Tabs>

### Suppress Output From Nodes

It is possible to turn the outputs from given nodes in your workflow on and off with the `suppress_output` endpoint. This can be helpful when you want to hide outputs for expensive return values like image crops or embedding.

By default, this endpoint will be set to false, meaning that we do not suppress any model's output.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{PHPSuppressNodes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSuppressNodes}</CodeBlock>
</TabItem>

</Tabs>



### Create Using YAML File

Note that when creating a workflow using the Python SDK, you need to provide its YAML specification.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCW}</CodeBlock>
</TabItem>
</Tabs>


<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/create_workflow.png"/>
</details>