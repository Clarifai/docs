---
description: Changelog for Clarifai Release 11.9
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -72
pagination_next: product-updates/changelog/release1110
pagination_prev: product-updates/changelog/release118
draft: false
---

# Release 11.9

**Release Date:** October 13th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Reasoning Engine

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Clarifai has launched a Reasoning Engine optimized for agentic AI inference | <ul>  <li> In independent benchmarks conducted by Artificial Analysis on GPT-OSS 120B, the Clarifai Reasoning Engine set new records on standard GPUs: 544 tokens/sec throughput, 3.6s time-to-first-token, and $0.16 per million tokens. </li> <li> Learn more [here](https://www.clarifai.com/press-release-clarifai-launches-reasoning-engine-optimized-for-agentic-ai-inference). </li> </ul>  |

## Toolkits

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)|  Added support for toolkits  | <ul> <li>Added support for initializing models with the [`vLLM`](https://docs.clarifai.com/compute/local-runners/vllm), [`LMStudio`](https://docs.clarifai.com/compute/local-runners/lmstudio), and  [`Hugging Face`](https://docs.clarifai.com/compute/local-runners/hf) toolkits for local runners.</li> </ul>  |


## Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Published new models | <ul> <li> Published [Qwen3-Next-80B-A3B-Thinking](https://clarifai.com/qwen/qwen3/models/qwen3-next-80B-A3B-Thinking), a 80B-parameter, sparsely activated reasoning-optimized LLM that delivers near-flagship performance on complex reasoning tasks with extreme efficiency in training and ultra-long context inference (up to 256K tokens). </li> <li> Published [Qwen3-30B-A3B-Instruct-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507), which improves comprehension, coding, multilingual knowledge, user alignment, and has 256K long-context handling. </li> <li> Published [Qwen3-30B-A3B-Thinking-2507](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-Thinking-2507), which is an enhanced version with significantly improved reasoning, general capabilities, user alignment, and a long-context understanding.</li></ul>  |

## B200s and GH200s 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Added new Vultr [cloud instances](https://docs.clarifai.com/compute/deployments/cloud-instances)   | <ul> <li> Introduced competitively priced B200 instances operating from Seattle and GH200 instances powered by Vultr. </li> </ul>  |

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)|  Made some platform improvements  | <ul> <li> Added short [role descriptions](https://docs.clarifai.com/control/clarifai-organizations/members-teams#roles-for-members) in the Invite Member modal to clarify each member’s permissions when inviting them to an organization or modifying their access. </li> <li> In the [Control Center](https://docs.clarifai.com/control/control-center/), charts for computer vision models (displaying predictions) and for LLMs (displaying tokens) are now presented separately, each with its own usage and cost information. </li> </ul>  |
| ![bug](/img/bug.jpg) | Fixed some bugs| <ul> <li> Fixed an issue that prevented the signup/login modal from appearing on the Compute page ([clarifai.com/compute](https://clarifai.com/compute)).</li> </ul>  |


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)   | <ul>  <li>Introduced a new `patch_version` method in the Model class and integrated it into local runner workflows.</li>   <li>Improved logging by highlighting example code scripts printed during local runner workflows.</li><li>Changed the default local development model type from `text-to-text` to `any-to-any`.</li> <li>Fixed an issue with converting gRPC response enums to integers during runner creation.</li>  <li>Fixed a `TypeError` when parsing checkpoint size from an environment variable.</li>  <li>Enabled health probe support, allowing `ModelClass` implementations to define liveness/readiness checks.</li>  <li>Improved interactive pipeline initialization with user prompts that replace placeholder TODO values.</li>  <li>Implemented Git registry metadata capture during model upload with model-scoped change detection.</li>  <li>Local runner now automatically uses the latest local-dev model version.</li>  <li>Reduced friction by continuing to leverage a single prebuilt AMD base image.</li>  <li>Updated type hints and docstring descriptions across all major files in the `clarifai/client` folder for better code quality, maintainability, and developer experience.</li>  <li>Improved overall Model CLI UX with consolidated flags, clearer help text, and better error surfacing.</li>   <li>Updated the `clarifai model predict` CLI to align with recent Pythonic model changes.</li>   <li>Updated the local runner default API base URL.</li>   <li>Refined logging in model and pipeline step builders for clearer diagnostics.</li>   <li>Added pagination support to pipeline log monitoring, returning all entries beyond the first 50.</li>   </ul>|