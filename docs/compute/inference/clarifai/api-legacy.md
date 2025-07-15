---
description: Generate predictions using our older method
sidebar_position: 3
toc_max_heading_level: 4
---

# Legacy Inference via API

**Generate predictions using our older method**
<hr />

The legacy inference technique uses our previous API structure and is best suited for models built using the older techniques.

While this method remains functional, we recommend transitioning to the [new inference method](https://docs.clarifai.com/compute/models/inference/api) for improved efficiency, scalability, and access to the latest features.


:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [CLI](https://docs.clarifai.com/additional-resources/api-overview/cli), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO19 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model.py";
import CL22 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/cli_predict_with_model.sh";
import CO20 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_2.py";
import CO21 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/predict_with_model_3.py";


import OutputExample1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_1.txt";
import OutputExample2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_2.txt";
import OutputExample3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/output_example_3.txt";

import CodeVisualClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visual_classifier.py";
import CodeVisualClassifierTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visualClassifier.ts";

import CodeVisualDImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visual_d_image.py";
import CodeVisualDImageTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visualDetectorImage.ts";

import CodeVisualDVideo from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visual_d_video.py";
import CodeVisualDVideoTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visualDetectorVideo.ts";

import CodeVisualSegmenter from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visual_segmenter.py";
import CodeVisualSegmenterTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visualSegmenter.ts";

import CodeImageToText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/image_to_text.py";
import CodeImageToTextTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imageToText.ts";

import CodeImageToImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/image_to_image.py";
import CodeImageToImageTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imageToImage.ts";

import CodeVisualEmbed from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visual_embedder.py";
import CodeVisualEmbedTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/visualEmbedder.ts";

import CodeOutputVisualClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/visual_classifier.txt";
import CodeOutputVisualDImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/visual_d_image.txt";
import CodeOutputVisualDVideo from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/visual_d_video.txt";
import CodeOutputVisualSegmenter from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/visual_segmenter.txt";
import CodeOutputImageToText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/image_to_text.txt";
import CodeOutputVisualEmbed from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/visual_embedder.txt";

import CLIVisualClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/visual_classifier.sh";
import CLIVisualDetectorImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/visual_d_image.sh";
import CLIVisualDetectorVideo from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/visual_d_video.sh";
import CLIVisualSegmenter from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/visual_segmenter.sh";
import CLIImageToText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/image_to_text.sh";
import CLIImageToImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/image_to_image.sh";
import CLIVisualEmbedder from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/visual_embedder.sh";

import CodeTextClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_classifier.py";
import CodeTextClassifierTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textClassifier.ts";

import CodeTextGenLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_gen_llm.py";
import CodeTextGenLLMInference from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_gen_llm_inference.py";
import CodeTextGenLLMTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textGenerationUsingLLM.ts";

import CodeTextClassLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_class_llm.py";
import CodeTextClassLLMTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textClassifierUsingLLM.ts";


import CodeTextImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_to_image.py";
import CodeTextImageTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textToImage.ts";

import CodeTextAudio from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_to_audio.py";
import CodeTextAudioTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textToAudio.ts";

import CodeTextEmbedder from "!!raw-loader!../../../../code_snippets/python-sdk/inference/text_embedder.py";
import CodeTextEmbedderTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/textEmbedder.ts";

import CLITextClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_classifier.sh";
import CLITextGenLLMInference from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_gen_llm_inference.sh";
import CLITextGenLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_gen_llm.sh";
import CLITextClassLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_class_llm.sh";
import CLITextImage from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_to_image.sh";
import CLITextAudio from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_to_audio.sh";
import CLITextEmbedder from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/text_embedder.sh";


import CodeOutputTextClassifier from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/text_classifier.txt";
import CodeOutputTextGenLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/text_gen_llm.txt";
import CodeOutputTextClassLLM from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/text_class_llm.txt";
import CodeOutputTextEmbedder from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/text_embedder.txt";

import CodeAudioText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/audio_to_text.py";
import CodeAudioTextTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/audioToText.ts";

import CLIAudioText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/cli/audioToText.sh";

import CodeOutputAudioText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/audio_to_text.txt";

import CodeImageText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imagetext_text.py";
import CodeImageTextTS from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imageTextToText.ts";

import CodeImageText01 from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imagetexttotext_localimage.py";
import CodeImageTextTS01 from "!!raw-loader!../../../../code_snippets/python-sdk/inference/imagetexttotext_localimage.ts";

import CodeOutputImageText from "!!raw-loader!../../../../code_snippets/python-sdk/inference/outputs/imagetext_text.txt";

import CodePythonViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/images_via_url.py";
import CodePythonViaURLMultiple from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/images_via_url_multiple.py";
import CodePythonViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/images_via_bytes.py";
import CodePythonImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/image_detection.py";
import CodePythonImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/image_segmentation.py";
import PythonImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/image_to_text.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/images_via_url.html"
import CodeJavaScriptViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/images_via_bytes.html"
import CodeJavaScriptImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/image_detection.html"
import CodeJavaScriptImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/image_segmentation.html"
import JavaScriptImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/image_to_text.html"

import CodeNodeJSViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/images_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/images_via_bytes.js";
import CodeNodeJSImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/image_detection.js";
import CodeNodeJSImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/image_segmentation.js";
import NodeJSImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/image_to_text.js";

import CodeJavaViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/images_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/images_via_bytes.java";
import JavaImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/image_detection.java";
import JavaImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/image_segmentation.java";
import JavaImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/image_to_text.java";

import CodePHPViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/images_via_url.php";
import CodePHPViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/images_via_bytes.php";
import PHPImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/image_detection.php";
import PHPImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/image_segmentation.php";
import PHPImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/image_to_text.php";

import CurlViaURL from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/images_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/images_via_bytes.sh";
import CurlImageDetection from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/image_detection.sh";
import CurlImageSegmentation from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/image_segmentation.sh";
import CurlViaURLMultiple from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/images_via_url_multiple.sh";
import CurlImageToText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/image_to_text.sh";


import CodePythonViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/video_via_url.py";
import CodePythonViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/video_via_bytes.py";

import CodeJavaScriptViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/video_via_url.html";
import CodeJavaScriptViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/video_via_bytes.html";

import CodeNodeJSViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/video_via_url.js";
import CodeNodeJSViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/video_via_bytes.js";

import CodeJavaViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/video_via_url.java";
import CodeJavaViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/video_via_bytes.java";

import CodePHPViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/video_via_url.php";
import CodePHPViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/video_via_bytes.php";

import CurlViaURLVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/video_via_url.sh";
import CurlViaBytesVideo from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/video_via_bytes.sh";

import CodePythonViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/text_via_url.py";
import CodePythonViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/text_via_bytes.py";
import CodePythonViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/text_via_raw.py";
import CodePythonImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/image_generation.py";
import CodePythonTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/text_to_speech.py";

import CodeJavaScriptViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/text_via_url.html";
import CodeJavaScriptViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/text_via_bytes.html";
import CodeJavaScriptViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/text_via_raw.html";
import CodeJavaScriptImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/image_generation.html";
import CodeJavaScriptTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/text_to_speech.html";

import CodeNodeJSViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/text_via_url.js";
import CodeNodeJSViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/text_via_bytes.js";
import CodeNodeJSViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/text_via_raw.js";
import CodeNodeJSImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/image_generation.js";
import CodeNodeJSTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/text_to_speech.js";

import CodeJavaViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/text_via_url.java";
import CodeJavaViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/text_via_bytes.java";
import CodeJavaViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/text_via_raw.java";
import CodeJavaImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/image_generation.java";
import CodeJavaTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/text_to_speech.java";

import CodePHPViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/text_via_url.php";
import CodePHPViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/text_via_bytes.php";
import CodePHPViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/text_via_raw.php";
import CodePHPImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/image_generation.php";
import CodePHPTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/text_to_speech.php";

import CurlViaURLText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/text_via_url.sh";
import CurlViaBytesText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/text_via_bytes.sh";
import CurlImageGenerationText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/image_generation.sh";
import CurlViaRawText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/text_via_raw.sh";
import CurlTextToSpeechText from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/text_to_speech.sh";
import ThirdPartyKey from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/third_party_api_key.sh";

import CodePythonLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/llms_3.py";
import CodeJavaScriptLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/llms_3.html"
import CodeNodeJSLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/llms_3.js";
import CodeJavaLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/llms_3.java";
import CodePHPLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/llms_3.php";
import CodeCurlLLM from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/llms_3.sh";

import CodePythonParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/llms_param.py";
import CodeJavaScriptParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/llms_param.html"
import CodeNodeJSParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/llms_param.js";
import CodeJavaParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/llms_param.java";
import CodePHPParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/llms_param.php";
import CodeCurlParam from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/llms_param.sh";


import PythonPredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/audio_via_url.py";
import PythonViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/audio_via_bytes.py";

import JSPredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/audio_via_url.html";
import JSViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/audio_via_bytes.html";

import NodePredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/audio_via_url.js";
import NodeViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/audio_via_bytes.js";

import JavaPredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/audio_via_url.java";
import JavaViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/audio_via_bytes.java";

import PHPPredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/audio_via_url.php";
import PHPViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/audio_via_bytes.php";

import CurlPredictURLAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/audio_via_url.sh";
import CurlViaBytesAudio from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/audio_via_bytes.sh";

import CodePythonMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/multimodal-to-text.py";
import CodeJavaScriptMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/multimodal-to-text.html"
import CodeNodeJSMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/multimodal-to-text.js";
import CodeJavaMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/multimodal-to-text.java";
import CodePHPMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/multimodal-to-text.php";
import CodeCurlMultimodal from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/multimodal-to-text.sh";

import CodePythonEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/python/embeddings.py";
import CodeJavaScriptEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/js/embeddings.html"
import CodeNodeJSEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/node/embeddings.js";
import CodeJavaEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/java/embeddings.java";
import CodePHPEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/php/embeddings.php";
import CodeCurlEmbedding from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/embeddings.sh";

import CurlUnaryStream from "!!raw-loader!../../../../code_snippets/api-guide/predict/curl/unary-stream.sh";


## Legacy Inference via Compute Orchestration


:::note

Before making a prediction using our Compute Orchestration capabilities,  ensure that your model has been [deployed](https://docs.clarifai.com/compute/deployments/deploy-model), [as explained here](https://docs.clarifai.com/compute/models/inference/). 

:::


### Unary-Unary Predict Call

This is the simplest type of prediction. In this method, a single input is sent to the model, and it returns a single response. This is ideal for tasks where a quick, non-streaming prediction is required, such as classifying an image.

It supports the following prediction methods:

- `predict_by_url`  — Use a publicly accessible URL for the input.
- `predict_by_bytes` — Pass raw input data directly.
- `predict_by_filepath` — Provide the local file path for the input. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO19}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">{CL22}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample1}</CodeBlock>
</details>

### Unary-Stream Predict Call 

The **Unary-Stream** predict call processes a single input, but returns a stream of responses. It is particularly useful for tasks where multiple outputs are generated from a single input, such as generating text completions from a prompt.

It supports the following prediction methods:

- `generate_by_url`  — Provide a publicly accessible URL and handle the streamed responses iteratively.
- `generate_by_bytes` — Use raw input data.
- `generate_by_filepath` — Use a local file path for the input.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO20}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUnaryStream}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample2}</CodeBlock>
</details>

