---
description: Changelog for Clarifai Release 12.0
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -75
pagination_next: null
pagination_prev: product-updates/changelog/release1111
draft: false
---

# Release 12.0

**Release Date:** January 8th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Pay-As-You-Go Plan

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced a simple, flexible Pay-As-You-Go plan | <ul> <li> The new plan has no minimum monthly commitments and far fewer feature gates. Just prepay credits, build, and go. </li> <li> Additionally, the new plan comes with a one-time $5 welcome credit after verifying your phone number and auto-recharge capability.  </li> <li> Learn more [here](https://docs.clarifai.com/control/account-billing#billing). </li> </ul>|

## Pipelines

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| [**Public Preview**](https://docs.clarifai.com/product-updates/changelog/release-types#release-types) | Introduced the ability to create, run, and manage pipelines via the Clarifai CLI | <ul> <li> Clarifai Pipelines let you design and run asynchronous, long-running, multi-step processes for complex AI and MLOps tasks.  </li>  <li> Learn more [here](https://docs.clarifai.com/compute/pipelines/). </li> </ul>|

## Multi-Nodepool Deployment

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced model routing capabilities | <ul> <li> We support universal model routing to provide high availability and optimal load distribution across all model services.  </li> <li> This allows intelligent routing logic across multiple model-serving nodepools, including spillover handling and routing across different data centers. </li> <li> Learn more [here](https://docs.clarifai.com/compute/deployments/clusters-nodepools#multi-nodepool-deployment). </li> </ul>|

## Vercel AI SDK Integration

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Clarifai is now available as an inference provider in the Vercel AI SDK  | <ul> <li> You can use Clarifai-hosted models directly through the OpenAI-compatible interface in `@ai-sdk/openai-compatible`, with no changes to your application logic.</li> <li> Learn more [here](https://docs.clarifai.com/compute/inference/vercel). </li> </ul>|



## Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published two new reasoning models from the Ministral 3 family| <ul> <li> Published [Ministral-3-3B-Reasoning-2512](https://clarifai.com/mistralai/completion/models/Ministral-3-3B-Reasoning-2512), a compact model in the "Ministral 3" family. It delivers high-performance, open-weight capabilities while remaining efficient and deployable in realistic hardware settings. </li> <li> Published [Ministral-3-14B-Reasoning-2512](https://clarifai.com/mistralai/completion/models/Ministral-3-14B-Reasoning-2512), the largest model in the “Ministral 3” family. It delivers high-performance, open-weight capabilities close to much larger models while remaining efficient and deployable in realistic hardware settings.</li> </ul> |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)  | <ul><li>Fixed issues with local model runners</li><li>Fixed checkpoint download failures when `hf_transfer` was not installed</li><li>Resolved compatibility conflicts with the latest vLLM</li><li>Added a comprehensive artifact management system for both the SDK and CLI</li><li>Introduced interactive `config.yaml` creation during the model upload process</li><li>Added Container and Env model support for local runners</li><li>Added comprehensive test coverage for the `MCPConnectionPool` connection lifecycle</li><li>Updated status codes and descriptions for model runner failure cases</li><li>Prevented a `TypeError` during model version creation</li><li>Fixed a runner ID bug affecting local runners</li><li>Fixed user verification issues in the development environment</li><li>Upgraded `urllib3` to version `>= 2.6.2`</li><li>Added retry logic to OpenAI API calls and fixed related test mocks</li><li>Fixed a `TypeError` when `accelerator_type` is `None` in `config.yaml`</li><li>Improved local runner handling of duplicate runner ID errors</li><li>Added `CLARIFAI_HF_TOKEN` to the CLI context</li><li>Added tests for the local runner CLI command</li><li>Removed automatic file generation during model operations </li></ul> |


## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Made some improvements  | <ul> <li> Added cleaner filters in the Control Center, making charts more intuitive and easier to navigate. </li> <li> Improved the Team & Logs tab in the Control Center to ensure that today’s audit logs are included when selecting the last 7 days. </li> <li> Enabled stopping responses in the right panel when using the Playground’s [Compare mode](https://docs.clarifai.com/getting-started/playground/#compare-models).</li> </ul>|
| ![bug](/img/bug.jpg)| Fixed some bugs | <ul> <li> Fixed various signup and login bugs, resulting in a more reliable and smoother user experience. </li> <li> Fixed an issue in the mobile view of the Configure Home settings where enabling one option unexpectedly disabled another, causing inconsistent behavior. </li> <li> Fixed an issue where Predict and Generate methods produced an error in the Playground.</li> <li> Fixed an issue with the 6-month date range in the Control Center. </li> </ul> | 