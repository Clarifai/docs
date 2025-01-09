---
description: Changelog for Clarifai Release 11.0
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -63
pagination_next: null
pagination_prev: product-updates/changelog/release1011
draft: false
---

# Release 11.0

**Release Date:** January 8th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


:::info Clarifai Product Roadmap

We have a public roadmap that gives you a view of our upcoming plans and helps us gather your valuable feedback. You can explore the features we're considering, vote for the ones you want most, or submit new ideas. You can check it [here](https://portal.productboard.com/bd1rxfuyfbu6vqnmkva3mprx/tabs/1-under-consideration). 

:::

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Introduced Financial Manager role for [organizations](https://docs.clarifai.com/portal-guide/clarifai-organizations/) | <ul> <li> This role provides access to key financial data, including current spending based on the organization's pricing plan and budget settings, enabling better financial oversight and management.  </li> </ul> | 
|![improvement](/img/improvement.jpg)| Expanded permissions for the [Labeler Lead](https://docs.clarifai.com/portal-guide/clarifai-organizations/members-teams/#3-labeler-lead) role  | <ul> <li> Labeler Leads can now create, modify, and delete concepts, giving them greater control over the labeling process.</li> </ul>|   
 

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------| 
| ![improvement](/img/improvement.jpg)  |Made improvements to the [Control Center](https://docs.clarifai.com/portal-guide/control-center/)  | <ul> <li> We've hidden the totals column in the following charts within the Control Center: `Total Model Predictions by ID` and `Total Model Predictions by Type`. This update streamlines the display for better clarity and focus. </li> <li> We've fixed an issue where the corresponding tab in the left sidebar would not be highlighted when viewing [a detailed report page](https://docs.clarifai.com/portal-guide/control-center/usage-dashboard#view-report-details) of a chart. The sidebar now properly reflects the selected section for a smoother navigation experience. </li> <li> We've fixed an issue where dates were not appearing on some charts in the Control Center. </li>  <li> Pinning or unpinning [charts](https://docs.clarifai.com/portal-guide/control-center/usage-dashboard/#charts) now triggers a notification at the top of the screen, displaying either "Chart pinned to the Overview" or "Chart unpinned from the Overview," depending on the action. </li> <li> We've made improvements to the [calendar feature](https://docs.clarifai.com/portal-guide/control-center/#date-ranges) for a smoother and more flexible user experience: <ul> <li> Users can now manually input dates to select a custom date range.  </li> <li> Clicking the arrow in the dropdown window for selecting a custom date range now navigates through months one at a time, instead of two.  </li> <li> Users can now select a single day, removing the previous limitation of a minimum two-day range. </li> <li>  The current day is now highlighted with a non-filled circle for better visibility.    </li> <li>  The ability to select future dates has been disabled.   </li></ul> </li> </ul> |  
  
##  Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)  | Made improvements to the Python SDK <br/> <br/> _Learn more about them [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md)_.     |  <ul> <li> Changed labels to be optional in Dataloaders to better support data ingestion pipelines in the `clarifai-datautils` library, enabling greater flexibility during data processing. </li> <li>Added model building logs to improve tracking and debugging. </li><li>Added `user_id` field to the RAG class for better user identification. </li><li>Added support for testing and running a model locally within a container. </li><li>Added CLI support for the Model Predict functionality. </li><li>Updated Dockerfile for `Sglang` to improve compatibility and performance. </li><li>Updated available Torch images, along with code refactoring for better maintainability. </li><li>Fixed an issue with model local testing to ensure smoother functionality. </li><li>Removed `protobuf` from requirements to resolve conflicts with `clarifai-grpc`. </li><li>Fixed edge case issues with bounding box information. </li><li>Added support for downloading `data.parts` as bytes for increased flexibility. </li><li>Changed default environment to `prod` for model uploads. </li><li>Added tests for all stream and generate methods to enhance reliability. </li><li>Added code coverage test reports to PRs for improved quality control. </li></ul>  |

##  Platform Improvements

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved navigation highlighting for top-level resources | <ul> <li> Now, when users visit resource pages under the "My Apps" or "Community" sections, the corresponding navigation items are correctly highlighted. For example, visiting `/user-id/app-id/models/model-id` highlights the "My Apps" navigation item, visiting `/explore/apps` highlights the "Community" navigation item, and visiting `/settings/billing` results in no navigation item being highlighted, as it falls outside these sections. </li> </ul> | 


## Platform Bugs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed team name update issue | <ul> <li> We've fixed an issue that prevented users from updating a team's name on the organization settings page. You can now easily rename your teams without any problems. </li>  </ul> |   
|![bug](/img/bug.jpg)  | Fixed default permissions selection issue  | <ul> <li> We've fixed an issue where the radio button for selecting default permissions for a team was not highlighting upon selection. You can now easily choose the default permissions when creating a new team. </li></ul> |   
|  ![bug](/img/bug.jpg) | Fixed permission issue for organization ownership  | <ul> <li> We've fixed an issue where users without the necessary permissions could be added as owners of another organization. Previously, users who were not allowed to create multiple organizations could still be invited as owners. This is no longer possible, ensuring proper permission handling.</li> </ul> |  

## Workflow Bugs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue with updating a workflow ID | <ul> <li> Previously, attempting to edit a workflow and update its ID resulted in an error message stating, "ID already exists," even when no matching IDs existed in the system. This error would trigger immediately after entering the ID and persist even if the ID was partially removed. We fixed it, and workflow IDs can now be updated without errors.  </li>  </ul> | 