---
description: Use facial recognition to identify individual people.
sidebar_position: 3
---

# Custom KNN Face Classifier Workflow

**Use facial recognition to identify individual people**
<hr />

Let's say you want to build a face recognition system that is able to differentiate between persons of whom you only have a few samples \(per person\). Machine learning models generally require a large inputs dataset to be able to classify the inputs well.

When a large dataset is the luxury you do not have, we recommend using our **KNN Classifier Model**, which uses k-nearest neighbor search and plurality voting amongst the nearest neighbors to classify new instances. It's recommended when you only have a small dataset like one input per concept.

In this walkthrough, you'll learn how to create a KNN classifier that's going to work based off the Clarifai's base Face model. The whole process below is going to be done programmatically, using the Clarifai's powerful API.

:::tip Tip
Each of the steps below can also be done manually on [the Clarifai Portal](https://portal.clarifai.com/).
:::

## Create a New Application

The first step is manual: in the Clarifai Portal, [create a new application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/) with **Face** selected as the Base Workflow.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddImages from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_add_images.py";
import PythonWaitUploadMap from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_wait_upload_map_ids_urls.py";
import PythonListAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_list_the_annotations.py";
import PythonPostNewAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_post_new_annotations.py";
import PythonCreateKnnModel from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_create_knn_model.py";
import PythonCreateWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_create_workflow.py";
import PythonPredict from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/knn_predict.py";


## Add Images

Add images that contain the faces you want to use as a training set.

Since the application's base model is Face, after adding an image, faces are automatically located and are available to be annotated.


<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddImages}</CodeBlock>
</TabItem>

</Tabs>

## Wait for Upload & Map IDs to URLs

Now we'll wait for all the images to finish uploading, and then create a dictionary mapping from an input ID to the URL. This will help us to annotate the proper image in the next step.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonWaitUploadMap}</CodeBlock>
</TabItem>

</Tabs>

## List the Annotations

Let's now print all the regions that the Face base model detected on our images.

The code below prints the annotations together with the model version ID and region ID. These two IDs will be needed in the next step to annotate using our custom concepts. We'll also need the base Face model ID, which is the one where `model_version_id` equals to `embedding_model_version_id`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonListAnnotations}</CodeBlock>
</TabItem>

</Tabs>

## Post New Annotations

Let's use the above information to add annotations, in the form of a concept, to the detected face regions.

Input below the IDs from the previous call, and choose your concept ID and name that you want to annotate the region with \(you may want to use e.g. person's name\).

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonPostNewAnnotations}</CodeBlock>
</TabItem>

</Tabs>

## Create a KNN Model

Let's now create a KNN model using the concept IDs that were added above. The model type ID should be set to `knn-concept`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateKnnModel}</CodeBlock>
</TabItem>

</Tabs>

## Create a Workflow

One last step before making predictions: let's create a workflow that's going to map from the base Face model to our custom KNN model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

## Predict

We're going to run a prediction on the workflow created above.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonPredict}</CodeBlock>
</TabItem>

</Tabs>

