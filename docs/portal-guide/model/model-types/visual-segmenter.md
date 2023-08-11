---
description: Learn about our visual segmenter model type
sidebar_position: 4
---

# Visual Segmenter

**Learn about our visual segmenter model type**
<hr />

**Input**: Images and videos

**Output**: Regions

Visual segmenter, also known as semantic segmentation, is a type of deep fine-tuned model used in image analysis and understanding tasks.

It aims to achieve a fine-grained understanding of the content within an image by associating each pixel with a particular class label. This is more detailed than traditional object detection, which typically identifies bounding boxes around objects.

The primary task of a visual segmenter model is twofold:

- **Semantic segmentation**: The model segments an input image into per-pixel masks, where each mask corresponds to a particular object or region of interest. Each pixel in the image is assigned a label that indicates the class of the object it belongs to. This process effectively divides the image into segments based on the objects or regions present in it.
- **Object classification or labeling**: Once the semantic segmentation is done, the model can then classify the segmented objects or regions into specific categories, descriptive words, or topics. This classification step involves assigning labels or tags to the segmented areas, indicating what each segment represents.

:::info

The visual segmenter model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-segmenter-templates) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual Segmenter models are used in a wide variety of applications, including:

- **Self-driving cars**: Visual Segmenter models can be used to identify objects in the road and surroundings, such as other cars, pedestrians, and traffic signs. This information can be used to help self-driving cars navigate safely.
- **Robotics**: Visual Segmenter models can be used to help robots interact with the physical world. For example, a robot could use a Visual Segmenter model to identify objects in its environment and then plan a path to avoid those objects.
- **Image editing**: Visual segmenter models can assist in automatic background removal, object manipulation, and other image editing tasks.
- **Augmented reality**: In AR applications, semantic segmentation helps in understanding the scene and integrating virtual objects more realistically.

You may choose a visual segmenter model type in cases where:

- Your application requires high accuracy, and you're willing to sacrifice speed and ease of use. These models tend to be computationally intensive due to their per-pixel processing. 
- You need a segmentation model to learn new features not recognized by the existing Clarifai models, especially if your application requires a detailed understanding of the content within an image at a per-pixel level. In that case, you may need to "deep fine-tune" your custom segmenter model and integrate it directly within your [workflows]( https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example use case

Given an image of a street scene, a visual segmenter model could segment the image into per-pixel masks representing cars, pedestrians, buildings, roads, and other objects. Then, for each segmented area, the model could classify the objects into categories like "sedan," "person," "skyscraper," and "asphalt road.”
