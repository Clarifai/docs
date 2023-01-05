---
description: Changelog for Clarifai Release 8.11
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -38
pagination_next: product-updates/changelog/release90
pagination_prev: product-updates/changelog/release810
---

# Release 8.11

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published the BlazeFace face detection model for mobile GPUs|<ul><li>You can now use the [BlazeFace face detection model](https://clarifai.com/paddlepaddle/face/models/general-image-detector-blazeface_ssh-widerface) to detect faces in images. It is a lightweight and well-performing face detector tailored for mobile GPU inference.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published four different models for general image detection|<ul><li>The models are [Detic](https://clarifai.com/explore/models?searchQuery=detic): A <b>Det</b>ector with <b>i</b>mage <b>c</b>lasses that can use image-level labels to easily train detectors. They can detect twenty-thousand classes using image-level supervision.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where markdown notes exceeded page width|<ul><li>Previously, when a code block with large text existed in markdown notes, it exceeded the page width. This led to the model viewer’s canvas expanding beyond the normal width and breaking without loading inputs well.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where a user's long app name broke the sidebar |<ul><li>A user's app had a long name that extended beyond the sidebar. The name was shortened.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the synonym mapper model failed when used in a workflow|<ul><li>The synonym mapper model now works as expected when used in a workflow prediction.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where changing an existing model's template failed to work|<ul><li>Previously, editing the existing template of a visual-detector model did not work. The existing template and its corresponding parameters stayed the same even after selecting another template.</li></ul>|

## Portal-Screen
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![bug](/img/bug.jpg)|Fixed an issue on the Input-Manager when applying label filters for inputs|<ul><li>Previously, selecting a label to see the images associated with that label resulted in an error. The search query took longer than expected</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue on the Input-Manager when using the "Unassigned" option for filtering inputs not assigned to any datasets.|<ul><li>Previously, the "Unassigned" filter option on the front-end sent a filtering request in a format that the back-end did not support. It occurred if an app had multiple datasets.</li></ul>|

## Old Portal
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![improvement](/img/improvement.jpg)|Improved the error message generated when a model failed to train|<ul><li>Previously, when a model failed to train, the error message generated was not sufficient for the user to provide a fix.</li></ul>|
| ![bug](/img/bug.jpg)|Fixed an issue where thumbnails failed to load after a visual search|<ul><li>After using the visual search feature to search for images, the resulting thumbnails now load properly.</li></ul> |

