import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/ac.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/du.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/mt.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/mc.py";
import CodeS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/s.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/mp.py";


import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/clusterer/mt.txt";
import CodeOutputS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/clusterer/s.txt";
import CodeOutputMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/clusterer/mp.txt";




# Clusterer

Clusterer models are algorithms used in machine learning and data analysis to group similar data points together into clusters or clusters. These models aim to find patterns and structures within datasets by organizing the data into groups based on similarities in their features. You can learn more about Clusterer  [here](https://docs.clarifai.com/portal-guide/model/model-types/clusterer).


## App Creation

The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as “demo_train” and the base workflow is set as “Universal”. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
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
    <img src="/img/python-sdk/cl_du.png" width="700" height="700" />
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

From the above list of model types we are going to choose clusterer as it is similar to our use case. Now let's create a model with the above model type.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
  <img src="/img/python-sdk/cl_mc.png" width="700" height="700" />
  </details>

## Template Selection

Inside the Clarifai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. But when it comes to clustering there is only one default template available.


## Setup Model Parameters

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
If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use._
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
<img src="/img/python-sdk/cl_imt.png" width="700" height="700" />
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