---
description: Changelog for Clarifai Release 10.11
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -62
pagination_next: product-updates/changelog/release110
pagination_prev: product-updates/changelog/release1010
draft: false
---

# Release 10.11

**Release Date:** December 3rd, 2024

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
| ![new-feature](/img/new_feature.jpg) <br/> **(Public Preview)**  | Released Compute Orchestration in [Public Preview](https://docs.clarifai.com/product-updates/changelog/release-types)   | <ul> <li> Clarifai’s new Compute Orchestration capabilities provides you with an efficient way to deploy inference workloads on any compute, in any bare metal, or cloud environment.  Learn more about it [here](https://docs.clarifai.com/portal-guide/compute-orchestration/). </li><li> To request access, please contact us [here](https://www.clarifai.com/explore/contact-us-co). </li> </ul>  |   

## Concepts

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved concept capabilities with additional features  | <ul> <li>You can now create extensive concept hierarchies, accommodating thousands of concepts across up to 10 levels. Concepts can be named using period delimiters (e.g., `parent.child.subchild.subsubchild.subsubsubchild`), such as `vehicle.tracked_vehicle.tank.sherman.M4A3`, for intuitive navigation through the hierarchical layers. </li> <li> Added a dedicated page that allows you to list, view, and manage concepts, including adding metadata like descriptions, images, and URLs. You can expand each concept to view its hierarchy, displaying all child concepts under each parent in an organized structure. </li> </ul>  |  

## Single Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made various improvements to the [single Input-Viewer](https://docs.clarifai.com/glossary/general-ai#input-viewer) screen | <ul> <li>Added ability for users to rotate images and adjust their brightness, sharpness, contrast, and saturation.</li> <li>Improved the autocomplete functionality in the concept search field, making the displayed suggestions to be more relevant when users search for concepts. </li> <li>Relocated the "Add new concept" option to the bottom of the autocomplete table, which appears when users use the search field to annotate inputs with concepts. You can also now use keyboard shortcuts to move from one option to another. </li> <li>Added more keyboard shortcuts for labeling inputs in the Input-Viewer. </li> <li> Improved the visual design of classification and object regions in the Input-Viewer, enhancing clarity and user experience. </li>  </ul>  |  


## Control Center​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements to the [Control Center](https://docs.clarifai.com/portal-guide/control-center/) | <ul> <li> Implemented locale-based date formatting for charts. This ensures the user's browser locale is used to adjust the date format automatically based on their location (e.g., US or EU date formats). </li> <li> Previously, selecting a range like the last 7 days included the current day, even though data for the current date was often unavailable. This has been fixed so that the current date is now excluded when selecting the last "x" days. </li>  <li> We’ve updated Org access for Control Center pages. Previously, only Org Admins could access any of these pages. Now, Org Admins, Org Contributors, and Org Users can access the Overview and Usage pages, while the Costs page remains accessible only to Org Admins. </li> </ul>  |  
|![bug](/img/bug.jpg) | Fixed bugs on the Control Center  | <ul><li> Fixed an issue where pinning or unpinning charts on the Usage and Operations tab did not correctly update their visibility on the Overview tab as intended. </li> <li> Fixed an issue where selecting the 6-month option in the Date Range selector caused an error. </li>   <li> Previously, when a date range was selected and you navigated to a different tab or section, returning to the Control Center page would reset the date range to the default "Last 7 Days". We’ve fixed this issue, ensuring the selected date range persists.</li> <li> Fixed an issue with header styling in the Control Center.</li></ul>   |

## Agent System Operators

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced a new agent system operator (node type) for character detection | <ul><li>We developed a new operator that transforms Visual Detector model outputs into an OCR-compatible format. This operator assigns detected concept names as text for each region, enabling seamless integration with the Text Aggregator, particularly for foreign language character detection. </li></ul>|


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements to the Python SDK  | <ul>  <li>Fixed a bug in runners selection when using `Deployment`. </li> <li>Fixed an ID issue in the multimodal loader during the deletion of failed inputs.</li> <li>Added functionality to list inputs in the `Dataset` class. </li> <li>Added the ability to delete annotations in the `Input` class.</li> <li>Added a Dockerfile template based on new base images by parsing `requirements`. </li> <li>Added validation for the `base_url` parameter. </li> <li>Added CLI support for Compute Orchestration resources, including Compute Cluster, Nodepool, and Deployment. </li> </ul>  |  

## Platform Bugs

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue with member invitations in [Organizations](https://docs.clarifai.com/portal-guide/clarifai-organizations/)| <ul> <li> We’ve fixed an issue where it was possible to invite someone to an organization they were already a member of. Invitations now correctly prevent duplicate membership. </li> </ul>  |  
| ![bug](/img/bug.jpg)  | Fixed an issue with sorting apps | <ul><li> We’ve fixed an issue where the A-Z sorting functionality in the app selector was not working as expected. Apps now sort correctly in alphabetical order.  </li> </ul>|
|  ![bug](/img/bug.jpg)  | Fixed an issue with app duplication   | <ul> <li> We’ve fixed an issue where inputs were not copied when duplicating an application. Now, duplicating an application will correctly copy all associated inputs. </li> </ul> |
| ![bug](/img/bug.jpg)|Fixed an issue with spacing below headers| <ul> <li> We’ve fixed an issue where content directly below headers in some places appeared cramped due to insufficient spacing. Now, there is appropriate padding and spacing below headers, ensuring improved visual clarity and consistent alignment throughout the UI.  </li> </ul> |
