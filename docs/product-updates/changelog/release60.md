---
description: Changelog for Clarifai Release 6.0
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -3
pagination_next: product-updates/changelog/release61
pagination_prev: product-updates/changelog/release511
---

# Release 6.0

## Changelog 6.0

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove country field from signup form, simplifying new customer signups |
| ![](/img/bug.jpg) | Essential Plan User can't add collaborators. Fixed |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Introduce new [Python gRPC API client](https://docs.clarifai.com/api-guide/api-overview), enabling new features and performance enhancements across API |
| ![](/img/new_feature.jpg) | Introduce new [Java gRPC API client](https://docs.clarifai.com/api-guide/api-overview), enabling new features and performance enhancements across API |
| ![](/img/improvement.jpg) | Update API key type for "app\_specific" for app-specific keys to be more clear to users |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Allow Personal Access Tokens when calling /users/me \(GetUsers\) |
| ![](/img/new_feature.jpg) | \[Frontend\] Enable "Copy Application" from collaborated apps, making it easy to duplicate and build upon existing applications |
| ![](/img/bug.jpg) | Program to clean internal apps crashing. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Added the ability to accept b64 Gifs |
| ![](/img/bug.jpg) | Functionality to upload pre-tagged images missing. Fixed |
| ![](/img/bug.jpg) | Images pre-tagged with concepts do not successfully upload into Clarifai UI On doing bulk uploads \(&gt;20-30 urls\). Fixed |
| ![](/img/bug.jpg) | Bulk image upload issue. Fixed |
| ![](/img/bug.jpg) | "Download Failed" error when uploading images. Fixed |
| ![](/img/bug.jpg) | Issue with post inputs key being a PAT in a collector. Fixed |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Skip aligning landmarks if landmark points are out of range to avoid errors and unexpected behavior |
| ![](/img/bug.jpg) | Bounding Boxes and Cropped Regions aren't displaying on Videos with default runtime config. Fixed |
| ![](/img/bug.jpg) | Insert annotations and related data in batch to improve performance |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Evaluate new face embedding model workflow end to end for optimal performance |
| ![](/img/improvement.jpg) | Validate that concept.app\_id shouldn't be set when creating/patching models |
| ![](/img/improvement.jpg) | Add new predicate to knowledge graph for "relates\_to" to represent synonyms |
| ![](/img/bug.jpg) | Model training lag. Fixed |
| ![](/img/bug.jpg) | Model has missing inputs. Fixed |
| ![](/img/bug.jpg) | Submitted models becoming stuck in queue. Fixed |
| ![](/img/bug.jpg) | Custom training models when uploaded images are not fully pre-processed. Fixed |
| ![](/img/bug.jpg) | Custom facial recognition bboxes do not correspond with detection boxes/ Custom facial recognition prediction interval for video is still 1000ms for apps supporting 100ms runtime config. Fixed |
| ![](/img/bug.jpg) | frame\_info time off by a factor of 10 for general detection model. Fixed |
| ![](/img/bug.jpg) | Detection Models throw error at end of video due to invalid index lookup. Fixed |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Deleting a workflow should clear or update localStorage. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Clean up app overflow UI, improving user experience |
| ![](/img/improvement.jpg) | Improve Error boundary screen, improving user experience |
| ![](/img/improvement.jpg) | Add sentry error Id to Error Screen |
| ![](/img/bug.jpg) | Images not loading. Fixed |
| ![](/img/bug.jpg) | Label and prediction on the right side under Custom Model Predictions section no longer shows up automatically. Fixed |
| ![](/img/bug.jpg) | Provide a way for user.metadata to be updated from portal when there are failing apps stuck in there. Fixed |
| ![](/img/bug.jpg) | Predictions for a detection model don't show properly in portal. Fixed |
| ![](/img/bug.jpg) | Custom facial recognition Predict Boxes not displaying. Fixed |
| ![](/img/bug.jpg) | Adding inputs in explorer redirects to explorer view with flashing images. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Run prediction by ID in small batch, improving performance |
| ![](/img/bug.jpg) | Custom model predictions not displaying. Fixed |
| ![](/img/bug.jpg) | Custom model detections not displaying. Fixed |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add file upload input button to explorer search bar, simplifying the UX for file uploads |
| ![](/img/new_feature.jpg) | Filter custom facial recognition bboxes using a sliding bar, adding easy thresholding to custom facial recognition models |
| ![](/img/improvement.jpg) | Search Bar allows file upload |
| ![](/img/improvement.jpg) | Remove Explorer App Overflow Menu for improved UX |
