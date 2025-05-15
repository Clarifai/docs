---
description: Make predictions with your workflows
sidebar_position: 1
toc_max_heading_level: 4
---

# Workflow Inferences

**Make predictions with your workflows**
<hr />

You can make predictions using all the models in a workflow with a single API call. The cost of making predictions with a workflow is the same as calling individual models.

The request body follows the same structure as a standard prediction call. In the [response](https://docs.clarifai.com/resources/api-overview/api-outputs), a `results` object will contain the outputs from each model in the workflow, presented in the order they were defined.

:::note

The maximum number of inputs that can be processed at once with any given workflow is 32.

:::

## Predict via the UI

You can use a workflow to make predictions by following these steps: 

1. Go to the workflow's overview page;
2. Select a workflow version and upload an image or video;
3. View the predictions returned by each model in the workflow.

For example, let's use the custom workflow we [created previously](create.md#create-via-the-ui) to extract text from [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg), and then translate the extracted text into Spanish.

To do so, go to the workflow's overview page, select the version you want to use, and click the blue **"+"** button. 

Next, select the **Try your own image or video** option on the modal that appears. The small window that pops up allows you to upload the image.

![alt_text](/img/community_2/workflow_predict_try_your_own_image.png)

After the image has been uploaded and processed, the output will contain the predictions each model in the workflow returns.

You can see in the screenshot below that the text was successfully extracted from the image and then translated into Spanish.

![alt_text](/img/community_2/workflow_prediction_output.png)

## Predict via the API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeTC from "!!raw-loader!../../../code_snippets/python-sdk/workflows/text_classifier.py";
import CodeTCTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textClassifier.ts";

import CodeSumm from "!!raw-loader!../../../code_snippets/python-sdk/workflows/summary.py";
import CodeSummTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textToTextSummarization.ts";


import CodeTGen from "!!raw-loader!../../../code_snippets/python-sdk/workflows/text_generation.py";
import CodeTGenTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textToTextGeneration.ts";

import CodeVC from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visual_class.py";
import CodeVCTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visualClassifier.ts";

import CodeVS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visual_seg.py";
import CodeVSTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visualSegmenter.ts";

import CodeIT from "!!raw-loader!../../../code_snippets/python-sdk/workflows/image_to_text.py";
import CodeITTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/imageToText.ts";

import CodeTI from "!!raw-loader!../../../code_snippets/python-sdk/workflows/text_to_image.py";
import CodeTITS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textToImage.ts";


import CodeII from "!!raw-loader!../../../code_snippets/python-sdk/workflows/image_to_image.py";
import CodeIITS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/imageToImage.ts";

import CodeTA from "!!raw-loader!../../../code_snippets/python-sdk/workflows/text_to_audio.py";
import CodeTATS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textToAudio.ts";


import CodeAT from "!!raw-loader!../../../code_snippets/python-sdk/workflows/audio_to_text.py";
import CodeATTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/audioToText.ts";


import CodeVDF from "!!raw-loader!../../../code_snippets/python-sdk/workflows/vd_face.py";
import CodeVDFTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visualDetectorFace.ts";

import CodeVDO from "!!raw-loader!../../../code_snippets/python-sdk/workflows/vd_object.py";
import CodeVDOTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visualDetectorObject.ts";

import CodeTE from "!!raw-loader!../../../code_snippets/python-sdk/workflows/te.py";
import CodeTETS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/textToEmbedding.ts";


import CodeMM from "!!raw-loader!../../../code_snippets/python-sdk/workflows/multimodal.py";
import CodeMMTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/multiModal.ts";

import CodeVD from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visual_det.py";
import CodeVDTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/visualDetector.ts";


import CodeBP from "!!raw-loader!../../../code_snippets/python-sdk/workflows/batch_predict.py";
import CodeBPTS from "!!raw-loader!../../../code_snippets/python-sdk/workflows/batchPredict.ts";


import CodeOutputTC from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/text_classifier.txt";
import CodeOutputSumm from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/summary.txt";
import CodeOutputTGen from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/text_generation.txt";
import CodeOutputVC from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/visual_class.txt";
import CodeOutputIT from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/image_to_text.txt";
import CodeOutputAT from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/audio_to_text.txt";
import CodeOutputVDF from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/vd_face.txt";
import CodeOutputVDO from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/vd_object.txt";
import CodeOutputTE from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/te.txt";
import CodeOutputMM from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/multimodal.txt";
import CodeOutputVD from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/visual_det.txt";
import CodeOutputBP from "!!raw-loader!../../../code_snippets/python-sdk/workflows/outputs/batch_predict.txt";

import PythonWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_images.py";
import JSWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_images.html";
import NodeWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_images.js";
import JavaWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_images.java";
import CurlWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_images.sh";
import PHPWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_images.php";

import ExampleCodeWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_images.txt";
import ExampleJSONWorkflowPredictImage from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_images.js";

import PythonWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_text.py";
import JSWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_text.html";
import NodeWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_text.js";
import JavaWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_text.java";
import CurlWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_text.sh";
import PHPWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_text.php";

import ExampleCodeWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_text.txt";
import ExampleJSONWorkflowPredictText from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_text.js";

import PythonWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_video.py";
import JSWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_video.html";
import NodeWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_video.js";
import JavaWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_video.java";
import CurlWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_video.sh";
import PHPWorkflowPredictVideo from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_video.php";

import PythonWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_audio.py";
import JSWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_audio.html";
import NodeWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_audio.js";
import JavaWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_audio.java";
import CurlWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_audio.sh";
import PHPWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_audio.php";

import ExampleCodeWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_audio.txt";
import ExampleJSONWorkflowPredictAudio from "!!raw-loader!../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_audio.js";


:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

:::tip

If you want to make a predict call with an external workflow that is outside the scope of your app, you need to use a PAT while specifying the `app_id` and the `user_id` associated with the workflow you want to use. 

:::

### Text Classifier

You can use a workflow to categorize and analyze text data.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTC}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTC}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTCTS}</CodeBlock>
</TabItem>
</Tabs>



