---
description: Simple examples of workflows defined in YAML
sidebar_position: 1
---

# YAML-based Examples

**Simple examples of workflows defined in YAML**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeOutputASRYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/asr_yaml.txt";
import CodeOutputDemoYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/demo_yaml.txt";
import CodeOutputFaceSYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/face_search_yaml.txt";
import CodeOutputFaceSentiYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/face_senti_yaml.txt";
import CodeOutputGenYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/general_yaml.txt";
import CodeOutputLangAYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/lang_aware_yaml.txt";
import CodeOutputPrompterYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/prompter_llm_yaml.txt";
import CodeOutputRAGYaml from "!!raw-loader!../../../../code_snippets/python-sdk/workflows/outputs/rag_yaml.txt";



## Assorted Examples

| Node Name  | Input & Output  | Description  | Example Usage  |
| --- | --- | --- | :----:  |
| audio-to-text  | Audio -> Text  | Classify audio signal into string of text.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/audio-to-text.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>|
| barcode-operator  | Image -> Text  | Operator that detects and recognizes barcodes from the image. It assigns regions with barcode text for each detected barcode. Supports EAN/UPC, Code 128, Code 39, Interleaved 2 of 5 and QR Code.  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/barcode-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| Centroid Tracker  | Frames -> Track ID  | Centroid trackers rely on the Euclidean distance between centroids of regions in different video frames to assign the same track ID to detections of the same object.  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/centroid-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| Clusterer  | Embeddings -> Clusters  | Cluster semantically similar images and video frames together in embedding space. This is the basis for good visual search within your app at scale or for grouping your data together without the need for annotated concepts  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/clusterer.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| embeddings-classifier  | Embeddings -> Concepts  | Classify images or texts based on the embedding model that has indexed them in your app. Transfer learning leverages feature representations from a pre-trained model based on massive amounts of data, so you don't have to train a new model from scratch and can learn new things very quickly with minimal training data  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/embeddings-classifier.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| image-color-recognizer  | Image -> Colors  | Recognize standard color formats and the proportion each color that covers an image  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/image-color-recognizer.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| image-to-text  | Image -> Text  | Takes in cropped regions with text in them and returns the text it sees.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/image-to-text.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| kalman-filter-tracker  | Frames -> Track ID  | Kalman Filter trackers rely on the Kalman Filter algorithm to estimate the next position of an object based on its position and velocity in previous frames. Then detections are matched to predictions by using the Hungarian algorithm  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/kalman-filter-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| kalman-reid-tracker  | Frames -> Track ID  | Kalman reid tracker is a kalman filter tracker that expects the Embedding proto field to be populated for detections, and reassigns track IDs based off of embedding distance  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/kalman-reid-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| neural-lite-tracker  | Frames -> Track ID  | Neural Lite Tracker uses light-weight trainable graphical models to infer states of tracks and perform associations using hybrid similairty of lou and centroid distance  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/neural-lite-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| neural-tracker  | Frames -> Track ID  | Neural Tracker uses neural probabilistic models to perform filtering and association  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/neural-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| optical-character-recognizer  | Image -> Text  | Detect bounding box regions in images or video frames where text is present and then output the text read with the score  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/optical-character-recognizer.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| tesseract-operator  | Image -> Text  | Operator for Optical Character Recognition using the Tesseract libraries  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/tesseract-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| text-classifier  | Text -> Concepts  | Classify text into a set of concepts  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/text-classifier.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| text-embedder  | Text -> Embeddings  | Embed text into a vector representing a high level understanding from our Al models.  These embeddings enable similarity search and training on top of them  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/text-embedder.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| text-token-classifier  | Text -> Concepts  | Classify tokens from a set of entity classes  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/text-token-classifier.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| visual-classifier  | Image -> Concepts  | Classify images and videos frames into set of concepts  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/visual-classifier.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| visual-detector  | Image -> Bounding Box  | Detect bounding box regions in images or video frames where things and then classify objects, descriptive words or topics within the boxes  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/visual-detector.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| visual-embedder  | Image -> Embeddings  | Embed images and videos frames into a vector representing a high level understanding from our Al models. These embeddings enable visual search and training on top of them  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/visual-embedder.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| visual-segmenter  | Image -> Concepts  | Segment a per-pixel mask in images where things are and then classify objects, descriptive words or topics within the masks  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Predict/visual-segmenter.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| concept-thresholder  | Concepts -> Concpets  | Threshold input concepts according to both a threshold and an operator (>, >=, =, \<=, or \<). For example, assume the " > " threshold type is set for the model, then if the input concept value is greater than the threshold for that concept, the input concept will be output from this model, otherwise it will not be output by the model  |  <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Filter/concept-thresholder.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| random-sample  | Any -> Any  | Randomly sample allowing the input to pass to the output. This is done with the conditional keep_fraction > rand() where keep_fraction is the fraction to allow through on average  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Filter/random-sample.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| region-thresholder  | Concepts -> Concepts  | Threshold regions based on the concepts that they contain using a threshold per concept and an overall operator (>, >=, =, \<=, or \<). For example, assume the " > " threshold type is set for the model, then if the input regions[...].data.concepts.value is greater than the threshold for that concept, the input concept will be output from this model, otherwise it will not be output by the model. If the entire list of concepts at regions[...].data.concepts is filtered out then the overall region will also be removed  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Filter/region-thresholder.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| byte-tracker  | Frame -> Track ID  | Uses byte tracking algorithm for tracking objects  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/byte-tracker.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| concept-synonym-mapper  | Concept -> Concept  | Map the input concepts to output concepts by following synonym concept relations in the knowledge graph of your app  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/concept-synonym-mapper.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>     |
| image-align  | Image -> Image  | Aligns images using keypoints  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/image-align.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| image-crop  | Image -> Image  | Crop the input image according to each input region that is present in the input. When used in a workflow this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do image -> detector -> cropper type of workflow easily  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/image-crop.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| image-tiling-operator  | Image -> Image  | Operator for tiling images into a fixed number of equal sized images  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/image-tiling-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| image-to-image  | Image -> Image  | Given an image, apply a transformation on the input and return the post-processed image as output  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/image-to-image.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| input-filter  | Any -> Any  | If the input going through this model does not match those we are filtering for, it will not be passed on in the workflow branch  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/input-filter.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| input-searcher  | Concepts,Images,Text -> Hits  | Triggers a visual search in another app based on the model configs if concept(s) are found in images and returns the matched search hits as regions.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/keyword-filter-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| keyword-filter-operator  | Text -> Concepts  | This operator is initialized with a set of words, and then determines which are found in the input text.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/input-searcher.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| language-id-operator  | Text -> Concepts  | Operator for language identification using the langdetect library  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/language-id-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| multimodal-embedder  | Any -> Embeddings  | Embed text or image into a vector representing a high level understanding from our Al models, e.g. CLIP. These embeddings enable similarity search and training on top of them.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/multimodal-embedder.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| multimodal-to-text  | Any -> Text  | Generate text from either text or images or both as input, allowing it to understand and respond to questions about those images  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/multimodal-to-text.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| prompter  | Text -> Text  | Prompt template where inputted text will be inserted into placeholders marked with (data.text.raw).  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/prompter.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| rag-prompter  | Text -> Text  | A prompt template where we will perform a semantic search in the app with the incoming text. The inputted text will be inserted into placeholders marked with '(data.text.raw)' and search results will be inserted into placeholders with '`{data.hits}`', which will be new line separated  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/rag-prompter.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| regex-based-classifier  | Text -> Concepts  | Classifies text using regex. If the regex matches, the text is classified as the provided concepts.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/regex-based-classifier.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| text-to-audio  | Text -> Audio  | Given text input, this model produces an audio file containing the spoken version of the input  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/text-to-audio.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| text-to-image  | Text -> Image  | Takes in a prompt and generates an image  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/text-to-image.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| tiling-region-aggregator-operator  | Frames -> Concepts,Bounding Box  | Operator to be used as a follow up to the image-tiling-operator and visual detector. This operator will transform the detections on each of tiles back to the original image and perform non-maximum suppression. Only the top class prediction for each box is considered  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/tiling-region-aggregator-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>    |
| visual-keypointer  | Image -> Keypoints  | This model detects keypoints in images or video frames.  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Edit/visual-keypointer.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| isolation-operator  | Concepts,BoundingBox -> Concepts,BoundingBox  | Operator that computes distance between detections and assigns isolation label  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Aggregate/isolation-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| object-counter  | Concepts -> Metadata  | count number of regions that match this model's active concepts frame by frame  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Aggregate/object-counter.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a> |
| text-aggregation-operator  | Text -> Text  | Operator that combines text detections into text body for the whole image. Detections are sorted from left to right first and then top to bottom, using the top-left corner of the bounding box as reference  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Aggregate/text-aggregation-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| tokens-to-entity-operator  | Text,Concepts -> Text,Concepts  | Operator that combines text tokens into entities, e.g. New' + 'York' -> New York  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Aggregate/tokens-to-entity-operator.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| annotation-writer  | Any -> Any  | Write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/annotation-writer.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| aws-lambda  | Any -> Any  | This model sends data to an AWS lambda function so you can implement any arbitrary logic to be handled within a model predict or workflow. The request our API sends is a PostModelOutputsRequest in the 'request' field and the response we expect is a MultiOutputResponse response in the 'response' field  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/aws-lambda.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| email  | Any -> Any  | Email alert model will send an email if there are any data fields input to this model  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/email.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| results-push  | Any -> Any  | This model pushes clarifai prediction results in an external format  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/results-push.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>   |
| sms  | Any -> Any  | SMS alert model will send a SMS if there are any data fields input to this model  | <a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/sms.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |
| status-push  | Any -> Any  | This model pushes processing status of a batch of inputs ingested through vendor/inputs endpoint in one request  |<a href="https://github.com/Clarifai/examples/blob/main/workflows/configs/Nodes/Action/status-push.yml"><img src="/img/python-sdk/yaml.jpeg" width="50" height="50" /> </a>  |