###  Stream-Stream Predict Call 

The **stream-stream** predict call enables bidirectional streaming of both inputs and outputs, making it highly effective for processing large datasets or real-time applications.

In this setup, multiple inputs can be continuously sent to the model, and the corresponding multiple predictions are streamed back in real-time. This is ideal for tasks like real-time video processing/predictions or live sensor data analysis.

It supports the following prediction methods:

- `stream_by_url` — Stream a list of publicly accessible URLs and receive a stream of predictions. It takes an iterator of inputs and returns a stream of predictions.
- `stream_by_bytes` — Stream raw input data.
- `stream_by_filepath` — Stream inputs from local file paths.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO21}</CodeBlock>
</TabItem>
</Tabs>

<!--
<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputExample3}</CodeBlock>
</details>

-->

## Legacy Inference via Traditional Methods

### Image as Input


:::tip

When you take an image with a digital device (such as a smartphone camera) the image's meta-information (such as the orientation value for how the camera is held) is stored in the image's [Exif's data](https://en.wikipedia.org/wiki/Exif). And when you use a photo viewer to check the image on your computer, the photo viewer will respect that orientation value and automatically rotate the image to present it the way it was viewed. This allows you to see a correctly-oriented image no matter how the camera was held.

So, when you want to make predictions from an image taken with a digital device, you need to strip the Exif data from the image. Since the Clarifai platform does not account for the Exif data, removing it allows you to make accurate predictions using images in their desired rotation.

:::

#### Visual Classifier

You can use a [visual classifier](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-classifier%22%5D%7D%5D) model to categorize images into predefined classes based on their visual content. You can provide image data either through URLs or by uploading files.

##### Predict via URL

:::note

You can send up to 128 images in a single API call, with each image file sized under 20MB. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#upload-limits).

:::




<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualClassifier}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualClassifierTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualClassifier}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{CodeNodeJSViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{CodeJavaViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURL}</CodeBlock>
</TabItem>

</Tabs>


<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualClassifier}</CodeBlock>
</details> 

