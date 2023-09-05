---
description: Develop your own custom text classifier.
sidebar_position: 4
---

# Custom Transfer Learning Text Model

**Develop your own custom text classifier using transfer learning**
<hr />

The Clarifai API has the ability not only to learn concepts from images and videos, but from texts as well.

In this walkthrough, you'll learn how to create and use a custom text model, learn from your own text data using the power of the Clarifai's base text model, and predict on new text examples. 

You'll also learn how to use our world-class [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) technology to create and train text models accurately and fast. 

The steps below can all be done via [the Clarifai's portal](https://clarifai.com/explore). But here you'll learn how to do them programmatically via an API, using our [gRPC Python client](https://github.com/Clarifai/clarifai-python-grpc). The examples map directly to any of our other gRPC clients.

:::info
The walkthrough assumes you have already created your Clarifai's user account and the [Personal Access Token](https://portal.clarifai.com/settings/authentication). Also, first set up the gRPC Python client together with the initial code. See the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

For debugging purposes, each response returned by a method call can be printed to the console, and its entire data and structure will be shown verbosely.

## Create a New Application

The first step is manual. In the Clarifai Portal, [create a new application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application) with **Text/Document** selected as the primary input type. The Base Workflow will be automatically selected for you. 

<!--
![](https://s3.amazonaws.com/clarifai-api/img3/prod/large/e12ce254f2824b0ab2aef1b10784ff23/3e695b780f597cd263b06d0aeb30b3d1?v=001)
-->

<!--
Afterward, copy the newly-created application's _API key_ and set it in the variable below. This variable is going to be used by all Clarifai API calls for authorization purposes.
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddBatchTexts from "!!raw-loader!../../../code_snippets/api-guide/model/py/add_batch_texts.py";
import PythonWaitInputsDownload from "!!raw-loader!../../../code_snippets/api-guide/model/py/wait_inputs_download.py";
import PythonCreateCustomModel from "!!raw-loader!../../../code_snippets/api-guide/model/py/create_custom_text_model.py";
import PythonTrainTextModel from "!!raw-loader!../../../code_snippets/api-guide/model/py/train_text_model.py";
import PythonWaitModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/py/wait_model_training_complete.py";
import PythonPredictNewInputs from "!!raw-loader!../../../code_snippets/api-guide/model/py/predict_new_inputs.py";
import PythonStartModelEvaluation from "!!raw-loader!../../../code_snippets/api-guide/model/py/start_model_evaluation.py";
import PythonWaitModelEvaluationResults from "!!raw-loader!../../../code_snippets/api-guide/model/py/wait_model_evaluation_results.py";

<!--
<Tabs>
<TabItem value="grpc_python" label="gRPC Python">

```python
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

api_key_metadata = (('authorization', 'Key ' + post_keys_response.keys[0].id),)
```
</TabItem>
</Tabs>
-->

## Add a Batch of Texts

We'll now add several text inputs that we will later use as training data in our custom model. The idea is that we'll create a model which can differentiate between positive and negative sentences \(in a grammatical sense\). 

We'll mark each input with one of the two concepts: `positive` or `negative`.

The texts can be added either directly \(it's called raw\) or from a URL.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddBatchTexts}</CodeBlock>
</TabItem>

</Tabs>

## Wait for Inputs to Download

Let's now wait for all the inputs to download.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonWaitInputsDownload}</CodeBlock>
</TabItem>

</Tabs>

## Create a Custom Model

Let's create a custom transfer learning model (also called an "embedding-classifier"). 

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateCustomModel}</CodeBlock>
</TabItem>

</Tabs>

## Train the Model

Let's train the model using the `positive` and `negative` concepts. 

All inputs \(in our application\) associated with these two concepts will be used as training data. This will make the model to learn from these inputs so that we can later predict new text examples. 

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonTrainTextModel}</CodeBlock>
</TabItem>

</Tabs>

## Wait for Model Training to Complete

Let's wait for the model training to complete.

Each model training produces a new model version. Notice that on the bottom of the following code example, we placed the model version ID into its own variable.

We'll be using it later to specify which specific model version we want to use \(since a model can have multiple versions\).

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonWaitModelTraining}</CodeBlock>
</TabItem>

</Tabs>

## Predict on New Inputs

Let's now use the trained custom model to predict new text examples.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonPredictNewInputs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
The following concepts were predicted for the input `Butchart Gardens contains over 900 varieties of plants.`:
	positive: 0.83
	negative: 0.17
The following concepts were predicted for the input `https://samples.clarifai.com/negative_sentence_12.txt`:
	negative: 1.00
	positive: 0.00
```
</details>

## Start Model Evaluation

Let's now test the performance of the model by using model evaluation. 

See the [the Model Evaluation page](https://docs.clarifai.com/api-guide/evaluate/) to learn more.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonStartModelEvaluation}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "967dfe6d8d59d4eaa3b7c7b71bfb190b"
}
model_version {
  id: "49219b5968624221ac488303dde55327"
  created_at {
    seconds: 1646391865
    nanos: 51793000
  }
  status {
    code: MODEL_TRAINED
    description: "Model is trained and ready"
  }
  active_concept_count: 2
  metrics {
    status {
      code: MODEL_EVALUATED
      description: "Model was successfully evaluated."
    }
    summary {
      macro_avg_roc_auc: 1.0
      macro_avg_f1_score: 1.0
      macro_avg_precision: 1.0
      macro_avg_recall: 1.0
    }
  }
  total_input_count: 158
  completed_at {
    seconds: 1646391870
    nanos: 501850000
  }
  visibility {
    gettable: PRIVATE
  }
  app_id: "my-text-model"
  user_id: "ei2leoz3s3iy"
  metadata {
  }
}
```
</details>

## Wait for Model Evaluation Results

Model evaluation takes some time; depending on the amount of data the model has. 

Let's wait for it to complete, and print all the results that it gives us.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonWaitModelEvaluationResults}</CodeBlock>
</TabItem>

</Tabs>
