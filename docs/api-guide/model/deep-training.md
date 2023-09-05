---
description: Train the complete graph of your model.
sidebar_position: 6
---

# Deep Fine-Tuning

**Train the complete graph of your model**
<hr />

Clarifai offers a variety of prebuilt models that are designed to help you create AI solutions quickly and efficiently. Clarifai Models are the recommended starting points for many users because they offer incredibly fast training times when you customize them using the "embedding-classifier" (Transfer Learning Classifier) model type.

But there are many cases where accuracy and the ability to carefully target solutions take priority over speed and ease of use. Additionally, you may need a model to learn new features, not recognized by existing Clarifai Models. For these cases, it is possible to "deep fine-tune" your custom models and integrate them directly within your workflows.

In general, deep trained models need more data than those trained on top of Clarifai Models. For most applications, you’ll need at least 1000 training inputs, but it could be much more than this, depending on your specific use case.

You might consider deep training if you have:

* **A custom tailored dataset**
* **Accurate labels**
* **Expertise and time to fine-tune models**

## Template Types

You can take advantage of a variety of templates when building your deep trained models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way your model learns.

[Click here](https://docs.clarifai.com/portal-guide/model/deep-training/#template-types) to learn more about the template types we offer—alongside their hyperparameters. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.py";
import PythonCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.py";
import PythonCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.py";
import PythonCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.py";
import PythonUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.py";
import PythonCreateTextClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_text_classifier.py";
import PythonCreateVisualSegmenter from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_segmenter.py";
import PythonCreateVisualAnomaly from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_anomaly.py";

import NodeCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.js";
import NodeCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.js";
import NodeCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.js";
import NodeCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.js";
import NodeUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.js";

import JavaCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.java";
import JavaCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.java";
import JavaCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.java";
import JavaCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.java";
import JavaUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.java";

import CurlCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.sh";
import CurlCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.sh";
import CurlCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.sh";
import CurlCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.sh";
import CurlUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.sh";

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::


## Create Models

### Create a Visual Classifier

Use a visual classifier model if you would like to classify images and video frames into a set of concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateClassifier}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateClassifier}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateClassifier}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateClassifier}</CodeBlock>
</TabItem>

</Tabs>

### Create a Visual Detector

Create a visual detector model to detect bounding box regions in images or video frames and then classify the detected images. You can also send the image regions to an image cropper model to create a new cropped image.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateDetector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateDetector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateDetector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateDetector}</CodeBlock>
</TabItem>

</Tabs>

### Create a Visual Embedder

Create a visual embedding model to transform images and video frames into "high level" vector representation understood by our AI models. These embeddings enable visual search and can be used as base models to train other models.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateEmbedder}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateEmbedder}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateEmbedder}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateEmbedder}</CodeBlock>
</TabItem>

</Tabs>

### Create a Text Classifier

Create a text classifier model to classify text into a set of concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateTextClassifier}</CodeBlock>
</TabItem>

</Tabs>

### Create a Visual Segmenter

Create a visual segmenter model to segment a per-pixel mask in images where things are and then classify objects, descriptive words, or topics within the masks.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateVisualSegmenter}</CodeBlock>
</TabItem>

</Tabs>

### Create a Visual Anomaly Heatmap

Create a visual anomaly model to perform visual anomaly detection with image-level score and anomaly heatmap.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateVisualAnomaly}</CodeBlock>
</TabItem>

</Tabs>

### Create a Workflow 

Put your new deep-trained model to work by adding it to a workflow. Below is an example of how to create a workflow with a deep trained model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

## Update

### Update Your Default Workflow

Index your inputs with a deep trained model by updating your default workflow. You can also use your deep trained embeddings as the basis for clustering and search.

Below is an example of how to update your default workflow with a deep trained model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

