---
description: Learn about our tracker operators
sidebar_position: 7
---

# Tracker

**Learn about our tracker operators**
<hr />

## Centroid Tracker

**Output**: Regions

Centroid trackers rely on the Euclidean distance between centroids of regions in different video frames to assign the same track ID to detections of the same object.

## BYTE Tracker 

**Output**: Regions

Supports BYTE tracking

## Neural Tracker

**Output**: Regions

Neural tracker uses neural probabilistic models to perform filtering and association.

## Kalman Filter Tracker

**Output**: Regions

Kalman filter trackers rely on the Kalman filter algorithm to estimate the next position of an object based on its position and velocity in previous frames. Then detections are matched to predictions by using the Hungarian algorithm.

## Kalman Reid Tracker 

**Output**: Regions

Kalman reid tracker is a Kalman filter tracker that expects the embedding proto field to be populated for detections, and reassigns track IDs based off of the embedding distance.

## Neural Lite Tracker

**Output**: Regions

Neural lite tracker uses lightweight trainable graphical models to infer states of tracks and perform associations using the hybrid similarity of IoU and centroid distance.
