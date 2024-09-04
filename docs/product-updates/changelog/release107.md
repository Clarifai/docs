---
description: Changelog for Clarifai Release 10.7
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -58
pagination_next: product-updates/changelog/release108
pagination_prev: product-updates/changelog/release106
draft: false
---

# Release 10.7

**Release Date:** August 6th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Llama 3.1 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Introduced the Llama 3.1 template  | <ul><li>You can now use the Llama 3.1 training template to fine-tune text-to-text models for classification and generation tasks. We provide the 8B version, which you can use for extended context, instruction-following, and advanced applications.</li> <li>Learn more about it [here](https://docs.clarifai.com/portal-guide/model/deep-training/text-templates#llama-31).</li></ul>   |   

##  New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_ | <ul><li>Published [Qwen1.5-7B-Chat](https://clarifai.com/qwen/qwenLM/models/qwen1_5-7b-chat), an open-source, multilingual LLM with 32K token support, excelling in language understanding, alignment with human preferences, and competitive tool-use capabilities.</li><li>Published [Qwen2-7B-Instruct](https://clarifai.com/qwen/qwenLM/models/qwen2-7b-chat), a state-of-the-art multilingual language model with 7.07 billion parameters, excelling in language understanding, generation, coding, and mathematics, and supporting up to 128,000 tokens. </li><li>Published [Whisper-Large-v3](https://clarifai.com/openai/whisper/models/whisper-large-v3), a Transformer-based speech-to-text model showing 10-20% error reduction compared to Whisper-Large-v2, trained on 1 million hours of weakly labeled audio, and can be used for translation and transcription tasks. </li><li>Published [Llama-3-8b-Instruct-4bit](https://clarifai.com/meta/Llama-3/models/llama-3-8b-instruct-4bit), an instruction-tuned LLM optimized for dialogue use cases. It can outperform many of the available open source chat LLMs on common industry benchmarks. </li><li>Published [Mistral-Nemo-Instruct](https://clarifai.com/mistralai/completion/models/mistral-nemo-instruct-2407), a state-of-the-art 12B multilingual LLM with a 128k token context length, optimized for reasoning, code generation, and global applications. </li><li>Published [Phi-3-Mini-4K-Instruct](https://clarifai.com/microsoft/text-generation/models/phi-3-mini-4k), a 3.8B parameter small language model offering state-of-the-art performance in reasoning and instruction-following tasks. It outperforms larger models with its high-quality data training.</li><li>Published [GPT-4o-mini]( https://clarifai.com/openai/chat-completion/models/gpt-4o-mini), an affordable, high-performing small model excelling in text and vision tasks with extensive context support. </li><li>Published [Llama 3.1-8b-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3_1-8b-instruct), a multilingual, highly capable LLM optimized for extended context, instruction-following, and advanced applications. </li></ul>   | 

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added patch operations   | <ul> <li>Introduced patch operations for input annotations and concepts. </li> <li> Introduced patch operations for apps and datasets.</li></ul>   | 
| ![improvement](/img/improvement.jpg) | Improved the RAG SDK   | <ul> <li> We enabled the RAG SDK to use environment variables for enhanced security, flexibility, and simplified configuration management. </li> </ul>  | 
| ![improvement](/img/improvement.jpg) | Improved the logging experience    | <ul> <li> Enhanced the logging experience by adding a constant width value to rich logging.</li>  </ul> |
| ![bug](/img/bug.jpg)| Fixed an issue with the dataset export feature | <ul><li>We fixed an issue with the feature using a class input session with an authentication header when downloading the dataset export. </li> </ul> |  
|![bug](/img/bug.jpg) |Fixed an issue with Python SDK's visual search functionality  | <ul><li>Previously, the Python SDK's visual search functionality returned duplicate results. We fixed the issue, and now the search and ranking results for image searches are returned correctly without duplicates.</li></ul>  |

## Organization Settings and Management​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Introduced a new **Organization User** role | <ul><li> This role has access privileges similar to those of an **Organization Contributor** for all apps and scopes. However, it comes with view-only permissions without create, update, or delete privileges.</li></ul>  | 
|![improvement](/img/improvement.jpg) |Implemented restrictions on the ability to add new organizations based on the user's current organization count and feature access |<ul><li>If a user has created one organization and does not have access to the multiple organizations feature, the "Add an organization" button is now disabled. We also display an appropriate tooltip to them. </li><li> If a user has access to the multiple organizations feature but has reached the maximum creation limit of 20 organizations, the "Add an organization" button is disabled.  We also display an appropriate tooltip to them. </li> </ul> |

## Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved the functionality of the [Hyperparamater Sweeps](https://clarifai.com/clarifai/ml/modules/module-hyperparameter_sweeps) module   | <ul><li> You can now use the module to effectively train your model on a range and combinations of hyperparameter values. </li></ul> | 

## Docs Refresh

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Made significant improvements to our documentation [site](https://docs.clarifai.com/) |<ul> <li> Upgraded the site to use Docusaurus version 3.4.</li> <li> Other enhancements include aesthetic updates, a more intuitive menu-based navigation, and a new comprehensive API reference guide.</li> </ul>| 

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Enabled deletion of associated model assets when removing a model annotation| <ul><li>Now, when deleting a model annotation, the associated model assets are also marked as deleted.</li></ul> |

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Improved the functionality of the [Face workflow](https://clarifai.com/clarifai/main/workflows/Face) | <ul><li> You can now use the Face workflow to effectively generate face landmarks and perform face visual searches within your applications.</li></ul>   |    

## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Fixed issues with Python and Node.js SDK code snippets  |If you click the “Use Model” button on an individual model’s page, the “Call by API / Use in a Workflow” modal appears. You can then integrate the displayed code snippets in various programming languages into your own use case. <br/><br/><ul> <li> Previously, the code snippets for Python and Node.js SDKs for image-to-text models incorrectly outputted concepts instead of the expected text. We fixed the issue to ensure the output is now correctly provided as text.  </li> </ul>| 
|![improvement](/img/improvement.jpg)|Added support for non-ASCII characters|<ul><li> Previously, non-ASCII characters were entirely filtered out from the UI when creating concepts. We fixed this issue, and you can now use non-ASCII characters across all components. </li></ul> |
| ![improvement](/img/improvement.jpg)  | Improved the display of concept relations  | <ul> <li>Concept relations are now shown next to their respective concept names, providing clearer and more immediate context. </li> </ul>|
| ![bug](/img/bug.jpg) | Fixed an issue with delay and redirection during login | <ul><li> Previously, a modal login form would appear when attempting to log in at https://clarifai.com/explore. However, a second login form would also appear, causing confusion with the presence of two forms. We fixed the issue, ensuring a smoother and more intuitive login experience. </li> </ul> |
| ![bug](/img/bug.jpg)  |Fixed an issue with "View inputs" link on smaller screens   | <ul> <li> Previously, the "View inputs" link on the App Overview page could exceed its boundary on smaller screens, particularly if the number of inputs in the app exceeded 1,000. We fixed this issue to ensure the link now properly adjusts to screen size, maintaining its alignment and readability.</li> </ul> |   

## Auto-Annotation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed some bugs related to the auto-annotation feature  | <ul><li>Fixed an issue where some inputs were not labeled during the auto-annotation process. </li><li>Fixed an issue where auto-generated concept IDs were incorrectly displayed instead of concept names. </li></ul>   |   


## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with the labeling tasks table  | <ul><li> Previously, the date column was not appearing in the table for listing labeling tasks. The date column now correctly displays in the table, providing the necessary date information for each labeling task. </li></ul>   | 
| ![bug](/img/bug.jpg) | Fixed an issue where an unnecessary modal popup appeared on the tasks review screen | <ul> <li> Previously, when you created a new task, labeled it with appropriate concepts, and clicked the **Review** button to navigate to the review screen, a modal stating "No task assignments" could immediately appear. We fixed this issue, and the modal no longer appears, ensuring a smoother review process.</li></ul>  |
|![bug](/img/bug.jpg) | Fixed an issue with annotation display on the labeling tasks list  | <ul> <li> Previously, annotations were displayed with annotation IDs instead of names on the labeling tasks list. We fixed this issue, and annotations are now correctly displayed with their names.</li> </ul> |
| ![bug](/img/bug.jpg) |Fixed an issue with creating a dataset version from task page|<ul> <li> Previously, when creating a dataset version from the task page for an auto-annotation task that had been reviewed, the version included labels rejected during the review process. We fixed this issue. Now, when creating a dataset version from the task page, the current state of inputs is accurately considered, and any rejected labels or inputs are excluded from the version.</li> </ul>  |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with bounding box labeling on the Input-Viewer screen  | <ul><li> Previously, during labeling with a bounding box on the single Input-Viewer screen, the bounding box could sometimes start from the wrong position, requiring users to adjust it manually. We fixed this issue, ensuring a smoother labeling experience.</li></ul>   |   
