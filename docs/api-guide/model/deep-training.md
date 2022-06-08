---
description: Train the complete graph for your model.
sidebar_position: 6
---

# Deep Training

**Train the complete graph for your model**
<hr />

Clarifai offers a variety of prebuilt models that are designed to help you build AI solutions quickly and efficiently. Clarifai Models are the recommended starting points for many users because they offer incredibly fast training times when you customize them using the "Context-Based Classifier" type in Portal's Model Mode.

But there are many cases where accuracy and the ability to carefully target solutions takes priority over speed and ease of use. Additionally, you may need a model to learn new features, not recognized by existing Clarifai Models. For these cases, it is possible to "deep train" your custom models and integrate them directly within your workflows.

In general, deep trained models need more data than ones trained on top of Clarifai Models. For most applications you’ll need at least 1000 training inputs, but it could be much more than this depending on your specific use case.

You might consider deep training if you have:

* **A custom tailored dataset**
* **Accurate labels**
* **Expertise and time to fine tune models**


Deep training is in early access preview. To request access, [contact us](https://www.clarifai.com/contact).


## Template Types

You can take advantage of a variety of templates when building your deep trained models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way that your model learns.

### Visual Classifier

Classification templates let you classify what is in your images or videos.

### Visual Detector

Detection templates make it easy to build models that can identify objects within a region of your images or videos. Detection models return concepts and bounding boxes.

### Visual Embedder

Embedding models can be useful in their own right \(for applications like clustering and visual search\), or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.

## Hyperparameters

Deep training gives you the power to tune the hyperparameters that affect “how” your model learns. Model Mode dynamically changes the available hyperparameters based on the template selected.

* **average\_horizontal\_flips**⁠—Provides basic data augmentation for your dataset. If set to true, there is a 0.5 probability that current image and associated ground truth will flip horizontally.
* **base\_gradient\_multiplier**⁠—This sets the learning rate of the pre-initialized base \(also sometimes called "backbone"\) model that generates embeddings. Learning rate controls how the weights of our network are adjusted with respect to the loss gradient. The lower the value, the slower the trip along the downward slope. A low learning rate can help ensure that local minima are not missed, but can take a long time to converge, especially if the model gets stuck on a plateau region.
* **batch\_size**—The number of images used to make updates to the model. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase batch size if the model is large and taking a long time to train. You may also want to increase the batch size if the total number of model concepts is larger than the batch size \(you may want to increase it to around 2x the category count\).
* **detection\_score\_threshold**—Only bounding boxes with a detection score above this threshold will be returned.
* **image\_size**—The size of images used for training. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy.
* **init\_epochs**—The initial number of epochs before the first step/change in the **lrate**.
* **logreg**—Set to True to use **logistic regression**, set to False to use **softmax** \(for binary classification\).
* **lrate**—The learning rate is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function.
* **num\_epochs**—An epoch is defined as one-pass over the entire dataset. If you increase it, it will take longer to train but it could make the model more robust.
* **num\_items\_per\_epoch**—The number of training examples per "epoch". An epoch would be defined as one-pass over this amount of examples.
* **per\_128\_lrate**—Total change in **lrate** after 128 images processed. This is calculated as lrate = per\_128\_lrate \* \(batch\_size / 128\).
* **per\_item\_lrate**—The rate that model weights are changed per item.
* **step\_epochs**—The number of epochs between applications of the step/change in **lrate** scheduler.
* **test\_freq**—The number of epochs should you run before evaluation of the test set. Increased frequency can allow for more granular testing but will extend processing time.
* **use\_perclass\_regression**—Enables box coordinate local regression on a per-class basis. When set to True there will be `num_classes` sets of regressors for each anchor location. When set to False, there will be one coordinate regressor for each anchor location.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.py";
import PythonCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.py";
import PythonCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.py";
import PythonCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.py";
import PythonUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.py";

import NodeCreateClassifier from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_classifier.js";
import NodeCreateDetector from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_detector.js";
import NodeCreateEmbedder from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_visual_embedder.js";
import NodeCreateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/create_workflow_deep_trained_model.js";
import NodeUpdateWorkflow from "!!raw-loader!../../../code_snippets/api-guide/model/deep_training/update_default_workflow.js";

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::


## Create

### Create a Visual Classifier

Use a visual classifier model if you would like to classify images and videos frames into set of concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateClassifier}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateClassifier}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder trainInfoParams = Struct.newBuilder()
    .putFields(
        "num_epochs", Value.newBuilder().setNumberValue(2).build()

    )
    .putFields(
        "template", Value.newBuilder().setStringValue("classification_cifar10_v1").build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
    PostModelsRequest.newBuilder()
        .addModels(
            Model.newBuilder()
                .setId("lawrence-1591638385")
                .setModelTypeId("visual-classifier")
                .setTrainInfo(TrainInfo.newBuilder().setParams(trainInfoParams))
                .setOutputInfo(
                    OutputInfo.newBuilder()
                        .setData(
                            Data.newBuilder()
                                .addConcepts(Concept.newBuilder().setId("ferrari23"))
                                .addConcepts(Concept.newBuilder().setId("outdoors23"))
                        )
                        .setOutputConfig(
                            OutputConfig.newBuilder()
                                .setClosedEnvironment(true)
                        )
                )
        )
        .build()
);

