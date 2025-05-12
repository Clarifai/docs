---
description: Changelog for Clarifai Release 11.3
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -66
pagination_next: product-updates/changelog/release114
pagination_prev: product-updates/changelog/release112
draft: false
---

# Release 11.3

**Release Date:** April 3rd, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Compute Orchestration

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Introduced [Compute Orchestration](https://www.clarifai.com/products/compute-orchestration) | <ul> <li> You can now easily deploy any model, on any compute, at any scale. These capabilities allow you to optimize your AI compute, avoid vendor lock-in, and control spend more efficiently. </li> <li> Introduced the "compute time" billable item to support this functionality. </li> <li> Learn more about it [here](https://docs.clarifai.com/compute/overview).</li></ul>  |  

##  AI Playground 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced the AI Playground | <ul> <li> The Playground interface is a testing battleground that allows you to quickly interact with powerful AI models without additional setup. </li> <li> Try it [here](https://clarifai.com/playground?model=Qwen2_5-VL-7B-Instruct). </li> </ul>  |   

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Upgraded the [Labeling Tasks](https://docs.clarifai.com/portal-guide/labeling-tasks/create-a-task) UI tool | <ul> <li> We upgraded the task labeling experience. This upgrade unifies task labeling with the same underlying components from our single [Input-Viewer](https://docs.clarifai.com/portal-guide/input-viewer/) tool, ensuring a seamless and unified experience for users. </li> </ul>  |   

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced a redesigned [homepage](https://clarifai.com/home) to help you [get started](https://docs.clarifai.com/getting-started/quickstart) with the Clarifai platform quickly| <ul> <li> You can easily find trending AI models, test them in a playground, set up your [computing infrastructure](https://docs.clarifai.com/getting-started/first-deployment), browse your apps, and more — all in one place.   </li> <li> You can also customize your homepage layout using the "Configure Home" button in the upper-right corner. </li> </ul>  |
| ![improvement](/img/improvement.jpg) | Made platform improvements | <ul> <li> Introduced a new `Infrastructure Manager` role, allowing users to create, modify, and delete clusters and nodepools within an organization.</li> <li> Removed the automatic app onboarding flow for new users upon signup. Apps are no longer required for certain actions, such as making [deployments](https://docs.clarifai.com/getting-started/first-deployment) with Compute Orchestration. </li> <li> We now automatically fetch a user's full name after signing up with SSO via Google or GitHub, eliminating the need to manually enter it during the signup flow.</li> </ul>  |   
|![bug](/img/bug.jpg) | Fixed platform bugs | <ul> <li> Fixed an issue where users experienced an error when logging into the Clarifai platform due to a broken login state. </li> <li> Fixed an issue that caused certain app overview pages to crash. </li> <li> Fixed an issue where a disruptive top header appeared during the onboarding signup flow for new users. </li> <li>  Fixed an issue in the onboarding signup flow where the job role and country dropdowns were appearing behind the "Complete your profile" modal.</li> <li> Fixed an issue where some model prices were displayed correctly when logged in but appeared as 0 when logged out.</li> <li> Fixed an issue where clicking the "Select All Scopes" button when creating a PAT or adding an app contributor did not select the "Deployment" package.</li> </ul>  |   

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)  | <ul> <li> Refined table layouts for improved clarity and readability. </li> <li> Introduced a new multi-column tooltip for charts, enhancing data visibility and readability. </li> <li> Fixed a color inconsistency where the tooltip card displayed an incorrect color when hovering over chart elements. The tooltip now accurately reflects the corresponding chart segment color. </li> <li> Fixed an issue where the usage dashboard failed to correctly report costs for deleted models.</li> </ul>  |   

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK. Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).  |  <ul>  <li>Removed HF loader `config.json` validation for all Clarifai model type IDs.</li>  <li>Added regex patterns to filter checkpoint files for download.</li>  <li>Implemented validation for CLI configuration.</li>  <li>Fixed Docker image name and introduced the `skip_dockerfile` option in the `test-locally` subcommand of the Model CLI.</li>  <li>Enhanced the CLI login module for better authentication.</li>  <li>Updated the CLI to enable local model testing without requiring remote access.</li> <li>Modified the default value of the `num_threads` field for optimized performance.</li> <li>Dropped support for Python 3.8, 3.9, and 3.10 in testing.</li> <li>Updated deployment testing configurations.</li> <li>Removed the `model_path` argument from the CLI.</li> <li>Added configuration for multi-threaded runners to improve execution efficiency.</li> </ul> |
