---
description: Changelog for Clarifai Release 11.1
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -64
pagination_next: null
pagination_prev: product-updates/changelog/release110
draft: true
---

# Release 11.1

**Release Date:** February 5th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Audit Logging

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Clarifai's Audit Logging feature helps you monitor platform activities for better visibility, security, and governance. It captures detailed logs of operations so you can track what has been done, who has initiated it, and what has been the result of this action. | <ul> <li>You can perform audit tracking via the Teams & Tabs tab within the Control Center. Learn more [here](https://docs.clarifai.com/portal-guide/control-center/teams-logs/).  </li>  <li> You can also perform audit tracking programmatically via our API. Learn more [here](https://docs.clarifai.com/api-guide/audit-log/).  </li> </ul> |   

## Compute Orchestration (_Public Preview_)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | [Compute Orchestration](https://docs.clarifai.com/portal-guide/compute-orchestration/) now supports Google Cloud Platform (GCP) | <ul> <li> Compute Orchestration preview customers can now deploy dedicated compute clusters in GCP's us-east4 region. Additional regions will be added over time.  </li> </ul>   |

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published DeepSeek models, which are free for a limited time on our Community platform | <ul><li> Released [DeepSeek-R1-Distill-Qwen-1_5B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-1_5B), a 1.5B-parameter dense model distilled from DeepSeek-R1 based on Qwen-1.5B.</li><li> Released [DeepSeek-R1-Distill-Qwen-7B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B), a 7B-parameter dense model distilled from DeepSeek-R1 based on Qwen-7B.</li><li> Released [DeepSeek-R1-Distill-Qwen-14B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-14B), a 14B-parameter dense model distilled from DeepSeek-R1 based on Qwen-14B. </li><li> Released [DeepSeek-R1-Distill-Qwen-32B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-32B), a 32B-parameter dense model distilled from DeepSeek-R1 based on Qwen-32B. </li></ul> | 


## Data Utils

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)   | Released [Data Utils](https://github.com/Clarifai/clarifai-python-datautils) as an open source Python library |    Get a range of multimedia data utilities designed to streamline your data management and processing operations. <br/> <br/>  <ul> <li>[Image annotation loader](https://github.com/Clarifai/examples/blob/main/Data_Utils/Image%20Annotation/image_annotation_loader.ipynb)  — A comprehensive framework for loading, exporting, and analyzing different annotated datasets.  </li><li> [Data ingestion pipelines](https://github.com/Clarifai/examples/blob/main/Data_Utils/Ingestion%20pipelines/README.md) — Load text files (PDF, DOC, etc.), transform and chunk the content, and upload it to the Clarifai platform. </li> <ul> <li> [Multimodal dataloader](https://github.com/Clarifai/examples/blob/main/Data_Utils/Ingestion%20pipelines/Multimodal_dataloader.ipynb) </li>  <li>[Ready-to-use foundational pipelines](https://github.com/Clarifai/examples/blob/main/Data_Utils/Ingestion%20pipelines/Ready_to_use_foundational_pipelines.ipynb) </li> </ul> </ul>                |                                          

##  Platform Improvements

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made platform improvements | <ul> <li> We've enhanced several elements of the top navigation bar for a more seamless experience. Notably, the drop-down menu for switching between an organization workspace and a personal workspace has moved from the upper right to the upper left. </li><li> We've introduced the ability to automatically generate a cover image for a resource based on its short description. This capability is available only for users on [paid plans](https://www.clarifai.com/pricing). </li></ul> | 

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------| 
| ![improvement](/img/improvement.jpg)  |Improved the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)  | <ul> <li> We've improved the Control Center experience on mobile devices for smoother navigation and better usability.</li><li> We've improved the Overview page by adding animations that suggest charts users can pin. This allows users to easily access the charts they want to analyze. </li> <li> We've improved table columns to now sort items based on their data type: dates (oldest to newest), words (A to Z), and numbers (lowest to highest). </li> <li> We've added links in Usage & Operations charts that direct you to related charts in the Costs & Budget page, and vice versa. For example, the Total inputs chart now has a link in the lower right corner to view its associated cost chart.</li> </ul> |  
| ![bug](/img/bug.jpg) | Fixed bugs in the Control Center | <ul> <li> Previously, when you selected a date range in the Control Center and navigated away, the selection would not persist upon returning. Instead, it would revert to the default "Last 7 Days" setting. We fixed the issue to ensure the selection persists.</li> <li> Previously, the toast notification that appears when a chart is pinned could sometimes be hidden under the fixed header. We've fixed this issue to ensure the notification remains visible at the top. </li>  <li> Previously, when selecting a date range in the calendar using options like ‘This week’, ‘This month’, or ‘This quarter’, the apply button would be disabled because future dates were inadvertently included in the selection. We fixed the issue. Additionally, if you click on a single date, the selection period will automatically reset to the chosen date.  </li> </ul> |   

##  Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Improved the Python SDK <br/> <br/> _Learn more about them [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)_.     |  <ul><li>Enhanced model upload experience with a more streamlined process.</li><li>Introduced model upload tests to ensure reliability.</li><li>Updated Torch version in images and now delete the `.tar` file after every upload. </li><li>Added local model run tests for better validation. </li><li> Included `CLARIFAI_API_BASE` in test container for flexibility. </li><li> Removed Triton requirements to simplify dependencies. </li> <li>Expanded tests for downloads and made various improvements. </li><li>Made API validation optional for greater configurability. </li><li>Added environment variable for logging control to enhance debugging.</li><li> Updated base images for better performance and security. </li><li> Optimized downloads from Hugging Face (HF) for efficiency. </li><li> Now fetching `user_id` from an environment variable for easier configuration. </li><li> Added HF token validation to improve security. </li><li> Fixed model prediction methods when using `compute_cluster_id` and `nodepool_id`. </li> <li> Resolved model upload issues for smoother deployment.</li> <li> Enhanced error logging for better troubleshooting. </li> </ul> |


## Base Workflow

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![improvement](/img/improvement.jpg) | Changed the default [base workflow](https://docs.clarifai.com/api-guide/workflows/base-workflows/) for apps created via the API  | <ul><li> Previously, when an application was created via the API without specifying a base workflow, the [Universal](https://clarifai.com/clarifai/main/workflows/Universal) workflow was used by default. Now, the default has been updated to the [General](https://clarifai.com/clarifai/main/workflows/General) workflow for better performance. </li> </ul> |