##### Predict via Bytes

Below is an example of how you would send the bytes of an image and receive model predictions.

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{CodeNodeJSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{CodeJavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytes}</CodeBlock>
</TabItem>

</Tabs>

#### Predict Multiple Inputs 

To predict multiple inputs at once and avoid the need for numerous API calls, you can use the following approach. 

Note that these examples are provided for cURL and Python, but the same concept is applicable to any supported programming language. 

<Tabs groupId="code">

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURLMultiple}</CodeBlock>
</TabItem>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaURLMultiple}</CodeBlock>
</TabItem>

</Tabs>

#### Visual Detector - Image

Unlike image classification, which assigns a single label to an entire image, a [visual detector](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D) model identifies and outlines multiple objects or regions within an image, associating each with specific classes or labels. 

You can provide input images either through URLs or by uploading files.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualDImage}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualDImageTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualDetectorImage}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonImageDetection}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageDetection}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{CodeNodeJSImageDetection}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java  (gRPC)">
    <CodeBlock className="language-java">{JavaImageDetection}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP  (gRPC)">
    <CodeBlock className="language-php">{PHPImageDetection}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageDetection}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDImage}</CodeBlock>
</details>

#### Visual Segmenter

You can use a [segmentation model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-segmenter%22%5D%7D%5D) to generate segmentation masks by providing an image as input. This enables detailed analysis by identifying distinct regions within the image and associating them with specific concepts.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualSegmenter}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualSegmenter}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualSegmenterTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualSegmenter}</CodeBlock>
</TabItem>
<TabItem value="python2 " label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{CodeNodeJSImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPImageSegmentation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageSegmentation}</CodeBlock>
</TabItem>
</Tabs>



