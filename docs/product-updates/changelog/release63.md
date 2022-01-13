---
description: Changelog for Clarifai Release 6.3
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -6
pagination_next: product-updates/changelog/release64
pagination_prev: product-updates/changelog/release62
---

# Release 6.3

## Changelog 6.3

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Send collaborator emails asynchronously |
| ![](/img/bug.jpg) | NLP bug fixes for non-text apps |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Consolidated input related status codes |
| ![](/img/improvement.jpg) | Add frame.id to API as well as region.track\_id |
| ![](/img/bug.jpg) | Granted select permission to clarifairead |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added list annotations filter status |
| ![](/img/improvement.jpg) | Added concept selection for tasks |
| ![](/img/improvement.jpg) | Post/Patch annotations request now allow setting status |
| ![](/img/improvement.jpg) | Changed task form options |
| ![](/img/improvement.jpg) | Set annotation status to awaiting for review if the authorized user is not app owner |
| ![](/img/improvement.jpg) | Return only input\_level annotation in input.data |
| ![](/img/bug.jpg) | Drawing annotations: wrong embed model version id. Fixed |
| ![](/img/bug.jpg) | Eliminated error if no annotation to be deleted |
| ![](/img/bug.jpg) | Create one annotation for each bbox |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added support for adding and training on text in the platform |
| ![](/img/new_feature.jpg) | Created a NLP mock prediction endpoint |
| ![](/img/improvement.jpg) | Created test set to evaluate quick trained models or k-fold if no test search is specified |
| ![](/img/improvement.jpg) | Added vocab\_id for demographics model concepts |
| ![](/img/improvement.jpg) | Fixed sorting of A.G.E. concepts in golang for demographics model so we don't chop off sets of them |
| ![](/img/improvement.jpg) | Deprecated Face from javascript Client |
| ![](/img/improvement.jpg) | Deprecated Face from Java Client |
| ![](/img/bug.jpg) | Confusion matrix predicted/true are swapped in evaluation results. Fixed |
| ![](/img/bug.jpg) | Explorer Image/Text Joint embedding |
| ![](/img/bug.jpg) | Fixed selectEmbedModelVersionId in detection apps |
| ![](/img/bug.jpg) | Fixed generalModel imports and optimized video click handlers with useCallback hooks |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Persisted the saved search used in train a model version |
| ![](/img/bug.jpg) | Created log for annotation/search request/response |
| ![](/img/bug.jpg) | Region Searches within Search Bar still use crop coordinates instead of base64 bytes. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Created new Single Image View and Image Tools |
| ![](/img/new_feature.jpg) | Enabled Display Text Thumbnails in App Grid View and App Details View |
| ![](/img/new_feature.jpg) | Text Thumbnails display in Portal/Search Bar disabled |
| ![](/img/new_feature.jpg) | Enabled View Text Assets in Portal's Image View |
| ![](/img/new_feature.jpg) | Added Text Inputs To Explorer Apps |
| ![](/img/new_feature.jpg) | Imported new icons for Labeler Image Tools into the style guide |
| ![](/img/improvement.jpg) | Added login tracking to analytics package in Portal |
| ![](/img/improvement.jpg) | Allowed pasting into the add inputs text area and clear the text box after clicking submit |
| ![](/img/bug.jpg) | Search bar not visible. Fixed |
| ![](/img/bug.jpg) | Removed all instances of worker\_id from Explorer |
| ![](/img/bug.jpg) | Fixed popover left/right overflow |
| ![](/img/bug.jpg) | Disabled all search by click handlers in Portal for Text Apps |
| ![](/img/bug.jpg) | Click Search button icons on Thumbs not working for localized search. Fixed |
| ![](/img/bug.jpg) | Fixed details page header missing description |
| ![](/img/bug.jpg) | Fixed demo font syntax |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added a Range Slider to filter Workflow Predictions by Value |
| ![](/img/improvement.jpg) | Updated Face workflow to include the detect faces as concepts for search |
