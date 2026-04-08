---
description: Changelog for Clarifai Release 12.3
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -78
pagination_next: null
pagination_prev: product-updates/changelog/release121
draft: true
---

# Release 12.3

**Release Date:** April 8th, 2026

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Agent Skills

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Released Clarifai Skills| <ul> <li>  Clarifai Skills are specialized prompt templates that transform AI coding assistants — Claude Code, Cursor, Codex, and more — into Clarifai platform experts.</li> <li> Learn more about them [here](https://docs.clarifai.com/compute/agents/agent-skills). </li> </ul>|

## Model Training

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added model pipeline training from templates | <ul><li>You can now train models using pipeline templates, enabling a streamlined, configuration-driven training workflow.</li></ul> |
| <b>Deprecation</b> | Deprecated legacy model training (Triton + Kubeflow) | <ul><li>Legacy model training methods using Triton and Kubeflow have been deprecated.</li><li><b>Note:</b> Transfer Learn training remains available.</li></ul> |

## Request Routing

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Improved how Clarifai routes prediction requests for optimal performance| <ul> <li>Added KV cache affinity to route requests to replicas with relevant cache state.</li><li>Added session-aware routing to keep user requests on the same replica. </li><li>Reduced cold starts with automatic pre-warming of popular instances. </li><li>Added prediction caching for identical input + model + version combinations. </li><li> Learn more about them [here](https://docs.clarifai.com/compute/inference/routing/).  </li> </ul>|

## UI Updates

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Updated Compute List and View pages | <ul><li>Refreshed the List and View pages for deployments, nodepools, and clusters with improved layouts and information display.</li></ul> |
| ![improvement](/img/improvement.jpg) | Updated the log viewer component | <ul><li>Improved the log viewer UI for better readability and navigation of model and runner logs.</li></ul> |
| ![improvement](/img/improvement.jpg) | Updated the Home experience | <ul><li>Refreshed the Clarifai platform Home page with an improved experience for navigating resources and getting started.</li></ul> |
| ![improvement](/img/improvement.jpg) | Updated the model page UI | <ul><li>Redesigned model page with an improved layout and user experience.</li></ul> |


## Python SDK

### Model Serving & Deployment

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added `clarifai model deploy` command and simplified `clarifai model init` | <ul><li>New `clarifai model deploy` command with multi-cloud GPU discovery and a zero-prompt deployment flow.</li><li>Simplified `config.yaml` structure for model initialization.</li>  </ul> |
| ![improvement](/img/improvement.jpg) | Smart resource reuse and private-by-default for `clarifai model serve` | <ul><li>Model serve now reuses existing resources when available instead of creating new ones.</li><li>Served models are private by default.</li></ul> |
| ![improvement](/img/improvement.jpg) | Added `--keep` flag to `clarifai model serve` | <ul><li>Use `--keep` to preserve the build directory after serving, useful for debugging and inspecting build artifacts.</li></ul> |
| ![improvement](/img/improvement.jpg) | Local Runner is now public by default | <ul><li>Models launched via the local runner are now publicly accessible by default, removing the need to manually set visibility.</li></ul> |

### Model Runner

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added `VLLMOpenAIModelClass` | <ul><li>New `VLLMOpenAIModelClass` parent class with built-in cancellation support and health probes for vLLM-backed models.</li></ul> |
| ![improvement](/img/improvement.jpg) | Optimized model runner memory and latency | <ul><li>Reduced memory footprint and improved response latency in the model runner.</li><li>Streamlined overhead in SSE (Server-Sent Events) streaming.</li></ul> |
| ![improvement](/img/improvement.jpg) | Auto-detect and clamp `max_tokens` | <ul><li>The runner now automatically detects the backend's `max_seq_len` and clamps `max_tokens` to that value, preventing out-of-range errors.</li></ul> |

### Bug Fixes

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed reasoning model token tracking and streaming in agentic class | <ul><li>Fixed token tracking for reasoning models to correctly account for reasoning tokens.</li><li>Fixed event-loop safety, streaming, and tool call passthrough in the agentic class.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed user/app context conflicts in CLI | <ul><li>Resolved conflicts between `user_id` and `app_id` when using named contexts in CLI commands.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed `clarifai model init` directory handling | <ul><li>`clarifai model init` now correctly updates an existing model directory instead of creating a subdirectory.</li></ul> |