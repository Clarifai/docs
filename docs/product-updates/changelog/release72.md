---
description: Changelog for Clarifai Release 7.2
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -17
pagination_next: product-updates/changelog/release73
pagination_prev: product-updates/changelog/release71
---

# Release 7.2

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## API

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |Add Rust/Go/Swift/C++ gRPC clients to be built + released|

## Portal

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |Set up NextJS for marketplace                            |
| ![new-feature](/img/new_feature.jpg) |Delete and Deduplication UX for Explorer Sidebar         |
| ![new-feature](/img/new_feature.jpg) |Grouping/Ranking/Prediction sliders in Explorer sidebar  |
| ![improvement](/img/improvement.jpg) |Hide predictions tab for models having unsupported output_type|
| ![improvement](/img/improvement.jpg) |Add tests for model predictions                          |
| ![improvement](/img/improvement.jpg) |Make error toast persistant (or at least stay longer)    |
| ![improvement](/img/improvement.jpg) |Add integration tests for model-gallery - sortable-tables|
| ![improvement](/img/improvement.jpg) |Design change for model-mode filters into dropdown-filter|
| ![improvement](/img/improvement.jpg) |Adopt auto-complete dropdown filters everywhere in Portal|
| ![bug](/img/bug.jpg) |Classification apps should always PATCH the input level annotation, not POST|
| ![bug](/img/bug.jpg) |Cannot read property 'filterNot' of undefined            |


## Scribe

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |[Portal-Screen] Labeler-Tasks-Overview: Removed Pending-Inputs count from Task-List|
| ![improvement](/img/improvement.jpg) |[Portal-Screen] Labeler-View: Added click-to-insert a new point on polygon edge|
| ![improvement](/img/improvement.jpg) |[Portal-Screen] Labeler-View: Added Un-submitted Labels Warning|
| ![bug](/img/bug.jpg) |AI Assist threshold panel is too large                   |
| ![bug](/img/bug.jpg) |Change Worker mode submit button text from "Submit input for review" to just "Submit input"|
| ![bug](/img/bug.jpg) |Keybindings don't work unless the sidebar is "focused"   |
| ![bug](/img/bug.jpg) |When submitting the last input in the carousel, I am taken back to admin view rather than fetching the next batch of inputs|
| ![bug](/img/bug.jpg) |Zoom goes to 510% then to NaN                            |

## Enlight

|Status     |Details                                                  |
|-----------|---------------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |[Platform-Object] Training-Runner: Added Clarifai_EfficientDet template for Visual-Detector|