#### Image-to-Text

You can use an [image-to-text](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-text%22%5D%7D%5D) model to generate meaningful textual descriptions from images.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageToText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageToText}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageToTextTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIImageToText}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonImageToText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JavaScriptImageToText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeJSImageToText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{JavaImageToText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPImageToText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageToText}</CodeBlock>
</TabItem>

</Tabs>





#### Image-to-Image

You can use an upscaling [image-to-image](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-image%22%5D%7D%5D) model to improve the quality of an image.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageToImage}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageToImageTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIImageToImage}</CodeBlock>
</TabItem>

</Tabs>

#### Visual Embedder

You can use an [embedding model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-embedder%22%5D%7D%5D) to generate embeddings from an image. Image embeddings are vector representations that capture the semantic content of an image, providing a powerful foundation for applications like similarity search, recommendation systems, and more.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualEmbed}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualEmbed}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js CLI">
    <CodeBlock className="language-typescript">{CodeVisualEmbedTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualEmbedder}</CodeBlock>
</TabItem>

</Tabs>

### Video as Input

:::note Configure FPS

When processing a video input, the API returns a list of predicted concepts for each frame. By default, the video is analyzed at 1 frame per second (FPS), which corresponds to one prediction every 1000 milliseconds. This rate can be adjusted by setting the `sample_ms` parameter in your prediction request.