if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/models' \
    -H 'Authorization: Key YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "model": {
            "id": "lawrence-1591638385",
            "model_type_id": "visual-classifier",
            "train_info": {
                "params": {
                    "template": "classification_cifar10_v1",
                    "num_epochs": 2
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {"id":"ferrari23"},
                        {"id":"outdoors23"}
                    ]
                },
                "output_config": {
                  "closed_environment" : true
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

### Create a Visual Detector

Create a visual detector to detect bounding box regions in images or video frames and then classify the detected images. You can also send the image regions to an image cropper model to create a new cropped image.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateDetector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateDetector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder trainInfoParams = Struct.newBuilder()
    .putFields(
        "num_epochs", Value.newBuilder().setNumberValue(2).build()

    )
    .putFields(
        "template", Value.newBuilder().setStringValue("Clarifai-InceptionV2").build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
    PostModelsRequest.newBuilder()
        .addModels(
            Model.newBuilder()
                .setId("detection-test-1591638385")
                .setModelTypeId("visual-detector")
                .setTrainInfo(TrainInfo.newBuilder().setParams(trainInfoParams))
                .setOutputInfo(
                    OutputInfo.newBuilder()
                        .setData(
                            Data.newBuilder()
                                .addConcepts(Concept.newBuilder().setId("ferrari23"))
                                .addConcepts(Concept.newBuilder().setId("outdoors23"))
                        )
                        .setOutputConfig(
                            OutputConfig.newBuilder()
                                .setClosedEnvironment(true)
                        )
                )
        )
        .build()
);

if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/models' \
    -H 'Authorization: Key YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "model": {
            "id": "detection-test-1591638385",
            "model_type_id": "visual-detector",
            "train_info": {
                "params": {
                    "template": "Clarifai-InceptionV2",
                    "num_epochs": 2
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {"id":"ferrari23"},
                        {"id":"outdoors23"}
                    ]
                },
                "output_config": {
                  "closed_environment" : true
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

### Create a Visual Embedder

Create a visual embedding model to transform images and videos frames into "high level" vector representation understood by our AI models. These embeddings enable visual search and can be used as base models to train other models.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateEmbedder}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateEmbedder}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder trainInfoParams = Struct.newBuilder()
    .putFields(
        "num_epochs", Value.newBuilder().setNumberValue(2).build()

    )
    .putFields(
        "template", Value.newBuilder().setStringValue("classification_basemodel_v1_embed").build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
    PostModelsRequest.newBuilder()
        .addModels(
            Model.newBuilder()
                .setId("embed-test-1591638385")
                .setModelTypeId("visual-embedder")
                .setTrainInfo(TrainInfo.newBuilder().setParams(trainInfoParams))
                .setOutputInfo(
                    OutputInfo.newBuilder()
                        .setData(
                            Data.newBuilder()
                                .addConcepts(Concept.newBuilder().setId("ferrari23"))
                                .addConcepts(Concept.newBuilder().setId("outdoors23"))
                        )
                        .setOutputConfig(
                            OutputConfig.newBuilder()
                                .setClosedEnvironment(true)
                        )
                )
        )
        .build()
);

if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/models' \
    -H 'Authorization: Key YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "model": {
            "id": "embed-test-1591638385",
            "model_type_id": "visual-embedder",
            "train_info": {
                "params": {
                    "template": "classification_basemodel_v1_embed",
                    "num_epochs": 2
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {"id":"ferrari23"},
                        {"id":"outdoors23"}
                    ]
                },
                "output_config": {
                  "closed_environment" : true
                }
            }
        }
    }'
```
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

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(
  PostWorkflowsRequest.newBuilder()
      .addWorkflows(
          Workflow.newBuilder()
              .setId("my-new-workflow-id")
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("embed")
                      .setModel(
                          Model.newBuilder()
                              .setId("{YOUR_EMBED_MODEL_ID}")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_EMBED_MODEL_VERSION_ID}")
                              )
                      )
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("my-custom-model")
                      .setModel(
                          Model.newBuilder()
                              .setId("{YOUR_CUSTOM_MODEL_ID}")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_CUSTOM_MODEL_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("embed"))
              )
      )
      .build()
);

if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/workflows' \
    -H 'Authorization: Key YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "workflows": [
            {
                "id": "my-new-workflow-id",
                "nodes": [
                    {
                        "id": "embed",
                        "model": {
                            "id": "{YOUR_EMBED_MODEL_ID}",
                            "model_version": {
                                "id": "{YOUR_EMBED_MODEL_VERSION_ID}"
                            }
                        }
                    },
                    {
                        "id": "my-custom-model",
                        "model": {
                            "id": "{YOUR_CUSTOM_MODEL_ID}",
                            "model_version": {
                                "id": "{YOUR_CUSTOM_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "embed"
                            }
                        ]
                    }
                ]
            }
        ]
    }'
```
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

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAppResponse patchAppsResponse = stub.patchApps(
    PatchAppsRequest.newBuilder()
        .setAction("overwrite")
        .addApps(
            App.newBuilder()
                .setId("{YOUR_APP_ID}")
                .setDefaultWorkflowId("auto-annotation-workflow-id")
        ).build()
);

if (patchAppsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch apps failed, status: " + patchAppsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH 'https://api.clarifai.com/v2/users/me/apps' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "action": "overwrite",
        "apps": [
            {
                "id": "{{app}}",
                "default_workflow_id": "auto-annotation-workflow-ID"
            }
        ]
    }'
```
</TabItem>
</Tabs>

