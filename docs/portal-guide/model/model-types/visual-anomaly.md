---
description: Learn about our visual anomaly  model type
sidebar_position: 5
---

# Visual Anomaly 

**Learn about our visual anomaly model type**
<hr />

**Input**: Images and videos

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts) 

Visual anomaly is a type of deep fine-tuned model that can be used to identify unusual or anomalous patterns in images and videos that differ from the expected norm. 

It does this by learning to identify normal patterns in images or videos and then using those patterns to detect anomalies in new images or videos. 

It works by first creating a heatmap of an image. The heatmap is a representation of the image where each pixel is assigned a value that indicates how likely it is to be anomalous. The model then calculates an image-level score for the image based on the heatmap. The image-level score indicates how likely it is that the image contains an anomaly.

:::info

The visual anomaly model type also comes with various templates that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way that your model learns.

:::

The visual anomaly model type can be used in a wide range of applications, including:

- **Object anomalies**: These are anomalies that occur in the objects in an image. For example, an object may be missing, or it may be in a different location than it should be.
- **Background anomalies**: These are anomalies that occur in the background of an image. For example, there may be a strange object in the background, or the background may be blurry.
- **Lighting anomalies**: These are anomalies that occur due to changes in lighting. For example, the image may be too dark or too bright, or there may be shadows in the image that should not be there.

You may choose a visual anomaly model type in cases where:

- You want to accurately find anomalous examples with only normal examples in training.
- You need a visual anomaly model to detect anomalous patterns not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example use case

In a manufacturing facility that produces electronic circuit boards, the quality control process is crucial to ensuring that the circuit boards are free from defects before they are shipped to customers. However, defects can occasionally occur during the manufacturing process, leading to malfunctioning products and customer dissatisfaction. In this scenario, a visual anomaly detection model can be employed to automatically inspect each circuit board for anomalies or defects. 
