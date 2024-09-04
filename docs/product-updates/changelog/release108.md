---
description: Changelog for Clarifai Release 10.8
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -59
pagination_next: null
pagination_prev: product-updates/changelog/release107
draft: false
---

# Release 10.8

**Release Date:** September 3rd, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Workflows - Agent System Operators

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Deprecation** | Deprecated some agent system operators   | <ul><li> We have deprecated the following agent system operators `Custom Code Operator`, `AWS Lambda`, `Isolation Operator`, `Tesseract Operator`, `Neural Tracker`, and `Neural Lite Tracker`. </li></ul>   |   

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models | <ul><li>Published [Prompt-Guard-86M](https://clarifai.com/meta/text-classifier/models/prompt-guard-86m), a multilingual classifier model designed to detect and prevent prompt injection and jailbreak attacks in LLM-powered applications. </li></ul>   |   

## Concept Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced advanced concept management via the Python SDK | <ul><li> This feature enables associating multiple labels with an image or text chunk. It supports the creation of hierarchical or relationship-based structures, enhancing both fine-tuning and search capabilities. It also enriches metadata and labeling exercises, which significantly improves data preparation processes. </li> <li> Learn more about it [here](https://github.com/Clarifai/examples/blob/main/concepts/concept_management.ipynb). </li></ul>   |   


## Secure Data Hosting (SDH)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Enabled [SDH](https://docs.clarifai.com/product-updates/upcoming-api-changes/secure-data-hosting/) for some model features | <ul><li> We now serve the `model version train logs` and `model version export` capabilities via `secure-data-hosting` instead of `pre-signed urls`. </li></ul>   |   

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![bug](/img/bug.jpg) | Fixed an issue with dataset export    | <ul> <li> We fixed an issue where exporting a dataset through the Python SDK completed successfully, but the exported file lacked annotations.</li> </ul>  |
|  ![bug](/img/bug.jpg)  | Fixed an issue with model export  | <ul> <li> We fixed an issue where exporting a model via the Python SDK would result in failures.</li> </ul>  |

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Improved error messages for visibility patching requests | <ul><li> Previously, the error messages returned when patching the visibility field of a resource or user were not very helpful. We improved these messages, making them more descriptive and informative to better assist users in troubleshooting visibility patching requests. </li></ul>   |   
| ![improvement](/img/improvement.jpg)  | Upgraded to TanStack Table v8  | <ul><li>We’ve updated to the latest version of TanStack Table, v8, to enhance our table and datagrid functionalities across the platform. This headless UI library offers a range of new features and enhanced capabilities, providing a more robust and efficient experience. </li> <li> This upgrade also includes a fix for searching date fields. You can now easily search and filter dates within a table’s date column. </li> </ul> |
| ![improvement](/img/improvement.jpg) |Enabled sticky table headers| <ul><li> We’ve implemented sticky headers for all tables on our platform. Now, when scrolling through a table, the header remains fixed, making it easier to reference column titles as you navigate through the data. </li></ul>   |
| ![improvement](/img/improvement.jpg)| Removed scrollbars on smaller screens  | <ul><li> We’ve removed horizontal and vertical scrollbars from the left menu on smaller screen sizes. This adjustment ensures a cleaner, more user-friendly interface when the window height is small, which improves the overall user experience. </li></ul>   |  
|![improvement](/img/improvement.jpg) | Ensured full visibility of app sidebar components on mobile and desktop devices  | <ul><li> We’ve fixed issues with the app’s sidebar to ensure all components are fully visible and functional on both mobile and desktop screens. This includes resolving problems with cropped lists, overlapping scrollbars, and smoother behavior when interacting with the sidebar. </li></ul>   | 
|![bug](/img/bug.jpg)  | Fixed an issue where some operations were still allowed for an Organization User  | <ul><li> Previously, Organization Users were mistakenly allowed to perform certain CRUD operations, such as uploading and deleting inputs. We fixed the issue to enable Organization Users to only have view-only permissions, without the ability to create, update, or delete resources. </li></ul>   |   
|![bug](/img/bug.jpg) | Corrected alignment of the "Add Email" field   | <ul><li> Previously, the "Add Email" field on the "Account Settings" page was misaligned and did not display correctly. We fixed the issue, ensuring the field now appears as intended.  </li></ul>   |  
| ![bug](/img/bug.jpg) | Fixed an issue with disabled "Create Org" button   | <ul><li> Previously, the "Create Org" button was incorrectly disabled for certain users who hadn't joined or created an organization, preventing them from creating one. This issue has now been fixed, allowing users to create an organization even if they haven't been part of one before.   </li></ul>   | 

## RAG Prompter

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the [RAG Prompter](https://docs.clarifai.com/portal-guide/agent-system-operators/rag-prompter/) operator | <ul><li> Previously, the RAG Prompter searched for queries across all inputs from the app, spanning across multiple datasets. This occasionally caused context searches to become mixed between different datasets, resulting in jumbled or inaccurate context hits. To resolve this, we now offer enhanced filtering options that allow context searches to be narrowed down based on specific datasets and metadata. These options include metadata filtering, dataset filtering, and dynamic dataset filtering. </li></ul>   |  

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|    ![improvement](/img/improvement.jpg)   |  Added missing buttons in reviewer field for labeling tasks   | <ul> <li> We’ve improved the reviewer selection field by adding two new buttons: “Add/Remove all collaborators” and “New collaborator.” These options streamline the process of managing reviewers when creating a new labeling task.</li> </ul>  |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Introduced automatic resizing of bounding boxes/polygons    | <ul> <li> When annotating and drawing a bounding box or polygon, if the shape is stretched beyond the main canvas area on any side, it will now automatically resize and adjust to fit within the canvas edge on the same side. </li> </ul>  |
| ![improvement](/img/improvement.jpg) | Enhanced annotation identification in Input-Viewer    | <ul> <li> When hovering over or selecting an annotated object on the canvas of the Input-Viewer, the corresponding annotation in the right sidebar is now highlighted. This makes it easier for users to quickly identify the annotation for deletion, editing, or other purposes.</li> </ul>  |
|![improvement](/img/improvement.jpg) |  Added option to download original asset from Input-Viewer   | <ul> <li> You can now download the original asset directly from the Input-Viewer page. If you right-click on the canvas area, a button will appear, which allows you to download the original input. Previously, only masked versions could be downloaded.  </li> </ul>  |
| ![bug](/img/bug.jpg) | Fixed various issues with playing a video input within the Input-Viewer | <ul><li> For example, users previously experienced limitations when trying to control video playback, such as navigating to specific points, skipping forward or backward, or performing any interactive actions. Any such attempt to scroll through a video could result in it snapping back to the starting point unexpectedly. We fixed such issues. </li></ul>   | 
| ![bug](/img/bug.jpg)  | Enabled editing of bounding box annotations    | <ul> <li>Previously, once you drew a bounding box and clicked outside of it, you couldn't edit (move or resize) the annotation by clicking on it. We've fixed this issue, allowing for seamless editing of bounding box annotations. </li> </ul>  |
| ![bug](/img/bug.jpg) | Fixed unexpected deletion of bounding box or polygon annotations     | <ul> <li> We fixed an issue where clicking the checkmark on the right sidebar of the Input-Viewer page unexpectedly deleted a bounding box or polygon annotation. This behavior was unintended, as annotations can be rightfully deleted by clicking the three vertical dots next to the annotation and clicking the “Delete annotation” button that appears. </li> </ul>  |
| ![bug](/img/bug.jpg) | Fixed an issue with using keyboard shortcuts when working with bounding boxes on the Input-Viewer    | <ul> <li> Previously, creating, selecting, or removing a bounding box would disable keyboard shortcuts. Now, keyboard shortcuts remain active and functional during all bounding box operations.</li> </ul>  |
| ![bug](/img/bug.jpg) | Fixed an issue with editing bounding boxes  | <ul> <li> We fixed an issue where editing a bounding box by resizing or moving it caused unintended changes in the coordinates on the opposite side(s). We fixed this "jiggle" of the coordinates. Now, only the edited coordinates are adjusted, while the others remain unchanged, ensuring precise and accurate bounding box modifications. </li> </ul>  |
| ![bug](/img/bug.jpg) |  Fixed an issue with creating bounding boxes   |You can make bounding box predictions on the Input-Viewer screen by selecting the “Predict” mode and choosing a model, such as “General-detection,” or a workflow to view the predictions on your inputs. You can click on the suggested bounding boxes to edit and accept the annotations. <br/><br/> <ul> <li> Previously, an error could occur after completing the editing process, preventing the creation of a bounding box. We fixed this issue. Now, after finishing the editing process, a new bounding box is successfully created without any errors. </li> </ul>  |
|![bug](/img/bug.jpg) | Fixed resizing issue for close-proximity bounding boxes    | <ul> <li> Previously, when two bounding boxes were positioned close to each other, it could sometimes be impossible to resize one of them. We fixed the issue, allowing for accurate resizing even when bounding boxes are in close proximity. </li> </ul>  |
|  ![bug](/img/bug.jpg)      |  Fixed incorrect starting position for bounding box annotations   | <ul> <li> Previously, when creating a bounding box annotation, it could start at the wrong position, which required a user to constantly adjust the box. We’ve fixed the issue, ensuring that bounding boxes start exactly where intended.</li> </ul>  |

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------| 
|![bug](/img/bug.jpg) |  Fixed an issue with filtering concepts in the workflow editor   | <ul><li> Previously, if you added a new model to a workflow, and tried filtering the concepts in the model using the “SELECT CONCEPTS” modal, nothing was filtering. We fixed the issue, and the filtering now works as intended.  </li></ul>  |
