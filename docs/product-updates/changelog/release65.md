---
description: Changelog for Clarifai Release 6.5
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -8
pagination_next: product-updates/changelog/release66
pagination_prev: product-updates/changelog/release64
---

# Release 6.5

## Changelog 6.5

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Can't Access Main Apps Page with invalid collaborators. Fixed. |
| ![](/img/bug.jpg) | Unable to create new Application \(General Detection\). Fixed. |
| ![](/img/bug.jpg) | `application_sharing` scopes field should be `json` instead of `jsonb`. Fixed. |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Pasting long text makes Uploader unusable due to lack of scrolling. Fixed. |
| ![](/img/improvement.jpg) | Support uploading text containing emojis. |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Integrate and Implement task deletion using new endpoints. |
| ![](/img/improvement.jpg) | Implement /tasks CRUD in API. |
| ![](/img/improvement.jpg) | Allow annotation writer model to set the `task_id` in `annotation_info`. |
| ![](/img/improvement.jpg) | Make polygons a separate task type. |
| ![](/img/improvement.jpg) | Add empty CRUD endpoints for tasks. |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | `vocab_id` doesn't appear in the returned object for demographics model. Fixed. |
| ![](/img/bug.jpg) | `segment-concept` model types are no longer returning the segmentation mask. Fixed. |
| ![](/img/bug.jpg) | NLP text input does not scroll when longer than viewport height. Fixed. |
| ![](/img/bug.jpg) | Clear text inputs after upload. |
| ![](/img/improvement.jpg) | Improve the "TextFile" React Component for NLP. |
| ![](/img/improvement.jpg) | Make existing model details view configurable by model type. |
| ![](/img/bug.jpg) | Edit model should only contain the fields related to the selected model. Fixed |
| ![](/img/bug.jpg) | NLP frontend text input is covered entirely blue when selected. Fixed. |
| ![](/img/bug.jpg) | Enforce fields in post/patch models to adhere to model types. Fixed. |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed fps issue for video predictions. |
| ![](/img/bug.jpg) | Validate `stat_value_agg_type`. |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Dropdown Search Help Menu no longer displays in the search bar. Fixed. |
| ![](/img/new_feature.jpg) | Video thumbs have relevant timestamp in search. |
| ![](/img/improvement.jpg) | Added adjustable search results threshold. |
| ![](/img/new_feature.jpg) | Search over multi-embed workflows. |
| ![](/img/new_feature.jpg) | Added search on input level. |
| ![](/img/improvement.jpg) | Improved search query by using multi join. |
| ![](/img/bug.jpg) | Fixed panic in list saved searches endpoint. |
| ![](/img/bug.jpg) | Input metadata search from table not working. Fixed. |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | "Return to Log in " doesn't redirect to login page. Fixed. |
| ![](/img/bug.jpg) | Clicking on image, or Explorer Mode with images that contain geo coordinates crashed the app. |
| ![](/img/improvement.jpg) | Portal model predicts use hosted URL when available instead of normal URL. |
| ![](/img/bug.jpg) | When selecting a concept and going to the next image the concept checkbox won't stay selected. Fixed |
| ![](/img/improvement.jpg) | Allow multi-select from explorer grid view and add metadata. |
| ![](/img/improvement.jpg) | Integrate and utilize new CRUD endpoints in Portal. |
| ![](/img/new_feature.jpg) | Allow for pasted text to keep formatting in the text box. |
| ![](/img/bug.jpg) | Prediction threshold slider custom model predicts without base workflow annotations. Fixed |
| ![](/img/improvement.jpg) | Strings without spacing format properly in Explorer's Asset Grid View |
| ![](/img/bug.jpg) | `annotation_info` should be a valid JSON in Model Mode. Fixed. |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Hide the "add text" section of the add inputs modal for non text workflows. |
| ![](/img/improvement.jpg) | Validate that all nodes in workflows list their inputs based on type. |
| ![](/img/new_feature.jpg) | Add NLP to Workflows List |
| ![](/img/improvement.jpg) | Generalize the iterations over regions/frames in workflow code. |
| ![](/img/new_feature.jpg) | Add ability to "make a copy" of public\_workflows. |
| ![](/img/improvement.jpg) | Allow indexing embedding from detect -&gt; crop -&gt; embed style workflows. |
| ![](/img/improvement.jpg) | Allow setting input nodes for all users, not just @clarifai.com users. |
| ![](/img/improvement.jpg) | Allow non-internal users setting input node when creating workflows. |
| ![](/img/bug.jpg) | Create/Patch workflow uncaught exception. |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Update docs.clarifai.com to reflect our current API clients including grpc clients. |
