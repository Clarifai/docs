---
description: Changelog for Clarifai Release 7.1
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -16
pagination_next: product-updates/changelog/release72
pagination_prev: product-updates/changelog/release70
---

# Release 7.1

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## API

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Add apps and keys scopes so they can be created with personal access tokens. |
| ![new-feature](/img/new_feature.jpg) | Change /keys to work with PATs |
| ![new-feature](/img/new_feature.jpg) | Change /apps to work with personal access tokens |
| ![improvement](/img/improvement.jpg) | Split java proto files into multiple and add package name. |
| ![improvement](/img/improvement.jpg) | Write script to prune the proto files into public only rpcs and messages |
| ![improvement](/img/improvement.jpg) | Mark the appropriate fields in protos as cl\_private\_rpc to release grpc clients. |
| ![improvement](/img/improvement.jpg) | copy app count and last\_inputs added in app duplication |
| ![improvement](/img/improvement.jpg) | Rewrite input counting in the API to be more scalable and robust. |
| ![bug](/img/bug.jpg) | Fix collector scopes so that predict keys don't need Collectors:Get |
| ![bug](/img/bug.jpg) | Check the GetInputsKey of collectors has access to userA's information. |
| ![bug](/img/bug.jpg) | Return “All” scopes when listing available scopes so that you have that option when creating new keys. |
| ![bug](/img/bug.jpg) | properly return err if `AddAssets` failed to insert into DB |
| ![bug](/img/bug.jpg) | POST inputs wasn’t using batch model optimizations correctly. |
| ![bug](/img/bug.jpg) | created\_at field in sharing table is incorrect |
| ![bug](/img/bug.jpg) | Missing Apps\_Get scope in session token auth caused creation of keys to fail temporarily. |
| ![bug](/img/bug.jpg) | API services do not function once Queue goes down and comes back up has been fixed. This makes on premise deployments more resilient to power failures. |
| ![bug](/img/bug.jpg) | List of missing scopes is not correct in error messages |
| ![bug](/img/bug.jpg) | Fix node ID validation logic in Bug in workflows |

## Armada

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Create endpoint for taking down a spire |
| ![new-feature](/img/new_feature.jpg) | Create endpoint to deploy deep training models |
| ![improvement](/img/improvement.jpg) | Calculate detection pr and roc curves using score buckets |
| ![improvement](/img/improvement.jpg) | Support for pytorch inference in spire |
| ![improvement](/img/improvement.jpg) | able to overwrite default max conn for Citus |
| ![improvement](/img/improvement.jpg) | Upgrade to go version for performance boost. |
| ![improvement](/img/improvement.jpg) | Make runtime config to remote the extra round trip to storage in predict pathway. |
| ![improvement](/img/improvement.jpg) | Improve JSON serialization performance in our servers by using an optimized third party library. |
| ![improvement](/img/improvement.jpg) | Fix the WorkflowInput field name in proto to workflow\_input |
| ![bug](/img/bug.jpg) | When reaching the final page, network request responds with 500 internal service error. Fixed |
| ![bug](/img/bug.jpg) | Spire fails to launch in local-k8s-USER with error "persistentvolumeclaim not found". Fixed |
| ![bug](/img/bug.jpg) | Video processing fails with 'caseids' error. Fixed |
| ![bug](/img/bug.jpg) | Fix a connection issue from Golang backend service to media processing service |
| ![bug](/img/bug.jpg) | Allocated resources for faster model performance |

