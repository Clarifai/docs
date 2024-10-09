---
description: Changelog for Clarifai Release 10.9
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -60
pagination_next: null
pagination_prev: product-updates/changelog/release108
draft: false
---

# Release 10.9

**Release Date:** October 4th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Clarifai Product Roadmap

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Introduced new public roadmap  | <ul> <li> We've published a public roadmap to give you a view of our upcoming plans and to gather your valuable feedback. You can explore the features we're considering, vote for the ones you want most, or submit new ideas </li> <li>  For a sneak peek at what's coming, such as Compute Orchestration, check out our public roadmap [here](https://portal.productboard.com/bd1rxfuyfbu6vqnmkva3mprx/tabs/1-under-consideration). </li></ul>  |  

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Introduced Clarifai’s Control Center  | <ul> <li>It is an all-in-one interface that provides centralized visibility into your utilization of our platform during a selected period.  </li> <li> Learn more about it [here](https://docs.clarifai.com/portal-guide/control-center). </li></ul>  |   

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Published new models  | <ul><li>Published [OpenAI o1-preview](https://clarifai.com/openai/chat-completion/models/o1-preview), a reasoning-focused AI model designed for complex problem-solving in math, coding, and science. </li><li> Published [OpenAI o1-mini](https://clarifai.com/openai/chat-completion/models/o1-mini), a reasoning-focused LLM designed for complex problem-solving in math, coding, and science.</li> <li>Published [Llama-3.2-11B-Vision-Instruct]( https://clarifai.com/meta/Llama-3/models/llama-3_2-11b-vision-instruct), a multimodal LLM by Meta designed for visual reasoning, image captioning, and VQA tasks, supporting text and image inputs with 11B parameters. </li> <li>Published [Llama-3.2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3_2-3b-instruct), a multilingual, instruction-tuned LLM optimized for dialogue and text generation tasks. </li></ul> |   

## Python SDK​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| [**Private Preview**](https://docs.clarifai.com/product-updates/changelog/release-types)  | Introduced enhanced model upload capabilities | Introduced a new method for model uploads to our platform. This integration includes: <br/><br/><ul><li>A new, more efficient model upload process utilizing Clarifai's runners.</li> <li> Migration of relevant files from runners-python to appropriate locations within the clarifai-python repository. </li><li> Learn more about it [here](https://github.com/Clarifai/examples/tree/main/models/model_upload).</li></ul>  |   
| ![improvement](/img/improvement.jpg) | Enhanced model upload capabilities with HuggingFace integration and concept handling | We've expanded our model upload functionality to improve integration with HuggingFace and enhance concept handling: <br/><br/> <ul> <li> Introduced a HuggingFaceLoader utility for seamless checkpoint downloads and concept fetching from HuggingFace for classification and detection models. </li> <li> Implemented new methods in `model_upload` for efficient checkpoint downloads and concept handling. </li> <li> Updated the model upload process to use the new HuggingFaceLoader for HuggingFace-related models. </li> <li> Changed the command-line interface to use `--model_path` instead of `-folder` for improved clarity. </li> </ul>|

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)   |  Added "Collaborations" as a top-level link | <ul><li> We’ve introduced "Collaborations" as a top-level link, similar to "My Apps" and "Community," making it easier for users to access apps they’ve been invited to collaborate on. </li></ul> | 
| ![improvement](/img/improvement.jpg) | Made some visual enhancements  | <ul><li> We fixed CSS artifacting issues in the app creation input fields, improving the visual experience. </li><li> We fixed an issue where the password field in the sign-up modal was not displaying correctly. </li> <li> We improved tables across the platform, including updating header names to use Capital Case and resolving table height issues for a more consistent and polished appearance.</li> <li> We fixed a visual issue where the input field border in the "Create an App from a template" modal was displayed incorrectly. </li> <li> We fixed an issue where the icon for an app's cover image was displayed incorrectly in the app's sidebar. </li> <li> We fixed an issue where the "Template" tag, which identifies template apps on the "My Apps" listing page, was not displaying correctly. </li> <li> We fixed an issue where the validation text, which is shown when a user provides incorrect input values in the sign-up form, overlapped and obstructed other fields in the form. </li> </ul> |  
| ![bug](/img/bug.jpg) | Fixed an issue with saving users' contact information  |<ul><li> Previously, a bug during account creation caused contact information to be captured incorrectly. Even attempts to update the information on the account settings page would fail. We fixed it. </li></ul>   |   
|![bug](/img/bug.jpg) | Fixed issues with the user-guided tour  | <ul><li> We fixed some issues with the application guided tour flow for onboarding new users. Primarily, the guided tour is now only shown to logged-in users who have never used our platform before. Also, Org Users are not shown the guided tour because they already went through this process via their personal accounts. </li> </ul> |  
| ![bug](/img/bug.jpg) | Fixed an issue with listing invited members to an organization | <ul><li> Previously, Org Contributors were able to view the pending members tab. Since inviting members is an Admin-only function, we now restrict Org Contributors, Org Users, and Team Contributors from accessing the pending invitations list. </li></ul> | 
| ![bug](/img/bug.jpg) | Fixed an issue with inviting users to an organization  | <ul><li> Previously, users could not accept invitations to join an organization if the invitation was sent to an email with a different case (upper or lower) than the one associated with their account. We’ve now made email addresses case-insensitive when sending organization invitations. </li></ul> |   
| ![bug](/img/bug.jpg) | Fixed an issue with pricing display  | <ul><li> We fixed an issue where the pricing information for base workflows was missing. The pricing information is now displayed in the upper-right section of a workflow page. </li></ul> | 
|![bug](/img/bug.jpg)  | Fixed an issue with user registration  | <ul><li> Previously, some users were able to create an account without consenting to the terms of service. Now, the "Create account" button remains disabled until the user consents by checking the terms of the service box. </li></ul> |  

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Introduced workflow versioning   | <ul> <li> You can now create workflow versions that track the changes of models, operators, agents, prompts, and their configurations within the pipeline nodes.  </li> </ul> |
| ![bug](/img/bug.jpg)  | Fixed RAG Prompter modification issues in public workflows  | <ul> <li> Previously, modifying a RAG Prompter model in a public workflow would unexpectedly create a new private model and version, causing save failures due to the incompatibility of private models in public workflows. This also led to workflow execution errors. We've resolved this by ensuring that modifications to existing nodes reuse the original model, either creating a new version or updating the existing one as appropriate. This fix maintains workflow integrity, prevents unintended privatization, and eliminates related execution errors.</li></ul>  |   
| ![bug](/img/bug.jpg)  | Fixed compatibility issue between Image Cropper and Multimodal-to-Text models in Workflows  | <ul> <li> Previously, when using an Image Cropper with a Multimodal-to-Text model in a workflow, the cropped image regions were not being properly processed. This was due to the Multimodal-to-Text model being incorrectly configured with a single 'Any' input type, causing the workflow runner to skip the cropped regions. We've addressed this by updating the model's input configuration to correctly specify [image, text] input fields. This fix ensures that all cropped image regions are now properly processed by the Multimodal-to-Text model, improving the accuracy and functionality of workflows using these components. </li></ul>  |  
| ![bug](/img/bug.jpg)  | Fixed an issue with the Concept thresholder  | <ul> <li> We fixed an issue where the concept thresholder was displaying concept ID while selecting concepts instead of concept names. Now, this issue is fixed, and it shows concept names correctly. </li></ul>  |  
| ![bug](/img/bug.jpg)  |  Fixed an issue with the RAG-prompter metadata field update  | <ul> <li> Previously, when updating metadata, the old metadata was merged with the new metadata instead of being overwritten. We fixed the issue, now metadata gets correctly overwritten instead of being merged. </li></ul>  |  
| ![bug](/img/bug.jpg)  | Fixed issues with _max_results_ and _min_score_ sliders and metadata input in the workflow builder page  | Previously, the _max_results_ slider allowed decimal inputs and had an inconsistent maximum value, while the _min_score_ slider's range was incorrect. Additionally, the metadata field was rejecting valid JSON input. We fixed these issues as follows: <br/> <br /> <ul> <li> **Max Results:** The slider now only accepts whole numbers and correctly allows values up to 128, instead of being limited to 100. </li> <li> **Min Score:** We've adjusted the range to be between 0 and 1, with a step size of 0.01, ensuring more precise and appropriate score selection. </li> <li> **Metadata:** The system now properly accepts and processes valid JSON input in the metadata field, allowing users to input structured data as intended. </li></ul>  |  

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)  | Fixed an issue with the model builder page  | <ul> <li> Previously, when users attempted to expand the Output Settings section while viewing model version details, a client-side exception would occur, showing the error: _"Application error: a client-side exception has occurred (see the browser console for more information)."_ This would crash the page. Now, the issue has been resolved, and users can seamlessly expand the _Output Settings_ section. </li></ul>  |  
