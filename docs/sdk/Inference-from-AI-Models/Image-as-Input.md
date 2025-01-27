---
sidebar_position: 1
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeVisualClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/visual_classifier.py";
import CodeVisualClassifierTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/visualClassifier.ts";

import CodeVisualDImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/visual_d_image.py";
import CodeVisualDImageTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/visualDetectorImage.ts";

import CodeVisualDVideo from "!!raw-loader!../../../code_snippets/python-sdk/inference/visual_d_video.py";
import CodeVisualDVideoTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/visualDetectorVideo.ts";

import CodeVisualSegmenter from "!!raw-loader!../../../code_snippets/python-sdk/inference/visual_segmenter.py";
import CodeVisualSegmenterTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/visualSegmenter.ts";

import CodeImageToText from "!!raw-loader!../../../code_snippets/python-sdk/inference/image_to_text.py";
import CodeImageToTextTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/imageToText.ts";

import CodeImageToImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/image_to_image.py";
import CodeImageToImageTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/imageToImage.ts";

import CodeVisualEmbed from "!!raw-loader!../../../code_snippets/python-sdk/inference/visual_embedder.py";
import CodeVisualEmbedTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/visualEmbedder.ts";

import CodeOutputVisualClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/visual_classifier.txt";
import CodeOutputVisualDImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/visual_d_image.txt";
import CodeOutputVisualDVideo from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/visual_d_video.txt";
import CodeOutputVisualSegmenter from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/visual_segmenter.txt";
import CodeOutputImageToText from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/image_to_text.txt";
import CodeOutputVisualEmbed from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/visual_embedder.txt";

import CLIVisualClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/visual_classifier.sh";
import CLIVisualDetectorImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/visual_d_image.sh";
import CLIVisualDetectorVideo from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/visual_d_video.sh";
import CLIVisualSegmenter from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/visual_segmenter.sh";
import CLIImageToText from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/image_to_text.sh";
import CLIImageToImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/image_to_image.sh";
import CLIVisualEmbedder from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/visual_embedder.sh";


# Image as Input

**Learn how to perform inference with image as input using Clarifai SDKs**
<hr />

Clarifai SDKs empowers you to seamlessly integrate advanced image recognition functionalities into your applications, using the potential of artificial intelligence. The Clarifai SDKs utilises different model types that takes the image as inputs for various tasks.. Whether you're building applications for content moderation, object detection, or image classification, our SDK offers a robust foundation to turn images into actionable information. 

:::tip Clarifai CLI 

Learn how to use the Clarifai CLI (Command Line Interface) tool [here](https://docs.clarifai.com/sdk/Inference-from-AI-Models/#clarifai-cli).

:::

## Visual Classifier

Harnessing the power of Clarifai's Visual Classifier [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-classifier%22%5D%7D%5D), you can seamlessly categorize images through the intuitive Predict API for images. This capability enables you to submit input images to a classification model of your choice, providing a straightforward mechanism for obtaining accurate and meaningful predictions. You have the option to supply image data through either URLs or files, enhancing the adaptability of the platform for diverse image classification scenarios.


:::note
You can send up to 128 images in one API call. The file size of each image input should be less than 20MB.
:::




<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVisualClassifier}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualClassifier}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVisualClassifierTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIVisualClassifier}</CodeBlock>
</TabItem>

</Tabs>





## Visual Detector - Image

Dive into a richer understanding of image content with Clarifai's Predict API for Visual Detector [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D). Unlike image classification, where a single label is assigned to the entire image, Visual Detector goes beyond, detecting and outlining multiple objects or regions within an image, associating them with specific classes or labels. Similar to image classification, the Predict API for visual detection accommodates input images through URLs or files.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVisualDImage}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDImage}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVisualDImageTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIVisualDetectorImage}</CodeBlock>
</TabItem>

</Tabs>






## Visual Detector - Video

Enhance your capabilities with Clarifai's Predict API, which provides predictions for every frame when processing a video as input. The video Predict API is highly configurable, allowing users to fine-tune requests, including the number of frames processed per second for more control over analysis speed. Choose the most suitable [model](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D&page=2&perPage=24) for your visual detection task.

:::note
Video length should be at most 10mins in length or 100 MB in size when uploaded through URL.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVisualDVideo}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDVideo}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVisualDVideoTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIVisualDetectorVideo}</CodeBlock>
</TabItem>

</Tabs>





## Visual Segmenter

The Clarifai Predict API offers a powerful capability to generate segmentation masks by providing an image as input to a segmentation [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-segmenter%22%5D%7D%5D). This functionality allows for the detailed analysis of images, where distinct regions are identified and associated with specific concepts.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVisualSegmenter}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualSegmenter}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVisualSegmenterTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIVisualSegmenter}</CodeBlock>
</TabItem>

</Tabs>



## Image To Text

Enhance your application by producing descriptive captions for images using the Clarifai Predict API. By providing an image as input to a state-of-the-art image-to-text [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-text%22%5D%7D%5D), you can extract meaningful textual descriptions effortlessly.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeImageToText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageToText}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeImageToTextTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIImageToText}</CodeBlock>
</TabItem>

</Tabs>





## Image To Image

Elevate the resolution of your images using the Clarifai Predict API, specifically designed for image upscaling. This functionality allows you to enhance the quality of an image using an upscaling [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-image%22%5D%7D%5D).

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeImageToImage}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeImageToImageTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIImageToImage}</CodeBlock>
</TabItem>

</Tabs>

## Visual Embedder

The Predict API empowers you to leverage image embeddings through an embedding [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-embedder%22%5D%7D%5D). Image embeddings are vector representations that encapsulate the semantic content of an image, offering a powerful tool for various applications such as similarity search, recommendation systems, and more.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVisualEmbed}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualEmbed}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVisualEmbedTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIVisualEmbedder}</CodeBlock>
</TabItem>

</Tabs>




