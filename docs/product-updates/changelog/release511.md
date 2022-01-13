---
description: Changelog for Clarifai Release 5.11
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -2
pagination_next: product-updates/changelog/release60
pagination_prev: product-updates/changelog/release510
---

# Release 5.11

## Changelog 5.11

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create a UI for personal access tokens making it easier for users to access their own apps and any apps where they have been added as collaborators |
| ![](/img/new_feature.jpg) | Updated /keys to work with PATs so that app-specific keys can be created programmatically. |
| ![](/img/bug.jpg) | Login \(user/PW\) has no rate limit/max attempts. Fixed |
| ![](/img/bug.jpg) | Remove all instances of worker\_id from explorer |
| ![](/img/bug.jpg) | When email link to verify my email address clicked, still see "verify your email" banner. Fixed |
| ![](/img/bug.jpg) ![](/img/enterprise.jpg) | API services do not function once Queue goes down and comes back up. Fixed. This makes on premise deployments more resilient to power failures. |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add apps and keys scopes so they can be created with personal access tokens |
| ![](/img/improvement.jpg) ![](/img/enterprise.jpg) | Copy app count and last\_inputs added in app duplication |
| ![](/img/bug.jpg) | Fixed demo font syntax |
| ![](/img/bug.jpg) | Fixed details page header missing description |
| ![](/img/bug.jpg) | Added favicon for Portal |
| ![](/img/bug.jpg) | Unable to copy an app that has been shared via Collaborators. Fixed |
| ![](/img/bug.jpg) | Setting useCustomConfig isn't checked at login. Fixed |
| ![](/img/bug.jpg) | Collaboration apps have race condition where wrong user id is used |
| ![](/img/bug.jpg) | Stopped loading of collaborations for search demo/logged-out users |
| ![](/img/bug.jpg) | Return “All” scopes when listing available scopes so that you have that option when creating new keys. |
| ![](/img/bug.jpg) | Collaborators can not see workers. Fixed |
| ![](/img/bug.jpg) | Missing `Apps_Get` scope in session token auth caused creation of keys to fail temporarily. Fixed |
| ![](/img/bug.jpg) | List of missing scopes is not correct in error messages. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Optimize video detection frame rate on Front end |
| ![](/img/improvement.jpg) | Improve JSON serialization performance in our servers by using an optimized third party library |
| ![](/img/improvement.jpg) | Able to overwrite default max conn for Citus |
| ![](/img/improvement.jpg) | Rewrite input counting in the API to be more scalable and robust |
| ![](/img/bug.jpg) | Allow RegionInfo from SpireDetectEmbedResponse to contain Point when saving to DB |
| ![](/img/bug.jpg) | Unable to upload same file\(s\) through browse files. Fixed |
| ![](/img/bug.jpg) | ffmpeg can produce no frames for very short videos |
| ![](/img/bug.jpg) | Add Inputs/View Explorer does not display in new app anymore. Fixed |
| ![](/img/bug.jpg) | Clicking video thumbs in detail view does not reload a video. Fixed |
| ![](/img/bug.jpg) | Keyboard navigation in image details view highlights incorrect thumb |
| ![](/img/bug.jpg) | No Prompt when uploading an image to Explorer through URL. Fixed |
| ![](/img/bug.jpg) | Properly return error if `AddAssets` failed to insert into database |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove classification/detection toggle in image details view |
| ![](/img/bug.jpg) | Improved adding negatives to regions |
| ![](/img/bug.jpg) | Create one annotation for each bbox |
| ![](/img/bug.jpg) | Log capability added for annotation/search request/response |
| ![](/img/bug.jpg) | Eliminated error if no annotation to be deleted |
| ![](/img/bug.jpg) | Last concept used for bounding boxes is retained between apps. Fixed |
| ![](/img/bug.jpg) | The Add Positives / Add Negatives buttons on a Concept details view breaks portal |
| ![](/img/bug.jpg) | Custom facial recognition bboxes on grid view do not correlate. Fixed |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Ability to keep concepts sorted by alpha in Portal |
| ![](/img/new_feature.jpg) | Implement image crop model to make it possible to work in subregions of an image |
| ![](/img/new_feature.jpg) | Implement random sample model type, adding to fixed function feature set |
| ![](/img/improvement.jpg) | Update training templates to have more straightforward names and more friendly defaults |
| ![](/img/improvement.jpg) | Fix the WorkflowInput field name in proto to workflow\_input |
| ![](/img/improvement.jpg) | Allow models that need outputs from previous nodes in a workflow to have access to those outputs to support chaining complex graphs of models |
| ![](/img/bug.jpg) | Confusion matrix predicted/true are swapped in evaluation results. Fixed |
| ![](/img/bug.jpg) | Fixed generalModel imports and optimize video click handlers with useCallback hooks |
| ![](/img/bug.jpg) | Fix for selectEmbedModelVersionId in detection apps |
| ![](/img/bug.jpg) | Drawing annotations: wrong embed model version id |
| ![](/img/bug.jpg) | Made custom training evaluations for large models stable. |
| ![](/img/bug.jpg) | Training progress is saved too frequently, causing very slow training |
| ![](/img/bug.jpg) | Return friendlier errors for incorrect parameters passed to templates |
| ![](/img/bug.jpg) | Fixed a bug in tracing setup for custom trainer and evaluator |
| ![](/img/bug.jpg) | Some models were operating slowly because of lack of resources. Fixed |
| ![](/img/bug.jpg) | Training System failed to train some layers. Fixed |
| ![](/img/bug.jpg) | Prevent users from evaluating models that are not trainable |
| ![](/img/bug.jpg) | Fixed node ID validation logic in Bug in workflows |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Add colors to differentiate region results |
| ![](/img/bug.jpg) | Cannot view workflow results in a face app. Fixed |
| ![](/img/bug.jpg) | Video spire tests are not running correctly. Fixed |
| ![](/img/bug.jpg) | Video processing fails with 'caseids' error. fixed |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add click to search metadata attributes in image details sidebar |
| ![](/img/new_feature.jpg) | Implement visual search in another app as a model type you can add to a workflow |
| ![](/img/bug.jpg) | Search bar missing in some cases. Fixed |
| ![](/img/bug.jpg) | Region Searches within Search Bar still use crop coordinates instead of base64 bytes. Fixed |
| ![](/img/bug.jpg) | Click Search button icons on Thumbs not working for localized search. Fixed |
| ![](/img/bug.jpg) | Disable all search by click handlers in Portal for Text Apps |
| ![](/img/bug.jpg) | Disable "hide all positively labeled" inputs button for NLP until search works |
| ![](/img/bug.jpg) | Scroll active thumb into view in image details carousel |
| ![](/img/bug.jpg) | Render Video Assets in Search Bar |
| ![](/img/bug.jpg) | Editing geo/json search items no longer work after adding the search bar tooltip. Fixed |
| ![](/img/bug.jpg) | TypeError: Cannot read 'get' of undefined when clicking image thumbnails in Explorer search bar. Fixed |
| ![](/img/bug.jpg) | Explorer Visibility in small resolution screen improved |
