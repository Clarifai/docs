import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/create_app.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/du.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/mt.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/mc.py";
import CodeTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/ts.py";
import CodeS1 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/s1.py";
import CodeS2 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/s2.py";
import CodeS3 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/s3.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_segmenter/mp.py";






import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/ts.txt";
import CodeOutputS1 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s1.txt";
import CodeOutputS2 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s2.txt";
import CodeOutputS3 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_segmenter/s3.txt";



# Visual Segmenter

**Learn how to train a visual segmenter model using Clarifai SDKs**
<hr />

A visual segmenter model is used in computer vision to partition images or videos into distinct regions or objects. Through sophisticated techniques like pixel-based analysis, region grouping, edge detection, or deep learning, a visual segmenter can identify boundaries and patterns within visual data, effectively dividing the image into meaningful segments. You can learn more about Visual Segmenter [here](https://docs.clarifai.com/portal-guide/model/model-types/visual-segmenter).


## App Creation

The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as “demo_train” and the base workflow is set as “Universal”. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
</TabItem>
</Tabs>


## Dataset Upload

The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The data used for training in this tutorial is available in the examples repository you have cloned.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>

If you have followed the steps correctly you should receive an output that looks like this,

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/vs_du.png" />
</details>


## Choose The Model Type

First let's list the all available trainable model types in the platform,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>

Click [here](https://docs.clarifai.com/portal-guide/model/model-types/) to know more about Clarifai Model Types.

## Model Creation

From the above list of model types we are going to choose visual-segmenter as it is similar to our use case. Now let's create a model with the above model type.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/vs_mc.png" />
</details>

## Template Selection

Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the `'MMSegmentation_SegFormer' `template for training our model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>

## Setup Model Parameters

You can save the model parameters into a YAML file so that it can passed on to the model while initiating training.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS1}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS1}</CodeBlock>
</details>
You can edit the YAML file according to our needs and then load the files again for model training. Below is an example of the edits made to the YAML file, but first we are going to list the concepts available in app.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>
Now we will create a dataset version and then invoke the model.update_params() method to change the model parameters.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS3}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS3}</CodeBlock>
</details>

## Initiate Model Training

We can initiate the model training by calling the model.train() method. The Clarifai SDKs also offers features like showing training status and saving training logs in a local file.



:::note
If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>


<details>
  <summary>Output</summary>
   <img src="/img/python-sdk/vs_imt.png" />
</details>


## Model Prediction

Since the model is trained and ready let’s run some predictions to view the model performance,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>

:::info
The performance of the model can be further improved by training it for more number of epochs

:::
<details>
  <summary>Image Output</summary>
   <img src="/img/python-sdk/vs_mp.png" />
</details>


