---
description: Changelog for Clarifai Release 6.9
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -12
pagination_next: product-updates/changelog/release610
pagination_prev: product-updates/changelog/release68
---

# Release 6.9

## Changelog 6.8

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Scribe

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Improve email subject for canceled order |
| ![](/img/new_feature.jpg) | \[P0\]Cancel feature for Order owner |
| ![](/img/improvement.jpg) | Task form should select "All Inputs" by default |
| ![](/img/bug.jpg) | Create Task button is incorrectly locked due to missing inputs |
| ![](/img/bug.jpg) | Embed Model Version Id Missing in classification annotation requests |
| ![](/img/bug.jpg) | Detection Annotations with Predictions display out of order |
| ![](/img/bug.jpg) | Can only view app owner annotations when viewing an app as a collaborator |
| ![](/img/bug.jpg) | Fix Detection Annotations displayed as collaborator bug |

### Spacetime

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Clicking the x on search item in explorer grid view for search across apps does not properly clear the url |
| ![](/img/new_feature.jpg) | Add Min Search Score Range Slider to Search Across Apps Tab |
| ![](/img/new_feature.jpg) | Clicking a video search result does not seek to the corresponding timestamp |
| ![](/img/new_feature.jpg) | Search By Region button on video thunbnails |
| ![](/img/new_feature.jpg) | Clicking see all within image details sidebar of the visual search across apps should render all of the search results in explorer's asset grid view |
| ![](/img/new_feature.jpg) | clicking see all from image details sidebar opens refine search search bar in explorer's asset grid view |
| ![](/img/new_feature.jpg) | Add getSeekedVideoFrame onMouseOver to visual search results of |
| ![](/img/new_feature.jpg) | Add video timestamps to video search results within the |
| ![](/img/new_feature.jpg) | Add search across apps to Image View righthand sidebar |
| ![](/img/new_feature.jpg) | Add select app in "Refine Search" righthand sidebar |
| ![](/img/new_feature.jpg) | Search for annotation.status in Explorer search bar. |
| ![](/img/new_feature.jpg) | Search for annotation.user\_id in Explorer search bar. |
| ![](/img/improvement.jpg) | Change Annotation Search To say "filter by" |
| ![](/img/bug.jpg) | Users having the same name as a collaborator causes annotation searching to break. |
| ![](/img/bug.jpg) | Manually typing annotation search crashes explorer |
| ![](/img/bug.jpg) | Endless error if a search fails in explorer |
| ![](/img/bug.jpg) | Search grid view in explorer gets stuck with old results |

### Enlight

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Tracker evals: support for original coordinates |
| ![](/img/new_feature.jpg) | Integrate MORSE metrics and AP to tracker eval pipeline |
| ![](/img/improvement.jpg) | Cleanup trackers' interface |
| ![](/img/improvement.jpg) | Platform-aware triton orchestrator |
| ![](/img/improvement.jpg) | Connect tracker evaluations with the servicer |
| ![](/img/improvement.jpg) | Implement first version of tracking eval |
| ![](/img/improvement.jpg) | Add embed\_model\_version\_id to cluster and KNN model types |
| ![](/img/improvement.jpg) | Show ROC AUC even if 0.0 |
| ![](/img/bug.jpg) | crop model carriers forward concepts and other things but shouldn’t. |
| ![](/img/bug.jpg) | Edit model doesn't work in model details page and app details page |

### Mesh

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create pubic Visual Text Recognition workflow |
| ![](/img/improvement.jpg) | \[Portal\] Use only\_base parameter when choosing base workflow |
| ![](/img/improvement.jpg) | Display model name in Selected model row in workflows edit page |
| ![](/img/bug.jpg) | Remove workflows creation discrepancy |
| ![](/img/bug.jpg) | Workflows nodes being set as Loading |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Add Transform, Resize and Drag functionality to canvas rectangles |
| ![](/img/improvement.jpg) | Create CollabpsableBox block to provide app-wide reusable accordion boxes with menu items |
| ![](/img/new_feature.jpg) | Create a central entities factory for app-wide entities like annotations to be shared across modules like Explorer and Labeler |
| ![](/img/new_feature.jpg) | Mouse leave preserves the FE generated thumbnail of a video at a specific time. |
| ![](/img/new_feature.jpg) | Set up end to end testing framework & write auth tests |
| ![](/img/new_feature.jpg) | Create Data mode design |
| ![](/img/new_feature.jpg) | Filter annotations by user id in explorer |
| ![](/img/improvement.jpg) | re-position data-mode in sidebar |
| ![](/img/improvement.jpg) | Fix Development Environment Crashing on Portal |
| ![](/img/improvement.jpg) | Add responsiveness capability to Portal |
| ![](/img/improvement.jpg) | user can set a unique user\_id \( username \) in profile |
| ![](/img/improvement.jpg) | Enable HTML links for mode-switching icons |
| ![](/img/improvement.jpg) | Remove Upload from Explorer in favor of data mode |
| ![](/img/improvement.jpg) | Memoize video thumbnail urls |
| ![](/img/improvement.jpg) | Fetch Tag icon data for Explorer inputs on hover |
| ![](/img/improvement.jpg) | Toast notifications should always be on top |
| ![](/img/improvement.jpg) | Refactor Data mode |
| ![](/img/improvement.jpg) | Refactor Data mode \(Upload component\) |
| ![](/img/improvement.jpg) | Remove Detection options dropdown menu |
| ![](/img/improvement.jpg) | Better Toast Notification System |
| ![](/img/improvement.jpg) | Update `ModelVersionSelector` component to make use of `reselect` |
| ![](/img/improvement.jpg) | Add create\_at date to explorer single input view. |
| ![](/img/improvement.jpg) | Expose geo coordinates just like metadata. |
| ![](/img/improvement.jpg) | Add input\_fields and output\_fields columns to model selection view \(from the ModelType\) |
| ![](/img/improvement.jpg) | Migrate model details page to model mode |
| ![](/img/bug.jpg) | Copy button for personal access tokens doesn't work |
| ![](/img/bug.jpg) | /models API request being made with appId as undefined |
| ![](/img/bug.jpg) | hovering over inputs keeps fetching annotations even if fetched once |
| ![](/img/bug.jpg) | Fix incorrect check for 'isDetectionModel' throughout Portal |
| ![](/img/bug.jpg) | Broken TypeScript configuration for Cypress and Jest |
| ![](/img/bug.jpg) | TypeScript type-checks not running on build/push |
| ![](/img/bug.jpg) | Data Mode crashing due to legacy string refs |
| ![](/img/bug.jpg) | Predictions don't show up if you reload on Explorer input |
| ![](/img/bug.jpg) | Metrics view doesn't work anymore |
| ![](/img/bug.jpg) | Classification Annotations not loading |
| ![](/img/bug.jpg) | Model filter app name resets when you click ctrl/alt key |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | \[API Client Tests Javascript\] Fail fast when `stage` is invalid |
| ![](/img/improvement.jpg) | Don’t treat StatusCode\_FEATUREFLAG\_BLOCKED errors as server errors |
