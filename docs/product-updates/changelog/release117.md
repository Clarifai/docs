---
description: Changelog for Clarifai Release 11.7
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -70
pagination_next: null
pagination_prev: product-updates/changelog/release116
draft: false
---

# Release 11.7

**Release Date:** August 7th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Developer Plan

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Introduced a Developer Plan | <ul> <li> This plan provides access to [Local Runners](https://docs.clarifai.com/compute/local-runners/) and  open-source models at a promotional price of $1 per month.</li> <li> Learn more [here](https://www.clarifai.com/pricing). </li> </ul>  |

##  Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models   | <ul> <li> Published [GPT‑OSS-120B and GPT‑OSS-20B](https://clarifai.com/openai/chat-completion/models/gpt-oss-120b), OpenAI's latest state-of-the-art open-weight language models, designed for real-world reasoning, tool use, and on-device deployment.</li> <li> Published [Qwen3-Coder-30B-A3B-Instruct](https://clarifai.com/qwen/qwenCoder/models/Qwen3-Coder-30B-A3B-Instruct), a high-performing, efficient model with strong agentic coding abilities, long-context support, and broad platform compatibility.</li> </ul>  |

## Ollama Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Added support for running Ollama models locally | <ul> <li> You can now download and run Ollama models locally with Clarifai’s Local Runners.</li> <li> Learn more [here](https://docs.clarifai.com/compute/local-runners/ollama). </li> </ul>  |

## Playground

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the [AI Playground](https://docs.clarifai.com/getting-started/quickstart-playground) with a side-by-side comparison view | <ul> <li>  This allows users to easily test and compare different models, or the same model on different instances, to select the most suitable option. </li> </ul>  |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the Python SDK. <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).   | <ul>  <li>Added a quick fix for local runner signature handling</li> <li>Added a check to skip code generation when context is not set</li> <li>Ensured <code>pipeline_steps</code> are properly used in templates</li> <li>Fixed issues related to nodepool creation</li> <li>Improved pipeline status code checks for better reliability</li> <li>Implemented various bug fixes and enhancements for pipelines</li> <li>Added <code>list</code> / <code>ls</code> CLI commands for pipelines and pipeline steps</li> <li>Fixed the broken link to the PAT account settings page</li><li>Added support for verbose logging in Ollama</li><li>Enhanced error messages for Pythonic models</li> <li>Improved logging experience during login</li> <li>Refined logging output for the Local Runner</li> <li>Added CLI config context support to `BaseClient` authentication for easier environment switching.</li>  <li>Introduced live logging functionality for model runners to monitor outputs in real-time.</li>  <li>Unified context management under a single `config` command for consistency and simplicity.</li>  <li>Added a utility function to return both gRPC stub and channel in one call.</li>  <li>Added validation checks for Local Runner requirements during initialization.</li>  <li>Improved error handling for failed URL downloads to provide clearer feedback.</li>  <li>Included Playground URLs in Local Runner logs for easier navigation and debugging.</li>  <li>Added unit tests for toolkits to ensure reliability and code quality.</li>  <li>Improved logging in the Local Runner CLI for better clarity and troubleshooting.</li>  <li>Formatted client scripts using `black` for consistent and clean code style.</li>  <li>Added support for downloading GitHub folders and specifying toolkits in `model init`.</li>  <li>Improved handling of `PAT` and `USER_ID` for better authentication reliability.</li>  <li>Fixed thread flag handling in Local Runner and added validation for invalid users.</li>  <li>Implemented PAT token validation during the `clarifai login` command.</li>  <li>Standardized Local Runner naming across the SDK for consistency.</li>  <li>Fixed the `pipelinestep upload` command to properly parse all `compute-info` parameters and preserve custom Dockerfiles.</li>  <li>Resolved base model template import and return issues in the SDK.</li>  <li>Set the default `pool_size` flag to 1 for local development runner threads.</li>  <li>Updated constants used by the Local Runner for better configuration control.</li>  <li>Added support for the `--version` flag in the Clarifai CLI for easier version tracking.</li>  <li>Improved handling of `model_type_id` and enhanced configuration management.</li>   <li>Enabled support for specifying `deployment_user_id` in the `Model` class to refine runner selection.</li>  <li>Enhanced the `model init` command by allowing initialization from a GitHub repository for greater flexibility.</li>   <li>Fixed CLI `PATH` handling issues on Windows systems.</li>   <li>Corrected issues in the code generation script for improved output consistency.</li>   <li>Added an alias for the `pipelinestep` CLI command and significantly increased test coverage for the `clarifai.runners.pipeline_steps` module.</li>  <li>Improved CLI documentation and added detailed help messages for various model-related commands.</li>   <li>Set the default number of gRPC server threads to `CLARIFAI_NUM_THREADS` or 32, if unspecified.</li>   <li>Integrated configuration contexts into the `model upload` CLI command for environment-specific behavior.</li>  <li>Introduced a `pipeline run` CLI command similar to `model predict` for easier pipeline execution.</li>  <li>Updated `requirements.txt` to reflect the latest supported protocol version.</li> </ul> |

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Made some platform improvements   | <ul> <li> Token-based models now clearly show accurate input and output pricing, including when used within workflows. </li> <li> Workflow pricing now displays multiple pricing tiers for each model included in the workflow. </li> <li> Updated the Settings sidebar to support URL-based account switching. Access to any Settings page now requires this URL format: `/userOrOrgId/settings/{resource-type}`.</li> <li> Added support for redirecting users back to their original source page after login or sign-up, where applicable.</li> <li> Added the "Create Organization" flow as a follow-up step after the new user onboarding process.</li> </ul>  |
|![bug](/img/bug.jpg) |  Fixed some bugs | <ul> <li> Fixed an issue where a renamed app continued to show its old ID in the Settings page and deletion toast notification. </li>  <li> Fixed an issue where accessing unauthorized resources triggered multiple error pop-ups; it now shows a single, graceful notification.</li> <li> Fixed an issue where both My Resources and Community tabs were highlighted when opening an app under My Resources in Org accounts; now only My Resources is correctly highlighted. </li> <li> Fixed an issue where reordering Home page card layouts via ‘Configure Home’ did not save the intended order.</li> <li> Fixed an issue where the recent activity section on the Home page displayed incorrect information when users performed operations across multiple apps.</li> <li> Fixed an issue where the Sign Up and verify email pages did not redirect after successful authentication, or triggered the organization onboarding modal.</li> </ul>  |

