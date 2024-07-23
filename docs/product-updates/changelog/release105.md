---
description: Changelog for Clarifai Release 10.5
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -56
pagination_next: product-updates/changelog/release106
pagination_prev: product-updates/changelog/release104
draft: false
---

# Release 10.5

**Release Date:** June 4th, 2024

<hr/>

<div class="banner-tertiary">
   <h3 class="banner-header">
      Release 10.5
   </h3>
   <ol class="banner-content">
      <li>Introduced a new <a href="https://docs.clarifai.com/portal-guide/annotate/auto-annotation">auto-annotation</a> experience for labeling already existing inputs in datasets</li>
      <li>Introduced the ability to manually <a href="https://docs.clarifai.com/portal-guide/annotate/review">review</a> labeled inputs by partitioning them</li>
   </ol>
   <a href="https://clarifai.com/signup" target="_blank" class="banner-cta">Start for free</a>
</div>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Data Labeling​

:::warning Private Preview

These data labeling features have been released as [**Private Preview**](https://docs.clarifai.com/product-updates/changelog/release-types). 

:::

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) |Introduced a new [auto-annotation](https://docs.clarifai.com/portal-guide/annotate/auto-annotation) experience for labeling already existing inputs in datasets| <ul><li>You can now set up a labeling task and enable automatic annotation, streamlining the process of annotating your text and image inputs quickly and efficiently. </li><li>You can select a model or workflow you own or choose one published in the Community for the auto-annotation task.</li><li>You can also review and edit the annotations from auto-annotation tasks. </li></ul> |
| ![new-feature](/img/new_feature.jpg) |Introduced the ability to manually [review](https://docs.clarifai.com/portal-guide/annotate/review) labeled inputs by partitioning them | <ul><li>You can now distribute inputs to be reviewed across multiple reviewers in the Labeling Tasks tool. This lets you automatically distribute labeled assets across multiple reviewers to improve the speed of review mode and reduce chances for a single point of dependence. </li></ul>   |


## Devtools Integrations

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)  | Integrated LiteLLM with Clarifai | <ul> <li> [LiteLLM](https://docs.litellm.ai/docs/) is an open-source Python library that provides a unified interface to call 100+ Large Language Models (LLMs) using the same Input/Output format. It allows you to seamlessly interact with LLM APIs using the standardized OpenAI format. This integration aims to provide users with more powerful, efficient, and versatile tools for their Natural Language Processing (NLP) tasks.</li> </ul>|


## Deep Fine-Tuning

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)  | Made improvements to deep fine-tuned templates  | We made significant improvements to various [deep fine-tuned templates](https://docs.clarifai.com/portal-guide/model/deep-training/#template-types), enhancing the capabilities available for training your models. The updates include:<br/><br/><ul><li><b>MMClassification visual classification template:</b> Updated from version 1.5.0 to 2.1.0, offering improved features and performance for visual classification tasks.</li><li><b>MMDetection visual detection template:</b> Updated from version 2.24.1 to 3.3.0, providing advanced capabilities and optimizations for visual detection tasks.</li><li><b>[YOLOX](https://github.com/open-mmlab/mmdetection/tree/main/configs/yolox) support added:</b> We introduced support for YOLOX, a state-of-the-art object detection training template, further expanding the tools available for high-performance object detection.</li></ul> |

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_ |<ul> <li> Wrapped [Snowflake Arctic-Instruct](https://clarifai.com/snowflake/arctic/models/snowflake-arctic-instruct) model, a cost-effective, enterprise-focused Large Language Model (LLM) that excels in SQL, coding, and instruction-following tasks, offering open access to its advanced AI capabilities. </li><li> Clarifai-hosted [Qwen-VL-Chat](https://clarifai.com/qwen/qwen-VL/models/qwen-VL-Chat),  a high-performing  Large Vision Language Model (LVLM) by Alibaba Cloud for text-image dialogue tasks, excelling in zero-shot captioning, VQA, and referring expression comprehension while supporting multilingual dialogue.  </li><li> Clarifai-hosted [CogVLM-Chat](https://clarifai.com/thudm/cogvlm/models/cogvlm-chat), a state-of-the-art visual language model that excels in generating context-aware, conversational responses by integrating advanced visual and textual understanding. </li><li> Wrapped [GPT-4o](https://clarifai.com/openai/chat-completion/models/gpt-4o), a multimodal AI model that excels in processing and generating text, audio, and images, offering rapid response times and improved performance across languages and tasks, while incorporating advanced safety features. </li><li> Wrapped [Gemini 1.5 Flash](https://clarifai.com/gcp/generate/models/gemini-1_5-flash), a cost-efficient, high-speed foundation LLM optimized for multimodal tasks, ideal for applications requiring rapid processing and scalability. </li><li> Wrapped [WizardLM-2 8x22B](https://clarifai.com/wizardlm/generate/models/wizardLM-2-8x22B), a state-of-the-art open-source LLM, excelling in complex tasks like chat, reasoning, and multilingual understanding, competing closely with leading proprietary models.  </li><li> Wrapped [Qwen1.5-110B-Chat](https://clarifai.com/qwen/qwenLM/models/qwen1_5-110B-chat) LLM, with over 100 billion parameters, demonstrates competitive performance in base language tasks, shows significant improvements in chatbot evaluations, and boasts of multilinguality.  </li> <li> Wrapped [Mixtral-8x22B-Instruct]( https://clarifai.com/mistralai/completion/models/mixtral-8x22B-Instruct-v0_1), the latest and largest mixture of expert LLM from Mistral AI with state-of-the-art machine learning model using a mixture 8 of experts (MoE) 22b models.  </li> <li> Wrapped [DeepSeek-V2-Chat](https://clarifai.com/deepseek-ai/deepseek-chat/models/deepseek-V2-Chat), a high-performing, cost-effective 236 billion MoE LLM, excelling in diverse tasks such as chat, code generation, and math reasoning.  </li> <li> Clarifai-hosted [MiniCPM-Llama3-V 2.5](https://clarifai.com/openbmb/miniCPM/models/miniCPM-Llama3-V-2_5), a high-performance, efficient 8B parameter multimodal model excelling in OCR, multilingual support, and multimodal tasks. </li> <li>Wrapped [Codestral-22B-v0.1](https://clarifai.com/mistralai/completion/models/codestral-22b-instruct), an advanced generative LLM designed for versatile and efficient code generation across 80+ programming languages.</li><li>Clarifai-hosted [Phi-3-Vision-128K-Instruct](https://clarifai.com/microsoft/text-generation/models/phi-3-vision-128k-instruct), a high-performance, cost-effective multimodal model for advanced text and image understanding tasks.</li><li>Clarifai-hosted [Openchat-3.6-8b](https://clarifai.com/openchat/openchat/models/openchat-3_6-8b-20240522) model, a high-performance, open-source LLM fine-tuned from Llama3-8b with C-RLFT, delivering ChatGPT-level performance across various tasks. </li></ul>|

## New Published App Templates

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new [app templates](https://docs.clarifai.com/clarifai-basics/app-templates)|<ul><li>Published [Coding Template](https://clarifai.com/clarifai/coding-template), which helps to streamline the development process by facilitating efficient code completion, bug detection, refactoring, and more. </li></ul>|

## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Added TypeScript (Node.js) SDK code snippets to the **Use Model / Workflow** modal window | If you want to use a model or a workflow for making API calls, you need to click the **Use Model / Workflow** button at the upper right corner of the individual page of a model or workflow. The modal that pops up has snippets in various programming languages, which you can copy and use. <br/> <br/>  <ul><li>We introduced TypeScript SDK code snippets as one of the tabs. Users can now conveniently access and copy the code snippets directly from the modal. </li></ul>|
|  ![improvement](/img/improvement.jpg) |  Added a feature that redirects users to their previous page after logging in    |   <ul><li>If you are logged out, you will now be taken back to the page you were on after logging in.</li></ul>   |
|  ![improvement](/img/improvement.jpg)  | Introduced the ability to add users who are not organization members to teams   |  <ul><li>This enhancement allows for greater flexibility in team composition and collaboration.</li></ul> |
|![improvement](/img/improvement.jpg)|Redesigned the user activation form for new Clarifai accounts|<ul><li>After signing up, users receive a verification email. Clicking the link in the email redirects them to the Clarifai platform to complete their profile details.</li></ul>|
|![bug](/img/bug.jpg)| Fixed an issue with sorting resources on mobile view  | <ul><li>We fixed an issue where the **Sort by** feature was not visible. You can now easily sort resources using these criteria on your mobile device.</li></ul>|
|![bug](/img/bug.jpg)|Fixed delayed loading of page contents| <ul><li>Previously, the notes section on Community pages did not appear immediately on the first render. We fixed the issue, ensuring the contents now load promptly as expected. </li></ul> |
|![bug](/img/bug.jpg)| Fixed a UI issue with modals | <ul><li>We fixed a UI issue where modal buttons would overflow the borders if the window height was too small. With this fix, modals are now fully responsive, ensuring that buttons remain within the borders regardless of the window height. </li></ul> |
| ![bug](/img/bug.jpg)   | Fixed an issue with user onboarding    |  <ul><li>Fixed an issue that prevented the **Create Application** modal from opening during the user onboarding process. </li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue with the placeholder search text on the Community page| <ul><li>We fixed an issue where the placeholder text in the main page's search bar was partially hidden on smaller screen sizes or when the browser was resized. The placeholder text now displays properly across all devices and screen sizes.</li></ul>  |
|  ![bug](/img/bug.jpg)  |Fixed an issue with the table showing the current members of an organization  | <ul><li>We fixed an issue with the organization members table where long names in the "Name" column would overflow the table elements. Long names now display correctly within the table.</li></ul> |

## Apps / Templates

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the handling of unauthenticated users|If a user is not logged in or lacks access to the app:<br/><br/><ul><li>We hide the Inputs block and its values. So, the user cannot see the inputs details on the App Overview page. </li><li>We direct the user to available public resources (e.g. models) without prompting for a login.</li></ul>|
| ![improvement](/img/improvement.jpg) | Added a "Reindex" checkbox in the "Change Base Workflow" section  |  <ul><li>This option allows users to decide whether they want to reindex their app's inputs before [changing the app's base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows#how-to-change-a-base-workflow). </li></ul> |
|  ![improvement](/img/improvement.jpg)   | Made improvements in the app settings page   | <ul><li>Removed extra spaces in the tables within the API Keys and Collaborators sections on the app settings page for a cleaner and more streamlined layout.</li></ul>   |
|  ![improvement](/img/improvement.jpg)  | Expanded the list of available workflows when creating a new application  | <ul><li>You can now choose from a broader selection of base workflows to better suit your needs. </li></ul>    |
|![bug](/img/bug.jpg)| Fixed an issue with deleting an app | <ul><li>Previously, when deleting an app from the App Overview page, the pop-up dialog would remain open even though the app was successfully deleted. You had to refresh the page to close it. We fixed the issue, and now, upon deleting an app, the dialog closes, and you are redirected to the **My Apps** or **Org Apps** page.</li></ul> |
|![bug](/img/bug.jpg)|Fixed the position of the collapse button in the app sidebar|<ul><li>Previously, the button for collapsing the app sidebar was misaligned. We fixed the issue, and the button is now properly positioned. </li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with filtering app templates| To view available templates, visit the **Apps / Templates** screen and select the ["Templates"](https://clarifai.com/explore/apps/templates) option.<br/><br/><ul><li>Previously, when sorting templates by "Last Updated," the list mistakenly included both apps and templates. To view only templates, users had to manually select "All" and then "Templates" again.</li><li>We fixed the issue. Now, when you sort by "Last Updated" on the Templates page, only templates are displayed as intended. </li></ul> |
| ![bug](/img/bug.jpg)  | Fixed an issue with truncated template names|<ul><li>Previously, in the template selection screen for creating an app, long template names were truncated and unreadable. We fixed the issue. For example, now, if template names don't fit in the available space, they are omitted, and a tooltip saying "Clarifai's Templates" appears on hover.</li></ul> |
| ![bug](/img/bug.jpg) | Added the ability to quickly delete the auto-completed App ID field  | <ul><li>We introduced a cross (X) icon to the App ID and Short Description fields, allowing users to quickly erase contents when setting up an app using a template.</li></ul>|

## Platform Resource Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Improved ability to select a version of a resource   | <ul><li> We introduced a standardized version selection feature across the platform, now available on both the Model-Viewer and Dataset-Viewer pages. This feature allows you to select and view specific versions of your resources using truncated digits and dates for easy identification. </li></ul> |

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Fixed an issue with the left sidebar  | <ul><li>We fixed an issue where the left sidebar on the Input-Manager and Input-Viewer was not scrollable. Previously, this made it difficult to access all sidebar content. With this improvement, the left sidebar is now scrollable, allowing you to easily bring all parts into view.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue with the scrolling behavior in the Input-Manager  | <ul><li>Previously, when the first batch of Input-Manager search results was fully visible on the screen without requiring scrolling, the page entered a broken state. This state made it difficult to scroll down to view more inputs and resulted in failure to fetch the next batch of inputs. We fixed the issue, and the scrolling behavior now works as desired. </li></ul>|

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| Deprecation | Deprecated some tracker agent system operators | <ul><li>We deprecated the Neural Tracker and Neural Lite Tracker operators. These operators were previously used to chain together with other models in a workflow for object-tracking tasks in computer vision. We no longer support them. </li></ul>|
| ![bug](/img/bug.jpg) | Fixed an issue with a redundant close button  | <ul><li>  We fixed an issue where a redundant close button appeared in the modal for updating text-to-text workflow nodes. Previously, this caused two close buttons to be displayed instead of one. With this fix, we removed the redundant close button, ensuring only one close button is displayed in the modal.  </li></ul> |


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![bug](/img/bug.jpg)    |  Fixed an issue where `get_upload_status` would override `log_warnings` in the `dataset.upload_dataset` function | <ul><li>The issue occurred because `self.logger` was shared between both loggers, causing the upload status table to overwrite the log file when both `get_upload_status` and `log_warnings` arguments were used simultaneously. We fixed the issue.</li></ul>  |    


## Planning for Future Releases

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) <br/> <br/> | Planned future breaking changes |<ul><li>An upcoming release of Clarifai’s API, 10.7, will significantly change how Personal Access Tokens (PATs) and API keys work. We plan to implement this change on August 6th, 2024. Learn more [here](https://docs.clarifai.com/product-updates/upcoming-api-changes/pat-api-keys). </li> </ul>|