---
description: Make predictions on image inputs
sidebar_position: 1
---

# Images

**Make predictions on image inputs**
<hr />

To get predictions for a given image input, you need to supply the image along with the specific model from which you wish to receive predictions. You can supply the image via a publicly accessible URL or by directly sending bytes. 

You can send up to 128 images in one API call. Each image input should be limited to 85 megapixels and should not exceed 20MB in size.

You need to specify your choice of [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22image%22%5D%7D%5D) for prediction by utilizing the `MODEL_ID` parameter.

:::tip

When you take an image with a digital device (such as a smartphone camera) the image's meta-information (such as the orientation value for how the camera is held) is stored in the image's [Exif's data](https://en.wikipedia.org/wiki/Exif). And when you use a photo viewer to check the image on your computer, the photo viewer will respect that orientation value and automatically rotate the image to present it the way it was viewed. This allows you to see a correctly-oriented image no matter how the camera was held.

So, when you want to make predictions from an image taken with a digital device, you need to strip the Exif data from the image. Since the Clarifai platform does not account for the Exif data, removing it allows you to make accurate predictions using images in their desired rotation.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/images_via_url.py";
import CodePythonViaURLMultiple from "!!raw-loader!../../../code_snippets/api-guide/predict/python/images_via_url_multiple.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/images_via_bytes.py";
import CodePythonImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/python/image_detection.py";
import CodePythonImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/python/image_segmentation.py";
import PythonImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/python/image_to_text.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/images_via_url.html"
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/images_via_bytes.html"
import CodeJavaScriptImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/js/image_detection.html"
import CodeJavaScriptImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/js/image_segmentation.html"
import JavaScriptImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/js/image_to_text.html"

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/images_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/images_via_bytes.js";
import CodeNodeJSImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/node/image_detection.js";
import CodeNodeJSImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/node/image_segmentation.js";
import NodeJSImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/node/image_to_text.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/images_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/images_via_bytes.java";
import JavaImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/java/image_detection.java";
import JavaImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/java/image_segmentation.java";
import JavaImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/java/image_to_text.java";

import CodePHPViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/images_via_url.php";
import CodePHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/images_via_bytes.php";
import PHPImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/php/image_detection.php";
import PHPImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/php/image_segmentation.php";
import PHPImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/php/image_to_text.php";

import CurlViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/images_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/images_via_bytes.sh";
import CurlImageDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/image_detection.sh";
import CurlImageSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/image_segmentation.sh";
import CurlViaURLMultiple from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/images_via_url_multiple.sh";
import CurlImageToText from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/image_to_text.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/image_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/image_via_url.js";

import CodeOutputVisualDetection from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/visual_detection.txt";
import CodeOutputVisualSegmentation from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/visual_segmentation.txt";

import ExampleImageToText1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/image_to_text.txt";
import ExampleImageToText2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/image_to_text.js";

## Visual Classification

**Input**: Image

**Output**: [Concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete)

Visual classification, also known as image classification, is the process of categorizing images into predefined classes based on their visual content. Machine learning models are employed to recognize patterns within images and assign them to the appropriate class. 

After training, these models can classify new, unseen images by analyzing their visual content and assigning them to predefined categories based on what they've learned during training.

### Predict via URL

Below is an example of how you would send image URLs and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJSViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJavaViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHPViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURL}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>

### Predict via Bytes

Below is an example of how you would send the bytes of an image and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{CodeNodeJSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{CodeJavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{CodePHPViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytes}</CodeBlock>
</TabItem>

</Tabs>

### Predict Multiple Inputs 

To predict multiple inputs at once and avoid the need for numerous API calls, you can use the following approach. Note that these examples are provided for cURL and Python, but the same concept is applicable to any supported programming language. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURLMultiple}</CodeBlock>
</TabItem>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURLMultiple}</CodeBlock>
</TabItem>

</Tabs>

## Visual Detection

**Input**: Image

**Output**: Regions[...].data.concepts,regions[...].region_info

Visual detection, also known as object detection, involves identifying and locating objects or specific regions of interest within images. 

Unlike image classification, which assigns a single label or category to the entire image, visual detection provides more detailed information by detecting and outlining multiple objects or regions within the image, associating them with specific classes or labels.

Visual detection models are trained on labeled datasets with class labels and bounding box coordinates, enabling them to recognize object patterns and positions during inferencing.

Below is an example of how you would perform visual detection using the Clarifai's [`general-image-detection`](https://clarifai.com/clarifai/main/models/general-image-detection) model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonImageDetection}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageDetection}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{CodeNodeJSImageDetection}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImageDetection}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImageDetection}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageDetection}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDetection}</CodeBlock>
</details>

## Visual Segmentation

**Input**: Image

**Output**: Regions[...].region_info.mask,regions[...].data.con

Visual segmentation, or image segmentation, involves partitioning an image into distinct regions, each representing a meaningful object or component. Its purpose is to break down an image into meaningful parts, making it easier to analyze and understand. 

This is achieved by assigning labels to individual pixels based on shared characteristics. Image segmentation is commonly used to locate objects and boundaries in images, resulting in a set of segments that cover the entire image or a set of extracted contours.

Below is an example of how you would perform visual segmentation using the Clarifai's [`image-general-segmentation`](https://clarifai.com/clarifai/main/models/image-general-segmentation) model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{CodeNodeJSImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageSegmentation}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputVisualSegmentation}</CodeBlock>
</details>

## Image-to-Text

**Input**: Image

**Output**: Text

Image-to-text generation, also known as image captioning, refers to the process of generating textual descriptions or captions for images. 

It involves using a model to analyze the content of an image and then generate a coherent and relevant textual description that describes what is happening in the image—similar to how humans would describe it.

Below is an example of how you would perform image-to-text generation using the [general-english-image-caption-blip](https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip) model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImageToText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JavaScriptImageToText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{NodeJSImageToText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{JavaImageToText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImageToText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageToText}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-text">{ExampleImageToText1}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleImageToText2}</CodeBlock>
</details>