### Text-to-Text - Summarization

You can use a workflow to generate concise summaries by extracting key insights from lengthy or complex textual content.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeSumm}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputSumm}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeSummTS}</CodeBlock>
</TabItem>
</Tabs>

### Text-to-Text - Generation

You can use a workflow to generate textual content based on a given prompt. This enables dynamic text generation for a wide range of use cases.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTGen}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTGen}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTGenTS}</CodeBlock>
</TabItem>
</Tabs>

### Text-to-Image

You can use a workflow generate images from textual prompts. This enables creative visual content generation based on descriptive input.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTI}</CodeBlock>
    <details>
  <summary>Image Output</summary>
    <img src="/img/python-sdk/TI.png"/>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTITS}</CodeBlock>
</TabItem>
</Tabs>


### Text-to-Audio

You can use a workflow to convert written text into high-quality audio. Simply submit text as input to generate natural-sounding speech.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTA}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTATS}</CodeBlock>
</TabItem>
</Tabs>

### Text-to-Embeddings

#### Example 1

You can use a workflow that combines embeddings and clustering to process, organize, and analyze diverse text data. This enables advanced language understanding and categorization.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTE}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTE}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTETS}</CodeBlock>
</TabItem>
</Tabs>

#### Example 2

Let's illustrate how you would produce embeddings and clusters from text inputs using Clarifai's [Language-Understanding](https://clarifai.com/clarifai/main/workflows/Language-Understanding) text workflow.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictText}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictText}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictText}</CodeBlock>
</details>


### Visual Classifier

You can use a workflow for visual classification tasks. This enables accurate and efficient categorization of images based on learned visual patterns.

#### Example 1

Let's illustrate how you would get predictions from a visual classifier workflow. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVC}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVCTS}</CodeBlock>
</TabItem>
</Tabs>

#### Example 2

Let's illustrate how you would get predictions from image inputs using Clarifai's [Face-Sentiment](https://clarifai.com/clarifai/main/workflows/Face-Sentiment) workflow. The workflow combines these three models: 

- A visual detector model that detects bounding box regions in an image;
- An image cropper model that extracts the specific region of interest from an image;
- A visual classifier model that classifies an image into a set of concepts.

Note that the `base64` output representation of the image in bytes is already in binary format. It is not encoded, so you do not need to decode it for further downstream tasks.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictImage}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictImage}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictImage}</CodeBlock>
</details>


