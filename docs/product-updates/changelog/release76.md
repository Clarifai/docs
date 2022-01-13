---
description: Changelog for Clarifai Release 7.6
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -21
pagination_next: product-updates/changelog/release77
pagination_prev: product-updates/changelog/release75
---

# Release 7.6

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Armada

|Status     |Details                                                    |
|-----------|-----------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |[Platform-Object] Annotation: Added support for Image-Masks|
| ![new-feature](/img/new_feature.jpg) |[Platform-Object] Workflow-Version: Initial Release        |


## Portal

|Status     |Details                                                    |
|-----------|-----------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |[Portal] Edit Collaborator Scopes in Portal                |
| ![new-feature](/img/new_feature.jpg) |New drawing UX for Explorer                                |
| ![bug](/img/bug.jpg) |[Portal-Screen] Explorer: Fixed inconsistent visibility of visual-search button|
| ![bug](/img/bug.jpg) |[Portal] Change to invalid user id do not show error       |
| ![bug](/img/bug.jpg) |Cannot click the edit button on the task                   |
| ![bug](/img/bug.jpg) |Input view not loading workflow panels properly when you scroll through the input drawer|
| ![bug](/img/bug.jpg) |Unable to See Annotations Created in Labeler in Explorer Annotations Tab|


## Scribe

|Status     |Details                                                    |
|-----------|-----------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |[Portal-Screen] Task-Labeler: Added Quick Image-Mask tool  |
| ![new-feature](/img/new_feature.jpg) |[Portal-Screen] Task-Reporter: Initial release of Single-Task-Report|
| ![improvement](/img/improvement.jpg) |[Portal-Screen] Task-Labeler: Text-wrapping for Input-Metadata|
| ![improvement](/img/improvement.jpg) |[Portal-Screen] Task-Manager: Reduce minimum Consensus Threshold to 2|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Labeler: Fixed inconsistency in applying rotation metadata to Image-Inputs|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Labeler: Fixed incorrect URL being fetched for Video-Inputs|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Manager: Added pagination for viewing of more than 128 tasks|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Manager: Fixed inconsistent pagination of Tasks|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Reviewer: Fixed broken "Approve Worker" button|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Reviewer: Fixed inability to manually approve annotations without consensus|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Reviewer: Unable to edit or reject annotations in Consensus Review|
| ![bug](/img/bug.jpg) |[Portal-Screen] Task-Reviewer: Video-Input thumbnails fail to load|


## Enlight

|Status     |Details                                                    |
|-----------|-----------------------------------------------------------|
| ![bug](/img/bug.jpg) |Model eval on negatives for NLP models (should not have negatives)|
| ![bug](/img/bug.jpg) |Model Evaluation Not Available in UI                       |


## Spacetime

|Status     |Details                                                    |
|-----------|-----------------------------------------------------------|
| ![bug](/img/bug.jpg) |Saved search - on cancelling one search from combination search, the search by concept is defaulting to rank based search instead of staying filter based search|
| ![bug](/img/bug.jpg) |Searching in Explorer with a General Model concept adds that concept to your app|
