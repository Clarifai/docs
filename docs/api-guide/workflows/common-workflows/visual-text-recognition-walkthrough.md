---
description: 'Work with text in images, just like you work with encoded text.'
sidebar_position: 4
---

# Visual Text Recognition

**Work with text in images, just like you work with encoded text**
<hr />

Visual text recognition helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo \(such as the text on signs and billboards\), or text superimposed on an image \(such as in a meme\), and output the words and individual characters present in the images.

VTR lets you "digitize" text so that it can be edited, searched, stored, displayed and analyzed.

![](/img/vtr.jpg)

:::note
The current version of our VTR model is not designed for use with handwritten text or documents with tightly-packed text—like you might see on the page of a novel, for example.
::::

## How VTR Works

VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. 

You will then add these three models to your workflow:

* **Visual Text Detection**
* **1.0 Cropper**
* **Visual Text Recognition**

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonVTRWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/building_vtr_workflow.py";
import NodeVTRWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/building_vtr_workflow.js";

## Building a VTR Workflow

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonVTRWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeVTRWorkflow}</CodeBlock>
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
              .setId("visual-text-recognition-id")
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("detect-concept")
                      .setModel(
                          Model.newBuilder()
                              .setId("2419e2eae04d04f820e5cf3aba42d0c7")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("75a5b92a0dec436a891b5ad224ac9170")
                              )
                      )
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("image-crop")
                      .setModel(
                          Model.newBuilder()
                              .setId("ce3f5832af7a4e56ae310d696cbbefd8")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("a78efb13f7774433aa2fd4864f41f0e6")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("detect-concept"))
              )
              .addNodes(
                  WorkflowNode.newBuilder()
                      .setId("image-to-text")
                      .setModel(
                          Model.newBuilder()
                              .setId("9fe78b4150a52794f86f237770141b33")
                              .setModelVersion(
                                  ModelVersion.newBuilder()
                                      .setId("d94413e582f341f68884cac72dbd2c7b")
                              )
                      )
                      .addNodeInputs(NodeInput.newBuilder().setNodeId("image-crop"))
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
                "id": "visual-text-recognition-id",
                "nodes": [
                    {
                        "id": "detect-concept",
                        "model": {
                            "id": "2419e2eae04d04f820e5cf3aba42d0c7",
                            "model_version": {
                                "id": "75a5b92a0dec436a891b5ad224ac9170"
                            }
                        }
                    },
                    {
                        "id": "image-crop",
                        "model": {
                            "id": "ce3f5832af7a4e56ae310d696cbbefd8",
                            "model_version": {
                                "id": "a78efb13f7774433aa2fd4864f41f0e6"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "general-concept"
                            }
                        ]
                    },
                    {
                        "id": "image-to-text",
                        "model": {
                            "id": "9fe78b4150a52794f86f237770141b33",
                            "model_version": {
                                "id": "d94413e582f341f68884cac72dbd2c7b"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "image-crop"
                            }
                        ]
                    },
                ]
            }
        ]
    }'
```
</TabItem>
</Tabs>