The `sample_ms` defines the time interval, in milliseconds, between frames selected for inference. It must be a value between 100 and 60000.

It is calculated as: FPS = 1000 / `sample_ms`

For example, setting `sample_ms` to 1000 results in 1 FPS, which is the default rate.

:::

#### Visual Detector - Video

You can use a [visual detector](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D&page=2&perPage=24) model to get predictions for every frame when processing a video input. You can also fine-tune your requests by adjusting parameters, such as the number of frames processed per second, giving you greater control over the speed and depth of the analysis.

You can provide video inputs either through URLs or by uploading files.

:::note

When uploading via URL, videos must be no longer than 10 minutes in duration or 300MB in size. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#videos).

:::

##### Predict via URL

Below is an example of how you would send video URLs and receive predictions.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualDVideo}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDVideo}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualDVideoTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualDetectorVideo}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
     <CodeBlock className="language-python">{CodePythonViaURLVideo}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
     <CodeBlock className="language-javascript">{CodeJavaScriptViaURLVideo}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC) ">
     <CodeBlock className="language-javascript">{CodeNodeJSViaURLVideo}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
     <CodeBlock className="language-java">{CodeJavaViaURLVideo}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPViaURLVideo}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURLVideo}</CodeBlock>
</TabItem>

</Tabs>

##### Predict via Bytes

Below is an example of how you would send the bytes of a video and receive predictions.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaBytesVideo}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
  <CodeBlock className="language-javascript">{CodeJavaScriptViaBytesVideo}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
  <CodeBlock className="language-javascript">{CodeNodeJSViaBytesVideo}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
  <CodeBlock className="language-java">{CodeJavaViaBytesVideo}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPViaBytesVideo}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytesVideo}</CodeBlock>
</TabItem>

</Tabs>


### Text as Input


#### Text Classifier 

You can use a [text classifier](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D) model to automatically categorize text into predefined categories based on its content. 

You can provide the text data via URLs, file uploads, or by entering raw text directly.

:::note

The file size of each text input should be less than 20MB. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#text-files).

:::

##### Predict via URL

Below is an example of how you would make predictions on passages of text hosted on the web.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextClassifier}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextClassifierTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextClassifier}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaURLText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaURLText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{CodeNodeJSViaURLText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
   <CodeBlock className="language-java">{CodeJavaViaURLText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{CodePHPViaURLText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURLText}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextClassifier}</CodeBlock>
</details> 

##### Predict via Local Files

Below is an example of how you would provide text inputs via local text files and receive predictions. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaBytesText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytesText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{CodeNodeJSViaBytesText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{CodeJavaViaBytesText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPViaBytesText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytesText}</CodeBlock>
</TabItem>

</Tabs>

##### Predict via Raw Text

Below is an example of how you would provide raw text inputs and receive predictions. 

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonViaRawText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaRawText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{CodeNodeJSViaRawText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
   <CodeBlock className="language-java">{CodeJavaViaRawText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{CodePHPViaRawText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaRawText}</CodeBlock>
</TabItem>

</Tabs>

#### Text Generation Using LLMs

You can use [text generation](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) models to dynamically create textual content based on user-defined prompts.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextGenLLM}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextGenLLMTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextGenLLM}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonLLM}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptLLM}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node,js (gRPC)">
 <CodeBlock className="language-javascript">{CodeNodeJSLLM}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{CodeJavaLLM}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPLLM}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurlLLM}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextGenLLM}</CodeBlock>
</details> 

#### Set Inference Parameters 

When making predictions using LLMs on our platform, some models offer the ability to specify various inference parameters to influence their output. 

These parameters control the behavior of the model during the generation process, affecting aspects like creativity, coherence, and the diversity of the generated text.

You can learn more about them [here](https://docs.clarifai.com/compute/inference/advanced). 

> **Note:** You can also find various examples of how to set inference parameters throughout this guide.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextGenLLMInference}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextGenLLMInference}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonParam}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptParam}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC) ">
 <CodeBlock className="language-javascript">{CodeNodeJSParam}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{CodeJavaParam}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPParam}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurlParam}</CodeBlock>
</TabItem>
</Tabs>

#### Text Classification Using LLMs

