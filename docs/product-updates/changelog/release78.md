---
description: Changelog for Clarifai Release 7.8
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -23
pagination_next: product-updates/changelog/release79
pagination_prev: product-updates/changelog/release77
---

# Release 7.8

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Model

|Status     |Details                                                                       |
|-----------|------------------------------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |Model: Published "person-detection-edge" Visual-Detector        |
| ![new-feature](/img/new_feature.jpg) |Model: Published "person-vehicle-detection-edge" Visual Detector|

## Platform-Object

|Status     |Details                                                                         |
|-----------|--------------------------------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |Annotation: Added support for Time-Segments                   |
| ![bug](/img/bug.jpg) |Application: Reindexing with no inputs returns invalid request|
| ![new-feature](/img/new_feature.jpg) |Model-Type: Added Track-Aggregator                            |
| ![improvement](/img/improvement.jpg) |Model: Added Model.Notes field                                |
| ![improvement](/img/improvement.jpg) |Task: Continuously check Consensus threshold logic            |
| ![bug](/img/bug.jpg) |Task: Fix incorrect status mapping in Annotation stats        |
| ![improvement](/img/improvement.jpg) |Task: Ignore Consensus logic on "Empty" annotations           |

## Portal

|Status     |Details                                                                                                   |
|-----------|----------------------------------------------------------------------------------------------------------|
| ![bug](/img/bug.jpg) |Input-Details: Audio doesn't stop when exiting after playing video                        |
| ![improvement](/img/improvement.jpg) |Task-Labeler: Added histogram showing count of objects throughout Video-Inputs            |
| ![new-feature](/img/new_feature.jpg) |Task-Labeler: Added Time-Segment tool                                                     |
| ![improvement](/img/improvement.jpg) |Task-Labeler: Added tracklet visualization for Object-Track labels                        |
| ![bug](/img/bug.jpg) |Task-Labeler: AI-Assist suggestions not displaying for Public Visual-Classifiers          |
| ![bug](/img/bug.jpg) |Task-Labeler: Fix carousel being pushed off-screen by timeline                            |
| ![bug](/img/bug.jpg) |Task-Labeler: Loading animation continues indefinitely after GetTaskInputs returns no hits|
| ![improvement](/img/improvement.jpg) |Task-Manager: Reduce minimum Consensus Threshold to 2                                     |
| ![bug](/img/bug.jpg) |Task-Reviewer: Video-Input thumbnails fail to load                                        |
| ![improvement](/img/improvement.jpg) |Workflow-Builder: Added new navigation options and tooltips                               |
| ![bug](/img/bug.jpg) |Workflow-Builder: Fixed handling of non-create-able model-types                           |
| ![bug](/img/bug.jpg) |Workflow-Builder: Fixed the logic for showing model/version selector in Node details      |
| ![bug](/img/bug.jpg) |Improved handling of failed inputs that are not marked as failed                      |
| ![improvement](/img/improvement.jpg) |Onboarding Dialog improvements                                                                            |
