---
description: Learn about our tracker operators
sidebar_position: 8
---

# Tracker

**Learn about our tracker operators**
<hr />

Tracker operators are a specific type of agent system operators that are designed for object tracking in computer vision. Object tracking involves following the movement of objects in a sequence of images or frames in a video. Tracker models are trained using machine learning techniques to learn patterns and features that help them identify and track objects over time. 

The goal of object tracking is to maintain the identity of the object(s) over time, despite changes in position, scale, orientation, and lighting conditions.

:::tip

Since the tracker operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## BYTE Tracker 

**Output**: Regions

[BYTE Tracker](https://arxiv.org/abs/2110.06864) is a multi-object tracking by-detection model built upon the [Simple Online and Real-time Tracking](https://arxiv.org/abs/1602.00763) (SORT) principles. Multi-object tracking aims to predict the bounding boxes and identities of objects within video sequences.

With this operator, you can seamlessly integrate object tracking into your detect-track workflows, unlocking advanced capabilities.

Let's demonstrate how you can use the BYTE Tracker, alongside [a detection model](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector), to efficiently track objects in videos.

**1.** Go to the workflow builder. Search for the **visual-detector** option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options—including selecting the concepts you want to filter. 

**2.** Search for the **byte-tracker** option in the left-hand sidebar and drag it onto the workspace. You can set up the parameters for it. 

**3.** Connect the **visual-detector** model with the **byte-tracker** operator and save your workflow.

![](/img/agent-system-operators/byte_tracker_1.png)

To observe it in action, navigate to the workflow's individual page and click the **+** button to input your video. For this example, let's provide [this video](https://samples.clarifai.com/kep_CLIP_20180509-114253.mp4). 

The workflow will analyze the video and identify objects consistently throughout its duration.

![](/img/agent-system-operators/byte_tracker_2.png)

## Centroid Tracker

**Output**: Regions

Centroid trackers rely on the Euclidean distance between centroids of regions in different video frames to assign the same track ID to detections of the same object.

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
