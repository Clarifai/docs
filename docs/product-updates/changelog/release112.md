---
description: Changelog for Clarifai Release 11.2
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -65
pagination_next: null
pagination_prev: product-updates/changelog/release111
draft: false
---

# Release 11.2

**Release Date:** March 4th, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) <br/> **Public Preview** | Upgrading the [Labeling Tasks](https://docs.clarifai.com/portal-guide/labeling-tasks/create-a-task) UI tool | <ul> <li> We are upgrading the task labeling experience. This upgrade unifies task labeling with the same underlying components from our single [Input-Viewer](https://docs.clarifai.com/portal-guide/input-viewer/) tool, ensuring a seamless and unified experience for users. </li> <li> This upgraded feature is currently in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types/#release-types). To request access, please [contact us](https://www.clarifai.com/explore/contact-us).  </li> </ul>  |   

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Improved the [Control Center](https://docs.clarifai.com/portal-guide/control-center/) | <ul> <li> We have updated access privileges for different roles: <br/> <ul> <li>  [Organization Contributors](https://docs.clarifai.com/portal-guide/clarifai-organizations/security#scopes-and-access-levels-of-organization-members) can now access the Overview tab pages and the Usage & Operations tab pages.</li> <li> Organization Users can now access the Overview tab pages, Usage & Operations tab pages, and the [detailed report pages](https://docs.clarifai.com/portal-guide/control-center/usage-dashboard#view-report-details) of their charts.</li> <li> Financial Managers can now access the Overview tab pages, Usage & Operations tab pages, Costs & Budget tab pages, and the detailed report pages of their charts.</li> </ul> </li> <li> We have added an empty state for the Overview tab. If all data is hidden, empty visuals will be shown, and no charts will be displayed. </li> <li> We now display two decimal places for financial values. For example, $20.1 is shown as $20.10. </li> <li> We have fixed an issue with table sorting where the number 0 was not being handled correctly. Now, numerical sorting works as expected, ensuring that 0 is properly ordered along with other values. </li>  <li> We have added cross-navigation links between the detailed report charts in the Usage & Operations tab and the Costs & Budget tab. These links allow users to seamlessly access related charts. For example, the detailed report page for the Total Number of Operations chart now includes a link in the lower right corner, directing users to the Cost of Operations chart.</li> </ul>    |       

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements to the Python SDK. <br /> <br /> Learn more about them [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).  | <li>Added support for local dev runners from the CLI.</li> <li>Used the non-runtime path for tests.</li> <li>Fixed local tests.</li> <li>Caught additional codes that models have at startup.</li> <li>Introduced three instances when checkpoints can be downloaded.</li> <li>Fixed dependency parsing.</li> <li>Used new base images and fixed Clarifai version.</li> <li>Disabled API validation in server.py.</li> <li>Fixed Docker test locally.</li> <li>Fixed Hugging Face (HF) checkpoints error.</li> <li>Fixed deployment tests.</li> <li>Fixed issue with filename being recognized as an invalid input ID.</li> <li>Updated Model Predict CLI.</li> <li>Set tests health port to None.</li> <li>Refactored model class and runners to be more independent.</li> <li>Added storage request inference based on tar and checkpoint size.</li>  |   


## Data Utils

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Made improvements to the [Data Utils](https://docs.clarifai.com/sdk/data-utils/) library | <ul> <li>Added support for DOCX and Markdown file formats. </li> <li> Introduced batch prediction for the ImageSummarizer pipeline. </li> </ul>|  

## Platform 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the navigation bar |  <ul> <li> We have made further adjustments to the navigation bar and links for improved usability and accessibility. </li> </ul> |
| ![bug](/img/bug.jpg) | Fixed platform bugs | <ul> <li> Fixed a sporadic JSON syntax error in the platform that occasionally disrupted the user experience by displaying an error screen with a “Back to Community” button. </li> <li> Fixed an issue where the “Last Updated” sorting did not reflect the most recent changes after actions like deleting an item in an app.</li> <li> Fixed an issue that prevented users from scrolling to the bottom of code snippets on the platform, causing some sections of the code to remain hidden.</li> <li> Fixed multiple errors when fetching organization roles, where the network tab and browser URL displayed an issue incorrectly stating that the user ID is not an organization. </li> <li> Fixed an issue where the input boxes in the pop-up window for creating an app displayed with reduced height. </li> <li> Fixed an issue where the tooltip text for the feedback icon incorrectly showed “Seed Feedback” instead of “Send Feedback.”</li> <li> Fixed an issue with icon styling in the app’s models listing table, where the search icon in the Model ID column was not displaying correctly. </li> <li> Fixed an issue where users were unable to access their apps after selecting the “My Resources” tab in the top navigation bar.</li> </ul> |   

