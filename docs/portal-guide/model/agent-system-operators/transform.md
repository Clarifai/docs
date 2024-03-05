---
description: Learn about our transform operators
sidebar_position: 3
---

# Transform

**Learn about our transform operators**
<hr />

Transform operators are a specific type of agent system operators that are specialized for data transformation tasks. These operators are responsible for modifying and/or augmenting your data as it passes through the workflow.

They can be used to crop out regions of an image, align an image based on the pose of a face, or even map predictions from one model to another.

:::tip

Since the transform operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Image Cropper

**Output**: Regions

Allows you to crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do `image->detector->cropper` type of workflow easily.

## Image Align 

**Output**: Image

Allows you to align images using key points.

## Image Tiling Operator 

**Output**: Regions

This is an operator for tiling images into a fixed number of equal-sized images. 

## Image-to-Image

