---
description: Changelog for Clarifai Release 7.3
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -18
pagination_next: product-updates/changelog/release74
pagination_prev: product-updates/changelog/release72
---

# Release 7.3

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Scribe

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) | User-Login: New styling and authentication methods              |
| ![new-feature](/img/new_feature.jpg) | Task-Reviewer: Added Grid display option                        |
| ![bug](/img/bug.jpg)  Task-Manager: Fixed non-responsive behavior of Workers column   |
| ![improvement](/img/improvement.jpg) | Task-Manager: Added progress bars for Input-Assignment statuses |
| ![improvement](/img/improvement.jpg) | Task-Manager: Added Input-Count column to table                 |
| ![improvement](/img/improvement.jpg) | Task-List: Removed unnecessary "Mark Task as Done" button       |
| ![improvement](/img/improvement.jpg) | Task-List: Redesigned "For-Review" tab                          |
| ![improvement](/img/improvement.jpg) | Task-List: Redesigned "Assigned to Me" tab                      |
| ![new-feature](/img/new_feature.jpg) | Task-Labeler: Added timeline panel for displaying video tracks  |
| ![new-feature](/img/new_feature.jpg) | Task-Labeler: Added support for Polygon-Interpolation           |
| ![improvement](/img/improvement.jpg) | Task-Labeler: Added count of pending Inputs                     |

## Portal

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![bug](/img/bug.jpg)  Model-Evaluation: Fixed incorrect Precision/Recall metrics for Visual-Detectors |
| ![bug](/img/bug.jpg)  Explorer: Fixed redundant scrolling issue with Saved-Searches                   |
| ![bug](/img/bug.jpg)  Explorer: Fixed issue preventing storage of filter values to Saved-Searches     |
| ![improvement](/img/improvement.jpg) | Explorer: Added FPS Setting to "App Workflow Prediction" panel                  |
| ![bug](/img/bug.jpg)  Text Upload in Explorer Has Weird Styling                                       |
| ![improvement](/img/improvement.jpg) | Remove `embed_model_version_id` from POST & PATCH annotations                   |
| ![bug](/img/bug.jpg)  Model predictions cors issue                                                    |
| ![improvement](/img/improvement.jpg) | create-workflow - sortable-tables - linear-view                                 |
| ![improvement](/img/improvement.jpg) | Fix annotations approximate count query                                         |
| ![improvement](/img/improvement.jpg) | Collectors Edit Function of Existing Task                                       |

## Enlight


|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![improvement](/img/improvement.jpg) | Task: Added "None" option for Input-Source                                                |
| ![new-feature](/img/new_feature.jpg) | Model-Type: Initial release of Text-Token-Classifier                                      |
| ![new-feature](/img/new_feature.jpg) | Model-Type: Added support for up to 18 languages for OCR-Scene                            |
| ![new-feature](/img/new_feature.jpg) | Model-Type: Added support for up to 162 languages for OCR-Document                        |
| ![bug](/img/bug.jpg)  App slow due to loading 250+ requests in Model Versions selector on Create Workflows page |
| ![improvement](/img/improvement.jpg) | Propagate error status code descriptions in deep training                                 |
| ![new-feature](/img/new_feature.jpg) | Workflow-Card: Published new version of "face" with Landmark Detect + Align Transform     |
| ![new-feature](/img/new_feature.jpg) | Model-Card: Published "general" Text-Token-Classifier                                     |
| ![new-feature](/img/new_feature.jpg) | Weapon Model V1                                                                           |
| ![new-feature](/img/new_feature.jpg) | Logo V2 POC                                                                               |

## API

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| Bug | Make a gRPC Python script new line replacement work in POSIX sed |
