---
description: Changelog for Clarifai Release 11.10
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -73
pagination_next: product-updates/changelog/release1111
pagination_prev: product-updates/changelog/release119
draft: false
---

# Release 11.10

**Release Date:** November 7th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Single-Click Deployments

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Introduced one-click deployments | <ul>  <li> Previously, users had to manually configure clusters and nodepools before [deploying a model](https://docs.clarifai.com/compute/deployments/deploy-model), with limited setup guidance. </li> <li> Now, the platform automatically recommends suitable instance types based on model requirements and creates clusters or nodepools if none exist — enabling seamless, one-click model deployment. </li> </ul>  |

## Environment Secrets

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Introduced environmental secrets | <ul>  <li> Environment secrets are encrypted values that can be used as environment variables in your workflows. </li> <li> Learn more about them [here](https://docs.clarifai.com/control/authentication/environment-secrets/). </li> </ul>  |

## Structured Outputs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Added support for structured JSON outputs | <ul>  <li> You can now generate structured JSON outputs directly from Clarifai-hosted OpenAI-compatible models using Pydantic schemas. </li> <li> This feature ensures that model responses adhere to a defined data structure, making it easier to integrate outputs into downstream applications safely and reliably.</li> <li> Learn more about them [here](https://docs.clarifai.com/compute/inference/open-ai/#structured-outputs). </li> </ul>  |


## Toolkits

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Added support for [toolkits](https://docs.clarifai.com/compute/toolkits/) | <ul>  <li> Added SGLang toolkit support to the CLI `init` command — `clarifai model init --toolkit sglang`. </li> <li>Added Python toolkit support to the CLI `init` command — `clarifai model init --toolkit python`. </li></ul>  |

## Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Published new models | <ul>  <li> Published [DeepSeek-OCR](https://clarifai.com/deepseek-ai/deepseek-ocr/models/DeepSeek-OCR), which achieves SOTA 96%+ OCR precision at 9-10× compression ratio, ~90% accuracy at 10-12× compression ratio, and massive production scalability with 200,000+ pages per day with a single A100-40G GPU. </li> <li> Published [GLM-4.6](https://clarifai.com/zai/completion/models/GLM_4_6), which unifies reasoning, coding, and agentic capabilities into a single model.</li> </ul>  |


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)  | <ul>  <li>Fixed missing `user_id` parameter issue in the CLI `local-runner` command.</li> <li>Added Model Deployment Workflow step after Model Upload in the CLI.</li><li>Added optional protobuf response details in Pythonic models with parameter validation.</li><li>Added `USER_ID` field to the configuration in CLI Model Init.</li><li>Added user input prompt for OpenAI local runner initialization.</li><li>Fixed `async_client` initialization issue.</li><li>Disabled `async_stub` during `ModelClient` initialization.</li><li>Fixed `UnboundLocalError` in model init when using `--model-type-id` without a toolkit.</li><li>Added `config-lock.yaml` support to `clarifai pipeline upload`.</li></ul> |

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Updated the Control Center to provide unified reporting for all models, regardless of billing method | <ul>  <li> Previously, usage stats depended on how models were billed — ops, tokens, or compute time. </li> <li> Now, all models report operations, and LLMs also report tokens, ensuring consistent and transparent usage metrics across the platform. </li> </ul>  |

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![improvement](/img/improvement.jpg) | Improved the Community search to deliver more relevant results | <ul>  <li> Previously, all search criteria, such as model ID, user ID, and descriptions, were weighted equally. </li> <li>  Now, model IDs (for example, `gpt-oss-120b`) carry greater weight, making searches more accurate and relevant to specific models. </li> </ul>  |