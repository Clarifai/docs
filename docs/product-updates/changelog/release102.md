---
description: Changelog for Clarifai Release 10.2
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -53
pagination_next: null
pagination_prev: product-updates/changelog/release101
---

# Release 10.2

**Release Date:** March 5th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Evaluation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) **[Developer Preview]**|Introduced a module for evaluating large language models (LLMs)|You can use the module to evaluate the performance of LLMs against standardized benchmarks alongside custom criteria to gain deep insights into their strengths and weaknesses. <br /><br />Here are some of its key features: <br /><br /> <ul><li>Evaluate across 100+ tasks covering diverse use cases like RAG, classification, casual chat, content summarization, and more. Each use case provides the flexibility to choose from relevant evaluation classes like Helpfulness, Relevance, Accuracy, Depth, and Creativity. You can further enhance the customization by assigning user-defined weights to each class.</li><li> Define weights on each evaluation class to create custom weighted scoring functions. This lets you measure business-specific metrics and store them for consistent use. For example, for RAG-related evaluation, you may want to give zero weight to Creativity and more weights for Accuracy, Helpfulness, and  Relevance. </li><li>Save the best performing prompt-model combinations as a workflow with a single click for future reference.</li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys.)_| <ul><li> Wrapped [Google Gemini Pro Vision](https://clarifai.com/gcp/generate/models/gemini-pro-vision), which was created from the ground up to be multimodal (text, images, videos) and scale across a wide range of tasks.</li><li>Wrapped [Claude 3 Opus](https://clarifai.com/anthropic/completion/models/claude-3-opus), a state-of-the-art, multimodal language model (LLM) with superior performance in reasoning, math, coding, and multilingual understanding.</li><li>Wrapped [Claude 3 Sonnet](https://clarifai.com/anthropic/completion/models/claude-3-sonnet), a multimodal LLM balancing skills and speed, excelling in reasoning, multilingual tasks, and visual interpretation.</li><li>Wrapped [Qwen1.5-72B-Chat](https://clarifai.com/qwen/qwenLM/models/qwen1_5-72B-chat), which leads in language understanding, generation, and alignment, setting new standards in conversational AI and multilingual capabilities, outperforming GPT-4, GPT-3.5, Mixtral-8x7B, and Llama2-70B on many benchmarks.</li><li>Wrapped [DeepSeek-Coder-33B-Instruct](https://clarifai.com/deepseek-ai/code-generation/models/deepseek-coder-33b-instruct), a SOTA 33 billion parameter code generation model, fine-tuned on 2 billion tokens of instruction data, offering superior performance in code completion and infilling tasks across more than 80 programming languages. </li><li>Clarifai-hosted [Gemma-2b-it](https://clarifai.com/gcp/generate/models/gemma-2b-it), a part of Google DeepMind's lightweight, Gemma family LLM, offering exceptional AI performance on diverse tasks by leveraging a training dataset of 6 trillion tokens, focusing on safety and responsible output. </li><li> Clarifai-hosted [Gemma-7b-it](https://clarifai.com/gcp/generate/models/gemma-7b-it), an instruction fine-tuned LLM, lightweight, open model from Google DeepMind that offers state-of-the-art performance for natural language processing tasks, trained on a diverse dataset with rigorous safety and bias mitigation measures. </li><li> Clarifai-hosted [DeciLM-7B-Instruct](https://clarifai.com/deci/decilm/models/deciLM-7B-instruct), a state-of-the-art, efficient, and highly accurate 7 billion parameter LLM, setting new standards in AI text generation. </li></ul>   |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Made enhancements to the Python SDK | <ul><li>Updated and cleaned the requirements.txt file for the SDK.</li><li>Fixed an issue where a failed training job led to a bug when loading a model in the Clarifai-Python client library, and concepts were replicated when their IDs did not match. </li></ul>  |
|![improvement](/img/improvement.jpg)|Made enhancements to the RAG (Retrieval Augmented Generation) feature|<ul><li>Enhanced the RAG SDK's `upload()` function to accept the `dataset_id` parameter.</li> <li>Enabled custom workflow names to be specified in the RAG SDK's `setup()` function.</li> <li>Fixed scope errors related to the `user` and `now_ts` variables in the RAG SDK by correcting their definition placement, which was previously inside an `if` statement.</li><li>Added support for chunk sequence numbers in the metadata when uploading chunked documents via the RAG SDK.</li></ul> |

## Community UI

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added a notification for remaining time for free deep training | <ul><li> Added a notification at the upper-right corner of the **Select a model type** page about the number of hours left for deep training your models for free.</li></ul>   |
|![new-feature](/img/new_feature.jpg)|Added feedback form | <ul><li>Added feedback form links to the header and listings pages of models, workflows, and modules. This enables registered users to provide general feedback or request a specific model.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Added a display of inference pricing per request|<ul><li> The model and workflow pages now display the price per request for both logged-in and non-logged-in users.</li></ul>|
|![improvement](/img/improvement.jpg)|Implemented progressive image loading for images|<ul><li>Progressive image loading displays low-resolution versions of images initially, gradually replacing them with higher-resolution versions as they become available. It solves page load issues and preserves image sharpness.</li></ul>|
|![improvement](/img/improvement.jpg)| Replaced spaces with dashes in IDs|<ul><li>When updating User, App, or any other resource IDs, spaces will be replaced with dashes.</li></ul>|
|![improvement](/img/improvement.jpg)|Updated links |<ul><li>Updated the text and link for the Slack community in the navbar's info popover to 'Join our Discord Channel.' Similarly, updated the link similar to it at the bottom of the landing page to direct to Discord.</li><li>Removed the "Where's Legacy Portal?" text. </li></ul>|
|![improvement](/img/improvement.jpg)|Display name in PAT toast notification|<ul><li>We've updated the account security page to display a PAT name instead of PAT characters in the toast notification.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the **Create an App** modal| <ul><li>Previously, errors displayed in the App ID section could overlap, making them difficult to read. We fixed it. </li></ul> |

## Mobile

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the mobile onboarding flow|<ul><li>Made minor updates to mobile onboarding.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved sidebar appearance| <ul><li> Enhanced sidebar appearance when folded in mobile view. </li></ul> |

## Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added an option to edit the scopes of a collaborator|<ul><li>You can now edit and customize the scopes associated with a collaborator’s role on the App Settings page. </li></ul>|

## Leaderboard

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with inconsistency in the Leaderboard sorting|<ul><li>Previously, there was an issue where the leaderboard filtering was not functioning correctly under certain situations. We fixed it. </li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with the Leaderboard where duplicate items caused confusion and usability concerns|<ul><li>Previously, duplicate items could appear in the dataset sidebar, leading to uncertainty when selecting them and confusion with the hover state. We’ve rectified this to enhance clarity and user experience.</li></ul>|

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed issues with uploading bulk inputs| <ul><li>We fixed an issue where it was not possible to upload multiple files with the same name.</li><li>We fixed an issue where it was not possible to reupload failed or canceled uploads.</li></ul>   |
|![bug](/img/bug.jpg)|Improvements made to text preview on text tiles in the Input-Manager|<ul><li>Previously, when a single string (a single word) was excessively long, it remained unbroken and did not wrap onto separate lines. Additionally, adjusting the zoom level of the grid did not affect the amount of text displayed. We fixed the issues, and the texts are now displayed as desired. </li></ul>|

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with renaming a concept in the Input-Viewer| <ul> <li>Previously, if you added a concept and renamed the concept, you could not use the highlighted input box to “filter by concept” for the new relation that was created. We fixed the issue, and you can now filter by concept using the original name as well as the new relation that was created for it.</li></ul>   |
|![bug](/img/bug.jpg)|Fixed an issue with the gearbox icon in the Input-Viewer|<ul><li>Previously, opening the gearbox popover, selecting a model or workflow, and then closing the popover resulted in the gearbox icon remaining gray, indicating that nothing was selected inside the popover. We fixed the issue, and now the gearbox icon turns blue when an item is selected within its popover.</li></ul>|
|![bug](/img/bug.jpg)| Fixed an issue with entering the same name of a concept|<ul><li>For example, previously, if you generated predictions from classifications — let’s say one of the predicted concepts is “sky.” If you edited “sky” to “wall,” a new relation was created. However, if you edited the concept name again to “sky,” a new relation was erroneously created. We fixed the issue, and now since the relation and the originally predicted concept are the same, we remove the “wall” relation. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where deleting generated annotations was possible in the Input-Viewer|<ul><li>Previously, users could delete AI-assisted annotation suggestions made using the General-detection workflow, regardless of whether they were their own or not. We fixed the issue, and now users can only delete their own annotations.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that triggered an 'unsaved' warning when navigating away from the Input-Viewer|<ul><li>This issue caused confusion as the browser mistakenly indicated unsaved changes when attempting to reload the page. We fixed it. </li></ul>|

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with AI-assisted bounding box annotations in the Labeling Tasks screen|<ul><li>Previously, when multiple AI-assisted annotations were present for the same concept in an input, clicking the check mark to accept one of them could result in the name of the selected annotation changing unexpectedly. We fixed it. </li></ul>|

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with the cancel button functionality when deleting an organization| <ul> <li>Previously, the cancel button on the dialog for deleting an organization did not function as expected. We fixed the issue. Additionally, we have added the organization name to the dialog, ensuring users know precisely what they are deleting.</li></ul>   |

## Models 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Enabled deletion of associated model assets when removing a model annotation|<ul><li>Now, when deleting a model annotation, the associated model assets are also marked as deleted.</li></ul>|

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved model selection|<ul><li>Made improvements to the model selection drop-down list on the workflow builder.</li></ul>|  
|![bug](/img/bug.jpg)|Fixed an issue with creating workflows | <ul> <li>Previously, users experienced an issue where the input node would move unexpectedly when models were dropped into the graph during the initial workflow creation process. This required users to manually adjust the location of the input node before proceeding with workflow creation. We have fixed this issue to ensure a smoother workflow creation experience.</li></ul>   |
|![bug](/img/bug.jpg)|Fixed an issue where underlines showed up for some buttons|<ul><li>Previously, certain buttons, such as those found on the workflow page, were displaying underlines unnecessarily. We fixed it. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the RAG Prompter model template|<ul><li>Previously, when creating a RAG Prompter model with a custom template and assigning it to a workflow via an API call, the API call result indicated that the Prompter model template was updated. However, the updated template was not visible in the workflow UI. We fixed the issue. </li></ul>|

## Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed issues with some modules |<ul><li>Fixed an issue that caused the [Cluster Labeler](https://clarifai.com/clarifai/data/modules/cluster-labeler) module and the [Low-dimensional visualization](https://clarifai.com/clarifai/visualize/modules/low_dimensional_viz) module not to work</li></ul>

## Others

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with the pending email verification modal|<ul><li>Previously, when an email address was long, it could extend beyond the boundary of the 'Please verify your email' modal. We fixed it.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with SSO authentication|You can log in to the Clarifai platform via an SSO method (either GitHub or Google), complete the SSO authentication steps, and get redirected to Clarifai seamlessly.<br/><br/><ul><li>Previously, if you failed to complete the SSO login within 500 seconds, the login session could expire, resulting in an 'Invalid or expired oauth request state' error. To address this, we have extended the expiration time to allow users enough time to complete any authentication steps with their SSO provider. </li></ul>|

