---
description: Changelog for Clarifai Release 9.9
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -48
pagination_next: null
pagination_prev: product-updates/changelog/release98
---

# Release 9.9

**Release Date:** October 10th, 2023

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## API

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Added inference parameters customization and flexible API key selection  | <ul><li>You can now configure [inference parameters](https://docs.clarifai.com/api-guide/predict/llms/#use-hyperparameters-to-customize-llms) such as temperature, max tokens, and more, depending on the specific model you are using, for both text-to-text and text-to-image generative tasks. This empowers you to customize and fine-tune your model interactions to better suit your individual needs.</li><li>For third-party wrapped models, like those provided by OpenAI, you can now choose to utilize their API keys as an option, in addition to using the default Clarifai keys. This flexibility allows you to integrate your preferred services and APIs into your workflow, enhancing the versatility of our platform.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where the **ListWorkflows** endpoint fetched workflows from deleted apps| <ul><li> Previously, workflows from deleted applications were fetched in the response of the **ListWorkflows** endpoint. We fixed the issue. </li></ul> |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Added ability to upload and download text and image data | <ul><li>The [SDK](https://docs.clarifai.com/python-sdk/sdk-overview) supports the following text data formats: plain text, CSV, and TSV (in roadmap).</li><li> It supports the following image data formats: JPEG, PNG, TIFF, BMP, WEBP, and GIF.</li><li> You have the flexibility to upload data from either URLs or local storage, whether it's within a single folder or spread across multiple sub-folders.</li><li> You can upload text data enriched with metadata and text classification annotations. </li><li> You can also upload image data enriched with annotations, geoinformation, and metadata information.</li><li>You can efficiently create apps designed for text mode and image mode use cases.</li><li>The SDK ensures transparent progress tracking during each upload and promptly reports any encountered errors.</li></ul> |
|![improvement](/img/improvement.jpg) |Integrated YAML workflow interfaces with proto endpoints | <ul><li> In the SDK, the workflow interfaces are now represented in YAML format, but they are seamlessly integrated with proto endpoints for efficient communication and interaction. </li></ul> |
|![improvement](/img/improvement.jpg)| Enhanced the SDK's foundational structure | <ul><li>The SDK now supports authentication only using Personal Access Tokens (PAT) and UserIDs.</li><li>We plan to provide helper utilities for rich text formatting and printing to facilitate a user-friendly interaction. </li><li>We are working to constantly add a robust error-handling system that covers various scenarios.</li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Published several new, ground-breaking models | <ul><li>Wrapped [Falcon-40B-Instruct](https://clarifai.com/tiiuae/falcon/models/falcon-40b-instruct), a causal decoder-only Large Language Model (LLM) built by TII based on Falcon-40B and fine-tuned on a mixture of Baize.</li><li>Wrapped [WizardLM-70B](https://clarifai.com/wizardlm/generate/models/wizardLM-70B-V1_0), a model fine-tuned on the Llama2-70B model using Evol+ methods; it delivers outstanding performance.</li><li>Wrapped [CodeLlama-13B-Instruct-GPTQ](https://clarifai.com/meta/Llama-2/models/codellama-13b-instruct), [CodeLlama-34B-Instruct-GPTQ](https://clarifai.com/meta/Llama-2/models/codellama-34b-instruct), and [CodeLlama-7B-GPTQ](https://clarifai.com/meta/Llama-2/models/codeLlama-7B-GPTQ). Code Llama is a family of code-focused LLMs, built upon Llama 2. These models excel at filling in code, handling extensive input contexts, and following programming instructions without prior training for various programming tasks. </li><li> Wrapped [WizardLM-13B](https://clarifai.com/wizardlm/generate/models/wizardLM-13B), an LLM fine-tuned on the Llama-2-13b model using the Evol+ approach; it delivers outstanding performance. </li> <li>Wrapped [WizardCoder-15B](https://clarifai.com/wizardlm/generate/models/wizardCoder-15B), a code-based LLM that has been fine-tuned on Llama 2 using the Evol-Instruct method and has demonstrated superior performance compared to other open-source and closed-source LLMs on prominent code generation benchmarks.</li><li>Wrapped [WizardCoder-Python-34B](https://clarifai.com/wizardlm/generate/models/wizardCoder-Python-34B), a code-based LLM that has been fine-tuned on Llama 2. It excels in Python code generation tasks and has demonstrated superior performance compared to other open-source and closed-source LLMs on prominent code generation benchmarks.</li><li>Wrapped [Phi-1](https://clarifai.com/microsoft/text-generation/models/phi-1), a high-performing 1.3 billion-parameter text-to-code language model, excelling in Python code generation tasks while prioritizing high-quality training data. </li><li>Wrapped [Phi-1.5](https://clarifai.com/microsoft/text-generation/models/phi-1_5), a 1.3 billion parameter LLM that excels at complex reasoning tasks and was trained on a high-quality synthetic dataset.</li><li>Wrapped [OpenAI's GPT-3.5-Turbo-Instruct](https://clarifai.com/openai/completion/models/gpt-3_5-turbo-instruct), an LLM designed to excel in understanding and executing specific instructions efficiently. It excels at completing tasks and providing direct answers to questions.</li><li>Wrapped [Mistral-7B-Instruct](https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct), a state-of-the-art 7.3 billion parameter language model, outperforming Llama2-13B in multiple NLP benchmarks, including code-related challenges.</li></ul>  |

## LlamaIndex

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added support for [LlamaIndex](https://www.llamaindex.ai/) | <ul>We now support integrating with the LlamaIndex data framework for various use cases, including: <br /><br /><li>Ingesting, structuring, and accessing external data for the LLMs you fine-tune on our platform. This allows you to boost the accuracy of your LLM applications with private or domain-specific data.</li><li>Storing and indexing your data for various purposes, including integrating with our downstream vector search and database services.</li><li>Building an embeddings query interface that accepts any input prompt and leverages your data to provide knowledge-augmented responses.</li></ul>  |

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **GA Released**| Added ability to fine-tune text-to-text models| <ul><li>Advanced model builders can now further customize the behavior and output of the text-to-text models for specific text generation tasks. They can train the models on specific datasets to adapt their behavior for particular tasks or domains.</li></ul> |
|**Enterprise-Preview**| Fixed an issue with the Leaderboard, which organizes models based on their evaluation results  | <ul><li> Previously, for visual detection models, the displayed metrics included classification metrics like ROC, instead of the expected metric, which is Mean Average Precision (MAP). The Leaderboard now correctly displays MAP, just like in the model viewer's version table. </li></ul> |
|![bug](/img/bug.jpg)| Introduced multi-label text classification with Hugging Face text classification pipeline  | <ul><li> Previously, there was an issue with multi-label text classification using the Hugging Face text classification pipeline. While it worked well for multi-class classification, it did not perform correctly for multi-label classification. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)| Fixed issues with the model version details page  | <ul><li>Fixed an issue that prevented the model version details page from displaying any output fields.</li><li>Fixed an issue that caused the model version details table page to crash unexpectedly.</li><li>Fixed an issue where the model version details page displayed incorrect parameter values when switching between different model versions.</li><li>Fixed an issue where the model version details page displayed fields irrelevant to the specific model type. Unnecessary fields unrelated to the selected model type are now not visible. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the Model Viewer page incorrectly rotated images in specific community apps | <ul><li> Previously, when images with a portrait orientation (height greater than width) were submitted to some apps, the predicted detection boxes appeared misaligned or incorrect. The Model Viewer page now correctly rotates images with portrait orientation, aligning detection boxes accurately for improved user experience and detection accuracy. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the model ID disappeared after selecting the `Base embed_model` in the model creation process | <ul><li> Previously, users encountered an issue where their previously entered model ID would disappear upon selecting a base embed model when creating a new model. We fixed the issue. </li></ul> |

## Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Removed collaborative applications from the apps drop-down list within the **Install Module** modal when an org user is selected  | <ul><li>Since organization users do not have collaborative apps or engage in collaborations, we have optimized the interface by removing collaborated apps in the **Install Module** modal specifically for this user group. This also fixed the app failure bug.</li></ul> |
|![improvement](/img/improvement.jpg)| Enhanced the default app selection in the **Install Module** modal | <ul><li>The **Install Module** modal now automatically selects your current app as the default destination to install your chosen module. </li></ul> |
|![improvement](/img/improvement.jpg) | Improved the search functionality for modules  | <ul><li> This refinement in the search feature offers a more streamlined and productive experience when looking for specific modules or related content.</li></ul> |
| ![improvement](/img/improvement.jpg)| Introduced a handy addition to the module's viewer page—an easy-to-use copy icon | <ul><li> You can now click the copy icon located in the **Latest Version ID** section to swiftly obtain the complete latest version URL for a module. This URL allows you to expedite the module installation process for your application.  </li></ul> |

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Added support for video inputs in Input-Manager  | <ul><li> You can now view and manage video inputs directly within the Input-Manager. This new feature provides you with greater flexibility and control over your video assets, enhancing your overall experience with our platform.</li></ul> |
|![new-feature](/img/new_feature.jpg)| Added ability to filter inputs by annotation user and annotation status in Input Manager | <ul>We introduced two new filter options in the Input-Manager: <br /><br /><li>Labeler filter —Allows you to filter inputs that were annotated by the selected user.</li><li>Status filter —Allows you to filter inputs that have annotations that match the selected status.</li></ul> |
|![bug](/img/bug.jpg)| Fixed checkbox behavior in the input gallery screen  | <ul><li> Previously, when you switched from Object Mode to Input Mode, the checkbox for selecting all items would remain checked, causing confusion. We fixed the issue.</li></ul> |
|![bug](/img/bug.jpg)|Fixed clear button functionality for input type filters | In the Input-Manager, you can filter inputs by their types, and the clear button is designed to unselect all filtering options. <br /> <br /> <ul><li> Previously, the clear button was not functioning correctly after applying filters based on input types. You can now utilize it to reset and remove all applied filters.</li></ul> |
|![bug](/img/bug.jpg)| Enabled rank search to be compatible with other filters | <ul><li> Previously, there was an issue that prevented other filters from being applied when conducting a rank search. You can now apply rank search in conjunction with other filters, enhancing the effectiveness of your search experience. </li></ul> |
|![bug](/img/bug.jpg)|Fixed query timeout issue with metadata searches| <ul><li> Previously, including the "country_code":"US" metadata in your search query led to timeouts. However, when executing the same query without the "country_code":"US" metadata, it completed successfully in approximately 4 seconds. You can now perform your query, even with the "country_code":"US" metadata included, and achieve successful results without experiencing timeouts.</li></ul> |
|![bug](/img/bug.jpg)| Eliminated duplicate requests in the Input-Manager's screen  | <ul><li>Previously, an issue caused duplicate or even triple requests. It occurred when loading the page with or without a `searchId` in the URL, which resulted in unnecessary and excessive requests. Extra requests are no longer generated.</li></ul> |
|![bug](/img/bug.jpg)| Improved the behavior of the input upload job monitor in the Input-Manager | If you upload inputs on the Input-Manager, a small sidebar window appears at the bottom-right corner of the screen, providing you with real-time status updates on the upload process. There is also a checkbox in the pop-up window, allowing you to tailor your monitoring preferences to better suit your needs. <br /><br /><ul><li>If the checkbox is checked, the upload monitor will initiate polling. It will also immediately update the input list as new inputs become available.</li><li>If the checkbox is unchecked, polling will continue. However, the input list will only be updated once ALL jobs have been completed. Previously, there was an issue where unchecking the checkbox would halt polling, preventing updates.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue with automatic refresh of the input gallery in Input-Manager after performing bulk edit actions  | Previously, there was an issue that hindered the automatic refresh of the input gallery after performing bulk deleting or labeling actions. These improvements ensure that filters accurately reflect the changes made. <br /><br /><ul><li>Previously, bulk deleting of inputs didn't show live updates in the input gallery. We fixed this issue.</li><li>Previously, bulk labeling of the last remaining unlabeled inputs didn't yield the expected results. We fixed this issue, ensuring that these inputs are correctly labeled after your bulk labeling action.</li></ul> |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Added ability to view and tag text inputs within the Input-Viewer  | <ul><li>We have designed a comprehensive UI that allows you to interactively create and manage annotations for text inputs. </li></ul> |
|![bug](/img/bug.jpg)| Improved keyboard shortcut functionality in Input-Viewer  | In the Input-Viewer, you can use keyboard shortcuts (hotkeys), such as H, V, P, and B, to switch between annotation tools. <br /><br /> <ul><li>Previously, when opening the model selector or any other element with a popover while in the Input-Viewer, typing any of the hotkeys would unintentionally change tools in the background. We fixed the issue, and the hotkeys do not now trigger events that affect tools in the background.</li></ul> |
|![bug](/img/bug.jpg)| Enabled error-free transition to annotation mode in Input-Viewer| <ul><li>Previously, there was an error immediately after switching to annotation mode in the Input-Viewer. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)| Fixed issue preventing collaborators from creating annotations in Input-Viewer  | <ul><li> Collaborators can now actively participate in the annotation process, contributing to a more collaborative and efficient workflow. </li></ul> |
|![bug](/img/bug.jpg)| Improved the Input-Viewer's URL handling to ensure a more seamless navigation experience  | <ul><li> Previously, there was an issue where the input ID part of the route parameters was not utilized effectively for rendering, leading to undesired redirects. We fixed the issue.</li></ul> |