## ASR Sentiment

Automatic Speech Recognition (ASR) sentiment analysis is the process of detecting the emotional tone or sentiment in spoken language by first transcribing speech using an ASR model and then analyzing the resulting text.

<CodeBlock className="language-text">{CodeOutputASRYaml}</CodeBlock>



## Demographics

This is a multi-model workflow designed to detect faces, crop them, and recognize key demographic characteristics. It visually classifies attributes such as age, gender, and cultural appearance.

<CodeBlock className="language-text">{CodeOutputDemoYaml}</CodeBlock>



## Face Search

A workflow that combines face detection, recognition, and embedding to generate facial landmarks and enable visual search based on the embeddings of detected faces.

<CodeBlock className="language-text">{CodeOutputFaceSYaml}</CodeBlock>



## Face Sentiment

A multi-model workflow that combines face detection with sentiment classification to recognize seven emotional expressions: anger, disgust, fear, neutral, happiness, sadness, and contempt.

<CodeBlock className="language-text">{CodeOutputFaceSentiYaml}</CodeBlock>


## General

A general-purpose image detection workflow that identifies a wide range of common objects and enables visual search using embeddings generated from the detected regions.

<CodeBlock className="language-text">{CodeOutputGenYaml}</CodeBlock>


## Language Aware OCR

A workflow that performs Optical Character Recognition (OCR) across multiple languages, automatically adapting to the language present in the input text.

<CodeBlock className="language-text">{CodeOutputLangAYaml}</CodeBlock>

## Prompter LLM

A workflow that utilizes a prompt template to interact with a Large Language Model (LLM), enabling dynamic and context-aware text generation based on input data.

<CodeBlock className="language-text">{CodeOutputPrompterYaml}</CodeBlock>


## RAG Prompter LLM

This workflow combines a Large Language Model (LLM) with a Retrieval-Augmented Generation (RAG) prompter template to generate responses informed by relevant external knowledge.

<CodeBlock className="language-text">{CodeOutputRAGYaml}</CodeBlock>


:::tip

Click [here](https://github.com/Clarifai/examples/tree/main/workflows/configs) to view more YAML-based workflows examples.

:::