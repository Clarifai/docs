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

**Input**: `frames[…].data.regions[…].data.concepts`, `frames[…].data.regions[…].region_info.bounding_box`

**Output**: `frames[…].data.regions[…].track_id`

[BYTE Tracker](https://arxiv.org/abs/2110.06864) is a multi-object tracking by-detection model built upon the [Simple Online and Real-time Tracking](https://arxiv.org/abs/1602.00763) (SORT) principles. Multi-object tracking aims to predict the bounding boxes and identities of objects within video sequences.

Most tracking techniques retrieve identities by associating detection boxes whose scores are higher than a threshold. Unlike simpler trackers that ditch detections with low confidence scores, BYTE Tracker considers them, too, making it better at handling situations like temporary occlusions or lighting changes. 

Typically, it works in two stages:

1. **High Confidence Matches**: First, BYTE Tracker focuses on high-scoring detections (bounding boxes around objects). It uses a combination of motion similarity (how much the object moved between frames) and appearance similarity (features extracted from the object) to match these detections with existing tracks (tracklets). A motion prediction technique is then used to predict the position of these tracks in the next frame.

2. **Low Confidence Recovery**: Here's where BYTE Tracker differs. It revisits the low confidence detections (discarded by simpler trackers) and unmatched tracklets from the previous stage. Using the same motion similarity metric, BYTE Tracker tries to re-associate these with each other, potentially recovering tracks that were lost due to occlusions or low initial confidence.

With this powerful operator, you can seamlessly integrate object tracking into your detect-track workflows and unlock advanced capabilities. Let's demonstrate how you can use the BYTE Tracker, alongside [a detection model](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector), to efficiently track objects in videos.

**1.** Go to the workflow builder page. Search for the **visual-detector** option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options — including selecting the concepts you want to filter. 

**2.** Search for the **byte-tracker** option in the left-hand sidebar and drag it onto the workspace. You can set up its output configuration parameters, which are outlined below. 

**3.** Connect the **visual-detector** model with the **byte-tracker** operator and save your workflow.

![](/img/agent-system-operators/byte_tracker_1.png)

To observe it in action, navigate to the workflow's individual page and click the **+** button to input your video. For this example, let's provide [this video](https://samples.clarifai.com/kep_CLIP_20180509-114253.mp4). 

The workflow will analyze the video and identify objects consistently throughout its duration.

![](/img/agent-system-operators/byte_tracker_2.png)

## Centroid Tracker

**Input**: `frames[…].data.regions[…].data.concepts`, `frames[…].data.regions[…].region_info.bounding_box`

**Output**: `frames[…].data.regions[…].track_id`

Centroid trackers rely on the Euclidean distance between centroids of regions in different video frames to assign the same track ID to detections of the same object.

Here's a breakdown of how they operate:

1. **Object Detection**: In the first step, an object detector or a segmentation model (not part of the centroid tracker itself) identifies objects in each frame of a video. The detector outputs bounding boxes around the identified objects.

2. **Centroid Calculation**:  For each bounding box, the centroid tracker calculates its centroid. The centroid is simply the center point of the box, typically represented by its X and Y coordinates.

3. **Distance Comparison**: The tracker then compares the centroids of objects detected in the current frame with the centroids of objects from the previous frame. It calculates the Euclidean distance, which is a straight-line distance between two points in space.

4. **Track Assignment**: Based on a predefined threshold value, the tracker assigns track IDs. Objects in the current frame whose centroids are within a certain distance of a centroid in the previous frame are considered to be the same object and are assigned the same track ID. Objects with centroids exceeding the threshold distance are assumed to be new objects and assigned new track IDs.

Let's demonstrate how you can use the centroid tracker, alongside [a detection model](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector), to efficiently track objects in videos.

**1.** Go to the workflow builder page. Search for the **visual-detector** option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options — including selecting the concepts you want to filter. 

**2.** Search for the **centroid-tracker** option in the left-hand sidebar and drag it onto the workspace. You can set up its output configuration parameters, which are outlined below. 

**3.** Connect the **visual-detector** model with the **centroid-tracker** operator and save your workflow.

![](/img/agent-system-operators/tracker-1.png)

To observe it in action, navigate to the workflow's individual page and click the **+** button to input your video. For this example, let's provide [this video](https://samples.clarifai.com/kep_CLIP_20180509-114253.mp4). 

The workflow will analyze the video and identify objects consistently throughout its duration.

![](/img/agent-system-operators/tracker-2.png)

## Neural Tracker

**Output**: Regions

Neural tracker uses neural probabilistic models to perform filtering and association.

## Kalman Filter Hungarian Tracker

**Output**: Regions

Kalman filter trackers rely on the Kalman filter algorithm to estimate the next position of an object based on its position and velocity in previous frames. Then detections are matched to predictions by using the Hungarian algorithm.

## Kalman Reid Tracker 

**Output**: Regions

Kalman reid tracker is a Kalman filter tracker that expects the embedding proto field to be populated for detections, and reassigns track IDs based off of the embedding distance.

## Neural Lite Tracker

**Output**: Regions

Neural lite tracker uses lightweight trainable graphical models to infer states of tracks and perform associations using the hybrid similarity of IoU and centroid distance.


## Tracker Operators Parameters

Here is a table outlining the various output configuration parameters you can configure for each operator (the &#10003; symbol represents the operator that supports the parameter).

|Parameter  |Description |BYTE Tracker  | Centroid Tracker | Neural Tracker|Kalman Filter Hungarian Tracker | Kalman Reid Tracker |Neural Lite Tracker|   
|------------------------|------------------------|--------------|------------------|---------------|--------|---------------------|-------------------|
| `min_confidence`  |  This is the minimum confidence score for detections to be considered for tracking| &#10003; | &#10003;|&#10003;|&#10003;| &#10003;  |  &#10003;  |  
| `min_visible_frames`  |   Only return tracks with minimum visible frames > min_visible_frames|&#10003; |&#10003;|&#10003;| &#10003;| &#10003;  | &#10003;      | 
| `track_id_prefix`   | Prefix to add on to track and eliminate conflicts|&#10003;|&#10003;| |&#10003;|   &#10003;  |  &#10003;     | 
|  `max_disappeared`  | This is the number of maximum consecutive frames a given object is allowed to be marked as “disappeared” until we need to deregister the object from tracking |&#10003; |&#10003;|  &#10003; | &#10003;| &#10003; | &#10003;      | 
| `new_track_confidence_thresh`  | Initialize a new track if the confidence score of the new detection is greater than the setting  |&#10003;       |          |             |             |         |       | 
| `confidence_thresh`    | This is used to categorize high score detections for the first association if their scores are greater, and the second association if not |&#10003;       |          |             |             |         |       |   
|  `high_confidence_match_thresh`  | The distance threshold for high-score detection |&#10003;       |          |             |             |         |       |  
|  `low_confidence_match_thresh`  | The distance threshold for low-score detection |&#10003;       |          |             |             |         |       |   
| `unconfirmed_match_thresh` | The distance threshold for unconfirmed tracks, usually tracks with only one beginning frame. {“min”: 0, “max”: 1} |&#10003;       |          |             |             |         |       |   
| `max_distance`| Associate tracks with detections only when their distance is below max_distance|&#10003;|&#10003;| |&#10003; |  &#10003; |  &#10003;     |  
| `filtered_probability` | If false, return original detection probability; if true, return processed probability from the tracker | | | &#10003; |             |         |       |  
|`max_detection` |Maximum detection per frame | | |&#10003;|             |         |       |  
|`has_probability` | | |  | &#10003;  |             |         |       |  
| `has_embedding` | | |  |&#10003;    |             |         |       |  
| `association_confidence` | The list of association confidences to perform for each round  | |  |   |&#10003;  | &#10003; |       |  
| `covariance_error` | Magnitude of the uncertainty on the initial state| |  |   | &#10003;  |  &#10003;        |       |  
| `observation_error` | Magnitude of the uncertainty on detection coordinates| |  |   | &#10003;   |  &#10003;  |       |  
| `distance_metric` | Distance metric for Hungarian matching| |  |   | &#10003; |  &#10003;  |       |  
| `initialization_confidence` |Confidence for starting a new track. Must be > min_confidence to have an effect | |  |   | &#10003; | &#10003;   |       |  
| `project_track` | How many frames in total to the project box when detection isn’t recorded for track  | |  |   | &#10003; |&#10003; |       |  
| `use_detect_box` | How many frames to project the last detection box, should be less than project_track_frames (1 is the current frame)  | |  |   | &#10003; | &#10003; |       |  
| `project_without_detect` | Whether to keep projecting the box forward if no detect is matched  | |  |   | &#10003; |&#10003;  |       |  
| `project_fix_box_size` | Whether to fix the box size when the track is in a project state   | |  |   | &#10003; |&#10003; |       |  
| `detect_box_fall_back` | Rely on the detect box if the association error is above this value   | |  |   | &#10003; |&#10003;  |       |  
| `keep_track_in_image` | If this is 1, then push the tracker predict to stay inside image boundaries  | |  |   | &#10003; |&#10003; |       |  
| `match_limit_ratio` | Multiplier to constrain association (< 1 is ignored) based on other associations  | |  |   | &#10003; |&#10003; |       |  
| `match_limit_min_matches` | Minimum number of matched tracks needed to invoke match limit | |  |   | &#10003; |&#10003; |       |  
| `optimal_assignment` | If True, rule out pairs with distance > max_distance before assignment | |  |   | &#10003; |&#10003;  |       |  
| `max_emb_distance` |Maximum embedding distance to be considered a re-identification| |  |   |  | &#10003; |       |  
| `max_dead` | Maximum number of frames for track to be dead before we re-assign the ID| |  |   |  | &#10003; |       |  
| `var_tracker` | String that determines how embeddings from multiple timestamps are aggregated, defaults to “na” (most recent embedding overwrites past embeddings) | |  |   |  | &#10003; |       |  
| `reid_model_path` | The path to the linker| |  |   |  | &#10003; |       |  
| `iou_dist_ratio` | If 1.0 purely IoU similarity, if 0.0 purely centroid distance similarity | |  |   |  | |   &#10003; |  
| `mortal_th` | Mortality threshold | |  |   |  | |   &#10003; |  
| `min_box_area` | Minimum area of a valid box | |  |   |  | |   &#10003; |  
| `min_activity` | Returns only tracks with activities  above min_activity  | |  |   |  | |   &#10003; |  
| `nms_iou_th` | NMS IoU threshold | |  |   |  | |   &#10003; | 
| `shrink_factor` | Change box size by `shrink_factor` | |  |   |  | |   &#10003; | 