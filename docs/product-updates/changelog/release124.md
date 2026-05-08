---
description: Changelog for Clarifai Release 12.4
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -79
pagination_next: null
pagination_prev: product-updates/changelog/release123
draft: false
---

# Release 12.4

**Release Date:** May 7th, 2026

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models | <ul> <li> Published [Nemotron Nano V3 Omni](https://clarifai.com/nvidia/chat-completion/models/nemotron-nano-v3-omni) (30B total / 3B active — MoE). It’s NVIDIA's multimodal LLM that unifies video, audio, image, and text understanding in a single model, with integrated reasoning support.  </li> <li> Published [Qwen3.6-35B-A3B](https://clarifai.com/qwen/qwen-VL/models/Qwen3_6-35B-A3B-FP8), an efficient MoE LLM with 35B total but only 3B active parameters, delivering near-large-model performance at much lower compute cost.</li></ul>|

## Cached Prompt Tokens

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced cached prompt tokens in model responses | <ul><li>Model responses now include cached prompt token counts, providing accurate token usage reporting when prompt caching is active.</li> <li> Learn more [here](https://docs.clarifai.com/compute/inference/routing/#prediction-caching). </li> </ul> |


## Pipelines

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced code-first Pipeline DSL with CLI support | <ul><li>Introduced a code-first Pipeline DSL that lets you define pipelines programmatically in Python and generate configs via CLI.</li><li>Use `clarifai pipeline init` to scaffold the pipeline config and `clarifai pipeline upload` to deploy it to the platform.</li> <li> Learn more [here](https://docs.clarifai.com/create/models/). </li> </ul> |
| ![new-feature](/img/new_feature.jpg) | `clarifai pipeline run --dev` for local pipeline development | <ul><li>New `--dev` flag on `clarifai pipeline run` enables a local development loop, letting you iterate on pipeline steps without deploying to the cloud.</li><li>See [PR #1012](https://github.com/Clarifai/clarifai-python/pull/1012) for details.</li></ul> |
| ![new-feature](/img/new_feature.jpg) | `clarifai pipeline local-run` for Docker-based step testing | <ul><li>New `clarifai pipeline local-run` command runs individual pipeline steps locally inside Docker containers, matching the production runtime environment before you deploy.</li>  </ul> |
| ![new-feature](/img/new_feature.jpg) | Auto-create compute resources via `--instance` flag | <ul><li>`clarifai pipeline run` now accepts an `--instance` flag that automatically creates the required compute cluster and nodepool if they don't already exist.</li>  </ul> |
| ![improvement](/img/improvement.jpg) | Improved `clarifai pipeline init` UX and help text | <ul><li>Clearer help text, improved prompts, and a post-init next-steps message now guide users through the full pipeline setup flow after running `clarifai pipeline init`.</li></ul> |

## Model Deployment 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Disabled `deploy_latest_version` for `clarifai model serve` | <ul><li>`clarifai model serve` no longer automatically promotes a newly uploaded version as the live deployed version, giving you explicit control over which version is active.</li></ul> |


## Local Runners

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Local runner defaults to PRIVATE; `--public` flag patches all visibilities | <ul><li>Models and resources created via the local runner are now private by default.</li><li>Pass the `--public` flag to make all associated resources public in a single command.</li>  </ul> |


## Bug Fixes (Python SDK)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed deployment worker pinning on `clarifai model serve` | <ul><li>Re-pins the deployment's `desired_worker` to the current model version when running `clarifai model serve`, preventing stale version references after serving.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed Hugging Face private repo access validation | <ul><li>Corrected access validation for private Hugging Face repos that return a `not_found` response to anonymous requests, eliminating false access errors on valid private repos.</li></ul> |
| ![bug](/img/bug.jpg) | Loosened pinned requirements and fixed Clarifai package detection | <ul><li>Relaxed overly strict version pins in the SDK's dependencies and fixed a bug in detecting the installed Clarifai package version.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed `User.app()` returning empty values | <ul><li>`User.app()` now correctly returns actual server-side app data instead of empty placeholder values.</li></ul> |
