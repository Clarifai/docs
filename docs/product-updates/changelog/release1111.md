---
description: Changelog for Clarifai Release 11.11
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -74
pagination_next: product-updates/changelog/release120
pagination_prev: product-updates/changelog/release1110
draft: false
---

# Release 11.11

**Release Date:** December 3rd, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| [**Breaking Change**](https://docs.clarifai.com/product-updates/changelog/release-types#release-types) | Decommissioning legacy models  | <ul> <li> We are upgrading our infrastructure, and as part of this transition, we will decommission most of our legacy models on December 31, 2025.</li> <li> Learn more [here](https://docs.clarifai.com/product-updates/upcoming-api-changes/decommission-legacy-models/). </li> </ul> |
| ![improvement](/img/improvement.jpg)  |  Made improvements| <ul> <li> Only a curated set of featured models can now be run using the Clarifai Shared SaaS (Serverless) deployment option. To use any other models, users must deploy them to their own cluster and nodepool.</li> </ul>|

## Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Published new models | <ul> <li>Published [Trinity Mini](https://clarifai.com/arcee_ai/AFM/models/trinity-mini), a 26B-parameter (3B active) sparse mixture-of-experts language model, engineered by Arcee AI for efficient inference over long contexts with robust function calling and multi-step agent workflows. </li> <li> Published [GLM 4.6](https://clarifai.com/zai/completion/models/GLM_4_6), which brings unified reasoning, coding, and agentic capabilities in a single model — with a 200K context window and stronger coding performance on real-world tools. </li> </ul> |


## Playground

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  |  Made improvements| <ul> <li> Added the ability to sync prompts in the Playground's compare mode, eliminating the need to copy prompts between models. This makes it easy to compare different models by speed and performance.</li> </ul>|



## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements | <ul> <li> Implemented a new design for account navigation and reordered menu items to improve usability and overall user experience. </li> <li> Added the ability for users to upload a custom profile picture, which replaces the default initials and appears across the Community (e.g., on shared model or app details). </li> <li> Updated code snippets to mask the user's PAT by default. The full value remains visible when the snippet is copied.</li> <li> Added the ability to mark all activity-related notifications as read in the notification icon at the upper-right corner of the navigation bar. Each notification also now displays its creation date and time.</li> <li> Added the ability to add and remove credit card details. The previous edit option has been removed. </li> <li> Added a quick guide on uploading models using the Python SDK.</li> </ul> |
| ![bug](/img/bug.jpg) | Fixed bugs |<ul> <li> Fixed an issue where an unclear error message appeared when an access token was missing. A meaningful message is now provided. </li> <li> Fixed an issue where some invoices displayed missing or incorrect category names. Invoices now correctly show all category items. </li> </ul>  | 


## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) |Made improvements  | <ul> <li> Added an option to export the data of each chart as a CSV file. </li> </ul> |
| ![bug](/img/bug.jpg) | Fixed bugs | <ul><li> Fixed an issue where reloading the Control Center in an organization account redirected users away instead of refreshing the intended content. </li> </ul> |


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md) |  <ul> <li>Added platform specification support to ```config.yaml``` for model versions.</li> <li>Added a ```--platform``` CLI option for model uploads.</li> <li>Added support for the new ```struct_value``` field in runner data utilities.</li> <li>Added support for including the deployment user ID.</li> <li>Removed model proto caching from ```ModelRunner```, ```ModelServicer```, and the server.</li> <li>Updated the Dockerfile base image Git hash.</li> <li>Refactored the ```Dockerfile.template``` for building Clarifai model runner images by introducing a multi-stage build that separates model asset downloading from final image creation, resulting in cleaner and more efficient builds.</li> <li>Fixed an issue by ensuring the model proto containing secrets is loaded once during server initialization and made available to all prediction requests.</li> <li>Added full support for the OpenAI Responses API (streaming and non-streaming) to the dummy model implementation, improved token usage accounting for both ```chat.completions``` and ```responses``` endpoints, and introduced comprehensive tests for this functionality.</li> <li>Added a validation mechanism to the model loading process in the ```Model``` class, improving reliability during initialization.</li> <li>Improved parsing of package names and versions from requirement lines, including support for dependencies defined with ```@``` and more consistent whitespace handling.</li> <li>Centralized and streamlined logic for reading environment variables and passing them to the ```ClarifaiAuthHelper```, improving maintainability and flexibility.</li> <li>Added ```visual-keypointer``` to the list of concepts-required model types.</li> <li>Improved the robustness of the ```clarifai model local-runner``` command by loading and validating model configuration earlier and adding stricter checks for model type consistency.</li> <li>Optimized model runner performance by loading the model proto once at initialization rather than requiring it for every prediction request.</li> <li>Added comprehensive environment validation to provide immediate feedback when users attempt to run model tests in unsupported environments, helping prevent confusion when tests fail.</li> </ul>|

