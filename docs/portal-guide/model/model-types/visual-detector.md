---
description: Learn about our visual detector model type
sidebar_position: 3
---

# Visual Detector

**Learn about our visual detector model type**
<hr />

**Input**: Images and videos

**Output**: Regions

Visual detector, also known as object detection, is a type of deep fine-tuned model designed to identify and locate objects within images or video frames. It goes beyond simple image classification, where the goal is to assign a single label to an entire image.

Instead, an object detection model can identify multiple objects of different classes within an image and provide their corresponding bounding box coordinates. They help answer the question "Where" are objects in your data. 

The primary task of a visual detector model is twofold:

- **Object localization**: The model identifies the location of objects within an image by predicting bounding box coordinates that tightly enclose each object.
- **Object classification**: The model classifies each detected object into one of several predefined classes or categories.

:::info

The visual detector model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-detection-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual detector models have a wide range of applications, including:

- **Object detection**: This is the task of identifying and localizing objects in images. Visual detector models are used in a variety of applications, such as self-driving cars, security cameras, and robotics.
- **Image classification**: This is the task of classifying images into categories, such as "dog," "cat," or "tree." Visual detector models can be used to improve the accuracy of image classification models by providing them with information about the objects that are present in the image.
- **Visual tracking**: This is the task of tracking the movement of objects in images or videos. Visual detector models can be used to initialize visual trackers by identifying the objects that they need to track.

You may choose the visual detector model type in cases where:

- You want to detect and localize objects within an image, and accuracy and the ability to carefully target solutions take priority over speed and ease of use.
- You need a detection model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset with bounding box annotations for objects, and the expertise and time to fine-tune models.

## Example use case

A roofing company wants to provide insurance companies and customers with a consistent way of evaluating roof damage. This company captures images of roofs with a drone, and then feeds the images into a detection model. The detection model can then locate and classify specific areas of damage on the roofs.
