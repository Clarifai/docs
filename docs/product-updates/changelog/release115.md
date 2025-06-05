---
description: Changelog for Clarifai Release 11.5
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -68
pagination_next: null
pagination_prev: product-updates/changelog/release114
draft: true
---

# Release 11.5

**Release Date:** June 3rd, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


##  Agentic Frameworks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Introduced support for [agentic frameworks](https://docs.clarifai.com/compute/agents/)  | <ul> <li> This signifies a major advancement, enabling the development and orchestration of multi-step, goal-directed AI agents that can autonomously reason, plan, and take actions across Clarifai's platform.</li> <li> Additionally, Clarifai now integrates the Model Context Protocol (MCP) and enables building [MCP servers](https://docs.clarifai.com/compute/agents/mcp). This allows Clarifai users to bridge their AI agents with enterprise data and external APIs, providing dynamic, real-time context. </li> </ul>  |

##  OpenAI Inferences

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![new-feature](/img/new_feature.jpg)| Introduced an [OpenAI-compatible](https://docs.clarifai.com/compute/models/inference/open-ai) API endpoint  | <ul> <li>  This endpoint allows you to leverage your existing OpenAI API code and workloads to make inferences with Clarifai models.</li> </ul>  |



##  Token-Based Billing

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Added initial support for token-based [billing](https://www.clarifai.com/pricing) for some large language models (LLMs) and image generation models  | <ul> <li> The token-based billing will align pricing with industry standards and better reflect the costs associated with these models. </li>  <li> The token-based pricing will be gradually applied only to inference on the Community using models deployed with Clarifai's default Shared compute. [Dedicated compute instances](https://docs.clarifai.com/compute/deployments/deploy-model/) will continue to use per-compute-time billing, regardless of the type of model deployed. </li> <li> Also, the per-request billing will continue for legacy vision models on the Community. </li> </ul>  |

##  Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models  | <ul> <li> Published [DeepSeek-R1-0528-Qwen3-8B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B), which improves reasoning and logic via better computation and optimization, nearing the performance of top models like O3 and Gemini 2.5 Pro.  </li> <li>Published [Qwen2_5-Coder-7B-Instruct](https://clarifai.com/qwen/qwenCoder/models/Qwen2_5-Coder-7B-Instruct), a code-specific LLM series (0.5B–32B) with improved code generation, reasoning, and fixing. Trained on 5.5T tokens, the 32B model rivals GPT-4o in coding capabilities.</li> <li> Published [Claude Opus 4]( https://clarifai.com/anthropic/completion/models/claude-opus-4), a state-of-the-art large language model from Anthropic. It supports text and multimodal inputs and can generate high-quality, context-aware text completions, summaries, and more. </li></ul>  |


##  Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the Python SDK. Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).  | <ul>  <li>Restored support for pretrained model configuration files.</li>  <li>Added `clarifai model init` CLI command to generate default files for model upload.</li>   <li>Resolved an issue with model upload reliability.</li>  <li>Improved handling of Clarifai config in URL construction.</li>  <li>Updated code snippets for MCP and OpenAI integrations.</li>  <li>Fixed issues related to model upload workflows.</li>  <li>Resolved a bug in `MCPModelClass` that affected notifications.</li>  <li>Enhanced `OpenAIModelClass` to streamline request processing, improve modularity, and simplify parameter extraction and validation.</li>  <li>Fixed a bug in `OpenAIModelClass` to ensure full JSON responses are returned.</li>  <li>Cleaned up `fastmcp` implementation for better maintainability.</li>  <li>Added `OpenAIModelClass` to support integration with OpenAI-compatible API endpoints.</li>  <li>Fixed utility functions for OpenAI messages and code snippets.</li>  <li>Simplified OpenAI client wrapper functions.</li>  <li>Added MCP integration, expanded CLI support, and improved handling of environment variables.</li>  <li>Resolved various Python-specific bugs and syntax issues.</li>  <li>Introduced a base class for visual classifier models.</li>  <li>Now prints script path after model upload for easier reference.</li> <li>Added AMD-related enhancements.</li>  <li>Removed redundant model downloads and improved error logging for gated Hugging Face repositories.</li>  <li>Introduced a base class for visual detector models.</li>  <li>Removed `rich` from requirements for a leaner dependency set.</li>  <li>Added parameter support for inference configuration in both `model.py` and the frontend.</li>  <li>Fixed query parameter retrieval in `ClarifaiAuthHelper` for Streamlit apps.</li>  <li>Corrected `pyproject.toml` configuration.</li>  <li>Resolved issues in local development runners.</li>  <li>Fixed runner ID misassignment in local dev runner setup.</li>  <li>Switched to `uv` and `ruff` to speed up testing, formatting, and linting.</li>  <li>Replaced inappropriate use of `==` with `is` for Pythonic comparisons.</li>  <li>Simplified local dev runner setup via CLI commands.</li>  <li>Fixed indirect inheritance issue from `ModelClass`.</li></ul>|

##  Node.js SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Improved the Node.js SDK. Learn more [here](https://github.com/Clarifai/clarifai-nodejs/blob/main/CHANGELOG.md).   | <ul>  <li>Introduced a more efficient model inference technique for better performance.</li> <li>Enabled support for OpenAI-compatible API endpoints in Node.js environments.</li><li>Fixed a minor issue with type exports for improved developer experience.</li><li>Ensured package compatibility with both ESM and CommonJS (CJS) environments.</li><li>Resolved security vulnerabilities by updating affected package versions.</li></ul>|


##  Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Made improvements to [Clarifai Organizations](https://docs.clarifai.com/control/clarifai-organizations/)  | <ul> <li> The create button is no longer visible to users who lack the necessary permissions to create resources within an organization.   </li> <li> Users receiving organization invites will now see a persistent popup upon login until they accept or decline the invitation. This aims to improve the visibility and acceptance rate of organization invites.  </li> </ul>  |

##  Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![improvement](/img/improvement.jpg) | Made improvements to the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)  | <ul> <li>The colors used in bar and line charts within the Control Center are now more consistent across different charts and when viewing detailed reports. This resolves a previous issue where colors would change unexpectedly, improving visual coherence.</li> <li> The Control Center now displays a "no data available" message instead of zeros when there is no data to show. This provides a clearer indication of the data status. </li> <li> [The Teams and Logs](https://docs.clarifai.com/control/control-center/teams-logs) tab in the Control Center is now hidden for users who do not have audit logging access. Previously, the tab was visible but empty or showed an error message. </li> </ul>  |


##  Platform Improvements

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made platform improvements  | <ul> <li> Added a "Remember Me" option to the homepage login page, in addition to the one already existing in the login popup window. This provides users with a consistent login experience. </li> <li> Improved the reliability of cover image generation for resources, resulting in a better user experience.</li> <li> Implemented pagination for personal access token (PAT) keys. This will allow users with a large number of keys to navigate them more easily across multiple pages.</li> <li> Enhanced the homepage to improve overall usability. </li> <li> Hid the Recent Activity section on the homepage for users or organizations without access permissions. </li> <li> Made visual improvements to the billing interface, including a more appealing display of credit cards and a smoother plan change process.  </li> </ul>  |
