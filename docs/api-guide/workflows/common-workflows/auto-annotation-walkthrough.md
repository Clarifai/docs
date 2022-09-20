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

Since models are doing most of the work of annotating your data, this enables you to speed-up and scale-up your annotation process while ensuring quality standards, typically reducing human effort of labeling data by orders of magnitude. And since this is built into our APIs, it seamlessly integrates with all the search, training, and prediction functionality of the Clarifai platform.

When a concept is predicted by a model, it is predicted with a confidence score of between 0 and 1. In this walkthrough, we will leverage that score in our workflow so that when your model predictions are confident \(close to 1\), you can have your data automatically labeled with that concept. When your predictions are less-than-confident, you can have your input sent to a human reviewer.

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

import JavaCreateConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_concepts.java";
import JavaLinkConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/link_concepts.java";
import JavaCreateConceptMapperModel from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_concept_mapper_model.java";
import JavaCreateGreaterThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_greater_than_concept_thresholder.java";
import JavaCreateLessThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_less_than_concept-thresholder.java";
import JavaCreateWriteSuccess from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_write_success_asme_annotation.java";
import JavaCreateWritePending from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_write_pending_asme_annotation.java";
import JavaCreateWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/create_the_workflow.java";
import JavaMakeWorkflowDefault from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/make_new_workflow_apps_default.java";
import JavaAddImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/add_an_image.java";
import JavaListAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/list_annotations.java";

import CurlCreateConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_concepts.sh";
import CurlLinkConcepts from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/link_concepts.sh";
import CurlCreateConceptMapperModel from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_concept_mapper_model.sh";
import CurlCreateGreaterThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_greater_than_concept_thresholder.sh";
import CurlCreateLessThan from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_less_than_concept-thresholder.sh";
import CurlCreateWriteSuccess from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_write_success_asme_annotation.sh";
import CurlCreateWritePending from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_write_pending_asme_annotation.sh";
import CurlCreateWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/create_the_workflow.sh";
import CurlMakeWorkflowDefault from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/make_new_workflow_apps_default.sh";
import CurlAddImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/add_an_image.sh";
import CurlListAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/list_annotations.sh";


## Create Concepts

Let's start by creating the concepts we'll use in our model. We'll create the following concepts: `people`, `man` and `adult`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateConcepts}</CodeBlock>
</TabItem>

</Tabs>

## Link Concepts

Link the newly created concepts with concepts in the clarifai/main General model.

Run the code below three times; once for each concept you created previously. The concept IDs of the clarifai/main General models are as follows:

* `ai_l8TKp2h5` - the people concept;
* `ai_dxSG2s86` - the man concept;
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
    <CodeBlock className="language-java">{JavaLinkConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlLinkConcepts}</CodeBlock>
</TabItem>

</Tabs>

## Create a Concept Mapper Model

We're going to create a concept mapper model that translates the concepts from the General model to our new concepts. The model will map the concepts as synonyms. Hypernyms and hyponyms are supported as well.

We'll be setting the `knowledge_graph_id` value to be empty. 

If you want to define a subset of relationships in your app to be related to each other, you can provide the `knowledge_graph_id` to each concept relation and then provide that `knowledge_graph_id` as input to this model as well, which will only follow relationships in that subset of your app's knowledge graph.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateConceptMapperModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateConceptMapperModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaCreateConceptMapperModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateConceptMapperModel}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaCreateGreaterThan}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateGreaterThan}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaCreateLessThan}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateLessThan}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaCreateWriteSuccess}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWriteSuccess}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaCreateWritePending}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWritePending}</CodeBlock>
</TabItem>

</Tabs>

## Create the Workflow

We will now connect all the models together into a single workflow.

Every input will be predicted by the General Embed model to generate embeddings. The output of the embed model \(embeddings\) will be sent to the general concept to predict concept and cluster model. Then, the concept model's output \(a list of concepts with prediction values\) will be sent to the concept mapper model, which maps Clarifai's concepts to the concepts within your app—`people`, `man` and `adult` in this case.

Then, the mapped concepts will be sent to both concept threshold models—\(`GREATER THAN` and `LESS THAN`\). The `GREATER THAN` model will filter out the concepts that are lower than the corresponding value you defined in the model and send the remaining concept list to `write success as me` model, which labels the input with these concepts \(your app concepts only\) as you with `success` status. You can train or search on these concepts immediately. 

The `LESS THAN` model will filter out concepts that are higher than the corresponding value you defined in the model and send the remaining concept list to `write pending as me` model, which labels the input with these concepts \(your app concepts only\) as you with `pending` status.

The model IDs and model version IDs from the public `clarifai/main` application are fixed to the latest version at the time of this writing \(use the `GET /models` endpoint to get an up to date list of the available models\), so they are already hard-coded in the code examples below. 

It's possible to use other public models or model version IDs.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaCreateWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateWorkflow}</CodeBlock>
</TabItem>

</Tabs>

## Make the New Workflow Your App's Default

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
    <CodeBlock className="language-java">{JavaMakeWorkflowDefault}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMakeWorkflowDefault}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaAddImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddImage}</CodeBlock>
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
    <CodeBlock className="language-java">{JavaListAnnotations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotations}</CodeBlock>
</TabItem>

</Tabs>