## Invitations

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| You can now seamlessly review and accept pending invitations directly within the Portal, eliminating the need to rely solely on email for this purpose| <ul><li> These invitations could be for various actions, such as app collaboration, organization enrolment, or task participation. This is valuable for both our SaaS offering and our on-premise deployments, as it caters to scenarios where email support may be limited or unavailable. </li></ul> |


## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with displaying incorrect menu items in the mobile view | <ul><li>Previously, when you switched from your personal user account to an organization account by clicking your profile icon at the top-right corner of the navigation menu bar, the drop-down list displayed your personal details instead of the organization’s information. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where an organization contributor could not access public workflows | <ul><li> Organization contributors (organization members) can now fetch a complete list of all public workflows without any hindrances.</li></ul> |
|![bug](/img/bug.jpg)| Enabled organization contributors to view available destination apps in **Install Module** Modal | <ul><li>We fixed an issue that previously hindered organization contributors from viewing the list of available destination apps within the **Install Module** modal when attempting to install a module. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue with searching for organization members | <ul><li> Previously, when you used multiple parameters, such as both first name and last name together, to search for members whose first name or last name matched the query text, it could result in an error within the response. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where collaborators with the organization contributor role failed to list model evaluations  | <ul><li>Previously, collaborators trying to list model evaluations encountered an error message stating "Insufficient scopes", despite the expectation that the role would grant them access to view evaluations. We fixed the issue.  </li></ul> |

## Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Enhanced App Settings page to display details of collaborators | <ul><li> Now, you can easily access and view the details of your collaborators, including their ID, first and last name, email, job role, and the date they were added to the app. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the app thumbnails were not cached properly | <ul><li> Previously, there was an issue where the images of uploaded app thumbnails on the App Overview page and on the drop-down sidebar list, which provides quick access to your available apps, occasionally appeared as blank or missing. We fixed the issue. </li></ul> |

## Login/Logout and Signup Flow

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Introduced modal pop-ups for login and signup, and for various scenarios where redirects were previously employed  | <ul><li>We have retained dedicated login and signup pages while introducing modal windows for these actions. You can now access login and signup functions directly from your active page, providing quick and easy access to these essential features.</li><li>For operations like "Use Model," "Use Workflow," "Install Modules," and more, we have replaced the redirection process with modal pop-ups. This eliminates the extra step and ensures a smoother user journey.</li></ul> |
| ![bug](/img/bug.jpg)| Fixed an issue with the reCAPTCHA system  | <ul><li> We improved the reCAPTCHA system to offer users a notably smoother and more user-friendly experience.</li></ul> |

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to submit labeled inputs for some labeling tasks | <ul><li> Previously, you could not submit labeled inputs for certain labeled tasks. When working on some labeling tasks, if you loaded the input, selected the relevant concepts, and attempted to submit your labeled input, you could encounter an error. We fixed the issue. </li></ul> |

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with processing videos using the Universal workflow | <ul><li>You can now confidently process videos with the Universal workflow without encountering any hindrances or issues.  </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue with editing a workflow | <ul><li>Previously, while editing any workflow, the model version displayed "No results found," which was inconsistent with the initial workflow creation experience. The model version behavior now matches what is displayed when initially creating a workflow. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where it was not possible to copy a workflow without first changing its ID | <ul><li>Previously, you could successfully copy a workflow only after changing the copied workflow ID. You can now copy an existing workflow, even if you keep the same workflow name during the copying process, such as from "(workflow name)-copy" to "(workflow name)-copy." </li></ul> |
|![bug](/img/bug.jpg)| Removed the default/base workflow from "Use Model" modal  | To use a model in a workflow, go to the model’s viewer page, click the “Use Model” button at the upper-right corner of the page, select the “Use in a Workflow” tab, and select a destination app and its base workflow. You’ll be redirected to the workflow editor page. <br /><br /><ul><li>Previously, if you tried to update the workflow in the editor page, you could encounter an error. The issue arises because the app's default/base workflow cannot be edited, but this limitation is communicated to the user late only after they've made changes to the workflow.  We fixed the issue by graying out or excluding the base workflow option when users attempt to use a model in an existing base workflow.</li></ul> |


## Markdown Search

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added ability to perform text-based searches within the markdown notes of apps, models, workflows, modules, and datasets  | <ul> <li>For instance, when you visit https://clarifai.com/explore/models and input "detecting the presence"  in the search field, the results will include any relevant resource where the phrase "detecting the presence" is found within the markdown notes. This feature enhances search functionality and allows for more precise and context-aware discovery of resources based on the content within their markdown notes. </li></ul> |

## Cover Image

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added cover image support for various types of resources, including apps, datasets, models, workflows, and modules | <ul><li> This feature adds a visually engaging element to your resources, making them more appealing and informative. You can also delete the image if you want to.  </li></ul> |