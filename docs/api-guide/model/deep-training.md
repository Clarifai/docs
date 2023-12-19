---
description: Train the complete graph of your model.
sidebar_position: 6
---

# Deep Fine-Tuning

**Train the complete graph of your model**
<hr />

Clarifai offers a variety of pre-built models that are designed to help you create AI solutions quickly and efficiently. Clarifai models are the recommended starting points for many users because they offer incredibly fast training times when you customize them using the "embedding-classifier" ([transfer learning classifier](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning)) model type.

But there are many cases where accuracy and the ability to carefully target solutions take priority over speed and ease of use. Additionally, you may need a model to learn new features, not recognized by existing Clarifai models. For these cases, it is possible to "deep fine-tune" your custom models and integrate them directly within your workflows.

In general, deep trained models need more data than those trained on top of Clarifai models. For most applications, you’ll need at least 1000 training inputs, but it could be much more than this, depending on your specific use case.

You might consider deep training if you have:

* A custom tailored dataset
* Accurate labels
* Expertise and time to fine-tune models

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.py";
import PythonTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.py";
import PythonCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.py";
import PythonUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.py";
import PythonCreateOwnTemplate1 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_own_template_1.py";
import PythonCreateOwnTemplate2 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_own_template_2.py";

import JSCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.html";
import JSTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.html";
import JSTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.html";
import JSCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.html";
import JSUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.html";

import NodeCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.js";
import NodeTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.js";
import NodeTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.js";
import NodeCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.js";
import NodeUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.js";

import JavaCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.java";
import JavaTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.java";
import JavaTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.java";
import JavaCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.java";
import JavaUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.java";

import PHPCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.php";
import PHPTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.php";
import PHPTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.php";
import PHPCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.php";
import PHPUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.php";

import CurlCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.sh";
import CurlTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.sh";
import CurlTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.sh";
import CurlCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.sh";
import CurlUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/output_example_1.js";

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::


## Create Models

To create a deep fine-tuned model, you need to specify the [type of model](https://docs.clarifai.com/portal-guide/model/model-types/) using the `model_type_id` parameter⁠. 

:::tip

You can use the [`ListModelTypes`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#list-model-types) method to learn more about the available model types and their hyperparameters.

:::

Here some types of deep fine-tuned models you can create:

- **Visual classifier** (`visual-classifier`)—Create this model to classify images and video frames into a set of concepts. 
- **Visual detector** (`visual-detector`)—Create this model to detect bounding box regions in images or video frames and then classify the detected images. You can also send the image regions to an image cropper model to create a new cropped image.
- **Visual embedder** (`visual-embedder`)—Create this model to transform images and video frames into "high level" vector representation understood by our AI models. These embeddings enable visual search and can be used as base models to train other models.
- **Text classifier** (`text-classifier`)—Create this model to classify text into a set of concepts.
- **Visual segmenter** (`visual-segmenter`)—Create this model to segment a per-pixel mask in images where things are and then classify objects, descriptive words, or topics within the masks.
-  **Visual anomaly heatmap** (`visual-anomaly-heatmap`)—Create this model to perform visual anomaly detection with image-level score and anomaly heatmap.

Below is an example of how you would create a visual classifier model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCreateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>

</Tabs>

## Template Types

You can take advantage of a variety of our pre-configured templates when developing your deep fine-tuned models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way your model learns.

[Click here]( https://docs.clarifai.com/portal-guide/model/deep-training/#template-types) to learn more about the template types we offer—alongside their hyperparameters.

Below is an example of how you would use the `ListModelTypes` endpoint to list the templates and hyperparameters available in a specific model type. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTemplateTypes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTemplateTypes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTemplateTypes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTemplateTypes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTemplateTypes}</CodeBlock>
</TabItem>

<!--
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTemplateTypes}</CodeBlock>
</TabItem>
-->

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

## Train a Model

After creating a model, you can now train it. It is an asynchronous operation.

Training enables the deep fine-tuned model to learn patterns, relationships, and representations from the input data. It allows the model to adjust its parameters based on the provided input data so that it can make accurate predictions.

You can repeat the training operation as often as you like. By adding more input data with concepts and training, you can get the model to predict exactly how you want it to. 


The `PostModelVersions` endpoint kicks off training and creates a new model version. You can also add concepts to a model when creating the model version—and only if the model type supports it as defined in the model type parameters.

Below is an example of how you would train a visual classifier model. 

:::note

We use the `params.update()` method to set the template and hyperparameters for the visual classifier model. If training another model type, you'll need to state the specific template and hyperparameters associated with that particular model. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>

</Tabs>

### Use Your Own Template

You can [create your own deep fine-tuned template](https://docs.clarifai.com/portal-guide/model/deep-training/custom-templates/) and use it to train a model. 

You need to create a Python configuration file and pass it as a training parameter to the `PostModelVersions` endpoint. Here is an example of a `training_config.py` file for creating a custom deep fine-tuned template using the MMDetection open source toolbox for visual detection tasks.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateOwnTemplate1}</CodeBlock>
</TabItem>

</Tabs>

Here is how you could use the custom template to train a deep fine-tuned model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateOwnTemplate2}</CodeBlock>
</TabItem>

</Tabs>


## Create a Workflow 

Put your new deep-trained model to work by adding it to a workflow. Below is an example of how to create a workflow with a deep trained model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

### Update Your Default Workflow

You can index your inputs with a deep fine-tuned model by updating your default workflow. You can also use your deep fine-tuned embeddings as the basis for clustering and search.

Below is an example of how to update your default workflow with a deep fine-tuned model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateWorkflow}</CodeBlock>
</TabItem>

<!--
<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateWorkflow}</CodeBlock>
</TabItem>
-->

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateWorkflow}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateWorkflow}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