You can leverage [LLMs](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24) to categorize text using carefully crafted prompts.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextClassLLM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextClassLLM}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextClassLLMTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextClassLLM}</CodeBlock>
</TabItem>
</Tabs>



#### Text-to-Image

You can use a [text-to-image](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D) model to transform textual input into vibrant and expressive images.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextImage}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextImageTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextImage}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonImageGenerationText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptImageGenerationText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{CodeNodeJSImageGenerationText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
   <CodeBlock className="language-java">{CodeJavaImageGenerationText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{CodePHPImageGenerationText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImageGenerationText}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/text_to_image.png" />
</details> 

#### Text-to-Audio

You can use a [text-to-audio](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D) model to convert written text into natural, expressive speech.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextAudio}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextAudioTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextAudio}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonTextToSpeechText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptTextToSpeechText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{CodeNodeJSTextToSpeechText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
   <CodeBlock className="language-java">{CodeJavaTextToSpeechText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{CodePHPTextToSpeechText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTextToSpeechText}</CodeBlock>
</TabItem>

</Tabs>



#### Text Embedder 


You can use an [embedding model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D) to generate embeddings from text. These embeddings are vector representations that capture the semantic meaning of the text, making them ideal for applications such as similarity search, recommendation systems, document clustering, and more.

:::note

[Cohere Embed-v3](https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0) model requires an `input_type` parameter to be specified, which can be set using one of the following values:

- `search_document` (default): For texts (documents) intended to be stored in a vector database.
- `search_query`: For search queries to find the most relevant documents in a vector database.
- `classification`: If the embeddings are used as input for a classification system.
- `clustering`: If the embeddings are used for text clustering.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextEmbedder}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextEmbedderTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextEmbedder}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonEmbedding}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptEmbedding}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{CodeNodeJSEmbedding}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{CodeJavaEmbedding}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPEmbedding}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurlEmbedding}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextEmbedder}</CodeBlock>
</details> 

### Audio as Input


#### Audio-to-Text

You can use an [audio-to-text](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D) model to convert audio files into text. This enables the transcription of spoken words for a variety of use cases, including transcription services, voice command processing, and more.

##### Predict via URL

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAudioText}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeAudioTextTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIAudioText}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPredictURLAudio}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSPredictURLAudio}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{NodePredictURLAudio}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
   <CodeBlock className="language-java">{JavaPredictURLAudio}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
   <CodeBlock className="language-php">{PHPPredictURLAudio}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPredictURLAudio}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioText}</CodeBlock>
</details>

##### Predict via Bytes


<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonViaBytesAudio}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSViaBytesAudio}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
   <CodeBlock className="language-javascript">{NodeViaBytesAudio}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaViaBytesAudio}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPViaBytesAudio}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytesAudio}</CodeBlock>
</TabItem>

</Tabs>

### MultiModal as Input

#### [Image,Text]-to-Text

You can process multimodal inputs — combining multiple modalities, such as text, images, and/or other types of data — to generate accurate predictions.

Below is an example of how you can send both image and text inputs to a model.

##### Predict via Image URL

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageText}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageTextTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{CodePythonMultimodal}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptMultimodal}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{CodeNodeJSMultimodal}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
 <CodeBlock className="language-java">{CodeJavaMultimodal}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{CodePHPMultimodal}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CodeCurlMultimodal}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageText}</CodeBlock>
</details>

##### Predict via Local Image

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageText01}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageText}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageTextTS01}</CodeBlock>
</TabItem>
</Tabs>

### Use Third-Party API Keys 

:::info

The ability to use third-party API keys is currently exclusively available to Enterprise users. Learn more [here](https://www.clarifai.com/pricing). 

:::

For the third-party models we've wrapped into our platform, like those provided by OpenAI, Anthropic, Cohere, and others, you can also choose to utilize their API keys as an option—in addition to using the default Clarifai keys. 

This Bring Your Own Key (BYOK) flexibility allows you to integrate your preferred services and APIs into your workflow, enhancing the versatility of our platform.

Here is an example of how to add an OpenAI API key for [Dalle-3](https://clarifai.com/openai/dall-e/models/dall-e-3) for text-to-image tasks. 

<Tabs groupId="code">

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{ThirdPartyKey}</CodeBlock>
</TabItem>

</Tabs>




