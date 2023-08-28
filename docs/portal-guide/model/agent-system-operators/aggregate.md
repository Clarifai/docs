---
description: Learn about our aggregate operators
sidebar_position: 4
---

# Aggregate

**Learn about our aggregate operators**
<hr />

Aggregation operators consolidate multiple model outputs into a single output. Aggregation is important for a wide variety of image, video, and text use cases, and can help you count objects, connect individually detected words into sentences, or connect objects across multiple frames of video.

## Text Aggregation Operator 

**Output**: Text

This is an operator that combines text detections into a text body for the whole image. Detections are sorted from left to right first and then from top to bottom, using the top-left corner of the bounding box as a reference.

## Object Counter 

**Output**: Metadata

It allows you to count the number of regions that match this model's active concepts frame by frame.

## Track Representation Operator 

**Output**: Tracks

The operator takes the embedding of each track frame and aggregates them to form a track embedding.

## Tiling Region Aggregator Operator 

**Output**: Regions

This operator is to be used as a follow-up to the image tiling operator and visual detector. It will transform the detections on each of the tiles back to the original image, and perform non-maximum suppression. Only the top-class prediction for each box is considered. 