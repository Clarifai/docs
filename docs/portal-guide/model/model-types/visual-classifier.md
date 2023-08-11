---
description: Learn about our visual classifier model type
sidebar_position: 2
---

# Visual Classifier 

**Learn about our visual classifier model type**
<hr />

**Input**: Images and videos

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts)

Visual classifier is a type of deep fine-tuned model that allows you to classify images and video frames into a set of concepts. It helps you answer the question "What" or "Who" is in your data.

:::info

The visual classifier model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates/) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual classifiers are commonly used for various computer vision tasks, such as:

- **Image classification**: Categorizing images into different concepts, such as "cat", "dog", "car", or "person".
- **Object detection**: Finding and identifying objects in images, such as faces, cars, or traffic signs.
- **Scene recognition**: Identifying the scene in an image, such as a beach, a forest, or a city.
- **Video analysis**: Tracking objects and events in videos.

You may choose a visual classifier model type in cases where:

- Accuracy and the ability to carefully target solutions take priority over speed and ease of use.
- You need a classification model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example use case

A large retailer is looking to find and remove listings for illegal objects and substances across thousands of listings that include user-generated data. A classification model allows the retailer to quickly find listings that violate their community rules, and remove them from the site.
