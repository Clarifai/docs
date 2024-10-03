---
description: Changelog for Clarifai Release 10.9
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -60
pagination_next: null
pagination_prev: product-updates/changelog/release108
draft: true
---

# Release 10.9

**Release Date:** October 1st, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Introduced Clarifai’s Control Center  | <ul> <li>It is an all-in-one interface that provides centralized visibility into your utilization of our platform during a selected period.  </li> <li> Learn more about it [here](https://docs.clarifai.com/portal-guide/control-center). </li></ul>  |   

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Published new models  | <ul><li>Published [OpenAI o1-preview](https://clarifai.com/openai/chat-completion/models/o1-preview), a reasoning-focused AI model designed for complex problem-solving in math, coding, and science. </li><li> Published [OpenAI o1-mini](https://clarifai.com/openai/chat-completion/models/o1-mini), a reasoning-focused LLM designed for complex problem-solving in math, coding, and science.</li> <li>Published [Llama-3.2-11B-Vision-Instruct]( https://clarifai.com/meta/Llama-3/models/llama-3_2-11b-vision-instruct), a multimodal LLM by Meta designed for visual reasoning, image captioning, and VQA tasks, supporting text and image inputs with 11B parameters. </li> <li>Published [Llama-3.2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3_2-3b-instruct), a multilingual, instruction-tuned LLM optimized for dialogue and text generation tasks. </li></ul> |   

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

