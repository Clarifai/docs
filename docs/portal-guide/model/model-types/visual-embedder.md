---
description: Learn about our visual embedder model type
sidebar_position: 6
---

# Visual Embedder 

**Learn about our visual embedder model type**
<hr />

**Input**: Images and videos

**Output**: Embeddings

Visual embedder, also known as visual embedding, is a type of deep fine-tuned model specifically designed to generate meaningful numerical representations (embeddings) from images and video frames.

The primary goal of a visual embedder model is to transform the raw pixel values of images or video frames into a compact and high-dimensional vector. These vectors capture essential features and patterns in the visual content, enabling the model to understand and process the data in a more structured and interpretable way.

These vectors can then be used for a variety of tasks, such as:

- **Visual search**: This is the task of finding images or videos that are similar to a given query image or video. The visual embedder model can be used to create a similarity metric between images or videos, which can then be used to search for similar visual content in a vector database.
- **Training on top of them**: The visual embedder model can also be used as a starting point for training other machine learning models. For example, a model that can classify images or videos can be trained on top of the visual embedder model.

:::info

The visual embedder model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-embedding-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

:::

You may choose a visual embedder model type in cases where:

- You need a model that can accurately represent images and video frames as vectors. Once the model is trained, you can use it to embed new images or videos into vectors.
- You need an embedding model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.
