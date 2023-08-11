---
description: Learn about our transform operators
sidebar_position: 2
---

# Transform

**Learn about our transform operators**
<hr />

## Image Cropper

**Output**: Regions

Allows you to crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do `image->detector->cropper` type of workflow easily.

## Image Align 

**Output**: Image

Allows you to align images using key points.

## Prompter

**Output**: Text

It’s a prompt template where inputted text will be inserted into placeholders marked with `{data.text.raw}`.

## Image Tiling Operator 

**Output**: Regions

This is an operator for tiling images into a fixed number of equal-sized images. 

## Image-to-Image

