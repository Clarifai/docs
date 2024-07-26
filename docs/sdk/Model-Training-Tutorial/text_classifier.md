import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/ac.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/du.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/mt.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/mc.py";
import CodeTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/ts.py";
import CodeS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/s.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_classifier/mp.py";
import CodeTrEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/train_eval.py";
import CodeTeEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/test_eval.py";
import CodeCMP from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/cmp.py";


import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_classifier/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_classifier/ts.txt";
import CodeOutputS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_classifier/s.txt";
import CodeOutputMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_classifier/mp.txt";
import CodeOutputTrEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/outputs/train_eval.txt";
import CodeOutputTeEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/outputs/test_eval.txt";
import CodeOutputCMP from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/text_classifier/outputs/cmp.txt";



# Text Classifier

**Learn how to train a text classification model using Clarifai SDKs**
<hr />

A text classifier is a machine learning model designed to automatically categorize or classify text documents into predefined categories or labels. These categories could be anything from sentiment analysis (positive, negative, neutral) to topic classification (sports, politics, technology). You can learn more about Text Classifier [here](https://docs.clarifai.com/portal-guide/model/model-types/text-classifier).


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
    <img src="/img/python-sdk/tc_du.png" />
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

From the above list of model types we are going to choose text-classifier as it is similar to our use case. Now let's create a model with the above model type.

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

Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the `'HuggingFace_AdvancedConfig' `template for training our model.
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
    <img src="/img/python-sdk/tc_imt.png" />
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


## Model Evaluation

Now let's evaluate the model using train and test datasets. First let's see the evaluation metrics for the training dataset,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>

Before evaluating with a test dataset, we have to first upload the dataset using the data loader and then perform model evaluation,

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>

Finally let's compare the results from  multiple datasets using ```EvalResultCompare``` feature from Clarifai SDKs to get a better understanding of the model's performance.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>