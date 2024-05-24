import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/create_app.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/dataset_upload.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/model_type.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/model_creation.py";
import CodeTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/template_selection.py";
import CodeS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/setup.py";
import CodeS2 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/setup2.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/visual_classifier/mp.py";
import CodeTrEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/train_eval.py";
import CodeTeEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/test_eval.py";
import CodeCMP from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/cmp.py";




import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/model_type.txt";
import CodeOutputTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/template_selection.txt";
import CodeOutputS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup.txt";
import CodeOutputS2 from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup2.txt";
import CodeOutputIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/imt.txt";
import CodeOutputMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/mp.txt";
import CodeOutputTrEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/train_eval.txt";
import CodeOutputTeEv from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/test_eval.txt";
import CodeOutputCMP from "!!raw-loader!../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/cmp.txt";


# Visual Classifier

**Learn how to train a visual classifier using Clarifai Python SDK**
<hr />

The Visual Classifier is a powerful component of the Clarifai platform designed for efficient and accurate image recognition. Leveraging advanced machine learning algorithms, the Visual Classifier allows users to train custom models tailored to specific visual recognition tasks. You can learn more about Visual Classifier [here](https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier).


## App Creation

The first part of model training includes the creation of an app under which the training process takes place.

Here we are creating an app with the app id as “demo_train” and the base workflow is set as “Universal”. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
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
<img src="/img/python-sdk/vc_du.png" width="700" height="700" />
</details>


## Choosing The Model Type

Now let's list the all available trainable model types in the platform that you can use for your tasks,

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

From the above list of model types we are going to choose visual-classifier as it is similar to our use case. Now let's create a model with the above model type.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

## Template Selection

Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the `'MMClassification_EfficientNet' `template for training our model.

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
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

You can edit the YAML file according to our needs and then load the files again for model training. Below is an example of the edits made to the YAML file,
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>

## Initiate Model Training

We can initiate the model training by passing the YAML configuration file as parameter to the model.train(). The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file.

:::note
If the status code is "MODEL-TRAINED", then the user can know the model is Trained and ready to use.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMT}</CodeBlock>
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
    <img src="/img/python-sdk/vc_mp.png" width="500" height="500" />
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

Finally let's compare the results from  multiple datasets using ```EvalResultCompare``` feature from Clarifai Python SDK to get a better understanding of the model's performance.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>
