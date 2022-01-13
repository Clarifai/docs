---
description: Changelog for Clarifai Release 6.4
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -7
pagination_next: product-updates/changelog/release65
pagination_prev: product-updates/changelog/release63
---

# Release 6.4

## Changelog 6.4

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Improved responsiveness of collaborations tab in /apps |
| ![](/img/improvement.jpg) | Enabled list collaborators to list deleted collaborators |
| ![](/img/bug.jpg) | Login Form breaks app. Fixed |
| ![](/img/bug.jpg) | Deleting an app no longer redirects to /apps |
| ![](/img/bug.jpg) | Can’t create models in new app. Fixed |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed .webp files not working when sent as base64 |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | MVP of labeler single image view functionality |
| ![](/img/new_feature.jpg) | Support detection tasks |
| ![](/img/improvement.jpg) | Detection Labeler: Color Coded Concepts |
| ![](/img/improvement.jpg) | Add workflow\_id to task creation and show AI predictions to verify in labeler mode |
| ![](/img/new_feature.jpg) | Split tasks admin view into tabs |
| ![](/img/improvement.jpg) | Add visual sections to task form |
| ![](/img/improvement.jpg) | Add default queries for "all inputs" and "all unlabelled inputs" in task create view |
| ![](/img/improvement.jpg) | Autocomplete annotation user |
| ![](/img/new_feature.jpg) | Implement Classification Task Review Logic |
| ![](/img/new_feature.jpg) | Implement Review Process into tasks |
| ![](/img/improvement.jpg) | Introduce stats collection APIs for worker stats |
| ![](/img/new_feature.jpg) | Implement APIs for polygon region support |
| ![](/img/new_feature.jpg) | Incorporate image filters for labelling |
| ![](/img/improvement.jpg) | Update image tool icons |
| ![](/img/new_feature.jpg) | Ability to zoom in on images |
| ![](/img/improvement.jpg) | Remove ‘alt’ from hotkeys, just use letters and arrows |
| ![](/img/new_feature.jpg) | Label to draw box in video frame using frame bytes |
| ![](/img/improvement.jpg) | Display videos in labeler |
| ![](/img/improvement.jpg) | Add video fps field for tasks |
| ![](/img/improvement.jpg) | Draw Bounding Boxes in Labeler Detection Videos |
| ![](/img/improvement.jpg) | Add video controls for video in labeler |
| ![](/img/bug.jpg) | Fix Classification Annotation |
| ![](/img/bug.jpg) | Video annotation deletion. Fixed |
| ![](/img/bug.jpg) | AI Assist Predictions did not show for General workflow classification task. Fixed |
| ![](/img/bug.jpg) | Fix Classification video annotation |
| ![](/img/bug.jpg) | Display video in classification tasks |
| ![](/img/bug.jpg) | Fix Labeler input urls |
| ![](/img/bug.jpg) | Fix Annotation creation for video |
| ![](/img/bug.jpg) | Fix Labeler post calls |
| ![](/img/bug.jpg) | Detection Labeler: fix zoom |
| ![](/img/bug.jpg) | Fixed image cropper task description |
| ![](/img/bug.jpg) | Fix concept threshold creation |
| ![](/img/bug.jpg) | Set annotation status ‘success’ |
| ![](/img/bug.jpg) | Restrict tasks to only the assigned users |
| ![](/img/bug.jpg) | Add validation to TaskForm’s concept field |
| ![](/img/bug.jpg) | Display human tags for human box as child |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Convert Deep Trained Model to Embedding Model for Use as "Base Workflow" |
| ![](/img/new_feature.jpg) | Classification predictions for AI assistance |
| ![](/img/new_feature.jpg) | Merge this detection and custom model prediction sections for detection models |
| ![](/img/improvement.jpg) | Video labelling UI for classification. |
| ![](/img/improvement.jpg) | Remove the non-creatable types from model mode |
| ![](/img/improvement.jpg) | Improve the create classifier / detector view options in model mode |
| ![](/img/improvement.jpg) | Add deep training options in model mode |
| ![](/img/improvement.jpg) | Update random sampling model to have a slider |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed public concept rank |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Support detection evaluations in PostAnnotationSearchMetrics |
| ![](/img/new_feature.jpg) | Support nlp search \(only filtering\) |
| ![](/img/new_feature.jpg) | Add evaluations between two saved search label sets |
| ![](/img/improvement.jpg) | Fix labeler search amount |
| ![](/img/bug.jpg) | Error:  "Cannot search over `annotations`" when clicking a general app. Fixed |
| ![](/img/bug.jpg) | Model name and details is not populated upon model creation in model mode |
| ![](/img/bug.jpg) | Fix annotation search when accessing the LabelerPage |
| ![](/img/bug.jpg) | Search by annotation\_info should not return the embed annotation. Fixed |
| ![](/img/bug.jpg) | Search for metadata in detection apps doesn't work. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create Dual Range Slider |
| ![](/img/new_feature.jpg) | Enable patching the default workflow from Portal and error if needs reindex |
| ![](/img/new_feature.jpg) | Allow drawing bounding boxes on paused video frames |
| ![](/img/improvement.jpg) | Add scopes for collaborators and metrics to Portal |
| ![](/img/improvement.jpg) | Allow up to 15-20x zoom level for really large images. |
| ![](/img/improvement.jpg) | Allow selection the embed\_model\_version\_id from Portal when creating a model |
| ![](/img/bug.jpg) | Fix inconsistent fps between uploading video and predicting video |
| ![](/img/bug.jpg) | Missing frame time. Fixed |
| ![](/img/bug.jpg) | Model annotations not appearing in Explorer. Fixed |
| ![](/img/bug.jpg) | When creating the auto annotation workflow editing the workflow crashes Portal |
| ![](/img/bug.jpg) | Fix image tools state |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | CreateWorkflow model improvements |
| ![](/img/improvement.jpg) | Allow custom concept models in the default app workflows |
| ![](/img/improvement.jpg) | Add a "Make a Copy" or "Copy to New Workflow" button for each workflow |
| ![](/img/improvement.jpg) | Allow patching the default workflow in Portal |
| ![](/img/improvement.jpg) | Show the default workflow in the list of workflows for the app |
| ![](/img/improvement.jpg) | Validate patching of default workflow is compatible in backend |
| ![](/img/bug.jpg) | Large workflow name causes overlap in app details view. Fixed |
| ![](/img/bug.jpg) | Portal crashes if page reloads during workflow add/edit. Fixed |
| ![](/img/bug.jpg) | Detection workflow recompute also predict detect-concept |
| ![](/img/bug.jpg) | Allow detect-concept models to be added to workflows |
| ![](/img/bug.jpg) | Patch workflow create worker |
| ![](/img/bug.jpg) | Fix validation of inputs in workflows |
| ![](/img/bug.jpg) | Fix workflow embed\_join\_annotation\_id issue |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Clean up private API client repos |
| ![](/img/bug.jpg) | Remove public workflows from Python client |
