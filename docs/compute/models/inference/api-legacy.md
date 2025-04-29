---
description: Generate predictions using our older method
sidebar_position: 2
toc_max_heading_level: 4
---

# Legacy Inference via API

**Generate predictions using our older method**
<hr />

The legacy inference technique uses our previous API structure and is best suited for models built using the older techniques.

While this method remains functional, we recommend transitioning to the [new inference method](api.md) for improved efficiency, scalability, and access to the latest features.


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

## Legacy Inference via Compute Orchestration


:::note

Before making a prediction, ensure that your model has been deployed, [as mentioned previously](README.mdx). Otherwise, the prediction will default to the `Clarifai Shared` deployment type. 

:::


### Unary-Unary Predict Call

This is the simplest type of prediction. In this method, a single input is sent to the model, and it returns a single response. This is ideal for tasks where a quick, non-streaming prediction is required, such as classifying an image.

It supports the following prediction methods:

- `predict_by_url`  — Use a publicly accessible URL for the input.
- `predict_by_bytes` — Pass raw input data directly.
- `predict_by_filepath` — Provide the local file path for the input. 

<Tabs>
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

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CO20}</CodeBlock>
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

<Tabs>
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

#### Visual Classifier

You can use a [visual classifier](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-classifier%22%5D%7D%5D) model to categorize images by providing image data either through URLs or by uploading files.


:::note

You can send up to 128 images in a single API call, with each image file sized under 20MB. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#upload-limits).

:::




<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualClassifier}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualClassifier}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualClassifierTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualClassifier}</CodeBlock>
</TabItem>

</Tabs>





#### Visual Detector - Image

Unlike image classification, which assigns a single label to an entire image, a [visual detector](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D) model identifies and outlines multiple objects or regions within an image, associating each with specific classes or labels. You can provide input images either through URLs or by uploading files.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVisualDImage}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVisualDImage}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVisualDImageTS}</CodeBlock>
</TabItem>

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIVisualDetectorImage}</CodeBlock>
</TabItem>

</Tabs>

<Tabs>
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

</Tabs>


#### Visual Segmenter

You can use a [segmentation model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-segmenter%22%5D%7D%5D) to generate segmentation masks by providing an image as input. This enables detailed analysis by identifying distinct regions within the image and associating them with specific concepts.

<Tabs>
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

</Tabs>



#### Image-to-Text

You can use an [image-to-text](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-text%22%5D%7D%5D) model to generate meaningful textual descriptions from images.


<Tabs>
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

</Tabs>





#### Image-to-Image

You can use an upscaling [image-to-image](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-image%22%5D%7D%5D) model to improve the quality of an image.


<Tabs>
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

<Tabs>
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

#### Visual Detector - Video

You can use a [visual detector](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D&page=2&perPage=24) model to get predictions for every frame when processing a video input. You can also fine-tune your requests by adjusting parameters, such as the number of frames processed per second, giving you greater control over the speed and depth of the analysis.

:::note

When uploading via URL, videos must be no longer than 10 minutes in duration or 300MB in size. Learn more [here](https://docs.clarifai.com/create-manage/inputs/upload/#videos).

:::

### Text as Input


#### Text Classifier 

Empower your applications with text classification [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D) using Clarifai's Predict API for Text. By providing input text to your preferred classification model, you can gain valuable insights into the content's nature. This API offers flexibility, allowing you to provide data through URLs or files for seamless text classification.


:::note
The file size of each text input should be less than 20MB. Learn more [here](https://docs.clarifai.com/sdk/managing-inputs#api-upload-limits).
:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextClassifier}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextClassifier}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextClassifierTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextClassifier}</CodeBlock>
</TabItem>
</Tabs>






#### Text Generation Using LLM

Empower your applications with dynamic text creation using the robust capabilities of the Clarifai Predict API. This API leverages cutting-edge text generation [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) to generate textual content dynamically based on user-defined prompts, providing a versatile and powerful tool for various applications.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextGenLLM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextGenLLM}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextGenLLMTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextGenLLM}</CodeBlock>
</TabItem>
</Tabs>

##### Set Inference Parameters 

When making predictions using LLMs on our platform, some models offer the ability to specify various inference parameters to influence their output. These parameters control the behavior of the model during the generation process, affecting aspects like creativity, coherence, and the diversity of the generated text.

You can learn more about them [here](https://docs.clarifai.com/portal-guide/ppredict/generative-ai). 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextGenLLMInference}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextGenLLMInference}</CodeBlock>
</TabItem>
</Tabs>

#### Text Classifier Using LLM

Dive into the realm of text classification with Clarifai's Predict API, where you can leverage Language [Models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) (LLM) to categorize text based on carefully constructed prompts.

<Tabs>
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



#### Text  to Image

Leverage the power of the Predict API to seamlessly transform textual input into vibrant and expressive images. With the Text to Image [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D), you can effortlessly generate visually compelling content by providing text as input.




<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextImage}</CodeBlock>
    <details>
  <summary>Output</summary>
    <img src="/img/python-sdk/text_to_image.png" />
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextImageTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextImage}</CodeBlock>
</TabItem>
</Tabs>



#### Text to Audio

The Text to Audio [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D), powered by our Predict API, seamlessly transforms provided textual content into an audio file using advanced speech synthesis models. This capability allows users to effortlessly convert written text into a natural and expressive audio experience.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextAudio}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextAudioTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextAudio}</CodeBlock>
</TabItem>
</Tabs>



#### Text Embedder

The Predict API offers a versatile set of capabilities, including the conversion of text into embedding vectors through the Text Embedder [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D). This powerful functionality serves various purposes, making it an invaluable tool for applications such as Semantic Similarity Analysis, Content Recommendation Systems, Anomaly Detection, and Document Clustering.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextEmbedder}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextEmbedder}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextEmbedderTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLITextEmbedder}</CodeBlock>
</TabItem>
</Tabs>


### Audio as Input


#### Audio to Text

Harness the power of the Predict API to seamlessly transform audio files into text-based formats using our advanced Automatic Speech Recognition (ASR) [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D). With this functionality, you can effortlessly transcribe spoken words from audio, opening up possibilities for diverse applications such as transcription services, voice command processing, and more.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAudioText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioText}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeAudioTextTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIAudioText}</CodeBlock>
</TabItem>
</Tabs>


### MultiModal as Input



#### [Image,Text] to Text

Leverage the power of the Predict API to seamlessly process multimodal inputs and obtain accurate predictions. In this example, we demonstrate the capability to send both image and text inputs to a [model](https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision), showcasing the versatility of the Predict API in handling diverse data types.

##### Predict Via Image URL

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageText}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageTextTS}</CodeBlock>
</TabItem>
</Tabs>

##### Predict Via Local Image

<Tabs>
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





