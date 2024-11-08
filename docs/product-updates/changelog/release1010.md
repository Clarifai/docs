---
description: Changelog for Clarifai Release 10.10
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -61
pagination_next: null
pagination_prev: product-updates/changelog/release109
draft: false
---

# Release 10.10

**Release Date:** November 7th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


:::info Clarifai Product Roadmap

We have a public roadmap that gives you a view of our upcoming plans and helps us gather your valuable feedback. You can explore the features we're considering, vote for the ones you want most, or submit new ideas. You can check it [here](https://portal.productboard.com/bd1rxfuyfbu6vqnmkva3mprx/tabs/1-under-consideration). 

:::

## Compute Orchestration

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) <br/> **(Private Preview)**  | Released Compute Orchestration  | <ul> <li> Clarifai’s new Compute Orchestration system provides you with an efficient way to deploy inference workloads on any compute, in any bare metal, or cloud environment. </li><li> This feature is currently in [Private Preview](https://docs.clarifai.com/product-updates/changelog/release-types). To request access, please contact us or sign up [here](https://forms.gle/Cj9r8wgeYk5HQ67Y9).</li> </ul>  |   

## PATs and API Keys​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Breaking Change** | Important changes to the use of PATs and API keys  | <ul> <li> This change will be rolled out this month in November. Learn more about it [here](https://docs.clarifai.com/product-updates/upcoming-api-changes/pat-api-keys/). </li> <li> Previously, you could use API keys to access any model, concept, or workflow owned by the app scoped to the API key, as well as those owned by the user `clarifai` in the application `main`. Now, accessing models or workflows owned by `clarifai` in the application `main` can only be done with a PAT tied to your account.  </li> </ul>  |  

## New Released Models​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Released new models | <ul> <li> Released [Pixtral 12B](https://clarifai.com/mistralai/completion/models/pixtral-12b), a natively multimodal model excelling in multimodal reasoning, instruction following, and text benchmarks with a 12B parameter architecture supporting variable image sizes and long context inputs. </li> <li>Released [Granite-3.0-8B-Instruct](https://clarifai.com/ibm/granite/models/granite-3_0-8b-instruct), a versatile, enterprise-ready language model optimized for multilingual understanding, coding, and instruction-following across diverse tasks and constrained environments. </li> <li>Released [Granite-3.0-2B-Instruct SLM](https://clarifai.com/ibm/granite/models/granite-3_0-2b-instruct), a lightweight, multilingual, enterprise-ready language model optimized for instruction-following and code understanding, ideal for versatile applications under Apache 2.0.</li> </ul>  |  

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Added a Costs & Budget tab for finances in the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)| <ul> <li> Added a new tab to display users' financial data. It displays the costs of your billed operations, making it easier to track and manage expenses on the platform. </li></ul>  |  
| ![improvement](/img/improvement.jpg) | Made other improvements | <ul> <li> Restricted the 'Upgrade your plan' button to display only for users on the Community plan with personal accounts. </li> <li> Added comma delimiters to numbers in the thousands for increased readability, e.g., displaying 78,755,432 instead of 78755432.  </li></ul>  |  
|![bug](/img/bug.jpg) | Fixed various bugs in the Control Center| <ul>  <li> Fixed an issue where filtering data for the last 6 months using the calendar widget triggered a toast notification error: “Failed to retrieve model versions.” </li> <li>Fixed an issue that led to this error: “Unable to find app while trying to locate embed model version from workflow.” </li>  <li>  Fixed an issue where changing the chart type would reset any applied filters. Selected filters now remain intact when switching chart types.</li> <li> Fixed an issue on the Report Details page where clicking the 'Back' button would always redirect to the Overview section. It now correctly navigates to the user's previous page. </li> <li> Fixed an issue where the selected period in a chart would start a day earlier than the specified date. A displayed chart now accurately reflects the selected start date.  </li> </ul>  | 

