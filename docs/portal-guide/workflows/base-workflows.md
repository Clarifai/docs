---
description: >-
  Base workflows index your data and provide your app with a default knowledge
  base.
sidebar_position: 3
---

# Base Workflows

**Base workflows index your data and provide your app with a default knowledge base**
<hr />

The base workflow acts as the default knowledge base for your app and provides the basic structure for indexing your data. It gives you a "head start" when working with your data — by pre-indexing your inputs for search and by providing a default embedding for your custom models.

## How it Works

Your base workflow makes your data sortable and searchable as soon as it is uploaded. When you add an input to your app, the base workflow of your app computes the outputs from the model(s) in that workflow and indexes those outputs.

A base workflow usually contains [an embedding model](https://docs.clarifai.com/api-guide/predict/embeddings), which indexes the inputs. Those indexed outputs enable search and [transfer-learn](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) based training on top of the base workflow model(s).

## How to Choose a Base Workflow

You can choose a base workflow when [creating a new application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/). After selecting the primary input type for your app, the base workflow will be automatically selected for you — within the collapsible **Advanced Settings** field. 

Alternatively, you can select the one that aligns most with your specific use case from the drop-down list accessible when you click the workflows search box.

:::tip default base workflow

- If you select **Image/Video** as the primary input type when creating an application, [Universal](https://clarifai.com/clarifai/main/workflows/Universal) will automatically be set as the default base workflow. If you select **Text/Document** as the input type, [Text](https://clarifai.com/clarifai/main/workflows/Text) will be set as the default base workflow.

- If you create an application via the API, Universal will be set as the default base workflow unless you [specify a different one](https://docs.clarifai.com/api-guide/workflows/base-workflows/#update-your-base-workflow).

:::


![choose base workflow](/img/community_2/base_workflow_choose.png)

## How to Change a Base Workflow

You can also change the base workflow once your app is created. You can choose a public workflow available in the Clarifai app [here](https://clarifai.com/clarifai/main/workflows) or a workflow you've created in your app. 

To change it, go to your [**App Settings**](https://docs.clarifai.com/clarifai-basics/applications/application-settings#base-workflow) page and select the one you prefer from the list that drops down when you click the workflows search box. 

After selecting your preferred base workflow, click the **Change Base Workflow** button.

:::caution reindexing

- You can update the base workflow and choose to reindex existing inputs in your app. Reindexing will process all inputs through the new base workflow. This may take some time, and could incur costs. To avoid reindexing, do not click the **Reindex existing inputs** checkbox.
- During reindexing, existing data from the old base workflow isn't deleted. This means you can easily revert back to the old base workflow if needed.

:::

![change base workflow](/img/community_2/base_workflow_change.png)

## Base Workflows Use Cases

You should go for a workflow that optimizes your custom model performance. For example, if you're training a custom model around food, you could choose the **Food** model as your **Base Workflow** to yield better results.

Below is a table outlining the potential use cases for various base workflows. You can refer to this table to determine the workflow that best suits your needs.

### Empty

|Workflow                              |Use Case              |
|--------------------------------------|------------------------|
| [Empty](https://clarifai.com/clarifai/main/workflows/Empty) | Empty workflow for apps that do not need inputs to be indexed for search and/or transfer learning. For example, if the app is used for deep training and/or labeling, you can set the base workflow as **Empty** to speed up the input upload process; later, you can change to another workflow to index your app.  |

### Text Workflows

|Workflow                              |Use Case              |
|--------------------------------------|------------------------|
| [Text](https://clarifai.com/clarifai/main/workflows/Text) | A single-model workflow of text embedding model for general English text |
| [BAAI-General-Embedding-Base-en](https://clarifai.com/clarifai/main/workflows/baai-general-embedding-base-en)  | A workflow for text search  |  
| [Universal](https://clarifai.com/clarifai/main/workflows/Universal) | A universal workflow for text and image search |  
| [Roberta-embedder](https://clarifai.com/clarifai/main/workflows/Roberta-embedder) |   |
| [MSMARCO-Distilbert-Text-Search](https://clarifai.com/clarifai/main/workflows/msmarco-distilbert-text-search)  | Text search workflow for TREC (Text REtrieval Conference) 2022 |
| [Text-Moderation](https://clarifai.com/clarifai/main/workflows/Text-Moderation)| A single-model text moderation workflow that combines classification and embedding functions to classify harmful text content |

### Image Workflows

|Workflow                              |Use Case              |
|--------------------------------------|------------------------|
|[Demographics](https://clarifai.com/clarifai/main/workflows/Demographics)  | Multi-model workflow that detects, crops, and recognizes demographic characteristics of faces. Visually classifies age, gender, and multi-culture  |  
| [Universal](https://clarifai.com/clarifai/main/workflows/Universal) | A universal workflow for text and image search  |  
| [Apparel](https://clarifai.com/clarifai/main/workflows/Apparel)  |   |  
|[Face-V4](https://clarifai.com/clarifai/main/workflows/Face-V4) |   |  
| [General-Detection](https://clarifai.com/clarifai/main/workflows/General-Detection) | A general image detection workflow that detects a variety of common objects, and enables visual search using general embeddings on detected regions  |
| [OCR-Translation-English-Spanish](https://clarifai.com/clarifai/main/workflows/ocr-translation-english-spanish)|   |
| [Face-Sentiment](https://clarifai.com/clarifai/main/workflows/Face-Sentiment)| Multi-model workflow that combines face detection and sentiment classification of 7 concepts: anger, disgust, fear, neutral, happiness, sadness, contempt, and surprise |
| [Wedding](https://clarifai.com/clarifai/main/workflows/Wedding) | Visually classify wedding-related content and enable visual search using specific embeddings  |
| [Food](https://clarifai.com/clarifai/main/workflows/Food)| A workflow that combines detection, classification, and embedding functions to visually classify food items and enable visual search using embeddings  |
| [Moderation](https://clarifai.com/clarifai/main/workflows/Moderation) | An image moderation workflow that combines detection, classification, and embedding to classify harmful content and enable visual search using embeddings |
| [Travel](https://clarifai.com/clarifai/main/workflows/Travel) | A workflow that combines detection, classification, and embedding to classify travel-related properties and items, and enable visual search using embeddings |
| [Face](https://clarifai.com/clarifai/main/workflows/Face) | A workflow that combines detection, recognition, and embedding to generate face landmarks and enable visual search using detected faces' embeddings |
| [General](https://clarifai.com/clarifai/main/workflows/General) | A general image workflow that combines detection, classification, and embedding to identify general concepts, including objects, themes, moods, etc. |
| [Visual-Segmenter](https://clarifai.com/clarifai/main/workflows/Visual-Segmenter) | Generates image segmentation masks for concepts in an image  |
| [Segmentation](https://clarifai.com/clarifai/main/workflows/segmentation)  |   |
| [Person-Tracking](https://clarifai.com/clarifai/main/workflows/person-tracking)  |  |
| [Person-Tracking-Lite](https://clarifai.com/clarifai/main/workflows/person-tracking-lite)  |  |
| [Vehicle-Detection0](https://clarifai.com/clarifai/main/workflows/Vehicle-Detection0) |  |

### Audio Workflows

|Workflow                              |Use Case              |
|--------------------------------------|------------------------|
| [ASR-Sentiment](https://clarifai.com/clarifai/main/workflows/asr-sentiment)| Obtains the sentiment of an audio. Takes audio as input, runs an Audio Speech Recognition (ASR) model, and uses the resulting text as input to a text sentiment model |  
|[Audio-Sentiment](https://clarifai.com/clarifai/main/workflows/audio-sentiment)  | Obtains the sentiment of an audio. Takes audio as input, runs an Audio Speech Recognition (ASR) model, and uses the resulting text as input to a text sentiment model  |
| [ASR-Summarization](https://clarifai.com/clarifai/main/workflows/asr-summarization)| Summarize text from English audio |

