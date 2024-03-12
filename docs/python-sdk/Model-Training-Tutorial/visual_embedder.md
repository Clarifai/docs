import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/ac.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/du.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/mt.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/mc.py";
import CodeTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/ts.py";
import CodeS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/s.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_embedder/mp.py";



import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/ts.txt";
import CodeOutputS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/s.txt";
import CodeOutputMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_embedder/mp.txt";



# Visual Embedder

**Learn how to train a visual embedding model using Clarifai Python SDK**
<hr />

Visual embedder models are neural network architectures specifically designed to transform high-dimensional visual data, such as images or videos, into low-dimensional representations, called embeddings. You can learn more about Visual Embedder [here](https://docs.clarifai.com/portal-guide/model/model-types/visual-embedder).


## App Creation

The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as “demo_train” and the base workflow is set as “Universal”. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
</TabItem>
</Tabs>


## Dataset Upload

The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>

If you have followed the steps correctly you should receive an output that looks like this,

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/ve_du.png" width="700" height="700" />
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

From the above list of model types we are going to choose visual-embedder as it is similar to our use case. Now let's create a model with the above model type.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/ve_mc.png" width="700" height="700" />
</details>





## Template Selection

Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the `'Clarifai_ResNext' `template for training our model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>


### Setup Model Parameters

You can update the model params to your need before initiating training.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

## Initiate Model Training

We can initiate the model training by calling the model.train() method. The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file.


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
    <img src="/img/python-sdk/ve_imt.png" width="700" height="700" />
</details>



## Model Prediction

Since the model is trained and ready let’s run some predictions to view the model performance,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
</details>
