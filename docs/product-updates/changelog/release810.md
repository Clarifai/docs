---
description: Changelog for Clarifai Release 8.10
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -37
pagination_next: product-updates/changelog/release811
pagination_prev: product-updates/changelog/release89
---

# Release 8.10

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)  |Released the Community Usage dashboard|<ul><li>We publicly released the Usage dashboard that allows you to get measurable insights into your utilization of the Clarifai Community platform during the selected period.</li><li>We also improved the display of the columns in the dashboard's Training Hours section.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the OpenVINO face detection model|<ul><li>You can now use the [OpenVINO face detection model](https://clarifai.com/openvino/face-detection/models/face-detection-0200) to detect faces in images.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the Barcode-QRcode-Reader operator|<ul><li>You can now use the [Barcode-QRcode-Reader](https://clarifai.com/yuchen/workflow-test/models/BARCODE-QRCODE-Reader) operator to detect and recognize barcodes and QR codes from images.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the moderation-abuse-japanese model|<ul><li>You can now use the [moderation-abuse-japanese](https://clarifai.com/yuchen/text-moderation/models/moderation-abuse-japanese) model to detect harmful texts in the Japanese language. It is a text moderation model finetuned for automatic cyberbullying detection.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the moderation-abuse-korean model|<ul><li>You can now use the [moderation-abuse-korean](https://clarifai.com/yuchen/text-moderation/models/moderation-abuse-korean) model to detect harmful texts in the Korean language. It is a text moderation model for hate speech/cyberbully detection.</li></ul>|
|![improvement](/img/improvement.jpg)|Made changes to the top navigation menu|<ul><li>Changed the naming of “Home” to “My Apps.”</li><li>Changed the style and copy of the “Create an App” button.</li><li>Added a display of the current Community version in the dropdown options when you click the **?** button.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the login button could be displayed to logged-in users in rare cases|<ul><li>Previously, a logged-in user navigating the Community platform—such as navigating from Community models to model viewer and selecting any public model or workflow—could see the login button displayed. This occurred occasionally and for a short duration.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where editing a workflow via the UI failed to work|<ul><li>You can now successfully edit an existing workflow via the simple drag-and-drop interface.</li></ul>|

## API
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
| ![new-feature](/img/new_feature.jpg) |Created **ListModelConcepts** endpoint for listing concepts in a model with pagination|<ul><li>Previously, getting a list of concepts used in a model required fetching the model with **additional_fields=outputs** param or using the **GetModelOutputInfo** endpoint. However, neither of those endpoints supports pagination, especially for models that have a huge number of concepts.</li><li>The new **ListModelConcepts** endpoint adds pagination for easily listing concepts instead of displaying all concepts at once.</li></ul> |


## Old Portal
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
| ![bug](/img/bug.jpg) |Fixed an issue where TIFF images failed to load when added to the portal|<ul><li>TIFF images now render properly in the old portal.</li></ul> |
