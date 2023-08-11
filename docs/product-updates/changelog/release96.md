---
description: Changelog for Clarifai Release 9.6
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -45
pagination_next: product-updates/changelog/release97
pagination_prev: product-updates/changelog/release95
---

# Release 9.6

**Release Date:** July 11th, 2023

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Old Portal

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Decommissioned** |  The old portal has now been decommissioned  | <ul><li> The old portal is no longer publicly accessible. You can contact our support department if you still need to access the unmaintained old portal (at your own risk). </li><li>All visitors to `portal.clarifai.com` will be hard redirected to `clarifai.com/explore`.</li></ul> |

## Community  

### Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|  Introduced modules as a way to extend Clarifai’s UIs and perform customized backend processing | <ul><li>[Modules](https://docs.clarifai.com/portal-guide/modules/) are custom plugins that provide both UI elements and the ability to perform some computation around our API. </li> <li>You can now use modules to extend Clarifai UIs, augment backend processing capabilities, and build customized solutions quickly and easily. </li></ul> |

### Large Language Models (LLMs) and Foundation Models (FMs)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added more LLM and FM model options to allow our users to unleash the power of the latest developments in Generative AI | We are continuing to wrap more LLM and FM models from various vendors into our platform. We intend to provide you with more options so that you can choose the best Generative AI model based on the task you want to achieve.<br /><br /><ul><li>We've wrapped the following model from Anthropic: `claude-v1` for text-to-text tasks.</li></ul> |
|![improvement](/img/improvement.jpg)|Performed LLM fine-tuning on mid-large size models | <ul><li> We performed LLM fine-tuning with various base models from `gpt-neo` to `roberta-xlm-lage` using Parameter-Efficient Fine-Tuning (PEFT). We used the LoRA (low-rank adaptation) technique to freeze the weights of the pre-trained models and fine-tune them with a small model, achieving excellent fine-tuning results. The supported "fine-tunable" tasks include text classification (9.6 released) and text generation, such as content creation (coming soon in 9.7 release).</li><li> You can now perform text classification with two new templates: `gpt-neo-125m-lora` and     `gpt-neo-2.7b-lora`.</li><li> We also added the ability for users to perform advanced custom model configurations. For example, you can set up PEFT, which allows you to get performance comparable to full fine-tuning while only having a small number of trainable parameters.</li></ul> |
|![enterprise](/img/enterprise.jpg) / Developer-Preview | Performed LLM inferencing of mid-large size models | <ul><li>We performed inferencing on the following open source LLMs: `hkunlp_instructor-xl` and `tiiuae-falcon-7b-instruct`. We exposed the trained models to novel data and got predictions (inferences), which allowed us to optimize their performance. </li></ul>|

### Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | We've improved the efficiency and fixed some bugs related to importing large batches of inputs via the input uploader | <ul><li> You'll now get a better experience when importing batches of inputs by uploading files, URLs, or texts. You can also efficiently monitor the status of the inputs during and after the upload exercise.</li></ul>|
|![bug](/img/bug.jpg) | Fixed an issue that prevented the unification of Input-Manager and Input-Viewer stores | <ul><li> Previously, if you clicked the spyglass icon on an image on the Input-Manager page to perform a visual or face similarity search, and then clicked on any of the images returned by the search, the right image you clicked could not be populated on the Input-Viewer page. The issue has been fixed. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused slow visual similarity searches  | <ul><li>We've improved the speed and efficiency of visual similarity searches. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that prevented new datasets from appearing under the **Input Filters** section on the Input-Manager  | <ul><li> If you now use the input uploader pop-up window to add a new dataset, it will be correctly listed under **Datasets** without any issues. </li></ul> |
|![bug](/img/bug.jpg)| Fixed some issues that caused incorrect styling of the upload job monitor window on the Input-Manager | <ul><li> If some upload jobs are being processed and you collapse the upload monitor, a blue line is now displayed at the bottom of the upload monitor. It turns to green once the upload is successful. </li> <li> If you select some inputs while the upload monitor is still active, the selected items now overlap the upload monitor at the bottom bar. </li><li> There is a blue line that shows a percentage of the status of the upload process. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused the inputs upload process to fail when one upload job failed | <ul><li> Previously, if you uploaded inputs in bulk, and one input failed to upload properly, the entire upload process failed. </li><li> We've fixed the issue by showing an error message for the failed upload, while continuing uploading the rest of the inputs.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that prevented Smart Search results from being loaded after a user pressed the enter button on a keyboard |<ul><li>We've fixed the issue, and Smart Search now works as expected, and with better efficiency. </li></ul>  |

### Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added ability to hover in order to reveal helpful tips about the labeling tools on the Input-Viewer | <ul><li>If you now hover over a tool icon, you'll reveal a helpful tooltip, including an illustrative animation, a description, and a hotkey. The enhanced tooltips significantly improve the accessibility and usability of the Input-Viewer.</li> </ul> |
|![bug](/img/bug.jpg) | Fixed an issue that prevented filtering of annotations on the Input-Viewer | <ul><li>If you now select the filter option, it's immediately applied and works as expected.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue with drawing a second bounding box or a polygon on the Input-Viewer | To annotate an input with a bounding box, you go to the Input-Viewer screen, switch to the bounding box mode, select a concept, and draw it on the canvas area. <br /><br /> <ul><li>Previously, if you wanted to add a second bounding box, the canvas area could become grey without any concept selected.</li><li>You can now add a second bounding box without experiencing any issues.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that prevented editing existing polygon annotation points on the Input-Viewer | <ul><li> Previously, if you tried editing an existing polygon point, a new point was created instead of modifying the old one. </li><li> You can now click on a polygon shape and edit any point without any issues. </li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue that caused unexpected backend search requests while scrolling on the Input-Viewer | <ul><li> Previously, there was an issue with the **PostInputSearches** endpoint that caused improper accumulation of input status filters when performing infinite scrolling. We've fixed the issue.  </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that prevented the rendering of text inputs on the Input-Viewer when Secure Data Hosting (SDH) was enabled| <ul><li> Previously, if you created an app with the base workflow set to "Text" and uploaded a CSV file having text inputs, the uploaded data could not be rendered properly. We've fixed the issue.  </li></ul> |
| ![bug](/img/bug.jpg)| Fixed an issue that prevented the rendering of images on the canvas area on the Input-Viewer when SDH was enabled | <ul><li>Images are now rendering properly on the canvas area when SDH is enabled.</li></ul> |
| ![bug](/img/bug.jpg)| Fixed an issue that prevented tool icons from showing an active state on the Input-Viewer |<ul><li> Previously, the tool icons did not render an active, or selected, state style, which made it difficult to know the tool you've selected for performing an action, such as drawing a bounding box or a polygon.</li><li> We've fixed the issue—there is always one tool with an active, or selected, state styling on the Input-Viewer toolbar. </li></ul>  |
| ![bug](/img/bug.jpg)| Fixed an issue that prevented using up/down hotkeys to navigate between inputs on the Input-Viewer  | <ul><li> You can now use the up/down hotkeys to successfully navigate between inputs. </li></ul>  |
| ![bug](/img/bug.jpg)| Fixed an issue that caused incorrect responsive styling of sidebar preview items on the Input-Viewer | <ul><li>Vertical scrolling now appears after a user has added a 5th concept. Before the 5th item, vertical scrolling does not appear.</li><li> If the content fits into the box, the concepts do not have horizontal scrolling. </li></ul> |

### User Onboarding

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue where the onboarding window popped up when a user clicked a non-existent URL | <ul><li>Previously, if you clicked a non-existent URL, you got a "Resource does not exist" error and an onboarding window popped up, requiring you to either choose a guided tour of the platform or explore it on your own. If you wanted to explore the platform on your own, a new “my-first-application” application was created for you, even if you already had one. </li><li> If you now click a non-existent URL, you'll just get a message that the page does not exist and the onboarding process will not be started. </li></ul> |

### Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)| Published BLIP-2 image captioning and multi-modal embedding models | <ul><li> We've published the [`general-english-image-caption-blip-2`](https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip-2) model. </li></ul>  |
| ![new-feature](/img/new_feature.jpg) | Published a generative model | <ul><li>We've wrapped the following model from Stability AI: [`Stable-Diffusion-XL-beta-v2-2-2`](https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl-beta-v2-2-2) for text-to-image generation tasks.</li></ul> |
|![improvement](/img/improvement.jpg) | Introduced the use of the logged-in user's PAT (Personal Access Token) when showing the Call by API code samples   | <ul><li> Previously, using an organization's PAT in the Call by API code samples gave an error from the backend. Therefore, we now always fetch the logged-in user’s PAT to be used in the Call by API samples.</li></ul> |
|![improvement](/img/improvement.jpg)| Improved the URL structure of model versions   | <ul><li>The URL of a model version now has a `/versions/` reference in its path. It makes the URL fully qualified and easy to infer.</li></ul> | 
|![improvement](/img/improvement.jpg)| Improved the animations of the "Try your own image or video" and "Add Public Preview Examples" buttons| <ul><li> If you now hover over either of the buttons on a model overview page, an improved pop-up will appear with a simple animation.</li></ul> |
|![improvement](/img/improvement.jpg) | Added "Try your own inputs" support for transfer learned models   | <ul><li> You can now use the "Try your own inputs" feature with transfer learned models. Previously, it wasn’t supported. </li></ul>   |
| ![improvement](/img/improvement.jpg) | Made some UI/UX improvements on the Model-Viewer page | <ul><li>OCR models now support scores output.</li><li> Improved the Model ID and Description fields.</li><li> Moved preview examples to the left side of the Canvas.</li></ul>  |
|![bug](/img/bug.jpg)| Fixed an issue where it was not possible to hover over a smaller bounding box that was within a larger bounding box | <ul><li> Previously, hovering over bounding box predictions of some models was not working very well. Bounding boxes that were inside other bounding boxes could not detect the hovering effect. We've fixed the issue. </li></ul> |

### Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)| Fixed an issue that prevented saving workflows  | <ul><li> You can now create and save a workflow using the "Save Workflow" button without experiencing any issues.</li></ul> |
| ![bug](/img/bug.jpg)| Fixed an issue with using the **Suppress output** field to edit a workflow  | <ul><li> Previously, you could check the **Suppress output** field and update a workflow. However, if you tried editing the workflow again, you could find that the checkbox was incorrectly showing as unchecked. We've fixed the issue. </li></ul> |

### Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Added a toggle to make an app private or public | <ul><li> You can now use the toggle button on an App Settings page to update its visibility to either private or public. </li></ul> |


### Email 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an error shown in the verification link of a secondary email | <ul><li>Previously, when a user added a secondary email to their account, and clicked the verification and login link sent to their inbox, they could get an error. We've fixed the issue. </li></ul> |


