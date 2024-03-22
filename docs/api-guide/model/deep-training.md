---
description: Learn how deep fine-tuning works
sidebar_position: 6
---

# Deep Fine-Tuning

**Learn how deep fine-tuning works**
<hr />

Fine-tuning is a deep learning technique that refers to taking a pre-trained model and further training it on a new dataset or task. The term "fine-tuning" implies making small adjustments or refinements to the already learned representations in the pre-trained model rather than training from scratch.

Fine-tuning leverages the power of pre-trained models to improve their performance on a new, related task. It involves taking a pre-trained model, which was previously trained on a vast dataset for a general-purpose task, and tailoring it to a more specific task.

[Click here](https://docs.clarifai.com/portal-guide/model/deep-training/#why-choose-deep-fine-tuning) to learn why you might consider deep fine-tuning. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.py";
import PythonTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.py";
import PythonCreateOwnTemplate1 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_own_template_1.py";
import PythonCreateOwnTemplate2 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_own_template_2.py";
import PythonTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.py";
import PythonIncrementalTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/incremental_train_model.py";

import JSCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.html";
import JSTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.html";
import JSTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.html";
import JSTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.html";
import JSIncrementalTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/incremental_train_model.html";

import NodeCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.js";
import NodeTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.js";
import NodeTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.js";
import NodeTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.js";

import JavaCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.java";
import JavaTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.java";
import JavaTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.java";
import JavaTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.java";
import JavaIncrementalTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/incremental_train_model.java";

import PHPCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.php";
import PHPTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.php";
import PHPTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.php";
import PHPTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.php";

import CurlCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_model.sh";
import CurlTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/train_model.sh";
import CurlTemplateTypes from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/template_types.sh";
import CurlTrainingTimeEstimator from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/training_time_estimator.sh";
import CurlIncrementalTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/incremental_train_model.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/output_example_1.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/output_example_2.js";

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
- **Visual segmenter** (`visual-segmenter`)—Create this model to segment a per-pixel mask in images where things are and then classify objects, descriptive words, or topics within the masks.
-  **Visual anomaly heatmap** (`visual-anomaly-heatmap`)—Create this model to perform visual anomaly detection with image-level score and anomaly heatmap.
- **Text classifier** (`text-classifier`)—Create this model to classify text into a set of concepts.
- **Text generator** (`text-to-text`)—Create this model to generate or convert text based on the provided text input. For example, you can create it for prompt completion, translation, or summarization tasks.

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

## Training Time Estimator

Before you train a deep fine-tuned model, you can use the [Training Time Estimator](https://docs.clarifai.com/portal-guide/model/training-basics#training-time-estimator) feature to approximate the amount of time the training process could take. This offers transparency in expected training costs.

:::tip

Instead of providing an estimated input count, an alternative approach is to specify a dataset version ID in the `train_info.params` of the request. Here is an example: `params.update({"template":"MMDetection_FasterRCNN", "dataset_version_id":"dataset-version-1681974758238s"})`.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTrainingTimeEstimator}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainingTimeEstimator}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainingTimeEstimator}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTrainingTimeEstimator}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainingTimeEstimator}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainingTimeEstimator}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>

## Train a Model

After creating a model, you can now train it. It is an asynchronous operation.

Training enables the deep fine-tuned model to learn patterns, relationships, and representations from the input data. It allows the model to adjust its parameters based on the provided input data so that it can make accurate predictions.

You can repeat the training operation as often as you like. By adding more input data with concepts and training, you can get the model to predict exactly how you want it to. 


The `PostModelVersions` endpoint kicks off training and creates a new model version. You can also add concepts to a model when creating the model version—and only if the model type supports it as defined in the model type parameters.

### Example

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

### Incrementally Train a Model

You can update existing deep fine-tuned models with new data without retraining from scratch. After training a model version, a checkpoint file is automatically saved. And you can initiate incremental training from that previously trained version checkpoint. 

Below is an example of how you would perform incremental training from a specific version of a visual detector model. 

:::note

Incremental model training functionality has been introduced starting from the [10.1 release](https://docs.clarifai.com/product-updates/changelog/release101#api).

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonIncrementalTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSIncrementalTrainModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaIncrementalTrainModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlIncrementalTrainModel}</CodeBlock>
</TabItem>

</Tabs>

### Train Using Your Own Template

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


