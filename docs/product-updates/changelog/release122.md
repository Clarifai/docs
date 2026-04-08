---
description: Changelog for Clarifai Release 12.2
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -77
pagination_next: null
pagination_prev: product-updates/changelog/release121
draft: false
---

# Release 12.2

**Release Date:** March 5th, 2026

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Clarifai CLI

|Status                                |Change |Details|
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Streamlined model-to-production workflow | <ul><li> Introduced a streamlined 3-command workflow (`model init` → `model serve` → `model deploy`) to take models from scaffold to production in minutes. Learn how to get started quickly [here](https://docs.clarifai.com/getting-started/upload-model).</li><li>Unified deployment into a single `model deploy` command with automatic infrastructure provisioning.</li><li>Added structured deployment phases with progress indicators and next steps.</li></ul>|
| ![improvement](/img/improvement.jpg) | Deployment lifecycle management | <ul><li>Added `model status`, `model logs`, and `model undeploy` commands.</li><li>Introduced direct `deployment` commands for managing deployments by ID.</li><li>Maintained backward compatibility with legacy flags and configs.</li></ul>|
| ![improvement](/img/improvement.jpg) | Intelligent infrastructure & instance handling | <ul><li>Added GPU auto-selection based on model VRAM and toolkit requirements.</li><li>Enabled multi-cloud instance discovery with GPU shorthands and legacy normalization.</li><li>Added custom Docker base image support for faster toolkit builds.</li></ul>|
| ![improvement](/img/improvement.jpg) | Enhanced local development & runners | <ul><li>Enhanced `model serve` with env, Docker, and standalone gRPC modes.</li><li>Added concurrency controls and optional Docker image retention.</li><li>Added health-check configuration for the `clarifai model local-runner` via `--health-check-port`, `--disable-health-check`, and `--auto-find-health-check-port` flags.</li></ul>|
| ![improvement](/img/improvement.jpg) | Authentication & context Management | <ul><li> Improved authentication with interactive/non-interactive [`login`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-login) and flexible [`logout`](https://docs.clarifai.com/resources/api-overview/cli#clarifai-logout) options.  </li><li>Added named CLI contexts with `--context` overrides.</li><li>Expanded `whoami` with profile inspection, org listing, and JSON output.</li></ul>|
| ![improvement](/img/improvement.jpg) | Model & app management enhancements | <ul><li>Enhanced `model predict` with streaming auto-detection, method inference, JSON output, and deployment routing.</li><li>Implemented early HuggingFace gated-model validation with actionable errors.</li><li>Added full CRUD support for apps with convenient command aliases.</li></ul>|
| ![improvement](/img/improvement.jpg) | Configuration & performance improvements | <ul><li>Simplified `config.yaml` with automatic normalization and smart defaults.</li><li>Improved CLI startup performance through lazy module loading.</li><li>Improved output formatting with clickable URLs, structured sections, and command hints.</li></ul>|


## Pipelines 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types#release-types) | Introduced Training on Pipelines to align training workflows with production-grade deployment and scalable infrastructure | <ul> <li>  Introduced support for initializing pipelines using templates — including training templates — directly via the CLI.</li>  <li> Launched a new UI experience for training models seamlessly within pipelines.</li> </ul> _**Note:** Training on Pipelines enables training of models fully compatible with the Clarifai Compute Orchestration platform. It also allows training to leverage dedicated provisioned compute resources._|
|  ![improvement](/img/improvement.jpg) | Made improvements to pipeline steps | <ul> <li> Enhanced the `pipeline step init` command to include a `visibility` field. </li> <li> Users can now set pipeline steps to be publicly visible during initialization through both the CLI and builder APIs. By default, pipelines and pipeline step templates are created with `PRIVATE` visibility.</li> </ul>|


## Artifacts

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Made improvements to provide users with full control over artifact lifecycle management| <ul> <li> Artifacts no longer expire automatically by default. </li> <li> Artifacts are only deleted if an `expires_at` value is explicitly set at upload time. </li><li> The CLI now displays the `latest-version-id` alongside artifact visibility for easier version management and referencing. </li></ul>|


## Playground

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![improvement](/img/improvement.jpg)| Made Playground improvements| <ul>  <li> Enhanced the Playground with major upgrades to the Universal Search experience, including multi-panel (compare mode) support, improved workspace handling, and smarter model auto-selection.</li> <li> Model selections are now panel-aware to prevent cross-panel conflicts, workspace context is more robust and explicit, and the UI can optionally display simplified model names for a cleaner experience.</li> </ul>|


## Deployments

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made various improvements to deployments  | <ul> <li> Dynamic nodepool routing now allows multiple nodepools to be attached to a single deployment, with configurable scheduling strategies. </li> <li> Deployment visibility has been improved with the introduction of status chips and enhanced list views across Deployments, Nodepools, and Clusters.</li> <li> DigitalOcean and Azure have been added as supported cloud instance providers. </li> <li> Support has been added for explicitly starting and stopping deployments, enabling users to preserve configurations without deleting and recreating deployments.</li> <li> A redesigned Deployment details page has been introduced, with expanded status visibility across tables and the Playground. </li>  </ul>|

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made various improvements to the platform | <ul> <li> A new Model Library UI has been launched to provide a more streamlined experience for browsing and exploring models.</li> <li> Several platform UX enhancements were introduced, including adding Universal Search to the navbar and refreshing user listing pages.</li> <li> Introduced a new account experience.</li> <li> Rolled out a new Home 3.0 interface.</li> </ul>|

##  Modules 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Deprecation** | Removed modules | <ul> <li> Modules previously extended Clarifai’s UIs and enabled customized backend processing. </li> <li>  Support for Modules has now been fully dropped, and all associated module components have been removed from the platform.  </li>  </ul>|

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Introduced new features and enhancements to improve model management| <ul> <li> Added OpenAI handler support for fetching featured models directly by model ID.  </li> <li>  Introduced stream cancellation support.</li> <li> Added model admission control hooks. </li> <li> Enabled graceful rollovers between model versions during deployment. </li><li> Fixed an issue where `PatchNodepools` overwrote the maximum instance count. </li><li> Fixed an issue where deployments reused outdated compute information. </li><li> Updated the API to report live deployment replica counts and nodepool node counts. </li><li> Improved error responses for clearer diagnostics. </li> <li> Delivered general performance improvements.</li> </ul>|

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![improvement](/img/improvement.jpg)|Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)  | <ul> <li>Prevented environment variable clobbering in tests by using `@patch.dict` and correcting patch paths after the lazy-loading refactor.</li><li>Fixed the ModelRunner health server starting twice, which could cause “Address already in use” errors; added support to disable the health server and automatically select an available port.</li><li>Reduced overhead in the ModelRunner admission-control polling loop to improve runner efficiency.</li>  <li>Fixed a serializer regression affecting runner serialization utilities.</li><li>Added admission-control support for model runners.</li><li>Added `openai` as a core dependency.</li> <li>Removed the `inference_compute_info` requirement for local model runners.</li> <li>Relaxed the `clarifai-protocol` version constraint from `==0.0.35` to `>=0.0.35,<0.1.0`.</li> <li>Resolved dependency version-constraint issues.</li><li>Fixed authentication issues in the model deployment CLI.</li><li>Added support for passing `num_threads` from `config.yaml` into the model version protobuf.</li><li>Switched Dockerfile templates to use `tini` as the default entrypoint to improve signal handling and zombie process reaping in runner containers.</li><li>Refactored the Stdio Model Context Protocol (MCP) server to improve logging clarity and remove unused legacy code.</li></ul>|
