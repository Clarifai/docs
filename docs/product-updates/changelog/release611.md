---
description: Changelog for Clarifai Release 6.11
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -14
pagination_next: product-updates/changelog/release70
pagination_prev: product-updates/changelog/release610
---

# Release 6.11

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Scribe

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Update annotations count for tasks with consensus review |
| ![bug](/img/bug.jpg) | App Collaborators are unable to view model versions. Fixed |
| ![improvement](/img/improvement.jpg) | Refactor CustomEval worker |
| ![improvement](/img/improvement.jpg) | Trigger consensus review when non-anchor annotation is updated |
| ![new-feature](/img/new_feature.jpg) | Collaborator annotation success by default |

## Account

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Signup form should show some visual feedback when submitting |

## Spacetime Search

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | New Saved Searches not working. Fixed |
| ![bug](/img/bug.jpg) | Unable to save search. Fixed |

## Portal

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | Frontend merge requests failing. Fixed |
| ![new-feature](/img/new_feature.jpg) | Create a 'People Tracker' in Portal with specific parameters from centroid tracker |
| ![new-feature](/img/new_feature.jpg) | Proposers - add filtering by status |
| ![new-feature](/img/new_feature.jpg) | Proposers - switch workflows |
| ![improvement](/img/improvement.jpg) | Show concepts from workflows in proposals |
| ![improvement](/img/improvement.jpg) | Natural language form for Proposals relation type chooser |
| ![new-feature](/img/new_feature.jpg) | Allow users to drag & reorder selected models during workflow creation |
| ![improvement](/img/improvement.jpg) | Add filters to Proposers UI |
| ![improvement](/img/improvement.jpg) | Add rendering of Proposers UI bounding boxes |
| ![new-feature](/img/new_feature.jpg) | Make predictions, versions and concept show for clarifai/main models |
| ![improvement](/img/improvement.jpg) | No loader in proposals causing user confusion |
| ![bug](/img/bug.jpg) | Proposers - no name shown for collaborators. Fixed |
| ![bug](/img/bug.jpg) | Proposers - classification parent-child hit-or-miss if modelOutputs don't load. Fixed |
| ![bug](/img/bug.jpg) | Button displays in Model Mode for text workflows are off. Fixed |
| ![improvement](/img/improvement.jpg) | Allow users to bulk-unlabel previously labelled inputs |
| ![improvement](/img/improvement.jpg) | Adopt sortable table everywhere in portal |
| ![improvement](/img/improvement.jpg) | Model Mode &gt; OUTPUT\_INFO.DATA.CONCEPTS &gt; trashcan icon too far away from the concept name |
| ![improvement](/img/improvement.jpg) | Display concepts in upload trained model page |
| ![bug](/img/bug.jpg) | Omits being added as Rank instead of Filters. Fixed |
| ![bug](/img/bug.jpg) | All model versions are not being displayed. Fixed |
| ![improvement](/img/improvement.jpg) | Support Secure Data Hosting for Text Assets |
| ![bug](/img/bug.jpg) | Saved Searches not working in Explorer. Fixed |
| ![bug](/img/bug.jpg) | Omit Negative/Positive and Filter Positive/Negative requests malformed. Fixed |
| ![bug](/img/bug.jpg) | Workflow Range Slider not working for all workflows. Fixed |
| ![bug](/img/bug.jpg) | Bulk labeling should read labels from selected annotations/inputs. Fixed |
| ![improvement](/img/improvement.jpg) | Disable fetching annotation in bulk-labeling |
| ![bug](/img/bug.jpg) | Undefined is not an object \(evaluating 'Ua\[o\].videos'\). Fixed |
| ![bug](/img/bug.jpg) | Failed prop type: Invalid prop `sm` supplied to `Col`. Fixed |
| ![improvement](/img/improvement.jpg) | Remove Create Workflow modal from Labeler |
| ![bug](/img/bug.jpg) | console.log data printed in Taskform. FIxed |
| ![bug](/img/bug.jpg) | Uploading iPhone photos in Portal results in the inputs rotating incorrectly \(inconsistent\). Fixed |
| ![bug](/img/bug.jpg) | Explorer console error in predictions reducer fixed |
| ![bug](/img/bug.jpg) | Broken thumbnail when uploading a video via data mode page. Fixed |
| ![bug](/img/bug.jpg) | Switch collectors to use new labeler whitelist flag |

## Armada

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Re-process assets faster |

## API

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Update error status codes in daily\_error\_code\_count |
| ![improvement](/img/improvement.jpg) | Add req\_id to logged error |
| ![new-feature](/img/new_feature.jpg) | Finish gRPC Rust client |
| ![new-feature](/img/new_feature.jpg) | Move the python API client tests to gRPC Python client. |
| ![improvement](/img/improvement.jpg) | Update & release the clients with the secure gRPC channel |
| ![improvement](/img/improvement.jpg) | Improved workflow logging |
| ![improvement](/img/improvement.jpg) | Add PostModelOutputs retries to the gRPC Python test suite for dev & staging |
| ![improvement](/img/improvement.jpg) | Validate new app id when duplicate app |
| ![improvement](/img/improvement.jpg) | Workflow improvements |
| ![bug](/img/bug.jpg) | Fix undefined variable |

## Enlight Train

| Staus | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | Model training only uses available inputs, not waiting for all inputs to be processed. Fixed |
| ![new-feature](/img/new_feature.jpg) | Add support for landmark extraction model type |
| ![improvement](/img/improvement.jpg) | Pre-trained model creation field improvements |
| ![bug](/img/bug.jpg) | Fix new deep training: missing platform in benchmark config + torch import affecting TF benchmarking |
| ![improvement](/img/improvement.jpg) | Allow public model versions if they are used in public workflow |
| ![bug](/img/bug.jpg) | Deep training Bug with small amount of inputs fixed |
