---
description: >-
  Use AI to help you build AI. Auto annotation uses your model predictions to
  label your training data.
sidebar_position: 2
---

# Auto Annotation

**Use AI to help you build AI. Auto annotation uses your model predictions to label your training data**
<hr />

This tutorial demonstrates how auto-annotation workflows can be configured in the Clarifai API. With auto-annotation, you can use model predictions to label your inputs. Auto-annotation can help you prepare training data or assign other useful labels and metadata to your inputs. 

Since models are doing most of the work of annotating your data, this enables you to speed-up and scale-up your annotation process while ensuring quality standards, typically reducing human effort of labelling data by orders of magnitude. And since this is built into our APIs, it seamlessly integrates with all the search, training, and prediction functionality of the Clarifai platform.

When a concept is predicted by a model, it is predicted with a confidence score between 0 and 1. In this walkthrough, we will leverage that score in our workflow so that when your model predictions are confident \(close to 1\), you can have your data automatically labeled with that concept. When your predictions are less-than-confident, you can have your input sent to a human reviewer.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_concepts.py";
import PythonLinkConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/link_concepts.py";
import PythonCreateConceptMapperModel from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_concept_mapper_model.py";
import PythonCreateGreaterThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_greater_than_concept_thresholder.py";
import PythonCreateLessThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_less_than_concept-thresholder.py";
import PythonCreateWriteSuccess from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_write_success_asme_annotation.py";
import PythonCreateWritePending from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_write_pending_asme_annotation.py";
import PythonCreateWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/create_the_workflow.py";
import PythonMakeWorkflowDefault from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/make_new_workflow_apps_default.py";
import PythonAddImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/add_an_image.py";
import PythonListAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/list_annotations.py";

import NodeCreateConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_concepts.js";
import NodeLinkConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/link_concepts.js";
import NodeCreateConceptMapperModel from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_concept_mapper_model.js";
import NodeCreateGreaterThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_greater_than_concept_thresholder.js";
import NodeCreateLessThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_less_than_concept-thresholder.js";
import NodeCreateWriteSuccess from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_write_success_asme_annotation.js";
import NodeCreateWritePending from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_write_pending_asme_annotation.js";
import NodeCreateWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/create_the_workflow.js";
import NodeMakeWorkflowDefault from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/make_new_workflow_apps_default.js";
import NodeAddImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/add_an_image.js";
import NodeListAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/list_annotations.js";


## Create Concepts

Let's start by creating the concepts we'll use in our model. In this tutorial, we'll create the following concepts: `people`, `man` and `adult`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptResponse postConceptsResponse = stub.postConcepts(
    PostConceptsRequest.newBuilder()
        .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
        .addConcepts(
            Concept.newBuilder()
                .setId("peopleID")
                .setName("people")
        )
        .addConcepts(
            Concept.newBuilder()
                .setId("manID")
                .setName("man")
        )
        .addConcepts(
            Concept.newBuilder()
                .setId("adultID")
                .setName("adult")
        )
        .build()
);

if (postConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post concepts failed, status: " + postConceptsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/concepts' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "concepts": [
            {
                "id": "peopleID",
                "name": "people"
            },
            {
                "id": "manID",
                "name": "man"
            },
            {
                "id": "adultID",
                "name": "adult"
            }
        ]
    }'
```
</TabItem>
</Tabs>

## Link Concepts

Link the newly created concepts with concepts in the Clarifai/Main General model.

Run the code below three times; once for each concept created previously. The concept IDs of the Clarifai/Main General models are the following:

* `ai_l8TKp2h5` - the people concept,
* `ai_dxSG2s86` - the man concept,
* `ai_VPmHr5bm` - the adult concept.

Your model's concept IDs are the ones you created in the previous step: `peopleID`, `manID`, and `adultID`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonLinkConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeLinkConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(
    PostConceptRelationsRequest.newBuilder()
        .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
        .setConceptId("{YOUR_MODEL_CONCEPT_ID}")
        .addConceptRelations(
            ConceptRelation.newBuilder()
                .setObjectConcept(
                    Concept.newBuilder()
                        .setId("{GENERAL_MODEL_CONCEPT_ID}")
                        .setAppId("main")
                )
                .setPredicate("synonym").build())
        .build()
);

if (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/concepts/{YOUR_MODEL_CONCEPT_ID}/relations' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "concept_relations": [
            {

                "object_concept": {
                    "id": "{GENERAL_MODEL_CONCEPT_ID}",
                    "app_id": "main"
                },
                "predicate": "synonym"
            }
        ]
    }'
```
</TabItem>
</Tabs>

