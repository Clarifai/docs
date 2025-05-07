---
description: Changelog for Clarifai Release 11.4
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -67
pagination_next: null
pagination_prev: product-updates/changelog/release113
draft: true
---

# Release 11.4

**Release Date:** May 6th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Developer Experience 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced a new Python-based method for model uploading and inference  | <ul> <li> Built with a Python-first, user-centric design, this flexible approach simplifies the process of working with models — enabling users to focus more on building and iterating, and less on navigating API mechanics. It streamlines inference, accelerates development, and enhances overall usability. </li> <li> Learn more about it [here](https://docs.clarifai.com/compute/models/inference/api) and [here](https://docs.clarifai.com/compute/models/upload/). </li> </ul>  |


## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  |  Published new models |  <ul> <li> Published [Llama-4-Scout-17B-16E-Instruct](https://clarifai.com/meta/Llama-4/models/Llama-4-Scout-17B-16E-Instruct), a powerful model in the Llama 4 series featuring 17 billion parameters and 16 experts for advanced instruction tuning.</li> <li> Published [Qwen3-30B-A3B-GGUF](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-GGUF), the newest in the Qwen series, featuring dense and MoE models with major improvements in reasoning, instruction-following, agent tasks, and multilingual support.</li> <li>Published [o4-mini]( https://clarifai.com/openai/chat-completion/models/o4-mini) model from OpenAI. It’s a smaller model optimized for fast, cost-efficient reasoning — it achieves remarkable performance for its size and cost, particularly in math, coding, and visual tasks. </li> <li> Published [o3](https://clarifai.com/openai/chat-completion/models/o3) model from OpenAI. It’s a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. </li> </ul>                  |

## Playground

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)  | Enhanced the model [Playground](https://docs.clarifai.com/getting-started/quickstart#step-2-run-your-inference-in-playground) experience |  <ul> <li>Added automatic mode detection based on the selected model — now intelligently switches between Chat and Vision modes for predictions.</li> <li>Improved model search and identification for a faster, more accurate selection experience.</li><li>Introduced a Personal Access Token (PAT) dropdown, enabling users to easily insert their PAT keys into code snippets.</li><li>Implemented dynamic pricing display that updates based on the selected deployment.</li> <li> The selected deployment ID is now automatically injected into the inference code.</li> </ul>     |

## Home Page

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)  | Enhanced the Platform's [Home page](https://clarifai.com/home)    |  <ul> <li> The Home page is now accessible to all users, with sections requiring login automatically hidden for non-logged-in users. </li> <li> Added a "Recent Activity" section that lets users view their most recent actions and operations performed on the platform.</li> <li> Made additional improvements to the Home page to enhance usability, performance, and overall user experience. </li> </ul>     |

## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the [Community](https://clarifai.com/explore) platform    |  <ul> <li>Revamped the Explore page with refreshed visual designs, a featured models showcase, and categorized use cases such as LLMs and VLMs.</li><li>Updated the individual model viewer page with an improved UI, direct access to the Playground, deployment listings, and additional enhancements.</li> </ul>     |


## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Enhanced the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)  |  <ul> <li>Added Compute time metrics for Compute Orchestration to the Control Center: </li> <ul> <li> Added Compute Hours in the Overview tab. </li><li> Added Compute Hours costs in the Costs tab. </li>  <li> Added Compute Hours usage details in the Usage tab. </li></ul> <br/> <li> Added Compute Orchestration operations to audit logging: </li> <ul> <li> Operations related to clusters, nodepools, and model deployments are now tracked and visible in the [Teams & Logs](https://docs.clarifai.com/portal-guide/control-center/teams-logs) tab within the Control Center. </li> </ul> <br/> <li> Introduced new, more efficient and stable chart types with improved tooltips for better data visualization and user experience.</li> <br/> <li> Enhanced the design of the ["Total Model Predictions by ID"](https://docs.clarifai.com/portal-guide/control-center/usage-dashboard#total-model-predictions-by-id) chart by making the chart clickable, allowing users to navigate directly to the corresponding model. Also introduced other UI refinements for a more intuitive experience.  </li> <br/> <li> Adjusted hover cards on charts to stay within the viewport by dynamically lowering their position and adding scrollbars when content exceeds the visible area. </li> </ul>     |


## Org Feature

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Enhanced the [Org feature](https://docs.clarifai.com/portal-guide/clarifai-organizations/) |  <ul> <li> Previously, new organization accounts inherited the [plan](https://www.clarifai.com/pricing) of the user's personal account. Now, all new organization accounts are created on the Community plan by default, giving users the flexibility to upgrade as needed. This update applies to users on the Community, Essential, and Professional plans. Enterprise users are not affected.</li> <li> We improved the "Member Since" column in the organization members list table. It now displays when a member joined the organization, rather than when they assumed their current role. </li> <li> Restricted visibility of Settings pages by hiding those that users do not have permission to access, </li> </ul>     |

## Billing

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Enhanced the billing section | <ul> <li>Redesigned the credit card management UI for a more intuitive user experience. </li> <li>  Implemented validation to prevent adding duplicate credit card numbers. </li> <li> Added support for setting and changing the default credit card. </li> </ul>  |

## Sign-up flow 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) |  Improved the sign-up flow  |  <ul> <li> Refined the sign-up flow to improve clarity and user experience across key steps.</li> </ul>     |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)|Improved the Python SDK. Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md). |  <ul><li>Added support for [Pythonic models](#developer-experience) for a more native development experience.</li><li>Fixed failing tests to improve overall stability.</li><li>Improved CLI performance, now ~20x faster for most operations.</li><li>Introduced config contexts in the CLI, with more enhancements on the way.</li><li>Enhanced error messages for missing arguments and edge cases.</li><li>Fixed return arguments in the model builder for correct outputs.</li> </ul>     |


## Platform Bugs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)  | Fixed some bugs |  <ul> <li> Fixed some bugs in the top navigation bar to improve user experience across the platform. </li> <li> Fixed a bug on the Community Models page that caused flickering and disabled scrolling after applying a filter. </li> <li> Fixed a bug in the Control Center where pie chart labels overlapped, enhancing readability and visual clarity. </li> <li> Fixed a bug that prevented team members with the Model Trainer role from accessing applications in Organizations. </li> </ul>     |

