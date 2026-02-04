---
description: Changelog for Clarifai Release 12.1
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -76
pagination_next: null
pagination_prev: product-updates/changelog/release120
draft: false
---

# Release 12.1

**Release Date:** February 3rd, 2026

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Clarifai Artifacts

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced a new artifact management system for Clarifai apps| <ul> <li> You can now programmatically manage binary and file-based assets — such as model weights, checkpoints, and configuration files — using the Python SDK or the CLI. </li> <li> You can create, upload, download, list, inspect, and delete artifacts and their versions.</li> </ul>|

## Cessation of the Community Plan

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Retired the Community Plan | <ul> <li> We previously offered a freemium Community Plan that included a limited number of monthly operations at no cost. </li> <li> All Community Plan users have now been migrated to our new Pay-As-You-Go plan, which provides a more sustainable and competitive pricing model. </li> <li> All users who verify their phone number  receive a $5 free welcome bonus.</li> </ul>|

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md) |<ul><li>Added the `load_concepts_from_config()` method to `VisualDetectorClass` and `VisualClassifierClass` to load concepts from `config.yaml`.</li><li>Added a Dockerfile template that conditionally installs packages required for video streaming.</li><li>Fixed deployment cleanup logic to ensure it targets only failed model deployments.</li><li>Implemented an automatic retry mechanism for OpenAI API calls to gracefully handle transient `httpx.ConnectError` exceptions.</li><li>Fixed attribute access for OpenAI response objects in agentic transport by using `hasattr()` checks instead of dictionary `.get()` methods.</li> </ul>|

## SMS Verification

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Introduced SMS verification | <ul> <li> We implemented SMS verification during the account registration process to reduce bots usage and multi-account abuse.</li> </ul>|

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the home page| <ul> <li> Previously, the Quick Compute section on the home page offered two deployment options — Basic and Advanced. We have simplified it to a single quick deployment option. </li> </ul>|
| ![improvement](/img/improvement.jpg)| Made Pay-As-You-Go UI updates| <ul> <li> We styled the credit section to make it clear that it is clickable and added new columns to show both the original credit grant amount and the remaining balance.</li> <li> We fixed a bug that prevented  users from marking a different credit card as default. </li> </ul>|
| ![bug](/img/bug.jpg) | Fixed some bugs| <ul> <li>  Fixed a bug where redirection did not work correctly after deleting a team.</li> <li> Removed empty lines from example code snippets that caused issues when copying and pasting them elsewhere. </li> <li> Fixed an issue where the “Mark as read” button in the notification bar remained clickable when it should have been disabled. </li> </ul>|