### Visual Segmenter

You can use a workflow for visual segmentation tasks. This enables precise categorization of distinct regions within an image.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVS}</CodeBlock>
    <details>
  <summary>Image Output</summary>
    <img src="/img/python-sdk/visual_seg.png"/>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVSTS}</CodeBlock>
</TabItem>
</Tabs>




### Image-to-Text

You can use a workflow to extract and interpret text from images. This enables OCR applications to efficiently recognize, process, and convert visual text into machine-readable format.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIT}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIT}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeITTS}</CodeBlock>
</TabItem>
</Tabs>

### Image-to-Image

You can use a workflow to enhance and transform images, including upscaling for higher resolution and improved visual quality. This delivers a superior visual experience for end users.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeII}</CodeBlock>
    <details>
  <summary>Image Output</summary>
    <img src="/img/python-sdk/II.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeIITS}</CodeBlock>
</TabItem>
</Tabs>



### Audio-to-Text

#### Example 1

You can use a workflow to convert audio into text by transcribing the provided spoken content. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAT}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAT}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeATTS}</CodeBlock>
</TabItem>
</Tabs>

#### Example 2

Let's illustrate how you would get the sentiment of an audio input using Clarifai's [asr-sentiment](https://clarifai.com/clarifai/main/workflows/asr-sentiment) workflow.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictAudio}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictAudio}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictAudio}</CodeBlock>
</details>


### Visual Detector - Object Search

You can use a workflow to detect common objects in images and generate embeddings to enable fast, accurate visual search based on each object’s unique features.

:::note

When you input a video into the Workflow Predict API, the response includes a list of predicted concepts for each frame of the video. By default, the video is processed at 1 frame per second (FPS), but this rate can be customized in the predict request. This means you’ll receive a set of concepts for every second (1000 milliseconds) of your video.

To adjust the FPS rate, use the `sample_ms` parameter in your predict request. The `sample_ms` value specifies the time interval (in milliseconds) between frames selected for inference, determining how frequently frames are processed. 

The valid range for `sample_ms` is between 100 and 60,000 milliseconds.

> **Note:** FPS is calculated as: FPS = 1000 / sample_ms

For example, if `sample_ms` is set to 1000, the FPS rate will be 1 (the default value).

The Workflow Predict API has size and duration limitations for [video inputs](https://docs.clarifai.com/create/inputs/upload/#videos):

- Videos uploaded via URL can be up to 300MB in size or 10 minutes in length.
- Videos sent as byte data are limited to 128MB in size.

If your video exceeds these limits, you can split it into smaller segments for processing. Exceeding these limits may cause the process to time out and result in an error response.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVDO}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVDO}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVDOTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictVideo}</CodeBlock>
</TabItem>

</Tabs>


### Visual Detector - Face Search

You can use a workflow that combines face detection, recognition, and embedding to accurately identify facial landmarks. This approach not only detects faces but also generates distinctive embeddings, enabling efficient visual searches based on the unique features of each face.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVDF}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVDF}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVDFTS}</CodeBlock>
</TabItem>
</Tabs>


### Visual Detector  - Custom Workflow

You can use a workflow to detect a wide range of common objects within a video. It processes each frame to identify and localize objects, generating regions of interest that outline where the detected objects appear.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVD}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVD}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVDTS}</CodeBlock>
</TabItem>
</Tabs>


### Multimodal Inputs

You can provide data in multiple formats — such as text, images, or a combination of both — to a workflow and receive prediction results tailored to your input.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeMMTS}</CodeBlock>
</TabItem>
</Tabs>



### Batch Predict - Workflows

You can use a workflow to process multiple inputs in a single request. You can submit a batch of data and receive comprehensive predictions for all inputs.

:::info

The batch size should not exceed 32.

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeBP}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputBP}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeBPTS}</CodeBlock>
</TabItem>
</Tabs>





