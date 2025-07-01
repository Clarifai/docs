---
description: Changelog for Clarifai Release 11.6
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -69
pagination_next: null
pagination_prev: product-updates/changelog/release115
draft: true
---

# Release 11.6

**Release Date:** July 1st, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


##  AMD GPU Support

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) |  Added support for AMD GPU [instances](https://docs.clarifai.com/compute/deployments/cloud-instances) | <ul> <li>Set up public containers for AMD-compatible inference.</li>  <li> Launched a new Kubernetes cluster in Chicago with AMD GPU support. </li> <li> Updated the agent and autoscaler to work with AMD-based nodes. </li></ul>  |

##  Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models   | <ul> <li> Published [Gemma-3n-E2B](https://clarifai.com/gcp/generate/models/gemma-3n-E2B-it-GGUF-4bit-text) and [Gemma-3n-E4B ](https://clarifai.com/gcp/generate/models/gemma-3n-E4B-it-GGUF-4bit-text) models. Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models. Gemma 3n models are designed for efficient execution on low-resource devices.</li> </ul>  |


##  Workflow Pipelines

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements to pipelines _(pipeline steps are reusable components that can be used in Clarifai workflows)_.   | <ul> <li> Refined pipeline execution logic and validation to better support complex, multi-step workflows. </li> <li>  Enhanced access control (RBAC) to improve management of execution context and user permissions. </li> <li> Introduced CLI support for uploading pipeline steps, with support for multiple steps per version — enabling greater reuse and faster iteration. </li> <li> Added step scoping and feature-flag-controlled RPCs to enable safer rollouts across shared infrastructure. </li> <li> Resolved image URL resolution issues to ensure accurate references in pipeline step configurations. </li> </ul>  |

##  Playground

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Made improvements to the [Clarifai Playground](https://docs.clarifai.com/getting-started/quickstart-playground)  | <ul> <li> The Playground page is now publicly accessible — no login required. However, certain features remain available only to logged-in users. </li> <li> Added Pythonic support in the Playground for consuming the new model specification. </li> <li> Improved the Playground user experience with enhanced inference parameter controls, restored model version selectors, and clearer error feedback.</li> </ul>  |

##  Compute UI 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Made improvements to the Compute UI  | <ul> <li> Completely rebuilt the Compute UI for a more modern and intuitive user experience.  </li> <li>  Finalized key components, including redesigned list views, an improved create flow, updated tables, and overall usability enhancements.</li> <li> Enhanced alignment between frontend state and backend orchestration logic for a smoother, more predictable experience.  </li>   </ul>  |

##  Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the Python SDK. Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).  | <ul>   <li>Fixed legacy proto support for improved compatibility.</li> <li>Added authentication support to the URL fetcher for SDH-protected URLs.</li>   <li>Fixed and validated code snippets; added automated tests for snippet accuracy.</li>  <li>Included model listing functionality in both CLI and method interfaces.</li>  <li>Implemented terminal prompt to ask users whether to create a new app if the specified app doesn’t exist.</li>  <li>Introduced asynchronous `predict` endpoints (v2).</li>  <li>Added Model Utils module to the SDK for shared logic.</li>  <li>Enabled model-level authentication when setting the runner.</li>  <li>Improved local development tooling and URL helper utilities.</li>  <li>Added proactive validation of code and requirements before upload to catch issues early.</li>   <li>Integrated `uv` into the build process for faster and more reliable builds.</li>  <li>Removed an unused parameter in the `VisualClassifier` class to clean up the API.</li>  <li>Added support for `/responses`, `/embeddings`, and `/images/generations` endpoints in the OpenAI class.</li>  <li>Fixed data display issues and updated OpenAI parameter handling for better control.</li> </ul>  |


##  Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Made platform improvements   | <ul>  <li> Improved compute time billing by ensuring usage is now rounded up to the nearest minute for more accurate and predictable billing.</li> <li>  Introduced dynamic code snippets in the UI to showcase the latest ways to invoke models.</li>  <li> Improved robustness by resolving sorting issues in pricing and enhancing handling of incomplete or missing context IDs. </li> <li> Made improvements to the Community Home page, such as showing recent activity from the past 7 days and making the deployments table smaller when there are few entries.  </li> <li> Users are now set to private by default immediately after sign-up, enhancing privacy over profile visibility.</li> <li> Improved the [Control Center](https://docs.clarifai.com/portal-guide/control-center/) by adding a visible timestamp showing when the dashboard was last refreshed, making it easier for users to confirm their billing data is up to date.  Also optimized the response size of dashboard items for faster loading and better performance.</li> </ul>  |
| ![bug](/img/bug.jpg)| Fixed platform bugs  | <ul> <li> Fixed an issue that prevented users from editing the description or details of a model.  </li> <li> Fixed an issue where the sorting selection in the apps dropdown on the Task Labeling page did not persist when switching between apps. </li> </ul>  |

##  Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Made improvements to [Clarifai Organizations](https://docs.clarifai.com/control/clarifai-organizations/)  | <ul> <li> Personal access tokens (PATs) are now shown in the PAT dropdown menu, regardless of whether the user is operating under their personal account or within an organization context. </li> <li> The Join Org notification in the navbar has been updated to match the design of the Join Org modal/page, ensuring a consistent behavior.</li> <li> Any user with a verified email address that matches the one used in an organization invitation can now accept or decline the invitation. </li> </ul>  |

