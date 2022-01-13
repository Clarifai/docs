---
description: Changelog for Clarifai Release 7.0
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -15
pagination_next: product-updates/changelog/release71
pagination_prev: product-updates/changelog/release611
---

# Release 7.0


| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Scribe

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Return UserIDs for Reject/Approve annotation endpoint and fix bug |
| ![bug](/img/bug.jpg) | Integration test timeout when waiting for post input |
| ![improvement](/img/improvement.jpg) | Sortable-tables for labeler tasks-list |

## Portal

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | Fixed inconsistency in interpolation & drawing state |
| ![bug](/img/bug.jpg) | Fixed ghost transformer |
| ![improvement](/img/improvement.jpg) | Migrate Front-End Deployment Jobs |
| ![improvement](/img/improvement.jpg) | Enable all features for default user on local env |
| ![improvement](/img/improvement.jpg) | Allow adding collaborator by non-primary email address |
| ![bug](/img/bug.jpg) | Fixed nil pointer dereference in model validation |
| ![bug](/img/bug.jpg) | Fixed nil pointer dereference in workflow validation |
| ![new-feature](/img/new_feature.jpg) | Multi search item search support in Portal |
| ![new-feature](/img/new_feature.jpg) | Support positive and negative metadata searches |
| ![new-feature](/img/new_feature.jpg) | Add geo coordinates in bulk edit in explorer grid view |
| ![improvement](/img/improvement.jpg) | display app-id in app-listing card |
| ![improvement](/img/improvement.jpg) | Make the Portal header short |
| ![improvement](/img/improvement.jpg) | display app re-indexing stats in data-mode \( internal-users \) |
| ![improvement](/img/improvement.jpg) | Add Search By Region and Hiding region capabilities to Annotations & Proposals |
| ![improvement](/img/improvement.jpg) | better CSV upload error messages |
| ![improvement](/img/improvement.jpg) | Clean up Bulk labeling code |
| ![bug](/img/bug.jpg) | Fixed modelId is null in Model details page |
| ![bug](/img/bug.jpg) | Fixed model-versions not loading |
| ![bug](/img/bug.jpg) | Fixed collectors user-selection API-calls fail with invalid-token |
| ![bug](/img/bug.jpg) | Collectors pre & post-queue have incorrect labels. Fixed |
| ![bug](/img/bug.jpg) | Fixed copy user-id to clipboard in profile |
| ![bug](/img/bug.jpg) | Workflow Selection causes app crashes when using an empty workflow |
| ![bug](/img/bug.jpg) | Portal sub-pages doesn't load on refresh |
| ![bug](/img/bug.jpg) | Endless Concept Relation Calls |
| ![bug](/img/bug.jpg) | Annotations Panel shows no annotations in classification app. Fixed |
| ![bug](/img/bug.jpg) | User is able to create workflow without nodes \(click grey button\). Fixed |
| ![bug](/img/bug.jpg) | Fixed 404 notifs when fetching concept relations in proposals |
| ![bug](/img/bug.jpg) | Proposers - no relation type rendered if just model output |
| ![bug](/img/bug.jpg) | New workflow model id is incorrectly populated |
| ![bug](/img/bug.jpg) | Input Details page isn't confirming/showing the labelled concept |
| ![bug](/img/bug.jpg) | Fixed 1 Model version is being displayed in modelversionselector |
| ![bug](/img/bug.jpg) | Fixed copying apps |
| ![bug](/img/bug.jpg) | Fixed demo app to correctly load fonts |

## Armada

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | When predicting by input ID, fall back to using the model if we fail to retrieve outputs from the DB |
| ![bug](/img/bug.jpg) | Publish videos separately when reindexing |
| ![improvement](/img/improvement.jpg) | Prefer clarifai rehosted URLs over original urls when predicting |
| ![bug](/img/bug.jpg) | Fixed failure of cluster inferencing when no embeddings were received |
| ![bug](/img/bug.jpg) | Fix workflow failures in tracker workflows when there is no detection in the first frame |
| ![bug](/img/bug.jpg) | Validated training examples have bounding boxes in them during deep training. |

## Enlight

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Revise template parameters |
| ![bug](/img/bug.jpg) | Fixed BERT EIDs |
| ![bug](/img/bug.jpg) | Fixed centroid tracker bug |
| ![new-feature](/img/new_feature.jpg) | Centroid tracker Platform Integration |
| Sub-task | Landmark post processing in Python Media Processor |
| ![new-feature](/img/new_feature.jpg) | Add `Track` export method to neural lite tracker handler |
| ![bug](/img/bug.jpg) | Fixed DST directory\_upload script |
| ![new-feature](/img/new_feature.jpg) | Add model version descriptions |
| ![new-feature](/img/new_feature.jpg) | Add new multilingual text similarity embed model version and update the Text workflow to use it. |
| ![new-feature](/img/new_feature.jpg) | Add support for audio indexing and transfer learning |
| ![new-feature](/img/new_feature.jpg) | Thread through audio support in the platform |

## API

| Status | Details |
| :--- | :--- |
| ![new-feature](/img/new_feature.jpg) | Make gRPC Go client |
| ![improvement](/img/improvement.jpg) | Add reading URL from CLARIFAI\_GRPC\_BASE to all clients |
| ![improvement](/img/improvement.jpg) | Create endpoint for fetching relations of multiple concepts in one API call |
| ![bug](/img/bug.jpg) | Fixed app-description duplication on app-copy |
| ![bug](/img/bug.jpg) | Fixed tracker model prediction panic |
| ![bug](/img/bug.jpg) | Reclaimed infinite loop |
| ![bug](/img/bug.jpg) | Fixed incorrect asset count in pipeline |
| ![bug](/img/bug.jpg) | Fixed redis stream msg id to timestamp err |
| ![bug](/img/bug.jpg) | Fixed video ingestion using empty workflow |
| ![bug](/img/bug.jpg) | Fixed app description during app creation is not being saved. |
