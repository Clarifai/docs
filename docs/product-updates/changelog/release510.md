---
description: Changelog for Clarifai Release 5.10
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -1
pagination_next: product-updates/changelog/release511
pagination_prev: 
---

# Release 5.10

## Changelog 5.10

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create delete email endpoints in v2 to finally get off old internal endpoints to streamline operations |
| ![](/img/new_feature.jpg) | Create Patch, Delete, Get CreditCards endpoint in v2 APIs to finally get off old internal endpoints to streamline operations |
| ![](/img/improvement.jpg) | Improved billing for collaborators |
| ![](/img/bug.jpg) | PostVerifyEmail error causing some issues not being able to verify their email addresses upon sign-up. Fixed |
| ![](/img/bug.jpg) | Fixed flaky email verification integration test to provide more stability to sign-up process |
| ![](/img/bug.jpg) | Fixed a link to a non-public version of our API used for development purposes which led to a lot of login issues for users who landed there |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Created display for scopes on collaborator invitations, allowing users to easily understand and control the scope of access allowed for app collaborators |
| ![](/img/new_feature.jpg) | Introduced Collaborators and Collaborations endpoints in API and UIs in Portal |
| ![](/img/new_feature.jpg) | Add ability to upload inputs from App Details screen in Portal |
| ![](/img/improvement.jpg) | Created collaboration tab in Portal, making it easy to add collaborators to apps |
| ![](/img/improvement.jpg) | Created display to show the user who invited you to collaborate on an app |
| ![](/img/improvement.jpg) | Update email phrases for collaborator invitations. After successful sign-up, the user is now redirected to the app's dashboard in Portal |
| ![](/img/bug.jpg) | Fixed issue with concept counts in some apps |
| ![](/img/bug.jpg) | Clicking pencil icon to edit an API Key in Portal crashed apps. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | PATCH /inputs needs to check status of asset before patching |
| ![](/img/improvement.jpg) | Removed sync DELETE /inputs after runtime config tested |
| ![](/img/improvement.jpg) | Changed POST /inputs to be async always to simplify processing of workflows after API client tests updated |
| ![](/img/improvement.jpg) | Added pagination to clusters making for easier data management |
| ![](/img/bug.jpg) | Sporadic inability to delete any inputs via Portal or in bulk via the API |
| ![](/img/bug.jpg) | Numerous third party security fixes under the hood during ongoing upgrades |
| ![](/img/bug.jpg) | Fix 40012 status caused by parallel deletes and adds having a race condition |
| ![](/img/bug.jpg) | Update status\_changed\_at when deleting inputs so we can better track changes |
| ![](/img/bug.jpg) | Cache the input counts so that apps can display them in Portal efficiently |
| ![](/img/bug.jpg) | Handle killing URL downloading if it is processing for more than 60s. This will make URL processing much more reliable |
| ![](/img/bug.jpg) | Return an error if a user sends YouTube video URL as that is not a valid URL to a video we can download |
| ![](/img/bug.jpg) | Prevent PostInputs from creating inputs with a user-provided Input.ID that contains a colon |
| ![](/img/bug.jpg) | Video calls failed if URLs contain parameters after the file type. Fixed |
| ![](/img/bug.jpg) | Failed to resolve DNS MX record in URL down-loader which effected some downloads. Fixed |
| ![](/img/bug.jpg) | Investigate why some re-hosted s3 links are no longer working |
| ![](/img/bug.jpg) | Getting input counts was broken in some apps, reporting zero, which caused Portal to add an input view to display always |
| ![](/img/bug.jpg) | Debug UnicodeErrors in URL downloading to fix URLs with Unicode characters |
| ![](/img/bug.jpg) | Fix the poor handling of video too large error message |
| ![](/img/bug.jpg) | Unable to batch delete inputs from time to time has been fixed |
| ![](/img/bug.jpg) | Media processor video handling was having errors with decoding some videos |
| ![](/img/bug.jpg) | Delete Image Button doesn't work in some scenarios |
| ![](/img/bug.jpg) | Fixed support for webp image format so it is available again |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Deploy General Detection Beta Model to recognize multiple objects with bounding boxes. |
| ![](/img/new_feature.jpg) | Deployed new face detector for improved face detection performance over images and video |
| ![](/img/new_feature.jpg) | Created custom training enhancements that handle negatives better for improved model performance |
| ![](/img/new_feature.jpg) | Created evaluation metrics for custom facial recognition in backend for improved facial recognition performance |
| ![](/img/improvement.jpg) | Topological sort for workflows for scheduling a sequence based on dependencies |
| ![](/img/improvement.jpg) | Cleaned up duplicate models in workflow model list |
| ![](/img/improvement.jpg) | Deployed clarifai/main general v1.5 in concept model |
| ![](/img/improvement.jpg) | Create Pixel Training Hyperparameter Help Guide |
| ![](/img/improvement.jpg) | Improved accuracy of annotation counts, improving the user experience when annotating inputs |
| ![](/img/bug.jpg) | If an image is tagged with a concept that is not in the model, training fails due to KeyError, this is fixed |
| ![](/img/bug.jpg) | Fix detection labeling bug where previous images image ratio is used which would cause display issues |
| ![](/img/bug.jpg) | We have updated Portal to scale to a large number of concepts with much lower resource usage |
| ![](/img/bug.jpg) | Investigate face bounding box probabilities consistency to improve user experience |
| ![](/img/bug.jpg) | Bounding box creation canvas in Portal was breaking on resize of the window |
| ![](/img/bug.jpg) | Model |
| ![](/img/bug.jpg) | Cleaned up duplicate models in the workflow model list, so that you no longer see two General models |
| ![](/img/bug.jpg) | Unintended behavior for private model version IDs for certain customers has been fixed |
| ![](/img/bug.jpg) | Models referencing deleted backends should be marked as deleted |
| ![](/img/bug.jpg) | The latest version of our general model wasn't always default, now it is |
| ![](/img/bug.jpg) | Fixed a bug with face recognition evaluations. |
| ![](/img/bug.jpg) | Deleted Concepts Persisted in face recognition models. Not anymore! |
| ![](/img/bug.jpg) | Inability to see whether a large model is training and making progress, or hung has been addressed to better support our customers |
| ![](/img/bug.jpg) | Model won't train in some apps with no positive examples issue has been resolved |
| ![](/img/bug.jpg) | Fixed issues with color models failing for a short period of time |
| ![](/img/bug.jpg) | Fixed list of models available to workflows to only show a single General model |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Return custom detection evaluations through the GO API |
| ![](/img/improvement.jpg) | Improved cluster page performance |
| ![](/img/bug.jpg) | Investigate health checks killing a prediction backend service, which could affect some predictions in the API |
| ![](/img/bug.jpg) | Workflow predict sometimes was failing with 98012 status code. Many fixes here should reduce that |
| ![](/img/bug.jpg) | Workflow Predict called the wrong model sometimes. Not any more! |
| ![](/img/bug.jpg) | Video playback out of sync with detections in our demos |
| ![](/img/bug.jpg) | Fixed issues with regions predicted on inputs would be carried over between inputs in Portal |
| ![](/img/bug.jpg) | Fixed the flaky face recognition tests to ensure stability of our face recognition product |
| ![](/img/bug.jpg) | Face Detection backends were running out of memory for some predictions, this has been resolved |
| ![](/img/bug.jpg) | Return more descriptive error msg for post metric endpoint |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Added helper text/suggestions to improve Portal user experience |
| ![](/img/improvement.jpg) | Header Search return app\_owner's user info in collaboration endpoints |
| ![](/img/bug.jpg) | Explorer Search Bar - Clicking the green/red circle icons didn't reliably detect click, now it does! |
| ![](/img/bug.jpg) | Portal not showing the correct number of results in concept search. Fixed. |
| ![](/img/bug.jpg) | Left/right arrows in single image view don't switch between images with regions. Fixed |
| ![](/img/bug.jpg) | Fixed carousel thumbnail clicks wiping query params / trigger new search |