## Data Ingestion

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Released text-based, ready-to-use data pre-processing pipelines  | <ul> <li> These pipelines streamline data ingestion into our platform. With our Data Utils Library and Python SDK, users can now easily upload, transform, and chunk text files. These pipelines support various document types, including PDFs and DOCs, for seamless ingestion.</li></ul>  |  

## UI Modules​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|**Public Preview** | Released a UI module for evaluating OCR (Optical Character Recognition) workflows | <ul> <li> You can use the module to evaluate the performance of workflows for OCR tasks directly within our platform.  </li></ul>  |  

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Added granular scopes for organization's team members  | <ul> <li> Users can now assign granular access levels for applications within an organization. When adding team members to an application, you can define specific scopes to limit their access, rather than granting full access to the app. </li> <li>This role-based access control improves security and ensures that users stay focused on their designated responsibilities. Initial roles include `Labeler Worker`, `Labeler Lead`, and `Model Trainer`. </li></ul>  |  

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made various improvements to labeling tasks | <ul> <li> Enabled all assigned reviewers to review each input before the labeling task is marked as complete. </li> <li> Enabled collaborators to set task priority levels (High, Medium, Low) for each task.</li> </ul>  |  

## Smart Text Search

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)   | Made various improvements to the [Smart Text Search](https://docs.clarifai.com/portal-guide/psearch/text-search) feature  | <ul> <li> These improvements include replacing the deprecated Language-Understanding workflow with a new text workflow, preventing billing actions when a base workflow is forcefully reindexed, and additional improvements for optimized performance and functionality.  </li></ul>  |  

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Made several improvements to the Python SDK | <ul> <li> Added a functionality for merging datasets. </li> <li> Fixed an issue where duplicate results were returned in the SDK’s visual search. </li> <li> Added input uploaders to the client repository. </li> <li>  Fixed a rotation issue where exported dataset images appeared rotated by 90 degrees. </li> <li>Added tests for CRUD operations on Compute Orchestration for deployment of models.</li> <li> Introduced `request-id-prefix` header to SDK requests for enhanced monitoring. </li> <li>  Implemented CLI support for model uploads. </li> <li> Fixed model service issues related to model uploads. </li> <li> Added Python version badges to `README.md`. </li> <li> Temporarily removed stream tests until the Stream API is fixed. </li> <li> Removed unnecessary prefixes from concept IDs added via SDK. </li> <li> Upgraded `llama-index-core` library version for security enhancements. </li> <li> Included metadata in exported dataset annotation files.</li> <li> Upgraded `clarifai-grpc` to version 10.9.11. </li>  <li> Enhanced user experience for model uploads and fixed runner tests. </li>  <li> Resolved bugs affecting model uploads. </li> <li> Fixed `download_checkpoints` and adjusted functionality for running models locally. </li> <li> Improved handling for missing `huggingface_hub` package. </li> <li>  Implemented script to test and run a runner's model locally. </li>  <li> Enhanced model upload experience for computer vision models. </li>   <li> Increased test coverage for Dataloaders and Evaluation modules in the SDK. </li> </ul> | 

## Platform Bugs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue with Google OAuth sign-up flow | <ul> <li> Previously, when signing up for a Clarifai account using Google OAuth, the modal to complete profile registration did not appear automatically. Users had to manually refresh the sign-up modal to proceed. We fixed the issue, and the modal refreshes automatically as intended. </li></ul>  |  
|![bug](/img/bug.jpg) | Fixed issues with the account selector | To select an account, click your profile icon in the upper-right corner and choose the desired account from the dropdown list. <br/><br/> <ul> <li> Previously, in each listed account, the user's ID was hidden beneath the user's name, which caused the name to appear lower than the avatar icon. We fixed it, and the names and IDs now align correctly.</li> <li> Also, in some cases, the account selector dropdown would abruptly shift to the right and get cut off whenever a user switched accounts. We fixed it, and the selector now remains properly aligned during account changes.  </li> </ul>  |  
|  ![bug](/img/bug.jpg) | Fixed an issue with the collaborator feature | <ul> <li> Previously, organization accounts could be added as collaborators to an app. We fixed it, and they can no longer be added as collaborators.  </li></ul>  | 

