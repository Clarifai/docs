---
description: Learn about our visual segmenter model type
sidebar_position: 4
---

# Visual Segmenter

**Learn about our visual segmenter model type**
<hr />

**Input**: Images and videos

**Output**: Regions

Visual segmenter, also known as semantic segmentation, is a type of deep fine-tuned model used in image analysis and understanding tasks.

It aims to achieve a fine-grained understanding of the content within an image by associating each pixel with a particular class label. This is more detailed than traditional object detection, which typically identifies bounding boxes around objects.

The primary task of a visual segmenter model is twofold:

- **Semantic segmentation**: The model segments an input image into per-pixel masks, where each mask corresponds to a particular object or region of interest. Each pixel in the image is assigned a label that indicates the class of the object it belongs to. This process effectively divides the image into segments based on the objects or regions present in it.
- **Object classification or labeling**: Once the semantic segmentation is done, the model can then classify the segmented objects or regions into specific categories, descriptive words, or topics. This classification step involves assigning labels or tags to the segmented areas, indicating what each segment represents.

:::info

The visual segmenter model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-segmenter-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual Segmenter models are used in a wide variety of applications, including:

- **Self-driving cars**: Visual Segmenter models can be used to identify objects in the road and surroundings, such as other cars, pedestrians, and traffic signs. This information can be used to help self-driving cars navigate safely.
- **Robotics**: Visual Segmenter models can be used to help robots interact with the physical world. For example, a robot could use a Visual Segmenter model to identify objects in its environment and then plan a path to avoid those objects.
- **Image editing**: Visual segmenter models can assist in automatic background removal, object manipulation, and other image editing tasks.
- **Augmented reality**: In AR applications, semantic segmentation helps in understanding the scene and integrating virtual objects more realistically.

You may choose a visual segmenter model type in cases where:

- Your application requires high accuracy, and you're willing to sacrifice speed and ease of use. These models tend to be computationally intensive due to their per-pixel processing. 
- You need a segmentation model to learn new features not recognized by the existing Clarifai models, especially if your application requires a detailed understanding of the content within an image at a per-pixel level. In that case, you may need to "deep fine-tune" your custom segmenter model and integrate it directly within your [workflows]( https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example Use Case

Given an image of a street scene, a visual segmenter model could segment the image into per-pixel masks representing cars, pedestrians, buildings, roads, and other objects. Then, for each segmented area, the model could classify the objects into categories like "sedan," "person," "skyscraper," and "asphalt road.”


##  Create and Train a Visual Segmenter

Let's demonstrate how to create and train a visual segmenter model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/create_app.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/du.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/mt.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/mc.py";
import CodeTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/ts.py";
import CodeS1 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/s1.py";
import CodeS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/s2.py";
import CodeS3 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/s3.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_segmenter/mp.py";

import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/ts.txt";
import CodeOutputS1 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s1.txt";
import CodeOutputS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s2.txt";
import CodeOutputS3 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s3.txt";




### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
</TabItem>
</Tabs>



### Step 2: Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_segmentation).

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>


### Step 3: Model Creation

Let's list all the available trainable model types in the Clarifai platform.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>

Next, let's select the `visual-segmenter` model type and use it to create a model.  

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>


### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>

Next, let's choose the `'MMSegmentation_SegFormer' ` template to use for training our model, as demonstrated below.


### Step 5: Set Up Model Parameters

You can save the model parameters in a YAML file, which can then be passed to the model when initiating training.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeS1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS1}</CodeBlock>
</details>

You can modify the YAML file to suit your specific needs and reload it for model training.

Before making changes, let’s first list the available concepts in the app. After that, we’ll show an example of the edited YAML configuration.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>

Next, we’ll create a dataset version and then use the `model.update_params()` method to update the model parameters accordingly.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeS3}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS3}</CodeBlock>
</details>

### Step 6: Initiate Model Training

To initiate the model training process, call the `model.train()` method. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.


:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>


<details>
  <summary>Output</summary>
   <img src="/img/python-sdk/vs_imt.png" />
</details>


### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>

:::info

The model’s performance can be further improved by increasing the number of training [epochs](https://docs.clarifai.com/additional-resources/glossary/#epoch).

:::

<details>
  <summary>Image Output</summary>
   <img src="/img/python-sdk/vs_mp.png" />
</details>