## Create a Concept Mapper Model

We're going to create a concept mapper model that translates the concepts from the General model to our new concepts. The model will map the concepts as synonyms. Hypernyms and hyponyms are supported as well.

We'll be setting the `knowledge_graph_id` value to be empty. If you want to define a subset of relationships in your app to be related to each other, you can provide the `knowledge_graph_id` to each concept relation and then provide that `knowledge_graph_id` as input to this model as well, which will only follow relationships in that subset of your app's knowledge graph.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateConceptMapperModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateConceptMapperModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder params = Struct.newBuilder()
    .putFields("knowledge_graph_id", Value.newBuilder().setStringValue("").build());

SingleModelResponse postModelsResponse = stub.postModels(
  PostModelsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addModels(
          Model.newBuilder()
              .setId("synonym-model-id")
              .setModelTypeId("concept-synonym-mapper")
              .setOutputInfo(
                  OutputInfo.newBuilder()
                      .setParams(params)
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/models' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "model": {
            "id": "synonym-model-id",
            "model_type_id": "concept-synonym-mapper",
            "output_info": {
                "params": {
                    "knowledge_graph_id": ""
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

## Create a "Greater Than" Concept Thresholder Model

This model will allow any predictions &gt;= the concept values defined in the model to be outputted from the model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateGreaterThan}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateGreaterThan}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder params = Struct.newBuilder()
  .putFields(
      "concept_threshold_type",
      Value.newBuilder().setNumberValue(ValueComparator.GREATER_THAN_VALUE).build()
  );

SingleModelResponse postModelsResponse = stub.postModels(
  PostModelsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addModels(
          Model.newBuilder()
              .setId("greater-than-model-id")
              .setModelTypeId("concept-threshold")
              .setOutputInfo(
                  OutputInfo.newBuilder()
                      .setData(
                          Data.newBuilder()
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("peopleID")
                                      .setValue(0.5f)
                              )
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("manID")
                                      .setValue(0.5f)
                              )
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("adultID")
                                      .setValue(0.95f)
                              )
                      )
                      .setParams(params)
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/models' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "model": {
            "id": "greater-than-model-id",
            "model_type_id": "concept-threshold",
            "output_info": {
                "data": {
                    "concepts": [
                        {
                            "id": "peopleID",
                            "value": 0.5
                        },
                        {
                            "id": "manID",
                            "value": 0.5
                        },
                        {
                            "id": "adultID",
                            "value": 0.95
                        }
                    ]
                },
                "params": {
                    "concept_threshold_type": 1
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

## Create a "Less Than" Concept Thresholder Model

This model will allow any predictions &lt; the concept values defined in the model to be outputted from the model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateLessThan}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateLessThan}</CodeBlock>
</TabItem>


<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder params = Struct.newBuilder()
    .putFields(
        "concept_threshold_type",
        Value.newBuilder().setNumberValue(ValueComparator.LESS_THAN_VALUE).build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
  PostModelsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addModels(
          Model.newBuilder()
              .setId("less-than-model-id")
              .setModelTypeId("concept-threshold")
              .setOutputInfo(
                  OutputInfo.newBuilder()
                      .setData(
                          Data.newBuilder()
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("peopleID")
                                      .setValue(0.5f)
                              )
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("manID")
                                      .setValue(0.5f)
                              )
                              .addConcepts(
                                  Concept.newBuilder()
                                      .setId("adultID")
                                      .setValue(0.95f)
                              )
                      )
                      .setParams(params)
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/models' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "model": {
            "id": "less-than-model-id",
            "model_type_id": "concept-threshold",
            "output_info": {
                "data": {
                    "concepts": [
                        {
                            "id": "peopleID",
                            "value": 0.5
                        },
                        {
                            "id": "manID",
                            "value": 0.5
                        },
                        {
                            "id": "adultID",
                            "value": 0.95
                        }
                    ]
                },
                "params": {
                    "concept_threshold_type": 3
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

## Create a "Write Success as Me" Annotation Writer Model

Any incoming Data object full of concepts, regions, etc. will be written by this model to the database as an annotation with ANNOTATION\_SUCCESS status as if the app owner did the work themself.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateWriteSuccess}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWriteSuccess}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder params = Struct.newBuilder()
    .putFields(
        "annotation_status", Value.newBuilder().setNumberValue(StatusCode.ANNOTATION_SUCCESS_VALUE).build()
    )
    .putFields(
        "annotation_user_id",
        Value.newBuilder().setStringValue("{YOUR_USER_ID}").build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
  PostModelsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addModels(
          Model.newBuilder()
              .setId("write-success-as-me-id")
              .setModelTypeId("annotation-writer")
              .setOutputInfo(
                  OutputInfo.newBuilder()
                      .setParams(params)
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/models' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "model": {
            "id": "write-success-as-me",
            "model_type_id": "annotation-writer",
            "output_info": {
                "params": {
                    "annotation_status": 24150,
                    "annotation_user_id": "{YOUR_USER_ID}"
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

## Create a "Write Pending as Me" Annotation Writer Model

Any incoming Data object full of concepts, regions, etc. will be written by this model to the database as an annotation with ANNOTATION\_PENDING status as if the app owner did the work themself, but needs further review. So, it is marked as pending.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateWritePending}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWritePending}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

Struct.Builder params = Struct.newBuilder()
    .putFields(
        "annotation_status", Value.newBuilder().setNumberValue(StatusCode.ANNOTATION_PENDING_VALUE).build()
    )
    .putFields(
        "annotation_user_id",
        Value.newBuilder().setStringValue("{YOUR_USER_ID}").build()
    );

SingleModelResponse postModelsResponse = stub.postModels(
  PostModelsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addModels(
          Model.newBuilder()
              .setId("write-pending-as-me-id")
              .setModelTypeId("annotation-writer")
              .setOutputInfo(
                  OutputInfo.newBuilder()
                      .setParams(params)
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/models' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/javascript' \
    --data-raw '{
        "model": {
            "id": "write-pending-as-me",
            "model_type_id": "annotation-writer",
            "output_info": {
                "params": {
                    "annotation_status": 24151,
                    "annotation_user_id": "{YOUR_USER_ID}"
                }
            }
        }
    }'
```
</TabItem>
</Tabs>

## Create the Workflow

We will now connect all the models together into a single workflow.

Every input will be predicted by General Embed model to generate embeddings. The output of the embed model \(embeddings\) will be sent to general concept to predict concept and cluster model. Then the concept model's output \(a list of concepts with prediction values\) will be sent to concept mapper model, which maps Clarifai concepts to your concepts within your app, `people`, `man` and `adult` in this case.

Then the mapped concepts will be sent to both concept thresholds models \(`GREATER THAN` and `LESS THAN`\). `GREATER THAN` model will filter out the concepts that are lower than corresponding value you defined in model and send the remaining concept list to `write success as me` model, which labels the input with these concepts \(your app concepts only\) as you with `success` status. You can train or search on these concepts immediately. 

The `LESS THAN` model will filter out concepts that are higher than the corresponding value you defined in the model and send the remaining concept list to `write pending as me` model, which labels the input with these concepts \(your app concepts only\) as you with `pending` status.

The model IDs and model version IDs from the public `clarifai/main` application are fixed to the latest version at the time of this writing \(check GET /models for an always up to date list of available models\), so they are already hard-coded in the code examples below. It's possible to use other public model or model version IDs.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(
  PostWorkflowsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addWorkflows(
          Workflow.newBuilder()
              .setId("auto-annotation-workflow-id")
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("general-embed")
                      .setModel(
                          Model.newBuilder()
                              .setId("bbb5f41425b8468d9b7a554ff10f8581")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("bb186755eda04f9cbb6fe32e816be104")
                              )
                      )
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("general-concept")
                      .setModel(
                          Model.newBuilder()
                              .setId("aaa03c23b3724a16a56b629203edc62c")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("aa7f35c01e0642fda5cf400f543e7c40")
                              )
                      )
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("general-cluster")
                      .setModel(
                          Model.newBuilder()
                              .setId("cccbe437d6e54e2bb911c6aa292fb072")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("cc2074cff6dc4c02b6f4e1b8606dcb54")
                              )
                      )
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("mapper")
                      .setModel(
                          Model.newBuilder()
                              .setId("synonym-model-id")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_SYNONYM_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("general-concept"))
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("greater-than")
                      .setModel(
                          Model.newBuilder()
                              .setId("greater-than-model-id")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_GREATER_THAN_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("mapper"))
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("write-as-success-as-me")
                      .setModel(
                          Model.newBuilder()
                              .setId("write-success-as-me-id")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_WRITE_SUCCESS_AS_ME_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("greater-than"))
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("less-than")
                      .setModel(
                          Model.newBuilder()
                              .setId("less-than-model-id")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_LESS_THAN_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("mapper"))
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("write-pending")
                      .setModel(
                          Model.newBuilder()
                              .setId("write-pending-as-me-id")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("{YOUR_WRITE_PENDING_AS_ME_MODEL_VERSION_ID}")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("less-than"))
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
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/workflows' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "workflows": [
            {
                "id": "auto-annotation-workflow-id",
                "nodes": [
                    {
                        "id": "general-embed",
                        "model": {
                            "id": "{YOUR_GENERAL_EMBED_MODEL_ID}",
                            "model_version": {
                                "id": "{YOUR_GENERAL_EMBED_MODEL_VERSION_ID}"
                            }
                        }
                    },
                    {
                        "id": "general-concept",
                        "model": {
                            "id": "{YOUR_GENERAL_CONCEPT_MODEL_ID}",
                            "model_version": {
                                "id": "{YOUR_GENERAL_CONCEPT_MODEL_VERSION_ID}"
                            }
                        }
                    },
                    {
                        "id": "general-cluster",
                        "model": {
                            "id": "{YOUR_GENERAL_CLUSTER_MODEL_ID}",
                            "model_version": {
                                "id": "{YOUR_GENERAL_CLUSTER_MODEL_VERSION_ID}"
                            }
                        }
                    },
                    {
                        "id": "mapper",
                        "model": {
                            "id": "synonym-model-id",
                            "model_version": {
                                "id": "{YOUR_MAPPER_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "general-concept"
                            }
                        ]
                    },
                    {
                        "id": "greater-than",
                        "model": {
                            "id": "greater-than-model-id",
                            "model_version": {
                                "id": "{YOUR_GREATER_THAN_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "mapper"
                            }
                        ]
                    },
                    {
                        "id": "write-success",
                        "model": {
                            "id": "write-success-as-me",
                            "model_version": {
                                "id": "{YOUR_WRITE_AS_ME_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "greater-than"
                            }
                        ]
                    },
                    {
                        "id": "less-than",
                        "model": {
                            "id": "less-than-model-id",
                            "model_version": {
                                "id": "{YOUR_LESS_THAN_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "mapper"
                            }
                        ]
                    },
                    {
                        "id": "write-pending",
                        "model": {
                            "id": "write-pending-as-me",
                            "model_version": {
                                "id": "{YOUR_WRITE_AS_COLLABORATOR_MODEL_VERSION_ID}"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "less-than"
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

## Make the New Workflow your App's Default

Make this the default workflow in the app. So, it will run every time we add an input and execute the auto annotation process. 

If the workflow is not the default workflow of your app, you can still use `PostWorkflowResults` on new inputs to check that you configured the workflow graph and your models properly, but the data will not be written to the DB. This is recommended before making it your default workflow and adding inputs to your app.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonMakeWorkflowDefault}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeMakeWorkflowDefault}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

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

## Add an Image

Adding an image will trigger the default workflow.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddImage}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeAddImage}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder()
        .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder()
                        .setImage(
                            Image.newBuilder()
                                .setUrl("{YOUR_IMAGE_URL}")
                        )
                )
        )
        .build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
curl -X POST 'https://api.clarifai.com/v2/users/me/apps/{{app}}/inputs' \
    -H 'Authorization: Key {{PAT}}' \
    -H 'Content-Type: application/json' \
    --data-raw '{
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": "{YOUR_IMAGE_URL}"
                    }
                }
            }
        ]
    }'
```
</TabItem>
</Tabs>

## List Annotations

You can now list annotations with your user ID and see the annotations created by your workflow.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonListAnnotations}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeListAnnotations}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
  ListAnnotationsRequest.newBuilder()
      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))
      .addUserIds("{YOUR_USER_ID}")
      .setListAllAnnotations(true)
      .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?user_ids={YOUR_USER_ID}
```
</TabItem>
</Tabs>