## Enlight

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Return deep training evals through the API |
| ![new-feature](/img/new_feature.jpg) | OCR Model |
| ![improvement](/img/improvement.jpg) | Update templates to have more straightforward names and more friendly defaults |
| ![bug](/img/bug.jpg) | Add 'Face' Default workflow to \`[https://api-dev.clarifai.com](https://api-dev.clarifai.com)' |
| ![bug](/img/bug.jpg) | Make custom/transfer training evaluations for large models stable. |
| ![bug](/img/bug.jpg) | training progress is saved too frequently, causing very slow training |
| ![bug](/img/bug.jpg) | Return friendlier errors for incorrect parameters passed to templates |
| ![bug](/img/bug.jpg) | Fix a bug in tracing setup for custom trainer and evaluator |
| ![bug](/img/bug.jpg) | Accellerated training for specific cases |
| ![bug](/img/bug.jpg) | Training System failed to train some layers |

## Mesh

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Implement image crop model |
| ![new-feature](/img/new_feature.jpg) | Implement RandomSample model type |
| ![improvement](/img/improvement.jpg) | Allow models that need outputs from previous nodes in a workflow to have access to those outputs to support chaining complex graphs of models. |

## Portal

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | make UI for personal access token |
| ![improvement](/img/improvement.jpg) | Send event to Hubspot when a user signs up on portal |
| ![improvement](/img/improvement.jpg) | Change HTML tag of ImagePile component from '' to '' |
| ![improvement](/img/improvement.jpg) | Optimize Video Detection Frame Rate on Front end |
| ![improvement](/img/improvement.jpg) | Remove classification/detection toggle in image details view |
| ![improvement](/img/improvement.jpg) | Add colors to differentiate region results |
| ![bug](/img/bug.jpg) | Scroll active thumb into view in image details carousel |
| ![bug](/img/bug.jpg) | Unable to upload same file\(s\) through browse files. Fixed |
| ![bug](/img/bug.jpg) | Added a favicon for Portal |
| ![bug](/img/bug.jpg) | Can’t create a new API key or edit the information of API key. Fixed |
| ![bug](/img/bug.jpg) | Delete input while having other inputs selected deselects everything. Fixed |
| ![bug](/img/bug.jpg) | Cannot view workflow results in a face app. Fixed |
| ![bug](/img/bug.jpg) | Setting useCustomConfig isn't checked at login. Fixed |
| ![bug](/img/bug.jpg) | ffmpeg can produce no frames for very short videos. Fixed |
| ![bug](/img/bug.jpg) | Video spire tests are not running correctly. Fixed |
| ![bug](/img/bug.jpg) | Verify your email |
| ![bug](/img/bug.jpg) | Last concept used for bounding boxes is retained between apps. Fixed |
| ![bug](/img/bug.jpg) | Intercom links to old community site \(and maybe old FAQ page\). Fixed |
| ![bug](/img/bug.jpg) | Add Inputs/View Explorer does not display in new app anymore |
| ![bug](/img/bug.jpg) | Clicking video thumbs in detail view does not reload a video |
| ![bug](/img/bug.jpg) | The Add Positives / Add Negatives buttons on a Concept details view breaks portal |
| ![bug](/img/bug.jpg) | Collaboration apps have race condition where wrong user id is used |
| ![bug](/img/bug.jpg) | Don't load collaborations for search demo/logged-out users |
| ![bug](/img/bug.jpg) | Keyboard navigation in image details view highlights incorrect thumb |
| ![bug](/img/bug.jpg) | Render Video Assets in Search Bar |
| ![bug](/img/bug.jpg) | AppDetailsPanel add inputs/view in explorer no longer displays in devel |
| ![bug](/img/bug.jpg) | Editing geo/json search items no longer work after adding the search bar tooltip |
| ![bug](/img/bug.jpg) | TypeError: Cannot read 'get' of undefined when clicking image thumbnails in explorer search bar |
| ![bug](/img/bug.jpg) | Explorer Visibility in small resolution screen |
| ![bug](/img/bug.jpg) | No Prompt when uploading an image to explorer through url |
| ![bug](/img/bug.jpg) | CFR rectangles on grid view do not correlate |
| ![bug](/img/bug.jpg) | Prevent users from evaluating models that are not trainable. |

## Scribe

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Mark the /annotation endpoints with cl\_private\_rpc |
| ![bug](/img/bug.jpg) | No longer able to copy an app that has been shared with you via Collaborators. Fixed |
| ![bug](/img/bug.jpg) | Collaborators can not see workers |

## Spacetime

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Implement visual search in another app as a model type you can add to a workflow. |
| ![new-feature](/img/new_feature.jpg) | Add click to search metadata attributes in image details sidebar |
| ![new-feature](/img/new_feature.jpg) | Ability to keep concepts sorted by alpha. |
| ![improvement](/img/improvement.jpg) | Refactor search |
| ![improvement](/img/improvement.jpg) | Add metadata to collector added inputs so that you can filter by collector ID |

