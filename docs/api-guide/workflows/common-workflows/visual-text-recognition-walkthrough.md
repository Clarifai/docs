---
description: 'Work with text in images, just like you work with encoded text.'
sidebar_position: 4
---

# Visual Text Recognition

**Work with text in images, just like you work with encoded text**
<hr />

Visual text recognition (VTR) helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo \(such as the text on signs and billboards\), or text superimposed on an image \(such as in a meme\), and output the words and individual characters present in the images.

VTR lets you "digitize" text so that it can be edited, searched, stored, displayed, and analyzed.

![](/img/vtr.jpg)

:::tip Note
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
import JavaVTRWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/building_vtr_workflow.java";
import CurlVTRWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/building_vtr_workflow.sh";

## Building a VTR Workflow

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonVTRWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeVTRWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaVTRWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlVTRWorkflow}</CodeBlock>
</TabItem>

</Tabs>

