---
description: Changelog for Clarifai Release 6.2
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -5
pagination_next: product-updates/changelog/release63
pagination_prev: product-updates/changelog/release61
---

# Release 6.2

## Changelog 6.2

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Updated Privacy Policy URL |
| ![](/img/bug.jpg) | Fixed panic error in Signup |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Ensured collectors are deleted when apps are deleted |
| ![](/img/bug.jpg) | View In Explorer button missing in app details. Fixed |
| ![](/img/bug.jpg) | Fixed failed to generate thumbnail |
| ![](/img/bug.jpg) | Fixed app duplication error when getting worker |
| ![](/img/bug.jpg) | Deleted collaborator should also mark application\_worker to deleted. Fixed |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Inputs count stuck at &gt; 0 after delete all, with all inputs seemingly deleted |

### Label

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Task view UI for workers |
| ![](/img/new_feature.jpg) | Create task manager page and task creation page |
| ![](/img/new_feature.jpg) | New Icon for Task Manager/Task Viewer |
| ![](/img/bug.jpg) | Fixed POST annotations call on frontend to use correct embed model |
| ![](/img/bug.jpg) | Post annotations should include embed\_model\_version\_id. Fixed |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added Apparel Detection to Demo App |
| ![](/img/new_feature.jpg) | Created UI for creating knowledge graph concept relations relations |
| ![](/img/new_feature.jpg) | Create annotation writer model to write annotations to DB |
| ![](/img/improvement.jpg) | Pass and use test and train data queries to trainer |
| ![](/img/improvement.jpg) | Added migration to upgrade old model\_type in DB |
| ![](/img/improvement.jpg) | Depredated Face from Python client |
| ![](/img/improvement.jpg) | Unified the TypeExt and Type fields in model object. |
| ![](/img/improvement.jpg) | Deprecated facedetect\* model types. |
| ![](/img/improvement.jpg) | Unified FaceEmbedModel and DetectEmbedModel |
| ![](/img/improvement.jpg) | Converted face.Identity responses to concepts like other detection models to be consistent |
| ![](/img/bug.jpg) | Fixed demo font syntax |
| ![](/img/bug.jpg) | Video Timeline does not display on the demo app |
| ![](/img/bug.jpg) | Fixed Range Slider Value/Text in Apparel Detection Demo |
| ![](/img/bug.jpg) | Fixed demographics model to return embeddings and work with auto-annotate |
| ![](/img/bug.jpg) | Adding collaborator model counter-intuitively requires ENTER in order to enable the submit button. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Validated that concept relation doesn't already exist on POST relations |
| ![](/img/bug.jpg) | Prediction requests are being fired too frequently instead of using cache. Fixed |
| ![](/img/bug.jpg) | postModelOutputs is not called for newly labeled assets without a manual refresh |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Return annotations posted by user in search results |
| ![](/img/bug.jpg) | Search by region not working for face detection. Fixed |
| ![](/img/bug.jpg) | Make “save” search button internal only |
| ![](/img/bug.jpg) | Saved Searches in Portal use the incorrect user ID |
| ![](/img/bug.jpg) | Fix crop search from single image view for faces/detections |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | UI for collector crud |
| ![](/img/improvement.jpg) | Deprecate Face from Portal |
| ![](/img/improvement.jpg) | Improve tabs UI |
| ![](/img/bug.jpg) | Video Predictions are failing in Portal |
| ![](/img/bug.jpg) | Fixed broken font syntax |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Video detection workflow prediction support |
| ![](/img/new_feature.jpg) | Public general v1.5 workflow |
| ![](/img/bug.jpg) | Allow Patching to existing public workflow |
| ![](/img/bug.jpg) | Can not train LOPQ if app base workflow is face. Fixed |
